const asyncHandler = require("express-async-handler");
const Diet = require("../models/diet.model");
const joiDiet = require("../helpers/joi_validation/diet.validation_schema");
const httpErrors = require("http-errors");

// METHOD: POST
// ROUTE: /diet/add-diet
const addDiet = asyncHandler(async (req, res) => {
  try {
    const dietDetails = await joiDiet.addDietSchema.validateAsync(req.body); // validate the request body
    const dietExists = await Diet.find({ name: dietDetails.name }); // check if the item is already included in the user's diet
    if (dietExists?.length) {
      res.status(409);
      throw httpErrors.Conflict("This item is already included in your diet");
    }
    const diet = await Diet.create({
      userId: req.user._id,
      ...dietDetails,
    }); // create the diet and make a reference to the user by their id
    if (diet) {
      res.send({
        error: false,
        data: {
          dietDetails: diet,
          message: "Item successfully added to your diet",
        },
      });
    } else {
      res.status(500).send({
        error: true,
        data: {
          message: "Something went wrong while adding item to diet",
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
      res.status(422);
    }
    res.send(errorObj);
  }
});

// METHOD: POST
// ROUTE: /diet/get-diet
const getDiets = asyncHandler(async (req, res) => {
  try {
    const dietDetails = await Diet.find({ userId: req.user._id }); // Get only currently authorized user's items
    res.status(200).send({
      error: false,
      data: {
        dietDetails,
      },
    });
  } catch (error) {
    let errorObj = {
      error: true,
      data: {
        message: error.message,
      },
    };
    res.send(errorObj);
  }
});

// METHOD: POST
// ROUTE: /diet/delete-diet
const deleteDiet = asyncHandler(async (req, res) => {
  try {
    const dietDetails = await joiDiet.deleteDietSchema.validateAsync(req.body); // validate request body
    const diet = await Diet.findOne({name: dietDetails.name}); // check if the item exists
    if (!diet) {
      res.status(404);
      throw httpErrors.NotFound(
        "The item you are trying to delete does not exist"
      );
    }
    if (!diet.userId.equals(req.user._id)) {
      // check if the currently authorized user is the owner of this item
      res.status(403);
      throw httpErrors.Forbidden(
        "You are not allowed to exclude this item from this particular diet"
      );
    }
    await diet.delete(); // delete the item
    res.status(200).send({
      error: false,
      data: {
        message: "Item successfully removed from your diet",
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
      res.status(422);
    }
    res.send(errorObj);
  }
});

module.exports = {
  addDiet,
  getDiets,
  deleteDiet,
};
