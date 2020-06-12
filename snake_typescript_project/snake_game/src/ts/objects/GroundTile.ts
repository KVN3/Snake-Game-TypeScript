import { GameObject } from "~ts/types/GameObject";
import { Snake } from "./snake/Snake";
import { Vector2 } from "~ts/types/Vector2";
import { APPLICATION } from "~ts/app";

export class GroundTile extends GameObject
{
    private _baseTexture: PIXI.Texture;
    private _frame: PIXI.Rectangle;

    public constructor(position: Vector2, fileName: string, frame: PIXI.Rectangle)
    {
        super(position);
        this._baseTexture = new PIXI.Texture(PIXI.Texture.from(fileName).baseTexture);
        this._frame = frame;
    }

    public draw()
    {
        // Create sprite
        this._sprite = new PIXI.Sprite(this._baseTexture);
        this.setFrame(this._frame);

        // Set pos
        this._sprite.x = this.position.x;
        this._sprite.y = this.position.y;

        this._sprite.width = 33;
        this._sprite.height = 33;

        // Add and render
        APPLICATION.stage.addChild(this._sprite);
    }

    public onCollision(snake: Snake)
    {
        
    }

    public update()
    {

    }
}