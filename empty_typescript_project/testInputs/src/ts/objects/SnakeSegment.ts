import { IGameObject } from "~ts/types/IGameObject";
import { Snake } from "./Snake";
import { Vector2 } from "~ts/types/Vector2";
import { APPLICATION } from "~ts/app";
import * as TILESET from "~ts/helper/Tileset";

import tileSetPath from '../../resources/images/Snake.png';
import testTileSetPath from '../../resources/images/testTileSet.png';
import { resources, Rectangle } from "pixi.js";
import { MovementDirection } from "~ts/types/MovementDirection";
import { Axis } from "~ts/types/Enums";
import { DEFAULT_ENCODING } from "crypto";

export class SnakeSegment implements IGameObject
{
    public position: Vector2;
    private _direction: MovementDirection = new MovementDirection(Axis.Y, -1);
    private _sprite: PIXI.Sprite;
    private _previousFrame: Rectangle = TILESET.BUNNY;
    public getPreviousFrame(): Rectangle{
        return this._previousFrame;
    }

    public previousRotation: number = 0;

    private _isHead: boolean;
    private _isTail: boolean;
    public setTail(isTail: boolean){
        this._isTail = isTail;
    }
    public isHead(): boolean { return this._isHead; }

    public getSprite(): PIXI.Sprite
    {
        return this._sprite;
    }

    public setDirection(direction: MovementDirection)
    {
        this._direction.set(direction.getAxis(), direction.getDirectionNumber());
    }

    public getDirection(): MovementDirection
    {
        return this._direction;
    }

    public constructor(position: Vector2,
                       direction: MovementDirection, 
                       isHead: boolean = false)
    {
        this._sprite = new PIXI.Sprite();

        this.position = position;
        this._isHead = isHead;
        this._isTail = false;
        this._direction = direction;

        this.draw();
    }

    public onCollision(snake: Snake)
    {
        // TO DO: Lose the game
    }

    public update()
    {
        this._sprite.position.x = this.position.x;
        this._sprite.position.y = this.position.y;
    }

    public draw()
    {
        
        let texture = PIXI.Texture.from("tileset");
        texture = PIXI.Texture.from("tileset");
        // Fixed by using loader
        // Standard size set to 0 for some reason, need to set it manually
        // texture.baseTexture.setSize(128, 128);

        //let rectangle =  TILESET.HEAD_UP;

        //texture.frame = rectangle;
        //texture.frame = rectangle;

        let newTexture = new PIXI.Texture(texture.baseTexture);
        
        
        this._sprite = new PIXI.Sprite(newTexture);
        this.setFrame(TILESET.Y_STRAIGHT, 0);
        //this.setFrame(rectangle);

        this._sprite.x = this.position.x;
        this._sprite.y = this.position.y;
        APPLICATION.stage.addChild(this._sprite);

        APPLICATION.renderer.render(APPLICATION.stage);
    }

    // public setSprite()
    // {
    //     let frame: Rectangle = TILESET.HEAD_UP;
    //     this.setFrame(frame);
    // }

    public setFrame(rectangle: PIXI.Rectangle, rotation: number)
    {
        this._previousFrame = this._sprite.texture.frame;
        this._sprite.texture.frame = rectangle;

        if(this.previousRotation != 0 || rotation != 0){
            this.rotateFrame(rotation)
            this.previousRotation = rotation;
        }
        else{
            this.previousRotation = 0;
        }

        
    }

    public rotateFrame(rotation: number)
    {
        if(rotation === 0)
        return;

        this._sprite.texture = new PIXI.Texture(this._sprite.texture.baseTexture, this._sprite.texture.frame, 
        this._sprite.texture.orig, this._sprite.texture.trim, rotation);
    }

    public setHeadFrame(movementDirection: MovementDirection)
    {
        let frame: Rectangle = TILESET.HEAD_UP;

        switch(movementDirection.getAxis()){
            case Axis.X:
                frame = (movementDirection.getDirectionNumber() === 1) ? TILESET.HEAD_RIGHT : TILESET.HEAD_LEFT;
                break
            case Axis.Y:
                frame = (movementDirection.getDirectionNumber() === 1) ? TILESET.HEAD_DOWN : TILESET.HEAD_UP;
                break
        }

        this.setFrame(frame, 0);
    }
}