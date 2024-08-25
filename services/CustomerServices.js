const customerRepo = require("../repos/CustomerRepo");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const config = require("../config/config");
const UnauthorizedError = require("../common/errors/UnauthorizedError");

const signUpCustomer = async (firstName, lastName, email, password, phoneNumber) => {
  try {
    const token = jwt.sign(
      {firstName, lastName, email, password, phoneNumber},
      config.jwt.secret, 
      {expiresIn: config.jwt.expiresIn}
    );
    const customer = await customerRepo.createCustomer(firstName, lastName, email, password, phoneNumber);
    return { customer, token };
  }
  catch (error) {
    throw error;
  }
}

const loginCustomer = async (email, password) => {
  try {
    const customer = await customerRepo.getCustomerByEmail(email);
    if (customer){
      const isMatch = await bcrypt.compare(password, customer.password);
      if (isMatch) {
        const token = jwt.sign(
          { email: customer.email},
          config.jwt.secret, 
          { expiresIn: config.jwt.expiresIn }
        );
        return { customer, token };
      }
      else {
        throw new UnauthorizedError("Invalid email or password");
      }
    }
    else{
      throw new UnauthorizedError("Invalid email or password");
    }
  }
  catch (error) {
    throw error;
  }
}

module.exports = {
  signUpCustomer,
  loginCustomer
}