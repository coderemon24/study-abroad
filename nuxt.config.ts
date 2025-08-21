import tailwindcss from "@tailwindcss/vite"

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  ssr: true,
  devtools: { enabled: true },

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