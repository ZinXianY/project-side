'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('Characters', 'avatar', {
      type: Sequelize.STRING
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('Characters', 'avatar')
  }
};
