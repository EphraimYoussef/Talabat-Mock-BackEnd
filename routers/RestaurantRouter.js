const express = require('express');
const router = express.Router();
const { signUpRestaurant, loginRestaurant } = require('../controllers/RestaurantController');
const { restaurantSignupValidator, restaurantLoginValidator } = require('../validators/RestaurantValidator');

router.post('/signup', restaurantSignupValidator, signUpRestaurant);
router.post('/login', restaurantLoginValidator, loginRestaurant);

module.exports = router