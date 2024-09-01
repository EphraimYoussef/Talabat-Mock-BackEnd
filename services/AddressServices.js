const addressRepo = require("../repos/addressRepo");

const createAddress = async (createAddressDto) => {
  try {
    const newAddress = await addressRepo.createAddress(createAddressDto);
    return newAddress;
  } 
  catch (error) {
    console.log("Address Service ERROR: ", error);
    throw error;
  }
};

module.exports = {
  createAddress,
};