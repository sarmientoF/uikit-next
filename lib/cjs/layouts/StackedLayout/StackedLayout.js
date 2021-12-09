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
exports.StackedLayout = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var __1 = require("../..");
var StackedLayoutType;
(function (StackedLayoutType) {
    StackedLayoutType["simple"] = "simple";
})(StackedLayoutType || (StackedLayoutType = {}));
var StackedLayoutComponent = function (_a) {
    var _b = _a.className, className = _b === void 0 ? 'min-h-1/4 bg-gray-100' : _b, _c = _a.navBar, navBar = _c === void 0 ? undefined : _c, _d = _a.title, title = _d === void 0 ? undefined : _d, _e = _a.type, type = _e === void 0 ? StackedLayoutType.simple : _e, children = _a.children;
    return ((0, jsx_runtime_1.jsxs)("div", __assign({ className: (0, __1.classNames)(className) }, { children: [navBar, (0, jsx_runtime_1.jsxs)("div", __assign({ className: "py-10" }, { children: [(0, jsx_runtime_1.jsx)("header", { children: (0, jsx_runtime_1.jsx)("div", __assign({ className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" }, { children: (0, jsx_runtime_1.jsx)("h1", __assign({ className: "text-3xl font-bold leading-tight text-gray-900" }, { children: title }), void 0) }), void 0) }, void 0), (0, jsx_runtime_1.jsx)("main", { children: (0, jsx_runtime_1.jsx)("div", __assign({ className: "max-w-7xl mx-auto sm:px-6 lg:px-8" }, { children: children !== null && children !== void 0 ? children : ((0, jsx_runtime_1.jsx)("div", __assign({ className: "px-4 py-8 sm:px-0" }, { children: (0, jsx_runtime_1.jsx)("div", { className: "border-4 border-dashed border-gray-200 rounded-lg h-96" }, void 0) }), void 0)) }), void 0) }, void 0)] }), void 0)] }), void 0));
};
exports.StackedLayout = Object.assign(StackedLayoutComponent, {
    type: StackedLayoutType,
});
exports.default = exports.StackedLayout;
