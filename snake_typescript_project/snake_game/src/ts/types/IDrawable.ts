import { Vector2 } from "./Vector2";

export interface IDrawable {
    position: Vector2
    draw(): void 
}