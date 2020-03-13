<<<<<<< HEAD
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var component_1 = require("../common/component");
var nextTick = function () { return new Promise(function (resolve) { return setTimeout(resolve, 20); }); };
component_1.VantComponent({
=======
import { VantComponent } from '../common/component';
const nextTick = () => new Promise(resolve => setTimeout(resolve, 20));
VantComponent({
>>>>>>> 336dbefd48c7371c730c2bc3d82d4e4e1ee6a9b2
    classes: ['title-class', 'content-class'],
    relation: {
        name: 'collapse',
        type: 'ancestor',
<<<<<<< HEAD
        current: 'collapse-item',
=======
        linked(parent) {
            this.parent = parent;
        }
>>>>>>> 336dbefd48c7371c730c2bc3d82d4e4e1ee6a9b2
    },
    props: {
        name: null,
        title: null,
        value: null,
        icon: String,
        label: String,
        disabled: Boolean,
        clickable: Boolean,
        border: {
            type: Boolean,
            value: true
        },
        isLink: {
            type: Boolean,
            value: true
        }
    },
    data: {
        contentHeight: 0,
        expanded: false,
        transition: false
    },
<<<<<<< HEAD
    mounted: function () {
        var _this = this;
        this.updateExpanded()
            .then(nextTick)
            .then(function () {
            var data = { transition: true };
            if (_this.data.expanded) {
                data.contentHeight = 'auto';
            }
            _this.setData(data);
        });
    },
    methods: {
        updateExpanded: function () {
            if (!this.parent) {
                return Promise.resolve();
            }
            var _a = this.parent.data, value = _a.value, accordion = _a.accordion;
            var _b = this.parent.children, children = _b === void 0 ? [] : _b;
            var name = this.data.name;
            var index = children.indexOf(this);
            var currentName = name == null ? index : name;
            var expanded = accordion
                ? value === currentName
                : (value || []).some(function (name) { return name === currentName; });
            var stack = [];
            if (expanded !== this.data.expanded) {
                stack.push(this.updateStyle(expanded));
            }
            stack.push(this.set({ index: index, expanded: expanded }));
            return Promise.all(stack);
        },
        updateStyle: function (expanded) {
            var _this = this;
            return this.getRect('.van-collapse-item__content')
                .then(function (rect) { return rect.height; })
                .then(function (height) {
                if (expanded) {
                    return _this.set({
                        contentHeight: height ? height + "px" : 'auto'
                    });
                }
                return _this.set({ contentHeight: height + "px" })
                    .then(nextTick)
                    .then(function () { return _this.set({ contentHeight: 0 }); });
            });
        },
        onClick: function () {
            if (this.data.disabled) {
                return;
            }
            var _a = this.data, name = _a.name, expanded = _a.expanded;
            var index = this.parent.children.indexOf(this);
            var currentName = name == null ? index : name;
            this.parent.switch(currentName, !expanded);
        },
        onTransitionEnd: function () {
=======
    mounted() {
        this.updateExpanded()
            .then(nextTick)
            .then(() => {
            const data = { transition: true };
            if (this.data.expanded) {
                data.contentHeight = 'auto';
            }
            this.setData(data);
        });
    },
    methods: {
        updateExpanded() {
            if (!this.parent) {
                return Promise.resolve();
            }
            const { value, accordion } = this.parent.data;
            const { children = [] } = this.parent;
            const { name } = this.data;
            const index = children.indexOf(this);
            const currentName = name == null ? index : name;
            const expanded = accordion
                ? value === currentName
                : (value || []).some((name) => name === currentName);
            const stack = [];
            if (expanded !== this.data.expanded) {
                stack.push(this.updateStyle(expanded));
            }
            stack.push(this.set({ index, expanded }));
            return Promise.all(stack);
        },
        updateStyle(expanded) {
            return this.getRect('.van-collapse-item__content')
                .then((rect) => rect.height)
                .then((height) => {
                if (expanded) {
                    return this.set({
                        contentHeight: height ? `${height}px` : 'auto'
                    });
                }
                return this.set({ contentHeight: `${height}px` })
                    .then(nextTick)
                    .then(() => this.set({ contentHeight: 0 }));
            });
        },
        onClick() {
            if (this.data.disabled) {
                return;
            }
            const { name, expanded } = this.data;
            const index = this.parent.children.indexOf(this);
            const currentName = name == null ? index : name;
            this.parent.switch(currentName, !expanded);
        },
        onTransitionEnd() {
>>>>>>> 336dbefd48c7371c730c2bc3d82d4e4e1ee6a9b2
            if (this.data.expanded) {
                this.setData({
                    contentHeight: 'auto'
                });
            }
        }
    }
});
