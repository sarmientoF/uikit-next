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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import { jsx as _jsx } from "react/jsx-runtime";
import Link from 'next/link';
import { classNames } from '../..';
var AnchorComponent = function (_a) {
    var _b;
    var _c = _a.className, className = _c === void 0 ? '' : _c, _d = _a.to, to = _d === void 0 ? undefined : _d, _e = _a.href, href = _e === void 0 ? undefined : _e, children = _a.children, props = __rest(_a, ["className", "to", "href", "children"]);
    var baseClassName = 'focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500';
    return _jsx(Link, __assign({ href: (_b = to !== null && to !== void 0 ? to : href) !== null && _b !== void 0 ? _b : "" }, props, { children: _jsx("a", __assign({ className: classNames(className, baseClassName) }, { children: children }), void 0) }), void 0);
};
export var Anchor = Object.assign(AnchorComponent, {});
export default Anchor;
