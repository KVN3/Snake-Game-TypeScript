//import PatternTester from "./design_pattern_examples/0_test/PatternTester"
import { Game } from './Game';
import tileSetPath from '../resources/images/Snake.png';

// Perform tests
//new PatternTester().testAll();

export const APPLICATION: PIXI.Application = new PIXI.Application({ 
  width: 512,         // default: 800
  height: 512,        // default: 600
  antialias: true,    // default: false
  transparent: false, // default: false
  resolution: 1.5,       // default: 1
  backgroundColor: 0x1099bb
});

APPLICATION.loader.add("tileset", tileSetPath).load(setup);

      function setup() {
          console.log("setup done");
        const game = new Game();
      }



