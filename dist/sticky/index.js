<<<<<<< HEAD
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var component_1 = require("../common/component");
var ROOT_ELEMENT = '.van-sticky';
component_1.VantComponent({
=======
import { VantComponent } from '../common/component';
import { nextTick } from '../common/utils';
VantComponent({
>>>>>>> 336dbefd48c7371c730c2bc3d82d4e4e1ee6a9b2
    props: {
        zIndex: {
            type: Number,
            value: 99
        },
        offsetTop: {
            type: Number,
<<<<<<< HEAD
            value: 0,
            observer: 'observeContent'
        },
        disabled: {
            type: Boolean,
            observer: function (value) {
                if (!this.mounted) {
                    return;
                }
                value ? this.disconnectObserver() : this.initObserver();
            }
        },
        container: {
            type: null,
            observer: function (target) {
                if (typeof target !== 'function' || !this.data.height) {
                    return;
                }
                this.observeContainer();
                this.updateFixed();
            }
        }
    },
    data: {
        height: 0,
        fixed: false
    },
    methods: {
        getContainerRect: function () {
            var nodesRef = this.data.container();
            return new Promise(function (resolve) {
                return nodesRef.boundingClientRect(resolve).exec();
            });
        },
        initObserver: function () {
            var _this = this;
            this.disconnectObserver();
            this.getRect(ROOT_ELEMENT).then(function (rect) {
                _this.setData({ height: rect.height });
                wx.nextTick(function () {
                    _this.observeContent();
                    _this.observeContainer();
                });
            });
        },
        updateFixed: function () {
            var _this = this;
            Promise.all([this.getRect(ROOT_ELEMENT), this.getContainerRect()]).then(function (_a) {
                var content = _a[0], container = _a[1];
                _this.setData({ height: content.height });
                _this.containerHeight = container.height;
                wx.nextTick(function () {
                    _this.setFixed(content.top);
                });
            });
        },
        disconnectObserver: function (observerName) {
            if (observerName) {
                var observer = this[observerName];
                observer && observer.disconnect();
            }
            else {
                this.contentObserver && this.contentObserver.disconnect();
                this.containerObserver && this.containerObserver.disconnect();
            }
        },
        observeContent: function () {
            var _this = this;
            var offsetTop = this.data.offsetTop;
            this.disconnectObserver('contentObserver');
            var contentObserver = this.createIntersectionObserver({
                thresholds: [0.9, 1]
            });
            contentObserver.relativeToViewport({ top: -offsetTop });
            contentObserver.observe(ROOT_ELEMENT, function (res) {
                if (_this.data.disabled) {
                    return;
                }
                _this.setFixed(res.boundingClientRect.top);
            });
            this.contentObserver = contentObserver;
        },
        observeContainer: function () {
            var _this = this;
            if (typeof this.data.container !== 'function') {
                return;
            }
            var height = this.data.height;
            this.getContainerRect().then(function (rect) {
                _this.containerHeight = rect.height;
                _this.disconnectObserver('containerObserver');
                var containerObserver = _this.createIntersectionObserver({
                    thresholds: [0.9, 1]
                });
                _this.containerObserver = containerObserver;
                containerObserver.relativeToViewport({
                    top: _this.containerHeight - height
                });
                containerObserver.observe(ROOT_ELEMENT, function (res) {
                    if (_this.data.disabled) {
                        return;
                    }
                    _this.setFixed(res.boundingClientRect.top);
                });
            });
        },
        setFixed: function (top) {
            var _a = this.data, offsetTop = _a.offsetTop, height = _a.height;
            var containerHeight = this.containerHeight;
            var fixed = containerHeight && height
                ? top >= height - containerHeight && top < offsetTop
                : top < offsetTop;
            this.$emit('scroll', {
                scrollTop: top,
                isFixed: fixed
            });
            this.setData({ fixed: fixed });
        }
    },
    mounted: function () {
        this.mounted = true;
        if (!this.data.disabled) {
            this.initObserver();
        }
    },
    destroyed: function () {
        this.disconnectObserver();
=======
            value: 0
        }
    },
    data: {
        position: '',
        height: 0,
        wrapStyle: '',
        containerStyle: ''
    },
    methods: {
        setWrapStyle() {
            const { offsetTop, position } = this.data;
            let wrapStyle;
            let containerStyle;
            switch (position) {
                case 'top':
                    wrapStyle = `
            top: ${offsetTop}px;
            position: fixed;
          `;
                    containerStyle = `height: ${this.itemHeight}px;`;
                    break;
                case 'bottom':
                    wrapStyle = `
            top: auto;
            bottom: 0;
          `;
                    containerStyle = '';
                    break;
                default:
                    wrapStyle = '';
                    containerStyle = '';
            }
            const data = {};
            if (wrapStyle !== this.data.wrapStyle) {
                data.wrapStyle = wrapStyle;
            }
            if (containerStyle !== this.data.containerStyle) {
                data.containerStyle = containerStyle;
            }
            if (JSON.stringify(data) !== '{}') {
                this.setData(data);
            }
        },
        setPosition(position) {
            if (position !== this.data.position) {
                this.setData({ position });
                nextTick(() => {
                    this.setWrapStyle();
                });
            }
        },
        observerContentScroll() {
            const { offsetTop = 0 } = this.data;
            const { windowHeight } = wx.getSystemInfoSync();
            this.createIntersectionObserver({}).disconnect();
            // @ts-ignore
            this.createIntersectionObserver()
                .relativeToViewport({ top: -(this.itemHeight + offsetTop) })
                .observe('.van-sticky', (res) => {
                const { top } = res.boundingClientRect;
                if (top > offsetTop) {
                    return;
                }
                const position = 'top';
                this.$emit('scroll', {
                    scrollTop: top + offsetTop,
                    isFixed: true
                });
                this.setPosition(position);
            });
            // @ts-ignore
            this.createIntersectionObserver()
                .relativeToViewport({ bottom: -(windowHeight - 1 - offsetTop) })
                .observe('.van-sticky', (res) => {
                const { top, bottom } = res.boundingClientRect;
                if (bottom <= this.itemHeight - 1) {
                    return;
                }
                const position = res.intersectionRatio > 0 ? 'top' : '';
                this.$emit('scroll', {
                    scrollTop: top + offsetTop,
                    isFixed: position === 'top'
                });
                this.setPosition(position);
            });
        }
    },
    mounted() {
        this.getRect('.van-sticky').then((rect) => {
            this.itemHeight = rect.height;
            this.itemTop = rect.top;
            this.observerContentScroll();
        });
    },
    destroyed() {
        this.createIntersectionObserver({}).disconnect();
>>>>>>> 336dbefd48c7371c730c2bc3d82d4e4e1ee6a9b2
    }
});
