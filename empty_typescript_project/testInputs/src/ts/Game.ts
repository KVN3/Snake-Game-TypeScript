import * as PIXI from 'pixi.js';
import { Snake } from './objects/Snake';
import { Vector2 } from './types/Vector2';
import { InputHandler } from './user/InputHandler';
import { APPLICATION, ARENA_WIDTH, ARENA_HEIGHT } from './app';
import tileSetPath from '../resources/images/Snake.png';
import { Food } from './objects/Food';
import { CollisionHandler } from './user/CollisionHandler';
import { Arena } from './objects/Arena';
import { Timer, ClockTick } from './types/Timer';

export class Game
{
    private _score: number = 0;
    public increaseScore() { 
      Arena.getInstance().setScoreText(++this._score);
    }

    // GameObjects
    private _snake: Snake;
    private _food: Food;

    // Tools
    private _inputHandler: InputHandler;
    private _collisionHandler: CollisionHandler;
    private _timer: Timer;

    // Game status
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
    
    public endGame()
    {
      this._timer.stop();

      // Rectangle

      //alert("You finished! Your score: " + this._score);
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

    // Loops
    public onClockTick()
    {
      this._snake.update();
      this._food.update();
    }

    public gameLoop()
    {
      // Render the sprites
      APPLICATION.render();

      // Handle input
      document.addEventListener('keyup', this._inputHandler.onKeyUp);
      this._inputHandler.processInput(this._snake, this);

      // Handle collisions
      this._collisionHandler.handleCollisions(this._snake, this._food);

      // Loop
      requestAnimationFrame(() => this.gameLoop());
    }

        // SINGLETON
        private static _instance: Game;

        private constructor() 
        {
          console.log("Creating game...");

          this._timer = new Timer(150, 0, this);
          // this._timer.pause();
          this._inputHandler = new InputHandler();
          this._collisionHandler = new CollisionHandler(); 
    
          document.body.appendChild(APPLICATION.view);
          Arena.getInstance().draw();
    
          // GameObjects
          this._snake = new Snake(new Vector2(256,256));
          this._food = new Food();
    
          this.gameLoop();

          const container = new PIXI.Container();
          container.pivot = new PIXI.Point(100, ARENA_HEIGHT / 2);
          container.position.x = ARENA_WIDTH / 2;
          container.position.y = ARENA_HEIGHT / 1.5;

          const graphics = new PIXI.Graphics();
          graphics.beginFill(0xFFA500);
          graphics.drawRect(0, 0, 500, 500);
          graphics.endFill();

          graphics.beginFill(0x404040);
          graphics.drawRect(0, 0, 1000, 1000);
          graphics.endFill();

          container.addChild(graphics);
    
          APPLICATION.stage.addChild(container);
        }
        
        public static getInstance(): Game 
        {
            if (!this._instance) 
            {
                this._instance = new Game();
            }
        
            return this._instance;
        }
}

// let img : HTMLImageElement = document.getElementById('tileset') as HTMLImageElement;
// 
// console.log("---stage children---");
// console.log(this._app.stage.children);