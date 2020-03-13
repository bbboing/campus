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
        show: Boolean,
        customStyle: String,
        duration: {
            type: null,
            value: 300
        },
        zIndex: {
            type: Number,
            value: 1
        }
    },
    methods: {
<<<<<<< HEAD
        onClick: function () {
            this.$emit('click');
        },
        // for prevent touchmove
        noop: function () { }
=======
        onClick() {
            this.$emit('click');
        },
        // for prevent touchmove
        noop() { }
>>>>>>> 336dbefd48c7371c730c2bc3d82d4e4e1ee6a9b2
    }
});
