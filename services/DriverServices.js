const DriverRepo = require("../repos/DriverRepo");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const config = require("../config/config");
const UnauthorizedError = require("../common/errors/UnauthorizedError");

const signUpDriver = async (firstName, lastName, email, password, phoneNumber, age, vehicle, nationalId) => {
  try {
    const token = jwt.sign(
      {firstName, lastName, email, password, phoneNumber, age, vehicle, nationalId},
      config.jwt.secret, 
      {expiresIn: config.jwt.expiresIn}
    )
    const driver = await DriverRepo.createDriver(
      firstName, 
      lastName, 
      email, 
      password, 
      phoneNumber, 
      age, 
      vehicle, 
      nationalId
    );
    return { driver, token };
  } 
  catch (error) {
    throw error;
  }
}

const loginDriver = async (email, password) => {
  try {
    const driver = await DriverRepo.getDriverByEmail(email);
    if (driver){
      const isMatch = await bcrypt.compare(password, driver.password);
      if (isMatch) {
        const token = jwt.sign(
          { email: driver.email },
          config.jwt.secret, 
          { expiresIn: config.jwt.expiresIn }
        );
        return { driver, token };
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
  signUpDriver,
  loginDriver
}