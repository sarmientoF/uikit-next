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
exports.Notification = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("@headlessui/react");
var outline_1 = require("@heroicons/react/outline");
var solid_1 = require("@heroicons/react/solid");
var react_2 = require("react");
var methods_1 = require("../../helpers/methods");
var NotificationSuccessIcon = function (_a) {
    var _b = _a.size, size = _b === void 0 ? 'h-6 w-6' : _b, _c = _a.color, color = _c === void 0 ? 'text-green-400' : _c;
    return ((0, jsx_runtime_1.jsx)(outline_1.CheckCircleIcon, { className: (0, methods_1.classNames)(size, color), "aria-hidden": "true" }, void 0));
};
var NotificationFailureIcon = function (_a) {
    var _b = _a.size, size = _b === void 0 ? 'h-6 w-6' : _b, _c = _a.color, color = _c === void 0 ? 'text-red-400' : _c;
    return (0, jsx_runtime_1.jsx)(outline_1.XCircleIcon, { className: (0, methods_1.classNames)(size, color), "aria-hidden": "true" }, void 0);
};
var NotificationContentAlignment;
(function (NotificationContentAlignment) {
    NotificationContentAlignment["top"] = "items-top";
    NotificationContentAlignment["center"] = "items-center";
    NotificationContentAlignment["bottom"] = "items-end";
})(NotificationContentAlignment || (NotificationContentAlignment = {}));
var NotificationComponent = function (_a) {
    var show = _a.show, setShow = _a.setShow, _b = _a.autoDismiss, autoDismiss = _b === void 0 ? true : _b, _c = _a.dismissDelay, dismissDelay = _c === void 0 ? 3000 : _c, _d = _a.alignment, alignment = _d === void 0 ? NotificationContentAlignment.top : _d, _e = _a.icon, icon = _e === void 0 ? (0, jsx_runtime_1.jsx)(NotificationSuccessIcon, {}, void 0) : _e, _f = _a.avatar, avatar = _f === void 0 ? undefined : _f, _g = _a.title, title = _g === void 0 ? 'Successfully saved!' : _g, _h = _a.content, content = _h === void 0 ? 'Anyone with a link can now view this file.' : _h, 
    // content = undefined,
    // button = <Button>Undo</Button>,
    _j = _a.button, 
    // content = undefined,
    // button = <Button>Undo</Button>,
    button = _j === void 0 ? undefined : _j, _k = _a.onClose, onClose = _k === void 0 ? function () { } : _k, children = _a.children;
    (0, react_2.useEffect)(function () {
        if (show && autoDismiss) {
            setTimeout(function () {
                setShow(false);
                onClose();
            }, dismissDelay);
        }
    }, [autoDismiss, show, dismissDelay, onClose, setShow]);
    return ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: (0, jsx_runtime_1.jsx)("div", __assign({ "aria-live": "assertive", className: "fixed inset-0 flex items-end px-4 py-6 pointer-events-none sm:p-6 sm:items-start" }, { children: (0, jsx_runtime_1.jsx)("div", __assign({ className: "w-full flex flex-col items-center space-y-4 sm:items-end" }, { children: (0, jsx_runtime_1.jsx)(react_1.Transition, __assign({ show: show, as: react_2.Fragment, enter: "transform ease-out duration-300 transition", enterFrom: "translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2", enterTo: "translate-y-0 opacity-100 sm:translate-x-0", leave: "transition ease-in duration-100", leaveFrom: "opacity-100", leaveTo: "opacity-0" }, { children: (0, jsx_runtime_1.jsx)("div", __assign({ className: "max-w-sm w-full bg-white shadow-lg rounded-lg pointer-events-auto ring-1 ring-black ring-opacity-5 overflow-hidden" }, { children: (0, jsx_runtime_1.jsx)("div", __assign({ className: "p-4" }, { children: (0, jsx_runtime_1.jsxs)("div", __assign({ className: (0, methods_1.classNames)('flex', alignment) }, { children: [(0, jsx_runtime_1.jsx)("div", __assign({ className: "flex-shrink-0" }, { children: icon !== null && icon !== void 0 ? icon : avatar }), void 0), children ? ((0, jsx_runtime_1.jsx)("div", __assign({ className: "ml-3 w-0 flex-1 pt-0.5" }, { children: children }), void 0)) : ((0, jsx_runtime_1.jsxs)("div", __assign({ className: "flex items-center flex-1" }, { children: [(0, jsx_runtime_1.jsxs)("div", __assign({ className: "ml-3 w-0 flex-1" }, { children: [typeof title === 'string' ? ((0, jsx_runtime_1.jsx)("p", __assign({ className: "text-sm font-medium text-gray-900" }, { children: title }), void 0)) : (title), typeof content === 'string' ? ((0, jsx_runtime_1.jsx)("p", __assign({ className: "mt-1 text-sm text-gray-500" }, { children: content }), void 0)) : (content)] }), void 0), (0, jsx_runtime_1.jsx)("div", { children: button }, void 0)] }), void 0)), (0, jsx_runtime_1.jsx)("div", __assign({ className: "ml-4 flex-shrink-0 flex" }, { children: (0, jsx_runtime_1.jsx)("div", { children: (0, jsx_runtime_1.jsxs)("button", __assign({ className: "bg-white rounded-md inline-flex text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500", onClick: function () {
                                                    setShow(false);
                                                    onClose();
                                                } }, { children: [(0, jsx_runtime_1.jsx)("span", __assign({ className: "sr-only" }, { children: "Close" }), void 0), (0, jsx_runtime_1.jsx)(solid_1.XIcon, { className: "h-5 w-5", "aria-hidden": "true" }, void 0)] }), void 0) }, void 0) }), void 0)] }), void 0) }), void 0) }), void 0) }), void 0) }), void 0) }), void 0) }, void 0));
};
exports.Notification = Object.assign(NotificationComponent, {
    SuccessIcon: NotificationSuccessIcon,
    FailureIcon: NotificationFailureIcon,
    alignment: NotificationContentAlignment,
});
exports.default = exports.Notification;
