import { GameObject } from "~ts/types/GameObject";
import { Vector2 } from "~ts/types/Vector2";
import * as TILESET from "~ts/helper/Tileset";
import { Random } from "~ts/helper/Random";
import { APPLICATION, TILE_SIZE } from "~ts/app";
import { Snake } from "./snake/Snake";

export class Food extends GameObject {
    private readonly _MAXSIZE: number = TILE_SIZE - 6;
    private readonly _MINSIZE: number = TILE_SIZE / 1.3;
    private _isShrinking: boolean = true;
    private _resizingModifier: number = .2;

    // Current & Previous sprite
    public constructor() {
        super(Random.nextTile());
        this.draw();
    }

    public update() 
    {
        this.resize();
        APPLICATION.stage.addChild(this._sprite);
    }

    private resize() {
        // Shrink
        if (this._isShrinking) {
            this._sprite.width -= this._resizingModifier * Random.next(1, 3);
            this._sprite.height -= this._resizingModifier * Random.next(1, 3);

            if (this._sprite.height < this._MINSIZE) {
                this._isShrinking = false;
            }
        }

        // Grow
        else {
            this._sprite.width += this._resizingModifier * Random.next(1, 3);
            this._sprite.height += this._resizingModifier * Random.next(1, 3);

            if (this._sprite.height > this._MAXSIZE) {
                this._isShrinking = true;
            }
        }
    }

    public draw() {
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
    }

    private respawnAt(position: Vector2) {
        this._sprite.position.x = position.x + 15;
        this._sprite.position.y = position.y + 17;
    }

    public onCollision(snake: Snake) {
        snake.levelUp();
        this.respawnAt(Random.nextTile());
    }
}