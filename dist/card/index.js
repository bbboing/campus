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
        'num-class',
        'desc-class',
        'thumb-class',
        'title-class',
        'price-class',
<<<<<<< HEAD
        'origin-price-class'
    ],
    mixins: [link_1.link],
=======
        'origin-price-class',
    ],
    mixins: [link],
>>>>>>> 336dbefd48c7371c730c2bc3d82d4e4e1ee6a9b2
    props: {
        tag: String,
        num: String,
        desc: String,
        thumb: String,
        title: String,
<<<<<<< HEAD
        price: {
            type: String,
            observer: 'updatePrice'
        },
=======
        price: String,
>>>>>>> 336dbefd48c7371c730c2bc3d82d4e4e1ee6a9b2
        centered: Boolean,
        lazyLoad: Boolean,
        thumbLink: String,
        originPrice: String,
        thumbMode: {
            type: String,
            value: 'aspectFit'
        },
        currency: {
            type: String,
            value: '¥'
        }
    },
    methods: {
<<<<<<< HEAD
        updatePrice: function () {
            var price = this.data.price;
            var priceArr = price.toString().split('.');
            this.setData({
                integerStr: priceArr[0],
                decimalStr: priceArr[1] ? "." + priceArr[1] : ''
            });
        },
        onClickThumb: function () {
=======
        onClickThumb() {
>>>>>>> 336dbefd48c7371c730c2bc3d82d4e4e1ee6a9b2
            this.jumpLink('thumbLink');
        }
    }
});
