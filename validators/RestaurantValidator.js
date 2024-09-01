const { body } = require("express-validator");

const signupValidators = [
  body("email")
    .isEmail()
    .withMessage("Please enter a valid email address")
    .normalizeEmail(),
  body("password")
    .isLength({ min: 6 })
    .withMessage("Password must be at least 6 characters long"),
  body("name").notEmpty().withMessage("Restaurant name is required").trim(),
  body("phoneNumber")
    .isMobilePhone("ar-EG")
    .withMessage("Please enter a valid phone number"),
  body("category")
    .isArray({ min: 1 })
    .withMessage("At least one category is required"),
  body("owner").notEmpty().withMessage("Owner name is required").trim(),
  body("address").notEmpty().withMessage("Address is required"),
];

const loginValidators = [
  body("email")
    .isEmail()
    .withMessage("Please enter a valid email address")
    .normalizeEmail(),
  body("password").notEmpty().withMessage("Password is required"),
];

const createMenuItemValidators = [
  body("name").notEmpty().withMessage("Name is required").trim(),
  body("description").notEmpty().withMessage("Description is required").trim(),
];

module.exports = {
  signupValidators,
  loginValidators,
  createMenuItemValidators,
};