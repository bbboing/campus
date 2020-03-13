<<<<<<< HEAD
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var component_1 = require("../common/component");
var utils_1 = require("../common/utils");
component_1.VantComponent({
    relation: {
        name: 'grid-item',
        type: 'descendant',
        current: 'grid',
=======
import { VantComponent } from '../common/component';
VantComponent({
    relation: {
        name: 'grid-item',
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
        square: {
            type: Boolean,
            observer: 'updateChildren'
        },
        gutter: {
            type: [Number, String],
            value: 0,
            observer: 'updateChildren'
        },
        clickable: {
            type: Boolean,
            observer: 'updateChildren'
        },
        columnNum: {
            type: Number,
            value: 4,
            observer: 'updateChildren'
        },
        center: {
            type: Boolean,
            value: true,
            observer: 'updateChildren'
        },
        border: {
            type: Boolean,
            value: true,
            observer: 'updateChildren'
        }
    },
<<<<<<< HEAD
    data: {
        viewStyle: '',
    },
    created: function () {
        var gutter = this.data.gutter;
        if (gutter) {
            this.setData({
                viewStyle: "padding-left: " + utils_1.addUnit(gutter)
=======
    beforeCreate() {
        this.children = [];
    },
    created() {
        const { gutter } = this.data;
        if (gutter) {
            this.setData({
                style: `padding-left: ${gutter}px`
>>>>>>> 336dbefd48c7371c730c2bc3d82d4e4e1ee6a9b2
            });
        }
    },
    methods: {
<<<<<<< HEAD
        updateChildren: function () {
            this.children.forEach(function (child) {
=======
        updateChildren() {
            this.children.forEach((child) => {
>>>>>>> 336dbefd48c7371c730c2bc3d82d4e4e1ee6a9b2
                child.updateStyle();
            });
        }
    }
});
