import { TILE_SIZE, ARENA_WIDTH, ARENA_HEIGHT } from "~ts/app";
import { Vector2 } from "~ts/types/Vector2";

export class Random{
    static next(min: number, max: number){
        return Math.floor(Math.random()*(max-min+1)+min);
    }

    // Get the top-left pos of a random tile
    static nextTile(attempt: number) : Vector2
    {
        let min = 1;
        let max = (ARENA_WIDTH - 2 * TILE_SIZE) / TILE_SIZE;
        let x = Math.floor(Math.random() * (max - min + 1) + min) * TILE_SIZE;

        min = 3;
        max = (ARENA_HEIGHT - 2 * TILE_SIZE) / TILE_SIZE;
        let y = Math.floor(Math.random() * (max - min + 1) + min) * TILE_SIZE;

        let tile = new Vector2(x, y);
        // TO DO: Recursive method checking if tile is available, array of boolean tiles /32

        return tile;
    }
}