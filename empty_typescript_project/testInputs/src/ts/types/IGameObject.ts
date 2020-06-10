import { Snake } from "~ts/objects/Snake";
import { IDrawable } from "./IDrawable";
import { Vector2 } from "./Vector2";

export interface IGameObject extends IDrawable {
    onCollision(snake: Snake): void
    update(position: Vector2): void;
}