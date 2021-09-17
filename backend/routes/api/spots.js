const express = require('express');
const asyncHandler = require('express-async-handler');
const { Spot, Image } = require('../../db/models');
const router = express.Router();


router.get('/', asyncHandler(async (req, res) => {
  const spots = await Spot.findAll({
    include: Image
  });
  return res.json({
    spots,
  });
}),
);

router.post('/', asyncHandler(async (req, res) => {
  const {userId, address, price, name, city, state} = req.body;
  const spot = await Spot.create({
    userId,
    address,
    price,
    name,
    city,
    state,
  });
  return res.json({
    spot,
  });
}))

module.exports = router;
