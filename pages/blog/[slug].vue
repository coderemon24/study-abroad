<template>
  <div class="text-black/70 pb-10">
    <div class="container mx-auto w-11/12">
      <!----- Breadcrumb ------->
      <div class="breadcrumb pt-8 flex items-center gap-2 text-sm mb-6">
        <NuxtLink class="text-blue-700 hover:underline" to="/">Home</NuxtLink>
        <i class="fa-solid fa-chevron-right text-gray-500"></i>
        <span class="text-gray-600">Blogs</span>
        <i class="fa-solid fa-chevron-right text-gray-500"></i>
        <span class="text-gray-600">{{ blog.title }}</span>
      </div>
    </div>

    <section class="container mx-auto w-11/12">
      <div class="my-10 grid grid-cols-1 md:grid-cols-3 gap-10">
        <!-- main content -->
        <div class="grid grid-cols-1 gap-8 md:col-span-2">
          <div class="p-6 bg-white rounded-lg shadow-lg">
            <img class="w-full rounded-lg" :src="getImgUrl(blog.image)" :alt="blog.title" />

            <div class="mt-4">
              <!-- date and author -->
              <div
                class="flex items-center justify-between text-sm text-gray-500 mb-3"
              >
                <span class="flex items-center gap-2">
                  <i class="fa-solid fa-clock"></i>
                  <span>{{ formatDateTime(blog.created_at) }}</span>
                </span>
                <span class="flex items-center gap-2">
                  <i class="fa-solid fa-user-circle"></i>
                  <span>{{ blog.user?.name }}</span>
                </span>
              </div>

              <!-- tags -->
              <div class="flex gap-2 flex-wrap">
                <span
                  v-for="tag in categories"
                  :key="tag"
                  class="bg-blue-700/20 text-blue-700 px-3 py-1 rounded-full text-xs hover:bg-blue-700/40 hover:text-blue-700 transition-all duration-300 ease-in-out cursor-pointer"
                  >{{ tag.category_name }}</span
                >
              </div>

              <!-- main content -->
              <div class="mt-6">
                <h2 class="text-2xl md:text-3xl font-bold mb-4">
                  {{ blog.title }}
                </h2>
                <p class=" mb-5">
                  <p v-html="blog.description"></p>
                </p>
              </div>
            </div>
          </div>

          
          
        </div>

        <!-- sidebar -->
        <div class="hidden md:block md:col-span-1">
          <div class="sticky top-10">
            <BlogSidebar :blogs="latestBlogs" />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const apiBase = useRuntimeConfig().public.apiBase
const baseUrl = useRuntimeConfig().public.baseUrl

const route = useRoute()
const slug = route.params.slug

const latestBlogs = ref([]);

const blog = ref({});
const categories = ref([]);

const getBlog = async () => {
  try {
    const response = await $fetch(`${apiBase}/blog/${slug}`);
    
    if(response) {
      blog.value = response.data;
    }
    
  } catch (error) {
    console.error(error);
  }
};

const getCategories = async () => {
  try {
    const response = await $fetch(`${apiBase}/categories`);
    
    if(response) {
      categories.value = response.data;
    }
    
  } catch (error) {
    console.error(error);
  }
};

const getBlogs = async () => {
  try {
    const response = await $fetch(`${apiBase}/latest-blogs`);
    
    if(response) {
      latestBlogs.value = response.data;
    }
    
  } catch (error) {
    console.error(error);
  }
};

const getImgUrl = (url: string) => {
  return `${baseUrl}/${url}`
}
const formatDateTime = (timestamp: string) => {
  if (!timestamp) return ''
  const date = new Date(timestamp)
  return new Intl.DateTimeFormat('en-US', {
    month: 'long',   // Mar
    day: '2-digit',   // 12
    year: 'numeric',  // 2023
    hour: '2-digit',  // 10
    minute: '2-digit',// 00
    hour12: true      // AM/PM
  }).format(date)
}


// comments state
const comments = ref<{ name: string; message: string }[]>([])
const newComment = ref({ name: '', message: '' })

// add comment
const addComment = () => {
  if (newComment.value.name && newComment.value.message) {
    comments.value.push({ ...newComment.value })
    newComment.value = { name: '', message: '' }
  }
}



onMounted(() => {
  getBlog();
  getCategories();
  getBlogs();
});

</script>

<style scoped></style>
