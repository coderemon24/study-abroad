<template>
  <div class="flex items-center justify-center min-h-screen bg-white">
    <div class="
    text-center max-w-lg p-6 
     bg-opacity-20
     backdrop-blur-md rounded-lg 
     flex flex-col items-center justify-center
     ">
      <iframe 
      width="250" height="250"
      src="https://lottie.host/embed/1b734af5-f52b-4405-b1e2-d0e342f71f14/DjrDJMDHZV.lottie"></iframe>
      <h1 class="text-6xl 
      text-blue-700
      font-extrabold mb-4">Oops!</h1>
      <p class="text-xl
      text-blue-700
      mb-6">The page you're looking for doesn't exist.</p>
      <NuxtLink
        to="/"
        class="inline-block px-8 py-3 text-lg font-semibold
        bg-blue-700
        rounded-full
        "
      >
       <i class="fa-solid fa-arrow-left-long mr-2"></i> Go Back To Home
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
const error = useError();
</script>
