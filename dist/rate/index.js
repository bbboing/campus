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
var component_1 = require("../common/component");
component_1.VantComponent({
    field: true,
    classes: ['icon-class'],
    props: {
        value: {
            type: Number,
            observer: function (value) {
                if (value !== this.data.innerValue) {
                    this.setData({ innerValue: value });
                }
            }
        },
        readonly: Boolean,
        disabled: Boolean,
        allowHalf: Boolean,
        size: null,
=======
import { VantComponent } from '../common/component';
import { addUnit } from '../common/utils';
VantComponent({
    field: true,
    classes: ['icon-class'],
    props: {
        value: Number,
        readonly: Boolean,
        disabled: Boolean,
        allowHalf: Boolean,
        size: {
            type: null,
            observer: 'setSizeWithUnit'
        },
>>>>>>> 336dbefd48c7371c730c2bc3d82d4e4e1ee6a9b2
        icon: {
            type: String,
            value: 'star'
        },
        voidIcon: {
            type: String,
            value: 'star-o'
        },
        color: {
            type: String,
            value: '#ffd21e'
        },
        voidColor: {
            type: String,
            value: '#c7c7c7'
        },
        disabledColor: {
            type: String,
            value: '#bdbdbd'
        },
        count: {
            type: Number,
<<<<<<< HEAD
            value: 5,
            observer: function (value) {
                this.setData({ innerCountArray: Array.from({ length: value }) });
            },
        },
        gutter: null,
=======
            value: 5
        },
        gutter: {
            type: null,
            observer: 'setGutterWithUnit'
        },
>>>>>>> 336dbefd48c7371c730c2bc3d82d4e4e1ee6a9b2
        touchable: {
            type: Boolean,
            value: true
        }
    },
    data: {
        innerValue: 0,
<<<<<<< HEAD
        innerCountArray: Array.from({ length: 5 }),
    },
    methods: {
        onSelect: function (event) {
            var data = this.data;
            var score = event.currentTarget.dataset.score;
=======
        gutterWithUnit: undefined,
        sizeWithUnit: '20px'
    },
    watch: {
        value(value) {
            if (value !== this.data.innerValue) {
                this.setData({ innerValue: value });
            }
        }
    },
    methods: {
        setSizeWithUnit(val) {
            this.setData({
                sizeWithUnit: addUnit(val)
            });
        },
        setGutterWithUnit(val) {
            this.setData({
                gutterWithUnit: addUnit(val)
            });
        },
        onSelect(event) {
            const { data } = this;
            const { score } = event.currentTarget.dataset;
>>>>>>> 336dbefd48c7371c730c2bc3d82d4e4e1ee6a9b2
            if (!data.disabled && !data.readonly) {
                this.setData({ innerValue: score + 1 });
                this.$emit('input', score + 1);
                this.$emit('change', score + 1);
            }
        },
<<<<<<< HEAD
        onTouchMove: function (event) {
            var _this = this;
            var touchable = this.data.touchable;
            if (!touchable)
                return;
            var clientX = event.touches[0].clientX;
            this.getRect('.van-rate__icon', true).then(function (list) {
                var target = list
                    .sort(function (item) { return item.right - item.left; })
                    .find(function (item) { return clientX >= item.left && clientX <= item.right; });
                if (target != null) {
                    _this.onSelect(__assign(__assign({}, event), { currentTarget: target }));
=======
        onTouchMove(event) {
            const { touchable } = this.data;
            if (!touchable)
                return;
            const { clientX, clientY } = event.touches[0];
            this.getRect('.van-rate__icon', true).then((list) => {
                const target = list
                    .sort(item => item.right - item.left)
                    .find(item => clientX >= item.left &&
                    clientX <= item.right &&
                    clientY >= item.top &&
                    clientY <= item.bottom);
                if (target != null) {
                    this.onSelect(Object.assign(Object.assign({}, event), { currentTarget: target }));
>>>>>>> 336dbefd48c7371c730c2bc3d82d4e4e1ee6a9b2
                }
            });
        }
    }
});
