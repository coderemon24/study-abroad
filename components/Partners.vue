<script setup lang="ts">
import client1 from '~/assets/images/clients/partner-1.webp'

const containerRef = ref(null)
const apiBase = useRuntimeConfig().public.apiBase
const baseUrl = useRuntimeConfig().public.baseUrl

const slides = ref([])

const getPartners = async () => {
  const response: any = await $fetch(`${apiBase}/partners`);
  if (response) {
    slides.value = response.data;
  }
}

const getImgUrl = (url: string) => {
  return `${baseUrl}/${url}`
}

const swiper = useSwiper(containerRef, {
  effect: 'slide',
  slidesPerView: 1,
  spaceBetween: 20,
  speed: 2000,
  loop: true,
  autoplay: {
    delay: 2000,
  },
  breakpoints: {
    640: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 50,
    },
    1280: {
      slidesPerView: 4,
      spaceBetween: 50,
    },
    1536: {
      slidesPerView: 5,
      spaceBetween: 50,
    },
  },
})

onMounted(() => {
  getPartners();
})
</script>

<template>

  <div class="
    relative
    ">
    <ClientOnly>
      <swiper-container ref="containerRef" :init="false">
        <swiper-slide class="my-3" v-for="(slide, idx) in slides" :key="idx">

          <div class="
                        bg-white
                        p-6
                        shadow
                        flex
                        items-center
                        justify-center
                        rounded-lg
                        cursor-pointer
                        ring
                        ring-blue-700/20
                        hover:bg-blue-700/20
                        transition-all
                        duration-300
                        ease-in-out
                        ">
            <img class="
                            w-1/2
                            " :src="getImgUrl(slide.image)">
          </div>
        </swiper-slide>
      </swiper-container>
      
      
    </ClientOnly>

  </div>

</template>

<style lang="css">

</style>
