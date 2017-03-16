'use strict';

var Result = require('./result.model');
var User = require('./../user/user.model');
var ObjectId = require('mongoose').Types.ObjectId;
var five = require("johnny-five");
var Raspi = require("raspi-io");
var board = new five.Board({
    io: new Raspi()
});
var led = new five.Led("P1-7");
module.exports = {
    findAll: function (req, res) {
        Result.find().populate("answers.user").exec(function (err, data) {
            res.json(data);
        });
    },
    findByUser: function (req, res) {
        User.findOne({username: req.params.account}).exec(function (err, data) {
            if (!err && data._id) {
                Result.find({"answers.user": new ObjectId(data._id)}).exec(function (err, data) {
                    res.json(data);
                });
            }

            res.json([]);
        })
    },
    onLed: function (req, res) {
        // board.on("ready", function() {
            led.on();
        // });
    },
    offLed: function (req, res) {
            led.off();
    }
}
