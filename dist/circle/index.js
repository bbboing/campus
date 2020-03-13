<<<<<<< HEAD
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var component_1 = require("../common/component");
var utils_1 = require("../common/utils");
var color_1 = require("../common/color");
function format(rate) {
    return Math.min(Math.max(rate, 0), 100);
}
var PERIMETER = 2 * Math.PI;
var BEGIN_ANGLE = -Math.PI / 2;
var STEP = 1;
component_1.VantComponent({
=======
import { VantComponent } from '../common/component';
import { isObj } from '../common/utils';
import { BLUE, WHITE } from '../common/color';
function format(rate) {
    return Math.min(Math.max(rate, 0), 100);
}
const PERIMETER = 2 * Math.PI;
const BEGIN_ANGLE = -Math.PI / 2;
const STEP = 1;
VantComponent({
>>>>>>> 336dbefd48c7371c730c2bc3d82d4e4e1ee6a9b2
    props: {
        text: String,
        lineCap: {
            type: String,
            value: 'round'
        },
        value: {
            type: Number,
            value: 0,
            observer: 'reRender'
        },
        speed: {
            type: Number,
            value: 50
        },
        size: {
            type: Number,
            value: 100,
<<<<<<< HEAD
=======
            observer: 'setStyle'
>>>>>>> 336dbefd48c7371c730c2bc3d82d4e4e1ee6a9b2
        },
        fill: String,
        layerColor: {
            type: String,
<<<<<<< HEAD
            value: color_1.WHITE
        },
        color: {
            type: [String, Object],
            value: color_1.BLUE,
=======
            value: WHITE
        },
        color: {
            type: [String, Object],
            value: BLUE,
>>>>>>> 336dbefd48c7371c730c2bc3d82d4e4e1ee6a9b2
            observer: 'setHoverColor'
        },
        strokeWidth: {
            type: Number,
            value: 4
        },
        clockwise: {
            type: Boolean,
            value: true
        }
    },
    data: {
<<<<<<< HEAD
        hoverColor: color_1.BLUE
    },
    methods: {
        getContext: function () {
=======
        style: 'width: 100px; height: 100px;',
        hoverColor: BLUE
    },
    methods: {
        getContext() {
>>>>>>> 336dbefd48c7371c730c2bc3d82d4e4e1ee6a9b2
            if (!this.ctx) {
                this.ctx = wx.createCanvasContext('van-circle', this);
            }
            return this.ctx;
        },
<<<<<<< HEAD
        setHoverColor: function () {
            var context = this.getContext();
            var _a = this.data, color = _a.color, size = _a.size;
            var hoverColor = color;
            if (utils_1.isObj(color)) {
                var LinearColor_1 = context.createLinearGradient(size, 0, 0, 0);
                Object.keys(color)
                    .sort(function (a, b) { return parseFloat(a) - parseFloat(b); })
                    .map(function (key) { return LinearColor_1.addColorStop(parseFloat(key) / 100, color[key]); });
                hoverColor = LinearColor_1;
            }
            this.setData({ hoverColor: hoverColor });
        },
        presetCanvas: function (context, strokeStyle, beginAngle, endAngle, fill) {
            var _a = this.data, strokeWidth = _a.strokeWidth, lineCap = _a.lineCap, clockwise = _a.clockwise, size = _a.size;
            var position = size / 2;
            var radius = position - strokeWidth / 2;
=======
        setHoverColor() {
            const context = this.getContext();
            const { color, size } = this.data;
            let hoverColor = color;
            if (isObj(color)) {
                const LinearColor = context.createLinearGradient(size, 0, 0, 0);
                Object.keys(color)
                    .sort((a, b) => parseFloat(a) - parseFloat(b))
                    .map(key => LinearColor.addColorStop(parseFloat(key) / 100, color[key]));
                hoverColor = LinearColor;
            }
            this.setData({ hoverColor });
        },
        setStyle() {
            const { size } = this.data;
            const style = `width: ${size}px; height: ${size}px;`;
            this.setData({ style });
        },
        presetCanvas(context, strokeStyle, beginAngle, endAngle, fill) {
            const { strokeWidth, lineCap, clockwise, size } = this.data;
            const position = size / 2;
            const radius = position - strokeWidth / 2;
>>>>>>> 336dbefd48c7371c730c2bc3d82d4e4e1ee6a9b2
            context.setStrokeStyle(strokeStyle);
            context.setLineWidth(strokeWidth);
            context.setLineCap(lineCap);
            context.beginPath();
            context.arc(position, position, radius, beginAngle, endAngle, !clockwise);
            context.stroke();
            if (fill) {
                context.setFillStyle(fill);
                context.fill();
            }
        },
<<<<<<< HEAD
        renderLayerCircle: function (context) {
            var _a = this.data, layerColor = _a.layerColor, fill = _a.fill;
            this.presetCanvas(context, layerColor, 0, PERIMETER, fill);
        },
        renderHoverCircle: function (context, formatValue) {
            var _a = this.data, clockwise = _a.clockwise, hoverColor = _a.hoverColor;
            // 结束角度
            var progress = PERIMETER * (formatValue / 100);
            var endAngle = clockwise
=======
        renderLayerCircle(context) {
            const { layerColor, fill } = this.data;
            this.presetCanvas(context, layerColor, 0, PERIMETER, fill);
        },
        renderHoverCircle(context, formatValue) {
            const { clockwise, hoverColor } = this.data;
            // 结束角度
            const progress = PERIMETER * (formatValue / 100);
            const endAngle = clockwise
>>>>>>> 336dbefd48c7371c730c2bc3d82d4e4e1ee6a9b2
                ? BEGIN_ANGLE + progress
                : 3 * Math.PI - (BEGIN_ANGLE + progress);
            this.presetCanvas(context, hoverColor, BEGIN_ANGLE, endAngle);
        },
<<<<<<< HEAD
        drawCircle: function (currentValue) {
            var context = this.getContext();
            var size = this.data.size;
            context.clearRect(0, 0, size, size);
            this.renderLayerCircle(context);
            var formatValue = format(currentValue);
=======
        drawCircle(currentValue) {
            const context = this.getContext();
            const { size } = this.data;
            context.clearRect(0, 0, size, size);
            this.renderLayerCircle(context);
            const formatValue = format(currentValue);
>>>>>>> 336dbefd48c7371c730c2bc3d82d4e4e1ee6a9b2
            if (formatValue !== 0) {
                this.renderHoverCircle(context, formatValue);
            }
            context.draw();
        },
<<<<<<< HEAD
        reRender: function () {
            var _this = this;
            // tofector 动画暂时没有想到好的解决方案
            var _a = this.data, value = _a.value, speed = _a.speed;
=======
        reRender() {
            // tofector 动画暂时没有想到好的解决方案
            const { value, speed } = this.data;
>>>>>>> 336dbefd48c7371c730c2bc3d82d4e4e1ee6a9b2
            if (speed <= 0 || speed > 1000) {
                this.drawCircle(value);
                return;
            }
            this.clearInterval();
            this.currentValue = this.currentValue || 0;
<<<<<<< HEAD
            this.interval = setInterval(function () {
                if (_this.currentValue !== value) {
                    if (_this.currentValue < value) {
                        _this.currentValue += STEP;
                    }
                    else {
                        _this.currentValue -= STEP;
                    }
                    _this.drawCircle(_this.currentValue);
                }
                else {
                    _this.clearInterval();
                }
            }, 1000 / speed);
        },
        clearInterval: function () {
=======
            this.interval = setInterval(() => {
                if (this.currentValue !== value) {
                    if (this.currentValue < value) {
                        this.currentValue += STEP;
                    }
                    else {
                        this.currentValue -= STEP;
                    }
                    this.drawCircle(this.currentValue);
                }
                else {
                    this.clearInterval();
                }
            }, 1000 / speed);
        },
        clearInterval() {
>>>>>>> 336dbefd48c7371c730c2bc3d82d4e4e1ee6a9b2
            if (this.interval) {
                clearInterval(this.interval);
                this.interval = null;
            }
        }
    },
<<<<<<< HEAD
    created: function () {
        var value = this.data.value;
        this.currentValue = value;
        this.drawCircle(value);
    },
    destroyed: function () {
=======
    created() {
        const { value } = this.data;
        this.currentValue = value;
        this.drawCircle(value);
    },
    destroyed() {
>>>>>>> 336dbefd48c7371c730c2bc3d82d4e4e1ee6a9b2
        this.ctx = null;
        this.clearInterval();
    }
});
