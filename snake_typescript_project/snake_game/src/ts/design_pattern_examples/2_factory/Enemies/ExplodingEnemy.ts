import { BaseEnemy } from "./BaseEnemy";

export class ExplodingEnemy extends BaseEnemy  {
    protected explosionRadius: number;

    public constructor(health: number, explosionRadius: number){
        super(health);
        this.explosionRadius = explosionRadius;
    }

    public attack(): void{
        if(this.isActive)
            console.log("Enemy blowing up with a radius of " + this.explosionRadius.toString() + " meters.");
        else
            console.log("Enemy not spawned... can't attack.");
    }
}