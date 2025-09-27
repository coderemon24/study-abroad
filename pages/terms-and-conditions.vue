<template>
  <div class="overflow-hidden">
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
            Terms & Conditions
          </h1>
          
          <div class="
          ">
            <p v-html="terms?.terms_conditions"></p>
          </div>
       </div>
    </section>
    
  </div>
  </div>
</template>

<script lang="ts" setup>
import AOS from 'aos';

useHead({
  title: 'Care2 Training – Terms & Conditions',
  meta: [
    {
      name: 'description',
      content: 'Learn about Care2 Training’s mission to guide students and professionals worldwide with trusted study abroad, career, and recruitment services.'
    }
  ]
});

const apiBase = useRuntimeConfig().public.apiBase

const terms :any = ref({});
const getTerms = async () => {
  const response = await $fetch(`${apiBase}/get-terms`)
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
  
  getTerms();
  
});


const {data: metaInfo} = await useAsyncData('meta-info', () => 
  $fetch(`${apiBase}/meta-info/terms`)
)

const metaData = ref({});

if (metaInfo.value) {
  metaData.value = metaInfo.value.data;
}

useSeoMeta({
  title: () => metaData.value?.title || "Terms & Conditions | Care2 Training",
  description: () =>
    metaData.value?.description ||
    "Learn about Care2 Training’s mission to guide students and professionals worldwide with trusted study abroad, career, and recruitment services.",
  keywords: () =>
    metaData.value?.keywords ||
    "Care2 Training, Study Abroad, Career, Recruitment, Education"
});

</script>

<style scoped>

</style>