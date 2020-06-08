import { IBehaviour } from "./IBehaviour";

export class NeutralBehaviour implements IBehaviour {
    public doBehaviour(): void {
        console.log("AI minds its own bussines...");
    }
}