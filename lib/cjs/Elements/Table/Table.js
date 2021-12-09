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
exports.Table = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var methods_1 = require("../../helpers/methods");
var sampleData = [
    {
        key: 'jane.cooper@example.com',
        name: 'Jane Cooper',
        title: 'Regional Paradigm Technician',
        role: 'Admin',
        email: 'jane.cooper@example.com',
    },
    // More people...
];
var sampleColumns = [
    {
        key: 'name',
        label: 'Name',
        value: ['name'],
        render: function (value) { return ((0, jsx_runtime_1.jsx)(exports.Table.Cell, { className: "font-medium text-gray-900", value: value }, void 0)); },
    },
    {
        key: 'title',
        label: 'Title',
        value: ['title'],
        render: function (value) { return (0, jsx_runtime_1.jsx)(exports.Table.Cell, { className: "text-gray-500", value: value }, void 0); },
    },
    {
        key: 'email',
        label: 'Email',
        value: ['name'],
        render: function (value) { return (0, jsx_runtime_1.jsx)(exports.Table.Cell, { className: "text-gray-500", value: value }, void 0); },
    },
    {
        key: 'role',
        label: 'Role',
        value: ['name'],
        render: function (value) { return (0, jsx_runtime_1.jsx)(exports.Table.Cell, { className: "text-gray-500", value: value }, void 0); },
    },
    {
        key: 'action',
        label: 'Action',
        labelHidden: true,
        render: function (_, item) { return ((0, jsx_runtime_1.jsx)(exports.Table.Cell, __assign({ className: "text-right font-medium" }, { children: (0, jsx_runtime_1.jsx)("a", __assign({ href: "#", className: "text-primary-600 hover:text-primary-900" }, { children: "Edit" }), void 0) }), void 0)); },
    },
];
var TableColumn = function (_a) {
    var label = _a.label, labelHidden = _a.labelHidden;
    return ((0, jsx_runtime_1.jsx)("th", __assign({ scope: "col", className: labelHidden
            ? 'relative px-2 sm:px-4 py-2 sm:py-3'
            : 'px-2 sm:px-4 py-2 sm:py-3 text-left text-xs lg:text-base font-semibold lg:font-bold text-white uppercase tracking-wider' }, { children: labelHidden ? (0, jsx_runtime_1.jsx)("span", __assign({ className: "sr-only" }, { children: label }), void 0) : label }), void 0));
};
var TableCell = function (_a) {
    var _b = _a.className, className = _b === void 0 ? 'text-gray-500' : _b, value = _a.value, children = _a.children;
    return ((0, jsx_runtime_1.jsx)("td", __assign({ className: (0, methods_1.classNames)(className, 'px-2 sm:px-4 py-2 sm:py-4 whitespace-nowrap text-xs sm:text-sm') }, { children: children !== null && children !== void 0 ? children : value }), void 0));
};
var TableComponent = function (_a) {
    var _b = _a.data, data = _b === void 0 ? sampleData : _b, _c = _a.columns, columns = _c === void 0 ? sampleColumns : _c;
    return ((0, jsx_runtime_1.jsx)("div", __assign({ className: "flex flex-col" }, { children: (0, jsx_runtime_1.jsx)("div", __assign({ className: "-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8" }, { children: (0, jsx_runtime_1.jsx)("div", __assign({ className: "py-2 align-middle inline-block min-w-full px-1 sm:px-6 lg:px-8" }, { children: (0, jsx_runtime_1.jsx)("div", __assign({ className: "sm:shadow overflow-hidden border sm:border-none sm:border-b border-gray-100 sm:border-gray-200 rounded-md sm:rounded-lg" }, { children: (0, jsx_runtime_1.jsxs)("table", __assign({ className: "min-w-full divide-y divide-gray-200" }, { children: [(0, jsx_runtime_1.jsx)("thead", __assign({ className: "bg-primary-400" }, { children: (0, jsx_runtime_1.jsx)("tr", { children: columns.map(function (column) { return ((0, jsx_runtime_1.jsx)(TableColumn, { label: column.label, labelHidden: column.labelHidden }, column.key)); }) }, void 0) }), void 0), (0, jsx_runtime_1.jsx)("tbody", __assign({ className: "bg-white divide-y divide-gray-200" }, { children: data.map(function (item, itemIndex) { return ((0, jsx_runtime_1.jsx)("tr", { children: columns.map(function (column, columIndex) { return ((0, jsx_runtime_1.jsx)(react_1.Fragment, { children: column.render(getNestedValueFromItem(item, column.value), item) }, "cell-".concat(itemIndex, "-").concat(columIndex))); }) }, item.key)); }) }), void 0)] }), void 0) }), void 0) }), void 0) }), void 0) }), void 0));
};
exports.Table = Object.assign(TableComponent, {
    Cell: TableCell,
});
exports.default = exports.Table;
function getNestedValueFromItem(item, value) {
    var nestedValue = item;
    value === null || value === void 0 ? void 0 : value.forEach(function (key) {
        nestedValue = nestedValue[key];
    });
    return nestedValue;
}
