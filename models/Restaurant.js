const mongoose = require("mongoose");

const restaurantSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    category: {
      type: [String],
      required: true,
    },
    owner: {
      type: String,
      required: true,
    },
    menu: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Menu",
    },
  },
  { timestamps: true }
);

const Restaurant = mongoose.model("Restaurant", restaurantSchema);

module.exports = Restaurant;