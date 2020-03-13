<<<<<<< HEAD
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var component_1 = require("../common/component");
var link_1 = require("../mixins/link");
var button_1 = require("../mixins/button");
var open_type_1 = require("../mixins/open-type");
component_1.VantComponent({
    classes: ['icon-class', 'text-class'],
    mixins: [link_1.link, button_1.button, open_type_1.openType],
    props: {
        text: String,
        dot: Boolean,
=======
import { VantComponent } from '../common/component';
import { link } from '../mixins/link';
import { button } from '../mixins/button';
import { openType } from '../mixins/open-type';
VantComponent({
    classes: ['icon-class', 'text-class'],
    mixins: [link, button, openType],
    props: {
        text: String,
>>>>>>> 336dbefd48c7371c730c2bc3d82d4e4e1ee6a9b2
        info: String,
        icon: String,
        disabled: Boolean,
        loading: Boolean
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
