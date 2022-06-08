"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rectangle_1 = require("./rectangle");
let rectangle = new rectangle_1.Rectangle("Xanh", true, 10, 20);
console.log(rectangle);
console.log(`Area Rectangle: ${rectangle.getArea()}`);
console.log(`Perimeter Rectangle: ${rectangle.getPerimeter()}`);
console.log(rectangle.toString());
