export class Shape{
    private color: string;
    private filled: boolean;
    constructor(color: string, filled: boolean){
        this.color = color;
        this.filled = filled;
    }
    public get getColor(): string{
        return this.color;
    }
    public set setColor(color: string){
        this.color = color;
    }
    public get getFilled(): boolean{
        return this.filled;
    }
    public set setFilled(filled: boolean){
        this.filled = filled;
    }
    public toString(): string{
        return `A shape with color of ${this.getColor} and ${this.getFilled ? "filled": "not filled"}`
    }
}