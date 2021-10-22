'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.changeColumn('Spots', "description", {
      type: Sequelize.TEXT,
    })
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.changeColumn('Spots', "description", {
      type: Sequelize.STRING,
    })
  }
}
