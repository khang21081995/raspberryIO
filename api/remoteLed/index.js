'use strict';

var express = require('express');
var controller = require('./controller');
var router = express.Router();

router.post('/on', controller.onLed);
router.post('/off', controller.offLed);
router.post('/blink', controller.blink);

module.exports = router;
