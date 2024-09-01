const { body } = require("express-validator");

const createDriver = [
  body("email")
    .isEmail()
    .withMessage("Please enter a valid email address")
    .normalizeEmail(),
  body("password")
    .isLength({ min: 6 })
    .withMessage("Password must be at least 6 characters long"),
  body("firstName").notEmpty().withMessage("First name is required").trim(),
  body("lastName").notEmpty().withMessage("Last name is required").trim(),
  body("age")
    .isInt({ min: 18, max: 65 })
    .withMessage("Age must be between 18 and 65"),
  body("vehicle")
    .isIn(["car", "motorcycle", "bicycle", "on_foot"])
    .withMessage("Invalid vehicle type"),
  body("nationalId")
    .matches(/^\d{14}$/)
    .withMessage("National ID must be 14 digits"),
];

const loginDriver = [
  body("email")
    .isEmail()
    .withMessage("Please enter a valid email address")
    .normalizeEmail(),
  body("password").notEmpty().withMessage("Password is required"),
];

module.exports = { createDriver, loginDriver };