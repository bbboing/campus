<<<<<<< HEAD
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var component_1 = require("../common/component");
var link_1 = require("../mixins/link");
var button_1 = require("../mixins/button");
var open_type_1 = require("../mixins/open-type");
component_1.VantComponent({
    mixins: [link_1.link, button_1.button, open_type_1.openType],
    relation: {
        type: 'ancestor',
        name: 'goods-action',
        current: 'goods-action-button',
    },
=======
import { VantComponent } from '../common/component';
import { link } from '../mixins/link';
import { button } from '../mixins/button';
import { openType } from '../mixins/open-type';
VantComponent({
    mixins: [link, button, openType],
>>>>>>> 336dbefd48c7371c730c2bc3d82d4e4e1ee6a9b2
    props: {
        text: String,
        color: String,
        loading: Boolean,
        disabled: Boolean,
<<<<<<< HEAD
        plain: Boolean,
=======
>>>>>>> 336dbefd48c7371c730c2bc3d82d4e4e1ee6a9b2
        type: {
            type: String,
            value: 'danger'
        }
    },
<<<<<<< HEAD
    mounted: function () {
        this.updateStyle();
    },
    methods: {
        onClick: function (event) {
            this.$emit('click', event.detail);
            this.jumpLink();
        },
        updateStyle: function () {
            var _a = this.parent.children, children = _a === void 0 ? [] : _a;
            var length = children.length;
            var index = children.indexOf(this);
            this.setData({
                isFirst: index === 0,
                isLast: index === length - 1
            });
=======
    methods: {
        onClick(event) {
            this.$emit('click', event.detail);
            this.jumpLink();
>>>>>>> 336dbefd48c7371c730c2bc3d82d4e4e1ee6a9b2
        }
    }
});
