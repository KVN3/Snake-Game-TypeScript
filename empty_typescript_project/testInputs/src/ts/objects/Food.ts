import { GameObject } from "~ts/types/GameObject";
import { Vector2 } from "~ts/types/Vector2";
import { SnakeSegment } from "./SnakeSegment";
import * as TILESET from "~ts/helper/Tileset";
import { Random } from "~ts/helper/Random";
import { ARENA_WIDTH, ARENA_HEIGHT, APPLICATION, TILE_SIZE } from "~ts/app";
import { Snake } from "./Snake";

export class Food extends GameObject
{
    private readonly _MAXSIZE: number = TILE_SIZE - 6;
    private readonly _MINSIZE: number = TILE_SIZE / 1.3;
    private _isShrinking: boolean = true;
    private _resizingModifier: number = .4;

    // Current & Previous sprite
    public constructor()
    {
        super(new Vector2(10*TILE_SIZE, 16*TILE_SIZE));
        let position: Vector2 = new Vector2(Random.next(0, ARENA_WIDTH - TILE_SIZE), 
                                            Random.next(0, ARENA_HEIGHT - TILE_SIZE));
        
        this.draw();
    }

    public update()
    {
        this.resize();
    }

    private resize()
    {
        // Shrink
        if(this._isShrinking)
        {
            this._sprite.width -= this._resizingModifier;
            this._sprite.height -= this._resizingModifier;

            if(this._sprite.height < this._MINSIZE)
            {
                this._isShrinking = false;
            }
        }

        // Grow
        else
        {
            this._sprite.width += this._resizingModifier;
            this._sprite.height += this._resizingModifier;

            if(this._sprite.height > this._MAXSIZE)
            {
                this._isShrinking = true;
            }
        }
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
        this._sprite.width = this._MAXSIZE;
        this._sprite.height = this._MAXSIZE;

        // So that it resizes from the center and not from the top-left anchor
        this._sprite.anchor.set(.5, .5);
        this._sprite.x += 15;
        this._sprite.y += 17;

        // Add and render
        APPLICATION.stage.addChild(this._sprite);
    }

    private respawnAt(position: Vector2)
    {
        this._sprite.position.x = position.x + 15;
        this._sprite.position.y = position.y + 17;
    }

    public onCollision(snake: Snake)
    {
        snake.levelUp();
        this.respawnAt(Random.nextTile());
    }
}