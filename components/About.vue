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
        <h3 class="
        title-design
        mb-4
        uppercase
        text-2xl
        text-black/90
        ">
            Get To Know About Us
        </h3>
        
        <h3 class="
        text-4xl
        md:text-6xl
        text-blue-900
        capitalize
        mb-4
        md:mb-5
        ">
            care to training institute
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
            <p>
                Welcome to Care2Training, where professional expertise meets a genuine commitment to empowering individuals on their journey toward success.
            </p>
            
            <p>
                John is the Founder and CEO of Care2Training, bringing years of experience in guiding learners toward achieving their educational and professional goals. As a dedicated trainer and mentor, [he/she] specializes in delivering high-quality training programs designed to equip individuals with the knowledge and skills they need to thrive. With a deep passion for education and personal growth, [he/she] is committed to serving learners both locally and globally.
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
            <img class="
            hidden
            md:block
            w-1/4
            absolute
            " :src="logo" alt="logo" >
            
            <img class="
            md:w-[22rem]
            float-end
            md:ml-[15rem]
            " :src="ceo" alt="ceo" >
            
            <div class="
            circle-shape
            "></div>
            
            <img class="
            hidden
            md:block
            w-[22rem]
            absolute
            right-[9rem]
            top-[19rem]
            z-[-1]
            " :src="passport" alt="passport" >
            
            <div class="
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
                ">23+</h3>
                
                <p class="
                text-xl
                font-semibold
                text-black/90
                ">Years of Experience</p>
            </div>
        </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import logo from '~/assets/images/logo.webp';
import ceo from '~/assets/images/ceo.jpg';
import passport from '~/assets/images/visa-passport.png'

</script>

<style>

</style>