const driverRepo = require("../repos/DriverRepo");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const config = require("../config/config");

const signup = async (createDriverDto) => {
  const hashedPassword = await bcrypt.hash(createDriverDto.password, 10);
  const driver = await driverRepo.createDriver({
    ...createDriverDto,
    password: hashedPassword,
  });
  const token = jwt.sign(
    { id: driver._id, type: "driver" },
    config.jwt.secret,
    {
      expiresIn: config.jwt.expiration,
    }
  );
  return { driver, token };
};

const login = async (email, password) => {
  const driver = await driverRepo.getDriverByEmail(email);
  if (!driver) {
    throw new Error("Invalid credentials");
  }
  const isPasswordValid = await bcrypt.compare(password, driver.password);
  if (!isPasswordValid) {
    throw new Error("Invalid credentials");
  }
  const token = jwt.sign({ id: driver._id }, config.jwt.secret, {
    expiresIn: config.jwt.expiration,
  });
  return { driver, token };
};

module.exports = {
  signup,
  login,
};