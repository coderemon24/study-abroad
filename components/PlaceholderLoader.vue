<template>
  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4 mt-8">
    <div v-for="n in 3" :key="n" class="rounded-lg shadow-sm bg-white p-4" aria-hidden="true">
      <div class="h-50 rounded-md bg-gray-200 animate-pulse mb-4"></div>
      <div class="h-4 bg-gray-200 rounded w-3/4 mb-3 animate-pulse"></div>
      <div class="h-3 bg-gray-200 rounded w-3/4 mb-2 animate-pulse"></div>
      <div class="h-3 bg-gray-200 rounded w-2/3 mb-2 animate-pulse"></div>
      <div class="h-3 bg-gray-200 rounded w-1/2 mb-2 animate-pulse"></div>
      <div class="flex items-center mt-4">
        <div class="w-10 h-10 rounded-full bg-gray-200 animate-pulse"></div>
        <div class="ml-3 w-1/2">
          <div class="h-3 bg-gray-200 rounded mb-2 animate-pulse"></div>
          <div class="h-3 bg-gray-200 rounded w-2/3 animate-pulse"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// কোন JS দরকার নেই — শুধু রেন্ডারিং
</script>
