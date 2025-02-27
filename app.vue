<script setup>
import '@/assets/css/site.css';
</script>

<template>
  <div class="app-container">
    
    <Navbar />
    <div class="content">
      <NuxtPage />
    </div>
    <Footer />
  </div>
</template>

<script>
import Navbar from '../components/nav/Navbar.vue';
import Footer from '../components/Footer.vue';

export default {
  components: {
    Navbar
  }
}
</script>



