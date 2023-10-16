const { Model, DataTypes, TEXT } = require("sequelize");
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
      type: DataTypes.TEXT,
      allowNull: false,
    },
    instructions: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    picture: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    meal_classification: {
      //THIS PRESENTS THE ONLY CATEGORIES THAT CAN BE SELECTED
      type: DataTypes.STRING,
    },
    content: {
      type: TEXT("long"),
    },

    // user_id: {
    //   type: DataTypes.INTEGER,
    //   references: {
    //     model: "",
    //     key: "",
    //   },
    // },
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
