const db = require("../config/db");

const {
  getProducts,
  addProduct,
  deleteProduct,
  updateProduct,
} = require("../models/productModel");

// Get Products
const fetchProducts = (req, res) => {
  getProducts((err, results) => {
    if (err) {
      console.error("PRODUCT ERROR:", err);

      return res.status(500).json({
        success: false,
        message: err.message,
      });
    }

    res.json(results);
  });
};

// Add Product
const createProduct = (req, res) => {
  addProduct(req.body, (err, result) => {
    if (err) {
      console.log("PRODUCT ERROR:", err);

      return res.status(500).json({
        success: false,
        message: "Failed to add product",
      });
    }

    res.status(201).json({
      success: true,
      message: "Product added successfully",
    });
  });
};

// Delete Product
const removeProduct = (req, res) => {
  const { id } = req.params;

  deleteProduct(id, (err, result) => {
    if (err) {
      return res.status(500).json({
        success: false,
        message: "Failed to delete product",
      });
    }

    res.json({
      success: true,
      message: "Product deleted successfully",
    });
  });
};

// Update Product
const editProduct = (req, res) => {
  const { id } = req.params;

  updateProduct(id, req.body, (err, result) => {
    if (err) {
      return res.status(500).json({
        success: false,
        message: "Failed to update product",
      });
    }

    res.json({
      success: true,
      message: "Product updated successfully",
    });
  });
};

// Get Product By Slug
const getProductBySlug = (req, res) => {
  const { slug } = req.params;

  db.query(
    "SELECT * FROM products WHERE slug = ?",
    [slug],
    (err, results) => {
      if (err) {
        return res.status(500).json({
          success: false,
          message: "Database error",
        });
      }

      if (results.length === 0) {
        return res.status(404).json({
          success: false,
          message: "Product not found",
        });
      }

      res.json(results[0]);
    }
  );
};

module.exports = {
  fetchProducts,
  createProduct,
  removeProduct,
  editProduct,
  getProductBySlug,
};