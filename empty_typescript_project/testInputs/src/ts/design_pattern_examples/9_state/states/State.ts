import { MovingContext } from "../MovingContext";

export abstract class State{
    protected context!: MovingContext;

    public setContext(context: MovingContext) {
        this.context = context;
    }

    public abstract move(): void;
}