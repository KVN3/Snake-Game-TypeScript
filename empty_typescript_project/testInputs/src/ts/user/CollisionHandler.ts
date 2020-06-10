import { Snake } from "~ts/objects/Snake";
import { Food } from "~ts/objects/Food";
import { Rectangle } from "pixi.js";

export class CollisionHandler
{
    public handleCollisions(snake: Snake, food: Food)
    {
        // Food
        if (this.collisionDetected(snake.getHead().getSprite().getBounds(), 
                                   food.getSprite().getBounds()))
        {
            food.onCollision(snake);
        }

        // Body
        
    }

    private collisionDetected(ab: Rectangle, bb: Rectangle)
    {
        return ab.x + ab.width > bb.x && ab.x < bb.x + bb.width && ab.y + ab.height > bb.y && ab.y < bb.y + bb.height;
    }
}