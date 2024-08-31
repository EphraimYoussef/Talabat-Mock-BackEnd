const Driver = require("../models/Driver");

const createDriver = async (createDriverDto) => {
  try {
    const newDriver = await Driver.create(createDriverDto);
    return newDriver;
  } 
  catch (error) {
    if (error.code === 11000) {
      throw new Error("Email or National ID already exists");
    }
    console.log("Driver Repo ERROR: ", error);
    throw error;
  }
};

const getDriverByEmail = async (email) => {
  try {
    const driver = await Driver.findOne({ email });
    return driver;
  }
  catch (error) {
    console.log("Driver Repo ERROR: ", error);
    throw error;
  }
};

module.exports = {
  createDriver,
  getDriverByEmail,
};