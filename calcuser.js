"use strict";
exports.__esModule = true;
var calc_1 = require("./calc");
console.log((0, calc_1.add)(2, 3));
console.log((0, calc_1.sub)(10, 5));
console.warn("======================================");
var calc_2 = require("./calc");
var objCalc = new calc_2.Calculator();
console.log(objCalc.add(2, 3));
console.log(objCalc.sub(10, 5));
