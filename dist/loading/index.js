<<<<<<< HEAD
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var component_1 = require("../common/component");
component_1.VantComponent({
    props: {
        color: String,
        vertical: Boolean,
=======
import { VantComponent } from '../common/component';
import { addUnit } from '../common/utils';
VantComponent({
    props: {
        size: {
            type: String,
            observer: 'setSizeWithUnit'
        },
>>>>>>> 336dbefd48c7371c730c2bc3d82d4e4e1ee6a9b2
        type: {
            type: String,
            value: 'circular'
        },
<<<<<<< HEAD
        size: String,
        textSize: String
    },
    data: {
        array12: Array.from({ length: 12 }),
    },
=======
        color: {
            type: String,
            value: '#c9c9c9'
        }
    },
    data: {
        sizeWithUnit: '30px'
    },
    methods: {
        setSizeWithUnit(size) {
            this.setData({
                sizeWithUnit: addUnit(size)
            });
        }
    }
>>>>>>> 336dbefd48c7371c730c2bc3d82d4e4e1ee6a9b2
});
