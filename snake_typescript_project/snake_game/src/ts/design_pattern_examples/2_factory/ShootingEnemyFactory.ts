import { ShootingEnemy } from "./Enemies/ShootingEnemy";
import { IEnemy } from "./Enemies/IEnemy";
import { EnemyFactory } from "./EnemyFactory";

export class ShootingEnemyFactory extends EnemyFactory {

    // Create a shooting enemy
    public createEnemy(): IEnemy {
        return new ShootingEnemy(100, 0.5);
    }
}