/* eslint-disable no-unused-vars */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('restaurants', [

      {
        RestaurantName: 'Restaurant A',
        priceForTwo: 200,
        location: 'Bangalore',
        createdAt: new Date(),
        updatedAt: new Date(),

      },
      {
        RestaurantName: 'Restaurant B',
        priceForTwo: 2000,
        location: 'Bangalore',
        createdAt: new Date(),
        updatedAt: new Date(),

      },
      {
        RestaurantName: 'Restaurant C',
        priceForTwo: 1500,
        location: 'Bangalore',
        createdAt: new Date(),
        updatedAt: new Date(),

      },
      {
        RestaurantName: 'Restaurant D',
        priceForTwo: 15000,
        location: 'Bangalore',
        createdAt: new Date(),
        updatedAt: new Date(),

      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkInsert('restaurants', null, {});
  },
};
