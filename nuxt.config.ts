import tailwindcss from "@tailwindcss/vite"

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  ssr: true,
  devtools: { enabled: true },
  runtimeConfig: {
      public: {
        apiBase: process.env.NUXT_PUBLIC_API_BASE_URL || 'http://localhost:8000',
        baseUrl: process.env.NUXT_PUBLIC_BASE_URL
      }
    },
  css: [
    '~/assets/css/style.css',
  ],

  vite: {
    plugins: [
      tailwindcss(),
    ]
  },

  app: {
    head: {
      link: [
        {rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css' },
        {rel: 'icon', type: 'image/x-icon', href: '/favicon.webp'}
      ]
    },
    pageTransition: { 
      name: 'page', 
      mode: 'out-in',
      appear: true
    }
  },
  modules: ['nuxt-swiper', '@nuxt/ui', 'nuxt-aos'],

})