<<<<<<< HEAD
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var component_1 = require("../common/component");
var utils_1 = require("../common/utils");
var LONG_PRESS_START_TIME = 600;
var LONG_PRESS_INTERVAL = 200;
// add num and avoid float number
function add(num1, num2) {
    var cardinal = Math.pow(10, 10);
    return Math.round((num1 + num2) * cardinal) / cardinal;
}
component_1.VantComponent({
    field: true,
    classes: ['input-class', 'plus-class', 'minus-class'],
    props: {
        value: {
            type: null,
            observer: function (value) {
                if (value === '') {
                    return;
                }
                var newValue = this.range(value);
                if (typeof newValue === 'number' && +this.data.value !== newValue) {
                    this.setData({ value: newValue });
                }
            },
        },
        integer: Boolean,
        disabled: Boolean,
        inputWidth: {
            type: null,
            observer: function () {
                this.setData({
                    inputStyle: this.computeInputStyle()
                });
            },
        },
        buttonSize: {
            type: null,
            observer: function () {
                this.setData({
                    inputStyle: this.computeInputStyle(),
                    buttonStyle: this.computeButtonStyle()
                });
            }
        },
        asyncChange: Boolean,
        disableInput: Boolean,
        decimalLength: {
            type: Number,
            value: null
        },
=======
import { VantComponent } from '../common/component';
import { addUnit } from '../common/utils';
const LONG_PRESS_START_TIME = 600;
const LONG_PRESS_INTERVAL = 200;
VantComponent({
    field: true,
    classes: ['input-class', 'plus-class', 'minus-class'],
    props: {
        value: null,
        integer: Boolean,
        disabled: Boolean,
        inputWidth: null,
        buttonSize: null,
        asyncChange: Boolean,
        disableInput: Boolean,
>>>>>>> 336dbefd48c7371c730c2bc3d82d4e4e1ee6a9b2
        min: {
            type: null,
            value: 1
        },
        max: {
            type: null,
            value: Number.MAX_SAFE_INTEGER
        },
        step: {
            type: null,
            value: 1
        },
        showPlus: {
            type: Boolean,
            value: true
        },
        showMinus: {
            type: Boolean,
            value: true
<<<<<<< HEAD
        },
        disablePlus: Boolean,
        disableMinus: Boolean,
        longPress: {
            type: Boolean,
            value: true
        },
=======
        }
    },
    watch: {
        value(value) {
            if (value === '') {
                return;
            }
            const newValue = this.range(value);
            if (typeof newValue === 'number' && +this.data.value !== newValue) {
                this.setData({ value: newValue });
            }
        },
        inputWidth() {
            this.set({
                inputStyle: this.computeInputStyle()
            });
        },
        buttonSize() {
            this.set({
                inputStyle: this.computeInputStyle(),
                buttonStyle: this.computeButtonStyle()
            });
        }
>>>>>>> 336dbefd48c7371c730c2bc3d82d4e4e1ee6a9b2
    },
    data: {
        focus: false,
        inputStyle: '',
        buttonStyle: ''
    },
<<<<<<< HEAD
    created: function () {
=======
    created() {
>>>>>>> 336dbefd48c7371c730c2bc3d82d4e4e1ee6a9b2
        this.setData({
            value: this.range(this.data.value)
        });
    },
    methods: {
<<<<<<< HEAD
        isDisabled: function (type) {
            if (type === 'plus') {
                return this.data.disabled || this.data.disablePlus || this.data.value >= this.data.max;
            }
            return this.data.disabled || this.data.disableMinus || this.data.value <= this.data.min;
        },
        onFocus: function (event) {
            this.$emit('focus', event.detail);
        },
        onBlur: function (event) {
            var value = this.range(this.data.value);
=======
        isDisabled(type) {
            if (type === 'plus') {
                return this.data.disabled || this.data.value >= this.data.max;
            }
            return this.data.disabled || this.data.value <= this.data.min;
        },
        onFocus(event) {
            this.$emit('focus', event.detail);
        },
        onBlur(event) {
            const value = this.range(this.data.value);
>>>>>>> 336dbefd48c7371c730c2bc3d82d4e4e1ee6a9b2
            this.triggerInput(value);
            this.$emit('blur', event.detail);
        },
        // limit value range
<<<<<<< HEAD
        range: function (value) {
            value = String(value).replace(/[^0-9.-]/g, '');
            // format range
            value = value === '' ? 0 : +value;
            value = Math.max(Math.min(this.data.max, value), this.data.min);
            // format decimal
            if (utils_1.isDef(this.data.decimalLength)) {
                value = value.toFixed(this.data.decimalLength);
            }
            return value;
        },
        onInput: function (event) {
            var _a = (event.detail || {}).value, value = _a === void 0 ? '' : _a;
            this.triggerInput(value);
        },
        onChange: function () {
            var type = this.type;
=======
        range(value) {
            value = String(value).replace(/[^0-9.-]/g, '');
            return Math.max(Math.min(this.data.max, value), this.data.min);
        },
        onInput(event) {
            const { value = '' } = event.detail || {};
            this.triggerInput(value);
        },
        onChange() {
            const { type } = this;
>>>>>>> 336dbefd48c7371c730c2bc3d82d4e4e1ee6a9b2
            if (this.isDisabled(type)) {
                this.$emit('overlimit', type);
                return;
            }
<<<<<<< HEAD
            var diff = type === 'minus' ? -this.data.step : +this.data.step;
            var value = add(+this.data.value, diff);
            this.triggerInput(this.range(value));
            this.$emit(type);
        },
        longPressStep: function () {
            var _this = this;
            this.longPressTimer = setTimeout(function () {
                _this.onChange();
                _this.longPressStep();
            }, LONG_PRESS_INTERVAL);
        },
        onTap: function (event) {
            var type = event.currentTarget.dataset.type;
            this.type = type;
            this.onChange();
        },
        onTouchStart: function (event) {
            var _this = this;
            if (!this.data.longPress) {
                return;
            }
            clearTimeout(this.longPressTimer);
            var type = event.currentTarget.dataset.type;
            this.type = type;
            this.isLongPress = false;
            this.longPressTimer = setTimeout(function () {
                _this.isLongPress = true;
                _this.onChange();
                _this.longPressStep();
            }, LONG_PRESS_START_TIME);
        },
        onTouchEnd: function () {
            if (!this.data.longPress) {
                return;
            }
            clearTimeout(this.longPressTimer);
        },
        triggerInput: function (value) {
=======
            const diff = type === 'minus' ? -this.data.step : +this.data.step;
            const value = Math.round((+this.data.value + diff) * 100) / 100;
            this.triggerInput(this.range(value));
            this.$emit(type);
        },
        longPressStep() {
            this.longPressTimer = setTimeout(() => {
                this.onChange();
                this.longPressStep();
            }, LONG_PRESS_INTERVAL);
        },
        onTap(event) {
            const { type } = event.currentTarget.dataset;
            this.type = type;
            this.onChange();
        },
        onTouchStart(event) {
            clearTimeout(this.longPressTimer);
            const { type } = event.currentTarget.dataset;
            this.type = type;
            this.isLongPress = false;
            this.longPressTimer = setTimeout(() => {
                this.isLongPress = true;
                this.onChange();
                this.longPressStep();
            }, LONG_PRESS_START_TIME);
        },
        onTouchEnd() {
            clearTimeout(this.longPressTimer);
        },
        triggerInput(value) {
>>>>>>> 336dbefd48c7371c730c2bc3d82d4e4e1ee6a9b2
            this.setData({
                value: this.data.asyncChange ? this.data.value : value
            });
            this.$emit('change', value);
        },
<<<<<<< HEAD
        computeInputStyle: function () {
            var style = '';
            if (this.data.inputWidth) {
                style = "width: " + utils_1.addUnit(this.data.inputWidth) + ";";
            }
            if (this.data.buttonSize) {
                style += "height: " + utils_1.addUnit(this.data.buttonSize) + ";";
            }
            return style;
        },
        computeButtonStyle: function () {
            var style = '';
            var size = utils_1.addUnit(this.data.buttonSize);
            if (this.data.buttonSize) {
                style = "width: " + size + ";height: " + size + ";";
=======
        computeInputStyle() {
            let style = '';
            if (this.data.inputWidth) {
                style = `width: ${addUnit(this.data.inputWidth)};`;
            }
            if (this.data.buttonSize) {
                style += `height: ${addUnit(this.data.buttonSize)};`;
            }
            return style;
        },
        computeButtonStyle() {
            let style = '';
            const size = addUnit(this.data.buttonSize);
            if (this.data.buttonSize) {
                style = `width: ${size};height: ${size};`;
>>>>>>> 336dbefd48c7371c730c2bc3d82d4e4e1ee6a9b2
            }
            return style;
        }
    }
});
