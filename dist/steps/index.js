<<<<<<< HEAD
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var component_1 = require("../common/component");
var color_1 = require("../common/color");
component_1.VantComponent({
    classes: ['desc-class'],
=======
import { VantComponent } from '../common/component';
import { GREEN } from '../common/color';
VantComponent({
>>>>>>> 336dbefd48c7371c730c2bc3d82d4e4e1ee6a9b2
    props: {
        icon: String,
        steps: Array,
        active: Number,
        direction: {
            type: String,
            value: 'horizontal'
        },
        activeColor: {
            type: String,
<<<<<<< HEAD
            value: color_1.GREEN
        },
        inactiveColor: {
            type: String,
            value: color_1.GRAY_DARK
=======
            value: GREEN
>>>>>>> 336dbefd48c7371c730c2bc3d82d4e4e1ee6a9b2
        },
        activeIcon: {
            type: String,
            value: 'checked'
        },
        inactiveIcon: String
    }
});
