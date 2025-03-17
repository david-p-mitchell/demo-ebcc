// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@nuxt/image'],
  app: {
    head: {
      title: 'Enon Baptist Church',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      ],
      link: [
        { rel: 'icon',type: 'image/x-icon', href: '/ebc-logo.ico' },  // For higher resolution displays
        { rel: 'preload', href: '/images/enonChurch.webp', as: 'image' },
      ]
    }
  },

  runtimeConfig: {
    public: {
      googleCalendarApiKey: process.env.NUXT_PUBLIC_GOOGLE_CALENDAR_API_KEY,
      googleCalendarId: process.env.NUXT_PUBLIC_GOOGLE_CALENDAR_ID,
    },
  },
  typescript: {
    shim: false,
  },
})