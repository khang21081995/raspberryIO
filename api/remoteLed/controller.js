'use strict';

var five = require("johnny-five");
var Raspi = require("raspi-io");
var board = new five.Board({
    io: new Raspi()
});
var led;
board.on("ready", function() {
    led = new five.Led("P1-13");
});
module.exports = {
    onLed: function (req, res) {
            led.on();
    },
    offLed: function (req, res) {
            led.off();
    }
}
