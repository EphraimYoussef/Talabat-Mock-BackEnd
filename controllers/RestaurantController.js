const restaurantService = require("../services/RestaurantServices");
const jsend = require("jsend");
const { validationResult } = require("express-validator");
const menuItemService = require("../services/MenuItemServices");

const signup = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const createRestaurantDto = req.body;
    const { restaurant, token } = await restaurantService.signup(createRestaurantDto);
    res.send(jsend.success({ restaurant, token }));
  } 
  catch (error) {
    console.log("Error in signup:", error);
    res.status(500).json({ error: error.message });
  }
};

const login = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { email, password } = req.body;
    const { restaurant, token } = await restaurantService.login(
      email,
      password
    );
    res.send(jsend.success({ restaurant, token }));
  } 
  catch (error) {
    console.log("Error in login:", error);
    res.status(500).json({ error: error.message });
  }
};

const getAllRestaurants = async (req, res) => {
  try {
    const restaurants = await restaurantService.getAllRestaurants();
    res.send(jsend.success(restaurants));
  } 
  catch (error) {
    console.log("Error in getAllRestaurants:", error);
    res.status(500).json({ error: error.message });
  }
};

const createMenuItem = async (req, res) => {
  try {
    const menuItem = req.body;
    const restaurantId = req.restaurantId;
    const newMenuItem = await menuItemService.createMenuItem(
      menuItem,
      restaurantId
    );
    res.send(jsend.success(newMenuItem));
  } 
  catch (error) {
    console.log("Error in createMenuItem:", error);
  }
};

module.exports = {
  signup,
  login,
  getAllRestaurants,
  createMenuItem,
};