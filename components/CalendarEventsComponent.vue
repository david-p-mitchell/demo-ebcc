<template>
  <div>
    <div v-if="events.length > 0">
      <h2>Upcoming Events</h2>
      <ul>
        <li v-for="event in events" :key="event.id">
          <strong>{{ event.summary }}</strong><br />
          <span>{{ formatDate(event.start.dateTime || event.start.date) }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
// Import Vue functions
import { ref, onMounted } from 'vue'
import { GoogleCalendar } from '~/apis/googleCal'

// Import the Event type
import type { CalendarEvent } from '~/types/CalendarEvent';
const events = ref<CalendarEvent[]>([]);  // Store events in a ref properly


// Function to fetch events
async function loadGoogle() {
  const config = useRuntimeConfig();
  console.log('Google Calendar API Key:', config.public.googleCalendarApiKey);
console.log('Google Calendar ID:', config.public.googleCalendarId);
console.log('Env Vars:', process.env);
  const googleCalendar = new GoogleCalendar(config);

  try {
    const fetchedEvents = await googleCalendar.getEvents();
    // Ensure that fetched events match the Event type
    events.value = fetchedEvents as CalendarEvent[];
  } catch (error) {
    console.error('Error loading Google Calendar events:', error);
  }
}

// Trigger loading events when the component is mounted
onMounted(loadGoogle);

// Optionally add a method to format date if needed
function formatDate(dateString?: string): string {
  if (!dateString) return 'Unknown date';
  const date = new Date(dateString);
  return date.toLocaleString('en-GB', { dateStyle: 'long', timeStyle: 'short' });
}
</script>

