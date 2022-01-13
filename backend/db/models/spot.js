'use strict';
module.exports = (sequelize, DataTypes) => {
  const Spot = sequelize.define('Spot', {
    userId: DataTypes.INTEGER,
    title: DataTypes.STRING,
    price: DataTypes.NUMBER,
    address: DataTypes.STRING,
    city: DataTypes.STRING,
    state: DataTypes.STRING,
    description: DataTypes.TEXT,
    place: DataTypes.STRING,
    type: DataTypes.STRING,
    space: DataTypes.STRING,
    guests: DataTypes.INTEGER,
    beds: DataTypes.INTEGER,
    bedrooms: DataTypes.INTEGER,
    bathrooms: DataTypes.INTEGER,
  }, {});
  Spot.associate = function(models) {
    // associations can be defined here
    Spot.belongsTo(models.User, { foreignKey: 'userId' });
    Spot.hasMany(models.Booking, { foreignKey: 'spotId', onDelete: 'CASCADE', hooks: true});
    Spot.hasMany(models.Review, { foreignKey: 'spotId', onDelete: 'CASCADE', hooks: true});
    Spot.hasMany(models.Image, { foreignKey: 'spotId', onDelete: 'CASCADE', hooks: true});
    Spot.hasMany(models.Amenity, { foreignKey: 'spotId', onDelete: 'CASCADE', hooks: true });
  };
  return Spot;
};
