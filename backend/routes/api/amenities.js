const express = require('express');
const asyncHandler = require('express-async-handler');
const { Amenity } = require('../../db/models');
const router = express.Router();

router.post('/', asyncHandler(async (req, res) => {
  const { spotId, amenities } = req.body;

  const dbAmenities = amenities.map(async amentiy => {
    return await Amenity.create({
      spotId,
      name: amentiy
    });
  });

  return res.json({
    dbAmenities
  });

}));

module.exports = router;
