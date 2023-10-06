const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");
const Category = require("../Category");

class Lunch extends Category {}

Lunch.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    dishName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    categoryId: { 
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Category', 
        key: 'id', 
      },
    },
    Instructions: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 500], 
      },
    },
    Ingredients: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 500], 
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "lunch",
  }
);

module.exports = Lunch;