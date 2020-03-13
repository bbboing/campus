<<<<<<< HEAD
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var component_1 = require("../common/component");
component_1.VantComponent({
    relation: {
        name: 'sidebar-item',
        type: 'descendant',
        current: 'sidebar',
        linked: function () {
            this.setActive(this.data.activeKey);
        },
        unlinked: function () {
            this.setActive(this.data.activeKey);
        }
    },
    props: {
        activeKey: {
=======
import { VantComponent } from '../common/component';
VantComponent({
    relation: {
        name: 'sidebar-item',
        type: 'descendant',
        linked(target) {
            this.items.push(target);
            this.setActive(this.data.active);
        },
        unlinked(target) {
            this.items = this.items.filter(item => item !== target);
            this.setActive(this.data.active);
        }
    },
    props: {
        active: {
>>>>>>> 336dbefd48c7371c730c2bc3d82d4e4e1ee6a9b2
            type: Number,
            value: 0,
            observer: 'setActive'
        }
    },
<<<<<<< HEAD
    beforeCreate: function () {
        this.currentActive = -1;
    },
    methods: {
        setActive: function (activeKey) {
            var _a = this, children = _a.children, currentActive = _a.currentActive;
            if (!children.length) {
                return Promise.resolve();
            }
            this.currentActive = activeKey;
            var stack = [];
            if (currentActive !== activeKey && children[currentActive]) {
                stack.push(children[currentActive].setActive(false));
            }
            if (children[activeKey]) {
                stack.push(children[activeKey].setActive(true));
=======
    beforeCreate() {
        this.items = [];
        this.currentActive = -1;
    },
    methods: {
        setActive(active) {
            const { items, currentActive } = this;
            if (!items.length) {
                return Promise.resolve();
            }
            this.currentActive = active;
            const stack = [];
            if (currentActive !== active && items[currentActive]) {
                stack.push(items[currentActive].setActive(false));
            }
            if (items[active]) {
                stack.push(items[active].setActive(true));
>>>>>>> 336dbefd48c7371c730c2bc3d82d4e4e1ee6a9b2
            }
            return Promise.all(stack);
        }
    }
});
