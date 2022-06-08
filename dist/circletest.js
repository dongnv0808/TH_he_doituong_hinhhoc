"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const circle_1 = require("./circle");
let circle1 = new circle_1.Circle(3.5, "Tim", false);
console.log(circle1);
console.log(`Area Circle: ${circle1.getArea()}`);
console.log(`Perimeter Circle:${circle1.getPerimeter()}`);
console.log(circle1.toString());
