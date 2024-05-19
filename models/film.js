'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Film extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      film.belongsToMany(models.category, { through: models.film_category, foreignKey: 'film_id' });
    }
  }
  Film.init({
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    release_year: DataTypes.INTEGER,
    language_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Film',
  });
  return Film;
};