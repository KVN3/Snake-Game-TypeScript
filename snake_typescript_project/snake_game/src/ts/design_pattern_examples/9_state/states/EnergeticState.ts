import { State } from "./State";
import { ExhaustedState } from "./ExhaustedState";

export class EnergeticState extends State {
    public move(){
        console.log("Energetic State - running.");
        this.context.transitionTo(new ExhaustedState());
    }
}