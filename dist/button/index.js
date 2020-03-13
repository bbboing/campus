<<<<<<< HEAD
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var component_1 = require("../common/component");
var button_1 = require("../mixins/button");
var open_type_1 = require("../mixins/open-type");
component_1.VantComponent({
    mixins: [button_1.button, open_type_1.openType],
    classes: ['hover-class', 'loading-class'],
    data: {
        baseStyle: ''
=======
import { VantComponent } from '../common/component';
import { button } from '../mixins/button';
import { openType } from '../mixins/open-type';

VantComponent({
    mixins: [button, openType],
    classes: ['hover-class', 'loading-class'],
    data: {
        style: ''
>>>>>>> 336dbefd48c7371c730c2bc3d82d4e4e1ee6a9b2
    },
    props: {
        icon: String,
        plain: Boolean,
        block: Boolean,
        round: Boolean,
        square: Boolean,
        loading: Boolean,
        hairline: Boolean,
        disabled: Boolean,
        loadingText: String,
        customStyle: String,
        loadingType: {
            type: String,
            value: 'circular'
        },
        type: {
            type: String,
            value: 'default'
        },
        size: {
            type: String,
            value: 'normal'
        },
        loadingSize: {
            type: String,
            value: '20px'
        },
        color: {
            type: String,
<<<<<<< HEAD
            observer: function (color) {
                var style = '';
                if (color) {
                    style += "color: " + (this.data.plain ? color : 'white') + ";";
                    if (!this.data.plain) {
                        // Use background instead of backgroundColor to make linear-gradient work
                        style += "background: " + color + ";";
=======
            observer(color) {
                let style = '';
                if (color) {
                    style += `color: ${this.data.plain ? color : 'white'};`;
                    if (!this.data.plain) {
                        // Use background instead of backgroundColor to make linear-gradient work
                        style += `background: ${color};`;
>>>>>>> 336dbefd48c7371c730c2bc3d82d4e4e1ee6a9b2
                    }
                    // hide border when color is linear-gradient
                    if (color.indexOf('gradient') !== -1) {
                        style += 'border: 0;';
                    }
                    else {
<<<<<<< HEAD
                        style += "border-color: " + color + ";";
                    }
                }
                if (style !== this.data.baseStyle) {
                    this.setData({ baseStyle: style });
=======
                        style += `border-color: ${color};`;
                    }
                }
                if (style !== this.data.style) {
                    this.setData({ style });
>>>>>>> 336dbefd48c7371c730c2bc3d82d4e4e1ee6a9b2
                }
            }
        }
    },
    methods: {
<<<<<<< HEAD
        onClick: function () {
=======
        onClick() {
>>>>>>> 336dbefd48c7371c730c2bc3d82d4e4e1ee6a9b2
            if (!this.data.disabled && !this.data.loading) {
                this.$emit('click');
            }
        }
    }
});
