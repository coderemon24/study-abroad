<template>
  <div class="min-h-screen flex flex-col">
    <!-- Header -->
    <Header />

    <main class="flex-grow">
      <slot />
    </main>

    <!-- Footer -->
    <Footer />
  </div>
</template>

<script lang="ts" setup>
useHead({
  title: 'Study Abroad | Home',
  meta: [
    { name: 'description', content: 'Study Abroad|Care2Training' }
  ],
})
</script>

<style></style>