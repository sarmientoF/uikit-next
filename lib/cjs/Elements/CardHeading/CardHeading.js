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
exports.CardHeading = exports.CardHeadingComponent = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var __1 = require("../..");
var CardHeadingComponent = function (_a) {
    var _b = _a.className, className = _b === void 0 ? 'bg-white px-4 py-5' : _b, _c = _a.title, title = _c === void 0 ? 'Back End Developer' : _c, _d = _a.actions, actions = _d === void 0 ? undefined : _d;
    return ((0, jsx_runtime_1.jsx)("div", __assign({ className: (0, __1.classNames)(className, 'border-b border-gray-200 sm:px-6') }, { children: (0, jsx_runtime_1.jsxs)("div", __assign({ className: "-ml-4 -mt-4 flex justify-between items-center flex-wrap sm:flex-nowrap" }, { children: [(0, jsx_runtime_1.jsx)("div", __assign({ className: "ml-4 mt-4" }, { children: typeof title === 'string' ? ((0, jsx_runtime_1.jsx)("h3", __assign({ className: "text-lg leading-6 font-medium text-gray-900" }, { children: title }), void 0)) : (title) }), void 0), (0, jsx_runtime_1.jsx)("div", __assign({ className: "ml-4 mt-4 shrink-0 flex" }, { children: actions }), void 0)] }), void 0) }), void 0));
};
exports.CardHeadingComponent = CardHeadingComponent;
exports.CardHeading = Object.assign(exports.CardHeadingComponent, {});
exports.default = exports.CardHeading;
