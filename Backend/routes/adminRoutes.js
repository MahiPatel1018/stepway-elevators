const express = require("express");
console.log("Admin Routes Loaded");

const router = express.Router();

const {
  loginAdmin,
} = require("../controller/adminController");

// Test Route
router.get("/test", (req, res) => {
  res.send("Admin Route Working");
});

// Admin Login
router.post("/login", loginAdmin);

module.exports = router;