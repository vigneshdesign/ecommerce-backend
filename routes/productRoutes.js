const express = require("express");
const router = express.Router();
const Product = require("../models/Product");

router.post("/", async (req, res) => {
  const { category, name, price, description, imageUrl } = req.body;
  const productsInCategory = await Product.find({ category });

  if (productsInCategory.length >= 4) return res.status(400).json({ message: "Maximum 4 products per category allowed" });

  try {
    const newProduct = new Product({ category, name, price, description, imageUrl });
    await newProduct.save();
    res.status(201).json(newProduct);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get("/", async (req, res) => {
  const products = await Product.find();
  res.json(products);
});

module.exports = router;
