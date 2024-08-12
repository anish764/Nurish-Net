const joi = require("joi");
const { joiPasswordExtendCore } = require("joi-password");
joi.objectId = require("joi-objectid")(joi);
const joiPassword = joi.extend(joiPasswordExtendCore);

// Validations for adding diet for a user
const addDietSchema = joi.object({
  name: joi.string().trim().required(),
  img: joi.string().trim().required(),
  type: joi.string().trim().required(),
  url: joi.string().trim().required(),
  protein: joi.number().required(),
  fat: joi.number().required(),
  carb: joi.number().required(),
  calories: joi.number().required(),
});

// Validations for deleting a item from a user's diet
deleteDietSchema = joi.object({
  name: joi.string().trim().required(),
});

module.exports = {
  addDietSchema,
  deleteDietSchema,
};
