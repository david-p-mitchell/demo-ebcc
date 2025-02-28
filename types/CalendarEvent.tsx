// types/Event.ts
export interface CalendarEvent {
    id: string;
    summary: string;
    start: {
      dateTime?: string;
      date?: string;
    };
  }
  