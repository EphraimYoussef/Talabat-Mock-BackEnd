const menuItemRepo = require("../repos/MenuItemRepo");
const restaurantRepo = require("../repos/RestaurantRepo");

// Create a new menu item and add it to the restaurant
const createMenuItem = async (menuItem, restaurantId) => {
  try {
    const createdMenuItem = await menuItemRepo.createMenuItem(menuItem);
    const restaurant = await restaurantRepo.getRestaurantById(restaurantId);
    restaurant.menuItems.push(createdMenuItem._id);
    await restaurantRepo.updateRestaurant(restaurant._id, restaurant);
    return menuItem;
  } 
	catch (error) {
    console.error("Error creating menu item:", error);
    throw error;
  }
};

module.exports = {
  createMenuItem,
};