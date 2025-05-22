const express = require("express");
const app = express();
const cors = require("cors");
const dotenv = require("dotenv");
const connectDb = require("./db/db");
const authRoutes = require("./routes/authRoutes");

dotenv.config();
const PORT = process.env.PORT || 5000;

// Connect to the database before starting the server
connectDb();

app.use(express.json());
app.use(cors());
// Basic route
app.get("/", (req, res) => {
  res.status(400).json({ message: "Welcome to our web app" });
});

// Auth routes
app.use("/api/auth", authRoutes);

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});














