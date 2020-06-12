import { Bullet } from "./Bullet";

export class BulletPool{
    private _bulletPool: Array<Bullet>; 

    public constructor(){
        this._bulletPool = new Array<Bullet>();
    }

    getBullet() : Bullet {
        var bullet = null;

        // Try to find a bullet that isn't active at the moment
        for (var i: number = 0; i < this._bulletPool.length; i++){
            if(!this._bulletPool[i].isSpawned()){
                console.log("Bullet found... reusing.");
                bullet = this._bulletPool[i];
                break;
            }
        }

        // No bullet found, we'll make a new one and add it to the pool so that the pool scales with object requirements
        if (bullet == null) 
        {
            console.log("Making new bullet...");
            bullet = new Bullet(0, 0); // Sets the bullet to active as well
            this._bulletPool.push(bullet);
        }

        this.spawn(bullet, 0, 0);

        return bullet;
    }

    // Returns bullet to 'available' pool
    returnBullet(bullet: Bullet) : void
    {
        console.log("Returning bullet to pool...");
        bullet.setActive(false);
    }

    // 'Spawns' the given bullet at x and y 2D screen coordinates
    private spawn(bullet: Bullet, x: number, y: number){
        bullet.setActive(true);
        bullet.x = x;
        bullet.y = y;
    }
}