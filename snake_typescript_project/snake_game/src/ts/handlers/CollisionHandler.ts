import { Snake } from "~ts/objects/snake/Snake";
import { Food } from "~ts/objects/Food";
import { Rectangle } from "pixi.js";
import { TILE_SIZE, ARENA_WIDTH, ARENA_HEIGHT } from "~ts/app";
import { SnakeSegment } from "~ts/objects/snake/SnakeSegment";

export class CollisionHandler {
    public handleCollisions(snake: Snake, foods: Food[]) {
        this.handleFoodCollisions(snake, foods);
        this.handleBodyCollisions(snake);
        this.handleWallCollisions(snake);
    }

    private handleBodyCollisions(snake: Snake) 
    {
        const segments: SnakeSegment[] = snake.getSegments();
        const head: SnakeSegment = snake.getHead();

        for (let i = 0; i < segments.length; i++) {
            // Skip head as we'll only check for body segments
            if (segments[i].isHead())
                continue;

            // Die if collision
            if (this.segmentCollisionDetected(head.getSprite().getBounds(), segments[i].getSprite().getBounds())) 
            {
                console.log("Collision found between snake and segment:");
                console.log(head.getSprite().getBounds());
                console.log(segments[i].getSprite().getBounds());
                snake.die();
            }
        }
    }

    private handleFoodCollisions(snake: Snake, foods: Food[]) {
        foods.forEach((food: Food) => {
            if (this.collisionDetected(snake.getHead().getSprite().getBounds(),
                food.getSprite().getBounds())) {
                food.onCollision(snake);
            }
        });
    }

    private handleWallCollisions(snake: Snake) {
        if (this.hitArenaBounds(snake)) {
            snake.die();
        }
    }

    // Returns true if ab and bb are colliding
    private collisionDetected(ab: Rectangle, bb: Rectangle) {
        return ab.x + ab.width > bb.x && ab.x < bb.x + bb.width && ab.y + ab.height > bb.y && ab.y < bb.y + bb.height;
    }

    // Same thing, but with some adjustments to make up for pixel overlap to avoid gaps in the snake
    private segmentCollisionDetected(ab: Rectangle, bb: Rectangle) 
    {
        let modifier: number = 20;

        return ab.x + ab.width - modifier > bb.x && ab.x < bb.x + bb.width - modifier
        && ab.y + ab.height - modifier > bb.y && ab.y < bb.y + bb.height - modifier;
    }

    // Returns true if snake moved onto one of the border tiles
    private hitArenaBounds(snake: Snake): boolean 
    {
        return (snake.position.x < TILE_SIZE || snake.position.x > ARENA_WIDTH - 2 * TILE_SIZE || snake.position.y < TILE_SIZE * 3 || snake.position.y > ARENA_HEIGHT - 2 * TILE_SIZE);
    }
}