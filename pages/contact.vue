<template>
  <div class="py-8">
      <div class="container w-11/12 mx-auto">
          <!----- Breadcrumb ------->
          <div class="breadcrumb flex items-center gap-2 text-sm mb-6">
            <NuxtLink class="text-blue-700 hover:underline" to="/">Home</NuxtLink>
            <i class="fa-solid fa-chevron-right text-gray-500"></i>
            <span class="text-gray-600">Contact</span>
          </div>
          <!---page title-->
          <div class="content bg-white p-3 rounded-lg shadow">
            <h1 class="text-3xl uppercase font-medium text-black/80 text-center">Contact Us</h1>
          </div>
          <!----- page contents ----->
          <div class="
          md:flex
          gap-5
          ">
            
            <div class="
            my-6
            bg-white
            p-6
            rounded-lg
            w-full
            md:w-1/2
            shadow-md
            ">
               <form action="#" class="
               flex
               flex-col
               gap-5
               ">
                  <div class="
                  ">
                     <label for="name" class="">
                        Name <span class="text-red-600">*</span>
                     </label>
                     <input type="text" class="
                     w-full 
                     border
                      border-blue-700 p-2 
                      rounded-md 
                      focus:outline-blue-700"
                      placeholder="ex: John Doe"
                      >
                  </div>
                  
                  <div class="
                  ">
                     <label for="name" class="">
                        Phone <span class="text-red-600">*</span>
                     </label>
                     <input type="number" class="
                     w-full 
                     border
                      border-blue-700 p-2 
                      rounded-md 
                      focus:outline-blue-700
                      appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none 
              [&::-webkit-inner-spin-button]:m-0 [&::-webkit-outer-spin-button]:m-0
                      "
                      placeholder="+880 18xx-xxxxxx"
                      >
                  </div>
                  
                  <div class="
                  ">
                     <label for="name" class="">
                        Email <span class="text-red-600"></span>
                     </label>
                     <input type="text" class="
                     w-full 
                     border
                      border-blue-700 p-2 
                      rounded-md 
                      focus:outline-blue-700"
                      placeholder="ahmedemon.dev24@gmail.com"
                      >
                  </div>
                  
                  <div class="
                  ">
                     <label for="name" class="">
                        Subject <span class="text-red-600">*</span>
                     </label>
                     <input type="text" class="
                     w-full 
                     border
                      border-blue-700 p-2 
                      rounded-md 
                      focus:outline-blue-700"
                      placeholder="ex: Software Development"
                      >
                  </div>
                  
                  <div class="
                  ">
                     <label for="name" class="">
                        Message <span class="text-red-600">*</span>
                     </label>
                     <textarea class="
                     w-full 
                     border
                      border-blue-700 p-2 
                      rounded-md 
                      focus:outline-blue-700"
                      placeholder="What's on your mind?"
                      ></textarea>
                  </div>
                  
                  
                  <div class="
                  ">
                     <button class="
                     bg-blue-800
                     text-white
                     w-full
                     p-2
                     rounded-md
                     hover:bg-blue-700
                     hover:text-white
                     cursor-pointer
                     transition-all
                     ease-in-out
                     duration-300
                     ">Send</button>
                  </div>
                  
               </form>
            </div>
            
            <div class="
            py-2
            w-full
            md:w-1/2
            ">
              <div>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3514.0085844141754!2d90.3868791!3d23.7507284!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b9ac5fce59cb%3A0xfd3e17cbaa2f7805!2sKaizen%20IT%20Ltd.!5e1!3m2!1sen!2sbd!4v1755167494499!5m2!1sen!2sbd" width="100%" style="border:0;"  class="
                h-[400px]
                md:h-[500px]
                md:mt-4
                rounded-lg
                " loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
              </div>
            </div>
          </div>
      </div>
  </div>
</template>

<script lang="ts" setup>

</script>

<style>

</style>