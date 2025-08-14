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
      
      <!-- about us -->
      <section class="
      py-12
      bg-blue-100/20
      ">
        <div class="
        container mx-auto w-11/12
        ">
        
          <About />
        
        </div>
      </section>
     
   </div>
 </template>
 
 <script lang="ts" setup>

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

 </script>
 
 <style scoped>
 

 </style>