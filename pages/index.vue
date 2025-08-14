<template>
   <div>
    <!-- hero section-->
     <section>
          <AppSwiper />
     </section>
 
     <!-- what we offer -->
      <section class="
      py-12
      bg-gray-100
      ">
        <div class="
        container mx-auto w-11/12
        ">
          <div class="
          grid
          grid-cols-1
          md:grid-cols-3
          gap-5
          ">
            <OfferCard
            v-for="item in cardItems"
            :icon="item.icon" 
            :title="item.title"
            :description="item.description"
            class="
            bg-white
            shadow-xl
            " />
          </div>
        </div>
      </section>
      
      <!-- student counselling -->
      <section class="
      py-12
      bg-blue-100/20
      ">
        <div class="
        container mx-auto w-11/12
        ">
        
          <Counselling />
        
        </div>
      </section>
      
      <!-- about us -->
      <section class="
      py-12
      bg-gray-50
      ">
        <div class="
        container mx-auto w-11/12
        ">
          <About />
        </div>
      </section>
      
      <!-- our services -->
      <section class="
      py-12
      bg-gray-100
      ">
        <div class="
        container mx-auto w-11/12
        ">
          <div class="mb-10">
            <h4 class="
            text-gray-500
            capitalize
            mb-1
            ">Services</h4>
            <h2 class="
            title-design
            text-3xl
            text-black/90
            ">What We Offer</h2>
          </div>
        
          <div class="
          grid
          grid-cols-1
          md:grid-cols-3
          items-center
          gap-5
          ">
            <ServiceCard v-for="source in serviceItems" 
          :icon="source.icon"
          :title="source.title"
          :description="source.description"
          />
          </div>
          
        </div>
      </section>
     
   </div>
 </template>
 
 <script lang="ts" setup>
import Counselling from '~/components/Counselling.vue';


const cardItems = ref([
    {
        icon: 'fa-solid fa-graduation-cap',
        title: 'Up To 100% Scholarship',
        description: 'You might be eligible for a scholarship, grant, or funding.',
    },
    {
        icon: 'fa-solid fa-user-graduate',
        title: 'Free Consultations',
        description: 'Book a complimentary appointment and discuss your needs over a cup of coffee.',
    },
    {
        icon: 'fa-solid fa-headset',
        title: '24/7 Support',
        description: 'Providing uninterrupted support to assist you anytime, every day.',
    },
])

const serviceItems = ref([
    {
        icon: 'fa-solid fa-graduation-cap',
        title: 'Admission Guidance',
        description: 'You might be eligible for a scholarship, grant, or funding.',
    },
    {
        icon: 'fa-solid fa-graduation-cap',
        title: 'Career Counseling',
        description: 'Book a complimentary appointment and discuss your needs over a cup of coffee.',
    },
    {
        icon: 'fa-solid fa-headset',
        title: 'Visa Application Support',
        description: 'Providing uninterrupted support to assist you anytime, every day.',
    },
    {
        icon: 'fa-solid fa-graduation-cap',
        title: 'Scholarship Assistance',
        description: 'Providing uninterrupted support to assist you anytime, every day.',
    },
    {
        icon: 'fa-solid fa-user-graduate',
        title: 'Job Placement Service',
        description: 'Providing uninterrupted support to assist you anytime, every day.',
    },
    {
        icon: 'fa-solid fa-headset',
        title: 'Language Coaching',
        description: 'Providing uninterrupted support to assist you anytime, every day.',
    },
])

 </script>
 
 <style scoped>
 

 </style>