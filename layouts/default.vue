<template>
  <div>
      <NavigationHeader />
      <main>
        <div class="content">
        <slot />
        </div>
      </main>
      <Footer />
  </div>
</template>

<script setup lang="ts">
import NavigationHeader from '../components/nav/NavigationHeader.vue'
import Footer from '../components/Footer.vue'
</script>

