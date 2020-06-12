import { IPlayerObject } from '../../types/IPlayerObject';
import { Vector2 } from '../../types/Vector2';
import { Axis, AudioType } from '../../types/Enums';
import { MovementDirection } from '../../types/MovementDirection';
import { Direction } from 'readline';
import { SnakeSegment } from './SnakeSegment';
import { TILE_SIZE } from '~ts/app';
import { Game } from '~ts/Game';
import { AudioPlayer } from '~ts/handlers/AudioPlayer';

export class Snake implements IPlayerObject
{
    public position: Vector2;
    private _movementModifier: number = 32;

    // Direction
    private _direction: MovementDirection = new MovementDirection(Axis.X, -1);
    private _previousDirection: MovementDirection = new MovementDirection(Axis.X, -1);
    private _isChangeDirectionCooldown: boolean = false;
    public setDirection(axis: Axis, direction: Direction) 
    { 
        // Can't switch direction on the same axis (i.e. from up to down or up to up)
        if  (this._direction.getAxis() === axis)
            return;

        // Changed direction, but hasn't moved a tile yet (to avoid flipping around on the same axis by changing directions twice in the same turn)
        if (this._isChangeDirectionCooldown)
            return;
        
        this._isChangeDirectionCooldown = true;
        
        this._previousDirection.set(this._direction.getAxis(), this._direction.getDirectionNumber());
        this._direction.set(axis, direction);
    }

    // Snake part related
    private _segments: SnakeSegment[] = [];
    public getSegments(): SnakeSegment[] { return this._segments; }

    public constructor(position: Vector2)
    {
        this.position = position;
        this.initializeSnake();
    }

    private initializeSnake()
    {
        this._segments[0] = new SnakeSegment(new Vector2(this.position.x, this.position.y), this._direction, true);
        this._segments[1] = new SnakeSegment(new Vector2(17 * TILE_SIZE + 0 * TILE_SIZE, 16 * TILE_SIZE), 
            new MovementDirection(this._direction.getAxis(), this._direction.getDirectionNumber()));
         this._segments[2] = new SnakeSegment(new Vector2(17 * TILE_SIZE + 1 * TILE_SIZE, 16 * TILE_SIZE), 
             new MovementDirection(this._direction.getAxis(), this._direction.getDirectionNumber()));
         this._segments[2].setTail(true);
    }

    public update(): void
    {
        this.applyDirectionToPosition();
        this.draw();
        this._isChangeDirectionCooldown = false;
    }

    public draw()
    {
        let nextSegmentPosition: Vector2 = new Vector2(0, 0);

        for (let i = 0; i < this._segments.length; i++) 
        {
            let segment: SnakeSegment = this._segments[i];
            let tempPosition: Vector2 = new Vector2(segment.position.x, segment.position.y);

            if (segment.isHead()) 
            {
                // Head segment
                segment.position.set(this.position.x, this.position.y);
                segment.setDirection(this._direction);
                segment.setHeadFrame();
            }
            else
            {
                let nextSegment: SnakeSegment = this._segments[i - 1];

                // Set the new direction
                segment.setDirection(nextSegment.getPreviousDirection());
                
                // Set new position
                segment.position.set(nextSegmentPosition.x, nextSegmentPosition.y);          

                // Update the sprite
                segment.updateSprite(nextSegment);
            }

            // Used by by the next iteration
            nextSegmentPosition = tempPosition;

            // Updates the segment (position)
            segment.update();
        }
    }

    public levelUp()
    {   
        AudioPlayer.getInstance().playSound(AudioType.EAT);
        this.increaseLength();
        Game.getInstance().increaseScore();
    }

    private increaseLength()
    {
        let lastSegment = this._segments[this._segments.length - 1];

        // Making copies, not references
        let direction = new MovementDirection(lastSegment.getDirection().getAxis(), lastSegment.getDirection().getDirectionNumber());
        let position = new Vector2(lastSegment.position.x, lastSegment.position.y);

        // Setting the initial position based on the direction
        if(direction.isLeft())  
            position.set(position.x + TILE_SIZE, position.y);
        else if(direction.isRight())
            position.set(position.x - TILE_SIZE, position.y);
        else if(direction.isUp())
            position.set(position.x, position.y - TILE_SIZE);
        else if(direction.isDown())
            position.set(position.x, position.y + TILE_SIZE);

        // Create new segment
        let newSegment = new SnakeSegment(position, direction, false);

        // Update tail status
        newSegment.setTail(true);
        lastSegment.setTail(false);

        // Add to the chain
        this._segments[this._segments.length] = newSegment;
    }
   
    private applyDirectionToPosition()
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

    public getHead(): SnakeSegment
    {   
        return this._segments[0];
    }

    public die()
    {
        AudioPlayer.getInstance().playSound(AudioType.DIE);
        Game.getInstance().endGame();
    }
}

// private isLastSegment(i: number): boolean
// {
//     return (i === this._segments.length - 1) ? true : false;
// }
        