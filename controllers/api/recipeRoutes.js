const express = require("express");
const router = express.Router();
const { Recipe, User } = require("../../models");

// Get all recipes
router.get("/", async (req, res) => {
  console.log("hitting the getall recipes");
  try {
    const recipes = await Recipe.findAll();
    res.json(recipes);
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
});
// Get all recipes by meal classification

// router.get("/:meal_classification", async (req, res) => {
//   const { meal_classification } = req.params;

//   if (
//     !["Breakfast", "Lunch", "Dessert", "Dinner"].includes(meal_classification)
//   ) {
//     return res.status(400).json({ message: "Incorrect meal type" });
//   }

//   try {
//     const recipes = await Recipe.findAll({
//       where: { meal_classification },
//     });

//     res.json(recipes);
//   } catch (error) {
//     res.status(500).json({ message: "Internal server error" });
//   }
// });

router.get("/meal/:meal_classification", async (req, res) => {
  const { meal_classification } = req.params;
  console.log("hitting the categoric recipes", meal_classification);
  if (
    !["Breakfast", "Lunch", "Dessert", "Dinner"].includes(meal_classification)
  ) {
    return res.status(400).json({ message: "Incorrect meal type" });
  }
  try {
    const recipes = await Recipe.findAll({
      where: { meal_classification },
    });
    console.log("we got the recipes!", recipes, meal_classification);
    res.render(`${meal_classification.toLowerCase()}-recipes`, { recipes });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
});

// Get Breakfast

// router.get("/breakfast", async (req, res) => {
//   try {
//     const breakfastRecipes = await Recipe.findAll({
//       where: { meal_classification: "Breakfast" },
//     });
//     res.json(breakfastRecipes);
//   } catch (error) {
//     res.status(500).json({ message: "Internal server error" });
//   }
// });

// // Get Lunch

// router.get("/lunch", async (req, res) => {
//   try {
//     const lunchRecipes = await Recipe.findAll({
//       where: { meal_classification: "Lunch" },
//     });
//     res.json(lunchRecipes);
//   } catch (error) {
//     res.status(500).json({ message: "Internal server error" });
//   }
// });

// // Get Dinner

// router.get("/dessert", async (req, res) => {
//   try {
//     const dessertRecipes = await Recipe.findAll({
//       where: { meal_classification: "Dessert" },
//     });
//     res.json(dessertRecipes);
//   } catch (error) {
//     res.status(500).json({ message: "Internal server error" });
//   }
// });

// // Get Dessert

// router.get("/dinner", async (req, res) => {
//   try {
//     const dinnerRecipes = await Recipe.findAll({
//       where: { meal_classification: "Dinner" },
//     });
//     res.json(dinnerRecipes);
//   } catch (error) {
//     res.status(500).json({ message: "Internal server error" });
//   }
// });

// Get a single recipe by ID

router.get("/:id", async (req, res) => {
  try {
    const recipe = await Recipe.findByPk(req.params.id, {
      raw: true,
      nest: true,
      include: "user",
    }); //route parameter
    // req.query.id
    if (!recipe) {
      return res.status(404).json({ message: "Recipe not found" });
    }
    console.log("recipe: ", recipe);
    res.render("recipe", { recipe });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
});

// Create a new recipe

router.post("/", async (req, res) => {
  try {
    const newRecipe = await Recipe.create({
      ...req.body,
      user_id: req.session.userId,
    });
    res.status(201).json(newRecipe);
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
});

// Update an existing recipe by ID

router.put("/:id", async (req, res) => {
  try {
    const recipe = await Recipe.findByPk(req.params.id);
    if (!recipe) {
      return res.status(404).json({ message: "Recipe not found" });
    }
    await recipe.update(req.body);
    res.json(recipe);
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
});

// Delete a recipe by ID

router.delete("/:id", async (req, res) => {
  try {
    const recipe = await Recipe.findByPk(req.params.id);
    if (!recipe) {
      return res.status(404).json({ message: "Recipe not found" });
    }
    await recipe.destroy();
    res.json({ message: "Recipe deleted" });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
});

module.exports = router;
