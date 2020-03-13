<<<<<<< HEAD
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var component_1 = require("../common/component");
var transition_1 = require("../mixins/transition");
component_1.VantComponent({
=======
import { VantComponent } from '../common/component';
import { transition } from '../mixins/transition';
import { safeArea } from '../mixins/safe-area';
VantComponent({
>>>>>>> 336dbefd48c7371c730c2bc3d82d4e4e1ee6a9b2
    classes: [
        'enter-class',
        'enter-active-class',
        'enter-to-class',
        'leave-class',
        'leave-active-class',
        'leave-to-class'
    ],
<<<<<<< HEAD
    mixins: [transition_1.transition(false)],
=======
    mixins: [transition(false), safeArea()],
>>>>>>> 336dbefd48c7371c730c2bc3d82d4e4e1ee6a9b2
    props: {
        round: Boolean,
        closeable: Boolean,
        customStyle: String,
        overlayStyle: String,
        transition: {
            type: String,
            observer: 'observeClass'
        },
        zIndex: {
            type: Number,
            value: 100
        },
        overlay: {
            type: Boolean,
            value: true
        },
        closeIcon: {
            type: String,
            value: 'cross'
        },
        closeIconPosition: {
            type: String,
            value: 'top-right'
        },
        closeOnClickOverlay: {
            type: Boolean,
            value: true
        },
        position: {
            type: String,
            value: 'center',
            observer: 'observeClass'
<<<<<<< HEAD
        },
        safeAreaInsetBottom: {
            type: Boolean,
            value: true
        },
        safeAreaInsetTop: {
            type: Boolean,
            value: false
        }
    },
    created: function () {
        this.observeClass();
    },
    methods: {
        onClickCloseIcon: function () {
            this.$emit('close');
        },
        onClickOverlay: function () {
=======
        }
    },
    created() {
        this.observeClass();
    },
    methods: {
        onClickCloseIcon() {
            this.$emit('close');
        },
        onClickOverlay() {
>>>>>>> 336dbefd48c7371c730c2bc3d82d4e4e1ee6a9b2
            this.$emit('click-overlay');
            if (this.data.closeOnClickOverlay) {
                this.$emit('close');
            }
        },
<<<<<<< HEAD
        observeClass: function () {
            var _a = this.data, transition = _a.transition, position = _a.position;
            var updateData = {
=======
        observeClass() {
            const { transition, position } = this.data;
            const updateData = {
>>>>>>> 336dbefd48c7371c730c2bc3d82d4e4e1ee6a9b2
                name: transition || position
            };
            if (transition === 'none') {
                updateData.duration = 0;
            }
            this.setData(updateData);
        }
    }
});
