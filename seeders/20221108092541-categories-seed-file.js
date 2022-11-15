'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Categories',
      ['初代鋼彈', '鋼彈0080', '鋼彈0083', 'Z鋼彈', 'ZZ鋼彈', '逆襲的夏亞', '鋼彈NT', '鋼彈F91', '海盜鋼彈', 'V鋼彈', 'G武鬥傳', '鋼彈W', 'W無盡的華爾茲', '鋼彈X', '鋼彈SEED', '鋼彈SEED DESTINY', '鋼彈00', '鋼彈AGE', '逆A', '鐵血孤兒', '水星的魔女']
        .map(item => {
          return {
            name: item,
            created_at: new Date(),
            updated_at: new Date()
          }
        }
        ), {})
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Categories', {})
  }
};
