import { Rectangle } from "pixi.js";
import * as TILESET from "~ts/helper/Tileset";

export class SpriteAppearance
{
    public frame: Rectangle;
    public rotation: number;

    public constructor(frame: Rectangle = TILESET.BUNNY, rotation: number = 0)
    {
        this.frame = frame;
        this.rotation = rotation;
    }

    public set(frame: Rectangle, rotation: number = 0)
    {
        this.frame = frame;
        this.rotation = rotation;
    }
}