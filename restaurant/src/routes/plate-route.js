'use strict'

const express = require('express');
const router = express.Router();
const controller = require('../controllers/plate-controller');

router.post('/', controller.post);
router.put('/:id', controller.put);
router.get('/:id', controller.getPlates);
router.get('/search/:plate', controller.getByPlate);

module.exports = router;