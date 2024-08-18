const mongoose = require("mongoose");

const itemVersionSchema = new mongoose.Schema(
  {
    size: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

const ItemVersion = mongoose.model("ItemVersion", itemVersionSchema);

module.exports = ItemVersion;