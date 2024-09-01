const validator = require("express-validator");

const createCustomer = [
  validator.body("firstName").isString().withMessage("FirstName is required"),
  validator.body("lastName").isString().withMessage("LastName is required"),
  validator.body("email").isEmail().withMessage("Email is required"),
  validator
    .body("password")
    .isString()
    .isLength({ min: 8 })
    .withMessage("Password is required"),
  validator
    .body("phoneNumber")
    .isMobilePhone("ar-EG")
    .withMessage("Phone is required to be in the correct format (Egypt Code)"),
  validator.body("addressString").isString().withMessage("Address is required"),
  validator
    .body("coordiantes")
    .isArray()
    .withMessage("Coordiantes is required"),
  validator
    .body("sex")
    .isIn(["male", "female"])
    .withMessage("Sex must be either 'male', 'female'"),
  validator
    .body("profilePictureURL")
    .optional()
    .isURL()
    .withMessage("Profile picture URL must be a valid URL if provided"),
];

const loginCustomer = [
  validator.body("email").isEmail().withMessage("Email is required"),
  validator
    .body("password")
    .isString()
    .isLength({ min: 8 })
    .withMessage("Password is required"),
];

module.exports = { createCustomer, loginCustomer };