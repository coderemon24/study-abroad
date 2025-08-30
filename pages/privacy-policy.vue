<template>
  <div class="
  pb-10
  text-black/70
  ">
    <div class="container mx-auto w-11/12">
        <!----- Breadcrumb ------->
      <div class="breadcrumb pt-8 flex items-center gap-2 text-sm mb-6">
        <NuxtLink class="text-blue-700 hover:underline" to="/">Home</NuxtLink>
        <i class="fa-solid fa-chevron-right text-gray-500"></i>
        <span class="text-gray-600">Privacy Policy</span>
      </div>
    </div>
    
    <section class="container mx-auto w-11/12">
       <div class="
       my-10
        bg-white
       p-10 
       rounded-lg
       shadow
       ">
          <h1 class="
          title-design
          text-3xl
          md:text-4xl
          font-semibold
          mb-5
          text-blue-800
          ">
            Privacy Policy
          </h1>
          
          <div>
            <p v-html="terms.privacy_policy"></p>
          </div>
       </div>
    </section>
    
  </div>
</template>

<script lang="ts" setup>
import AOS from 'aos';

const apiBase = useRuntimeConfig().public.apiBase

const terms = ref({});
const getprivacy = async () => {
  const response = await $fetch(`${apiBase}/get-privacy`)
  if (response) {
    terms.value = response.data;
    console.log(response.data)
  }
}

onMounted(() => {
  nextTick(() => {
    AOS.init({
      once: true, // animation once on scroll
      duration: 800
    });
  });
  
  AOS.refresh();
  
  getprivacy();
  
});

</script>

<style scoped>

</style>