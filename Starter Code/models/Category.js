const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Category extends Model {}

Category.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    categoryName: { 
      type: DataTypes.STRING,
      allowNull: false,
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
    modelName: "category",
  }
);

module.exports = Category;
