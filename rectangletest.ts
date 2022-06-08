import { Rectangle } from "./rectangle";

let rectangle = new Rectangle("Xanh", true, 10, 20);
console.log(rectangle);
console.log(`Area Rectangle: ${rectangle.getArea()}`);
console.log(`Perimeter Rectangle: ${rectangle.getPerimeter()}`);
console.log(rectangle.toString())