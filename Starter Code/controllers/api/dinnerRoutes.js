const express = require("express");
const router = express.Router();
const { Dinner } = require("../models");

// Get all dinner dishes
router.get("/", async (req, res) => {
  try {
    const dinnerDishes = await Dinner.findAll();
    res.json(dinnerDishes);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});

// Get a single dinner dish by ID
router.get("/:id", async (req, res) => {
  try {
    const dinnerDish = await Dinner.findByPk(req.params.id);
    if (!dinnerDish) {
      return res.status(404).json({ error: "Dinner dish not found" });
    }
    res.json(dinnerDish);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = router;
