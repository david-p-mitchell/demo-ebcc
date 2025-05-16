import { ref } from 'vue';
import type { CalendarEvent } from '../types/CalendarEvent';

const events = ref<CalendarEvent[] | null>(null);

export async function fetchGoogleEvents(): Promise<void> {
  if (events.value !== null) return; // Already fetched
  try {
    const res = await $fetch<CalendarEvent[]>('/api/google-calendar?number=10');
    events.value = res;
  } catch (error) {
    console.error('Error fetching calendar events:', error);
    events.value = [];
  }
}

export function useGoogleEvents() {
  return {
    events
  };
}
