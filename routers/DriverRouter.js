const express = require('express');
const router = express.Router();
const driverController = require('../controllers/DriverController');
const { driverSignupValidator, driverLoginValidator } = require('../validators/DriverValidator');

router.post('/signup', driverSignupValidator, driverController.signup);
router.post('/login', driverLoginValidator, driverController.login);

module.exports = router