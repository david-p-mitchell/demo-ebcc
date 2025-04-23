<template>
  <div>
    <PageMeta :title="'Home - Enon Baptist Church'" :description="'Welcome to Enon Baptist Church. We are a community of believers committed to worship and service.'" />
    <ClientOnly>
      <ChurchImage @imageRendered="onImageRendered"/>
    </ClientOnly>
    <div v-if="imageRendered">
      <div class="home-page">
        <h1> Welcome to Enon Baptist Church</h1>
        <p class="home-description">
          We are a group of people who meet together to worship God. We are concerned for one another and those who live around us. We believe the Bible to be God’s Word that is relevant to all areas of our life. In particular, we have a personal belief in Jesus Christ and through him have a real relationship with God.
        </p>
      </div>
      <CalendarEventsComponent />
      <Contact />
    </div>
  </div>
</template>

<script setup lang="ts">
import CalendarEventsComponent from '../components/events/CalendarEventsComponent.vue';
import ChurchImage from '../components/ChurchImage.vue'
import Contact from '~/components/Contact.vue';

import { ref } from 'vue';
const imageRendered = ref(false);

const onImageRendered = () => {
  imageRendered.value = true; // Update state
};

</script>

