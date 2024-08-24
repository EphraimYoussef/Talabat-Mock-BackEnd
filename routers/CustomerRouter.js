const express = require('express');
const router = express.Router();
const customerController = require('../controllers/CustomerController');
const { customerSignupValidator, customerLoginValidator } = require('../validators/CustomerValidator');

router.post('/signup', customerSignupValidator, customerController.signup);
router.post('/login', customerLoginValidator, customerController.login);

module.exports = router