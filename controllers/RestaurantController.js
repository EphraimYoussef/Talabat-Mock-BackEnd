const RestaurantServices = require('../services/RestaurantServices');
const jsend = require('jsend');

const signUpRestaurant = async (req, res) => {
  try {
    const { email, password, name, address, phoneNumber, category, owner } = req.body;
    const { restaurant , token } = await RestaurantServices.signUpRestaurant(email, password, name, address, phoneNumber, category, owner);
    res.cookie('token', token, { httpOnly: true });
    res.json(jsend.success( {restaurant, token} ) );
    return { restaurant, token };
  } 
  catch (error) {
    next(error);
  }
}

const loginRestaurant = async (req, res) => {
  try {
    const { email, password } = req.body;
    const { restaurant, token } = await RestaurantServices.loginRestaurant(email, password);
    res.cookie('token', token, { httpOnly: true });
    res.json(jsend.success( {restaurant, token} ) );
    return { restaurant, token };
  } 
  catch (error) {
    next(error);
  }
}

module.exports = {
  signUpRestaurant,
  loginRestaurant
}