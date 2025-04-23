<template>
    <div class="sunday-morn">
        <NuxtLink to="/whats-on/sunday-morning" class="sunday-morn">
    <EventsCalendarEventComponent :event="event" />
        </NuxtLink>
    </div>
</template>
<script setup lang="ts">
import type { CalendarEvent } from '~/types/CalendarEvent';
const props = defineProps<{ event: CalendarEvent }>();
</script>

<style>
.sunday-morn {
  background-color: #e2e2cd;
  margin-bottom: 1rem;
  overflow: hidden;
  color: #777;
  text-decoration: none; 
  border-radius: 18px;
}
.sunday-morn:hover {
  background-color:  #e2e2dd;
  
}
.sunday-morn:hover div {
  text-decoration: none; 
}
.sunday-morn:hover a {
  text-decoration: none; 
}

.sunday-morn .more-info:hover a {
  text-decoration: none; 
}
</style>