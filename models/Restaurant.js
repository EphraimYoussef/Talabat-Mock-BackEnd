const mongoose = require("mongoose");

const restaurantSchema = new mongoose.Schema(
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
    name: {
      type: String,
      required: true,
    },
    address: { type: mongoose.Schema.Types.ObjectId, ref: "Address" },
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
    menuItems: [
      { type: mongoose.Schema.Types.ObjectId, ref: "MenuItem", default: [] },
    ],
  },
  { timestamps: true }
);

restaurantSchema.pre("save", async function (next) {
  if (!this.isModified("password") || this.isNew) {                // * Check if password is modified or new.
    const salt = await bcrypt.genSalt(10);                         // * Salting the password.
    const hashedPassword = await bcrypt.hash(this.password, salt); // * Hashing the password.
    this.password = hashedPassword;                                // * Saving the hashed password.
    next();
  }
})

const Restaurant = mongoose.model("Restaurant", restaurantSchema);

module.exports = Restaurant;