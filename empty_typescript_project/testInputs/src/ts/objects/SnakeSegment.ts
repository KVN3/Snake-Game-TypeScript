import { GameObject } from "~ts/types/GameObject";
import { Snake } from "./Snake";
import { Vector2 } from "~ts/types/Vector2";
import { APPLICATION } from "~ts/app";
import * as TILESET from "~ts/helper/Tileset";
import { Rectangle } from "pixi.js";
import { MovementDirection } from "~ts/types/MovementDirection";
import { Axis } from "~ts/types/Enums";

export class SnakeSegment extends GameObject
{
    // Current and previous direction (x|y, -1|+1)
    private _direction: MovementDirection = new MovementDirection(Axis.X, -1);
    private _previousDirection: MovementDirection = new MovementDirection(Axis.X, -1)
    public getDirection(): MovementDirection { return this._direction; }
    public setDirection(direction: MovementDirection) 
    { 
        // Previous
        this._previousDirection.set(this._direction.getAxis(), this._direction.getDirectionNumber());

        // Current
        this._direction.set(direction.getAxis(), direction.getDirectionNumber()); 
    }
    public getPreviousDirection(): MovementDirection { return this._previousDirection; }
    //public setPreviousDirection(direction: MovementDirection) { this._previousDirection.set(direction.getAxis(), direction.getDirectionNumber()); }
    
    // Previous sprite
    public previousSprite: PIXI.Sprite;

    // Type
    private _isHead: boolean;
    private _isTail: boolean;
    public setTail(isTail: boolean) { this._isTail = isTail; }
    public isHead(): boolean { return this._isHead; }

    public constructor(position: Vector2,
                       direction: MovementDirection, 
                       isHead: boolean = false)
    {
        super(position);

        this._sprite = new PIXI.Sprite();
        this.previousSprite = new PIXI.Sprite();

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

        // Allows for a refresh and adds the sprite if it isn't added yet
        APPLICATION.stage.addChild(this._sprite);
    }

    public draw()
    { 
        let fullTileset = new PIXI.Texture(PIXI.Texture.from("tileset").baseTexture);

        // Create sprite
        this._sprite = new PIXI.Sprite(fullTileset);
        this.setFrame(TILESET.X_STRAIGHT);

        // Set pos
        this._sprite.x = this.position.x;
        this._sprite.y = this.position.y;

        this._sprite.width = 33;
        this._sprite.height = 33;

        // Add and render
        //APPLICATION.stage.addChild(this._sprite);
    }

    // Sprite setting
    public setHeadFrame()
    {
        let frame: Rectangle = TILESET.HEAD_UP;

        switch(this._direction.getAxis()){
            case Axis.X:
                frame = (this._direction.getDirectionNumber() == 1) ? TILESET.HEAD_RIGHT : TILESET.HEAD_LEFT;
                break
            case Axis.Y:
                frame = (this._direction.getDirectionNumber() == 1) ? TILESET.HEAD_DOWN : TILESET.HEAD_UP;
                break
        }

        this.setFrame(frame);
    }

    private setTailFrame(movementDirection: MovementDirection)
    {
       // console.log("Setting tail frame...");
        let frame: Rectangle = TILESET.HEAD_UP;

        switch(movementDirection.getAxis()){
            case Axis.X:
               // console.log("Next segment on X axis...");
                frame = (movementDirection.getDirectionNumber() == 1) ? TILESET.TAIL_RIGHT : TILESET.TAIL_LEFT;
                break
            case Axis.Y:
               // console.log("Next segment on Y axis...");
                frame = (movementDirection.getDirectionNumber() == 1) ? TILESET.TAIL_DOWN : TILESET.TAIL_UP;
                break
        }

        this.setFrame(frame);
    }

    // Updates the sprite based on a set of rules
    public updateSprite(nextSegment: SnakeSegment)
    {
        if(nextSegment.isHead())
            this.setSpriteBasedOnHeadMovement(nextSegment);
        else if(this._isTail)
            this.setTailFrame(nextSegment.getPreviousDirection());
        else
            this.setSprite(nextSegment.previousSprite);

        this._sprite.width = 33;
        this._sprite.height = 33;
    
        this.updateStage();
    }

    // Sets this segment's sprite based on nextSegment's movement
    private setSpriteBasedOnHeadMovement(nextSegment: SnakeSegment)
    {
        // STRAIGHT
        if(this._previousDirection.getAxis() === nextSegment.getDirection().getAxis())
        {
            if(this._previousDirection.getAxis() === Axis.X)
                this.newSprite(TILESET.X_STRAIGHT);
            else
                this.newSprite(TILESET.Y_STRAIGHT);           
        }

        // LEFT
        if(this._previousDirection.isLeft())
        {
            if(nextSegment.getDirection().isUp())
                this.newSprite(TILESET.TURN_TOP_RIGHT);
            else if(nextSegment.getDirection().isDown())
                this.newSprite(TILESET.TURN_BOTTOM_LEFT);
        }

        // RIGHT
        if(this._previousDirection.isRight())
        {
            if(nextSegment.getDirection().isUp())
                this.newSprite(TILESET.TURN_TOP_LEFT);
            else if(nextSegment.getDirection().isDown())
                this.newSprite(TILESET.TURN_BOTTOM_RIGHT);
        }

        // UP
        else if(this._previousDirection.isUp())
        {
            if(nextSegment.getDirection().isLeft())
                this.newSprite(TILESET.TURN_BOTTOM_RIGHT);
            else if(nextSegment.getDirection().isRight())
                this.newSprite(TILESET.TURN_BOTTOM_LEFT);
        }

        // DOWN
        else if(this._previousDirection.isDown())
        {
            if(nextSegment.getDirection().isLeft())
               this.newSprite(TILESET.TURN_TOP_LEFT); 
            else if(nextSegment.getDirection().isRight())
                this.newSprite(TILESET.TURN_TOP_RIGHT);   
       }
    }

    // Creates a new sprite for given frame
    private newSprite(frame: PIXI.Rectangle)
    {
        // Set previous for next in chain to copy
        this.previousSprite = this._sprite;

        // New sprite
        this._sprite = new PIXI.Sprite(new PIXI.Texture(PIXI.Texture.from("tileset").baseTexture));
        this.setFrame(frame);
    }

    // Updates the sprite
    private setSprite(sprite: PIXI.Sprite){
        this.previousSprite = this._sprite;
        this._sprite = sprite;
    }

    private updateStage()
    {
        APPLICATION.stage.addChild(this._sprite);
        APPLICATION.stage.removeChild(this.previousSprite);
    }
}