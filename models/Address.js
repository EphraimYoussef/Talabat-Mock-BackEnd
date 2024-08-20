//TODO: confirm coordinates handling for index
const mongoose = require("mongoose");

const addressSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    location: {
      type: {
        type: String,
        enum: ["Point"],
        required: true,
      },
      coordinates: {
        type: [Number],
        required: true,
      },
    },
  },
  { timestamps: true }
);

const Address = mongoose.model("Address", addressSchema);

module.exports = Address;