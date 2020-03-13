<<<<<<< HEAD
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var component_1 = require("../common/component");
var button_1 = require("../mixins/button");
var open_type_1 = require("../mixins/open-type");
component_1.VantComponent({
    mixins: [button_1.button, open_type_1.openType],
=======
import { VantComponent } from '../common/component';
import { safeArea } from '../mixins/safe-area';
VantComponent({
    mixins: [safeArea()],
>>>>>>> 336dbefd48c7371c730c2bc3d82d4e4e1ee6a9b2
    props: {
        show: Boolean,
        title: String,
        cancelText: String,
<<<<<<< HEAD
        description: String,
        round: {
            type: Boolean,
            value: true
        },
=======
>>>>>>> 336dbefd48c7371c730c2bc3d82d4e4e1ee6a9b2
        zIndex: {
            type: Number,
            value: 100
        },
        actions: {
            type: Array,
            value: []
        },
        overlay: {
            type: Boolean,
            value: true
        },
        closeOnClickOverlay: {
            type: Boolean,
            value: true
        },
        closeOnClickAction: {
            type: Boolean,
            value: true
<<<<<<< HEAD
        },
        safeAreaInsetBottom: {
            type: Boolean,
            value: true
        }
    },
    methods: {
        onSelect: function (event) {
            var index = event.currentTarget.dataset.index;
            var item = this.data.actions[index];
=======
        }
    },
    methods: {
        onSelect(event) {
            const { index } = event.currentTarget.dataset;
            const item = this.data.actions[index];
>>>>>>> 336dbefd48c7371c730c2bc3d82d4e4e1ee6a9b2
            if (item && !item.disabled && !item.loading) {
                this.$emit('select', item);
                if (this.data.closeOnClickAction) {
                    this.onClose();
                }
            }
        },
<<<<<<< HEAD
        onCancel: function () {
            this.$emit('cancel');
        },
        onClose: function () {
            this.$emit('close');
        },
        onClickOverlay: function () {
=======
        onCancel() {
            this.$emit('cancel');
        },
        onClose() {
            this.$emit('close');
        },
        onClickOverlay() {
>>>>>>> 336dbefd48c7371c730c2bc3d82d4e4e1ee6a9b2
            this.$emit('click-overlay');
            this.onClose();
        }
    }
});
