const customer = require("../models/Customer");

const createCustomer = async (firstName, lastName, email, password , phoneNumber) => {
  try {
    const newCustomer = new customer({
      firstName,
      lastName,
      email,
      password,
      phoneNumber
    });
    await newCustomer.save();
    return newCustomer;
  } 
  catch (error) {
    throw error;
  }
}

const getCustomerByEmail = async (email) => {
  try {
    const customer = await customer.findOne( { email } );
    return customer;
  } 
  catch (error) {
    throw error;
  }
}

module.exports = {
  createCustomer,
  getCustomerByEmail
}