<<<<<<< HEAD
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var component_1 = require("../common/component");
component_1.VantComponent({
    relation: {
        name: 'row',
        type: 'ancestor',
        current: 'col',
=======
import { VantComponent } from '../common/component';
VantComponent({
    relation: {
        name: 'row',
        type: 'ancestor'
>>>>>>> 336dbefd48c7371c730c2bc3d82d4e4e1ee6a9b2
    },
    props: {
        span: Number,
        offset: Number
    },
    data: {
<<<<<<< HEAD
        viewStyle: ''
    },
    methods: {
        setGutter: function (gutter) {
            var padding = gutter / 2 + "px";
            var viewStyle = gutter ? "padding-left: " + padding + "; padding-right: " + padding + ";" : '';
            if (viewStyle !== this.data.viewStyle) {
                this.setData({ viewStyle: viewStyle });
=======
        style: ''
    },
    methods: {
        setGutter(gutter) {
            const padding = `${gutter / 2}px`;
            const style = gutter ? `padding-left: ${padding}; padding-right: ${padding};` : '';
            if (style !== this.data.style) {
                this.setData({ style });
>>>>>>> 336dbefd48c7371c730c2bc3d82d4e4e1ee6a9b2
            }
        }
    }
});
