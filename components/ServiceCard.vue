<template>
  <div class="
  bg-white
  p-6
  rounded-lg
  shadow-md
  relative
  cursor-pointer
  hover:bg-blue-700/10
  hover:-translate-y-2
  transition-all
  duration-300
  ease-in-out
  overflow-hidden
  group
  ">
  
    <span class="
    text-8xl
    text-blue-700/5
    absolute
    top-0
    right-8
    group-hover:text-blue-700/40
    transition-all
    duration-300
    ease-in-out
    ">
      <i class="fa-solid fa-quote-right"></i>
    </span>
    
    <span class="
    text-3xl
    text-blue-700
    bg-blue-700/10
    w-15
    h-15
    flex
    items-center
    justify-center
    rounded-full
    mb-3
    group-hover:bg-white
    group-hover:ring-2
    group-hover:ring-blue-800/40
    transition-all
    duration-300
    ease-in-out
    ">
      <i :class="icon"></i>
    </span>
  
     <h2 class="
     text-2xl
     text-black/70
     mb-2
     font-medium
     ">{{ title }}</h2>
     
     <p class="
     text-gray-600
     text-sm
     ">
      {{ limitWords(description, 15) }}
     </p>
     
     <NuxtLink 
     :to="path"
     class="
    text-blue-700
    bg-blue-700/10
    py-2
    px-4
    rounded-full
    text-sm
    relative
    mt-4
    opacity-0
    translate-y-5
    inline-block
    group-hover:opacity-100
    group-hover:translate-y-0
    transition-all
    duration-500
    ease-in-out
    hover:bg-white
    hover:ring-2
    hover:ring-blue-700/30
    
    hover:[&>span]:pl-2
" href="#">
    Read More
    <span class="inline-block transition-all duration-300 ease-in-out">
        <i class="fa-solid fa-arrow-right-long"></i>
    </span>
     </NuxtLink>



     
  </div>
</template>

<script lang="ts" setup>

defineProps({
    icon:{
        type: String,
        default: 'fa-solid fa-graduation-cap'
    },
    title:{
      type: String,
      default: 'Career Counselling'
    },
    description:{
      type: String,
      default: 'Our experts offer personalized career advice to help you choose the right path whether it\'s higher education, vocational training, or employment aligned'
    },
    path: {
      type: String,
      default: '#'
    }
});

const limitWords = (text: string, count: number) => {
  if (!text) return '';
  const clean = text.replace(/(<([^>]+)>)/gi, "");
  return clean.split(" ").slice(0, count).join(" ") + "...";
};

</script>

<style>

</style>