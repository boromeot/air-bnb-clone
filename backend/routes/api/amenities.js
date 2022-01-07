const express = require('express');
const asyncHandler = require('express-async-handler');
const { Amenity } = require('../../db/models');
const router = express.Router();

router.post('/', asyncHandler(async (req, res) => {
  const { userId, amenities } = req.body;

  

  // const amentiy = await Amentity.create({
  //   userId,

  // })

  return res.json({
    images,
  });
}));

module.exports = router;
