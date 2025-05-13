
  
  <script>
  import { useHead } from '@vueuse/head'
  
  export default {
    props: {
      title: {
        type: String,
        required: true
      },
      description: {
        type: String,
        required: true
      }
    },
    watch: {
      // Watch for changes to title and description and update meta tags
      title(newTitle) {
        this.setMetaTags(newTitle, this.description)
      },
      description(newDescription) {
        this.setMetaTags(this.title, newDescription)
      }
    },
    methods: {
      setMetaTags(title, description) {
        // Use Nuxt's useHead function to set the page metadata
        useHead({
          title: title,
          meta: [
            { name: 'description', content: description }
          ]
        })
      }
    },
    mounted() {
      // Set initial meta tags when the component is mounted
      this.setMetaTags(this.title, this.description)
    }
  }
  </script>
  