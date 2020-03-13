<<<<<<< HEAD
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var component_1 = require("../common/component");
var FONT_COLOR = '#ed6a0c';
var BG_COLOR = '#fffbe8';
component_1.VantComponent({
    props: {
        text: {
            type: String,
            value: '',
            observer: function () {
                var _this = this;
                wx.nextTick(function () {
                    _this.init();
                });
            },
=======
import { VantComponent } from '../common/component';
const FONT_COLOR = '#ed6a0c';
const BG_COLOR = '#fffbe8';
VantComponent({
    props: {
        text: {
            type: String,
            value: ''
>>>>>>> 336dbefd48c7371c730c2bc3d82d4e4e1ee6a9b2
        },
        mode: {
            type: String,
            value: ''
        },
        url: {
            type: String,
            value: ''
        },
        openType: {
            type: String,
            value: 'navigate'
        },
        delay: {
            type: Number,
            value: 1
        },
        speed: {
            type: Number,
<<<<<<< HEAD
            value: 50,
            observer: function () {
                var _this = this;
                wx.nextTick(function () {
                    _this.init();
                });
            }
=======
            value: 50
>>>>>>> 336dbefd48c7371c730c2bc3d82d4e4e1ee6a9b2
        },
        scrollable: {
            type: Boolean,
            value: true
        },
        leftIcon: {
            type: String,
            value: ''
        },
        color: {
            type: String,
            value: FONT_COLOR
        },
        backgroundColor: {
            type: String,
            value: BG_COLOR
        },
        wrapable: Boolean
    },
    data: {
        show: true
    },
<<<<<<< HEAD
    created: function () {
=======
    watch: {
        text() {
            this.setData({}, this.init);
        }
    },
    created() {
>>>>>>> 336dbefd48c7371c730c2bc3d82d4e4e1ee6a9b2
        this.resetAnimation = wx.createAnimation({
            duration: 0,
            timingFunction: 'linear'
        });
    },
<<<<<<< HEAD
    destroyed: function () {
        this.timer && clearTimeout(this.timer);
    },
    methods: {
        init: function () {
            var _this = this;
            Promise.all([
                this.getRect('.van-notice-bar__content'),
                this.getRect('.van-notice-bar__wrap')
            ]).then(function (rects) {
                var contentRect = rects[0], wrapRect = rects[1];
=======
    destroyed() {
        this.timer && clearTimeout(this.timer);
    },
    methods: {
        init() {
            Promise.all([
                this.getRect('.van-notice-bar__content'),
                this.getRect('.van-notice-bar__wrap')
            ]).then((rects) => {
                const [contentRect, wrapRect] = rects;
>>>>>>> 336dbefd48c7371c730c2bc3d82d4e4e1ee6a9b2
                if (contentRect == null ||
                    wrapRect == null ||
                    !contentRect.width ||
                    !wrapRect.width) {
                    return;
                }
<<<<<<< HEAD
                var _a = _this.data, speed = _a.speed, scrollable = _a.scrollable, delay = _a.delay;
                if (scrollable && wrapRect.width < contentRect.width) {
                    var duration = (contentRect.width / speed) * 1000;
                    _this.wrapWidth = wrapRect.width;
                    _this.contentWidth = contentRect.width;
                    _this.duration = duration;
                    _this.animation = wx.createAnimation({
                        duration: duration,
                        timingFunction: 'linear',
                        delay: delay
                    });
                    _this.scroll();
                }
            });
        },
        scroll: function () {
            var _this = this;
=======
                const { speed, scrollable, delay } = this.data;
                if (scrollable && wrapRect.width < contentRect.width) {
                    const duration = (contentRect.width / speed) * 1000;
                    this.wrapWidth = wrapRect.width;
                    this.contentWidth = contentRect.width;
                    this.duration = duration;
                    this.animation = wx.createAnimation({
                        duration,
                        timingFunction: 'linear',
                        delay
                    });
                    this.scroll();
                }
            });
        },
        scroll() {
>>>>>>> 336dbefd48c7371c730c2bc3d82d4e4e1ee6a9b2
            this.timer && clearTimeout(this.timer);
            this.timer = null;
            this.setData({
                animationData: this.resetAnimation
                    .translateX(this.wrapWidth)
                    .step()
                    .export()
            });
<<<<<<< HEAD
            setTimeout(function () {
                _this.setData({
                    animationData: _this.animation
                        .translateX(-_this.contentWidth)
=======
            setTimeout(() => {
                this.setData({
                    animationData: this.animation
                        .translateX(-this.contentWidth)
>>>>>>> 336dbefd48c7371c730c2bc3d82d4e4e1ee6a9b2
                        .step()
                        .export()
                });
            }, 20);
<<<<<<< HEAD
            this.timer = setTimeout(function () {
                _this.scroll();
            }, this.duration);
        },
        onClickIcon: function () {
=======
            this.timer = setTimeout(() => {
                this.scroll();
            }, this.duration);
        },
        onClickIcon() {
>>>>>>> 336dbefd48c7371c730c2bc3d82d4e4e1ee6a9b2
            this.timer && clearTimeout(this.timer);
            this.timer = null;
            this.setData({ show: false });
        },
<<<<<<< HEAD
        onClick: function (event) {
=======
        onClick(event) {
>>>>>>> 336dbefd48c7371c730c2bc3d82d4e4e1ee6a9b2
            this.$emit('click', event);
        }
    }
});
