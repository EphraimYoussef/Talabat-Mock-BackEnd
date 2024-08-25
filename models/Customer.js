const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const customerSchema = new mongoose.Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    addresses: [{ type: mongoose.Schema.Types.ObjectId, ref: "Address" }],
    orders: [{ type: mongoose.Schema.Types.ObjectId, ref: "Order" }],
    defaultAddressIndex: { type: Number, default: 0 },
    wallet: { type: Number, default: 0 },
    cart: { type: mongoose.Schema.Types.ObjectId, ref: "Cart" },
    sex: { type: String, enum: ["male", "female"] },
    profilePictureURL: {
      type: String,
      default: "https://thispersondoesnotexist.com/",
    },
  },
  { timestamps: true }
);

customerSchema.pre("save", async function (next) {
  if (!this.isModified("password") || this.isNew) {                // * Check if password is modified or new.
    const salt = await bcrypt.genSalt(10);                         // * Salting the password.
    const hashedPassword = await bcrypt.hash(this.password, salt); // * Hashing the password.
    this.password = hashedPassword;                                // * Saving the hashed password.
    next();
  }
});

const Customer = mongoose.model("Customer", customerSchema);

module.exports = Customer;