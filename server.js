require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(cors());
const productRoutes = require("./routes/productRoutes");
app.use("/api/products", productRoutes);
const categoryRoutes = require("./routes/categoryRoutes");
app.use("/api/products", categoryRoutes);
// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

// Example Route
app.get("/", (req, res) => {
  res.send("Love you ma...");
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
