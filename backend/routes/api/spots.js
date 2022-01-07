const express = require('express');
const asyncHandler = require('express-async-handler');
const { Spot, Image, User } = require('../../db/models');
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
  const {
    userId, place, type, space, description,
    guests, beds, bedrooms, bathrooms,
    address, photos, amenities, title, price
  } = req.body;
  console.log(req.body, 'yooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo');
  const spot = await Spot.create({
    userId, place, type, space, description,
    guests, beds, bedrooms, bathrooms,
    address, title, price
  });

  return res.json({
    spot,
  });
}))

router.get('/:id', asyncHandler(async (req, res) => {
  const { id } = req.params;
  const spot = await Spot.findByPk(id, {
    include: [Image, User]
  });

  return res.json({
    spot,
  });
}));

router.put('/:id', asyncHandler(async (req, res) => {
  const { id } = req.params;
  const {address, price, name, city, state, description} = req.body;
  const spot = await Spot.findByPk(id);
  await spot.update({
    address,
    price,
    name,
    city,
    state,
    description,
  });
  return res.json({
    spot: spot.dataValues,
  });
}))

router.delete('/:id', asyncHandler(async (req, res) => {
  const { id } = req.params;
  const spot = await Spot.findByPk(id);
  spot.destroy();
  res.status(204)
  return res.json({
    message: 'Spot deleted. Ok.'
  })
}))

module.exports = router;
