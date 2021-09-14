'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Spots', [{
      userId: 1,
      name: 'Lake side vacation home',
      price: 241,
      address: '301 Hooyah St',
      city: 'Gainsville',
      state: 'Viginia',
      lat: 21,
      long: 10,
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
  },

  down: (queryInterface, Sequelize) => {
     return queryInterface.bulkDelete('Spots', null, {});
  }
};
