const User = require("./User");
const Recipe = require("./Recipe");

//ADDED RECIPE VARIABLE AND INCLUDED IT INTO THE EXPORTS
module.exports = { User, Recipe };

// This alows finding a user, including his/her recipes...
User.hasMany(Recipe, { as: "recipe", foreignKey: "user_id" });

// This allows finding a recipe, including its user
Recipe.belongsTo(User, { as: "user", foreignKey: "user_id" });
