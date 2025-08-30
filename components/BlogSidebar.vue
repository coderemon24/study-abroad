<template>
  <div>
    <!-- Search Box -->
    <div class="relative">
      <input
        type="search"
        v-model="query"
        @focus="searchShow = true"
        @blur="searchShow = false"
        placeholder="Search..."
        class="ring-1 ring-blue-700 w-full p-3 rounded-md focus:outline-none focus:ring-2 bg-transparent"
      />
      <span class="absolute top-1/2 -translate-y-1/2 right-3">
        <i class="fa-solid fa-magnifying-glass"></i>
      </span>

      <!-- Search Results Dropdown -->
      <div
        v-if="searchShow && query"
        class="p-3 bg-white rounded-md shadow-lg mt-2 max-h-[250px] overflow-y-auto grid grid-cols-1 gap-3 absolute w-full z-10"
      >
        <NuxtLink
          v-for="item in searchResults"
          :key="item.id"
          :to="'/blog/' + item.slug"
          class="bg-white flex overflow-hidden rounded-md border border-gray-300"
        >
          <img class="w-20" :src="getImgUrl(item.image)" alt="Blog Image" />
          <p class="py-1 px-3">
            {{ limitWords(item.title, 10) }}
          </p>
        </NuxtLink>
        
        <!-- no results found -->
        <p v-if="searchResults.length == 0" class="text-sm text-center text-gray-600">No results found</p>
        
      </div>
    </div>

    <!-- Recent Blogs -->
    <div class="mt-10 bg-white p-5 rounded-lg shadow-md">
      <h2 class="title-design text-2xl text-black/90 mb-3">Recent Blogs</h2>

      <div class="flex flex-col gap-4 mt-10 max-h-[500px] overflow-y-auto">
        <BlogCard
          v-for="item in blogs"
          :key="item.id"
          :sidebar="true"
          :image="getImgUrl(item.image)"
          :title="item.title"
          :description="item.description"
          :tags="item.tags"
          :date="item.date"
          :path="'/blog/' + item.slug"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, watch } from 'vue'

const props = defineProps({
  blogs: {
    type: Array,
    default: () => []
  }
})

const searchShow = ref(false)
const query = ref('')
const searchResults = ref([])

const baseUrl = useRuntimeConfig().public.baseUrl
const apiBase = useRuntimeConfig().public.apiBase

// Watch query for realtime search
watch(query, async (val) => {
  if (!val) {
    searchResults.value = []
    return
  }
  try {
    const data = await $fetch(`${apiBase}/blogs/search`, {
      params: { q: val }
    })
    searchResults.value = data.data
  } catch (err) {
    console.error(err)
    searchResults.value = []
  }
})

// Safe image URL
const getImgUrl = (url: string) => {
  if (!url) return '/placeholder.png'
  return url.startsWith('http') ? url : `${baseUrl.replace(/\/$/, '')}/${url.replace(/^\//, '')}`
}

// Limit words for title/description
const limitWords = (text: string, count: number) => {
  if (!text) return ''
  const clean = text.replace(/(<([^>]+)>)/gi, '')
  const words = clean.split(' ')
  return words.slice(0, count).join(' ') + (words.length > count ? '...' : '')
}
</script>

<style scoped>
/* Optional scrollbar styling */
::-webkit-scrollbar {
  width: 6px;
}
::-webkit-scrollbar-thumb {
  background-color: rgba(0,0,0,0.2);
  border-radius: 3px;
}
</style>
