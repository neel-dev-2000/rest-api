const mongoose = require("mongoose");
const product_schema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  featured: {
    type: Boolean,
    default: false,
  },
  rating: {
    type: Number,
    default: 4.8,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  company: {
    type: String,
    enum: {
      values: ["apple", "samsung", "dell", "mi"],
      message: `{VALUE} invalid company`,
    },
  },
});

module.exports = mongoose.model("Product", product_schema);
