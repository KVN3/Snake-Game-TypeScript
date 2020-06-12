import eatSound from '../../../resources/sfx/EatSound.ogg'
import dieSound from '../../../resources/sfx/dieSound2.mp3'
import forestMusic from '../../../resources/sfx/GreenForest.ogg'
import { AudioType } from '~ts/types/Enums';

export class AudioPlayer {
    private _eatAudio = new Audio(eatSound);
    private _dieAudio = new Audio(dieSound);
    private _forestAudio = new Audio(forestMusic);

    public playSound(audioType: AudioType) {
        switch (audioType) {
            case AudioType.EAT:
                this._eatAudio.play();
                break
            case AudioType.DIE:
                this._dieAudio.play();
        }
    }

    public toggleMusic() {
        if (this._forestAudio.paused)
            this._forestAudio.play();
    }

    // SINGLETON
    private static _instance: AudioPlayer;

    private constructor() {
        this._forestAudio.loop = true;
        this._forestAudio.volume = .4;
    }

    public static getInstance(): AudioPlayer {
        if (!this._instance) {
            this._instance = new AudioPlayer();
        }

        return this._instance;
    }
}