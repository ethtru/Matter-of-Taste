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
    name: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: true, 
    modelName: 'recipe_post',
    freezeTableName: true,
    underscored: true,
  }
);

module.exports = RecipePost;