'use strict';
let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}
module.exports = {
  up: (queryInterface, Sequelize) => {
    options.tableName = 'Amenities';
    return queryInterface.bulkInsert(options, [
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
      {
        spotId: 6,
        name: 'BBQ grill',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        spotId: 6,
        name: 'Kitchen',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        spotId: 6,
        name: 'Patio',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        spotId: 6,
        name: 'Outdoor dining area',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        spotId: 7,
        name: 'Outdoor dining area',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        spotId: 7,
        name: 'Fire pit',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        spotId: 7,
        name: 'Pool table',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        spotId: 7,
        name: 'Exercise equipment',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        spotId: 7,
        name: 'BBQ grill',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        spotId: 8,
        name: 'Hot tub',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        spotId: 8,
        name: 'Patio',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        spotId: 8,
        name: 'BBQ grill',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        spotId: 9,
        name: 'Outdoor dining area',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        spotId: 9,
        name: 'Fire pit',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        spotId: 9,
        name: 'Patio',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        spotId: 10,
        name: 'Kitchen',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        spotId: 10,
        name: 'Patio',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        spotId: 10,
        name: 'Indoor fireplace',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        spotId: 10,
        name: 'Fire pit',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        spotId: 10,
        name: 'BBQ grill',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        spotId: 11,
        name: 'Patio',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        spotId: 11,
        name: 'Indoor fireplace',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        spotId: 12,
        name: 'Patio',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        spotId: 12,
        name: 'Outdoor dining area',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        spotId: 12,
        name: 'BBQ grill',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        spotId: 13,
        name: 'Fire pit',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        spotId: 13,
        name: 'BBQ grill',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        spotId: 13,
        name: 'Patio',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        spotId: 14,
        name: 'Patio',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        spotId: 14,
        name: 'Pool',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        spotId: 14,
        name: 'BBQ grill',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        spotId: 15,
        name: 'Patio',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        spotId: 15,
        name: 'Hot tub',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        spotId: 15,
        name: 'Outdoor dining area',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        spotId: 16,
        name: 'Patio',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        spotId: 16,
        name: 'Outdoor dining area',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        spotId: 16,
        name: 'BBQ grill',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        spotId: 16,
        name: 'Pool',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    options.tableName = 'Amenities';
    return queryInterface.bulkDelete(options);
  }
};
