<template>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
    <div v-if="events.length > 0">
      <h2>Upcoming Events</h2>
      <div class="event-container">
        <div v-for="event in events" :key="event.id" class="event-box-container">
          <div v-if="event.summary === 'Sunday Club'"><SundayClubEventComponent :event="event" /></div>
          <div v-else-if="event.summary === 'Morning Service'"><SundayMorningComponent :event="event" /></div>
          <div v-else-if="event.summary === 'Prayer Meeting'"><SundayPrayerEventComponent :event="event" /></div>
          <div v-else-if="event.summary === 'Evening Service'"><SundayEveningComponent :event="event" /></div>
          <div v-else-if="event.summary === 'Bible Study & Prayer Meeting'"><BibleStudyEventComponent :event="event" /></div>

          <div v-else class="event-box">
          <CalendarEventComponent :event="event"/>
        </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// Import Vue functions
import { ref, onMounted } from 'vue';
import { GoogleCalendar } from '../../apis/googleCal';

// Import the Event type
import type { CalendarEvent } from '../../types/CalendarEvent';
import SundayMorningComponent from './specific-events/SundayMorningEventComponent.vue';
import SundayEveningComponent from './specific-events/SundayEveningEventComponent.vue';
import BibleStudyEventComponent from './specific-events/BibleStudyEventComponent.vue';
import CalendarEventComponent from './CalendarEventComponent.vue';
import SundayPrayerEventComponent from './specific-events/SundayPrayerEventComponent.vue';
import SundayClubEventComponent from './specific-events/SundayClubEventComponent.vue';
import { useRuntimeConfig } from 'nuxt/app';
const events = ref<CalendarEvent[]>([]);  // Store events in a ref properly


// Function to fetch events
async function loadGoogle() {
  const config = useRuntimeConfig();
  const googleCalendar = new GoogleCalendar(config);

  try {
    const fetchedEvents = await googleCalendar.getEvents(4);
    // Ensure that fetched events match the Event type
    events.value = fetchedEvents as CalendarEvent[];
  } catch (error) {
    console.error('Error loading Google Calendar events:', error);
  }
}

// Trigger loading events when the component is mounted
onMounted(loadGoogle);

// Optionally add a method to format date if needed


</script>

<style scoped>
.event-container {
  display: flex;
  flex-wrap: wrap;  /* Allow items to wrap when necessary */
  gap: 10px;        /* Space between items */
  justify-content: flex-start;  /* Align items to the left */
}


</style>
