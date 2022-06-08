"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Circle = void 0;
const shape_1 = require("./shape");
class Circle extends shape_1.Shape {
    constructor(radius, color, filled) {
        super(color, filled);
        this.radius = 1.0;
        this.radius = radius;
    }
    get getRadius() {
        return this.radius;
    }
    set setRadius(radius) {
        this.radius = radius;
    }
    getArea() {
        return this.radius * this.radius * Math.PI;
    }
    getPerimeter() {
        return 2 * this.radius * Math.PI;
    }
    toString() {
        return `A circle with radius of ${this.radius}, which is a subclass of ${super.toString()}"}`;
    }
}
exports.Circle = Circle;
