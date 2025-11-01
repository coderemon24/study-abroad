<template>
  <!-- Initial Loader -->
  <div id="initial-loader">
    <div class="spinner"></div>
  </div>

  <!-- Main App -->
  <UApp>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </UApp>
</template>

<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  const loader = document.getElementById('initial-loader')
  if(loader){
    loader.style.display = 'none'
  }
})
</script>

<style>
#initial-loader {
  position: fixed;
  top:0; left:0;
  width:100%;
  height:100%;
  background:white;
  display:flex;
  justify-content:center;
  align-items:center;
  z-index:9999;
}

.spinner {
  border: 6px solid #f3f3f3;
  border-top: 6px solid #3498db;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: spin 1s linear infinite;
}
</style>
