<template>
  <div class="min-h-screen flex flex-col">
    
    <div
      v-if="loading"
      class="fixed top-0 left-0 h-1 bg-blue-600 animate-pulse z-50 w-full"
    ></div>
    
    <!-- Header -->
    <Header v-if="route.path !== '/errors/404'"  />

    <main class="flex-grow">
      <slot />
    </main>

    <!-- Footer -->
    <Footer v-if="route.path !== '/errors/404'" />
  </div>
</template>

<script lang="ts" setup>
useHead({
  title: 'Study Abroad | Home',
  meta: [
    { name: 'description', content: 'Study Abroad|Care2Training' }
  ],
})

const loading = ref(false)
const router = useRouter()
const route = useRoute()

// Show loading bar on route change
router.beforeEach((to, from, next) => {
  loading.value = true
  next()
})

router.afterEach(() => {
  loading.value = false
})

</script>

<style></style>