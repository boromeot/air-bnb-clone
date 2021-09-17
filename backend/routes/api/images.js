const express = require('express');
const asyncHandler = require('express-async-handler');
const { Image } = require('../../db/models');
const router = express.Router();

//Should refactor this route and CREATE cycle.
//The urls should be refactored into an array, instead of being an object
router.post('/', asyncHandler(async (req, res) => {
  const {spotId, urls} = req.body;
  console.log('typeof', typeof urls);
  const images = Object.values(urls).map(async url => {
    return await Image.create({
      spotId,
      url,
    });
  });
  return res.json({
    images,
  });
}));

module.exports = router;
