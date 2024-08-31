const Customer = require("../models/Customer");

const createCustomer = async (createCustomerDto) => {
  try {
    const newCustomer = await Customer.create(createCustomerDto);
    return newCustomer;
  }
  catch (error) {
    if (error.code === 11000) {
      throw new Error("Email already exists");
    }
    console.log("Customer Repo ERROR: ", error);
    throw error;
  }
};

const getCustomerByEmail = async (email) => {
  try {
    const customer = await Customer.findOne({ email });
    return customer;
  } 
  catch (error) {
    console.log("Customer Repo ERROR: ", error);
    throw error;
  }
};

module.exports = {
  createCustomer,
  getCustomerByEmail,
};