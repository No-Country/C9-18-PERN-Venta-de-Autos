const express = require('express');
const { post } = require('../controllers/car.controller');

const router = express.Router();

// example of a route with index controller get function
router.post('/publish', post);

module.exports = router;