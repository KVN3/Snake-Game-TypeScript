import { Snake } from './objects/snake/Snake';
import { Vector2 } from './types/Vector2';
import { InputHandler } from './handlers/InputHandler';
import { APPLICATION, TILE_SIZE, USERNAME } from './app';
import { Food } from './objects/Food';
import { CollisionHandler } from './handlers/CollisionHandler';
import { Arena } from './UI/Arena';
import { Timer } from './handlers/Timer';
import { GUI } from './UI/GUI';
import { ScoreService } from './data/ScoreService';
import { AudioPlayer } from './handlers/AudioPlayer';

export class Game {
  private _score: number = 0;
  public increaseScore() {
    Arena.getInstance().setScoreText(++this._score);
  }

  // GameObjects
  private _snake!: Snake;
  private _foods: Food[] = [];

  // Tools
  private _inputHandler: InputHandler;
  private _collisionHandler: CollisionHandler;
  public getCollisionHandler() { return this._collisionHandler; }
  private _timer: Timer;
  private _GUI: GUI;

  // Game status
  public isRunning() {
    return this._timer.isRunning();
  }

  public isPaused() {
    return this._timer.isPaused();
  }

  public start() {
    GUI.getInstance().toggleMenu();
    this._timer.start();
    AudioPlayer.getInstance().toggleMusic();
  }

  public endGame() 
  {
    ScoreService.getInstance().updateHighScore({username: USERNAME, score: this._score});
    this.resetGame();
    this._timer.stop();
  }

  public pause() {
    this._timer.pause();
  }

  public resume() {
    this._timer.resume();
  }

  public onClockTick() {
    this._snake.update();

    this._foods.forEach((food: Food) => {
      food.update();
    });
  }

  public gameLoop() 
  {
    // Render the sprites
    APPLICATION.render();

    // Handle input
    document.addEventListener('keyup', this._inputHandler.onKeyUp);
    this._inputHandler.processInput(this._snake, this);

    // Handle collisions
    if (this._timer.isRunning()) {
      this._collisionHandler.handleCollisions(this._snake, this._foods);
    }

    // Loop
    requestAnimationFrame(() => this.gameLoop());
  }

  private appendView() {
    // Append the view
    let element = document.getElementById('canvas');
    if (element != null)
      element.appendChild(APPLICATION.view);
    else
      document.body.appendChild(APPLICATION.view);
  }

  // Inefficient but that's OK for this application
  public resetGame() {
    APPLICATION.stage.removeChildren();

    // Draw the arena and UI
    Arena.getInstance().draw();
    this._GUI.drawMainMenu();
    this._score = 0;
    Arena.getInstance().setScoreText(this._score);

    // New game objects
    this._snake = new Snake(new Vector2(17 * TILE_SIZE - 1 * TILE_SIZE, 16 * TILE_SIZE));

    for(let i = 0; i < 5; i++){
      this._foods[i] = new Food();
    }
  }

  // SINGLETON
  private static _instance: Game;

  private constructor() {
    console.log("Creating game...");

    // Handlers
    this._inputHandler = new InputHandler();
    this._collisionHandler = new CollisionHandler();
    this._timer = new Timer(150, 0, this);
    this._GUI = GUI.getInstance();

    this.appendView();
    this.resetGame();
    this.gameLoop();

    ScoreService.getInstance().loadHighScore();
  }

  public static getInstance(): Game 
  {
    if (!this._instance) {
      this._instance = new Game();
    }

    return this._instance;
  }
}