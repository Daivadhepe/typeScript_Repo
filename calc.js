"use strict";
exports.__esModule = true;
exports.Calculator = exports.sub = exports.add = void 0;
function add(x, y) {
    return x + y;
}
exports.add = add;
function sub(x, y) {
    return x - y;
}
exports.sub = sub;
console.warn("=====================");
var Calculator = /** @class */ (function () {
    function Calculator() {
    }
    Calculator.prototype.add = function (x, y) {
        return x + y;
    };
    Calculator.prototype.sub = function (x, y) {
        return x - y;
    };
    return Calculator;
}());
exports.Calculator = Calculator;
