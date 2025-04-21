<template>
  <div>
    
    <button @click="testApi" class="btn">Test API</button>
    <p v-if="result">Result: {{ result }}</p>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const result = ref(null)

const testApi = async () => {
  try {
    const res = await $fetch('/api/test')
    result.value = res.message || JSON.stringify(res)
  } catch (err) {
    result.value = 'Error: ' + err.message
  }
}
</script>

<style scoped>
.btn {
  padding: 8px 16px;
  background: #333;
  color: #fff;
  border-radius: 6px;
}
</style>
