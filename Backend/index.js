require("dotenv").config();

const express = require("express");
const cors = require("cors");

const app = express();

app.use(
  cors({
    origin: [
      "https://stepwayelevators.com",
      "https://www.stepwayelevators.com",
      "https://stepway-elevators.vercel.app"
    ],
    credentials: true,
  })
);
app.use(express.json());

// Routes
app.get("/", (req, res) => {
  res.send("Backend Running");
});

// Example
app.use("/api/products", require("./routes/productRoutes"));
app.use("/api/contact", require("./routes/contactRoutes"));
app.use("/api/admin", require("./routes/adminRoutes"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});