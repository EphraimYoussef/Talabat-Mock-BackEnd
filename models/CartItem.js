const mongoose = require("mongoose");

const cartItemSchema = new mongoose.Schema({
  counter: {
    type: Number,
    required: true,
  },
  item: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "MenuItem",
    required: true,
  },
  size: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
});

const CartItem = mongoose.model("CartItem", cartItemSchema);

module.exports = CartItem;