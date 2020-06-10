import * as PIXI from 'pixi.js';
import { Snake } from './objects/Snake';
import { Vector2 } from './types/Vector2';
import { InputHandler } from './user/InputHandler';
import { APPLICATION } from './app';
import tileSetPath from '../resources/images/Snake.png';

export class Game
{
    private _snake: Snake;
    private _inputHandler: InputHandler;

    public constructor()
    {
      console.log("Creating game...");

      this.initializeView();

      this.loadSprites();

      this._inputHandler = new InputHandler();

      this._snake = new Snake(new Vector2(256,256));

      this.gameLoop();
    }

    private initializeView(){
      document.body.appendChild(APPLICATION.view);
    }

    public gameLoop()
    {
      APPLICATION.renderer.clearBeforeRender = true;
      APPLICATION.render();

      // Handle input
      document.addEventListener('keyup', this._inputHandler.onKeyUp);
      this._inputHandler.processInput(this._snake);

      // Update elements
      //this._snake.update();

      requestAnimationFrame(() => this.gameLoop());
    }

    public loadSprites()
    {
      
    }
}

// let img : HTMLImageElement = document.getElementById('tileset') as HTMLImageElement;
// 
// console.log("---stage children---");
// console.log(this._app.stage.children);