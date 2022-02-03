'use strict';
module.exports = (sequelize, DataTypes) => {
  const Booking = sequelize.define('Booking', {
    userId: DataTypes.INTEGER,
    spotId: DataTypes.INTEGER,
    startDate: DataTypes.STRING,
    endDate: DataTypes.STRING,
  }, {});
  Booking.associate = function(models) {
    // associations can be defined here
    Booking.belongsTo(models.User, { foreignKey: 'userId'});
    Booking.belongsTo(models.Spot, { foreignKey: 'spotId'});
  };
  return Booking;
};
