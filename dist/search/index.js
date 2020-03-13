<<<<<<< HEAD
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var component_1 = require("../common/component");
component_1.VantComponent({
=======
import { VantComponent } from '../common/component';
VantComponent({
>>>>>>> 336dbefd48c7371c730c2bc3d82d4e4e1ee6a9b2
    field: true,
    classes: ['field-class', 'input-class', 'cancel-class'],
    props: {
        label: String,
        focus: Boolean,
        error: Boolean,
        disabled: Boolean,
        readonly: Boolean,
        inputAlign: String,
        showAction: Boolean,
        useActionSlot: Boolean,
        useLeftIconSlot: Boolean,
        useRightIconSlot: Boolean,
        leftIcon: {
            type: String,
            value: 'search'
        },
        rightIcon: String,
        placeholder: String,
        placeholderStyle: String,
        actionText: {
            type: String,
            value: '取消'
        },
        background: {
            type: String,
            value: '#ffffff'
        },
        maxlength: {
            type: Number,
            value: -1
        },
        shape: {
            type: String,
            value: 'square'
        },
        clearable: {
            type: Boolean,
            value: true
        }
    },
    methods: {
<<<<<<< HEAD
        onChange: function (event) {
            this.setData({ value: event.detail });
            this.$emit('change', event.detail);
        },
        onCancel: function () {
            var _this = this;
            /**
             * 修复修改输入框值时，输入框失焦和赋值同时触发，赋值失效
             * https://github.com/youzan/@vant/weapp/issues/1768
             */
            setTimeout(function () {
                _this.setData({ value: '' });
                _this.$emit('cancel');
                _this.$emit('change', '');
            }, 200);
        },
        onSearch: function () {
            this.$emit('search', this.data.value);
        },
        onFocus: function () {
            this.$emit('focus');
        },
        onBlur: function () {
            this.$emit('blur');
        },
        onClear: function () {
=======
        onChange(event) {
            this.setData({ value: event.detail });
            this.$emit('change', event.detail);
        },
        onCancel() {
            /**
             * 修复修改输入框值时，输入框失焦和赋值同时触发，赋值失效
             * https://github.com/youzan/vant-weapp/issues/1768
             */
            setTimeout(() => {
                this.setData({ value: '' });
                this.$emit('cancel');
                this.$emit('change', '');
            }, 200);
        },
        onSearch() {
            this.$emit('search', this.data.value);
        },
        onFocus() {
            this.$emit('focus');
        },
        onBlur() {
            this.$emit('blur');
        },
        onClear() {
>>>>>>> 336dbefd48c7371c730c2bc3d82d4e4e1ee6a9b2
            this.$emit('clear');
        },
    }
});
