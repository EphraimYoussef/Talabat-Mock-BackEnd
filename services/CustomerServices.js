const customerRepo = require("../repos/CustomerRepo");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const config = require("../config/config");

const signup = async (createCustomerDto) => {
  try {
    const { password } = createCustomerDto;
    const hashedPassword = await bcrypt.hash(password, 10);
    createCustomerDto.password = hashedPassword;
    const customer = await customerRepo.createCustomer(createCustomerDto);
    const token = jwt.sign(
      { id: customer._id, type: "customer" },
      config.jwt.secret
    );
    return { customer, token };
  } 
  catch (error) {
    console.error("Error in signup:", error);
    throw error;
  }
};

const login = async (email, password) => {
  try {
    const customer = await customerRepo.getCustomerByEmail(email);
    if (!customer) {
      throw new Error("Customer not found");
    }
    const isPasswordCorrect = await bcrypt.compare(password, customer.password);
    if (!isPasswordCorrect) {
      throw new Error("Invalid password");
    }
    const token = jwt.sign({ id: customer._id }, config.jwt.secret);
    return { customer, token };
  }
  catch (error) {
    console.error("Error in login:", error);
    throw error;
  }
};

module.exports = {
  signup,
  login,
};