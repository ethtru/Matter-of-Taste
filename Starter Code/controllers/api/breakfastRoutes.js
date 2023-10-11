const express = require("express");
const router = require('express').Router();
const { Breakfast } = require("../../models");

// Get all breakfast dishes
router.get("/", async (req, res) => {
  try {
    const breakfastDishes = await Breakfast.findAll();
    res.json(breakfastDishes);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});

// Get a single breakfast dish by ID
router.get("/:id", async (req, res) => {
  try {
    const breakfastDish = await Breakfast.findByPk(req.params.id);
    if (!breakfastDish) {
      return res.status(404).json({ error: "Breakfast dish not found" });
    }
    res.json(breakfastDish);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = router;
