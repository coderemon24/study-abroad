<script setup lang="ts">
import slide1 from '~/assets/images/slider/slide-1.jpeg'
import slide2 from '~/assets/images/slider/slide-2.jpeg'
import slide3 from '~/assets/images/slider/slide-3.jpeg'
import slide4 from '~/assets/images/slider/slide-4.jpeg'

const containerRef = ref(null)
const slides = ref([
    {
        title: 'Slide 1',
        image: slide1,
        description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
                                dolores
                                voluptate
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
                                dolores
                                voluptate`
    },
    {
        title: 'Slide 2',
        image: slide2,
        description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
                                dolores
                                voluptate
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
                                dolores
                                voluptate`
    },
    {
        title: 'Slide 3',
        image: slide3,
        description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
                                dolores
                                voluptate
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
                                dolores
                                voluptate`
    },
    {
        title: 'Slide 4',
        image: slide4,
        description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
                                dolores
                                voluptate
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
                                dolores
                                voluptate`
    },
])
const swiper = useSwiper(containerRef, {
    effect: 'slide',
    speed: 2000,
    loop: true,
    autoplay: {
        delay: 2000,
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
                <swiper-slide class="
                swiper-slide
                h-[100%]!
                md:h-[80vh]!
                " v-for="(slide, idx) in slides" :key="idx">
                    <div class="
                    w-full
                    relative
                    ">
                        <img width="100%" :src="slide.image" :alt="slide.title">

                        <div class="
                        w-full
                        h-full
                        absolute
                        top-0
                        left-0
                        bg-black/60
                        "></div>

                        <div class="
                        md:w-1/2
                        absolute
                        top-1/2
                        translate-y-[-50%]
                        px-10
                        md:left-32
                        text-white
        
                        ">
                            <h3 class="
                            text-5xl
                            mb-3
                            ">{{ slide.title }}</h3>
                            <p class="
                            text-lg
                            fw-thin
                            text-justify
                            " style="font-weight: 300;">
                                {{ slide.description }}
                            </p>
                        </div>
                    </div>
                </swiper-slide>
            </swiper-container>
        </ClientOnly>

        <div class="
        flex
        gap-2
        flex-row
        md:flex-col
        absolute
        top-[80%]
        md:top-1/2
        md:translate-y-[-50%]
        right-1/2
        translate-x-1/2
        md:translate-x-0
        md:right-16
        z-50
        text-lg
        ">
            <button class="
        bg-gray-200/60
        px-6
        py-2
        cursor-pointer
        " @click="swiper.prev()">
                <i class="fa-solid fa-arrow-left-long"></i>
            </button>
            <button class="
        bg-gray-200/60
        px-6
        py-2
        cursor-pointer
        " @click="swiper.next()">
                <i class="fa-solid fa-arrow-right-long"></i>
            </button>
        </div>
    </div>

</template>

<style lang="css">
.swiper-slide {
    display: flex;
    justify-content: center;
    gap: 1rem;
    align-items: center;
    font-size: 18px;
    height: 80vh;
    font-size: 4rem;
    font-weight: bold;
    font-family: 'Roboto', sans-serif;
    width: 100%;
}
</style>
