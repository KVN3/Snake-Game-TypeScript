export interface IConfigBuilder {
    setLives(amount: number): IConfigBuilder;
    addPlayerName(name: string): IConfigBuilder;
}