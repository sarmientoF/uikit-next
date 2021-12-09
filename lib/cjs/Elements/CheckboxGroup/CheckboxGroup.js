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
exports.CheckboxGroup = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var sampleData = [
    {
        name: 'comments',
        title: 'Comments',
        description: 'Get notified when someones posts a comment on a posting.',
        checked: false,
    },
    {
        name: 'candidates',
        title: 'Candidates',
        description: 'Get notified when a candidate applies for a job.',
        checked: false,
    },
    {
        name: 'offers',
        title: 'Offers',
        description: 'Get notified when a candidate accepts or rejects an offer.',
        checked: false,
    },
];
var CheckboxGroupComponent = function (_a) {
    var _b = _a.label, label = _b === void 0 ? 'Notifications' : _b, _c = _a.hiddenLabel, hiddenLabel = _c === void 0 ? false : _c, _d = _a.items, items = _d === void 0 ? sampleData : _d, _e = _a.register, register = _e === void 0 ? undefined : _e;
    return ((0, jsx_runtime_1.jsxs)("fieldset", __assign({ className: "space-y-5" }, { children: [hiddenLabel ? ((0, jsx_runtime_1.jsx)("legend", __assign({ className: "sr-only" }, { children: label }), void 0)) : ((0, jsx_runtime_1.jsx)("legend", __assign({ className: "text-base font-medium text-gray-900" }, { children: label }), void 0)), items.map(function (item) { return ((0, jsx_runtime_1.jsxs)("div", __assign({ className: "relative flex items-start" }, { children: [(0, jsx_runtime_1.jsx)("div", __assign({ className: "flex items-center h-5" }, { children: (0, jsx_runtime_1.jsx)("input", __assign({ id: item.name, "aria-describedby": "".concat(item.name, "-description"), type: "checkbox", className: "focus:ring-primary-500 h-4 w-4 text-primary-600 border-gray-300 rounded" }, (register ? register(item.name) : {})), void 0) }), void 0), (0, jsx_runtime_1.jsxs)("div", __assign({ className: "ml-3 text-sm" }, { children: [(0, jsx_runtime_1.jsx)("label", __assign({ htmlFor: item.name, className: "font-medium text-gray-700" }, { children: item.title }), void 0), (0, jsx_runtime_1.jsx)("p", __assign({ id: "".concat(item.name, "-description"), className: "text-gray-500" }, { children: item.description }), void 0)] }), void 0)] }), item.name)); })] }), void 0));
};
exports.CheckboxGroup = Object.assign(CheckboxGroupComponent, {});
exports.default = exports.CheckboxGroup;
