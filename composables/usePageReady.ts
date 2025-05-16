import { ref } from 'vue'

const pageReady = ref(false)

export function usePageReady() {
  const pageReady = useState('page-ready', () => false)
  function markPageReady() {
    pageReady.value = true
  }

  return { pageReady, markPageReady }
}