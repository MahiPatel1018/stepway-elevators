const db = require("../config/db");

// Get All Products
const getProducts = (callback) => {
  db.query(
    "SELECT * FROM products ORDER BY created_at DESC",
    callback
  );
};

// Add Product
const addProduct = (data, callback) => {
  const {
    name,
    slug,
    category,
    image,
    description,
    tagline,
    capabilities,
    applications,
    specifications,
    gallery,
  } = data;

  const sql = `
    INSERT INTO products
    (
      name,
      slug,
      category,
      image,
      description,
      tagline,
      capabilities,
      applications,
      specifications,
      gallery
    )
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `;

  db.query(
    sql,
    [
      name,
      slug,
      category,
      image,
      description,
      tagline,
      capabilities,
      applications,
      specifications,
      gallery,
    ],
    callback
  );
};

// Delete Product
const deleteProduct = (id, callback) => {
  db.query(
    "DELETE FROM products WHERE id = ?",
    [id],
    callback
  );
};

// Update Product
const updateProduct = (id, data, callback) => {
  const {
    name,
    slug,
    category,
    image,
    description,
    tagline,
    capabilities,
    applications,
    specifications,
    gallery,
  } = data;

  const sql = `
    UPDATE products
    SET
      name = ?,
      slug = ?,
      category = ?,
      image = ?,
      description = ?,
      tagline = ?,
      capabilities = ?,
      applications = ?,
      specifications = ?,
      gallery = ?
    WHERE id = ?
  `;

  db.query(
    sql,
    [
      name,
      slug,
      category,
      image,
      description,
      tagline,
      capabilities,
      applications,
      specifications,
      gallery,
      id,
    ],
    callback
  );
};

module.exports = {
  getProducts,
  addProduct,
  deleteProduct,
  updateProduct,
};