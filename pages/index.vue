<template>
  <div>
    <ChurchImage @media-loaded="onMediaLoad" />
    <div class="home-page">
      <h1 class="home-title">Welcome to Enon Baptist Church</h1>
      
      <p class="home-description">
        We are a group of people who meet together to worship God. We are concerned for one another and those who live around us. We believe the Bible to be God’s Word that is relevant to all areas of our life. In particular, we have a personal belief in Jesus Christ and through him have a real relationship with God.
      </p>
      
    </div>
  </div>
</template>

<script>
import ChurchImage from '~/components/ChurchImage'

export default {
  components: {
    ChurchImage
  },
  data() {
    return {
      mediaLoaded: false, // Track the media loading state
    };
  },
  methods: {
    onMediaLoad() {
      this.mediaLoaded = true; // Set mediaLoaded to true when media is loaded
    },
  },
}
</script>

<style scoped>
.sermon-widget-desktop {
    float: right;
    width: auto;
    position: flex;

  }

  @media (max-width: 768px) {
    .sermon-widget-desktop {
        width: 100%;
    }
  }
</style>
