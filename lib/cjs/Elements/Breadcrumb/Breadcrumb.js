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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Breadcrumb = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var solid_1 = require("@heroicons/react/solid");
var __1 = require("../..");
var Anchor_1 = __importDefault(require("../Anchor/Anchor"));
var samplePages = [
    { name: 'Projects', to: '/', current: false },
    { name: 'Project Nero', to: '/', current: true },
];
var BreadcrumbType;
(function (BreadcrumbType) {
    BreadcrumbType["containedBar"] = "containedBar";
    BreadcrumbType["fullWidthBar"] = "fullWidthBar";
    BreadcrumbType["simpleWithChevrons"] = "simpleWithChevrons";
    BreadcrumbType["simpleWithSlashes"] = "simpleWithSlashes";
})(BreadcrumbType || (BreadcrumbType = {}));
var BreadcrumbComponent = function (_a) {
    var _b = _a.className, className = _b === void 0 ? '' : _b, _c = _a.type, type = _c === void 0 ? BreadcrumbType.fullWidthBar : _c, _d = _a.pages, pages = _d === void 0 ? samplePages : _d, _e = _a.homeName, homeName = _e === void 0 ? 'Home' : _e, _f = _a.homeTo, homeTo = _f === void 0 ? '/' : _f, _g = _a.homeRef, homeRef = _g === void 0 ? undefined : _g, _h = _a.homeIcon, homeIcon = _h === void 0 ? (0, jsx_runtime_1.jsx)(solid_1.HomeIcon, { className: "shrink-0 h-5 w-5", "aria-hidden": "true" }, void 0) : _h;
    var containedBar = ((0, jsx_runtime_1.jsx)("nav", __assign({ className: (0, __1.classNames)(className, 'flex'), "aria-label": "Breadcrumb" }, { children: (0, jsx_runtime_1.jsxs)("ol", __assign({ role: "list", className: "bg-white rounded-md shadow px-6 flex space-x-4" }, { children: [(0, jsx_runtime_1.jsx)("li", __assign({ className: "flex" }, { children: (0, jsx_runtime_1.jsx)("div", __assign({ className: "flex items-center" }, { children: (0, jsx_runtime_1.jsx)(Anchor_1.default, __assign({ to: homeTo, href: homeRef, className: "text-gray-400 hover:text-gray-500" }, { children: homeIcon ? ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [homeIcon, (0, jsx_runtime_1.jsx)("span", __assign({ className: "sr-only" }, { children: homeName }), void 0)] }, void 0)) : ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: (0, jsx_runtime_1.jsx)("span", __assign({ className: "ml-4 text-sm font-medium text-gray-500 hover:text-gray-700" }, { children: homeName }), void 0) }, void 0)) }), void 0) }), void 0) }), void 0), pages.map(function (page) { return ((0, jsx_runtime_1.jsx)("li", __assign({ className: "flex" }, { children: (0, jsx_runtime_1.jsxs)("div", __assign({ className: "flex items-center" }, { children: [(0, jsx_runtime_1.jsx)("svg", __assign({ className: "shrink-0 w-6 h-full text-gray-200", viewBox: "0 0 24 44", preserveAspectRatio: "none", fill: "currentColor", xmlns: "http://www.w3.org/2000/svg", "aria-hidden": "true" }, { children: (0, jsx_runtime_1.jsx)("path", { d: "M.293 0l22 22-22 22h1.414l22-22-22-22H.293z" }, void 0) }), void 0), (0, jsx_runtime_1.jsx)(Anchor_1.default, __assign({ href: page.href, to: page.to, className: (0, __1.classNames)(page.current
                                    ? 'text-primary-500 hover:text-primary-700'
                                    : 'text-gray-500 hover:text-gray-700', 'ml-4 text-sm font-medium'), "aria-current": page.current ? 'page' : undefined }, { children: page.name }), void 0)] }), void 0) }), page.name)); })] }), void 0) }), void 0));
    var fullWidthBar = ((0, jsx_runtime_1.jsx)("nav", __assign({ className: (0, __1.classNames)(className, 'bg-white border-b border-gray-200 flex'), "aria-label": "Breadcrumb" }, { children: (0, jsx_runtime_1.jsxs)("ol", __assign({ role: "list", className: "max-w-screen-xl w-full mx-auto px-4 flex space-x-4 sm:px-6 lg:px-8" }, { children: [(0, jsx_runtime_1.jsx)("li", __assign({ className: "flex" }, { children: (0, jsx_runtime_1.jsx)("div", __assign({ className: "flex items-center" }, { children: (0, jsx_runtime_1.jsx)(Anchor_1.default, __assign({ to: homeTo, href: homeRef, className: "text-gray-400 hover:text-gray-500" }, { children: homeIcon ? ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [homeIcon, (0, jsx_runtime_1.jsx)("span", __assign({ className: "sr-only" }, { children: homeName }), void 0)] }, void 0)) : ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: (0, jsx_runtime_1.jsx)("span", __assign({ className: "ml-4 text-sm font-medium text-gray-500 hover:text-gray-700" }, { children: homeName }), void 0) }, void 0)) }), void 0) }), void 0) }), void 0), pages.map(function (page) { return ((0, jsx_runtime_1.jsx)("li", __assign({ className: "flex" }, { children: (0, jsx_runtime_1.jsxs)("div", __assign({ className: "flex items-center" }, { children: [(0, jsx_runtime_1.jsx)("svg", __assign({ className: "shrink-0 w-6 h-full text-gray-200", viewBox: "0 0 24 44", preserveAspectRatio: "none", fill: "currentColor", xmlns: "http://www.w3.org/2000/svg", "aria-hidden": "true" }, { children: (0, jsx_runtime_1.jsx)("path", { d: "M.293 0l22 22-22 22h1.414l22-22-22-22H.293z" }, void 0) }), void 0), (0, jsx_runtime_1.jsx)(Anchor_1.default, __assign({ href: page.href, to: page.to, className: (0, __1.classNames)(page.current
                                    ? 'text-primary-500 hover:text-primary-700'
                                    : 'text-gray-500 hover:text-gray-700', 'ml-4 text-sm font-medium'), "aria-current": page.current ? 'page' : undefined }, { children: page.name }), void 0)] }), void 0) }), page.name)); })] }), void 0) }), void 0));
    var simpleWithChevrons = ((0, jsx_runtime_1.jsx)("nav", __assign({ className: (0, __1.classNames)(className, 'flex'), "aria-label": "Breadcrumb" }, { children: (0, jsx_runtime_1.jsxs)("ol", __assign({ role: "list", className: "flex items-center space-x-4" }, { children: [(0, jsx_runtime_1.jsx)("li", { children: (0, jsx_runtime_1.jsx)("div", { children: (0, jsx_runtime_1.jsx)(Anchor_1.default, __assign({ to: homeTo, href: homeRef, className: "text-gray-400 hover:text-gray-500" }, { children: homeIcon ? ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [homeIcon, (0, jsx_runtime_1.jsx)("span", __assign({ className: "sr-only" }, { children: homeName }), void 0)] }, void 0)) : ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: (0, jsx_runtime_1.jsx)("span", __assign({ className: "ml-4 text-sm font-medium text-gray-500 hover:text-gray-700" }, { children: homeName }), void 0) }, void 0)) }), void 0) }, void 0) }, void 0), pages.map(function (page) { return ((0, jsx_runtime_1.jsx)("li", { children: (0, jsx_runtime_1.jsxs)("div", __assign({ className: "flex items-center" }, { children: [(0, jsx_runtime_1.jsx)(solid_1.ChevronRightIcon, { className: "shrink-0 h-5 w-5 text-gray-400", "aria-hidden": "true" }, void 0), (0, jsx_runtime_1.jsx)(Anchor_1.default, __assign({ href: page.href, to: page.to, className: (0, __1.classNames)(page.current
                                    ? 'text-primary-500 hover:text-primary-700'
                                    : 'text-gray-500 hover:text-gray-700', 'ml-4 text-sm font-medium'), "aria-current": page.current ? 'page' : undefined }, { children: page.name }), void 0)] }), void 0) }, page.name)); })] }), void 0) }), void 0));
    var simpleWithSlashes = ((0, jsx_runtime_1.jsx)("nav", __assign({ className: (0, __1.classNames)(className, 'flex'), "aria-label": "Breadcrumb" }, { children: (0, jsx_runtime_1.jsxs)("ol", __assign({ role: "list", className: "flex items-center space-x-4" }, { children: [(0, jsx_runtime_1.jsx)("li", { children: (0, jsx_runtime_1.jsx)("div", { children: (0, jsx_runtime_1.jsx)(Anchor_1.default, __assign({ to: homeTo, href: homeRef, className: "text-gray-400 hover:text-gray-500" }, { children: homeIcon ? ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [homeIcon, (0, jsx_runtime_1.jsx)("span", __assign({ className: "sr-only" }, { children: homeName }), void 0)] }, void 0)) : ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: (0, jsx_runtime_1.jsx)("span", __assign({ className: "ml-4 text-sm font-medium text-gray-500 hover:text-gray-700" }, { children: homeName }), void 0) }, void 0)) }), void 0) }, void 0) }, void 0), pages.map(function (page) { return ((0, jsx_runtime_1.jsx)("li", { children: (0, jsx_runtime_1.jsxs)("div", __assign({ className: "flex items-center" }, { children: [(0, jsx_runtime_1.jsx)("svg", __assign({ className: "shrink-0 h-5 w-5 text-gray-300", xmlns: "http://www.w3.org/2000/svg", fill: "currentColor", viewBox: "0 0 20 20", "aria-hidden": "true" }, { children: (0, jsx_runtime_1.jsx)("path", { d: "M5.555 17.776l8-16 .894.448-8 16-.894-.448z" }, void 0) }), void 0), (0, jsx_runtime_1.jsx)(Anchor_1.default, __assign({ href: page.href, to: page.to, className: (0, __1.classNames)(page.current
                                    ? 'text-primary-500 hover:text-primary-700'
                                    : 'text-gray-500 hover:text-gray-700', 'ml-4 text-sm font-medium'), "aria-current": page.current ? 'page' : undefined }, { children: page.name }), void 0)] }), void 0) }, page.name)); })] }), void 0) }), void 0));
    switch (type) {
        case BreadcrumbType.containedBar:
            return containedBar;
        case BreadcrumbType.fullWidthBar:
            return fullWidthBar;
        case BreadcrumbType.simpleWithChevrons:
            return simpleWithChevrons;
        case BreadcrumbType.simpleWithSlashes:
            return simpleWithSlashes;
        default:
            return fullWidthBar;
    }
};
exports.Breadcrumb = Object.assign(BreadcrumbComponent, {
    type: BreadcrumbType,
});
exports.default = exports.Breadcrumb;
