<template>
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
        :image="item.image" 
        :title="item.title" 
        :description="item.description" 
        :date="item.date" 
        :path="item.path" />
        
       </div>
    </section>
    
    <!-- join our community -->
    <section dta-aos="fade-up" class="container mx-auto w-11/12">
      <JoinCommunity />
    </section>
    
  </div>
</template>

<script lang="ts" setup>
import eventImage from '~/assets/images/events/event1.jpg'
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

const events = [
  {
    image: eventImage,
    title: 'Study in Australia with scholarship',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos dolores voluptate Lorem ipsum dolor sit amet consectetur adipisicing elit...',
    date: '01 Jan 2023, 10:00 AM',
    path: '#'
  },
  {
    image: eventImage,
    title: 'Study in Australia with scholarship',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos dolores voluptate Lorem ipsum dolor sit amet consectetur adipisicing elit...',
    date: '01 Jan 2023, 10:00 AM',
    path: '#'
  },
  {
    image: eventImage,
    title: 'Study in Australia with scholarship',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos dolores voluptate Lorem ipsum dolor sit amet consectetur adipisicing elit...',
    date: '01 Jan 2023, 10:00 AM',
    path: '#'
  },
  {
    image: eventImage,
    title: 'Study in Australia with scholarship',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos dolores voluptate Lorem ipsum dolor sit amet consectetur adipisicing elit...',
    date: '01 Jan 2023, 10:00 AM',
    path: '#'
  },
  {
    image: eventImage,
    title: 'Study in Australia with scholarship',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos dolores voluptate Lorem ipsum dolor sit amet consectetur adipisicing elit...',
    date: '01 Jan 2023, 10:00 AM',
    path: '#'
  },
  {
    image: eventImage,
    title: 'Study in Australia with scholarship',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos dolores voluptate Lorem ipsum dolor sit amet consectetur adipisicing elit...',
    date: '01 Jan 2023, 10:00 AM',
    path: '#'
  },
]

</script>

<style>

</style>