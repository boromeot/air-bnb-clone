const express = require('express');
const asyncHandler = require('express-async-handler');
const { Booking } = require('../../db/models');
const router = express.Router();

router.post('/', asyncHandler(async (req, res) => {
  console.log('enter post');
  const {userId, spotId, startDate, endDate} = req.body;
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

module.exports = router;
