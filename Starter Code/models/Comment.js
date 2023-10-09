const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const User = require('./User');
const Recipe = require('./Recipe');

class Comment extends Model {}

Comment.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: true,
    modelName: 'comment',
    freezeTableName: true,
    underscored: true,
  }
);

Comment.belongsTo(User, { foreignKey: 'user_id' });
Comment.belongsTo(Recipe, { foreignKey: 'recipe_id' });

module.exports = Comment;