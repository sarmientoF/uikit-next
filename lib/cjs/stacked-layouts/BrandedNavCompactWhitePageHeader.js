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
exports.BrandedNavCompactWhitePageHeader = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var react_2 = require("@headlessui/react");
var outline_1 = require("@heroicons/react/outline");
var methods_1 = require("../helpers/methods");
// MODEL
var user = {
    name: 'Sergei Meza',
    email: 'contact@sergeimeza.com',
    imageUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
};
var navigation = [
    { name: 'Dashboard', href: '#', current: true },
    { name: 'Team', href: '#', current: false },
    { name: 'Projects', href: '#', current: false },
    { name: 'Calendar', href: '#', current: false },
];
var userNavigation = [
    { name: 'Your Profile', href: '#' },
    { name: 'Settings', href: '#' },
    { name: 'Sign out', href: '#' },
];
var BrandedNavCompactWhitePageHeader = function () {
    return ((0, jsx_runtime_1.jsxs)("div", __assign({ className: "min-h-1/4 bg-gray-100" }, { children: [(0, jsx_runtime_1.jsx)(react_2.Disclosure, __assign({ as: "nav", className: "bg-indigo-600" }, { children: function (_a) {
                    var open = _a.open;
                    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)("div", __assign({ className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" }, { children: (0, jsx_runtime_1.jsxs)("div", __assign({ className: "flex items-center justify-between h-16" }, { children: [(0, jsx_runtime_1.jsxs)("div", __assign({ className: "flex items-center" }, { children: [(0, jsx_runtime_1.jsx)("div", __assign({ className: "shrink-0" }, { children: (0, jsx_runtime_1.jsx)("img", { className: "h-8 w-8", src: "https://tailwindui.com/img/logos/workflow-mark-indigo-300.svg", alt: "Workflow" }, void 0) }), void 0), (0, jsx_runtime_1.jsx)("div", __assign({ className: "hidden md:block" }, { children: (0, jsx_runtime_1.jsx)("div", __assign({ className: "ml-10 flex items-baseline space-x-4" }, { children: navigation.map(function (item) { return ((0, jsx_runtime_1.jsx)("a", __assign({ href: item.href, className: (0, methods_1.classNames)(item.current
                                                                ? 'bg-indigo-700 text-white'
                                                                : 'text-white hover:bg-indigo-500 hover:bg-opacity-75', 'px-3 py-2 rounded-md text-sm font-medium'), "aria-current": item.current ? 'page' : undefined }, { children: item.name }), item.name)); }) }), void 0) }), void 0)] }), void 0), (0, jsx_runtime_1.jsx)("div", __assign({ className: "hidden md:block" }, { children: (0, jsx_runtime_1.jsxs)("div", __assign({ className: "ml-4 flex items-center md:ml-6" }, { children: [(0, jsx_runtime_1.jsxs)("button", __assign({ type: "button", className: "bg-indigo-600 p-1 rounded-full text-indigo-200 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-600 focus:ring-white" }, { children: [(0, jsx_runtime_1.jsx)("span", __assign({ className: "sr-only" }, { children: "View notifications" }), void 0), (0, jsx_runtime_1.jsx)(outline_1.BellIcon, { className: "h-6 w-6", "aria-hidden": "true" }, void 0)] }), void 0), (0, jsx_runtime_1.jsxs)(react_2.Menu, __assign({ as: "div", className: "ml-3 relative" }, { children: [(0, jsx_runtime_1.jsx)("div", { children: (0, jsx_runtime_1.jsxs)(react_2.Menu.Button, __assign({ className: "max-w-xs bg-indigo-600 rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-600 focus:ring-white" }, { children: [(0, jsx_runtime_1.jsx)("span", __assign({ className: "sr-only" }, { children: "Open user menu" }), void 0), (0, jsx_runtime_1.jsx)("img", { className: "h-8 w-8 rounded-full", src: user.imageUrl, alt: "" }, void 0)] }), void 0) }, void 0), (0, jsx_runtime_1.jsx)(react_2.Transition, __assign({ as: react_1.Fragment, enter: "transition ease-out duration-200", enterFrom: "opacity-0 scale-95", enterTo: "opacity-100 scale-100", leave: "transition ease-in duration-75", leaveFrom: "opacity-100 scale-100", leaveTo: "opacity-0 scale-95" }, { children: (0, jsx_runtime_1.jsx)(react_2.Menu.Items, __assign({ className: "origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" }, { children: userNavigation.map(function (item) { return ((0, jsx_runtime_1.jsx)(react_2.Menu.Item, { children: function (_a) {
                                                                            var active = _a.active;
                                                                            return ((0, jsx_runtime_1.jsx)("a", __assign({ href: item.href, className: (0, methods_1.classNames)(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700') }, { children: item.name }), void 0));
                                                                        } }, item.name)); }) }), void 0) }), void 0)] }), void 0)] }), void 0) }), void 0), (0, jsx_runtime_1.jsx)("div", __assign({ className: "-mr-2 flex md:hidden" }, { children: (0, jsx_runtime_1.jsxs)(react_2.Disclosure.Button, __assign({ className: "bg-indigo-600 inline-flex items-center justify-center p-2 rounded-md text-indigo-200 hover:text-white hover:bg-indigo-500 hover:bg-opacity-75 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-600 focus:ring-white" }, { children: [(0, jsx_runtime_1.jsx)("span", __assign({ className: "sr-only" }, { children: "Open main menu" }), void 0), open ? ((0, jsx_runtime_1.jsx)(outline_1.XIcon, { className: "block h-6 w-6", "aria-hidden": "true" }, void 0)) : ((0, jsx_runtime_1.jsx)(outline_1.MenuIcon, { className: "block h-6 w-6", "aria-hidden": "true" }, void 0))] }), void 0) }), void 0)] }), void 0) }), void 0), (0, jsx_runtime_1.jsxs)(react_2.Disclosure.Panel, __assign({ className: "md:hidden" }, { children: [(0, jsx_runtime_1.jsx)("div", __assign({ className: "px-2 pt-2 pb-3 space-y-1 sm:px-3" }, { children: navigation.map(function (item) { return ((0, jsx_runtime_1.jsx)("a", __assign({ href: item.href, className: (0, methods_1.classNames)(item.current
                                                ? 'bg-indigo-700 text-white'
                                                : 'text-white hover:bg-indigo-500 hover:bg-opacity-75', 'block px-3 py-2 rounded-md text-base font-medium'), "aria-current": item.current ? 'page' : undefined }, { children: item.name }), item.name)); }) }), void 0), (0, jsx_runtime_1.jsxs)("div", __assign({ className: "pt-4 pb-3 border-t border-indigo-700" }, { children: [(0, jsx_runtime_1.jsxs)("div", __assign({ className: "flex items-center px-5" }, { children: [(0, jsx_runtime_1.jsx)("div", __assign({ className: "shrink-0" }, { children: (0, jsx_runtime_1.jsx)("img", { className: "h-10 w-10 rounded-full", src: user.imageUrl, alt: "" }, void 0) }), void 0), (0, jsx_runtime_1.jsxs)("div", __assign({ className: "ml-3" }, { children: [(0, jsx_runtime_1.jsx)("div", __assign({ className: "text-base text-white" }, { children: user.name }), void 0), (0, jsx_runtime_1.jsx)("div", __assign({ className: "text-sm text-indigo-300" }, { children: user.email }), void 0)] }), void 0), (0, jsx_runtime_1.jsxs)("button", __assign({ type: "button", className: "ml-auto bg-indigo-600 shrink-0 p-1 rounded-full text-indigo-200 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-600 focus:ring-white" }, { children: [(0, jsx_runtime_1.jsx)("span", __assign({ className: "sr-only" }, { children: "View notifications" }), void 0), (0, jsx_runtime_1.jsx)(outline_1.BellIcon, { className: "h-6 w-6", "aria-hidden": "true" }, void 0)] }), void 0)] }), void 0), (0, jsx_runtime_1.jsx)("div", __assign({ className: "mt-3 px-2 space-y-1" }, { children: userNavigation.map(function (item) { return ((0, jsx_runtime_1.jsx)("a", __assign({ href: item.href, className: "block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-indigo-500 hover:bg-opacity-75" }, { children: item.name }), item.name)); }) }), void 0)] }), void 0)] }), void 0)] }, void 0));
                } }), void 0), (0, jsx_runtime_1.jsx)("header", __assign({ className: "bg-white shadow-sm" }, { children: (0, jsx_runtime_1.jsx)("div", __assign({ className: "max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8" }, { children: (0, jsx_runtime_1.jsx)("h1", __assign({ className: "text-lg leading-6 font-semibold text-gray-900" }, { children: "Dashboard" }), void 0) }), void 0) }), void 0), (0, jsx_runtime_1.jsx)("main", { children: (0, jsx_runtime_1.jsx)("div", __assign({ className: "max-w-7xl mx-auto py-6 sm:px-6 lg:px-8" }, { children: (0, jsx_runtime_1.jsx)("div", __assign({ className: "px-4 py-4 sm:px-0" }, { children: (0, jsx_runtime_1.jsx)("div", { className: "border-4 border-dashed border-gray-200 rounded-lg h-96" }, void 0) }), void 0) }), void 0) }, void 0)] }), void 0));
};
exports.BrandedNavCompactWhitePageHeader = BrandedNavCompactWhitePageHeader;
