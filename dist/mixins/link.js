<<<<<<< HEAD
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.link = Behavior({
=======
export const link = Behavior({
>>>>>>> 336dbefd48c7371c730c2bc3d82d4e4e1ee6a9b2
    properties: {
        url: String,
        linkType: {
            type: String,
            value: 'navigateTo'
        }
    },
    methods: {
<<<<<<< HEAD
        jumpLink: function (urlKey) {
            if (urlKey === void 0) { urlKey = 'url'; }
            var url = this.data[urlKey];
            if (url) {
                wx[this.data.linkType]({ url: url });
=======
        jumpLink(urlKey = 'url') {
            const url = this.data[urlKey];
            if (url) {
                wx[this.data.linkType]({ url });
>>>>>>> 336dbefd48c7371c730c2bc3d82d4e4e1ee6a9b2
            }
        }
    }
});
