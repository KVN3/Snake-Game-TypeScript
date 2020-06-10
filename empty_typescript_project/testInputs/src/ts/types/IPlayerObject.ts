import { IDrawable } from "./IDrawable";

export interface IPlayerObject extends IDrawable 
{
    update(): void;
}