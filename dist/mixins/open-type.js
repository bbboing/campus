<<<<<<< HEAD
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.openType = Behavior({
=======
export const openType = Behavior({
>>>>>>> 336dbefd48c7371c730c2bc3d82d4e4e1ee6a9b2
    properties: {
        openType: String
    },
    methods: {
<<<<<<< HEAD
        bindGetUserInfo: function (event) {
            this.$emit('getuserinfo', event.detail);
        },
        bindContact: function (event) {
            this.$emit('contact', event.detail);
        },
        bindGetPhoneNumber: function (event) {
            this.$emit('getphonenumber', event.detail);
        },
        bindError: function (event) {
            this.$emit('error', event.detail);
        },
        bindLaunchApp: function (event) {
            this.$emit('launchapp', event.detail);
        },
        bindOpenSetting: function (event) {
=======
        bindGetUserInfo(event) {
            this.$emit('getuserinfo', event.detail);
        },
        bindContact(event) {
            this.$emit('contact', event.detail);
        },
        bindGetPhoneNumber(event) {
            this.$emit('getphonenumber', event.detail);
        },
        bindError(event) {
            this.$emit('error', event.detail);
        },
        bindLaunchApp(event) {
            this.$emit('launchapp', event.detail);
        },
        bindOpenSetting(event) {
>>>>>>> 336dbefd48c7371c730c2bc3d82d4e4e1ee6a9b2
            this.$emit('opensetting', event.detail);
        },
    }
});
