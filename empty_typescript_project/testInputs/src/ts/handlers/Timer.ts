import { Game } from "~ts/Game";

export enum ClockType { TIMED, INFINITE }
export enum ClockTick { EVEN, ODD }

export class Timer {

    private handle: number = 0;
    private interval: number;

    public type: ClockType;
    public tick: ClockTick = ClockTick.EVEN;

    private _isRunning: boolean = false;
    public isRunning(): boolean { return this._isRunning; }
    private _isPaused: boolean = false;
    public isPaused(): boolean { return this._isPaused; }

    //private handler: () => any = () => { console.log("No clock event") }
    private _game: Game;

    private onElapsed = () => {

        if (this._isPaused) {  return }
        this.tick = (this.tick === ClockTick.EVEN)
            ? ClockTick.ODD
            : ClockTick.EVEN

        this._game.onClockTick();
        if (this.type == ClockType.TIMED) { this.stop() }
    }

    constructor(interval: number, duration: number, game: Game) {

        this.interval = interval;
        this._game = game;

        // If duration passed it's a timed ClockType
        this.type = (duration == 0) ? ClockType.INFINITE : ClockType.TIMED;
    }

    public start() {

        this._isRunning = true
        this.handle = (this.type == ClockType.INFINITE)
            ? window.setInterval(this.onElapsed.bind(this), this.interval)
            : window.setTimeout(this.onElapsed.bind(this), this.interval)
    }

    public stop() {
        this._isRunning = false
        return (this.type == ClockType.INFINITE)
            ? window.clearInterval(this.handle)
            : window.clearTimeout(this.handle)
    }

    public pause() { this._isPaused = true }

    public resume() { this._isPaused = false }                
}