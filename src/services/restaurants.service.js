const db = require('../../models');

const getRestaurants = async () => {
  const restaurants = await db.restaurants.findAll();
  return restaurants;
};

module.exports = { getRestaurants };
