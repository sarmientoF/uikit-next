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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ButtonGroup = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var methods_1 = require("../../helpers/methods");
var Button_1 = __importDefault(require("../Button/Button"));
var ButtonGroupComponent = function (_a) {
    var _b = _a.className, className = _b === void 0 ? '' : _b, children = _a.children, _c = _a.onMouseEnter, onMouseEnter = _c === void 0 ? function () {
        console.log('mouse entered item');
    } : _c, _d = _a.onMouseLeave, onMouseLeave = _d === void 0 ? function () {
        console.log('mouse leaved item');
    } : _d;
    return ((0, jsx_runtime_1.jsx)("span", __assign({ className: (0, methods_1.classNames)('relative z-0 inline-flex shadow-sm rounded-md', className), onMouseEnter: onMouseEnter, onMouseLeave: onMouseLeave }, { children: children !== null && children !== void 0 ? children : ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(LeftButton, {}, void 0), (0, jsx_runtime_1.jsx)(MiddleButton, {}, void 0), (0, jsx_runtime_1.jsx)(RightButton, {}, void 0)] }, void 0)) }), void 0));
};
var LeftButton = function (_a) {
    var _b = _a.className, className = _b === void 0 ? '' : _b, children = _a.children, props = __rest(_a, ["className", "children"]);
    return ((0, jsx_runtime_1.jsx)(Button_1.default, __assign({ className: (0, methods_1.classNames)(className, 'relative px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm text-gray-700 hover:bg-gray-50 focus:z-10'), buttonType: Button_1.default.buttonType.transparent }, props, { children: children !== null && children !== void 0 ? children : 'Years' }), void 0));
};
var MiddleButton = function (_a) {
    var _b = _a.className, className = _b === void 0 ? '' : _b, children = _a.children, props = __rest(_a, ["className", "children"]);
    return ((0, jsx_runtime_1.jsx)(Button_1.default, __assign({ className: (0, methods_1.classNames)(className, '-ml-px relative px-2 py-2 border border-gray-300 bg-white text-sm text-gray-700 hover:bg-gray-50 focus:z-10'), buttonType: Button_1.default.buttonType.transparent }, props, { children: children !== null && children !== void 0 ? children : 'Months' }), void 0));
};
var RightButton = function (_a) {
    var _b = _a.className, className = _b === void 0 ? '' : _b, children = _a.children, props = __rest(_a, ["className", "children"]);
    return ((0, jsx_runtime_1.jsx)(Button_1.default, __assign({ className: (0, methods_1.classNames)(className, '-ml-px relative px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm text-gray-700 hover:bg-gray-50 focus:z-10'), buttonType: Button_1.default.buttonType.transparent }, props, { children: children !== null && children !== void 0 ? children : 'Days' }), void 0));
};
exports.ButtonGroup = Object.assign(ButtonGroupComponent, {
    LeftButton: LeftButton,
    MiddleButton: MiddleButton,
    RightButton: RightButton,
});
exports.default = exports.ButtonGroup;
