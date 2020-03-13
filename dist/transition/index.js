<<<<<<< HEAD
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var component_1 = require("../common/component");
var transition_1 = require("../mixins/transition");
component_1.VantComponent({
=======
import { VantComponent } from '../common/component';
import { transition } from '../mixins/transition';
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
    mixins: [transition_1.transition(true)]
=======
    mixins: [transition(true)]
>>>>>>> 336dbefd48c7371c730c2bc3d82d4e4e1ee6a9b2
});
