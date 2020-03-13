<<<<<<< HEAD
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var component_1 = require("../common/component");
component_1.VantComponent({
=======
import { VantComponent } from '../common/component';
VantComponent({
>>>>>>> 336dbefd48c7371c730c2bc3d82d4e4e1ee6a9b2
    props: {
        size: String,
        mark: Boolean,
        color: String,
        plain: Boolean,
        round: Boolean,
        textColor: String,
        type: {
            type: String,
            value: 'default'
<<<<<<< HEAD
        },
        closeable: Boolean
    },
    methods: {
        onClose: function () {
            this.$emit('close');
=======
>>>>>>> 336dbefd48c7371c730c2bc3d82d4e4e1ee6a9b2
        }
    }
});
