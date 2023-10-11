const router = require('express').Router();
const express = require("express");
const { Dessert } = require("../../models");

// Get all dessert dishes
router.get("/", async (req, res) => {
  try {
    const dessertDishes = await Dessert.findAll();
    res.json(dessertDishes);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});

// Get a single dessert dish by ID
router.get("/:id", async (req, res) => {
  try {
    const dessertDish = await Dessert.findByPk(req.params.id);
    if (!dessertDish) {
      return res.status(404).json({ error: "Dessert dish not found" });
    }
    res.json(dessertDish);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = router;
