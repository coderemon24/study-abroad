<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { useRuntimeConfig } from '#app'
const containerRef = ref(null)
const apiBase = useRuntimeConfig().public.apiBase
const baseUrl = useRuntimeConfig().public.baseUrl

const slides = ref<any[]>([])

// প্রতি স্লাইডে ২টা logo রাখার জন্য chunk তৈরি করছি
const chunkedSlides = computed(() => {
  const chunkSize = 2
  const result = []
  for (let i = 0; i < slides.value.length; i += chunkSize) {
    result.push(slides.value.slice(i, i + chunkSize))
  }
  return result
})

const getPartners = async () => {
  const response: any = await $fetch(`${apiBase}/partners`)
  if (response) {
    slides.value = response.data
  }
}

const getImgUrl = (url: string) => {
  return `${baseUrl}/${url}`
}

const swiper = useSwiper(containerRef, {
  effect: 'slide',
  slidesPerView: 5, // প্রতি স্লাইডে শুধু ১ ব্লক (যেখানে ২টা লোগো থাকবে)
  spaceBetween: 20,
  speed: 2000,
  loop: true,
  autoplay: {
    delay: 2000,
  },
})

onMounted(() => {
  getPartners()
})
</script>

<template>
  <div class="relative">
    <ClientOnly>
      <swiper-container ref="containerRef" :init="false">
        <!-- এখানে প্রতিটা slide এ ২টা logo দেখাবে -->
        <swiper-slide class="" v-for="(slide, idx) in chunkedSlides" :key="idx">
          <div class="grid grid-rows-2 gap-4">
            <div
              v-for="(item, i) in slide"
              :key="i"
              class="bg-white p-2 flex items-center justify-center cursor-pointer "
            >
              <img class="w-10/12" :src="getImgUrl(item.image)" />
            </div>
          </div>
        </swiper-slide>
      </swiper-container>
    </ClientOnly>
  </div>
</template>

<style lang="css">
/* চাইলে custom css যোগ করতে পারো */
</style>
