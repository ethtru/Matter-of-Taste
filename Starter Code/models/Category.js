const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Category extends Model {}

Category.init (
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
          },
          Breakfast: {
            
          },
          Lunch: {

          },
          Dinner: {

          },
          dessert: {

          },
    }
)