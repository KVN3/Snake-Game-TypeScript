import * as PIXI from 'pixi.js';
import { IPlayerObject } from '../types/IPlayerObject';
import { Vector2 } from '../types/Vector2';
import { Axis } from '../types/Enums';
import { MovementDirection } from '../types/MovementDirection';
import { Direction } from 'readline';
import { SnakeSegment } from './SnakeSegment';
import { Y_STRAIGHT } from '~ts/helper/Tileset';
import * as TILESET from "~ts/helper/Tileset";

export class Snake implements IPlayerObject
{
    public position: Vector2;
    private _movementModifier: number = 16;
    private _sprite: PIXI.Sprite;

    // Direction
    private _direction: MovementDirection = new MovementDirection(Axis.Y, -1);
    public setDirection(axis: Axis, direction: Direction) 
    { 
        // Can't switch direction on the same axis (i.e. from up to down or up to up)
        if  (this._direction.getAxis() === axis)
            return;

        this._direction.set(axis, direction);
    }

    private _segments: SnakeSegment[] = [];

    public constructor(position: Vector2)
    {
        this.position = position;
        this._sprite = new PIXI.Sprite();
        this.draw();

        this._segments[0] = new SnakeSegment(new Vector2(position.x, position.y), this._direction, true);
        this._segments[1] = new SnakeSegment(new Vector2(position.x + 16, position.y), 
            new MovementDirection(this._direction.getAxis(), this._direction.getDirectionNumber()));
        // this._segments[2] = new SnakeSegment(new Vector2(position.x + 32, position.y), 
        //     new MovementDirection(this._direction.getAxis(), this._direction.getDirectionNumber()));
        // this._segments[3] = new SnakeSegment(new Vector2(position.x + 48, position.y), 
        //     new MovementDirection(this._direction.getAxis(), this._direction.getDirectionNumber()));
        // this._segments[4] = new SnakeSegment(new Vector2(position.x + 64, position.y), 
        //     new MovementDirection(this._direction.getAxis(), this._direction.getDirectionNumber()));
        // this._segments[4].setTail(true);
    }



    public update()
    {
       this.applyDirection();
            console.log(this._direction);

       console.log("NEW UPDATE #########");
        // for (let i = this._segments.length - 1; i >= 0; i--) 
        // {
        //     let segment: SnakeSegment = this._segments[i];

        //     if (segment.isHead()) 
        //     {
        //         segment.setDirection(this._direction);

        //         segment.position.x = this.position.x;
        //         segment.position.y = this.position.y;
        //         segment.setHeadFrame(this._direction);
        //     }
        //     else
        //     {
        //         this.setCorrectFrame(this._segments[i - 1], segment);  
        //         segment.setDirection(this._segments[i - 1].getDirection());         

        //         segment.position.x = this._segments[i - 1].position.x;
        //         segment.position.y = this._segments[i - 1].position.y;
                
        //     }

        //     segment.update();
        // }

        let nextSegmentPosition: Vector2 = new Vector2(0, 0);

        for (let i = 0; i < this._segments.length; i++) 
        {
            let segment: SnakeSegment = this._segments[i];

            if (segment.isHead()) 
            {
                

                // Pos
                let tempPosition: Vector2 = new Vector2(segment.position.x, segment.position.y);
                segment.position.set(this.position.x, this.position.y);
                nextSegmentPosition = tempPosition;

                segment.setHeadFrame(this._direction);
                //segment.setDirection(this._direction);
            }
            else
            {                
                 

                // Pos
                let tempPosition: Vector2 = new Vector2(segment.position.x, segment.position.y);
                segment.position.set(nextSegmentPosition.x, nextSegmentPosition.y);
                nextSegmentPosition = tempPosition;
                
                //this.setCorrectFrame(this._segments[i - 1], segment);  
                segment.setDirection(this._segments[i - 1].getDirection());        
            }

            segment.update();
        }
        

    }

    // Copie sframes for now
    private setCorrectFrame(nextSegment: SnakeSegment, currentSegment: SnakeSegment)
    {
        let frame: PIXI.Rectangle = currentSegment.getSprite().texture.frame;
        let rotation: number = 0;

        if(nextSegment.isHead())
        {
            console.log("-------");
            // console.log(nextSegment);
            // console.log(currentSegment);

            var xOrYC = (currentSegment.getDirection().getAxis() === 1) ? "Y" : "X";
            console.log("CURR (" + xOrYC + ", " + currentSegment.getDirection().getDirectionNumber().toString() + ")");

            var xOrY = (nextSegment.getDirection().getAxis() === 1) ? "Y" : "X";
            console.log("NEXT (" + xOrY + ", " + nextSegment.getDirection().getDirectionNumber().toString() + ")");

            // Turn made
            if  (nextSegment.getDirection().getAxis() != currentSegment.getDirection().getAxis())
            {
                console.log("Axis changed");



                switch(nextSegment.getDirection().getAxis())
                {
                    case Axis.X:
                        console.log("X");

                        if(nextSegment.getDirection().getDirectionNumber() === 1)
                        {
                            if(currentSegment.getDirection().getDirectionNumber() === 1)
                            {
                                frame = TILESET.TURN_BOTTOM_LEFT;
                                //shouldRotate = true;
                            }
                            else
                            {
                                frame = TILESET.TURN_BOTTOM_RIGHT;
                                rotation = 12;
                            }
                        }
                        else
                        {
                            if(currentSegment.getDirection().getDirectionNumber() === 1)
                            {
                                frame = TILESET.TURN_BOTTOM_RIGHT;
                            }
                            else
                            {
                                frame = TILESET.TURN_BOTTOM_LEFT;
                            }
                        }


                        //frame = (currentSegment.getDirection().getDirectionNumber() === 1) ? TILESET.TURN_BOTTOM_RIGHT : TILESET.TURN_BOTTOM_LEFT;
                        break
                    case Axis.Y:
                        console.log("Y");
                        if(nextSegment.getDirection().getDirectionNumber() === 1)
                        {
                            if(currentSegment.getDirection().getDirectionNumber() === 1)
                            {
                                frame = TILESET.TURN_TOP_RIGHT;
                            }
                            else
                            {
                                frame = TILESET.TURN_TOP_LEFT;
                                rotation = 24;
                            }
                        }
                        else
                        {
                            if(currentSegment.getDirection().getDirectionNumber() === 1)
                            {
                                frame = TILESET.TURN_TOP_RIGHT;
                            }
                            else
                            {
                                frame = TILESET.TURN_TOP_RIGHT;
                            }
                        }

                        //frame = (currentSegment.getDirection().getDirectionNumber() === 1) ? TILESET.TURN_TOP_LEFT : TILESET.TURN_TOP_RIGHT;
                        
                        break
                }
            }

            // Back straight
            else
            {
                frame = (nextSegment.getDirection().getAxis() === Axis.X) ? TILESET.X_STRAIGHT : TILESET.Y_STRAIGHT;
            }
        }
        else
        {
            frame = nextSegment.getPreviousFrame();
            rotation = nextSegment.previousRotation;

            if(frame === TILESET.Y_STRAIGHT || frame === TILESET.X_STRAIGHT){
                rotation = 0;
            }
        }


        console.log("Should rotate= " + rotation);
        currentSegment.setFrame(frame, rotation);
        // if(shouldRotate)
        //     currentSegment.rotateFrame(180);
    }

    // Set the snake's movement direction
    private applyDirection()
    {
        if(this._direction.getAxis() == Axis.X)
        {
            this.position.x += this._direction.getDirectionNumber() * this._movementModifier;
        }

        if(this._direction.getAxis() == Axis.Y)
        {
            this.position.y += this._direction.getDirectionNumber() * this._movementModifier;
        }
    }

    public draw()
    {
        this._segments.forEach(segment => {
            segment.draw();
        });
    }
}

        // let texture = PIXI.Texture.from(TILESET);

        // //Create a rectangle object that defines the position and
        // //size of the sub-image you want to extract from the texture
        // //(`Rectangle` is an alias for `PIXI.Rectangle`)
        // let rectangle = new PIXI.Rectangle(16, 16, -16, -16);

        // // //Tell the texture to use that rectangular section
        // texture.frame = rectangle;

        // //Create the sprite from the texture
        // this._sprite = new PIXI.Sprite(texture);

        //Position the rocket sprite on the canvas
        
        
        