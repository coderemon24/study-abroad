<template>
  <div>
     <NuxtLink to="#" class="
     bg-white
     rounded-lg
     shadow-md
     overflow-hidden
     block
     hover:-translate-y-2
     transition-all
     duration-300
     ease-in-out
     group
     "
     >
       <div class="
       overflow-hidden
       ">
        
        <img 
       class="w-full h-70 object-cover
       group-hover:scale-105
       transition-all
       duration-300
       ease-in-out
       " :src="image" alt="">
        
       </div>
       
       <div 
       class="
       p-5
       pt-3
       ">
       
       
         <h2 
         class="
         text-xl
         font-medium
         mb-2
         ">
           {{ title }}
         </h2>
         <p 
         class="
         text-sm
         text-gray-500
         ">
          {{ description }}</p>
         
         <div 
         class="
         flex
         justify-between
         mt-4
         pb-0
         text-gray-400
         text-[12px]
         ">
           <p>
            <i class="fa-regular fa-clock mr-2"></i>
            <span class="text-sm ">{{ date }}</span>
           </p>
           <NuxtLink :to="path" class="
           text-sm
           group
           ">
            Read More 
            <i class="fa-solid text-sm group-hover:ml-2
            transition-all
            duration-300
            linear
            fa-chevron-right ml-1"></i>
           </NuxtLink>
         </div>
         
       </div>
     </NuxtLink>
  </div>
</template>

<script lang="ts" setup>
import blogImg from '~/assets/images/slider/slide-1.jpeg'

defineProps({
  image: {
    type: String,
    default: blogImg
  },
  title: {
    type: String,
    default: 'Study in Australia with scholarship'
  },
  description: {
    type: String,
    default: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos dolores voluptate Lorem ipsum dolor sit amet consectetur adipisicing elit...'
  },
  date: {
    type: String,
    default: '01 Jan 2023, 10:00 AM'
  },
  path: {
    type: String,
    default: '#'
  },
})



</script>

<style scoped>

</style>