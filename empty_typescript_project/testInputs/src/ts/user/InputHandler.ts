import {GameKey, Axis} from "../types/Enums"
import { Snake } from "~ts/objects/Snake";
import { Direction } from "readline";

export class InputHandler
{
    public lastControlKeyPressed: number = GameKey.LEFT;
    public spaceKeyPressed: number = 0;

    public onKeyUp = (ev: KeyboardEvent) => 
    {
        if(ev.keyCode === GameKey.SPACE)
            this.spaceKeyPressed = ev.keyCode;
        else
            this.lastControlKeyPressed = ev.keyCode;
        
    }

    public processInput(snake: Snake)
    {
        // Set the snake's direction
        let axis = (this.lastControlKeyPressed === GameKey.UP || this.lastControlKeyPressed === GameKey.DOWN) ? Axis.Y : Axis.X;
        let direction: Direction = (this.lastControlKeyPressed === GameKey.LEFT || this.lastControlKeyPressed === GameKey.UP) ? -1 : 1;
        snake.setDirection(axis, direction);

        if(this.spaceKeyPressed === GameKey.SPACE){
            snake.update();
            this.spaceKeyPressed = 0;
        }
    }
}

        // switch(this.lastKey){
        //     case GameKey.UP:
        //         snake.setDirection(Axis.Y, -1);
        //         break
        //     case GameKey.DOWN:
        //         snake.setDirection(Axis.Y, 1);
        //         break
        //     case GameKey.LEFT:
        //         snake.setDirection(Axis.X, -1);
        //         break
        //     case GameKey.RIGHT:
        //         snake.setDirection(Axis.X, 1);
        //         break
        // }