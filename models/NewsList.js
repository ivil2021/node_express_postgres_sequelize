'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class NewsList extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }

  NewsList.init(
    {
      news_title: DataTypes.STRING,
      news_text: DataTypes.STRING,
      news_date: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: 'NewsList',
      freezeTableName: true,
    }
  );

  return NewsList;
};
