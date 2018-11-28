'use strict'

const express = require('express');
const router = express.Router();
const controller = require('../controllers/restaurant-controller');

router.post('/', controller.post);
router.put('/:id', controller.put);
router.get('/location/:location', controller.getByLocation);

module.exports = router;