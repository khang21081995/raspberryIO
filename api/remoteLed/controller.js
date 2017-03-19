'use strict';

var five = require("johnny-five");
var Raspi = require("raspi-io");//wiring....... sudo apt-get install wiring
var board = new five.Board({
    io: new Raspi()
});
var led;
board.on("ready", function () {
    led = new five.Led("P1-13");
});
module.exports = {
    onLed: function (req, res) {
         led.on();
        console.log("on led");
        res.json({message: "Led: ON"});
    },
    offLed: function (req, res) {
        led.off();
        console.log("off led");
        res.json({message: "Led: OFF"});
    },
    blink: function (req, res) {
         led.blink(500);
        console.log("blink led");
        res.json({message: "Led: blink"});
    },

}
