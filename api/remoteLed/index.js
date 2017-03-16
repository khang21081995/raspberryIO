'use strict';

var express = require('express');
var controller = require('./result.controller');

var router = express.Router();

router.get('/all', controller.findAll);
router.get('/user/:account', controller.findByUser);
router.post('/on',controller.onLed);
router.post('/off',controller.offLed);
module.exports = router;
