<<<<<<< HEAD
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MIN_DISTANCE = 10;
function getDirection(x, y) {
    if (x > y && x > MIN_DISTANCE) {
        return 'horizontal';
    }
    if (y > x && y > MIN_DISTANCE) {
        return 'vertical';
    }
    return '';
}
exports.touch = Behavior({
    methods: {
        resetTouchStatus: function () {
=======
export const touch = Behavior({
    methods: {
        touchStart(event) {
            const touch = event.touches[0];
>>>>>>> 336dbefd48c7371c730c2bc3d82d4e4e1ee6a9b2
            this.direction = '';
            this.deltaX = 0;
            this.deltaY = 0;
            this.offsetX = 0;
            this.offsetY = 0;
<<<<<<< HEAD
        },
        touchStart: function (event) {
            this.resetTouchStatus();
            var touch = event.touches[0];
            this.startX = touch.clientX;
            this.startY = touch.clientY;
        },
        touchMove: function (event) {
            var touch = event.touches[0];
=======
            this.startX = touch.clientX;
            this.startY = touch.clientY;
        },
        touchMove(event) {
            const touch = event.touches[0];
>>>>>>> 336dbefd48c7371c730c2bc3d82d4e4e1ee6a9b2
            this.deltaX = touch.clientX - this.startX;
            this.deltaY = touch.clientY - this.startY;
            this.offsetX = Math.abs(this.deltaX);
            this.offsetY = Math.abs(this.deltaY);
<<<<<<< HEAD
            this.direction = this.direction || getDirection(this.offsetX, this.offsetY);
=======
            this.direction =
                this.offsetX > this.offsetY
                    ? 'horizontal'
                    : this.offsetX < this.offsetY
                        ? 'vertical'
                        : '';
>>>>>>> 336dbefd48c7371c730c2bc3d82d4e4e1ee6a9b2
        }
    }
});
