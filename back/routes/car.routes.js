const express = require('express');
const { post, get } = require('../controllers/car.controller');

const router = express.Router();

router.post('/publish', post);

router.get('/all', get);

module.exports = router;