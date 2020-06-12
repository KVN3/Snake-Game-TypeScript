// Contract for generic names for methods used by all calendars
export interface ICalendarAdapter {
    postOccurrence(): void;
    getOccurrences(): void;
}