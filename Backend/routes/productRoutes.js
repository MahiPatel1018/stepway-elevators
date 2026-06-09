const express = require("express");
const router = express.Router();

const verifyToken = require("../middleware/authMiddleware");

const {
  fetchProducts,
  createProduct,
  removeProduct,
  editProduct,
  getProductBySlug,
} = require("../controller/productController");

// Public Routes
router.get("/", fetchProducts);
router.get("/:slug", getProductBySlug);

// Protected Routes
router.post("/", verifyToken, createProduct);
router.put("/:id", verifyToken, editProduct);
router.delete("/:id", verifyToken, removeProduct);

module.exports = router;