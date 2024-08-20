const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
  {
    customer: { type: mongoose.Schema.Types.ObjectId, ref: "Customer" },
    date: { type: Date, default: Date.now },
    total: { type: Number, required: true },
    status: { type: String, enum: ["in_progress", "cancelled", "delivered"] },
    cart: { type: mongoose.Schema.Types.ObjectId, ref: "Cart" },
    driver: { type: mongoose.Schema.Types.ObjectId, ref: "Driver" },
    address: { type: mongoose.Schema.Types.ObjectId, ref: "Address" },
    deliveryTime: { type: Date },
    paymentMethod: { type: String, enum: ["cash"] },
  },
  { timestamps: true }
);

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;