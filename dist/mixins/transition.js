<<<<<<< HEAD
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = require("../common/utils");
var getClassNames = function (name) { return ({
    enter: "van-" + name + "-enter van-" + name + "-enter-active enter-class enter-active-class",
    'enter-to': "van-" + name + "-enter-to van-" + name + "-enter-active enter-to-class enter-active-class",
    leave: "van-" + name + "-leave van-" + name + "-leave-active leave-class leave-active-class",
    'leave-to': "van-" + name + "-leave-to van-" + name + "-leave-active leave-to-class leave-active-class"
}); };
var nextTick = function () { return new Promise(function (resolve) { return setTimeout(resolve, 1000 / 30); }); };
exports.transition = function (showDefaultValue) {
=======
import { isObj } from '../common/utils';
const getClassNames = (name) => ({
    enter: `van-${name}-enter van-${name}-enter-active enter-class enter-active-class`,
    'enter-to': `van-${name}-enter-to van-${name}-enter-active enter-to-class enter-active-class`,
    leave: `van-${name}-leave van-${name}-leave-active leave-class leave-active-class`,
    'leave-to': `van-${name}-leave-to van-${name}-leave-active leave-to-class leave-active-class`
});
const nextTick = () => new Promise(resolve => setTimeout(resolve, 1000 / 30));
export const transition = function (showDefaultValue) {
>>>>>>> 336dbefd48c7371c730c2bc3d82d4e4e1ee6a9b2
    return Behavior({
        properties: {
            customStyle: String,
            // @ts-ignore
            show: {
                type: Boolean,
                value: showDefaultValue,
                observer: 'observeShow'
            },
            // @ts-ignore
            duration: {
                type: null,
                value: 300,
                observer: 'observeDuration'
            },
            name: {
                type: String,
                value: 'fade'
            }
        },
        data: {
            type: '',
            inited: false,
            display: false
        },
<<<<<<< HEAD
        methods: {
            observeShow: function (value, old) {
                if (value === old) {
                    return;
                }
                value ? this.enter() : this.leave();
            },
            enter: function () {
                var _this = this;
                var _a = this.data, duration = _a.duration, name = _a.name;
                var classNames = getClassNames(name);
                var currentDuration = utils_1.isObj(duration) ? duration.enter : duration;
                this.status = 'enter';
                this.$emit('before-enter');
                Promise.resolve()
                    .then(nextTick)
                    .then(function () {
                    _this.checkStatus('enter');
                    _this.$emit('enter');
                    _this.setData({
                        inited: true,
                        display: true,
                        classes: classNames.enter,
                        currentDuration: currentDuration
                    });
                })
                    .then(nextTick)
                    .then(function () {
                    _this.checkStatus('enter');
                    _this.transitionEnded = false;
                    _this.setData({
                        classes: classNames['enter-to']
                    });
                })
                    .catch(function () { });
            },
            leave: function () {
                var _this = this;
                if (!this.data.display) {
                    return;
                }
                var _a = this.data, duration = _a.duration, name = _a.name;
                var classNames = getClassNames(name);
                var currentDuration = utils_1.isObj(duration) ? duration.leave : duration;
                this.status = 'leave';
                this.$emit('before-leave');
                Promise.resolve()
                    .then(nextTick)
                    .then(function () {
                    _this.checkStatus('leave');
                    _this.$emit('leave');
                    _this.setData({
                        classes: classNames.leave,
                        currentDuration: currentDuration
                    });
                })
                    .then(nextTick)
                    .then(function () {
                    _this.checkStatus('leave');
                    _this.transitionEnded = false;
                    setTimeout(function () { return _this.onTransitionEnd(); }, currentDuration);
                    _this.setData({
                        classes: classNames['leave-to']
                    });
                })
                    .catch(function () { });
            },
            checkStatus: function (status) {
                if (status !== this.status) {
                    throw new Error("incongruent status: " + status);
                }
            },
            onTransitionEnd: function () {
                if (this.transitionEnded) {
                    return;
                }
                this.transitionEnded = true;
                this.$emit("after-" + this.status);
                var _a = this.data, show = _a.show, display = _a.display;
                if (!show && display) {
                    this.setData({ display: false });
=======
        attached() {
            if (this.data.show) {
                this.enter();
            }
        },
        methods: {
            observeShow(value) {
                if (value) {
                    this.enter();
                }
                else {
                    this.leave();
                }
            },
            enter() {
                const { duration, name } = this.data;
                const classNames = getClassNames(name);
                const currentDuration = isObj(duration) ? duration.enter : duration;
                this.status = 'enter';
                Promise.resolve()
                    .then(nextTick)
                    .then(() => {
                    this.checkStatus('enter');
                    this.setData({
                        inited: true,
                        display: true,
                        classes: classNames.enter,
                        currentDuration
                    });
                })
                    .then(nextTick)
                    .then(() => {
                    this.checkStatus('enter');
                    this.setData({
                        classes: classNames['enter-to']
                    });
                })
                    .catch(() => { });
            },
            leave() {
                const { duration, name } = this.data;
                const classNames = getClassNames(name);
                const currentDuration = isObj(duration) ? duration.leave : duration;
                this.status = 'leave';
                Promise.resolve()
                    .then(nextTick)
                    .then(() => {
                    this.checkStatus('leave');
                    this.setData({
                        classes: classNames.leave,
                        currentDuration
                    });
                })
                    .then(() => setTimeout(() => this.onTransitionEnd(), currentDuration))
                    .then(nextTick)
                    .then(() => {
                    this.checkStatus('leave');
                    this.setData({
                        classes: classNames['leave-to']
                    });
                })
                    .catch(() => { });
            },
            checkStatus(status) {
                if (status !== this.status) {
                    throw new Error(`incongruent status: ${status}`);
                }
            },
            onTransitionEnd() {
                if (!this.data.show) {
                    this.set({ display: false });
                    this.$emit('transitionend');
>>>>>>> 336dbefd48c7371c730c2bc3d82d4e4e1ee6a9b2
                }
            }
        }
    });
};
