import { Rectangle } from "./rectangle";

export class Square extends Rectangle{
    constructor(side: number, color: string, filled: boolean){
        super(color, filled, side, side);
        
    }
    public get Side():number {
        return this.getWidth;
    }
    public set Side(side:number){
        this.setWidth = side;
        this.setLength = side;
    }
    public set Width(width: number){
        this.Side = width;
    }
    public set Length(length: number){
        this.Length = length;
    }
    public toString(): string {
        return `A circle with side = ${this.Side}
        which is a subclass of 
        ${super.toString()}"}`
    }
}