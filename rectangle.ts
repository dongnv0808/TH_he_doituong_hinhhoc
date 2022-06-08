import { Shape } from "./shape";

export class Rectangle extends Shape{
    private width: number = 1;
    private length: number = 1;
    constructor(color: string, filled: boolean, width: number, length: number){
        super(color, filled);
        this.width = width;
        this.length = length;
    }
    public get getWidth(): number{
        return this.width;
    }
    public set setWidth(width: number){
        this.width = width;
    }
    public get getLength(): number{
        return this.length;
    }
    public set setLength(length: number){
        this.length = length;
    }
    public getArea(){
        return this.width * this.length;
    }
    public getPerimeter(){
        return (this.width + this.length) * 2
    }
    public toString(): string{
        return `A circle with width = ${this.width}
        length = ${this.length}
        which is a subclass of 
        ${super.toString()}"}`
    }
}