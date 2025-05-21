// nuxt.config.ts

export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      apiBase: process.env.NUXT_PUBLIC_API_BASE || 'http://localhost:8080',
    },
  },
  css: [],
  modules: ['@nuxt/ui'], // jika Anda install @nuxt/ui
  app: {
    head: {
      title: 'CMS-Go Frontend',
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Frontend CMS-Go with Nuxt 3' },
      ],
    },
  },
})
