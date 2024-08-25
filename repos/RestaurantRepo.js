const restaurant = require("../models/Restaurant");

const createRestaurant = async (email, password, name, address, phoneNumber, category, owner) => {
  try {
    const newRestaurant = new restaurant({
      email,
      password,
      name,
      address,
      phoneNumber,
      category,
      owner
    });
    await newRestaurant.save();
    return newRestaurant;
  }
  catch (error) {
    throw error;
  }
}

const getRestaurantByEmail = async (email) => {
  try {
    const restaurant = await restaurant.findOne( { email } );
    return restaurant;
  }
  catch (error) {
    throw error;
  }
}

module.exports = {
  createRestaurant,
  getRestaurantByEmail
}