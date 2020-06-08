import { IObservable } from "../observable/IObservable";

export interface IObserver {
    // Receive update from subject.
    update(subject: IObservable): void;
}