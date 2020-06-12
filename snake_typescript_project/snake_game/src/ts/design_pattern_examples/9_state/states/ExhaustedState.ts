import { State } from "./State";
import { EnergeticState } from "./EnergeticState";

export class ExhaustedState extends State {
    public move(){
        console.log("Exhausted State - walking.");
        this.context.transitionTo(new EnergeticState());
    }
}