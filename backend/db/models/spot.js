'use strict';
module.exports = (sequelize, DataTypes) => {
  const Spot = sequelize.define('Spot', {
    userId: DataTypes.INTEGER,
    name: DataTypes.STRING,
    price: DataTypes.NUMBER,
    address: DataTypes.STRING,
    description: DataTypes.TEXT,
    city: DataTypes.STRING,
    state: DataTypes.STRING,
    lat: DataTypes.NUMBER,
    long: DataTypes.NUMBER
  }, {});
  Spot.associate = function(models) {
    // associations can be defined here
    Spot.belongsTo(models.User, { foreignKey: 'userId' });
    Spot.hasMany(models.Booking, { foreignKey: 'spotId', onDelete: 'CASCADE', hooks: true});
    Spot.hasMany(models.Review, { foreignKey: 'spotId'})
    Spot.hasMany(models.Image, { foreignKey: 'spotId', onDelete: 'CASCADE', hooks: true});
  };
  return Spot;
};
