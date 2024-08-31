const Address = require("../models/Address");

const createAddress = async (createAddressDto) => {
  try {
    const newAddress = await Address.create(createAddressDto);
    return newAddress;
  } 
	catch (error) {
    console.log("Address Repo ERROR: ", error);
    throw error;
  }
};

module.exports = {
  createAddress,
};