

import { defineNuxtConfig } from 'nuxt/config';
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@nuxt/image'],
  alias: {
    '@': './',
  },
  image: {
    provider: 'ipx', // this allows dynamic optimization via IPX
    presets: {
      churchwidth: {
        modifiers: {
          format: 'webp'
        },
      },
    },
  },
  app: {
    head: {
      title: 'Enon Baptist Church',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      ],
      link: [
        { rel: 'icon',type: 'image/x-icon', href: '/ebc-logo.ico' },  // For higher resolution displays
      ],
      baseURL: '/david-p-mitchell.github.io/', // Important for GitHub Pages
      htmlAttrs: {
        lang: 'en'
      }
    },
    pageTransition: { name: 'page', mode: 'out-in' }
  },
  nitro: {
    preset: 'static', // Enables SSG
  },
  runtimeConfig: {
    public: {
      googleCalendarApiKey: process.env.GOOGLE_CALENDAR_API_KEY,
      googleCalendarId: process.env.GOOGLE_CALENDARID,
    },
  },
  typescript: {
    shim: false,
  },
  vite: {
    build: {
      minify: 'esbuild',  // Minify JavaScript using esbuild
      terserOptions: {
        compress: {
          drop_console: true,  // Remove console.log and other debug output
        },
        mangle: {
          toplevel: true,  // Enable mangling of top-level variable names
        },
      },
    },
  },
})