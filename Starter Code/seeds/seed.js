const sequelize = require("../config/connection");
const { User, Recipe, Category } = require("../models");

const userData = require("./userData.json");
const recipeData = require("./recipeData.json");
const categoryData = require("./category.json");

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });
  await Recipe.bulkCreate(recipeData, {
    //DO WE NEED THIS RETURNING TRUE?
    returning: true,
  });
  await Category.bulkCreate(categoryData, {
    //DO WE NEED THIS RETURNING TRUE?
    returning: true,
  });

  process.exit(0);
};

seedDatabase();
