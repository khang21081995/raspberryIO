'use strict';

var express = require('express');
var controller = require('./result.controller');

var router = express.Router();

router.get('/all', controller.findAll);
router.get('/user/:account', controller.findByUser);
router.get('/on',controller.onLed);
router.get('/off',controller.offLed);
module.exports = router;
