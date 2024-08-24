const { body } = require('express-validator');

const customerSignupValidator = [
  body('firstName' , 'First Name is required').isString(),
  body('lastName' , 'Last Name is required').isString(),
  body('email' , 'Email is required').isEmail(),
  body('password' , 'Password is required').isString().isLength( { min: 8 } ),
  body('phoneNumber' , 'Phone Number is required to be in Egyptian format').isMobilePhone("ar-EG"),
  body('sex' , 'Sex is required').isIn(["male", "female"]),
  body('profilePictureURL' , 'Profile Picture URL must be a valid URL').isURL(),
  body('addresses' , 'Addresses is required').isArray().isLength( { min: 1 } ),
  body('cordinates' , 'Coordinates is required').isArray().isLength( { min: 2 , max: 2 } ),
];

const customerLoginValidator = [
  body('email' , 'Email is required').isEmail(),
  body('password' , 'Password is required').isString().isLength( { min: 8 } ),
];

module.exports = {
  customerSignupValidator,
  customerLoginValidator
}