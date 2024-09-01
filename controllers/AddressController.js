const addressService = require("../services/AddressServices");
const { validationResult } = require("express-validator");

const createAddress = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const newAddress = await addressService.createAddress(req.body);
    res.status(201).json(newAddress); // ? 201: Created.
  } 
	catch (error) {
    res.status(500).json({ error: error.message }); // ? 500: Internal Server Error.
  }
};

module.exports = {
  createAddress,
};