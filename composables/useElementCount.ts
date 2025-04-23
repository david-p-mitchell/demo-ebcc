import { useWindowSize } from '@vueuse/core'
import { computed } from 'vue'

export const useElementCount  = (elementWidth = 300, padding = 20) => {
  const { width } = useWindowSize()
  
  const elementCount = computed(() => {
    if(width.value < 767) return 4;
    const totalElementWidth = (elementWidth + padding * 2) - 30;
    
    let count = Math.floor(width.value / totalElementWidth);
    console.log(count.toString());
    return count;
  })

  return elementCount;
}
