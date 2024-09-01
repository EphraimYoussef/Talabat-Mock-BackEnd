const express = require("express");
const router = express.Router();
const driverController = require("../controllers/DriverController");
const driverValidators = require("../validators/DriverValidator");

router.post("/signup", driverValidators.createDriver, driverController.signup);

router.post("/login", driverValidators.loginDriver, driverController.login);

module.exports = router;