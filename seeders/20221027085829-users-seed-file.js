'use strict';
const bcrypt = require('bcryptjs')

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users', [{
      email: 'root@example.com',
      password: await bcrypt.hash('123456', 10),
      name: 'root',
      is_admin: true,
      created_at: new Date(),
      updated_at: new Date()
    },{
      email: 'user1@example.com',
      password: await bcrypt.hash('123456', 10),
      name: 'user',
      is_admin: false,
      created_at: new Date(),
      updated_at: new Date()
    }, {
      email: 'user2@example.com',
      password: await bcrypt.hash('123456', 10),
      name: 'user2',
      is_admin: false,
      created_at: new Date(),
      updated_at: new Date()
    }], {})
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', {})
  }
};
