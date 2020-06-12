import { ICalendarAdapter } from "../ICalendarAdapter";
import { GoogleCalendar } from "../adaptees/GoogleCalendar";

// Specific adapter made for the 'Google API', we can use this in our code and it doesn't matter if Google API changes their method names 
export class GoogleCalendarAdapter implements ICalendarAdapter {
    private _calendar: GoogleCalendar;

    constructor(calendar: GoogleCalendar) {
        this._calendar = calendar;
    }

    // These methods adapt to the specific adaptee's method names
    public postOccurrence(): void {
        this._calendar.scheduleMeeting();
    }

    public getOccurrences(): void {
        this._calendar.getMeetings();
    }
}