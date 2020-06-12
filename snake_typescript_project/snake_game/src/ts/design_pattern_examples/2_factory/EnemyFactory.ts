import { IEnemy } from "./Enemies/IEnemy";

// Base class for enemy factories
export abstract class EnemyFactory {

    // Abstract method to be overriden by specific enemy factories
    public abstract createEnemy(): IEnemy;

    // Does some stuff using the create enemy, in this case it creates an enemy, spawns it and then has it attack
    public spawnEnemy(): void {
        const enemy = this.createEnemy();
  
        // Instantiate enemy and do some stuff
        enemy.spawn();
        enemy.attack();
    }
}