<template>
  <div class="
  py-8
  text-black/70
  ">
  
    <section class="container mx-auto w-11/12">
        <!----- Breadcrumb ------->
      <div class="breadcrumb flex items-center gap-2 text-sm mb-6">
        <NuxtLink class="text-blue-700 hover:underline" to="/">Home</NuxtLink>
        <i class="fa-solid fa-chevron-right text-gray-500"></i>
        <span class="text-gray-600">Country</span>
        <i class="fa-solid fa-chevron-right text-gray-500"></i>
        <span class="text-gray-600">Australia</span>
      </div>
    </section>
    
    <!-- country hero -->
     <section class="
     relative
     before:content-['']
     before:absolute
     before:top-0
     before:left-0
     before:w-full
     before:h-full
     before:bg-gradient-to-r
     before:to-blue-700/80
     before:from-purple-700
     country_hero
     "
     >
        <div class="container mx-auto w-11/12 
        relative z-10
        top-0
        text-white
        px-5
        pt-12
        grid
        grid-cols-2
        items-end
        ">
           <div class="
           pb-12
           md:pb-[12rem]
           ">
             <h1 class="
             text-4xl
             md:text-8xl
             md:font-extrabold
             font-semibold
             mb-2
             ">Study in Australia</h1>
             <p class="
             
             ">Apply for August 2025 Session</p>
           </div>
           
           <div>
             <img class="
             w-full
             md:w-3/4
             " :src="girl" alt="">
           </div>
        </div>
     </section>
     
    <!-- offer cards -->
     <section class="
     py-12
     ">
        <div class="
        container 
        mx-auto 
        w-11/12
        grid
        grid-cols-1
        md:grid-cols-3
        gap-8
        md:gap-15
        ">
            <OfferCard v-for="item in cardItems" 
            :icon="item.icon" 
            :title="item.title" 
            :description="item.description" 
            class="
            bg-white
            shadow-xl
            "
            />
        </div>
     </section>
     
    <!-- our partners -->
     <section class="
     py-12
     bg-white
     ">
        <div class="
        container
        mx-auto
        w-11/12
        ">
        <div class="mb-10">
            <h4 class="
            text-gray-500
            capitalize
            mb-1
            ">Country Partners</h4>
            <h2 class="
            title-design
            text-3xl
            text-black/90
            ">
                Our Australian University Partners
            </h2>
          </div>
          
          <div class="
          flex
          flex-row
          flex-wrap
          gap-0
          justify-center
          items-center
          md:gap-5
          ">
            <img 
            v-for="(item, index) in Array(40)"
            class="
            w-1/3
            md:w-1/5
            lg:w-1/6
            xl:w-1/7
            partner
            grayscale
            hover:grayscale-0
            cursor-pointer
            transition-all
            duration-300
            ease-in-out
            " :src="utas" alt="">
          </div>
            
        </div>
     </section>
     
    <!-- our partners -->
     <section class="
     bg-blue-100/10
     py-12
     pb-0
     ">
        <div class="
        container
        mx-auto
        w-11/12
        ">
        <div class="mb-10">
            <h4 class="
            text-gray-500
            capitalize
            mb-1
            ">Choose Your University</h4>
            <h2 class="
            title-design
            text-3xl
            text-black/90
            ">
                Why Study in Australia
            </h2>
          </div>
          
          <WhyStudyCountry />
            
        </div>
     </section>
    
  </div>
</template>

<script lang="ts" setup>
import girl from '~/assets/images/country/australian.webp';
import utas from '~/assets/images/country/utas.png';

const cardItems = ref([
    {
        icon: 'fa-solid fa-graduation-cap',
        title: 'Scholarship',
        description: 'Up to 50% grant or scholarship among the best universities.',
    },
    {
        icon: 'fa-solid fa-briefcase',
        title: 'Work Rights',
        description: 'Up to 5-Years of post-study work rights',
    },
    {
        icon: 'fa-solid fa-earth-europe',
        title: 'Quick Visa',
        description: 'Personalized VISA service tailored to your individual need',
    },
])

</script>

<style>

.country_hero{
    background-image: url('~/assets/images/country/australia.jpg');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
}


</style>