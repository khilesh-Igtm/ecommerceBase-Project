require('dotenv').config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const Product = require("./models/Product");
const Order = require("./models/Order");

const app = express();
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect(process.env.MONGODB).then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));


// --- API: Fetch Products ---
app.get("/api/products", async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// --- API: Place Order ---
app.post("/api/orders", async (req, res) => {
  const { firstName, lastName, address, items } = req.body;

  if (!firstName || !lastName || !address) {
    return res.status(400).json({ message: "First name, last name, and address are required." });
  }
  if (!items || items.length === 0) {
    return res.status(400).json({ message: "Cart is empty." });
  }

  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  try {
    const order = new Order({ firstName, lastName, address, items, total });
    await order.save();
    console.log("Order placed:", order);
    res.json({ message: "Order placed successfully!", orderId: order._id });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Start server
const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
