<script setup>
import '@/assets/css/site.css';
</script>

<template>
  <div class="app-container">
    
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    
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

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.2s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>



