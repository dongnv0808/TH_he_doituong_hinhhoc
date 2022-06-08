"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Square = void 0;
const rectangle_1 = require("./rectangle");
class Square extends rectangle_1.Rectangle {
    constructor(side, color, filled) {
        super(color, filled, side, side);
    }
    get Side() {
        return this.getWidth;
    }
    set Side(side) {
        this.setWidth = side;
        this.setLength = side;
    }
    set Width(width) {
        this.Side = width;
    }
    set Length(length) {
        this.Length = length;
    }
    toString() {
        return `A circle with side = ${this.Side}
        which is a subclass of 
        ${super.toString()}"}`;
    }
}
exports.Square = Square;
