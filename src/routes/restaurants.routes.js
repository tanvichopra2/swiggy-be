const express = require('express');

const router = express.Router();
const handlers = require('../handlers/restaurants.handlers');

router.get('/restaurants', handlers.getRestaurants);

module.exports = { router };
