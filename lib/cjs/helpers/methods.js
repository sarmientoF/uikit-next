"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.classNames = void 0;
function classNames() {
    var classes = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        classes[_i] = arguments[_i];
    }
    return classes.filter(Boolean).join(' ');
}
exports.classNames = classNames;
