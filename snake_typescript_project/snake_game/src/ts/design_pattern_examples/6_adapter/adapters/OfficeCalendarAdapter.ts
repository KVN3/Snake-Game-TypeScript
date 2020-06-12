import { ICalendarAdapter } from "../ICalendarAdapter";
import { OfficeCalendar } from "../adaptees/OfficeCalendar";

// Specific adapter made for the 'Office365 API', we can use this in our code and it doesn't matter if Office365 API changes their method names 
export class OfficeCalendarAdapter implements ICalendarAdapter {
    private _calendar: OfficeCalendar;

    constructor(calendar: OfficeCalendar) {
        this._calendar = calendar;
    }

    // These methods adapt to the specific adaptee's method names
    public postOccurrence(): void {
        this._calendar.postEvent();
    }

    public getOccurrences(): void {
        this._calendar.getEvents();
    }
}