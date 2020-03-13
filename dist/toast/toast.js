<<<<<<< HEAD
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
var utils_1 = require("../common/utils");
var defaultOptions = {
=======
import { isObj } from '../common/utils';
const defaultOptions = {
>>>>>>> 336dbefd48c7371c730c2bc3d82d4e4e1ee6a9b2
    type: 'text',
    mask: false,
    message: '',
    show: true,
    zIndex: 1000,
<<<<<<< HEAD
    duration: 2000,
=======
    duration: 3000,
>>>>>>> 336dbefd48c7371c730c2bc3d82d4e4e1ee6a9b2
    position: 'middle',
    forbidClick: false,
    loadingType: 'circular',
    selector: '#van-toast'
};
<<<<<<< HEAD
var queue = [];
var currentOptions = __assign({}, defaultOptions);
function parseOptions(message) {
    return utils_1.isObj(message) ? message : { message: message };
}
function getContext() {
    var pages = getCurrentPages();
    return pages[pages.length - 1];
}
function Toast(toastOptions) {
    var options = __assign(__assign({}, currentOptions), parseOptions(toastOptions));
    var context = options.context || getContext();
    var toast = context.selectComponent(options.selector);
=======
let queue = [];
let currentOptions = Object.assign({}, defaultOptions);
function parseOptions(message) {
    return isObj(message) ? message : { message };
}
function getContext() {
    const pages = getCurrentPages();
    return pages[pages.length - 1];
}
function Toast(toastOptions) {
    const options = Object.assign(Object.assign({}, currentOptions), parseOptions(toastOptions));
    const context = options.context || getContext();
    const toast = context.selectComponent(options.selector);
>>>>>>> 336dbefd48c7371c730c2bc3d82d4e4e1ee6a9b2
    if (!toast) {
        console.warn('未找到 van-toast 节点，请确认 selector 及 context 是否正确');
        return;
    }
    delete options.context;
    delete options.selector;
<<<<<<< HEAD
    toast.clear = function () {
=======
    toast.clear = () => {
>>>>>>> 336dbefd48c7371c730c2bc3d82d4e4e1ee6a9b2
        toast.setData({ show: false });
        if (options.onClose) {
            options.onClose();
        }
    };
    queue.push(toast);
    toast.setData(options);
    clearTimeout(toast.timer);
    if (options.duration > 0) {
<<<<<<< HEAD
        toast.timer = setTimeout(function () {
            toast.clear();
            queue = queue.filter(function (item) { return item !== toast; });
=======
        toast.timer = setTimeout(() => {
            toast.clear();
            queue = queue.filter(item => item !== toast);
>>>>>>> 336dbefd48c7371c730c2bc3d82d4e4e1ee6a9b2
        }, options.duration);
    }
    return toast;
}
<<<<<<< HEAD
var createMethod = function (type) { return function (options) {
    return Toast(__assign({ type: type }, parseOptions(options)));
}; };
Toast.loading = createMethod('loading');
Toast.success = createMethod('success');
Toast.fail = createMethod('fail');
Toast.clear = function () {
    queue.forEach(function (toast) {
=======
const createMethod = (type) => (options) => Toast(Object.assign({ type }, parseOptions(options)));
Toast.loading = createMethod('loading');
Toast.success = createMethod('success');
Toast.fail = createMethod('fail');
Toast.clear = () => {
    queue.forEach(toast => {
>>>>>>> 336dbefd48c7371c730c2bc3d82d4e4e1ee6a9b2
        toast.clear();
    });
    queue = [];
};
<<<<<<< HEAD
Toast.setDefaultOptions = function (options) {
    Object.assign(currentOptions, options);
};
Toast.resetDefaultOptions = function () {
    currentOptions = __assign({}, defaultOptions);
};
exports.default = Toast;
=======
Toast.setDefaultOptions = (options) => {
    Object.assign(currentOptions, options);
};
Toast.resetDefaultOptions = () => {
    currentOptions = Object.assign({}, defaultOptions);
};
export default Toast;
>>>>>>> 336dbefd48c7371c730c2bc3d82d4e4e1ee6a9b2
