<<<<<<< HEAD
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var component_1 = require("../common/component");
component_1.VantComponent({
=======
import { VantComponent } from '../common/component';
import { safeArea } from '../mixins/safe-area';
VantComponent({
    mixins: [safeArea()],
>>>>>>> 336dbefd48c7371c730c2bc3d82d4e4e1ee6a9b2
    classes: [
        'bar-class',
        'price-class',
        'button-class'
    ],
    props: {
        tip: {
            type: null,
            observer: 'updateTip'
        },
        tipIcon: String,
        type: Number,
        price: {
            type: null,
            observer: 'updatePrice'
        },
        label: String,
        loading: Boolean,
        disabled: Boolean,
        buttonText: String,
        currency: {
            type: String,
            value: '¥'
        },
        buttonType: {
            type: String,
            value: 'danger'
        },
        decimalLength: {
            type: Number,
            value: 2,
            observer: 'updatePrice'
        },
<<<<<<< HEAD
        suffixLabel: String,
        safeAreaInsetBottom: {
            type: Boolean,
            value: true
        }
    },
    methods: {
        updatePrice: function () {
            var _a = this.data, price = _a.price, decimalLength = _a.decimalLength;
            var priceStrArr = typeof price === 'number' && (price / 100).toFixed(decimalLength).split('.');
            this.setData({
                hasPrice: typeof price === 'number',
                integerStr: priceStrArr && priceStrArr[0],
                decimalStr: decimalLength && priceStrArr ? "." + priceStrArr[1] : ''
            });
        },
        updateTip: function () {
            this.setData({ hasTip: typeof this.data.tip === 'string' });
        },
        onSubmit: function (event) {
=======
        suffixLabel: String
    },
    methods: {
        updatePrice() {
            const { price, decimalLength } = this.data;
            this.setData({
                hasPrice: typeof price === 'number',
                priceStr: (price / 100).toFixed(decimalLength)
            });
        },
        updateTip() {
            this.setData({ hasTip: typeof this.data.tip === 'string' });
        },
        onSubmit(event) {
>>>>>>> 336dbefd48c7371c730c2bc3d82d4e4e1ee6a9b2
            this.$emit('submit', event.detail);
        }
    }
});
