// Some fake API class that lets us post and get events from the calendar
export class GoogleCalendar {
    public scheduleMeeting(): void {
        console.log("Scheduling meeting to Google Calendar using their method name.");
    }

    public getMeetings(): void {
        console.log("Retrieving Google meetings using specific method name.");
    }
}