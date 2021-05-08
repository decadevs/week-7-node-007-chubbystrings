"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    square: function (side) {
        return side * side;
    },
    triangle: function (a, b, c) {
        var s = (a + b + c) / 2;
        var res = Math.sqrt(s * (s - a) * (s - b) * (s - c));
        return Number(res.toFixed(2));
    },
    rectangle: function (length, breath) {
        return length * breath;
    },
    circle: function (radius) {
        var res = Math.PI * (Math.pow(radius, 2));
        return Number(res.toFixed(2));
    },
};
