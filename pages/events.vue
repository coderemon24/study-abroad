<template>
  <div class="overflow-hidden">
    <div class="
  text-black/70
  py-8
  ">
  <!-- breadcrumb -->
   <section class="container mx-auto w-11/12">
        <!----- Breadcrumb ------->
      <div class="breadcrumb flex items-center gap-2 text-sm mb-6">
        <NuxtLink class="text-blue-700 hover:underline" to="/">Home</NuxtLink>
        <i class="fa-solid fa-chevron-right text-gray-500"></i>
        <span class="text-gray-600">Events</span>
      </div>
    </section>
  
    <!-- events -->
    <section class="container mx-auto w-11/12">
      
      <div class="mb-10 mt-10">
            <h4 
            data-aos="fade-up"
            class="
            text-gray-500
            capitalize
            mb-1
            ">Events</h4>
            <h2 
            data-aos="fade-up"
            data-aos-delay="200"
            class="
            title-design
            text-3xl
            text-black/90
            ">Discover Our Latest Seminars, Workshops & Student Meets</h2>
          </div>
          
       <div class="
       grid
       grid-cols-1
       md:grid-cols-3
       gap-10
       ">
       
        <EventCard data-aos="fade-up" v-for="(item, index) in events" 
        :key="index" 
        :image="getImgUrl(item.thumbnail)" 
        :title="item.title" 
        :description="limitWords(item.description, 10)" 
        :date="formatDate(item.date)" 
        :path="'/event/' + item.slug" />
        
       </div>
    </section>
    
    <!-- join our community -->
    <section dta-aos="fade-up" class="container mx-auto w-11/12">
      <JoinCommunity />
    </section>
    
  </div>
  </div>
</template>

<script lang="ts" setup>
import AOS from 'aos';

useHead({
  title: 'Care2 Training – Events: Seminars, Workshops & Student Meets',
  meta: [
    {
      name: 'description',
      content: 'Stay updated with Care2 Training\'s latest events including seminars, workshops, and student meets. Join us to explore opportunities in study abroad, work abroad, and recruitment services.'
    }
  ]
});

const apiBase = useRuntimeConfig().public.apiBase
const baseUrl = useRuntimeConfig().public.baseUrl

const events = ref([]);
const getEvents = async () => {
  try {
    const response = await $fetch(`${apiBase}/events`);
    
    if(response)
    {
      events.value = response.data
    }
    
  } catch (err) {
    console.error(err);
  }
}

const getImgUrl = (url: string) => {
  return `${baseUrl}/${url}`
}

const limitWords = (text: string, count: number) => {
  if (!text) return '';
  const clean = text.replace(/(<([^>]+)>)/gi, "");
  return clean.split(" ").slice(0, count).join(" ") + "...";
};

const formatDate = (dateString: string) => {
  if (!dateString) return ''
  const date = new Date(dateString)
  return new Intl.DateTimeFormat('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  }).format(date)
}

onMounted(() => {
  nextTick(() => {
    AOS.init({
      once: true, // animation once on scroll
      duration: 800
    });
  });
  
  AOS.refresh();
  
  getEvents();
  
});


</script>

<style>

</style>