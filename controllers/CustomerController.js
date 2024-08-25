const customerServices = require('../services/CustomerServices');
const jsend = require('jsend');

const signUpCustomer = async (req, res) => {
  try {
    const { firstName, lastName, email, password, phoneNumber } = req.body;
    const { customer , token } = await customerServices.signUpCustomer(firstName, lastName, email, password, phoneNumber);
    res.cookie('token', token, { httpOnly: true });
    res.json(jsend.success( {customer, token } ) );
    return { customer, token };
  } 
  catch (error) {
    next(error);
  }
}

const loginCustomer = async (req, res) => {
  try {
    const { email, password } = req.body;
    const { customer, token } = await customerServices.loginCustomer(email, password);
    res.cookie('token', token, { httpOnly: true });
    res.json(jsend.success(customer, token ,'Customer logged in successfully'));
    return { customer, token };
  } 
  catch (error) {
    next(error);
  }
}

module.exports = {
  signUpCustomer,
  loginCustomer
}