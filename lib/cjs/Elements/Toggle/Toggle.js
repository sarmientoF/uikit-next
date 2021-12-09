"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Toggle = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("@headlessui/react");
var methods_1 = require("../../helpers/methods");
var ToggleComponent = function (_a) {
    var _b = _a.enabled, enabled = _b === void 0 ? false : _b, _c = _a.setEnabled, setEnabled = _c === void 0 ? function () { } : _c;
    return ((0, jsx_runtime_1.jsxs)(react_1.Switch, __assign({ checked: enabled, onChange: setEnabled, className: (0, methods_1.classNames)(enabled ? 'bg-primary-600' : 'bg-gray-200', 'relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500') }, { children: [(0, jsx_runtime_1.jsx)("span", __assign({ className: "sr-only" }, { children: "Use setting" }), void 0), (0, jsx_runtime_1.jsx)("span", { "aria-hidden": "true", className: (0, methods_1.classNames)(enabled ? 'translate-x-5' : 'translate-x-0', 'pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200') }, void 0)] }), void 0));
};
exports.Toggle = Object.assign(ToggleComponent, {});
exports.default = exports.Toggle;
