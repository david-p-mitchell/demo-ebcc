<template>
    <div class="bible-study">
        <NuxtLink to="/whats-on/bible-study/" class="bible-study box-title">
    <EventsCalendarEventComponent :event="event" />
        </NuxtLink>
    </div>
</template>
<script setup lang="ts">
import { defineProps } from 'vue';
import type { CalendarEvent } from '~/types/CalendarEvent';
const props = defineProps<{ event: CalendarEvent }>();
</script>

<style>
.bible-study {
  background-color: #FFF3CD;
  margin-bottom: 1rem;
  border-radius: 18px;
  overflow: hidden;
  text-decoration: none;
  color: #000;
}
.bible-study:hover {
  background-color:  #F0DFA7;
  
  text-decoration: none;
}

</style>