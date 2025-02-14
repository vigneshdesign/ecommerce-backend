const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  category: { type: String, required: true },
  name: { type: String, required: true },
  price: { type: Number, required: true },
  description: String,
  imageUrl: String,
});

module.exports = mongoose.model("Product", productSchema);
