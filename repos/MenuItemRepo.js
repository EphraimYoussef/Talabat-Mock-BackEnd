const MenuItem = require("../models/MenuItem");

const createMenuItem = async (menuItem) => {
  try {
    const newMenuItem = new MenuItem(menuItem);
    return await newMenuItem.save();
  } 
	catch (error) {
		console.log("MenuItem Repo ERROR: ", error);
    throw error;
  }
};

module.exports = {
  createMenuItem,
};