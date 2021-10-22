'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.changeColumn('Images', 'url', {
      type: Sequelize.TEXT,
    })
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.changeColumn('Images', 'url', {
      type: Sequelize.STRING,
    })
  }
}
