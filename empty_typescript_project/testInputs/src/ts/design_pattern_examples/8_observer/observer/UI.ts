import { IObserver } from "./IObserver";
import { HealthManager } from "../observable/HealthManager";

export class UI implements IObserver{

    private _healthLabel: string = "0";

    // This method is from the IObserver interface and is called by the IObservable (HealthManager) when a change happens to health
    public update(healthManager: HealthManager)
    {
        this._healthLabel = healthManager.health.toString();
        this.displayHealth();
    }

    public displayHealth(){
        console.log("HEALTH: " + this._healthLabel);
    }
}