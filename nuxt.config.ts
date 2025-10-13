import tailwindcss from "@tailwindcss/vite"
import { $fetch } from 'ofetch'

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  hooks: {
    async 'nitro:config'(nitroConfig) {
      let routes = []
      const apiBase = process.env.NUXT_PUBLIC_API_BASE || 'https://admin.care2training.com/api'

      async function fetchRoutes(url, prefix) {
        try {
          const res = await $fetch(url)
          const list = res?.data || res || []   // <-- এখানে safe check
          if (Array.isArray(list)) {
            return list.map(item => `/${prefix}/${item.slug}`)
          }
        } catch (e) {
          console.error(`❌ Failed fetching ${url}`, e)
        }
        return []
      }

      // fetch all routes
      const countryRoutes = await fetchRoutes(`${apiBase}/get-countries`, 'country')
      const serviceRoutes = await fetchRoutes(`${apiBase}/services`, 'services')
      const blogRoutes    = await fetchRoutes(`${apiBase}/blogs`, 'blog')
      const eventRoutes   = await fetchRoutes(`${apiBase}/events`, 'events')

      routes.push(...countryRoutes, ...serviceRoutes, ...blogRoutes, ...eventRoutes)

      console.log("✅ Pre-render routes:", routes)

      nitroConfig.prerender = nitroConfig.prerender || {}
      nitroConfig.prerender.routes = [
        ...(nitroConfig.prerender.routes || []),
        ...routes
      ]
    }
  },
  ssr: false,
  target: 'static',
  generate: {
    fallback: true
  },
  devtools: { enabled: false },
  runtimeConfig: {
      public: {
        apiBase: process.env.NUXT_PUBLIC_API_BASE_URL || 'https://admin.care2training.com/api',
        baseUrl: process.env.NUXT_PUBLIC_BASE_URL || 'https://admin.care2training.com',
      }
    },
  css: [
    '~/public/assets/css/style.css',
  ],

  vite: {
    plugins: [
      tailwindcss(),
    ]
  },

  app: {
    baseURL: '/',
    head: {
      link: [
        {rel: 'icon', href:'/favicon.webp', type: 'image/x-icon'},
        {rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/7.0.0/css/all.min.css' }
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