const express = require('express');
const asyncHandler = require('express-async-handler');
const { Booking, Spot, Image } = require('../../db/models');
const router = express.Router();

router.get('/user/:userId', asyncHandler(async (req, res) => {
  const { userId } = req.params;
  const bookings = await Booking.findAll({
    where: {
      userId
    },
    include: {
      model: Spot,
      include: Image
    }
  })

  return res.json({
    bookings,
  });
}));

router.post('/', asyncHandler(async (req, res) => {
  const {userId, spotId, startDate, endDate, monthIndex, date, yearIndex} = req.body;
  console.log(req.body);
  const booking = await Booking.create({
    userId,
    spotId,
    startDate,
    endDate,
  });

  return res.json({
    booking,
  });
}))

router.delete('/:id', asyncHandler(async (req, res) => {
  const { id } = req.params;
  const booking = await Booking.findByPk(+id);
  booking.destroy();

  res.status(204);
  return res.json({
    message: 'Booking deleted. Ok'
  });
}))

module.exports = router;
