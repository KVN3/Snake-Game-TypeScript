import axios from 'axios'
import apiConfig from '../../../apiconfig.json'
import { GUI } from '~ts/UI/GUI';


export interface Score {
    username: string;
    score: number;
}

export interface ScoreResponse {
    etag: Object;
    id: Object;
    score: Score
}

export class ScoreService {
    private _scoreUrl = "http://localhost:8080/score";
    private _auth = {
        auth: {
            username: apiConfig.username,
            password: apiConfig.password
        }
    }

    // Requests the top 10 score entries and calls back to the GUI once received
    public loadHighScore() {
        axios.get(this._scoreUrl + "?sort={score:-1}&pagesize=10", this._auth)
            .then(data => {
                let scores: Score[] = [];
                data.data.forEach((element: any) => {
                    scores.push({ username: element.username, score: element.score });
                });

                GUI.getInstance().printHighscore(scores);
            })
            .catch(err => console.log(err));
    }

    // Posts a new score and then displays the new version
    public updateHighScore(score: Score)
    {
        if(score.username == "")
            score.username = "A snake";

        axios.post(this._scoreUrl, score, this._auth)
        .then(data => {
            this.loadHighScore();
        })
        .catch(err => console.log(err));
    }

    // SINGLETON
    private static _instance: ScoreService;

    private constructor() { }

    public static getInstance(): ScoreService {
        if (!this._instance) {
            this._instance = new ScoreService();
        }

        return this._instance;
    }
}