<<<<<<< HEAD
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var component_1 = require("../common/component");
var button_1 = require("../mixins/button");
var open_type_1 = require("../mixins/open-type");
var color_1 = require("../common/color");
component_1.VantComponent({
    mixins: [button_1.button, open_type_1.openType],
    props: {
        show: {
            type: Boolean,
            observer: function (show) {
                !show && this.stopLoading();
            }
        },
=======
import { VantComponent } from '../common/component';
import { button } from '../mixins/button';
import { openType } from '../mixins/open-type';
import { GRAY, BLUE } from '../common/color';
VantComponent({
    mixins: [button, openType],
    props: {
        show: Boolean,
>>>>>>> 336dbefd48c7371c730c2bc3d82d4e4e1ee6a9b2
        title: String,
        message: String,
        useSlot: Boolean,
        className: String,
        customStyle: String,
        asyncClose: Boolean,
        messageAlign: String,
<<<<<<< HEAD
        overlayStyle: String,
=======
>>>>>>> 336dbefd48c7371c730c2bc3d82d4e4e1ee6a9b2
        useTitleSlot: Boolean,
        showCancelButton: Boolean,
        closeOnClickOverlay: Boolean,
        confirmButtonOpenType: String,
<<<<<<< HEAD
        width: null,
=======
>>>>>>> 336dbefd48c7371c730c2bc3d82d4e4e1ee6a9b2
        zIndex: {
            type: Number,
            value: 2000
        },
        confirmButtonText: {
            type: String,
            value: '确认'
        },
        cancelButtonText: {
            type: String,
            value: '取消'
        },
        confirmButtonColor: {
            type: String,
<<<<<<< HEAD
            value: color_1.BLUE
        },
        cancelButtonColor: {
            type: String,
            value: color_1.GRAY
=======
            value: BLUE
        },
        cancelButtonColor: {
            type: String,
            value: GRAY
>>>>>>> 336dbefd48c7371c730c2bc3d82d4e4e1ee6a9b2
        },
        showConfirmButton: {
            type: Boolean,
            value: true
        },
        overlay: {
            type: Boolean,
            value: true
        },
        transition: {
            type: String,
            value: 'scale'
        }
    },
    data: {
        loading: {
            confirm: false,
            cancel: false
        }
    },
<<<<<<< HEAD
    methods: {
        onConfirm: function () {
            this.handleAction('confirm');
        },
        onCancel: function () {
            this.handleAction('cancel');
        },
        onClickOverlay: function () {
            this.onClose('overlay');
        },
        handleAction: function (action) {
            var _a;
            if (this.data.asyncClose) {
                this.setData((_a = {},
                    _a["loading." + action] = true,
                    _a));
            }
            this.onClose(action);
        },
        close: function () {
=======
    watch: {
        show(show) {
            !show && this.stopLoading();
        }
    },
    methods: {
        onConfirm() {
            this.handleAction('confirm');
        },
        onCancel() {
            this.handleAction('cancel');
        },
        onClickOverlay() {
            this.onClose('overlay');
        },
        handleAction(action) {
            if (this.data.asyncClose) {
                this.setData({
                    [`loading.${action}`]: true
                });
            }
            this.onClose(action);
        },
        close() {
>>>>>>> 336dbefd48c7371c730c2bc3d82d4e4e1ee6a9b2
            this.setData({
                show: false
            });
        },
<<<<<<< HEAD
        stopLoading: function () {
=======
        stopLoading() {
>>>>>>> 336dbefd48c7371c730c2bc3d82d4e4e1ee6a9b2
            this.setData({
                loading: {
                    confirm: false,
                    cancel: false
                }
            });
        },
<<<<<<< HEAD
        onClose: function (action) {
=======
        onClose(action) {
>>>>>>> 336dbefd48c7371c730c2bc3d82d4e4e1ee6a9b2
            if (!this.data.asyncClose) {
                this.close();
            }
            this.$emit('close', action);
            // 把 dialog 实例传递出去，可以通过 stopLoading() 在外部关闭按钮的 loading
            this.$emit(action, { dialog: this });
<<<<<<< HEAD
            var callback = this.data[action === 'confirm' ? 'onConfirm' : 'onCancel'];
=======
            const callback = this.data[action === 'confirm' ? 'onConfirm' : 'onCancel'];
>>>>>>> 336dbefd48c7371c730c2bc3d82d4e4e1ee6a9b2
            if (callback) {
                callback(this);
            }
        }
    }
});
