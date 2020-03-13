<<<<<<< HEAD
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.button = Behavior({
=======
export const button = Behavior({
>>>>>>> 336dbefd48c7371c730c2bc3d82d4e4e1ee6a9b2
    externalClasses: ['hover-class'],
    properties: {
        id: String,
        lang: {
            type: String,
            value: 'en'
        },
        businessId: Number,
        sessionFrom: String,
        sendMessageTitle: String,
        sendMessagePath: String,
        sendMessageImg: String,
        showMessageCard: Boolean,
        appParameter: String,
        ariaLabel: String
    }
});
