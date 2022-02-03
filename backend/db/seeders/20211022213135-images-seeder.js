'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Images', [
      {
        spotId: 1,
        url: 'https://care-bnb.s3.us-west-1.amazonaws.com/treehouse1.webp',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        spotId: 1,
        url: 'https://care-bnb.s3.us-west-1.amazonaws.com/treehouse2.webp',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        spotId: 1,
        url: 'https://care-bnb.s3.us-west-1.amazonaws.com/treehouse3.webp',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        spotId: 1,
        url: 'https://care-bnb.s3.us-west-1.amazonaws.com/treehouse4.webp',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        spotId: 1,
        url: 'https://care-bnb.s3.us-west-1.amazonaws.com/treehouse5.webp',
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
   return queryInterface.bulkDelete('Images', null, {});
  }
};
