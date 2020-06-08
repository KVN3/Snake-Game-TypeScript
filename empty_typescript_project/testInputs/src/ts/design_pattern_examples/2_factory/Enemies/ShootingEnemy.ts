import { BaseEnemy } from "./BaseEnemy";

export class ShootingEnemy extends BaseEnemy {
    protected rateOfFire: number;

    public constructor(health: number, rateOfFire: number){
        super(health);
        this.rateOfFire = rateOfFire;
    }

    public attack(): void{
        if(this.isActive)
            console.log("Enemy shooting every " + this.rateOfFire.toString() + " seconds.");
        else
            console.log("Enemy not spawned... can't attack.");
    }
}