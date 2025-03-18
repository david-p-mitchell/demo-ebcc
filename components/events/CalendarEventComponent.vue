<template>
  <div class="event-box">
    <h3 class="event-title">{{ event.summary }}</h3>
    <div class="event-time-display">
      <p class="italic-text"> {{getDate(event.start.dateTime || event.start.date) +  " (" + getDay(event.start.dateTime || event.start.date)  + ")"}} </p>
      
    </div>
    <p class="event-time">{{ getTime(event.start.dateTime || event.start.date) }} - {{ getTime(event.end.dateTime || event.end.date) }}</p>
    <p class="event-description" v-if="event.description">{{ event.description }}</p>
    <div >
      
      <!-- <p class="more-info">More Information</p> -->
       <div style="display: flex-end;"><DirectionsComponent :location="event.location" :text="text"  /></div>
    
  </div>
  </div>
</template>

<script setup lang="ts">
import type { CalendarEvent } from '~/types/CalendarEvent';

const props = defineProps<{ event: CalendarEvent }>();
const text: string = "";
// Function to format day of the week
function getDay(dateString?: string): string {
  if (!dateString) return 'Unknown date';
  const date = new Date(dateString);
  return date.toLocaleString('en-GB', { weekday: 'long' });
}

function getDate(dateString?: string): string {
  if (!dateString) return 'Unknown date';
  const date = new Date(dateString);
  return date.toLocaleDateString('en-GB');
}

function getTime(dateString?: string): string {
  if (!dateString) return 'Unknown Time';
  const date = new Date(dateString);
  return date.toLocaleString('en-GB', { hour: 'numeric', minute: '2-digit' });
}

</script>

<style scoped>
.event-box {
  padding: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  width: 275px;
}

.event-box:hover {
  cursor: pointer;
}

.event-title {
  font-size: 1.2em;
  font-weight: bold;
  margin: 0.25rem 0rem;
}

.event-title a {
  text-decoration: none;
  color: #000;
}

.event-time {
  font-size: 1em;
  color: initial;
  margin: 0.25rem 0rem;
}
.event-time-display {
  display: flex;
  color: initial;
  margin: 0.25rem 0rem;
  font-size: 1em;

}

.more-info {
  color: initial;
  font-size: 0.9em;
  text-decoration: underline;
}

.event-description {
  font-size: 0.9em;
  color: #333;
  margin: 0.25rem 0rem;
}

.location-link a {
  text-decoration: none;
}

.map-link {
  display: flex;
  align-items: center;
}

.map-icon {
  width: 20px;
  height: 20px;
  margin-right: 8px;
}

.italic-text {
  font-style: italic;
  font-size: 1em;
  color: initial;
  margin: 0.25rem 0rem;
}

.box-title .event-box .event-title a {
  text-decoration: none; 
}
</style>


