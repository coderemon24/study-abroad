<template>
 <div class="bg-white shadow-md text-black/70 p-8 rounded-md flex flex-col md:flex-row gap-10 items-center">
  
  <!-- Contact Form -->
  <form action="#" class="grid grid-cols-1 md:grid-cols-2 gap-5 flex-1 w-full">
    
    <!-- Full Name -->
    <div>
      <label class="block text-sm font-medium">Full Name <span class="text-red-600">*</span></label>
      <input 
        type="text" 
        placeholder="ex: John Doe"
        class="w-full mt-1 p-2 rounded-md ring-1 ring-blue-700 focus:ring-2 focus:ring-blue-700 focus:outline-none"
      >
    </div>

    <!-- Email -->
    <div>
      <label class="block text-sm font-medium">Email <span class="text-red-600">*</span></label>
      <input 
        type="email" 
        placeholder="ex: example@gmail.com"
        class="w-full mt-1 p-2 rounded-md ring-1 ring-blue-700 focus:ring-2 focus:ring-blue-700 focus:outline-none"
      >
    </div>

    <!-- Phone -->
    <div>
      <label class="block text-sm font-medium">Phone</label>
      <input 
        type="number" 
        placeholder="+880 18xx-xxxxxx"
        class="w-full mt-1 p-2 rounded-md ring-1 ring-blue-700 focus:ring-2 focus:ring-blue-700 focus:outline-none"
      >
    </div>

    <!-- Country -->
    <div>
      <label class="block text-sm font-medium">Country</label>
      <input 
        type="text" 
        placeholder="ex: Bangladesh"
        class="w-full mt-1 p-2 rounded-md ring-1 ring-blue-700 focus:ring-2 focus:ring-blue-700 focus:outline-none"
      >
    </div>

    <!-- Subject -->
    <div class="md:col-span-2">
      <label class="block text-sm font-medium">Subject <span class="text-red-600">*</span></label>
      <input 
        type="text" 
        placeholder="ex: Want to know more about..."
        class="w-full mt-1 p-2 rounded-md ring-1 ring-blue-700 focus:ring-2 focus:ring-blue-700 focus:outline-none"
      >
    </div>

    <!-- Message -->
    <div class="md:col-span-2">
      <label class="block text-sm font-medium">Message</label>
      <textarea 
        rows="4"
        placeholder="What's on your mind?"
        class="w-full mt-1 p-2 rounded-md ring-1 ring-blue-700 focus:ring-2 focus:ring-blue-700 focus:outline-none"
      ></textarea>
    </div>

    <!-- Button -->
    <div class="md:col-span-2">
      <button 
        type="submit"
        class="bg-blue-800 w-[10rem] text-white px-6 py-2 rounded-md hover:bg-blue-700 transition duration-300"
      >
        Send
      </button>
    </div>
  </form>

  <!-- Contact Image -->
  <div class="hidden md:flex flex-1 justify-center">
    <img 
      class="w-[80%] object-fit" 
      :src="contactImg" 
      alt="contact-image"
    >
  </div>
</div>

</template>

<script lang="ts" setup>
import contactImg from '~/assets/images/contact.png'

defineProps({
  contactImg: {
    type: String,
    default: contactImg
  },
  contactPage: {
    type: Boolean,
    default: false
  }
})

</script>

<style scoped>

</style>