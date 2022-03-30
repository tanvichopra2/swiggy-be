/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
const { sequelize } = require('../models');

module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.addColumn('dishes', 'restaurant_id', {
      type: Sequelize.INTEGER,
      onDelete: 'cascade',
      references: {
        model: 'restaurants',
        key: 'id',
      },

    });
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     *
     */
    await queryInterface.removeColumn('dishes', 'restaurant-id');
  },
};
