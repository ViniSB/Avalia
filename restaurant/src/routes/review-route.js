'use strict'

const express = require('express');
const router = express.Router();
const controller = require('../controllers/review-controller');

router.post('/', controller.post);
router.get('/:plate', controller.getRating);

module.exports = router;