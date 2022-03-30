const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class restaurants extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ dishes }) {
      restaurants.hasMany(dishes, {
        foreignKey: 'id',
      });
      // define association here
    }
  }
  restaurants.init({
    RestaurantName: DataTypes.STRING,
    priceForTwo: DataTypes.INTEGER,
    location: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'restaurants',
  });
  return restaurants;
};
