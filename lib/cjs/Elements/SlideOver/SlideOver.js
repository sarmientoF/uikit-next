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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SlideOver = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var react_2 = require("@headlessui/react");
var outline_1 = require("@heroicons/react/outline");
var methods_1 = require("../../helpers/methods");
var Button_1 = __importDefault(require("../Button/Button"));
var SlideOverCloseButtonPosition;
(function (SlideOverCloseButtonPosition) {
    SlideOverCloseButtonPosition["inside"] = "inside";
    SlideOverCloseButtonPosition["outside"] = "outside";
})(SlideOverCloseButtonPosition || (SlideOverCloseButtonPosition = {}));
var SlideOverType;
(function (SlideOverType) {
    SlideOverType["wide"] = "max-w-2xl";
    SlideOverType["default"] = "max-w-md";
})(SlideOverType || (SlideOverType = {}));
var SlideOverTitle = function (_a) {
    var _b = _a.title, title = _b === void 0 ? undefined : _b, _c = _a.textColor, textColor = _c === void 0 ? 'text-gray-900' : _c, children = _a.children;
    return ((0, jsx_runtime_1.jsx)(react_2.Dialog.Title, __assign({ className: (0, methods_1.classNames)('text-lg font-medium', textColor) }, { children: children !== null && children !== void 0 ? children : title }), void 0));
};
var SlideOverHeader = function (_a) {
    var _b = _a.backgroundColor, backgroundColor = _b === void 0 ? 'bg-gray-50' : _b, _c = _a.closeButtonColor, closeButtonColor = _c === void 0 ? 'text-gray-400 hover:text-gray-500' : _c, setShow = _a.setShow, children = _a.children;
    return ((0, jsx_runtime_1.jsx)("div", __assign({ className: (0, methods_1.classNames)('px-4 py-6 sm:px-6', backgroundColor) }, { children: (0, jsx_runtime_1.jsxs)("div", __assign({ className: "flex items-start justify-between space-x-3" }, { children: [children !== null && children !== void 0 ? children : ((0, jsx_runtime_1.jsxs)("div", __assign({ className: "space-y-1" }, { children: [(0, jsx_runtime_1.jsx)(SlideOverTitle, { children: "New project" }, void 0), (0, jsx_runtime_1.jsx)("p", __assign({ className: "text-sm text-gray-500" }, { children: "Get started by filling in the information below to create your new project." }), void 0)] }), void 0)), (0, jsx_runtime_1.jsx)("div", __assign({ className: "h-7 flex items-center" }, { children: (0, jsx_runtime_1.jsxs)("button", __assign({ type: "button", className: (0, methods_1.classNames)(closeButtonColor), onClick: function () { return setShow(false); } }, { children: [(0, jsx_runtime_1.jsx)("span", __assign({ className: "sr-only" }, { children: "Close panel" }), void 0), (0, jsx_runtime_1.jsx)(outline_1.XIcon, { className: "h-6 w-6", "aria-hidden": "true" }, void 0)] }), void 0) }), void 0)] }), void 0) }), void 0));
};
var SlideOverStickyFooter = function (_a) {
    var setShow = _a.setShow, _b = _a.border, border = _b === void 0 ? false : _b, children = _a.children;
    return ((0, jsx_runtime_1.jsx)("div", __assign({ className: methods_1.classNames.apply(void 0, __spreadArray(__spreadArray([], (border ? ['border-t border-gray-200'] : []), false), ['shrink-0 px-4 py-4 flex justify-end'], false)) }, { children: children !== null && children !== void 0 ? children : ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(Button_1.default, __assign({ type: "button", className: "py-2 px-4", buttonType: Button_1.default.buttonType.outline, onClick: function () { return setShow(false); } }, { children: "Cancel" }), void 0), (0, jsx_runtime_1.jsx)(Button_1.default, __assign({ type: "button", className: "ml-4 py-2 px-4" }, { children: "Save" }), void 0)] }, void 0)) }), void 0));
};
var SlideOverComponent = function (_a) {
    var _b = _a.header, header = _b === void 0 ? undefined : _b, _c = _a.title, title = _c === void 0 ? 'Panel Title' : _c, _d = _a.backgroundOverlay, backgroundOverlay = _d === void 0 ? true : _d, _e = _a.stickyFooter, stickyFooter = _e === void 0 ? undefined : _e, _f = _a.closeButtonPosition, closeButtonPosition = _f === void 0 ? SlideOverCloseButtonPosition.inside : _f, _g = _a.type, type = _g === void 0 ? SlideOverType.default : _g, children = _a.children, show = _a.show, setShow = _a.setShow;
    var templateContent = ((0, jsx_runtime_1.jsx)("div", __assign({ className: "absolute inset-0 px-4 sm:px-6" }, { children: (0, jsx_runtime_1.jsx)("div", { className: "h-full border-2 border-dashed border-gray-200", "aria-hidden": "true" }, void 0) }), void 0));
    var defaultHeader = ((0, jsx_runtime_1.jsx)("div", __assign({ className: "px-4 py-6 sm:px-6" }, { children: (0, jsx_runtime_1.jsxs)("div", __assign({ className: "flex items-start justify-between" }, { children: [typeof title === 'string' ? (0, jsx_runtime_1.jsx)(SlideOverTitle, { title: title }, void 0) : title, closeButtonPosition === SlideOverCloseButtonPosition.inside && ((0, jsx_runtime_1.jsx)("div", __assign({ className: "ml-3 h-7 flex items-center" }, { children: (0, jsx_runtime_1.jsxs)("button", __assign({ type: "button", className: "bg-white rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500", onClick: function () { return setShow(false); } }, { children: [(0, jsx_runtime_1.jsx)("span", __assign({ className: "sr-only" }, { children: "Close panel" }), void 0), (0, jsx_runtime_1.jsx)(outline_1.XIcon, { className: "h-6 w-6", "aria-hidden": "true" }, void 0)] }), void 0) }), void 0))] }), void 0) }), void 0));
    var customHeader = ((0, jsx_runtime_1.jsx)(SlideOverHeader, __assign({ setShow: setShow }, { children: header }), void 0));
    return ((0, jsx_runtime_1.jsx)(react_2.Transition.Root, __assign({ show: show, as: react_1.Fragment }, { children: (0, jsx_runtime_1.jsx)(react_2.Dialog, __assign({ as: "div", className: "fixed inset-0 overflow-hidden", onClose: setShow }, { children: (0, jsx_runtime_1.jsxs)("div", __assign({ className: "absolute inset-0 overflow-hidden" }, { children: [(0, jsx_runtime_1.jsx)(react_2.Transition.Child, __assign({ as: react_1.Fragment, enter: "ease-in-out duration-500", enterFrom: "opacity-0", enterTo: "opacity-100", leave: "ease-in-out duration-500", leaveFrom: "opacity-100", leaveTo: "opacity-0" }, { children: (0, jsx_runtime_1.jsx)(react_2.Dialog.Overlay, { className: methods_1.classNames.apply(void 0, __spreadArray(__spreadArray([], (backgroundOverlay
                                ? ['bg-gray-500 bg-opacity-75 transition-opacity']
                                : []), false), ['absolute inset-0'], false)) }, void 0) }), void 0), (0, jsx_runtime_1.jsx)("div", __assign({ className: "fixed inset-y-0 right-0 pl-10 max-w-full flex sm:pl-16" }, { children: (0, jsx_runtime_1.jsx)(react_2.Transition.Child, __assign({ as: react_1.Fragment, enter: "transition ease-in-out duration-500 sm:duration-700", enterFrom: "translate-x-full", enterTo: "translate-x-0", leave: "transition ease-in-out duration-500 sm:duration-700", leaveFrom: "translate-x-0", leaveTo: "translate-x-full" }, { children: (0, jsx_runtime_1.jsxs)("div", __assign({ className: (0, methods_1.classNames)('w-screen', type) }, { children: [closeButtonPosition ===
                                        SlideOverCloseButtonPosition.outside && ((0, jsx_runtime_1.jsx)(react_2.Transition.Child, __assign({ as: react_1.Fragment, enter: "ease-in-out duration-500", enterFrom: "opacity-0", enterTo: "opacity-100", leave: "ease-in-out duration-500", leaveFrom: "opacity-100", leaveTo: "opacity-0" }, { children: (0, jsx_runtime_1.jsx)("div", __assign({ className: "absolute top-0 left-0 -ml-8 pt-4 pr-2 flex sm:-ml-10 sm:pr-4" }, { children: (0, jsx_runtime_1.jsxs)("button", __assign({ type: "button", className: "rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white", onClick: function () { return setShow(false); } }, { children: [(0, jsx_runtime_1.jsx)("span", __assign({ className: "sr-only" }, { children: "Close panel" }), void 0), (0, jsx_runtime_1.jsx)(outline_1.XIcon, { className: "h-6 w-6", "aria-hidden": "true" }, void 0)] }), void 0) }), void 0) }), void 0)), (0, jsx_runtime_1.jsxs)("div", __assign({ className: "h-full flex flex-col bg-white shadow-xl overflow-y-scroll" }, { children: [header !== null && header !== void 0 ? header : defaultHeader, (0, jsx_runtime_1.jsx)("div", __assign({ className: "mt-6 relative flex-1 px-4 sm:px-6" }, { children: children !== null && children !== void 0 ? children : templateContent }), void 0), stickyFooter] }), void 0)] }), void 0) }), void 0) }), void 0)] }), void 0) }), void 0) }), void 0));
};
exports.SlideOver = Object.assign(SlideOverComponent, {
    closeButtonPosition: SlideOverCloseButtonPosition,
    type: SlideOverType,
    Title: SlideOverTitle,
    Header: SlideOverHeader,
    Footer: SlideOverStickyFooter,
});
exports.default = exports.SlideOver;
