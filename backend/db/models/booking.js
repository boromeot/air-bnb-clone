'use strict';
module.exports = (sequelize, DataTypes) => {
  const Booking = sequelize.define('Booking', {
    userId: DataTypes.INTEGER,
    spotId: DataTypes.INTEGER,
    startDate: DataTypes.DATE,
    endDate: DataTypes.DATE,
    monthIndex: DataTypes.STRING,
    date: DataTypes.STRING,
    yearIndex: DataTypes.STRING,
  }, {});
  Booking.associate = function(models) {
    // associations can be defined here
    Booking.belongsTo(models.User, { foreignKey: 'userId'});
    Booking.belongsTo(models.Spot, { foreignKey: 'spotId'});
  };
  return Booking;
};
