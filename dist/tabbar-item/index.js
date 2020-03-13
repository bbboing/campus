<<<<<<< HEAD
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var component_1 = require("../common/component");
component_1.VantComponent({
=======
import { VantComponent } from '../common/component';
VantComponent({
>>>>>>> 336dbefd48c7371c730c2bc3d82d4e4e1ee6a9b2
    props: {
        info: null,
        name: null,
        icon: String,
        dot: Boolean
    },
    relation: {
        name: 'tabbar',
<<<<<<< HEAD
        type: 'ancestor',
        current: 'tabbar-item',
=======
        type: 'ancestor'
>>>>>>> 336dbefd48c7371c730c2bc3d82d4e4e1ee6a9b2
    },
    data: {
        active: false
    },
    methods: {
<<<<<<< HEAD
        onClick: function () {
=======
        onClick() {
>>>>>>> 336dbefd48c7371c730c2bc3d82d4e4e1ee6a9b2
            if (this.parent) {
                this.parent.onChange(this);
            }
            this.$emit('click');
        },
<<<<<<< HEAD
        updateFromParent: function () {
            var parent = this.parent;
            if (!parent) {
                return;
            }
            var index = parent.children.indexOf(this);
            var parentData = parent.data;
            var data = this.data;
            var active = (data.name || index) === parentData.active;
            var patch = {};
=======
        updateFromParent() {
            const { parent } = this;
            if (!parent) {
                return;
            }
            const index = parent.children.indexOf(this);
            const parentData = parent.data;
            const { data } = this;
            const active = (data.name || index) === parentData.active;
            const patch = {};
>>>>>>> 336dbefd48c7371c730c2bc3d82d4e4e1ee6a9b2
            if (active !== data.active) {
                patch.active = active;
            }
            if (parentData.activeColor !== data.activeColor) {
                patch.activeColor = parentData.activeColor;
            }
            if (parentData.inactiveColor !== data.inactiveColor) {
                patch.inactiveColor = parentData.inactiveColor;
            }
            return Object.keys(patch).length > 0
                ? this.set(patch)
                : Promise.resolve();
        }
    }
});
