const restaurantRepo = require("../repos/RestaurantRepo");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const config = require("../config/config");

const signup = async (createRestaurantDto) => {
  const hashedPassword = await bcrypt.hash(createRestaurantDto.password, 10);
  const restaurantToCreate = {
    ...createRestaurantDto,
    password: hashedPassword,
  };
  const restaurant = await restaurantRepo.createRestaurant(restaurantToCreate);
  const token = jwt.sign(
    { id: restaurant._id, type: "restaurant" },
    config.jwt.secret,
    {
      expiresIn: config.jwt.expiration,
    }
  );
  return { restaurant, token };
};

const login = async (email, password) => {
  const restaurant = await restaurantRepo.getRestaurantByEmail(email);
  if (!restaurant) {
    throw new Error("Invalid credentials");
  }
  const isPasswordValid = await bcrypt.compare(password, restaurant.password);
  if (!isPasswordValid) {
    throw new Error("Invalid credentials");
  }
  const token = jwt.sign({ id: restaurant._id }, config.jwt.secret, {
    expiresIn: config.jwt.expiration,
  });
  return { restaurant, token };
};

const getAllRestaurants = async () => {
  try {
    const restaurants = await restaurantRepo.getAllRestaurants();
    return restaurants;
  } 
	catch (error) {
    console.error("Error fetching all restaurants:", error);
    throw new Error("Failed to fetch restaurants");
  }
};

const getRestaurantById = async (id) => {
  const restaurant = await restaurantRepo.getRestaurantById(id);
  return restaurant;
};

module.exports = {
  signup,
  login,
  getAllRestaurants,
  getRestaurantById,
};