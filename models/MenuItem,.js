const mongoose = require("mongoose");

const menuItemSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    versions: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "ItemVersion",
      },
    ],
  },
  { timestamps: true }
);

const MenuItem = mongoose.model("MenuItem", menuItemSchema);

module.exports = MenuItem;