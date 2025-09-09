<template>
  <div class="
  p-7
  rounded-lg
  flex
  flex-col
  items-center
  gap-2
  text-black/90
  group
  cursor-pointer
  ">
     <span class="
     text-3xl
     bg-blue-700
     w-16
     h-16
     flex
     items-center
     justify-center
     rounded-full
     group-hover:bg-blue-800
     group-hover:text-white
     transition-all
     ease-in-out
     duration-300
     text-white
     ">
        <i :class="icon"></i>
     </span>
     <div class="">
        <h3 class="
        text-center
        text-xl
        font-semibold
        leading-12
        ">{{ title }}</h3>
        <p class="
        text-center
        text-gray-600
        ">
            {{ description }}
        </p>
     </div>
  </div>
</template>

<script lang="ts" setup>

const props = defineProps({
  icon: String,
  title: String,
  description: String,
})

</script>

<style>

</style>