import { defineEventHandler, getQuery, sendError, createError } from 'h3'
import { useRuntimeConfig } from '#imports'
import type { CalendarEvent } from '~/types/CalendarEvent'

// In-memory cache
let cache: CalendarEvent[] | null = null
let cacheTimestamp: number | null = null
const cacheDuration = 3600000 // 1 hour

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig()
  const calendarId = config.public.googleCalendarId + '@group.calendar.google.com'
  const apiKey = config.public.googleCalendarApiKey
  const number = parseInt(getQuery(event).number as string || '10', 10)
  const now = Date.now()

  // Use cached data if it's still fresh
  if (cache && cacheTimestamp && now - cacheTimestamp < cacheDuration) {
    console.log('Using cached calendar events')
    return cache
  }

  const today = new Date().toISOString()
  const url = `https://www.googleapis.com/calendar/v3/calendars/${calendarId}/events?key=${apiKey}&maxResults=${number}&orderBy=startTime&singleEvents=true&timeMin=${encodeURIComponent(today)}`

  try {
    const response = await fetch(url)
    if (!response.ok) {
      throw new Error(`Google API returned status ${response.status}`)
    }

    const data = await response.json()

    const filtered = data.items.filter((item: any) => item.status !== 'cancelled')

    const deduped: CalendarEvent[] = filtered.filter((current: any, _index: number, all: any[]) => {
      return all.every((existing: any) => {
        if (existing === current) return true

        const [existingRootId] = existing.id.split('_')
        const [currentRootId] = current.id.split('_')

        if (existingRootId !== currentRootId) return true

        const isIdentical =
          current.summary === existing.summary &&
          current.start === existing.start &&
          current.end === existing.end &&
          current.location === existing.location

        if (isIdentical) {
          return existing.description || !current.description
        }

        return true
      })
    }).map((item: any): CalendarEvent => ({
      id: item.id,
      summary: item.summary,
      start: item.start,
      end: item.end,
      location: item.location,
      description: item.description,
    }))

    deduped.sort((a: CalendarEvent, b: CalendarEvent) => {
      const startA = new Date(a.start.dateTime ?? a.start.date ?? 0)
      const startB = new Date(b.start.dateTime ?? b.start.date ?? 0)
      return startA.getTime() - startB.getTime()
    })

    // Cache the result
    cache = deduped
    cacheTimestamp = now

    return deduped
  } catch (err: any) {
    console.error('Error fetching Google Calendar events:', err)
    sendError(event, createError({
      statusCode: 500,
      statusMessage: 'Failed to fetch calendar events',
    }))
  }
})
