import { IEnemy } from "./Enemies/IEnemy";
import { EnemyFactory } from "./EnemyFactory";
import { ExplodingEnemy } from "./Enemies/ExplodingEnemy";
import { Random } from "~ts/helper/Random";

export class ExplodingEnemyFactory extends EnemyFactory {

    // Create an exploding enemy
    public createEnemy(): IEnemy {
        return new ExplodingEnemy(100, Random.next(4, 7));
    }
}