const customerService = require("../services/CustomerServices");
const jsend = require("jsend");
const { validationResult } = require("express-validator");

const signup = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const createCustomerDto = req.body;
    const { customer, token } = await customerService.signup(createCustomerDto);
    res.send(jsend.success({ customer, token }));
  } catch (error) {
    console.log("Error in signup:", error);
    res.status(500).json({ error: error.message });
  }
};

const login = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { email, password } = req.body;
    const { customer, token } = await customerService.login(email, password);
    res.send(jsend.success({ customer, token }));
  } 
  catch (error) {
    console.log("Error in login:", error);
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  signup,
  login,
};