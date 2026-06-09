const express = require("express");
const router = express.Router();

const verifyToken = require("../middleware/authMiddleware");

const {
  createContact,
  getContacts,
  deleteContact,
} = require("../controller/contactController");

// Public Routes
router.get("/", getContacts);
router.post("/", createContact);

// Protected Route
router.delete("/:id", verifyToken, deleteContact);

module.exports = router;