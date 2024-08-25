const express = require('express');
const router = express.Router();
const { signUpRestaurant, loginRestaurant } = require('../controllers/RestaurantController');
const { signUpRestaurantValidator, loginRestaurantValidator } = require('../validators/RestaurantValidator');

router.post('/signup', signUpRestaurantValidator, signUpRestaurant);
router.post('/login', loginRestaurantValidator, loginRestaurant);

module.exports = router