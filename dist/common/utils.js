<<<<<<< HEAD
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function isDef(value) {
    return value !== undefined && value !== null;
}
exports.isDef = isDef;
function isObj(x) {
    var type = typeof x;
    return x !== null && (type === 'object' || type === 'function');
}
exports.isObj = isObj;
function isNumber(value) {
    return /^\d+(\.\d+)?$/.test(value);
}
exports.isNumber = isNumber;
function range(num, min, max) {
    return Math.min(Math.max(num, min), max);
}
exports.range = range;
function nextTick(fn) {
    setTimeout(function () {
        fn();
    }, 1000 / 30);
}
exports.nextTick = nextTick;
var systemInfo = null;
function getSystemInfoSync() {
=======
export function isDef(value) {
    return value !== undefined && value !== null;
}
export function isObj(x) {
    const type = typeof x;
    return x !== null && (type === 'object' || type === 'function');
}
export function isNumber(value) {
    return /^\d+$/.test(value);
}
export function range(num, min, max) {
    return Math.min(Math.max(num, min), max);
}
export function nextTick(fn) {
    setTimeout(() => {
        fn();
    }, 1000 / 30);
}
let systemInfo = null;
export function getSystemInfoSync() {
>>>>>>> 336dbefd48c7371c730c2bc3d82d4e4e1ee6a9b2
    if (systemInfo == null) {
        systemInfo = wx.getSystemInfoSync();
    }
    return systemInfo;
}
<<<<<<< HEAD
exports.getSystemInfoSync = getSystemInfoSync;
function addUnit(value) {
=======
export function addUnit(value) {
>>>>>>> 336dbefd48c7371c730c2bc3d82d4e4e1ee6a9b2
    if (!isDef(value)) {
        return undefined;
    }
    value = String(value);
<<<<<<< HEAD
    return isNumber(value) ? value + "px" : value;
}
exports.addUnit = addUnit;
=======
    return isNumber(value) ? `${value}px` : value;
}
>>>>>>> 336dbefd48c7371c730c2bc3d82d4e4e1ee6a9b2
