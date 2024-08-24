const { body } = require('express-validator');

const restaurantSignupValidator = [
  body('name' , 'Name is required').isString(),
  body('owner' , 'Owner is required').isString(),
  body('email' , 'Email is required').isEmail(),
  body('password' , 'Password is required').isString().isLength( { min: 8 } ),
  body('phoneNumber' , 'Phone Number is required to be in Egyptian format').isMobilePhone("ar-EG"),
  body('category' , 'Category is required').isArray().isLength( { min: 1 } ),
  body('menuItems' , 'Menu Items is required').isArray().isLength( { min: 1 } ),
  body('address' , 'Address is required').isString(),
  body('cordinates' , 'Cordinates is required').isArray().isLength( { min: 2 , max: 2 } ),
];

const restaurantLoginValidator = [
  body('email' , 'Email is required').isEmail(),
  body('password' , 'Password is required').isString().isLength( { min: 8 } ),
];

module.exports = {
  restaurantSignupValidator,
  restaurantLoginValidator
}