<<<<<<< HEAD
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var component_1 = require("../common/component");
component_1.VantComponent({
=======
import { VantComponent } from '../common/component';
const ITEM_HEIGHT = 44;
VantComponent({
>>>>>>> 336dbefd48c7371c730c2bc3d82d4e4e1ee6a9b2
    classes: [
        'main-item-class',
        'content-item-class',
        'main-active-class',
        'content-active-class',
        'main-disabled-class',
        'content-disabled-class'
    ],
    props: {
<<<<<<< HEAD
        items: {
            type: Array,
            observer: 'updateSubItems'
        },
        activeId: null,
        mainActiveIndex: {
            type: Number,
            value: 0,
            observer: 'updateSubItems'
        },
        height: {
            type: [Number, String],
=======
        items: Array,
        activeId: null,
        mainActiveIndex: {
            type: Number,
            value: 0
        },
        maxHeight: {
            type: Number,
>>>>>>> 336dbefd48c7371c730c2bc3d82d4e4e1ee6a9b2
            value: 300
        },
        max: {
            type: Number,
            value: Infinity
        }
    },
    data: {
<<<<<<< HEAD
        subItems: []
    },
    methods: {
        // 当一个子项被选择时
        onSelectItem: function (event) {
            var item = event.currentTarget.dataset.item;
            var isArray = Array.isArray(this.data.activeId);
            // 判断有没有超出右侧选择的最大数
            var isOverMax = isArray && this.data.activeId.length >= this.data.max;
            // 判断该项有没有被选中, 如果有被选中，则忽视是否超出的条件
            var isSelected = isArray
                ? this.data.activeId.indexOf(item.id) > -1
                : this.data.activeId === item.id;
=======
        subItems: [],
        mainHeight: 0,
        itemHeight: 0
    },
    watch: {
        items() {
            this.updateSubItems().then(() => {
                this.updateMainHeight();
            });
        },
        maxHeight() {
            this.updateItemHeight(this.data.subItems);
            this.updateMainHeight();
        },
        mainActiveIndex: 'updateSubItems'
    },
    methods: {
        // 当一个子项被选择时
        onSelectItem(event) {
            const { item } = event.currentTarget.dataset;
            const isArray = Array.isArray(this.data.activeId);
            // 判断有没有超出右侧选择的最大数
            const isOverMax = isArray && (this.data.activeId.length >= this.data.max);
            // 判断该项有没有被选中, 如果有被选中，则忽视是否超出的条件
            const isSelected = isArray ? this.data.activeId.indexOf(item.id) > -1 : this.data.activeId === item.id;
>>>>>>> 336dbefd48c7371c730c2bc3d82d4e4e1ee6a9b2
            if (!item.disabled && (!isOverMax || isSelected)) {
                this.$emit('click-item', item);
            }
        },
        // 当一个导航被点击时
<<<<<<< HEAD
        onClickNav: function (event) {
            var index = event.detail;
            var item = this.data.items[index];
            if (!item.disabled) {
                this.$emit('click-nav', { index: index });
            }
        },
        // 更新子项列表
        updateSubItems: function () {
            var _a = this.data, items = _a.items, mainActiveIndex = _a.mainActiveIndex;
            var _b = (items[mainActiveIndex] || {}).children, children = _b === void 0 ? [] : _b;
            return this.set({ subItems: children });
=======
        onClickNav(event) {
            const { index } = event.currentTarget.dataset;
            const item = this.data.items[index];
            if (!item.disabled) {
                this.$emit('click-nav', { index });
            }
        },
        // 更新子项列表
        updateSubItems() {
            const { items, mainActiveIndex } = this.data;
            const { children = [] } = items[mainActiveIndex] || {};
            this.updateItemHeight(children);
            return this.set({ subItems: children });
        },
        // 更新组件整体高度，根据最大高度和当前组件需要展示的高度来决定
        updateMainHeight() {
            const { items = [], subItems = [] } = this.data;
            const maxHeight = Math.max(items.length * ITEM_HEIGHT, subItems.length * ITEM_HEIGHT);
            this.setData({ mainHeight: Math.min(maxHeight, this.data.maxHeight) });
        },
        // 更新子项列表高度，根据可展示的最大高度和当前子项列表的高度决定
        updateItemHeight(subItems) {
            const itemHeight = Math.min(subItems.length * ITEM_HEIGHT, this.data.maxHeight);
            return this.setData({ itemHeight });
>>>>>>> 336dbefd48c7371c730c2bc3d82d4e4e1ee6a9b2
        }
    }
});
