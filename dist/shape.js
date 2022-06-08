"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Shape = void 0;
class Shape {
    constructor(color, filled) {
        this.color = color;
        this.filled = filled;
    }
    get getColor() {
        return this.color;
    }
    set setColor(color) {
        this.color = color;
    }
    get getFilled() {
        return this.filled;
    }
    set setFilled(filled) {
        this.filled = filled;
    }
    toString() {
        return `A shape with color of ${this.getColor} and ${this.getFilled ? "filled" : "not filled"}`;
    }
}
exports.Shape = Shape;
