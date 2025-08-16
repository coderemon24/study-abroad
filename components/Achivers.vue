<script setup lang="ts">
defineProps<{
  prevIcon?: string
  nextIcon?: string
}>()

const items = [
  'https://picsum.photos/640/640?random=1',
  'https://picsum.photos/640/640?random=2',
  'https://picsum.photos/640/640?random=3',
  'https://picsum.photos/640/640?random=4',
  'https://picsum.photos/640/640?random=5',
  'https://picsum.photos/640/640?random=6'
]
</script>

<template>
  <UCarousel
    v-slot="{ item }"
    arrows
    dots
    loop
    :autoplay="{ delay: 2000 }"
    :prev-icon="prevIcon"
    :next-icon="nextIcon"
    :items="items"
    :ui="{
      item: 'basis-1/1 md:basis-1/3 lg:basis-1/4',
      dot: 'data-[state=active]:bg-blue-800 bg-blue-800/20',
      
    }"
    class="w-full  mx-auto"
  >
    <img :src="item" width="100%" height="320" class="rounded-lg">
  </UCarousel>
</template>

