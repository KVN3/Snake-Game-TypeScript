export default class GameState {
    // The instance is stored here in static and private so that it can be reach only from within any instance of this class
    private static _instance: GameState;
    private _isPaused: boolean;

    // Private, can't be called from outside the scope of this class to avoid the creation of multiple instances of our singleton
    private constructor() 
    { 
        this._isPaused = false;
    }

    // Creates an instance if it doesn't exist yet and returns it, if it does exist, returns the existing instance instead
    public static getInstance(): GameState {
        if (!this._instance) {
            this._instance = new GameState();
        }

        return this._instance;
    }

    // Some logic performed by the singleton, in this case it toggles the isPaused variable on/off. 
    public togglePause() {
        this._isPaused = !this._isPaused;
    }
}



