const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config(); // Load environment variables from .env file

const app = express();

// Middleware: Parse JSON
app.use(express.json());

// Connect to MongoDB
mongoose
  .connect(process.env.DB_URI) 
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("MongoDB connection error:", error.message);
  });

// Root route
app.get("/", (req, res) => {
  res.send("Welcome to the API!");
});

// Example API route: /api/products
app.get("/api/products", (req, res) => {
  res.json([
    { id: 1, name: "Product 1", price: 100 },
    { id: 2, name: "Product 2", price: 200 },
  ]);
});

// Start the server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
