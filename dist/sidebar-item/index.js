<<<<<<< HEAD
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var component_1 = require("../common/component");
component_1.VantComponent({
    classes: [
        'active-class',
        'disabled-class',
    ],
    relation: {
        type: 'ancestor',
        name: 'sidebar',
        current: 'sidebar-item',
=======
import { VantComponent } from '../common/component';
VantComponent({
    relation: {
        type: 'ancestor',
        name: 'sidebar',
        linked(target) {
            this.parent = target;
        }
>>>>>>> 336dbefd48c7371c730c2bc3d82d4e4e1ee6a9b2
    },
    props: {
        dot: Boolean,
        info: null,
<<<<<<< HEAD
        title: String,
        disabled: Boolean
    },
    methods: {
        onClick: function () {
            var _this = this;
            var parent = this.parent;
            if (!parent || this.data.disabled) {
                return;
            }
            var index = parent.children.indexOf(this);
            parent.setActive(index).then(function () {
                _this.$emit('click', index);
                parent.$emit('change', index);
            });
        },
        setActive: function (selected) {
            return this.setData({ selected: selected });
=======
        title: String
    },
    methods: {
        onClick() {
            const { parent } = this;
            if (!parent) {
                return;
            }
            const index = parent.items.indexOf(this);
            parent.setActive(index).then(() => {
                this.$emit('click', index);
                parent.$emit('change', index);
            });
        },
        setActive(active) {
            return this.setData({ active });
>>>>>>> 336dbefd48c7371c730c2bc3d82d4e4e1ee6a9b2
        }
    }
});
