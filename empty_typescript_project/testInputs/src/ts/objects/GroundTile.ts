import { GameObject } from "~ts/types/GameObject";
import { Snake } from "./Snake";
import { Vector2 } from "~ts/types/Vector2";
import { APPLICATION } from "~ts/app";
import * as TILESET from "~ts/helper/Tileset";

export class GroundTile extends GameObject
{

    // public constructor(position: Vector2){
    //     super(position);
    // }

    public draw()
    {
        let fullTileset = new PIXI.Texture(PIXI.Texture.from("tileset").baseTexture);
        
        // Create sprite
        this._sprite = new PIXI.Sprite(fullTileset);
        this.setFrame(TILESET.GRASS);

        // Set pos
        this._sprite.x = this.position.x;
        this._sprite.y = this.position.y;

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