<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { useRuntimeConfig } from '#app'

const props = defineProps<{
  slides: Array<{ image: string }>
}>()

const containerRef = ref(null)
const baseUrl = useRuntimeConfig().public.baseUrl

// props.slides কে reactive local variable এ assign করা
const slides = ref(props.slides ?? [])

const chunkedSlides = computed(() => {
  const chunkSize = 2
  const result: any[] = []
  for (let i = 0; i < slides.value.length; i += chunkSize) {
    result.push(slides.value.slice(i, i + chunkSize))
  }
  return result
})

const getImgUrl = (url: string) => {
  return url ? `${baseUrl}/${url}` : '/placeholder.png'
}

const swiper = useSwiper(containerRef, {
  effect: 'slide',
  slidesPerView: 5,
  spaceBetween: 20,
  speed: 2000,
  loop: true,
  autoplay: {
    delay: 2000,
  },
  breakpoints: {
    1140: { slidesPerView: 5, spaceBetween: 40 },
    768: { slidesPerView: 4, spaceBetween: 30 },
    640: { slidesPerView: 3, spaceBetween: 20 },
    360: { slidesPerView: 2, spaceBetween: 10 },
  }
})
</script>

<template>
  <div class="relative">
    <ClientOnly>
      <swiper-container ref="containerRef" :init="false">
        <swiper-slide v-for="(slide, idx) in chunkedSlides" :key="idx">
          <div class="grid grid-rows-2 gap-4">
            <div v-for="(item, i) in slide" :key="i" class="bg-white p-2 flex items-center justify-center cursor-pointer">
              <img class="w-10/12" :src="getImgUrl(item.image)" />
            </div>
          </div>
        </swiper-slide>
      </swiper-container>
    </ClientOnly>
  </div>
</template>

<style lang="css">
/* custom CSS */
</style>
