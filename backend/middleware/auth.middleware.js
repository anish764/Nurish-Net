const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");
const User = require("../models/user.model");
const httpErrors = require("http-errors");

const protectedRoute = asyncHandler(async (req, res, next) => {
  let token;
  if (
    req.headers.authorization && // Check if request headers contain authorization key
    req.headers.authorization.startsWith("Bearer") // check if starts with "Bearer" (Bearer token)
  ) {
    try {
      token = req.headers.authorization.split(" ")[1]; // Extract the access token
      const verifyJWT = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET); // verify the access token
      req.user = await User.findById(verifyJWT.userId).select("-password"); // save user details except password
      next();
    } catch (error) {
      throw httpErrors.Unauthorized("Request not authorized"); // here error is thrown because the access token is invalid
    }
  }
  if (!token) {
    throw httpErrors.Unauthorized("Request not authorized, no token"); // here error is thrown because there is no access token in request headers
  }
});

module.exports = {
  protectedRoute,
};
