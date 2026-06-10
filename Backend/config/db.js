const mysql = require("mysql2");

// Debug Logs
console.log("USER =", process.env.DB_USER);
console.log("HOST =", process.env.DB_HOST);
console.log("DB =", process.env.DB_NAME);

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});
db.connect((err) => {
  if (err) {
    console.error("❌ Database connection failed:");
    console.error(err.message);
    return;
  }

  console.log("✅ MySQL Connected");
});

module.exports = db;