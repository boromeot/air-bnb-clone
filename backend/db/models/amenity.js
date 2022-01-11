'use strict';
module.exports = (sequelize, DataTypes) => {
  const Amenity = sequelize.define('Amenity', {
    spotId: DataTypes.INTEGER,
    name: DataTypes.STRING
  }, {});
  Amenity.associate = function(models) {
    // associations can be defined here
    Amenity.belongsTo(models.Spot, { foreignKey: 'spotId'});
  };
  return Amenity;
};
