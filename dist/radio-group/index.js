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
    relation: {
        name: 'radio',
        type: 'descendant',
<<<<<<< HEAD
        current: 'radio-group',
        linked: function (target) {
            this.updateChild(target);
        },
=======
        linked(target) {
            this.children = this.children || [];
            this.children.push(target);
            this.updateChild(target);
        },
        unlinked(target) {
            this.children = this.children.filter((child) => child !== target);
        }
>>>>>>> 336dbefd48c7371c730c2bc3d82d4e4e1ee6a9b2
    },
    props: {
        value: {
            type: null,
            observer: 'updateChildren'
        },
        disabled: {
            type: Boolean,
            observer: 'updateChildren'
        }
    },
    methods: {
<<<<<<< HEAD
        updateChildren: function () {
            var _this = this;
            (this.children || []).forEach(function (child) {
                return _this.updateChild(child);
            });
        },
        updateChild: function (child) {
            var _a = this.data, value = _a.value, disabled = _a.disabled;
            child.setData({
                value: value,
=======
        updateChildren() {
            (this.children || []).forEach((child) => this.updateChild(child));
        },
        updateChild(child) {
            const { value, disabled } = this.data;
            child.setData({
                value,
>>>>>>> 336dbefd48c7371c730c2bc3d82d4e4e1ee6a9b2
                disabled: disabled || child.data.disabled
            });
        }
    }
});
