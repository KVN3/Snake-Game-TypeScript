import { State } from "./states/State";

export class MovingContext{
    private _state: State;

    constructor(state: State) {
        this._state = state;
        this._state.setContext(this);
    }

    // Change state
    public transitionTo(state: State): void {
        console.log(`Transition to ${(<any>state).constructor.name}.`);
        this._state = state;
        this._state.setContext(this);
    }


    public move(): void {
        this._state.move();
    }

}