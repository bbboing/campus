<<<<<<< HEAD
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var component_1 = require("../common/component");
component_1.VantComponent({
    props: {
        dot: Boolean,
        info: null,
        size: null,
=======
import { VantComponent } from '../common/component';
import { addUnit } from '../common/utils';
VantComponent({
    props: {
        dot: Boolean,
        info: null,
        size: {
            type: null,
            observer: 'setSizeWithUnit'
        },
>>>>>>> 336dbefd48c7371c730c2bc3d82d4e4e1ee6a9b2
        color: String,
        customStyle: String,
        classPrefix: {
            type: String,
            value: 'van-icon'
        },
        name: {
            type: String,
<<<<<<< HEAD
            observer: function (val) {
=======
            observer(val) {
>>>>>>> 336dbefd48c7371c730c2bc3d82d4e4e1ee6a9b2
                this.setData({
                    isImageName: val.indexOf('/') !== -1
                });
            }
        }
    },
<<<<<<< HEAD
    methods: {
        onClick: function () {
            this.$emit('click');
=======
    data: {
        sizeWithUnit: null,
    },
    methods: {
        onClick() {
            this.$emit('click');
        },
        setSizeWithUnit(size) {
            this.setData({
                sizeWithUnit: addUnit(size)
            });
>>>>>>> 336dbefd48c7371c730c2bc3d82d4e4e1ee6a9b2
        }
    }
});
