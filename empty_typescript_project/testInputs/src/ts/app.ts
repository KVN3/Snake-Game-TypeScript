//import PatternTester from "./design_pattern_examples/0_test/PatternTester"
import { Game } from './Game';
import tileSetPath from '../resources/images/Snake.png';
import rockTileSetPath from '../resources/images/RockTile.png';

// Perform tests
//new PatternTester().testAll();

export const ARENA_WIDTH = 768;
export const ARENA_HEIGHT = 768;
export const TILE_SIZE = 32;

export const APPLICATION: PIXI.Application = new PIXI.Application({ 
  width: ARENA_WIDTH,         // default: 800
  height: ARENA_HEIGHT,        // default: 600
  antialias: true,    // default: false
  transparent: false, // default: false
  resolution: 1,       // default: 1
  backgroundColor: 0x1099bb
});

APPLICATION.loader
  .add("tileset", tileSetPath)
  .add("rock_tileset", rockTileSetPath)
  .load(setup);

      function setup() {
          console.log("setup done");
        const game = Game.getInstance();
      }



