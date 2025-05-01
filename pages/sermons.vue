<template>
  <div class="sermons-page">
    <h1>Recent Sermons</h1>
    <p>Here is our latest uploaded sermon.</p>
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
