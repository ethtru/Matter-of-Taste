const express = require("express");
const router = express.Router();
const { Recipe } = require("../models");

// Get all recipes
router.get("/", async (req, res) => {
  try {
    const recipes = await Recipe.findAll();
    res.json(recipes);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});

// Get a single recipe by ID
router.get("/:id", async (req, res) => {
  try {
    const recipe = await Recipe.findByPk(req.params.id);
    if (!recipe) {
      return res.status(404).json({ error: "Recipe not found" });
    }
    res.json(recipe);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});

// Create a new recipe
router.post("/", async (req, res) => {
  try {
    const newRecipe = await Recipe.create(req.body);
    res.status(201).json(newRecipe);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});

// Update an existing recipe by ID
router.put("/:id", async (req, res) => {
  try {
    const recipe = await Recipe.findByPk(req.params.id);
    if (!recipe) {
      return res.status(404).json({ error: "Recipe not found" });
    }
    await recipe.update(req.body);
    res.json(recipe);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});

// Delete a recipe by ID
router.delete("/:id", async (req, res) => {
  try {
    const recipe = await Recipe.findByPk(req.params.id);
    if (!recipe) {
      return res.status(404).json({ error: "Recipe not found" });
    }
    await recipe.destroy();
    res.json({ message: "Recipe deleted" });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = router;
