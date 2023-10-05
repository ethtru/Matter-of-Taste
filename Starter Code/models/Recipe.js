const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Recipe extends Model {}

Recipe.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    ingredients: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: false,
    },
    instructions: {
      //SO THAT STEPS CAN BE LISTED SEQUENTIALLY
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: false,
    },
    picture: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    meal_classification: {
      //THIS PRESENTS THE ONLY CATEGORIES THAT CAN BE SELECTED
      type: DataTypes.ENUM("Dinner", "Lunch", "Breakfast", "Dessert"),
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "recipe",
  }
);

module.exports = Recipe;
