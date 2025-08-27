// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  app: {
    head: {
      title: 'ToDo App',
      charset: 'utf-16',
    }
  },
  modules: ['@nuxtjs/tailwindcss', '@nuxt/icon'],
  css: [
    '~/assets/css/tailwind.css' 
  ],
  icon: {
    mode: 'css',
    cssLayer: 'base'
  }
})