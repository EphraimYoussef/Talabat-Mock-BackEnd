const { body } = require('express-validator');

const driverSignupValidator = [
  body('firstName' , 'First Name is required').isString(),
  body('lastName' , 'Last Name is required').isString(),
  body('email' , 'Email is required').isEmail(),
  body('password' , 'Password is required').isString().isLength( { min: 8 } ),
  body('phoneNumber' , 'Phone Number is required to be in Egyptian format').isMobilePhone("ar-EG"),
  body('age' , 'Age is required').isInt({ min: 18, max: 65 }),
  body('vehicle' , 'Vehicle is required').isIn(["car", "motorcycle", "bicycle", "on_foot"]),
  body('nationalId' , 'National ID is required').isString().isLength( { min: 14, max: 14 } ),
];

const driverLoginValidator = [
  body('email' , 'Email is required').isEmail(),
  body('password' , 'Password is required').isString().isLength( { min: 8 } ),
];

module.exports = {
  driverSignupValidator,
  driverLoginValidator
}