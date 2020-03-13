<<<<<<< HEAD
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var link_1 = require("../mixins/link");
var component_1 = require("../common/component");
component_1.VantComponent({
=======
import { link } from '../mixins/link';
import { VantComponent } from '../common/component';
VantComponent({
>>>>>>> 336dbefd48c7371c730c2bc3d82d4e4e1ee6a9b2
    classes: [
        'title-class',
        'label-class',
        'value-class',
        'right-icon-class',
        'hover-class'
    ],
<<<<<<< HEAD
    mixins: [link_1.link],
=======
    mixins: [link],
>>>>>>> 336dbefd48c7371c730c2bc3d82d4e4e1ee6a9b2
    props: {
        title: null,
        value: null,
        icon: String,
        size: String,
        label: String,
        center: Boolean,
        isLink: Boolean,
        required: Boolean,
        clickable: Boolean,
        titleWidth: String,
        customStyle: String,
        arrowDirection: String,
        useLabelSlot: Boolean,
        border: {
            type: Boolean,
            value: true
        }
    },
    methods: {
<<<<<<< HEAD
        onClick: function (event) {
=======
        onClick(event) {
>>>>>>> 336dbefd48c7371c730c2bc3d82d4e4e1ee6a9b2
            this.$emit('click', event.detail);
            this.jumpLink();
        }
    }
});
