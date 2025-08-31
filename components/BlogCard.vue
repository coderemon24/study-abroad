<template>
  <div>
     <NuxtLink :to="path" class="
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
     :class="sidebar === true ? sidebarClass : 'block'"
     >
       <div class="
       overflow-hidden
       ">
        
        <img 
       :class="sidebar === true ? 'w-25! h-20!' : ''"
       class="w-full h-70 object-cover
       group-hover:scale-105
       transition-all
       duration-300
       ease-in-out
       " :src="image" alt="">
        
       </div>
       
       <div 
       :class="sidebar === true ? 'p-0! px-3! py-2' : ''"
       class="
       p-5
       pt-3
       ">
       
          <div  
          :class="sidebar === true ? 'hidden' : 'block'"
          class="
          mb-3
          flex
          gap-2
          ">
            <span 
            
            class="
            text-[12px]
            bg-blue-700/20
            text-blue-700
            px-4
            py-0.5
            rounded-full
            hover:bg-blue-700
            hover:text-white
            cursor-pointer
            transition-all
            duration-300
            linear
            ">{{ tags }}</span>
          </div>
       
         <h2 
         :class="sidebar === true ? 'text-lg! p-0!' : ''"
         class="
         text-xl
         font-medium
         mb-2
         ">
           {{ title }}
         </h2>
         <p 
         :class="sidebar === false ? 'hidden' : 'block'"
         class="
         text-sm
         text-gray-500
         ">
          <div v-html="limitWords(description, 10)"></div>  
        </p>
         
        <!--sidebar-->
         <div 
         :class="sidebar === true ? 'hidden' : 'block'"
         class="
         flex
         justify-between
         mt-4
         pb-0
         text-gray-400
         text-[12px]
         ">
           <p>
            <i class="fa-regular fa-calendar mr-2"></i>
            <span class="text-sm ">{{ formatDate(date) }}</span>
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
import blogImg from '~/public/assets/images/slider/slide-1.jpeg'

defineProps({
  image: {
    type: String,
    default: blogImg
  },
  tags: {
    type: String,
    default: 'USA'
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
    default: '01 Jan 2023'
  },
  path: {
    type: String,
    default: '#'
  },
  sidebar: {
    type: Boolean,
    default: false
  }
})


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

const sidebarClass = [
  'flex'
]

</script>

<style scoped>

</style>