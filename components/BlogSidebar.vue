<template>
  <div>
    <!-- Search Box -->
    <div class="relative">
      <div class="relative">
        <input
          class="ring-1 ring-blue-700 w-full p-3 rounded-md focus:outline-none focus:ring-2 bg-transparent"
          @focus="searchShow = true"
          @blur="searchShow = false"
          placeholder="Search..."
          type="search"
          name="search"
          id="search"
        />
        <span class="absolute top-1/2 -translate-y-1/2 right-3">
          <i class="fa-solid fa-magnifying-glass"></i>
        </span>
      </div>

      <!-- Search Results Dropdown -->
      <div
        v-if="searchShow"
        class="p-3 bg-white rounded-md shadow-lg mt-2 max-h-[250px] overflow-y-auto grid grid-cols-1 gap-3 absolute w-full z-10"
      >
        <NuxtLink
          v-for="item in blogs"
          :key="item.id"
          :to="item?.slug || '#'"
          class="bg-white flex overflow-hidden rounded-md border border-gray-300"
        >
          <img class="w-20" :src="getImgUrl(item.image)" alt="Blog Image" />
          <p class="py-1 px-3">
            {{ item.title }}
          </p>
        </NuxtLink>
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
          :path="item?.slug"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const props = defineProps({
  blogs: {
    type: Array,
    default: () => []
  }
})

const searchShow = ref(false)

const baseUrl = useRuntimeConfig().public.baseUrl

// Safe image URL function
const getImgUrl = (url: string) => {
  if (!url) return '/placeholder.png' 
  return url.startsWith('http')
    ? url
    : `${baseUrl.replace(/\/$/, '')}/${url.replace(/^\//, '')}`
}

const limitWords = (text: string, count: number) => {
  if (!text) return ''
  const clean = text.replace(/(<([^>]+)>)/gi, '')
  return clean.split(' ').slice(0, count).join(' ') + '...'
}

</script>

<style scoped></style>
