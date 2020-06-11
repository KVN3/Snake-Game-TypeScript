import { Snake } from "~ts/objects/Snake";
import { Food } from "~ts/objects/Food";
import { Rectangle } from "pixi.js";
import { TILE_SIZE, ARENA_WIDTH, ARENA_HEIGHT } from "~ts/app";

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
        
        // Wall
        if(this.hitArenaBounds(snake)){
            snake.die();
        }
    }

    private collisionDetected(ab: Rectangle, bb: Rectangle)
    {
        return ab.x + ab.width > bb.x && ab.x < bb.x + bb.width && ab.y + ab.height > bb.y && ab.y < bb.y + bb.height;
    }

    private hitArenaBounds(snake: Snake): boolean{
        return (snake.position.x < TILE_SIZE || snake.position.x > ARENA_WIDTH - 2 * TILE_SIZE || snake.position.y < TILE_SIZE * 3 || snake.position.y > ARENA_HEIGHT - 2 * TILE_SIZE);
    }
}