import { GroundTile } from "./GroundTile";
import { Vector2 } from "~ts/types/Vector2";
import { TILE_SIZE, ARENA_WIDTH, ARENA_HEIGHT } from "~ts/app";

export class Arena
{
    private _tiles: GroundTile[][] = [[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]];

    public draw()
    {
        for (let row = 0; row < (ARENA_WIDTH / TILE_SIZE); row++) 
        {
            for (let col = 0; col < (ARENA_HEIGHT / TILE_SIZE); col++) 
            {
                let position = new Vector2(row * TILE_SIZE, col * TILE_SIZE);
                this._tiles[row][col] = new GroundTile(position);; 
                this._tiles[row][col].draw();
            }
        }
    }

}