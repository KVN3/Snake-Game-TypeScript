import { Snake } from "~ts/objects/Snake";
import { IDrawable } from "./IDrawable";
import { Vector2 } from "./Vector2";

export abstract class GameObject implements IDrawable {
    public position: Vector2;
    
    protected _sprite: PIXI.Sprite;
    public getSprite(): PIXI.Sprite { return this._sprite; }

    public constructor(position: Vector2)
    {
        this.position = position;
        this._sprite = new PIXI.Sprite();
    }

    public abstract onCollision(snake: Snake): void;
    public abstract update(position: Vector2): void;

    public draw()
    {

    }

    protected setFrame(rectangle: PIXI.Rectangle){
        this._sprite.texture.frame = rectangle;  
    }
}