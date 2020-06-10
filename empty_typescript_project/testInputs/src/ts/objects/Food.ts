import { GameObject } from "~ts/types/GameObject";
import { Vector2 } from "~ts/types/Vector2";
import { SnakeSegment } from "./SnakeSegment";
import * as TILESET from "~ts/helper/Tileset";
import { Random } from "~ts/helper/Random";
import { ARENA_WIDTH, ARENA_HEIGHT, APPLICATION, TILE_SIZE } from "~ts/app";
import { Snake } from "./Snake";

export class Food extends GameObject
{
    // Current & Previous sprite
    public constructor()
    {
        let position: Vector2 = new Vector2(Random.next(0, ARENA_WIDTH - TILE_SIZE), 
                                            Random.next(0, ARENA_HEIGHT - TILE_SIZE));
        super(new Vector2(10*TILE_SIZE, 16*TILE_SIZE));
        this.draw();
    }

    public update()
    {
        
    }

    public draw()
    {
        let fullTileset = new PIXI.Texture(PIXI.Texture.from("tileset").baseTexture);

        // Create sprite
        this._sprite = new PIXI.Sprite(fullTileset);
        this.setFrame(TILESET.BUNNY);

        // Set pos
        this._sprite.x = this.position.x;
        this._sprite.y = this.position.y;

        // Add and render
        APPLICATION.stage.addChild(this._sprite);
    }

    private respawnAt(position: Vector2)
    {
        this._sprite.position.x = position.x;
        this._sprite.position.y = position.y;
    }

    public onCollision(snake: Snake)
    {
        snake.levelUp();
        this.respawnAt(Random.nextTile());
    }
}