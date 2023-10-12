const express = require("express");
const router = express.Router();
const { User } = require("../models");
const bcrypt = require("bcrypt");

// Create a new user
router.post("/users", async (req, res) => {
  try {
    const newUser = await User.create(req.body);
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
});

// Get all users
router.get("/users", async (req, res) => {
  try {
    const users = await User.findAll();
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
});

// Get a single user by ID
router.get("/users/:id", async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
});

// Update user by ID
router.put("/users/:id", async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    await user.update(req.body);
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
});

// Delete user by ID
router.delete("/users/:id", async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    await user.destroy();
    res.json({ message: "User deleted" });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
});

// Login
router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ where: { email: req.body.email } });

    if (!user) {
      return res.status(401).json({ message: "Invalid Username or Password" });
    }

    const validPassword = bcrypt.compareSync(req.body.password, user.password);

    if (!validPassword) {
      return res.status(401).json({ message: "Invalid Username or Password" });
    }

    res.json({ message: "Logging In" });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
});

module.exports = router;
