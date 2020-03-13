<<<<<<< HEAD
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var component_1 = require("../common/component");
component_1.VantComponent({
    relation: {
        name: 'tabbar-item',
        type: 'descendant',
        current: 'tabbar',
        linked: function (target) {
            target.parent = this;
            target.updateFromParent();
        },
        unlinked: function () {
=======
import { VantComponent } from '../common/component';
import { safeArea } from '../mixins/safe-area';
VantComponent({
    mixins: [safeArea()],
    relation: {
        name: 'tabbar-item',
        type: 'descendant',
        linked(target) {
            this.children.push(target);
            target.parent = this;
            target.updateFromParent();
        },
        unlinked(target) {
            this.children = this.children.filter((item) => item !== target);
>>>>>>> 336dbefd48c7371c730c2bc3d82d4e4e1ee6a9b2
            this.updateChildren();
        }
    },
    props: {
        active: {
            type: null,
            observer: 'updateChildren'
        },
        activeColor: {
            type: String,
            observer: 'updateChildren'
        },
        inactiveColor: {
            type: String,
            observer: 'updateChildren'
        },
        fixed: {
            type: Boolean,
            value: true
        },
        border: {
            type: Boolean,
            value: true
        },
        zIndex: {
            type: Number,
            value: 1
<<<<<<< HEAD
        },
        safeAreaInsetBottom: {
            type: Boolean,
            value: true
        }
    },
    methods: {
        updateChildren: function () {
            var children = this.children;
            if (!Array.isArray(children) || !children.length) {
                return Promise.resolve();
            }
            return Promise.all(children.map(function (child) { return child.updateFromParent(); }));
        },
        onChange: function (child) {
            var index = this.children.indexOf(child);
            var active = child.data.name || index;
=======
        }
    },
    beforeCreate() {
        this.children = [];
    },
    methods: {
        updateChildren() {
            const { children } = this;
            if (!Array.isArray(children) || !children.length) {
                return Promise.resolve();
            }
            return Promise.all(children.map((child) => child.updateFromParent()));
        },
        onChange(child) {
            const index = this.children.indexOf(child);
            const active = child.data.name || index;
>>>>>>> 336dbefd48c7371c730c2bc3d82d4e4e1ee6a9b2
            if (active !== this.data.active) {
                this.$emit('change', active);
            }
        }
    }
});
