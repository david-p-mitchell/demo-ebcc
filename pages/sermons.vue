<template>
  <div class="sermons-page">
    <h1 class="sermons-title">Recent Sermons</h1>
    <p class="sermons-description">Stay inspired by listening to our recent sermons.</p>
    <SermonWidget />
  </div>
</template>

<script>
// Import the SermonWidget component (ensure it is in the correct directory)
import SermonWidget from '~/components/widgets/SermonWidget'

export default {
  components: {
    SermonWidget
  }
}
</script>

<style scoped>
.sermons-page {
  /* Your styles here */
}

.sermons-title {
  /* Your styles here */
}

.sermons-description {
  /* Your styles here */
}
</style>
