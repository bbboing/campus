<<<<<<< HEAD
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var component_1 = require("../common/component");
var touch_1 = require("../mixins/touch");
var utils_1 = require("../common/utils");
component_1.VantComponent({
    mixins: [touch_1.touch],
=======
import { VantComponent } from '../common/component';
import { touch } from '../mixins/touch';
import { addUnit } from '../common/utils';
VantComponent({
    mixins: [touch],
>>>>>>> 336dbefd48c7371c730c2bc3d82d4e4e1ee6a9b2
    props: {
        disabled: Boolean,
        useButtonSlot: Boolean,
        activeColor: String,
        inactiveColor: String,
        max: {
            type: Number,
            value: 100
        },
        min: {
            type: Number,
            value: 0
        },
        step: {
            type: Number,
            value: 1
        },
        value: {
            type: Number,
<<<<<<< HEAD
            value: 0,
            observer: function (value) {
                this.updateValue(value, false);
            }
=======
            value: 0
>>>>>>> 336dbefd48c7371c730c2bc3d82d4e4e1ee6a9b2
        },
        barHeight: {
            type: null,
            value: '2px'
        }
    },
<<<<<<< HEAD
    created: function () {
        this.updateValue(this.data.value);
    },
    methods: {
        onTouchStart: function (event) {
=======
    watch: {
        value(value) {
            this.updateValue(value, false);
        }
    },
    created() {
        this.updateValue(this.data.value);
    },
    methods: {
        onTouchStart(event) {
>>>>>>> 336dbefd48c7371c730c2bc3d82d4e4e1ee6a9b2
            if (this.data.disabled)
                return;
            this.touchStart(event);
            this.startValue = this.format(this.data.value);
            this.dragStatus = 'start';
        },
<<<<<<< HEAD
        onTouchMove: function (event) {
            var _this = this;
=======
        onTouchMove(event) {
>>>>>>> 336dbefd48c7371c730c2bc3d82d4e4e1ee6a9b2
            if (this.data.disabled)
                return;
            if (this.dragStatus === 'start') {
                this.$emit('drag-start');
            }
            this.touchMove(event);
            this.dragStatus = 'draging';
<<<<<<< HEAD
            this.getRect('.van-slider').then(function (rect) {
                var diff = (_this.deltaX / rect.width) * 100;
                _this.newValue = _this.startValue + diff;
                _this.updateValue(_this.newValue, false, true);
            });
        },
        onTouchEnd: function () {
=======
            this.getRect('.van-slider').then((rect) => {
                const diff = this.deltaX / rect.width * 100;
                this.newValue = this.startValue + diff;
                this.updateValue(this.newValue, false, true);
            });
        },
        onTouchEnd() {
>>>>>>> 336dbefd48c7371c730c2bc3d82d4e4e1ee6a9b2
            if (this.data.disabled)
                return;
            if (this.dragStatus === 'draging') {
                this.updateValue(this.newValue, true);
                this.$emit('drag-end');
            }
        },
<<<<<<< HEAD
        onClick: function (event) {
            var _this = this;
            if (this.data.disabled)
                return;
            var min = this.data.min;
            this.getRect('.van-slider').then(function (rect) {
                var value = ((event.detail.x - rect.left) / rect.width) * _this.getRange() + min;
                _this.updateValue(value, true);
            });
        },
        updateValue: function (value, end, drag) {
            value = this.format(value);
            var _a = this.data, barHeight = _a.barHeight, min = _a.min;
            var width = ((value - min) * 100) / this.getRange() + "%";
            this.setData({
                value: value,
                barStyle: "\n          width: " + width + ";\n          height: " + utils_1.addUnit(barHeight) + ";\n          " + (drag ? 'transition: none;' : '') + "\n        ",
            });
            if (drag) {
                this.$emit('drag', { value: value });
=======
        onClick(event) {
            if (this.data.disabled)
                return;
            const { min } = this.data;
            this.getRect('.van-slider').then((rect) => {
                const value = (event.detail.x - rect.left) / rect.width * this.getRange() + min;
                this.updateValue(value, true);
            });
        },
        updateValue(value, end, drag) {
            value = this.format(value);
            const { barHeight, min } = this.data;
            const width = `${((value - min) * 100) / this.getRange()}%`;
            this.setData({
                value,
                barStyle: `width: ${width}; height: ${addUnit(barHeight)};`
            });
            if (drag) {
                this.$emit('drag', { value });
>>>>>>> 336dbefd48c7371c730c2bc3d82d4e4e1ee6a9b2
            }
            if (end) {
                this.$emit('change', value);
            }
        },
<<<<<<< HEAD
        getRange: function () {
            var _a = this.data, max = _a.max, min = _a.min;
            return max - min;
        },
        format: function (value) {
            var _a = this.data, max = _a.max, min = _a.min, step = _a.step;
=======
        getRange() {
            const { max, min } = this.data;
            return max - min;
        },
        format(value) {
            const { max, min, step } = this.data;
>>>>>>> 336dbefd48c7371c730c2bc3d82d4e4e1ee6a9b2
            return Math.round(Math.max(min, Math.min(value, max)) / step) * step;
        }
    }
});
