export class Bullet{
    private _isActive: boolean;
    public x: number;
    public y: number;

    public constructor(x: number, y: number){
        this._isActive = true;
        this.x = x;
        this.y = y;
    }

    public isSpawned(){
        return this._isActive;
    }

    public setActive(active: boolean){
        this._isActive = active;
    }
}