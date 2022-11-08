'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
   await queryInterface.addColumn('Characters', 'categoryId', {
    type: Sequelize.INTEGER,
    allowNull: false,
    references: {
      model: 'Categories',
      key: 'id'
    }
   })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColum('Characters', 'categoryId')
  }
};
