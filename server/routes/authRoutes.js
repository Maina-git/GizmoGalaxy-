const express = require("express");
const router = express.Router();
const authController = require("../controller/authController");

// Test route (optional)
/*router.get("/", (req, res) => {
  res.send("Auth route working");
})*/;

// Register route
router.post("/register", authController.register);

// Login route
router.post("/login", authController.login);

module.exports = router;
