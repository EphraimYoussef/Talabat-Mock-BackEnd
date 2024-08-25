const driver = require("../models/Driver");

const createDriver = async (firstName, lastName, email, password, phoneNumber, age, vehicle, nationalId) => {
  try {
    const newDriver = new driver({
      firstName,
      lastName,
      email,
      password,
      phoneNumber,
      age,
      vehicle,
      nationalId
    });
    await newDriver.save();
    return newDriver;
  }
  catch (error) {
    throw error;
  }
}

const getDriverByEmail = async (email) => {
  try {
    const driver = await driver.findOne( { email } );
    return driver;
  }
  catch (error) {
    throw error;
  }
}

module.exports = {
  createDriver,
  getDriverByEmail
}