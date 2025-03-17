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
import Navbar from '../components/nav/Navbar.vue';
import Footer from '../components/Footer.vue';
import NavigationHeader from './components/nav/NavigationHeader.vue';

export default {
  components: {
    Navbar
  }
}
</script>



