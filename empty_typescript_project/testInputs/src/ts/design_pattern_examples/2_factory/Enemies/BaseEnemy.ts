import { IEnemy } from "./IEnemy";

// Base class for enemies
export class BaseEnemy implements IEnemy {
    protected health: number;
    protected isActive: boolean;
    
    public constructor(health: number){
        this.health = health;
        this.isActive = false;
    }

    // Can be overriden by specific enemies
    public attack(): void{}

    // 'Spawns' the enemy
    public spawn(): void{
        console.log("Enemy spawned.");
        this.isActive = true;
    }
}