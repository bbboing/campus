<<<<<<< HEAD
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var component_1 = require("../common/component");
var color_1 = require("../common/color");
component_1.VantComponent({
=======
import { VantComponent } from '../common/component';
import { BLUE } from '../common/color';
import { addUnit } from '../common/utils';
VantComponent({
>>>>>>> 336dbefd48c7371c730c2bc3d82d4e4e1ee6a9b2
    props: {
        inactive: Boolean,
        percentage: Number,
        pivotText: String,
        pivotColor: String,
<<<<<<< HEAD
        trackColor: String,
=======
>>>>>>> 336dbefd48c7371c730c2bc3d82d4e4e1ee6a9b2
        showPivot: {
            type: Boolean,
            value: true
        },
        color: {
            type: String,
<<<<<<< HEAD
            value: color_1.BLUE
=======
            value: BLUE
>>>>>>> 336dbefd48c7371c730c2bc3d82d4e4e1ee6a9b2
        },
        textColor: {
            type: String,
            value: '#fff'
        },
        strokeWidth: {
            type: null,
<<<<<<< HEAD
            value: 4
=======
            observer: 'setStrokeWidthUnit'
        }
    },
    data: {
        strokeWidthUnit: '4px'
    },
    methods: {
        setStrokeWidthUnit(val) {
            this.setData({
                strokeWidthUnit: addUnit(val)
            });
>>>>>>> 336dbefd48c7371c730c2bc3d82d4e4e1ee6a9b2
        }
    }
});
