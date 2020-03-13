<<<<<<< HEAD
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var component_1 = require("../common/component");
component_1.VantComponent({
    relation: {
        name: 'collapse-item',
        type: 'descendant',
        current: 'collapse',
=======
import { VantComponent } from '../common/component';
VantComponent({
    relation: {
        name: 'collapse-item',
        type: 'descendant',
        linked(child) {
            this.children.push(child);
        },
        unlinked(child) {
            this.children = this.children.filter((item) => item !== child);
        }
>>>>>>> 336dbefd48c7371c730c2bc3d82d4e4e1ee6a9b2
    },
    props: {
        value: {
            type: null,
            observer: 'updateExpanded'
        },
        accordion: {
            type: Boolean,
            observer: 'updateExpanded'
        },
        border: {
            type: Boolean,
            value: true
        }
    },
<<<<<<< HEAD
    methods: {
        updateExpanded: function () {
            this.children.forEach(function (child) {
                child.updateExpanded();
            });
        },
        switch: function (name, expanded) {
            var _a = this.data, accordion = _a.accordion, value = _a.value;
            if (!accordion) {
                name = expanded
                    ? (value || []).concat(name)
                    : (value || []).filter(function (activeName) { return activeName !== name; });
=======
    beforeCreate() {
        this.children = [];
    },
    methods: {
        updateExpanded() {
            this.children.forEach((child) => {
                child.updateExpanded();
            });
        },
        switch(name, expanded) {
            const { accordion, value } = this.data;
            if (!accordion) {
                name = expanded
                    ? (value || []).concat(name)
                    : (value || []).filter((activeName) => activeName !== name);
>>>>>>> 336dbefd48c7371c730c2bc3d82d4e4e1ee6a9b2
            }
            else {
                name = expanded ? name : '';
            }
            this.$emit('change', name);
            this.$emit('input', name);
        }
    }
});
