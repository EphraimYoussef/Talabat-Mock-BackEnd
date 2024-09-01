const express = require("express");
const router = express.Router();
const customerController = require("../controllers/CustomerController");
const customerValidators = require("../validators/CustomerValidator");

router.post(
  "/signup",
  customerValidators.createCustomer,
  customerController.signup
);

router.post(
  "/login",
  customerValidators.loginCustomer,
  customerController.login
);

module.exports = router;