// Some fake API class that lets us post and get events from the calendar
export class OfficeCalendar {
    public postEvent(): void {
        console.log("Posting event to Office Calendar using their method name.");
    }

    public getEvents(): void {
        console.log("Retrieving Office events using specific method name.");
    }
}