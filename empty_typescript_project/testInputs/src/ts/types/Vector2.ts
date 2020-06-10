export class Vector2
{
    public x: number;
    public y: number;

    public constructor(x: number = 0, y: number = 0){
        this.x = x;
        this.y = y;
    }

    public set(x: number, y: number)
    {
        //console.log("oldPos(" + this.x + ", " + this.y + ") <- newPos(" + x + ", " + y + ")");
        this.x = x;
        this.y = y;
    }

    public print()
    {
        return "pos(" + this.x + ", " + this.y + ")";
    }
}

// // Garbage Struct type
// export interface Vector2
// {
//     x: number;
//     y: number;

//     // public constructor(x: number, y: number){
//     //     this.x = x;
//     //     this.y = y;
//     // }
// }