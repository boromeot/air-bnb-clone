'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Amenities', [
      {
        spotId: 1,
        name: 'Patio',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        spotId: 1,
        name: 'BBQ grill',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        spotId: 2,
        name: 'Patio',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        spotId: 2,
        name: 'Fire pit',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        spotId: 2,
        name: 'BBQ grill',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        spotId: 3,
        name: 'Patio',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        spotId: 3,
        name: 'BBQ grill',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        spotId: 3,
        name: 'Outdoor dining area',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        spotId: 4,
        name: 'Patio',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        spotId: 4,
        name: 'BBQ grill',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        spotId: 4,
        name: 'Outdoor dining area',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        spotId: 5,
        name: 'Outdoor dining area',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        spotId: 5,
        name: 'BBQ grill',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        spotId: 5,
        name: 'Fire pit',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        spotId: 5,
        name: 'Pool table',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        spotId: 5,
        name: 'Patio',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Amenities', null, {});
  }
};
