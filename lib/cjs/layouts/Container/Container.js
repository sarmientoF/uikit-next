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
exports.Container = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var __1 = require("../..");
var ContainerType;
(function (ContainerType) {
    ContainerType["paddedContent"] = "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8";
    ContainerType["fullWidthMobilePaddedContent"] = "max-w-7xl mx-auto sm:px-6 lg:px-8";
    ContainerType["fullWidthMobilePaddedContentBreakpoint"] = "container mx-auto px-4 sm:px-6 lg:px-8";
    ContainerType["paddedContentNarrow"] = "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8";
})(ContainerType || (ContainerType = {}));
var ContainerComponent = function (_a) {
    var _b = _a.className, className = _b === void 0 ? '' : _b, _c = _a.containerType, containerType = _c === void 0 ? ContainerType.fullWidthMobilePaddedContent : _c, _d = _a.narrowContentConstraint, narrowContentConstraint = _d === void 0 ? 'max-w-3xl' : _d, children = _a.children;
    return ((0, jsx_runtime_1.jsx)("div", __assign({ className: (0, __1.classNames)(className, containerType) }, { children: containerType === ContainerType.paddedContentNarrow ? ((0, jsx_runtime_1.jsx)("div", __assign({ className: (0, __1.classNames)(narrowContentConstraint, 'mx-auto') }, { children: children }), void 0)) : (children) }), void 0));
};
exports.Container = Object.assign(ContainerComponent, {
    type: ContainerType,
});
exports.default = exports.Container;
