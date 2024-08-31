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
    price: {
      type: Number,
      required: function () {
        return !this.versions || this.versions.length === 0;
      },
    },
    versions: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "ItemVersion",
        validate: {
          validator: function (v) {
            return !(v && v.length > 0 && this.price);
          },
          message: "An item cannot have both a price and versions.",
        },
      },
    ],
  },
  { timestamps: true }
);

menuItemSchema.pre("validate", function (next) {
  if (!this.price && this.versions.length === 0) {
    next(new Error("Cannot create item without original price or versions"));
  }
  next();
});

const MenuItem = mongoose.model("MenuItem", menuItemSchema);

module.exports = MenuItem;