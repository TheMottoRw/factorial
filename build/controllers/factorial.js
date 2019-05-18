"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var fact = 1;

var factorial = exports.factorial = function factorial(number) {
    if (number !== 0) {
        fact *= number;
        factorial(--number);
    }
    return fact;
};
//# sourceMappingURL=factorial.js.map