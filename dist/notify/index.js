<<<<<<< HEAD
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var component_1 = require("../common/component");
var color_1 = require("../common/color");
component_1.VantComponent({
=======
import { VantComponent } from '../common/component';
import { WHITE } from '../common/color';
import { safeArea } from '../mixins/safe-area';
VantComponent({
    mixins: [safeArea()],
>>>>>>> 336dbefd48c7371c730c2bc3d82d4e4e1ee6a9b2
    props: {
        message: String,
        background: String,
        type: {
            type: String,
            value: 'danger'
        },
        color: {
            type: String,
<<<<<<< HEAD
            value: color_1.WHITE
=======
            value: WHITE
>>>>>>> 336dbefd48c7371c730c2bc3d82d4e4e1ee6a9b2
        },
        duration: {
            type: Number,
            value: 3000
        },
        zIndex: {
            type: Number,
            value: 110
<<<<<<< HEAD
        },
        safeAreaInsetTop: {
            type: Boolean,
            value: false
        }
    },
    data: {
        show: false,
    },
    created: function () {
        var statusBarHeight = wx.getSystemInfoSync().statusBarHeight;
        this.setData({ statusBarHeight: statusBarHeight });
    },
    methods: {
        show: function () {
            var _this = this;
            var _a = this.data, duration = _a.duration, onOpened = _a.onOpened;
            clearTimeout(this.timer);
            this.setData({ show: true });
            wx.nextTick(onOpened);
            if (duration > 0 && duration !== Infinity) {
                this.timer = setTimeout(function () {
                    _this.hide();
                }, duration);
            }
        },
        hide: function () {
            var onClose = this.data.onClose;
            clearTimeout(this.timer);
            this.setData({ show: false });
            wx.nextTick(onClose);
        },
        onTap: function (event) {
            var onClick = this.data.onClick;
=======
        }
    },
    methods: {
        show() {
            const { duration, onOpened } = this.data;
            clearTimeout(this.timer);
            this.setData({
                show: true
            }, onOpened);
            if (duration > 0 && duration !== Infinity) {
                this.timer = setTimeout(() => {
                    this.hide();
                }, duration);
            }
        },
        hide() {
            const { onClose } = this.data;
            clearTimeout(this.timer);
            this.setData({
                show: false
            }, onClose);
        },
        onTap(event) {
            const { onClick } = this.data;
>>>>>>> 336dbefd48c7371c730c2bc3d82d4e4e1ee6a9b2
            if (onClick) {
                onClick(event.detail);
            }
        }
    }
});
