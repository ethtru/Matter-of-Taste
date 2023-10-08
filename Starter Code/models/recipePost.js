const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class RecipePost extends Model {}

RecipePost.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    ingredients: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    instructions: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    // Add more fields as needed (e.g., author, category, date, etc.).
  },
  {
    sequelize,
    timestamps: true, // Enable timestamps (createdAt, updatedAt)
    modelName: 'recipe_post',
    freezeTableName: true,
    underscored: true,
  }
);

module.exports = RecipePost;