const mongoose = require("mongoose");

const driverSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      validate: {
        validator: function (v) {
          return v >= 18 && v <= 65;
        },
        message: "Age is not valid",
      },
      required: true,
    },
    vehicle: {
      type: String,
      enum: ["car", "motorcycle", "bicycle", "on_foot"],
      required: true,
    },
    nationalId: {
      type: String,
      validate: {
        validator: function (v) {
          return /^\d{14}$/.test(v);
        },
        message: "National ID is not valid",
      },
      required: true,
      unique: true,
    },
    orders: [
      { type: mongoose.Schema.Types.ObjectId, ref: "Order", default: [] },
    ],
  },
  { timestamps: true }
);

const Driver = mongoose.model("Driver", driverSchema);

module.exports = Driver;