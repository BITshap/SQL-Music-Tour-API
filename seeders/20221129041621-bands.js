'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('bands', [{
      band_name: 'The Beatles',
      genre: 'Rock',
      available_start_time: '10-22-22',
      end_time: '10-23-22'
    }])
  },

  down: async (queryInterface, Sequelize) => {
   await queryInterface.bulkDelete('bands', null, {})
  }
};
