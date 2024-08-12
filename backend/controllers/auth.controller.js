const authValidation = require("../helpers/joi_validation/auth.validation_schema");
const asyncHandler = require("express-async-handler");
const User = require("../models/user.model");
const RefreshToken = require("../models/token.model");
const httpErrors = require("http-errors");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const moment = require("moment");
const {
  calculateBMI,
} = require("../helpers/calc_functions/calculations.helper");

// Access token which should be stored in client to authorize user (expires in 1 hour)
const generateAccessToken = (user) => {
  return jwt.sign({ userId: user._id }, process.env.ACCESS_TOKEN_SECRET, {
    expiresIn: 1800,
  });
};

// refresh_token which should be stored in client to refresh/rotate access_token (expires in 1 day)
const generateRefreshToken = async (user) => {
  const token = jwt.sign(
    { userId: user._id },
    process.env.REFRESH_TOKEN_SECRET,
    {
      expiresIn: "1d",
    }
  );
  // while signing and creating a refresh token also save it in our db so that we can further use it to rotate access tokens
  await RefreshToken.create({ userId: user._id, refreshToken: token }).catch(
    (error) => {
      throw httpErrors.InternalServerError(
        "An error occured while saving refresh token to MongoDB Server"
      );
    }
  );
  return token;
};

// METHOD: POST
// ROUTE: /auth/register
const registerUser = asyncHandler(async (req, res) => {
  try {
    // Validate user schema
    const userDetails =
      await authValidation.userRegistrationSchema.validateAsync(req.body);
    // Check if user already exists
    const userExists = await User.find({ email: userDetails.email });
    if (userExists?.length) {
      res.status(409);
      throw httpErrors.Conflict(`Email ${userDetails.email} already in use`);
    }
    // hash password to save in DB
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(userDetails.password, salt);
    // calculate BMI(Body Mass Index)
    const bmi = calculateBMI(userDetails.height, userDetails.weight);
    // 88.362 + (13.397 x weight in kg) + (4.799 x height in cm) - (5.677 x age in years)
    const bmr = 88.362 + 13.397 * userDetails.weight + 4.799 * userDetails.height - 5.677 * userDetails.age;
    // Create new user
    const user = await User.create({
      firstName: userDetails.firstName,
      lastName: userDetails.lastName,
      email: userDetails.email,
      password: hashedPassword,
      receiveMails: userDetails.receiveMails,
      weight: userDetails.weight,
      height: userDetails.height,
      age: userDetails.age,
      bmi: bmi,
      bmr: bmr,
    });
    if (user) {
      res.status(201).send({
        error: false,
        data: {
          userDetails: {
            _id: user._id,
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            height: user.height,
            weight: user.weight,
            bmi: user.bmi,
          },
          message: "User created successfully",
        },
      });
    } else {
      res.status(500).send({
        error: true,
        data: {
          message: "Something went wrong while registering user",
        },
      });
    }
  } catch (error) {
    let errorObj = {
      error: true,
      data: {
        message: error.message,
      },
    };
    if (error?.isJoi) {
      res.status(422); // if the error has been occured due to schema validation then set the status to "Unprocessable Entity"
    }
    res.send(errorObj);
  }
});

// METHOD: POST
// ROUTE: /auth/login
const loginUser = asyncHandler(async (req, res) => {
  try {
    const userDetails = await authValidation.userLoginSchema.validateAsync(
      req.body
    );
    const user = await User.findOne({ email: userDetails.email });
    if (!user) {
      res.status(404);
      throw httpErrors.NotFound(
        "User not found, Please check your Email and try again"
      );
    }
    if (await bcrypt.compare(userDetails.password, user.password)) {
      const access_token = generateAccessToken(user);
      const refresh_token = await generateRefreshToken(user);
      
      res
        .cookie("refresh_token", refresh_token, {
          secure: process.env.NODE_ENV == "production",
          signed: true,
          httpOnly: true,
          sameSite: true,
          expires: new Date(moment().endOf("day")),
        }) // send refresh_token as cookie which is http only and access_token along with the response body
        .send({
          error: false,
          data: {
            access_token, 
            userDetails: {
              _id: user._id,
              firstName: user.firstName,
              lastName: user.lastName,
              email: user.email,
              bmi: user.bmi,
              bmr: user.bmr,
              age: user.age,  
              height: user.height,
              weight: user.weight,
            },
          },
        });
    } else {
      res.status(403);
      throw httpErrors.Forbidden("Invalid Password, please try again");
    }
  } catch (error) {
    let errorObj = {
      error: true,
      data: {
        message: error.message,
      },
    };
    if (error?.isJoi) {
      res.status(422); // same as above
    }
    res.send(errorObj);
  }
});

// METHOD: POST
// ROUTE: /auth/refresh
const rotateToken = asyncHandler(async (req, res) => {
  try {
    const refreshToken = req.signedCookies?.refresh_token; // get the refresh_token sent by the client
    const token = await RefreshToken.findOne({ refreshToken: refreshToken }); // check if such token exists in our DB
    if (!token) {
      res.status(400);
      throw httpErrors.BadRequest("Invalid refresh token"); // throw error if token does not exist in our DB
    }
    const verifyToken = jwt.verify(
      refreshToken,
      process.env.REFRESH_TOKEN_SECRET // Verify the refresh token
    );
    const userId = verifyToken.userId; // get the userId from the refresh token
    const user = await User.findById(userId); // check if a user with that id exists, if not throw an error
    if (!user) {
      res.status(400);
      throw httpErrors.BadRequest("Invalid refresh token");
    }
    const access_token = generateAccessToken(user); // create new access and refresh token
    const refresh_token = await generateRefreshToken(user);
    await token.delete(); // delete the old refresh token so that it cannot be used again by anyone
    res
      .cookie("refresh_token", refresh_token, {
        secure: process.env.NODE_ENV == "production",
        signed: true,
        httpOnly: true,
        sameSite: true,
        expires: new Date(moment().endOf("day")),
      }) // send newly created refresh_token as cookie which is http only and access_token along with the response body
      .send({
        error: false,
        data: {
          access_token,
          userDetails: {
            _id: user._id,
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
          },
        },
      });
  } catch (error) {
    let errorObj = {
      error: true,
      data: {
        message: error.message,
      },
    };
    if (error?.isJoi) {
      res.status(422); // same as above
    }
    res.send(errorObj);
  }
});

module.exports = {
  registerUser,
  loginUser,
  rotateToken,
};
