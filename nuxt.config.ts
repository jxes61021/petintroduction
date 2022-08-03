import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  buildModules: ['@nuxtjs/tailwindcss'],
  css: ['@/assets/base.css'],
  tailwindcss: {
    exposeConfig: true
  },
  build: {
    transpile: ['swiper', '@nuxtjs/tailwindcss']
  },
  app:{
    buildAssetsDir:'/nuxt/',
    cdnURL:'./',
  },
})
