<template>
  <div class="overflow-hidden">
    <!-- Loader -->
    <div v-if="pendingBlog || pendingCategories || pendingLatest" class="p-6">
      <PlaceholderLoader />
    </div>

    <!-- Main Content -->
    <div v-else class="text-black/70 pb-10">
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
                <div class="flex items-center justify-between text-sm text-gray-500 mb-3">
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
                  >
                    {{ tag.category_name }}
                  </span>
                </div>

                <!-- main content -->
                <div class="mt-6">
                  <h2 class="text-2xl md:text-3xl font-bold mb-4">
                    {{ blog.title }}
                  </h2>
                  <div class="mb-5 blog-content">
                    <div v-html="blog.description"></div>
                  </div>
                  
                  <!-- author Section -->
                <div class="mt-10 p-4 border-t border-b border-gray-200">
                  
                  <div class="flex gap-4">
                    <img
                      v-if="blog.user?.profile_picture"
                      :src="getImgUrl(blog.user?.profile_picture)"
                      alt="Author Avatar"
                      class="w-20 h-20 
                      rounded-full 
                      border-2 border-blue-700
                      object-cover
                      "
                    />
                    <div class="w-[50%]">
                      <p class="text-gray-500 text-sm">This is an article written by:</p>
                      <h3 class="text-lg font-semibold">{{ blog.user?.name }}</h3>
                      <p class="text-gray-500 text-sm">{{ blog.user?.designation }}</p>
                      <p class="mt-2 text-gray-600 text-sm" v-html="blog.user?.details"></p>
                    </div>
                  </div>
                </div>
                  
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
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue'


const apiBase = useRuntimeConfig().public.apiBase
const baseUrl = useRuntimeConfig().public.baseUrl

const route = useRoute()
const router = useRouter()
const slug = route.params.slug

// States
const latestBlogs = ref<any[]>([])
const blog = ref<any>({})
const categories = ref<any[]>([])

// Loading states
const pendingBlog = ref(true)
const pendingCategories = ref(true)
const pendingLatest = ref(true)

const getBlog = async () => {
  pendingBlog.value = true
  try {
    const response: any = await $fetch(`${apiBase}/blog/${slug}`)
    if (!response || !response.data) {
      router.push('/errors/404')
      return
    }
    blog.value = response.data
  } catch (error) {
    router.push('/errors/404')
  } finally {
    pendingBlog.value = false
  }
}

const getCategories = async () => {
  pendingCategories.value = true
  try {
    const response: any = await $fetch(`${apiBase}/categories`)
    categories.value = response.data
  } catch (error) {
    console.error(error)
  } finally {
    pendingCategories.value = false
  }
}

const getBlogs = async () => {
  pendingLatest.value = true
  try {
    const response: any = await $fetch(`${apiBase}/latest-blogs`)
    latestBlogs.value = response.data
  } catch (error) {
    console.error(error)
  } finally {
    pendingLatest.value = false
  }
}

const getImgUrl = (url: string) => `${baseUrl}/${url}`

const formatDateTime = (timestamp: string) => {
  if (!timestamp) return ''
  const date = new Date(timestamp)
  return new Intl.DateTimeFormat('en-US', {
    month: 'long',
    day: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    hour12: true
  }).format(date)
}

onMounted(() => {
  getBlog()
  getCategories()
  getBlogs()
})

useSeoMeta({
  title: () => blog.value?.meta_title || "Blogs",
  description: () =>
    blog.value?.meta_description ||
    "Learn about Care2 Training’s mission to guide students and professionals worldwide with trusted study abroad, career, and recruitment services.",
  keywords: () =>
    blog.value?.meta_keywords ||
    "Care2 Training, Study Abroad, Career, Recruitment, Education"
});

</script>

<style scoped>
:deep(.blog-content *) {
  all: revert;
  display: revert;
}
</style>
