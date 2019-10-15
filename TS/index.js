"use strict";
exports.__esModule = true;
var car_1 = require("./car");
var myAudi = new car_1.Car();
myAudi.move('LEFT');
myAudi.location([
    {
        time: "Morning",
        location: 'Chennai'
    }
]);
