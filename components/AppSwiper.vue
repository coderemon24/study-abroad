<script setup lang="ts">

const apiBase = useRuntimeConfig().public.apiBase
const baseUrl = useRuntimeConfig().public.baseUrl
const containerRef = ref(null)
const slides = ref([])

const getSliders = async () => {
    const response: any = await $fetch(`${apiBase}/sliders`);
    if (response) {
        slides.value = response.data;
    }
}

const getImgUrl = (url: string) => {
    return `${baseUrl}/${url}`
}


const swiper = useSwiper(containerRef, {
    effect: 'slide',
    speed: 2000,
    loop: true,
    autoplay: {
        delay: 2000,
    },
})

onMounted(() => {
    getSliders()
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
                        <img width="100%" :src="getImgUrl(slide.image)" :alt="slide.title">

                        <div class="
                        w-full
                        h-full
                        absolute
                        top-0
                        left-0
                        "></div>

                        <div class="
                        md:w-1/2
                        absolute
                        top-1/2
                        translate-y-[-30%]
                        px-10
                        md:left-1/2
                        left-1/2
                        transform
                        -translate-x-1/2
                        text-white
                        text-center
                        ">
                            <h3 class="
                            text-5xl
                            mb-3
                            ">{{ slide.title }}</h3>
                            <p class="
                            text-lg
                            fw-thin
                            text-center
                            mb-[-1.2rem]
                            " style="font-weight: 300;">
                                {{ slide.description }}
                            </p>
                            <NuxtLink v-if="slide.button_text" :to="slide.button_link"
                                class="
                                text-lg
                                font-normal
                                text-blue-700
                                bg-white
                                py-2.5
                                px-7
                                rounded-full
                                hover:bg-transparent
                                hover:ring-2
                                hover:ring-white
                                hover:text-white
                                transition-all
                                duration-300
                                ease-in-out
                                ">
                                {{ slide.button_text }}
                            </NuxtLink>
                        </div>
                    </div>
                </swiper-slide>
            </swiper-container>
        </ClientOnly>

        <div class="
        flex
        gap-2
        flex-col
        absolute
        top-1/2
        md:translate-y-[-50%]
        translate-y-[-100%]
        translate-x-0
        right-5
        md:right-16
        z-50
        text-lg
        ">
            <button class="
        md:bg-gray-200/60
        bg-black/70
        md:px-6
        p-3
        rounded-full
        md:rounded-none
        py-2
        md:py-2
        cursor-pointer
        md:text-black/80
        text-white
        " @click="swiper.prev()">
                <i class="fa-solid fa-arrow-left-long"></i>
            </button>
            <button class="
        md:bg-gray-200/60
        bg-black/70
        md:px-6
        p-3
        rounded-full
        md:rounded-none
        py-2
        md:py-2
        cursor-pointer
        md:text-black/80
        text-white
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
