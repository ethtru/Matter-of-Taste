const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");
const Category = require("../Category");

class Dinner extends Category {}

Dinner.init (
    {
    id: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    dishName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    Category: {
        type: DataTypes.STRING,

    },
    Instructions: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [500],
         },
     },
    Ingredients: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [500],
        },
    },
 }, 
 {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "dinner",
  }
);

module.exports = Dinner;
