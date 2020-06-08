import * as PIXI from 'pixi.js';

export class Game
{
    private _app: PIXI.Application;

    public constructor()
    {
        // Create the application
        this._app = new PIXI.Application();

        // Add the view to the DOM
        document.body.appendChild(this._app.view);

        // Uncaught error - can't add?
        // this._app.stage.addChild(PIXI.Sprite.from("rock.png"));

        this.loadTextures();
    }

    public loadTextures(): void
    {
        this._app.loader.add
            ([
                "./rock.png",
                "./cat.PNG",
            ]);

        this.addSpritesToStage();
    }

    public addSpritesToStage()
    {
        console.log("All files loaded");
        console.log(this._app);
        console.log(this._app.loader);

        // Nope
        let texture = this._app.loader.resources["./rock.png"].texture;
        console.log(texture);

        // Texture, maar error
        texture = PIXI.Texture.from('./rock.png');
        console.log(texture);

        // let sprite = new PIXI.Sprite(texture);

        // this._app.stage.addChild(sprite);
        // sprite.visible = true;
    }
}