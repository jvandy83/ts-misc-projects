"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dateStringToDate = function (dateString) {
    var _a = dateString.split('/').map(function (n) { return parseInt(n); }), month = _a[0], day = _a[1], year = _a[2];
    return new Date(day, month - 1, year);
};
