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
    name: {
      type: DataTypes.TEXT,
      allowNull: false,
    }
    // PER TUTOR THIS WILL PREVENT CATEGORIES FROM BEING PULLED BC IT REFERENCES ITSELF
    // categoryId: { 
    //   type: DataTypes.INTEGER,
    //   allowNull: false,
    //   references: {
    //     model: 'Category', 
    //     key: 'id', 
    //   },
    // },
  //   dishName: { 
  //     type: DataTypes.STRING,
  //     allowNull: false,
  //   },
  //   Instructions: {
  //     type: DataTypes.STRING,
  //     allowNull: false,
  //     validate: {
  //       len: [1, 500], 
  //     },
  //   },
  //   Ingredients: {
  //     type: DataTypes.STRING,
  //     allowNull: false,
  //     validate: {
  //       len: [1, 500], 
  //     },
  //   },
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
