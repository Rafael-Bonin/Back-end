'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.bulkInsert('Users', [
    {
      fullname: 'Rafael',
      email: 'rafalyf11@gmai.com',
      mother_name: 'Jeneci',
      address: 'sitio cercado',
      createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
    },
    {
      fullname: 'Felipe Miranda',
      email: 'feehhmlo@gmail.com',
      address: 'roberto barroso',
      mother_name: 'Maria',
      createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
    },
  ], {}),

  down: async (queryInterface, Sequelize) => queryInterface.bulkDelete('Users', null, {}),
};
