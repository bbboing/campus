<<<<<<< HEAD
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var component_1 = require("../common/component");
component_1.VantComponent({
=======
import { VantComponent } from '../common/component';
import { addUnit } from '../common/utils';
VantComponent({
>>>>>>> 336dbefd48c7371c730c2bc3d82d4e4e1ee6a9b2
    field: true,
    relation: {
        name: 'radio-group',
        type: 'ancestor',
<<<<<<< HEAD
        current: 'radio',
    },
    classes: ['icon-class', 'label-class'],
    props: {
        name: null,
=======
        linked(target) {
            this.parent = target;
        },
        unlinked() {
            this.parent = null;
        }
    },
    classes: ['icon-class', 'label-class'],
    props: {
>>>>>>> 336dbefd48c7371c730c2bc3d82d4e4e1ee6a9b2
        value: null,
        disabled: Boolean,
        useIconSlot: Boolean,
        checkedColor: String,
        labelPosition: {
            type: String,
            value: 'right'
        },
        labelDisabled: Boolean,
        shape: {
            type: String,
            value: 'round'
        },
        iconSize: {
            type: null,
<<<<<<< HEAD
            value: 20
        }
    },
    methods: {
        emitChange: function (value) {
            var instance = this.parent || this;
            instance.$emit('input', value);
            instance.$emit('change', value);
        },
        onChange: function () {
            if (!this.data.disabled) {
                this.emitChange(this.data.name);
            }
        },
        onClickLabel: function () {
            var _a = this.data, disabled = _a.disabled, labelDisabled = _a.labelDisabled, name = _a.name;
=======
            observer: 'setIconSizeUnit'
        }
    },
    data: {
        iconSizeWithUnit: '20px'
    },
    methods: {
        setIconSizeUnit(val) {
            this.setData({
                iconSizeWithUnit: addUnit(val)
            });
        },
        emitChange(value) {
            const instance = this.parent || this;
            instance.$emit('input', value);
            instance.$emit('change', value);
        },
        onChange(event) {
            console.log(event);
            this.emitChange(this.data.name);
        },
        onClickLabel() {
            const { disabled, labelDisabled, name } = this.data;
>>>>>>> 336dbefd48c7371c730c2bc3d82d4e4e1ee6a9b2
            if (!disabled && !labelDisabled) {
                this.emitChange(name);
            }
        }
    }
});
