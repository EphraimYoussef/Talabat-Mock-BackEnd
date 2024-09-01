const express = require("express");
const router = express.Router();
const { validateAddress } = require("../validators/AddressValidator");
const addressController = require("../controllers/AddressController");

router.post("/", validateAddress, addressController.createAddress);

module.exports = router;