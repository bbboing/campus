<<<<<<< HEAD
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var component_1 = require("../common/component");
component_1.VantComponent({
    relation: {
        type: 'descendant',
        name: 'goods-action-button',
        current: 'goods-action',
    },
    props: {
        safeAreaInsetBottom: {
            type: Boolean,
            value: true
        }
    }
=======
import { VantComponent } from '../common/component';
import { safeArea } from '../mixins/safe-area';
VantComponent({
    mixins: [safeArea()]
>>>>>>> 336dbefd48c7371c730c2bc3d82d4e4e1ee6a9b2
});
