'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Character extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Character.belongsTo(models.Category, { foreignKey: 'categoryId' })
      Character.belongsToMany(models.User, {
        through: models.Like,
        foreignKey: 'characterId',
        as: 'LikedUsers'
      })
    }
  }
  Character.init({
    name: DataTypes.STRING,
    year: DataTypes.STRING,
    description: DataTypes.TEXT,
    avatarName: DataTypes.STRING,
    avatar: DataTypes.STRING,
    image: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Character',
    tableName: 'Characters',
  });
  return Character;
};