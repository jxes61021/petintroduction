import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  buildModules: ['@nuxtjs/tailwindcss'],
  css: ['@/assets/base.css'],
  tailwindcss: {
    exposeConfig: true
  },
  build: {
    transpile: ['swiper']
  },
  app:{
    // 部署至githubpage需設定為專案名稱
    baseURL: '/petintroduction/',
    // 設定打包後資料夾名稱
    buildAssetsDir:'/nuxt/',
    // 設定讀取路徑
    cdnURL:'./',
  }, 
})
