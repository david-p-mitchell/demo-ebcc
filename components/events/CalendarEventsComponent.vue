<template>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
    <div v-if="events.length > 0">
      <h2 class="event-underline">Upcoming Events</h2>
      <div class="event-container">
        <div v-for="event in events" :key="event.id" class="event-box-container">
          <div v-if="event.summary === 'Sunday Club'"><SundayClubEventComponent :event="event" /></div>
          <div v-else-if="event.summary === 'Morning Service'"><SundayMorningComponent :event="event" /></div>
          <div v-else-if="event.summary === 'Prayer Meeting'"><SundayPrayerEventComponent :event="event" /></div>
          <div v-else-if="event.summary === 'Evening Service'"><SundayEveningComponent :event="event" /></div>
          <div v-else-if="event.summary === 'Bible Study & Prayer Meeting'"><BibleStudyEventComponent :event="event" /></div>
          <div v-else-if="event.summary === 'Discoverers'"><DiscoverersEventComponent :event="event" /></div>
          <div v-else class="event-box">
          <CalendarEventComponent :event="event"/>
        </div>
        </div>
      </div>
    </div>
    <div v-else>
      <div class="event-container"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
// Import Vue functions
import { ref, onMounted } from 'vue';

// Import the Event type
import type { CalendarEvent } from '../../types/CalendarEvent';
import SundayMorningComponent from './specific-events/SundayMorningEventComponent.vue';
import SundayEveningComponent from './specific-events/SundayEveningEventComponent.vue';
import BibleStudyEventComponent from './specific-events/BibleStudyEventComponent.vue';
import CalendarEventComponent from './CalendarEventComponent.vue';
import SundayPrayerEventComponent from './specific-events/SundayPrayerEventComponent.vue';
import SundayClubEventComponent from './specific-events/SundayClubEventComponent.vue';
import DiscoverersEventComponent from './specific-events/DiscoverersEventComponent.vue';
import { useElementCount } from '~/composables/useElementCount';
const events = ref<CalendarEvent[]>([]);  // Store events in a ref properly
const emit = defineEmits(['eventsLoaded']); // Define the custom event


// Function to fetch events
async function loadGoogle() {
  try {
      var count = useElementCount(300);
      let s = '/api/google-calendar?number=' + count.value;
      const data = await $fetch<CalendarEvent[]>('/api/google-calendar?number=' + count.value);
      events.value = data;
    } catch (error) {
      console.error('Failed to fetch events:', error);
      events.value = [];
    }
}

// Trigger loading events when the component is mounted


onMounted(async () => {
  await loadGoogle();
  emit('eventsLoaded'); // Notify the parent
});

// Optionally add a method to format date if needed


</script>

<style scoped>
.event-container {
  display: flex;
  flex-wrap: wrap;  /* Allow items to wrap when necessary */
  gap: 10px;        /* Space between items */
  justify-content: flex-start;  /* Align items to the left */
  
}

.event-underline {
  border-bottom: 1px solid var(--nav-bar-bg-color);
}

@media (min-width: 1024px) {
  .event-container {
    height: 128px;
  }
}


</style>
