import { IBehaviour } from "./IBehaviour";

export class FleeingBehaviour implements IBehaviour {
    public doBehaviour(): void {
        console.log("AI tries to flee...");
    }
}