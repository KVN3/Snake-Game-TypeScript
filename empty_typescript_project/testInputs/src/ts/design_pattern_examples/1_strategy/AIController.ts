import { IBehaviour } from "./strategies/IBehaviour";

export class AIController {

    // The strategy
    private _behaviour: IBehaviour;

    constructor(behaviour: IBehaviour) {
        this._behaviour = behaviour;
    }

    // Change the AI behaviour 'strategy'
    public setBehaviour(behaviour: IBehaviour) {
        this._behaviour = behaviour;
    }

    // Does its current behaviour
    public doBehaviour(): void {
        this._behaviour.doBehaviour();
    }
}
