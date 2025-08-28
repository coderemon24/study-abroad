<template>
  <div class="
  grid
  grid-cols-1
  gap-5
  md:grid-cols-3
  ">
  
    <div
    data-aos="fade-left"
    class="
    text-center
    p-5
    ">
      <span class="
      w-22
      h-22
      flex
      items-center
      justify-center
      rounded-full
      bg-green-700/10
      text-green-600
      text-3xl
      mx-auto
      mb-3
      ">
        <i class="fa-regular fa-face-smile"></i>
      </span>
      <h2 class="
      text-xl
      text-black/90
      mb-1
      ">
        {{ props.data?.get_consultation }}
      </h2>
      <p class="
      text-gray-600
      ">
        {{ props.data?.consultation_des }}
      </p>
      
      <div class="
      hidden
      md:block
      relative
      after:absolute
      after:content-['']
      after:h-[2px]
      after:w-[5rem]
      after:bg-green-600
      after:bottom-0
      after:right-[-3.5rem]
      after:top-[-8.5rem]
      
      before:absolute
      before:content-['']
      before:border-2
      before:border-green-600
      before:w-4
      before:h-4
      before:border-t-transparent
      before:border-l-transparent
      before:top-[-8.95rem]
      before:right-[-3.5rem]
      before:rotate-[-45deg]
      "></div>
      
    </div>
  
    <div
    data-aos="fade-down"
    data-aos-delay="200"
    class="
    text-center
    p-5
    ">
      <span class="
      w-22
      h-22
      flex
      items-center
      justify-center
      rounded-full
      bg-purple-700/10
      text-purple-600
      text-3xl
      mx-auto
      mb-3
      ">
        <i class="fa-regular fa-user"></i>
      </span>
      <h2 class="
      text-xl
      text-black/90
      mb-1
      ">
       {{ props.data?.book_appointment }}
      </h2>
      <p class="
      text-gray-600
      ">
        {{ props.data?.app_des }}
      </p>
      
      <div class="
      hidden
      md:block
      relative
      after:absolute
      after:content-['']
      after:h-[2px]
      after:w-[5rem]
      after:bg-purple-600
      after:bottom-0
      after:right-[-3.5rem]
      after:top-[-8.5rem]
      
      before:absolute
      before:content-['']
      before:border-2
      before:border-purple-600
      before:w-4
      before:h-4
      before:border-t-transparent
      before:border-l-transparent
      before:top-[-8.95rem]
      before:right-[-3.5rem]
      before:rotate-[-45deg]
      "></div>
      
    </div>
  
    <div 
    data-aos="fade-right"
    data-aos-delay="400"
    class="
    text-center
    p-5
    ">
      <span class="
      w-22
      h-22
      flex
      items-center
      justify-center
      rounded-full
      bg-blue-700/10
      text-blue-600
      text-3xl
      mx-auto
      mb-3
      ">
        <i class="fa-regular fa-paper-plane"></i>
      </span>
      <h2 class="
      text-xl
      text-black/90
      mb-1
      ">
        {{ props.data?.fly_destination }}
      </h2>
      <p class="
      text-gray-600
      ">
        {{ props.data?.destination_des }}
      </p>
    </div>
    
  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  data: Object,
  default: () => ({})
})

</script>

<style>

</style>