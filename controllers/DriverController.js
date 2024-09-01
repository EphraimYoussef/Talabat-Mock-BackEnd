const driverService = require("../services/DriverServices");
const jsend = require("jsend");
const { validationResult } = require("express-validator");

const signup = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const createDriverDto = req.body;
    const { driver, token } = await driverService.signup(createDriverDto);
    res.send(jsend.success({ driver, token }));
  } 
	catch (error) {
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
    const { driver, token } = await driverService.login(email, password);
    res.send(jsend.success({ driver, token }));
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