<<<<<<< HEAD
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var component_1 = require("../common/component");
var color_1 = require("../common/color");
component_1.VantComponent({
    field: true,
    classes: ['node-class'],
    props: {
        checked: {
            type: null,
            observer: function (value) {
                var loadingColor = this.getLoadingColor(value);
                this.setData({ value: value, loadingColor: loadingColor });
            }
        },
=======
import { VantComponent } from '../common/component';
import { BLUE, GRAY_DARK } from '../common/color';
VantComponent({
    field: true,
    classes: ['node-class'],
    props: {
        checked: null,
>>>>>>> 336dbefd48c7371c730c2bc3d82d4e4e1ee6a9b2
        loading: Boolean,
        disabled: Boolean,
        activeColor: String,
        inactiveColor: String,
        size: {
            type: String,
            value: '30px'
        },
        activeValue: {
            type: null,
            value: true
        },
        inactiveValue: {
            type: null,
            value: false
        }
    },
<<<<<<< HEAD
    created: function () {
        var value = this.data.checked;
        var loadingColor = this.getLoadingColor(value);
        this.setData({ value: value, loadingColor: loadingColor });
    },
    methods: {
        getLoadingColor: function (checked) {
            var _a = this.data, activeColor = _a.activeColor, inactiveColor = _a.inactiveColor;
            return checked ? activeColor || color_1.BLUE : inactiveColor || color_1.GRAY_DARK;
        },
        onClick: function () {
            var _a = this.data, activeValue = _a.activeValue, inactiveValue = _a.inactiveValue;
            if (!this.data.disabled && !this.data.loading) {
                var checked = this.data.checked === activeValue;
                var value = checked ? inactiveValue : activeValue;
=======
    watch: {
        checked(value) {
            const loadingColor = this.getLoadingColor(value);
            this.setData({ value, loadingColor });
        }
    },
    created() {
        const { checked: value } = this.data;
        const loadingColor = this.getLoadingColor(value);
        this.setData({ value, loadingColor });
    },
    methods: {
        getLoadingColor(checked) {
            const { activeColor, inactiveColor } = this.data;
            return checked ? activeColor || BLUE : inactiveColor || GRAY_DARK;
        },
        onClick() {
            const { activeValue, inactiveValue } = this.data;
            if (!this.data.disabled && !this.data.loading) {
                const checked = this.data.checked === activeValue;
                const value = checked ? inactiveValue : activeValue;
>>>>>>> 336dbefd48c7371c730c2bc3d82d4e4e1ee6a9b2
                this.$emit('input', value);
                this.$emit('change', value);
            }
        }
    }
});
