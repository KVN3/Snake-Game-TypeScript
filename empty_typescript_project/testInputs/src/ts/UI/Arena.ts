import { GroundTile } from "../objects/GroundTile";
import { Vector2 } from "~ts/types/Vector2";
import { TILE_SIZE, ARENA_WIDTH, ARENA_HEIGHT, APPLICATION } from "~ts/app";
import * as TILESET from "~ts/helper/Tileset";

export class Arena
{ 
    // availableTiles for spawning things
    public availableTiles: boolean[][] = [[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]];
    public initializeTileAvailability()
    {
        for (let col = 0; col < (ARENA_WIDTH / TILE_SIZE); col++) 
        {
            for (let row = 0; row < (ARENA_HEIGHT / TILE_SIZE); row++) 
            {
                this.availableTiles[row][col] = false;
            }
        }
    }

    // Tileset
    private _filename: string = "tileset";
    private _frame: PIXI.Rectangle = TILESET.GRASS;

    // Score
    private _scoreText: PIXI.Text = new PIXI.Text('0',{fontFamily : 'Arial', fontSize: 24, fill : 0xffffff, align : 'center'});
    private _scoreTextPosX: number = 73;

    public draw()
    {
        for (let col = 0; col < (ARENA_WIDTH / TILE_SIZE); col++) 
        {
            for (let row = 0; row < (ARENA_HEIGHT / TILE_SIZE); row++) 
            {
                let position = new Vector2(col * TILE_SIZE, row * TILE_SIZE);

                // Grass
                if(row != 1)
                    new GroundTile(position, this._filename, this._frame).draw();

                // Rock wall
                this.drawRockWalls(col, row, position);

                this.drawScoreSign(col, row, position);
            }
        }
    }

    private drawRockWalls(col: number, row: number, position: Vector2)
    {
        // Left
        if(col == 0)
            new GroundTile(position, "rock_tileset", new PIXI.Rectangle(96, 96, 32, 32)).draw();

        // Right
        if(col == (ARENA_WIDTH / TILE_SIZE - 1))
            new GroundTile(position, "rock_tileset", new PIXI.Rectangle(0, 96, 32, 32)).draw();

        // Bottom row
        if(row == (ARENA_WIDTH / TILE_SIZE - 1))
            new GroundTile(position, "rock_tileset", new PIXI.Rectangle(96, 0, 32, 32)).draw();

        // Top row
        if(row == 0)
            new GroundTile(position, "rock_tileset", new PIXI.Rectangle(64, 96, 32, 32)).draw();       
        if(row == 1)
        {
            if(col != 1 && col != 2)
            new GroundTile(position, "rock_tileset", new PIXI.Rectangle(64, 96, 32, 32)).draw();
        }

        if(row == 2)
            new GroundTile(position, "rock_tileset", new PIXI.Rectangle(64, 128, 32, 32)).draw();      
    }

    private drawScoreSign(col: number, row: number, position: Vector2)
    {
        if(row == 1)
        {
            if(col == 1)
            {
                let bunny = new GroundTile(position, "tileset", TILESET.BUNNY);      
                bunny.draw();
            }
            else if (col == 2)
            {
                this._scoreText.position.x = this._scoreTextPosX;
                this._scoreText.position.y = position.y + 4;
                APPLICATION.stage.addChild(this._scoreText);
            }
        }
    }

    public setScoreText(score: number)
    {
        // Adjust for 2 digits
        if(score > 9)
        {
            this._scoreTextPosX = 67
            this._scoreText.position.x = this._scoreTextPosX;
        }

        this._scoreText.text = score.toString();
    }
    
    // SINGLETON
    private static _instance: Arena;

    private constructor() 
    { 
        this.initializeTileAvailability();
    }
    
    public static getInstance(): Arena 
    {
        if (!this._instance) 
        {
            this._instance = new Arena();
        }
    
        return this._instance;
    }
}