<template>
  <div class="
  py-8
  text-black/70
  ">
    <!-- breadcrumb -->
   <section class="container mx-auto w-11/12">
        <!----- Breadcrumb ------->
      <div class="breadcrumb flex items-center gap-2 text-sm mb-6">
        <NuxtLink class="text-blue-700 hover:underline" to="/">Home</NuxtLink>
        <i class="fa-solid fa-chevron-right text-gray-500"></i>
        <span class="text-gray-600">Book Appointment</span>
      </div>
    </section>
    
    <section>
      <div class="container mx-auto w-11/12">
        <h1 class="
        text-3xl
        font-semibold
        md:text-4xl
        title-design
        mt-10
        ">Book an Appointment</h1>
     
      
      <div class="
      grid
      grid-cols-1
      md:grid-cols-3
      mt-12
      bg-white
      rounded-xl
      overflow-hidden
      shadow-lg
      ">
         <div class="p-8
         md:col-span-2
         ">
          <form action="#" class="
          grid
          grid-cols-1
          gap-5
          md:grid-cols-2
          ">
            
            <div>
              <label class="block text-sm font-medium">
               Full Name <span class="text-red-600">*</span>
              </label>
              <input type="text" placeholder="ex: John Doe" 
              class="
               ring-1
               ring-blue-700
               focus:ring-2
               focus:ring-blue-700
               focus:outline-none
               w-full
               mt-1
               p-2
               rounded-md
              ">
            </div>
            
            <div>
              <label class="block text-sm font-medium">
               Email <span class="text-red-600">*</span>
              </label>
              <input type="text" placeholder="ex: John Doe" 
              class="
               ring-1
               ring-blue-700
               focus:ring-2
               focus:ring-blue-700
               focus:outline-none
               w-full
               mt-1
               p-2
               rounded-md
              ">
            </div>
            
            <div>
              <label class="block text-sm font-medium">
               Phone <span class="text-red-600">*</span>
              </label>
              <input type="text" placeholder="ex: John Doe" 
              class="
               ring-1
               ring-blue-700
               focus:ring-2
               focus:ring-blue-700
               focus:outline-none
               w-full
               mt-1
               p-2
               rounded-md
              ">
            </div>
            
            <div>
              <label class="block text-sm font-medium">
               Country <span class="text-red-600">*</span>
              </label>
              <input type="text" placeholder="ex: John Doe" 
              class="
               ring-1
               ring-blue-700
               focus:ring-2
               focus:ring-blue-700
               focus:outline-none
               w-full
               mt-1
               p-2
               rounded-md
              ">
            </div>
            
            
            
            <div>
              <label class="block text-sm font-medium">
               IELTS/TOEFL <span class="text-red-600">*</span>
              </label>
              <input type="text" placeholder="ex: John Doe" 
              class="
               ring-1
               ring-blue-700
               focus:ring-2
               focus:ring-blue-700
               focus:outline-none
               w-full
               mt-1
               p-2
               rounded-md
              ">
            </div>
            
            <div>
              <label class="block text-sm font-medium">
               IELTS Score <span class="text-red-600">*</span>
              </label>
              <input type="text" placeholder="ex: John Doe" 
              class="
               ring-1
               ring-blue-700
               focus:ring-2
               focus:ring-blue-700
               focus:outline-none
               w-full
               mt-1
               p-2
               rounded-md
              ">
            </div>
            
            <div class="
            md:col-span-2
            ">
              <label class="block text-sm font-medium">
               Subject <span class="text-red-600">*</span>
              </label>
              <input type="text" placeholder="ex: John Doe" 
              class="
               ring-1
               ring-blue-700
               focus:ring-2
               focus:ring-blue-700
               focus:outline-none
               w-full
               mt-1
               p-2
               rounded-md
              ">
            </div>
            
            <div class="
            md:col-span-2
            ">
              <label class="block text-sm font-medium">
               Inquery <span class="text-red-600">*</span>
              </label>
              <textarea class="
              w-full
              mt-1
              p-2
              rounded-md
              ring-1
              ring-blue-700
              focus:ring-2
              focus:ring-blue-700
              focus:outline-none
              
              " placeholder="What's on your mind?"></textarea>
            </div>
            
            <div>
              <button type="submit" class="
              bg-blue-800
              w-[10rem]
              text-white
              px-6
              py-2
              rounded-md
              hover:bg-blue-700
              transition
              duration-300
              ">Send</button>
            </div>
              
          </form>
         </div>
         <div >
          <img class="
          w-full
          h-full
          " :src="img" alt="">
         </div>
      </div>
       </div>
      
    </section>
    
  </div>
</template>

<script lang="ts" setup>
import img from '~/assets/images/appointment.jpg'

</script>

<style>

</style>