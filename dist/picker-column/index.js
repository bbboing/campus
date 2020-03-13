<<<<<<< HEAD
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var component_1 = require("../common/component");
var utils_1 = require("../common/utils");
var DEFAULT_DURATION = 200;
component_1.VantComponent({
=======
import { VantComponent } from '../common/component';
import { isObj, range } from '../common/utils';
const DEFAULT_DURATION = 200;
VantComponent({
>>>>>>> 336dbefd48c7371c730c2bc3d82d4e4e1ee6a9b2
    classes: ['active-class'],
    props: {
        valueKey: String,
        className: String,
        itemHeight: Number,
        visibleItemCount: Number,
        initialOptions: {
            type: Array,
            value: []
        },
        defaultIndex: {
            type: Number,
<<<<<<< HEAD
            value: 0,
            observer: function (value) {
                this.setIndex(value);
            }
=======
            value: 0
>>>>>>> 336dbefd48c7371c730c2bc3d82d4e4e1ee6a9b2
        }
    },
    data: {
        startY: 0,
        offset: 0,
        duration: 0,
        startOffset: 0,
        options: [],
        currentIndex: 0
    },
<<<<<<< HEAD
    created: function () {
        var _this = this;
        var _a = this.data, defaultIndex = _a.defaultIndex, initialOptions = _a.initialOptions;
        this.set({
            currentIndex: defaultIndex,
            options: initialOptions
        }).then(function () {
            _this.setIndex(defaultIndex);
        });
    },
    methods: {
        getCount: function () {
            return this.data.options.length;
        },
        onTouchStart: function (event) {
=======
    created() {
        const { defaultIndex, initialOptions } = this.data;
        this.set({
            currentIndex: defaultIndex,
            options: initialOptions
        }).then(() => {
            this.setIndex(defaultIndex);
        });
    },
    watch: {
        defaultIndex(value) {
            this.setIndex(value);
        }
    },
    methods: {
        getCount() {
            return this.data.options.length;
        },
        onTouchStart(event) {
>>>>>>> 336dbefd48c7371c730c2bc3d82d4e4e1ee6a9b2
            this.setData({
                startY: event.touches[0].clientY,
                startOffset: this.data.offset,
                duration: 0
            });
        },
<<<<<<< HEAD
        onTouchMove: function (event) {
            var data = this.data;
            var deltaY = event.touches[0].clientY - data.startY;
            this.setData({
                offset: utils_1.range(data.startOffset + deltaY, -(this.getCount() * data.itemHeight), data.itemHeight)
            });
        },
        onTouchEnd: function () {
            var data = this.data;
            if (data.offset !== data.startOffset) {
                this.setData({ duration: DEFAULT_DURATION });
                var index = utils_1.range(Math.round(-data.offset / data.itemHeight), 0, this.getCount() - 1);
                this.setIndex(index, true);
            }
        },
        onClickItem: function (event) {
            var index = event.currentTarget.dataset.index;
            this.setIndex(index, true);
        },
        adjustIndex: function (index) {
            var data = this.data;
            var count = this.getCount();
            index = utils_1.range(index, 0, count);
            for (var i = index; i < count; i++) {
                if (!this.isDisabled(data.options[i]))
                    return i;
            }
            for (var i = index - 1; i >= 0; i--) {
=======
        onTouchMove(event) {
            const { data } = this;
            const deltaY = event.touches[0].clientY - data.startY;
            this.setData({
                offset: range(data.startOffset + deltaY, -(this.getCount() * data.itemHeight), data.itemHeight)
            });
        },
        onTouchEnd() {
            const { data } = this;
            if (data.offset !== data.startOffset) {
                this.setData({ duration: DEFAULT_DURATION });
                const index = range(Math.round(-data.offset / data.itemHeight), 0, this.getCount() - 1);
                this.setIndex(index, true);
            }
        },
        onClickItem(event) {
            const { index } = event.currentTarget.dataset;
            this.setIndex(index, true);
        },
        adjustIndex(index) {
            const { data } = this;
            const count = this.getCount();
            index = range(index, 0, count);
            for (let i = index; i < count; i++) {
                if (!this.isDisabled(data.options[i]))
                    return i;
            }
            for (let i = index - 1; i >= 0; i--) {
>>>>>>> 336dbefd48c7371c730c2bc3d82d4e4e1ee6a9b2
                if (!this.isDisabled(data.options[i]))
                    return i;
            }
        },
<<<<<<< HEAD
        isDisabled: function (option) {
            return utils_1.isObj(option) && option.disabled;
        },
        getOptionText: function (option) {
            var data = this.data;
            return utils_1.isObj(option) && data.valueKey in option
                ? option[data.valueKey]
                : option;
        },
        setIndex: function (index, userAction) {
            var _this = this;
            var data = this.data;
            index = this.adjustIndex(index) || 0;
            var offset = -index * data.itemHeight;
            if (index !== data.currentIndex) {
                return this.set({ offset: offset, currentIndex: index }).then(function () {
                    userAction && _this.$emit('change', index);
                });
            }
            return this.set({ offset: offset });
        },
        setValue: function (value) {
            var options = this.data.options;
            for (var i = 0; i < options.length; i++) {
=======
        isDisabled(option) {
            return isObj(option) && option.disabled;
        },
        getOptionText(option) {
            const { data } = this;
            return isObj(option) && data.valueKey in option
                ? option[data.valueKey]
                : option;
        },
        setIndex(index, userAction) {
            const { data } = this;
            index = this.adjustIndex(index) || 0;
            const offset = -index * data.itemHeight;
            if (index !== data.currentIndex) {
                return this.set({ offset, currentIndex: index }).then(() => {
                    userAction && this.$emit('change', index);
                });
            }
            return this.set({ offset });
        },
        setValue(value) {
            const { options } = this.data;
            for (let i = 0; i < options.length; i++) {
>>>>>>> 336dbefd48c7371c730c2bc3d82d4e4e1ee6a9b2
                if (this.getOptionText(options[i]) === value) {
                    return this.setIndex(i);
                }
            }
            return Promise.resolve();
        },
<<<<<<< HEAD
        getValue: function () {
            var data = this.data;
=======
        getValue() {
            const { data } = this;
>>>>>>> 336dbefd48c7371c730c2bc3d82d4e4e1ee6a9b2
            return data.options[data.currentIndex];
        }
    }
});
