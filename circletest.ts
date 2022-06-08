import { Circle } from "./circle";

let circle1: Circle = new Circle(3.5, "Tim", false);
console.log(circle1);
console.log(`Area Circle: ${circle1.getArea()}`);
console.log(`Perimeter Circle:${circle1.getPerimeter()}`);
console.log(circle1.toString());
