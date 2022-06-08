"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Rectangle = void 0;
const shape_1 = require("./shape");
class Rectangle extends shape_1.Shape {
    constructor(color, filled, width, length) {
        super(color, filled);
        this.width = 1;
        this.length = 1;
        this.width = width;
        this.length = length;
    }
    get getWidth() {
        return this.width;
    }
    set setWidth(width) {
        this.width = width;
    }
    get getLength() {
        return this.length;
    }
    set setLength(length) {
        this.length = length;
    }
    getArea() {
        return this.width * this.length;
    }
    getPerimeter() {
        return (this.width + this.length) * 2;
    }
    toString() {
        return `A circle with width = ${this.width}
        length = ${this.length}
        which is a subclass of 
        ${super.toString()}"}`;
    }
}
exports.Rectangle = Rectangle;
