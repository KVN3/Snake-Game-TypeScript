import { Axis } from "./Enums";
import { Direction } from "readline";

export class MovementDirection{
    private _axis: Axis;
    private _direction: Direction;

    public constructor(axis: Axis, direction: Direction){
        this._axis = axis;
        this._direction = direction;
    }

    public set(axis: Axis, direction: Direction){
        this._axis = axis;
        this._direction = direction;
    }

    public getAxis(): Axis { return this._axis; }
    public getDirectionNumber(): Direction { return this._direction; }
}