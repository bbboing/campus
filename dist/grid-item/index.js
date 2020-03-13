<<<<<<< HEAD
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var link_1 = require("../mixins/link");
var component_1 = require("../common/component");
var utils_1 = require("../common/utils");
component_1.VantComponent({
    relation: {
        name: 'grid',
        type: 'ancestor',
        current: 'grid-item',
    },
    mixins: [link_1.link],
    props: {
        icon: String,
        dot: Boolean,
        info: null,
        text: String,
        useSlot: Boolean
    },
    data: {
        viewStyle: '',
    },
    mounted: function () {
        this.updateStyle();
    },
    methods: {
        updateStyle: function () {
            if (!this.parent) {
                return;
            }
            var _a = this.parent, data = _a.data, children = _a.children;
            var columnNum = data.columnNum, border = data.border, square = data.square, gutter = data.gutter, clickable = data.clickable, center = data.center;
            var width = 100 / columnNum + "%";
            var styleWrapper = [];
            styleWrapper.push("width: " + width);
            if (square) {
                styleWrapper.push("padding-top: " + width);
            }
            if (gutter) {
                var gutterValue = utils_1.addUnit(gutter);
                styleWrapper.push("padding-right: " + gutterValue);
                var index = children.indexOf(this);
                if (index >= columnNum) {
                    styleWrapper.push("margin-top: " + gutterValue);
                }
            }
            var contentStyle = '';
            if (square && gutter) {
                var gutterValue = utils_1.addUnit(gutter);
                contentStyle = "\n          right: " + gutterValue + ";\n          bottom: " + gutterValue + ";\n          height: auto;\n        ";
            }
            this.setData({
                viewStyle: styleWrapper.join('; '),
                contentStyle: contentStyle,
                center: center,
                border: border,
                square: square,
                gutter: gutter,
                clickable: clickable
            });
        },
        onClick: function () {
=======
import { link } from '../mixins/link';
import { VantComponent } from '../common/component';
VantComponent({
    relation: {
        name: 'grid',
        type: 'ancestor',
        linked(parent) {
            this.parent = parent;
        }
    },
    mixins: [link],
    props: {
        icon: String,
        text: String,
        useSlot: Boolean
    },
    mounted() {
        this.updateStyle();
    },
    methods: {
        updateStyle() {
            if (!this.parent) {
                return;
            }
            const { data, children } = this.parent;
            const { columnNum, border, square, gutter, clickable, center } = data;
            const width = `${100 / columnNum}%`;
            const styleWrapper = [];
            styleWrapper.push(`width: ${width}`);
            if (square) {
                styleWrapper.push(`padding-top: ${width}`);
            }
            if (gutter) {
                styleWrapper.push(`padding-right: ${gutter}px`);
                const index = children.indexOf(this);
                if (index >= columnNum) {
                    styleWrapper.push(`margin-top: ${gutter}px`);
                }
            }
            this.setData({
                style: styleWrapper.join('; '),
                center,
                border,
                square,
                gutter,
                clickable
            });
        },
        onClick() {
>>>>>>> 336dbefd48c7371c730c2bc3d82d4e4e1ee6a9b2
            this.$emit('click');
            this.jumpLink();
        }
    }
});
