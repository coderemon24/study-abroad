<template>
  <div class="
  flex
  flex-col-reverse
  gap-10
  md:flex-row
  md:pb-24
  ">
    <div class="
    w-full
    md:w-1/2
    ">
        <h3 
        data-aos="fade-up"
        class="
        title-design
        mb-4
        uppercase
        text-2xl
        text-black/90
        ">
            Get To Know About Us
        </h3>
        
        <h3 
        data-aos="fade-up"
        data-aos-delay="200"
        class="
        text-4xl
        md:text-6xl
        text-blue-900
        capitalize
        mb-4
        md:mb-5
        ">
            {{ props.data?.about_title }}
        </h3>
        <div class="
        text-gray-600
        md:text-gray-500
        text-justify
        md:text-lg
        md:leading-8
        flex
        flex-col
        gap-4
        ">
            <p data-aos="fade-up"
            data-aos-delay="400"
            >
                <div v-html="props.data?.about_des"></div>
            </p>
        </div>
    </div>
    
    <div class="
    
    w-full
    md:w-1/2
    ">
        <div class="
        relative
        z-10
        left-1/2
        -translate-x-1/2
        ">
            <img 
            data-aos="fade-down"
            class="
            hidden
            md:block
            w-1/4
            absolute
            " :src="logo ?? ''" alt="logo" >
            
            <img 
            data-aos="fade-right"
            class="
            md:w-[22rem]
            float-end
            md:ml-[15rem]
            " :src="getImgUrl(props.data?.man ?? '')" alt="ceo" >
            
            <div class="
            circle-shape
            "></div>
            
            <img 
            data-aos="fade-up"
            class="
            hidden
            md:block
            w-[22rem]
            absolute
            right-[9rem]
            top-[19rem]
            z-[-1]
            " :src="getImgUrl(props.data?.passport ?? '')" alt="passport" >
            
            <div 
            data-aos="fade-up"
            class="
            bg-white
            shadow-lg
            p-5
            absolute
            top-[25rem]
            translate-y-[-50%]
            left-0
            border-l-7
            border-blue-800
            ex-shape
            overflow-hidden
            pl-10
            md:left-[52%]
            md:top-[32rem]
            ">
                <h3 class="
                text-6xl
                mb-1
                font-[900]
                text-blue-800
                font-plus
                ">{{ props.data?.experience }}</h3>
                
                <p class="
                text-xl
                font-semibold
                text-black/90
                ">{{ props.data?.ex_title }}</p>
            </div>
        </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import logo from '~/public/assets/images/logo.webp';
const props = defineProps({
    data: Object,
    default: () => ({})
})

const baseUrl = useRuntimeConfig().public.baseUrl

const getImgUrl = (url: string) => {
  return `${baseUrl}/${url}`
}

</script>

<style>

</style>