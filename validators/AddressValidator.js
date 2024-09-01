const { body } = require("express-validator");

const validateAddress = [
  body("name").notEmpty().withMessage("Name is required"),
  body("location.coordinates")
    .notEmpty()
    .withMessage("Coordinates are required"),
];

module.exports = {
  validateAddress,
};