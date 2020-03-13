<<<<<<< HEAD
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var component_1 = require("../common/component");
var touch_1 = require("../mixins/touch");
var utils_1 = require("../common/utils");
var THRESHOLD = 0.3;
var ARRAY = [];
component_1.VantComponent({
=======
import { VantComponent } from '../common/component';
import { touch } from '../mixins/touch';
const THRESHOLD = 0.3;
VantComponent({
>>>>>>> 336dbefd48c7371c730c2bc3d82d4e4e1ee6a9b2
    props: {
        disabled: Boolean,
        leftWidth: {
            type: Number,
<<<<<<< HEAD
            value: 0,
            observer: function (leftWidth) {
                if (leftWidth === void 0) { leftWidth = 0; }
                if (this.offset > 0) {
                    this.swipeMove(leftWidth);
                }
            }
        },
        rightWidth: {
            type: Number,
            value: 0,
            observer: function (rightWidth) {
                if (rightWidth === void 0) { rightWidth = 0; }
                if (this.offset < 0) {
                    this.swipeMove(-rightWidth);
                }
            }
=======
            value: 0
        },
        rightWidth: {
            type: Number,
            value: 0
>>>>>>> 336dbefd48c7371c730c2bc3d82d4e4e1ee6a9b2
        },
        asyncClose: Boolean,
        name: {
            type: [Number, String],
            value: ''
        }
    },
<<<<<<< HEAD
    mixins: [touch_1.touch],
    data: {
        catchMove: false
    },
    created: function () {
        this.offset = 0;
        ARRAY.push(this);
    },
    destroyed: function () {
        var _this = this;
        ARRAY = ARRAY.filter(function (item) { return item !== _this; });
    },
    methods: {
        open: function (position) {
            var _a = this.data, leftWidth = _a.leftWidth, rightWidth = _a.rightWidth;
            var offset = position === 'left' ? leftWidth : -rightWidth;
            this.swipeMove(offset);
            this.$emit('open', {
                position: position,
                name: this.data.name
            });
        },
        close: function () {
            this.swipeMove(0);
        },
        swipeMove: function (offset) {
            if (offset === void 0) { offset = 0; }
            this.offset = utils_1.range(offset, -this.data.rightWidth, this.data.leftWidth);
            var transform = "translate3d(" + this.offset + "px, 0, 0)";
            var transition = this.dragging
                ? 'none'
                : 'transform .6s cubic-bezier(0.18, 0.89, 0.32, 1)';
            this.setData({
                wrapperStyle: "\n        -webkit-transform: " + transform + ";\n        -webkit-transition: " + transition + ";\n        transform: " + transform + ";\n        transition: " + transition + ";\n      "
            });
        },
        swipeLeaveTransition: function () {
            var _a = this.data, leftWidth = _a.leftWidth, rightWidth = _a.rightWidth;
            var offset = this.offset;
=======
    mixins: [touch],
    data: {
        catchMove: false
    },
    created() {
        this.offset = 0;
    },
    methods: {
        open(position) {
            const { leftWidth, rightWidth } = this.data;
            const offset = position === 'left' ? leftWidth : -rightWidth;
            this.swipeMove(offset);
        },
        close() {
            this.swipeMove(0);
        },
        swipeMove(offset = 0) {
            this.offset = offset;
            const transform = `translate3d(${offset}px, 0, 0)`;
            const transition = this.draging
                ? 'none'
                : 'transform .6s cubic-bezier(0.18, 0.89, 0.32, 1)';
            this.setData({
                wrapperStyle: `
        -webkit-transform: ${transform};
        -webkit-transition: ${transition};
        transform: ${transform};
        transition: ${transition};
      `
            });
        },
        swipeLeaveTransition() {
            const { leftWidth, rightWidth } = this.data;
            const { offset } = this;
>>>>>>> 336dbefd48c7371c730c2bc3d82d4e4e1ee6a9b2
            if (rightWidth > 0 && -offset > rightWidth * THRESHOLD) {
                this.open('right');
            }
            else if (leftWidth > 0 && offset > leftWidth * THRESHOLD) {
                this.open('left');
            }
            else {
                this.swipeMove(0);
            }
            this.setData({ catchMove: false });
        },
<<<<<<< HEAD
        startDrag: function (event) {
            if (this.data.disabled) {
                return;
            }
            this.startOffset = this.offset;
            this.touchStart(event);
        },
        noop: function () { },
        onDrag: function (event) {
            var _this = this;
=======
        startDrag(event) {
            if (this.data.disabled) {
                return;
            }
            this.draging = true;
            this.startOffset = this.offset;
            this.firstDirection = '';
            this.touchStart(event);
        },
        noop() { },
        onDrag(event) {
>>>>>>> 336dbefd48c7371c730c2bc3d82d4e4e1ee6a9b2
            if (this.data.disabled) {
                return;
            }
            this.touchMove(event);
<<<<<<< HEAD
            if (this.direction !== 'horizontal') {
                return;
            }
            this.dragging = true;
            ARRAY.filter(function (item) { return item !== _this; }).forEach(function (item) { return item.close(); });
            this.setData({ catchMove: true });
            this.swipeMove(this.startOffset + this.deltaX);
        },
        endDrag: function () {
            if (this.data.disabled) {
                return;
            }
            this.dragging = false;
            this.swipeLeaveTransition();
        },
        onClick: function (event) {
            var _a = event.currentTarget.dataset.key, position = _a === void 0 ? 'outside' : _a;
=======
            if (!this.firstDirection) {
                this.firstDirection = this.direction;
                this.setData({ catchMove: this.firstDirection === 'horizontal' });
            }
            if (this.firstDirection === 'vertical') {
                return;
            }
            const { leftWidth, rightWidth } = this.data;
            const offset = this.startOffset + this.deltaX;
            if ((rightWidth > 0 && -offset > rightWidth) ||
                (leftWidth > 0 && offset > leftWidth)) {
                return;
            }
            this.swipeMove(offset);
        },
        endDrag() {
            if (this.data.disabled) {
                return;
            }
            this.draging = false;
            this.swipeLeaveTransition();
        },
        onClick(event) {
            const { key: position = 'outside' } = event.currentTarget.dataset;
>>>>>>> 336dbefd48c7371c730c2bc3d82d4e4e1ee6a9b2
            this.$emit('click', position);
            if (!this.offset) {
                return;
            }
            if (this.data.asyncClose) {
<<<<<<< HEAD
                this.$emit('close', {
                    position: position,
                    instance: this,
                    name: this.data.name
                });
=======
                this.$emit('close', { position, instance: this, name: this.data.name });
>>>>>>> 336dbefd48c7371c730c2bc3d82d4e4e1ee6a9b2
            }
            else {
                this.swipeMove(0);
            }
        }
    }
});
