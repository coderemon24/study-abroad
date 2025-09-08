<template>
  <div>
    <div class="
      mt-10
      bg-white
      p-5
      md:p-10
      rounded-lg
      shadow
      ">
        <div class="
          mb-3
          md:w-[60%]
          md:mx-auto
          md:text-center
          md:flex
          md:flex-col
          md:items-center
          ">
            <h1 
            data-aos="fade-up"
            data-aos-delay="200"
            class="
            text-2xl
            font-semibold
            text-blue-800
            md:text-center
            md:text-4xl
            ">
               Join Our Community of Students.
            </h1>
            <p 
            data-aos="fade-up"
            data-aos-delay="400"
            class="
            text-gray-500
            mt-3
            text-justify
            md:text-center
            ">
               Connect with like-minded learners, share experiences, and grow together in a supportive student community.
            </p>
            <NuxtLink 
            data-aos="fade-up"
            data-aos-delay="600"
            class="
            btn-outline
            " to="https://www.facebook.com/care2traininguk" target="_blank">
               <span class="relative z-10">Join Now</span>
            </NuxtLink>
         </div>
      </div>
  </div>
</template>

<script lang="ts" setup>
import AOS from 'aos';

onMounted(() => {
  nextTick(() => {
    AOS.init({
      once: true, // animation once on scroll
      duration: 800
    });
  });
  
  AOS.refresh();
});
</script>

<style>

</style>