'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('events', [{
      event_id: 1,
      event_name: 'The Beatles Concert!',
      event_start: '8:00:00',
      event_end: '9:00:00',
      event_date: '10-23-24'
    }])
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('events', null, {})
  }
};


