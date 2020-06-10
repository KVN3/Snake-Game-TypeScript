import * as PIXI from 'pixi.js';
import { Snake } from './objects/Snake';
import { Vector2 } from './types/Vector2';
import { InputHandler } from './user/InputHandler';
import { APPLICATION } from './app';
import tileSetPath from '../resources/images/Snake.png';
import { Food } from './objects/Food';
import { CollisionHandler } from './user/CollisionHandler';
import { Arena } from './objects/Arena';
import { Timer } from './types/Timer';

export class Game
{
    private _snake: Snake;
    private _inputHandler: InputHandler;
    private _food: Food;
    private _collisionHandler: CollisionHandler;
    private _arena: Arena;
    private _timer: Timer;

    private _isRunning: boolean = false;

    public constructor()
    {
      console.log("Creating game...");

      this._timer = new Timer(150, 0, this);
      // this._timer.pause();
      this._inputHandler = new InputHandler();
      this._collisionHandler = new CollisionHandler(); 
      this._arena = new Arena();

      document.body.appendChild(APPLICATION.view);
      this._arena.draw();

      // GameObjects
      this._snake = new Snake(new Vector2(256,256));
      //this._snake.update();
      this._food = new Food();

      this.gameLoop();
    }

    public isRunning(){
      return this._timer.isRunning();
    }

    public isPaused(){
      return this._timer.isPaused();
    }

    public start()
    {
      console.log("starting game");
      this._timer.start();
    }

    public pause()
    {
      console.log("pausing game");
      this._timer.pause();
    }

    public resume()
    {
      console.log("resuming game");
      this._timer.resume();
    }

    public onClockTick()
    {
    }

    public gameLoop()
    {
      APPLICATION.render();

      // Handle input
      document.addEventListener('keyup', this._inputHandler.onKeyUp);
      this._inputHandler.processInput(this._snake, this);

      this._collisionHandler.handleCollisions(this._snake, this._food);
      this._snake.update();

      // Loop
      requestAnimationFrame(() => this.gameLoop());
    }
}

// let img : HTMLImageElement = document.getElementById('tileset') as HTMLImageElement;
// 
// console.log("---stage children---");
// console.log(this._app.stage.children);