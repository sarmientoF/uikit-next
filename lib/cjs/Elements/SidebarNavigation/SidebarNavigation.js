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
exports.SidebarNavigation = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var __1 = require("../..");
var SidebarNavigationComponent = function (_a) {
    var _b = _a.icon, icon = _b === void 0 ? undefined : _b, items = _a.items, secondaryNavigationTitle = _a.secondaryNavigationTitle, secondaryItems = _a.secondaryItems, showIcons = _a.showIcons, onItemSelected = _a.onItemSelected, _c = _a.bottomSlot, bottomSlot = _c === void 0 ? undefined : _c;
    return ((0, jsx_runtime_1.jsxs)("div", __assign({ className: "flex-1 flex flex-col min-h-0 border-r border-gray-200 bg-white" }, { children: [(0, jsx_runtime_1.jsxs)("div", __assign({ className: "flex-1 flex flex-col pt-5 pb-4 overflow-y-auto" }, { children: [(0, jsx_runtime_1.jsx)("div", __assign({ className: "flex items-center flex-shrink-0 px-4" }, { children: icon }), void 0), (0, jsx_runtime_1.jsx)("nav", __assign({ className: "mt-5 flex-1 px-2 bg-white space-y-1", "aria-label": "Sidebar" }, { children: (0, jsx_runtime_1.jsx)(__1.VerticalNavigation, { items: items, secondaryNavigationTitle: secondaryNavigationTitle, secondaryItems: secondaryItems, showIcons: showIcons, onItemSelected: onItemSelected }, void 0) }), void 0)] }), void 0), bottomSlot && ((0, jsx_runtime_1.jsx)("div", __assign({ className: "flex-shrink-0 flex border-t border-gray-200 p-4" }, { children: bottomSlot }), void 0))] }), void 0));
};
exports.SidebarNavigation = Object.assign(SidebarNavigationComponent, {});
exports.default = exports.SidebarNavigation;
