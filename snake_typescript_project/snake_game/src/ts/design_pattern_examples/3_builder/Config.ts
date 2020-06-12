export class Config{
    private _lives: number = 1;
    private _playerNames: string[] = [];

    setLives(lives:number) {
        this._lives = lives;
    }

    getLives(){
        return this._lives;
    }

    addPlayerName(name:string){
        this._playerNames.push(name);
    }

    // Prints the object to console
    printToConsole(){
        var output = "config(lives:" + this._lives;
        
        this._playerNames.forEach(name => {
            output += ", " + name;
        });

        output += ")";

        console.log(output);
    }
}