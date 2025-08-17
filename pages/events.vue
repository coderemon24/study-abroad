<template>
  <div class="
  text-black/70
  py-8
  ">
  
   <section class="container mx-auto w-11/12">
        <!----- Breadcrumb ------->
      <div class="breadcrumb flex items-center gap-2 text-sm mb-6">
        <NuxtLink class="text-blue-700 hover:underline" to="/">Home</NuxtLink>
        <i class="fa-solid fa-chevron-right text-gray-500"></i>
        <span class="text-gray-600">Events</span>
      </div>
    </section>
  
    <section class="container mx-auto w-11/12">
      
      <div class="mb-10 mt-10">
            <h4 class="
            text-gray-500
            capitalize
            mb-1
            ">Events</h4>
            <h2 class="
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
       
        <EventCard v-for="(item, index) in events" 
        :key="index" 
        :image="item.image" 
        :title="item.title" 
        :description="item.description" 
        :date="item.date" 
        :path="item.path" />
        
       </div>
    </section>
    
    <section class="container mx-auto w-11/12">
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
            <h1 class="
            text-2xl
            font-semibold
            text-blue-800
            md:text-center
            md:text-4xl
            ">
               Join Our Community of Students.
            </h1>
            <p class="
            text-gray-500
            mt-3
            text-justify
            md:text-center
            ">
               Connect with like-minded learners, share experiences, and grow together in a supportive student community.
            </p>
            <NuxtLink class="
            btn-outline
            " to="#contact">
               <span class="relative z-10">Join Now</span>
            </NuxtLink>
         </div>
      </div>
    </section>
    
  </div>
</template>

<script lang="ts" setup>
import { id } from '@nuxt/ui/runtime/locale/index.js';
import eventImage from '~/assets/images/events/event1.jpg'

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