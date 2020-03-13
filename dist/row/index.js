<<<<<<< HEAD
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var component_1 = require("../common/component");
component_1.VantComponent({
    relation: {
        name: 'col',
        type: 'descendant',
        current: 'row',
        linked: function (target) {
=======
import { VantComponent } from '../common/component';
VantComponent({
    relation: {
        name: 'col',
        type: 'descendant',
        linked(target) {
>>>>>>> 336dbefd48c7371c730c2bc3d82d4e4e1ee6a9b2
            if (this.data.gutter) {
                target.setGutter(this.data.gutter);
            }
        }
    },
    props: {
<<<<<<< HEAD
        gutter: {
            type: Number,
            observer: 'setGutter'
        }
    },
    data: {
        viewStyle: '',
    },
    mounted: function () {
=======
        gutter: Number
    },
    watch: {
        gutter: 'setGutter'
    },
    mounted() {
>>>>>>> 336dbefd48c7371c730c2bc3d82d4e4e1ee6a9b2
        if (this.data.gutter) {
            this.setGutter();
        }
    },
    methods: {
<<<<<<< HEAD
        setGutter: function () {
            var _this = this;
            var gutter = this.data.gutter;
            var margin = "-" + Number(gutter) / 2 + "px";
            var viewStyle = gutter
                ? "margin-right: " + margin + "; margin-left: " + margin + ";"
                : '';
            this.setData({ viewStyle: viewStyle });
            this.getRelationNodes('../col/index').forEach(function (col) {
                col.setGutter(_this.data.gutter);
=======
        setGutter() {
            const { gutter } = this.data;
            const margin = `-${Number(gutter) / 2}px`;
            const style = gutter
                ? `margin-right: ${margin}; margin-left: ${margin};`
                : '';
            this.setData({ style });
            this.getRelationNodes('../col/index').forEach(col => {
                col.setGutter(this.data.gutter);
>>>>>>> 336dbefd48c7371c730c2bc3d82d4e4e1ee6a9b2
            });
        }
    }
});
