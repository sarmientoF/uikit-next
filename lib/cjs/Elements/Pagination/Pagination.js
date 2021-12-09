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
exports.Pagination = void 0;
var react_1 = require("react");
var jsx_runtime_1 = require("react/jsx-runtime");
var solid_1 = require("@heroicons/react/solid");
var __1 = require("../..");
var PaginationComponent = function (_a) {
    var _b = _a.currentPage, currentPage = _b === void 0 ? 4 : _b, _c = _a.pages, pages = _c === void 0 ? Array.from(Array(10).keys()).map(function (_) { return ({ href: '#' }); }) : _c, _d = _a.previousText, previousText = _d === void 0 ? 'Previous' : _d, _e = _a.nextText, nextText = _e === void 0 ? 'Next' : _e, _f = _a.previousProps, previousProps = _f === void 0 ? { href: '#' } : _f, _g = _a.nextProps, nextProps = _g === void 0 ? { href: '#' } : _g;
    return ((0, jsx_runtime_1.jsxs)("nav", __assign({ className: "border-t border-gray-200 px-4 flex items-center justify-between sm:px-0" }, { children: [(0, jsx_runtime_1.jsx)("div", __assign({ className: "-mt-px w-0 flex-1 flex" }, { children: (0, jsx_runtime_1.jsxs)(__1.Anchor, __assign({}, previousProps, { className: "border-t-2 border-transparent pt-4 pr-1 inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-gray-300" }, { children: [(0, jsx_runtime_1.jsx)(solid_1.ArrowNarrowLeftIcon, { className: "mr-3 h-5 w-5 text-gray-400", "aria-hidden": "true" }, void 0), previousText] }), void 0) }), void 0), (0, jsx_runtime_1.jsx)("div", __assign({ className: "hidden md:-mt-px md:flex" }, { children: pages.map(function (p, i) { return ((0, react_1.createElement)(__1.Anchor, __assign({}, p, { className: i === currentPage
                        ? 'border-primary-500 text-primary-600 border-t-2 pt-4 px-4 inline-flex items-center text-sm font-medium'
                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 border-t-2 pt-4 px-4 inline-flex items-center text-sm font-medium', key: "p-".concat(i) }), i + 1)); }) }), void 0), (0, jsx_runtime_1.jsx)("div", __assign({ className: "-mt-px w-0 flex-1 flex justify-end" }, { children: (0, jsx_runtime_1.jsxs)(__1.Anchor, __assign({}, nextProps, { className: "border-t-2 border-transparent pt-4 pl-1 inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-gray-300" }, { children: [nextText, (0, jsx_runtime_1.jsx)(solid_1.ArrowNarrowRightIcon, { className: "ml-3 h-5 w-5 text-gray-400", "aria-hidden": "true" }, void 0)] }), void 0) }), void 0)] }), void 0));
};
exports.Pagination = Object.assign(PaginationComponent, {});
exports.default = exports.Pagination;
