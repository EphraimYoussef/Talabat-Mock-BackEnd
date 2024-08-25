const express = require('express');
const router = express.Router();
const {signUpDriver, loginDriver} = require('../controllers/DriverController');
const { driverSignupValidator, driverLoginValidator } = require('../validators/DriverValidator');

router.post('/signup', driverSignupValidator, signUpDriver);
router.post('/login', driverLoginValidator, loginDriver);

module.exports = router