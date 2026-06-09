const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const {
  getAdminByUsername,
} = require("../models/adminModel");

const loginAdmin = (req, res) => {
  const { username, password } = req.body;

  getAdminByUsername(username, async (err, result) => {
    if (err) {
      return res.status(500).json({
        message: "Server Error",
      });
    }

    if (result.length === 0) {
      return res.status(401).json({
        message: "Invalid Credentials",
      });
    }

    const admin = result[0];

    let isMatch = false;

    // temporary support for your current plain password
    if (admin.password === password) {
      isMatch = true;
    } else {
      isMatch = await bcrypt.compare(
        password,
        admin.password
      );
    }

    if (!isMatch) {
      return res.status(401).json({
        message: "Invalid Credentials",
      });
    }

    const token = jwt.sign(
      {
        id: admin.id,
        username: admin.username,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "1d",
      }
    );

    res.json({
      message: "Login Successful",
      token,
    });
  });
};

module.exports = {
  loginAdmin,
};