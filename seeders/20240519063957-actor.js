'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Actor',
      [
        {
          first_name: "Budi",
          last_name: "Budiana",
          createdAt: new Date(),
          updatedAt: new Date(),
        }, {
          first_name: "Asep",
          last_name: "Solihin",
          createdAt: new Date(),
          updatedAt: new Date(),
        }, {
          first_name: "Atep",
          last_name: "Febri",
          createdAt: new Date(),
          updatedAt: new Date(),
        }, {
          first_name: "Jajang",
          last_name: "Nurjaman",
          createdAt: new Date(),
          updatedAt: new Date(),
        }, {
          first_name: "Soleh",
          last_name: "Solehun",
          createdAt: new Date(),
          updatedAt: new Date(),
        }
      ])
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Actor', null, {});
  }
};
