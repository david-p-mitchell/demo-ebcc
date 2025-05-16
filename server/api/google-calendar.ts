import { defineEventHandler, getQuery, sendError, createError } from 'h3'
import { useRuntimeConfig } from '#imports'
import type { CalendarEvent } from '../../types/CalendarEvent'

// In-memory cache
let cache: Record<number, { data: CalendarEvent[]; timestamp: number }> = {};
const cacheDuration = 300000 // 5 minutes (server cache)

export default defineEventHandler(async (event) => {
  
  const config = useRuntimeConfig();
  
  const calendarId = config.googleCalendarId + '@group.calendar.google.com';
  const apiKey = config.googleCalendarApiKey;
  const number = parseInt(getQuery(event).number as string || '10', 10);
  const now = Date.now();
  
  // Check if there's cached data for the specific number and it's still fresh
  const cached = cache[number];
  if (cached && now - cached.timestamp < cacheDuration) {
    console.log('Using cached calendar events');
    return cached.data;
  }

  const today = new Date().toISOString();
  const url = `https://www.googleapis.com/calendar/v3/calendars/${calendarId}/events?key=${apiKey}&maxResults=${number}&orderBy=startTime&singleEvents=true&timeMin=${encodeURIComponent(today)}`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Google API returned status ${response.status}`);
    }
    
    const data = await response.json();
    
    const filtered = data.items.filter((item: any) => item.status !== 'cancelled' && new Date(item.end.dateTime ?? item.end.date ?? 0) > new Date());
    
    const deduped: CalendarEvent[] = filtered.filter((current: any, _index: number, all: any[]) => {
      return all.every((existing: any) => {
        if (existing === current) return true;

        const [existingRootId] = existing.id.split('_');
        const [currentRootId] = current.id.split('_');

        if (existingRootId !== currentRootId) return true;

        const isIdentical =
          current.summary === existing.summary &&
          current.start === existing.start &&
          current.end === existing.end &&
          current.location === existing.location;

        if (isIdentical) {
          return existing.description || !current.description;
        }

        return true;
      })
    }).map((item: any): CalendarEvent => ({
      id: item.id,
      summary: item.summary,
      start: item.start,
      end: item.end,
      location: item.location,
      description: item.description,
      isRecurring: (item.recurringEventId != null)
    }));

    deduped.sort((a: CalendarEvent, b: CalendarEvent) => {
      const startA = new Date(a.start.dateTime ?? a.start.date ?? 0)
      const startB = new Date(b.start.dateTime ?? b.start.date ?? 0)
      return startA.getTime() - startB.getTime()
    });

    // Cache the result for the specific number
    cache[number] = { data: deduped, timestamp: now };

    return deduped;
  } catch (err: any) {
    console.error('Error fetching Google Calendar events:', err);
    sendError(event, createError({
      statusCode: 500,
      statusMessage: 'Failed to fetch calendar events',
    }));
  }
})
