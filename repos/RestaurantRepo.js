const Restaurant = require("../models/Restaurant");

const createRestaurant = async (createRestaurantDto) => {
  try {
    const newRestaurant = await Restaurant.create(createRestaurantDto);
    return newRestaurant;
  }
  catch (error) {
    if (error.code === 11000) {
      throw new Error("Email already exists");
    }
    console.log("Restaurant Repo ERROR: ", error);
    throw error;
  }
};

const getRestaurantByEmail = async (email) => {
  try {
    const restaurant = await Restaurant.findOne({ email });
    return restaurant;
  }
  catch (error) {
    console.log("Restaurant Repo ERROR: ", error);
    throw error;
  }
};

const getAllRestaurants = async () => {
  try {
    const restaurants = await Restaurant.find()
      .populate("address")
      .populate("menuItems");
    return restaurants;
  } 
  catch (error) {
    console.log("Restaurant Repo ERROR: ", error);
    throw error;
  }
};

const getRestaurantById = async (id) => {
  try {
    const restaurant = await Restaurant.findById(id);
    return restaurant;
  } 
  catch (error) {
    console.log("Restaurant Repo ERROR: ", error);
    throw error;
  }
};

const updateRestaurant = async (id, updateRestaurantDto) => {
  try {
    const restaurant = await Restaurant.findByIdAndUpdate(
      id,
      updateRestaurantDto
    );
    return restaurant;
  } 
  catch (error) {
    console.log("Restaurant Repo ERROR: ", error);
    throw error;
  }
};

module.exports = {
  createRestaurant,
  getRestaurantByEmail,
  getAllRestaurants,
  getRestaurantById,
  updateRestaurant,
};