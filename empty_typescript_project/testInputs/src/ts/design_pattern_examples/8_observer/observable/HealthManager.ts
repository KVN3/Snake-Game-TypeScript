import { IObserver } from "../observer/IObserver";
import { IObservable } from "./IObservable";

export class HealthManager implements IObservable {
    public health: number = 0;

    private _observers: IObserver[] = [];

    public constructor(health: number){
        this.health = health; 
    }

    // Attach and detach observers / subscribers
    public attach(observer: IObserver): void {
        const isExist = this._observers.includes(observer);
        if (isExist) {
            return console.log("Already attached.");
        }

        console.log("Attached new observer.");
        this._observers.push(observer);
        this.notify();
    }

    public detach(observer: IObserver): void {
        const observerIndex = this._observers.indexOf(observer);

        // Not found, can't detach
        if (observerIndex === -1) {
            return console.log("Can't detach - observer not found.");
        }

        // Detaching
        this._observers.splice(observerIndex, 1);
        console.log("Detached an observer.");
    }

    // Triggers an update to all subscribers
    public notify(): void {
        console.log("Notifying observers of change.");

        for (const observer of this._observers) 
        {
            observer.update(this);
        }
    }

    // Logic that defines a changing state and notifies subscribers of the change
    public takeDamage(damage: number) : void{
        this.health -= damage;
        this.notify();
    }

    public regenerateHealth(health: number) : void{
        this.health += health;
        this.notify();
    }
}
