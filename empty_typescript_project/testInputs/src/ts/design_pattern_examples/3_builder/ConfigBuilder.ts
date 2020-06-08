import { Config } from "./Config";
import { IConfigBuilder } from "./IConfigBuilder";

export class ConfigBuilder implements IConfigBuilder {
    private _config: Config;

    // We create a new builder for a new config, so we create a new config to build on here
    constructor() {
        this._config = new Config();
    }

    // We reset the builder when we get the config, so it's ready for a new config to be build
    public getConfig(): Config {
        const config = this._config;
        this.reset();
        return config;
    }

    // Reset the builder for a new config
    private reset() {
        this._config = new Config();
    }

    // Chain methods to build with - we return the builder object so that we can chain calls
    public setLives(amount: number): ConfigBuilder {
        this._config.setLives(amount);

        return this;
    }

    public addPlayerName(name: string): ConfigBuilder {
        this._config.addPlayerName(name);

        return this;
    }
}