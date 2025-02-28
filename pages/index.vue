<template>
  <div>
    <PageMeta :title="'Home - Enon Baptist Church'" :description="'Welcome to Enon Baptist Church. We are a community of believers committed to worship and service.'" />
    <ChurchImage />
    <div class="home-page">
      <h1 class="home-title">Welcome to Enon Baptist Church</h1>
      <p class="home-description">
        We are a group of people who meet together to worship God. We are concerned for one another and those who live around us. We believe the Bible to be God’s Word that is relevant to all areas of our life. In particular, we have a personal belief in Jesus Christ and through him have a real relationship with God.
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import ChurchImage from '~/components/ChurchImage.vue'
</script>

