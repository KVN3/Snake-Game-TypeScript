import { APPLICATION, ARENA_WIDTH, ARENA_HEIGHT } from "~ts/app";
import { Score } from "~ts/data/ScoreService";

export class GUI {
    private _mainContainer!: PIXI.Container;

    // Main menu
    private _windowContainer!: PIXI.Container;
    private _windowWidth = 600;
    private _windowHeight = 400;
    private _borderWidth = 20;

    private _highScoreText: PIXI.Text[] = [];

    public drawMainMenu() {
        this._mainContainer = new PIXI.Container();
        this._mainContainer.name = "MAIN_MENU";
        this._mainContainer.pivot = new PIXI.Point(0, 0);
        this._mainContainer.position.x = 0;
        this._mainContainer.position.y = 0;

        this._windowContainer = new PIXI.Container();
        this._mainContainer.addChild(this._windowContainer);

        this._windowContainer.width = this._windowWidth;
        this._windowContainer.height = 400;
        this._windowContainer.position.x = ARENA_WIDTH / 2 - this._windowWidth / 2;
        this._windowContainer.position.y = ARENA_HEIGHT / 2 - this._windowHeight / 1.5;

        // Draw things
        this.drawMenu();
        this.printStartInstructions();

        APPLICATION.stage.addChild(this._mainContainer);
    }

    private drawMenu() {
        const graphics = new PIXI.Graphics();

        // Shade
        graphics.beginFill(0X193018, 0.7);
        graphics.drawRect(-this._windowContainer.position.x, -this._windowContainer.position.y, ARENA_WIDTH, ARENA_HEIGHT);
        graphics.endFill();

        // Menu border
        graphics.beginFill(0x4f3111, .9);
        graphics.drawRect(-this._borderWidth / 2, -this._borderWidth / 2, this._windowWidth + this._borderWidth, this._windowHeight + this._borderWidth);
        graphics.endFill();

        // Menu
        graphics.beginFill(0x8a5720, 0.7);
        graphics.drawRect(0, 0, this._windowWidth, this._windowHeight);
        graphics.endFill();

        this._windowContainer.addChild(graphics);
    }

    public printHighscore(scores: Score[]) 
    {
        console.log("Printing highscore");

        let titleText = new PIXI.Text("HIGHSCORE", { fontFamily: 'Arial', fontSize: 17, fill: 0xffffff, align: 'left' });
        titleText.position = new PIXI.Point(20, 20);
        this._windowContainer.addChild(titleText);

        let score: Score;
        let entry: string;
        for (let i = 0; i < scores.length; i++) 
        {   
            score = scores[i];
            entry = i + 1 + ". " + score.username + " ate " + score.score + " bunnies!"

            // Add the highscore entry to the GUI
            this._highScoreText[i] = new PIXI.Text(entry, { fontFamily: 'Arial', fontSize: 14, fill: 0xffffff, align: 'left' });
            this._highScoreText[i].position = new PIXI.Point(20, (i + 2) * 23);
            this._windowContainer.addChild(this._highScoreText[i]);
        }
    }

    private printStartInstructions() {
        const text = new PIXI.Text('PRESS SPACE TO START', { fontFamily: 'Arial', fontSize: 24, fill: 0xffffff, align: 'center' });
        text.position = new PIXI.Point(this._windowWidth / 2, this._windowHeight - 30);
        text.anchor = new PIXI.Point(.5, .5);
        this._windowContainer.addChild(text);
    }

    public toggleMenu() {
        this._mainContainer.visible = !this._mainContainer.visible;
    }

    // SINGLETON
    private static _instance: GUI;

    private constructor() {
        this.drawMainMenu();
    }

    public static getInstance(): GUI {
        if (!this._instance) {
            this._instance = new GUI();
        }

        return this._instance;
    }

    // SHIFT + ALT + F - Formatting
}