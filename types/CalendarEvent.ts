// types/Event.ts
export interface CalendarEvent {
    id: string;
    summary: string;
    start: {
      dateTime?: string;
      date?: string;
    };
    end: {
      dateTime?:string;
      date?:string;
    }
    location: string;
    description?: string
    isRecurring: boolean

  }
  