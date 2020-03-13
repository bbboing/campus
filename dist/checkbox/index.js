<<<<<<< HEAD
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var component_1 = require("../common/component");
=======
import { VantComponent } from '../common/component';
import { addUnit } from '../common/utils';
>>>>>>> 336dbefd48c7371c730c2bc3d82d4e4e1ee6a9b2
function emit(target, value) {
    target.$emit('input', value);
    target.$emit('change', value);
}
<<<<<<< HEAD
component_1.VantComponent({
=======
VantComponent({
>>>>>>> 336dbefd48c7371c730c2bc3d82d4e4e1ee6a9b2
    field: true,
    relation: {
        name: 'checkbox-group',
        type: 'ancestor',
<<<<<<< HEAD
        current: 'checkbox',
=======
        linked(target) {
            this.parent = target;
        },
        unlinked() {
            this.parent = null;
        }
>>>>>>> 336dbefd48c7371c730c2bc3d82d4e4e1ee6a9b2
    },
    classes: ['icon-class', 'label-class'],
    props: {
        value: Boolean,
        disabled: Boolean,
        useIconSlot: Boolean,
        checkedColor: String,
        labelPosition: String,
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
    data: {
        parentDisabled: false
    },
    methods: {
        emitChange: function (value) {
=======
            observer: 'setSizeWithUnit'
        }
    },
    data: {
        sizeWithUnit: '20px'
    },
    methods: {
        emitChange(value) {
>>>>>>> 336dbefd48c7371c730c2bc3d82d4e4e1ee6a9b2
            if (this.parent) {
                this.setParentValue(this.parent, value);
            }
            else {
                emit(this, value);
            }
        },
<<<<<<< HEAD
        toggle: function () {
            var _a = this.data, parentDisabled = _a.parentDisabled, disabled = _a.disabled, value = _a.value;
            if (!disabled && !parentDisabled) {
                this.emitChange(!value);
            }
        },
        onClickLabel: function () {
            var _a = this.data, labelDisabled = _a.labelDisabled, parentDisabled = _a.parentDisabled, disabled = _a.disabled, value = _a.value;
            if (!disabled && !labelDisabled && !parentDisabled) {
                this.emitChange(!value);
            }
        },
        setParentValue: function (parent, value) {
            var parentValue = parent.data.value.slice();
            var name = this.data.name;
            var max = parent.data.max;
=======
        toggle() {
            const { disabled, value } = this.data;
            if (!disabled) {
                this.emitChange(!value);
            }
        },
        onClickLabel() {
            const { labelDisabled, disabled, value } = this.data;
            if (!disabled && !labelDisabled) {
                this.emitChange(!value);
            }
        },
        setParentValue(parent, value) {
            const parentValue = parent.data.value.slice();
            const { name } = this.data;
            const { max } = parent.data;
>>>>>>> 336dbefd48c7371c730c2bc3d82d4e4e1ee6a9b2
            if (value) {
                if (max && parentValue.length >= max) {
                    return;
                }
                if (parentValue.indexOf(name) === -1) {
                    parentValue.push(name);
                    emit(parent, parentValue);
                }
            }
            else {
<<<<<<< HEAD
                var index = parentValue.indexOf(name);
=======
                const index = parentValue.indexOf(name);
>>>>>>> 336dbefd48c7371c730c2bc3d82d4e4e1ee6a9b2
                if (index !== -1) {
                    parentValue.splice(index, 1);
                    emit(parent, parentValue);
                }
            }
<<<<<<< HEAD
        }
=======
        },
        setSizeWithUnit(size) {
            this.set({
                sizeWithUnit: addUnit(size)
            });
        },
>>>>>>> 336dbefd48c7371c730c2bc3d82d4e4e1ee6a9b2
    }
});
