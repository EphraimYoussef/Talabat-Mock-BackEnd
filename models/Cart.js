const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema(
  {
    restaurantId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Restaurant",
      required: true,
    },
    cartItems: [{ type: mongoose.Schema.Types.ObjectId, ref: "CartItem" }],
  },
  { timestamps: true }
);

const Cart = mongoose.model("Cart", cartSchema);

module.exports = Cart;