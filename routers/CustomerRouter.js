const express = require('express');
const router = express.Router();
const {signUpCustomer, loginCustomer} = require('../controllers/CustomerController');
const { customerSignupValidator, customerLoginValidator } = require('../validators/CustomerValidator');

router.post('/signup', customerSignupValidator, signUpCustomer);
router.post('/login', customerLoginValidator,   loginCustomer);

module.exports = router