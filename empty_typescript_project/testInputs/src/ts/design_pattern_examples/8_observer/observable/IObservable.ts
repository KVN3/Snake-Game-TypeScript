import { IObserver } from "../observer/IObserver";

export interface IObservable {
    // Attach an observer to the subject.
    attach(observer: IObserver): void;

    // Detach an observer from the subject.
    detach(observer: IObserver): void;

    // Notify all observers about an event.
    notify(): void;
}