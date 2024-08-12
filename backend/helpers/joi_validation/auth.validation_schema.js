const joi = require("joi");
const { joiPasswordExtendCore } = require("joi-password");
joi.objectid = require("joi-objectid");
const joiPassword = joi.extend(joiPasswordExtendCore);

// Validations for registration route
const userRegistrationSchema = joi.object({
  firstName: joi.string().trim().required(),
  lastName: joi.string().trim().required(),
  email: joi.string().trim().email().lowercase().required(),
  age: joi.number().min(1).max(100).required(),
  password: joiPassword
    .string()
    .trim()
    .min(8)
    .max(16)
    .minOfSpecialCharacters(1)
    .minOfLowercase(1)
    .minOfUppercase(1)
    .minOfNumeric(1)
    .noWhiteSpaces()
    .required(), // password can have a minlength of 8 and maxlength of 16, must contain atleast one [special, lowercase, uppercase, numeric] character
  receiveMails: joi.bool().default(false),
  weight: joi.number().min(1).max(635).required(),
  height: joi.number().min(65.24).max(251).required(),
});

// Validation for login route
const userLoginSchema = joi.object({
  email: joi.string().trim().email().lowercase().required(),
  password: joiPassword
    .string()
    .trim()
    .min(8)
    .max(16)
    .minOfSpecialCharacters(1)
    .minOfLowercase(1)
    .minOfUppercase(1)
    .minOfNumeric(1)
    .noWhiteSpaces()
    .required(), // same as above
});

module.exports = {
  userRegistrationSchema,
  userLoginSchema,
};
