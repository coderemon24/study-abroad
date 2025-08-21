<template>
    <div class="
    grid
    grid-cols-1
    gap-8
    md:grid-cols-2
    ">
        <div class="
        w-3/4
        md:w-3/5
        mx-auto
        relative
        ">
            <img class="
            w-1/3
            absolute
            -top-9
            -left-10
            -z-1
            " :src="pattern" alt="about">

            <div
            data-aos="fade-down"
            class="
            bg-white
            p-3
            rounded-lg
            flex
            items-center
            gap-4
            w-5/6
            absolute
            top-0
            md:top-4
            left-[73%]
            -translate-x-1/2
            -translate-y-1/2
            shadow-lg
            z-10
            ">
                <span class="
                bg-blue-700/10
                w-15
                h-15
                flex
                items-center
                justify-center
                rounded-full
                text-blue-800/40
                text-3xl
                ">
                    <i class="fa-solid fa-quote-left"></i>
                </span>
                <div class="w-5/8">
                    <h3 class="
                    font-semibold
                    text-gray-600
                    mb-1
                    text-sm
                    ">Accommodation</h3>
                    <p class="
                    text-xs
                    text-gray-500
                    ">
                        Graduate will help you with accommodation.
                    </p>
                </div>
            </div>

            <img
            data-aos="fade-right"
            class="
            w-full
            rounded-lg
            " :src="img1" alt="about">

            <div class="
            bg-white
            p-3
            rounded-lg
            flex
            items-center
            gap-3
            w-5/6
            absolute
            -bottom-10
            md:-bottom-0
            left-[25%]
            md:left-[0%]
            -translate-x-1/2
            -translate-y-1/2
            shadow-lg
            ">
                <span class="
                bg-purple-700/10
                w-15
                h-15
                flex
                items-center
                justify-center
                rounded-full
                text-purple-800/60
                text-3xl
                ">
                    <i class="fa-solid fa-graduation-cap"></i>
                </span>
                <div class="w-5/8">
                    <h3 class="
                    font-semibold
                    text-gray-600
                    mb-1
                    text-sm
                    ">Career Counselling</h3>
                    <p class="
                    text-xs
                    text-gray-500
                    ">
                        Graduate will help you with accommodation.
                    </p>
                </div>
            </div>


            <img class="
            w-1/3
            absolute
            -bottom-9
            -right-10
            -z-1
            
            " :src="pattern" alt="about">
        </div>

        <div
        data-aos="fade-up"
        class="
        w-full
        h-full
        flex
        flex-col
        items-center
        justify-center
        ">
            <div>
                <p class="
            text-gray-600
            " data-aos="fade-up">We are here to help you</p>
                <h3 class="
            capitalize
            text-2xl
            md:text-4xl
            font-semibold
            text-black/70
            " data-aos="fade-up" 
            data-aos-delay="200"
            >from career counselling to university admission</h3>

                <p class="
            text-gray-500
            mt-4
            text-justify
            text-sm
            "
            data-aos="fade-up"
            data-aos-delay="400"
            >
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus iusto molestiae harum
                    quibusdam nulla maiores unde repellat totam animi. Autem facere saepe cupiditate accusantium sit
                    officiis maiores facilis fugit pariatur.
                </p>
                <p class="
            text-gray-500
            mt-4
            text-justify
            text-sm
            "
            data-aos="fade-up"
            data-aos-delay="600"
            >
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus iusto molestiae harum
                    quibusdam nulla maiores unde repellat totam animi. Autem facere saepe cupiditate accusantium sit
                    officiis maiores facilis fugit pariatur.
                </p>
                <p class="
            text-gray-500
            mt-4
            text-justify
            text-sm
            "
            data-aos="fade-up"
            data-aos-delay="800"
            >
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus iusto molestiae harum
                    quibusdam nulla maiores unde repellat totam animi. Autem facere saepe cupiditate accusantium sit
                    officiis maiores facilis fugit pariatur.
                </p>

                <a 
                data-aos="fade-up"
                data-aos-delay="900"
                class="btn-outline" href="#">
                    <span class="relative z-10">
                        Get Started
                    </span>
                </a>


            </div>

        </div>
    </div>
</template>

<script lang="ts" setup>
import aboutImg from '~/assets/images/about.jpg'
import patt from '~/assets/images/pattern-2.png'

const img1 = ref(aboutImg)
const pattern = ref(patt)

</script>

<style scoped></style>