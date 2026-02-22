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
var polished_1 = require("polished");
var snapToGrid_1 = require("./snapToGrid");
exports.createSizeMap = function (sizeConfig) { return ({
    size: createSizeUnitMap(sizeConfig, snappedSizeMap(sizeConfig, true)),
    lineHeight: createSizeUnitMap(sizeConfig, snappedSizeMap(sizeConfig, true)),
    fontSize: createSizeUnitMap(sizeConfig, snappedSizeMap(sizeConfig)),
}); };
function snappedSizeMap(sizeConfig, withLineHeight) {
    if (withLineHeight === void 0) { withLineHeight = false; }
    var modularScaleMap = modularScaleSizeValueMap(sizeConfig);
    return Object.entries(modularScaleMap).reduce(function (sizes, _a) {
        var _b;
        var key = _a[0], value = _a[1];
        return (__assign(__assign({}, sizes), (_b = {}, _b[key] = snapToGrid_1.snapToGrid(value, sizeConfig.baselineGrid, withLineHeight ? sizeConfig.lineHeight : undefined), _b)));
    }, {});
}
var sizeUnitArr = ['px', 'em', 'rem'];
function createSizeUnitMap(sizeConfig, sizes) {
    return Object.keys(sizes).reduce(function (sAccum, size) {
        var _a;
        return (__assign(__assign({}, sAccum), (_a = {}, _a[size] = sizeUnitArr.reduce(function (uAccum, unit) {
            var _a;
            return (__assign(__assign({}, uAccum), (_a = {}, _a[unit] = convertToUnits(sizeConfig.documentFontSize, sizes[size], unit), _a)));
        }, {}), _a)));
    }, {});
}
function modularScaleSizeValueMap(sizeConfig) {
    var adjustedBaseFontSize = snapToGrid_1.snapToGrid(sizeConfig.baseFontSize, 'px', sizeConfig.baselineGrid);
    return Object.entries(sizeConfig.fontSizeScaleMap).reduce(function (sizes, _a) {
        var _b;
        var key = _a[0], value = _a[1];
        return (__assign(__assign({}, sizes), (_b = {}, _b[key] = polished_1.modularScale(value, adjustedBaseFontSize, sizeConfig.modularScaleRatio), _b)));
    }, {});
}
function convertToUnits(documentFontSize, value, unit) {
    if (unit === 'em')
        return polished_1.em(value, documentFontSize);
    if (unit === 'rem')
        return polished_1.rem(value, documentFontSize);
    // todo - what if `px` suffix not provided?
    return value;
}
exports.convertToUnits = convertToUnits;
