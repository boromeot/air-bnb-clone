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
  const {address, price, name, city, state} = req.body;
  const spot = await Spot.findByPk(id);
  await spot.update({
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

router.delete('/:id', asyncHandler(async (req, res) => {
  const { id } = req.params;
  const spot = await Spot.findByPk(id);
  spot.destroy();
}))

module.exports = router;
