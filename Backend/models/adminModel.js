const db = require("../config/db");

const getAdminByUsername = (username, callback) => {
  const sql =
    "SELECT * FROM admins WHERE username = ?";

  db.query(sql, [username], callback);
};

module.exports = {
  getAdminByUsername,
};