<template>
  <div>
    <PageMeta
      :title="'Home - Enon Baptist Church'"
      :description="'Welcome to Enon Baptist Church. We are a community of believers committed to worship and service.'"
    />
    <ClientOnly>
      <ChurchImage @imageRendered="onImageRendered" />
      <div v-if="imageRendered">
        <div class="home-page">
          <h1 class="welcome">Welcome to Enon Baptist Church</h1>
          <p class="home-description">
            We are a group of people who meet together to worship God. We are concerned for one another and those who live around us. We believe the Bible to be God’s Word that is relevant to all areas of our life. In particular, we have a personal belief in Jesus Christ and through him have a real relationship with God.
          </p>
        </div>
        <CalendarEventsComponent />
        <Contact />
      </div>
    </ClientOnly>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import CalendarEventsComponent from '~/components/events/CalendarEventsComponent.vue';
import ChurchImage from '~/components/ChurchImage.vue';
import Contact from '~/components/Contact.vue';


onMounted(() => {
  console.log('Hydrated:', 'page');
});
const imageRendered = ref(false);

const onImageRendered = () => {
  imageRendered.value = true;
};
</script>

<style scoped>
.welcome {
  margin-top: 0;
  margin-bottom: 0;
}
</style>
