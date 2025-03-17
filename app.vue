<script setup>
import '@/assets/css/site.css';
</script>

<template>
  <div class="app-container">
    <NavigationHeader />
    
    <div class="content">
      <NuxtPage />
    </div>
    <Footer />
  </div>
</template>

<script>
import NavigationHeader from './components/nav/NavigationHeader.vue';
import Footer from '../components/Footer.vue';

export default {
  components: {
    NavigationHeader,
    Footer
  }
}
</script>



