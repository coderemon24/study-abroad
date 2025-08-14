<script setup lang="ts">
import client1 from '~/assets/images/clients/partner-1.webp'

const containerRef = ref(null)
const slides = ref([
  {image: client1,},
  {image: client1,},
  {image: client1,},
  {image: client1,},
  {image: client1,},
])
const swiper = useSwiper(containerRef, {
  effect: 'slide',
  slidesPerView: 1,
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
  console.log(swiper.instance)
})
</script>

<template>

  <div class="
    relative
    ">
    <ClientOnly>
      <swiper-container ref="containerRef" :init="false">
        <swiper-slide v-for="(slide, idx) in slides" :key="idx">

          <div class="
                        bg-white
                        p-6
                        shadow-md
                        flex
                        items-center
                        justify-center
                        rounded-lg
                        cursor-pointer
                        ">
            <img class="
                            w-1/2
                            " :src="slide.image">
          </div>
        </swiper-slide>
      </swiper-container>
      
      
    </ClientOnly>

  </div>

</template>

<style lang="css">

</style>
