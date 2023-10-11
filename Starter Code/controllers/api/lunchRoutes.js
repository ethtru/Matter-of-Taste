const express = require("express");
const router = express.Router();
const { Lunch } = require("../../models");

// Get all lunch dishes
router.get("/", async (req, res) => {
  try {
    const lunchDishes = await Lunch.findAll();
    res.json(lunchDishes);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});

// Get a single lunch dish by ID
router.get("/:id", async (req, res) => {
  try {
    const lunchDish = await Lunch.findByPk(req.params.id);
    if (!lunchDish) {
      return res.status(404).json({ error: "Lunch dish not found" });
    }
    res.json(lunchDish);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = router;
