<template>
  <div class="overflow-hidden">
    <!-- Loader -->
    <div v-if="pendingBlogs || pendingLatest" class="p-6">
      <div class="h-6 w-40 bg-gray-200 animate-pulse mb-4"></div>
      <div class="h-4 w-full bg-gray-200 animate-pulse mb-2"></div>
      <div class="h-4 w-5/6 bg-gray-200 animate-pulse"></div>
    </div>

    <!-- Main Content -->
    <div v-else class="text-black/70 pb-10">
      <div class="container mx-auto w-11/12">
        <!-- Breadcrumb -->
        <div class="breadcrumb pt-8 flex items-center gap-2 text-sm mb-6">
          <NuxtLink class="text-blue-700 hover:underline" to="/">Home</NuxtLink>
          <i class="fa-solid fa-chevron-right text-gray-500"></i>
          <span class="text-gray-600">Blogs</span>
        </div>
      </div>

      <section class="container mx-auto w-11/12">
        <div class="my-10 grid grid-cols-1 md:grid-cols-3 gap-10">
          <!-- Blogs -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8 md:col-span-2">
            <BlogCard
              v-for="item in blogs"
              :key="item.id"
              data-aos="fade-up"
              :image="getImgUrl(item.image)"
              :title="item.title"
              :description="item.description"
              :tags="item?.category?.category_name"
              :date="item.created_at"
              :path="'/blog/' + item?.slug"
            />

            <!-- Pagination -->
            <div class="col-span-full mt-8 flex justify-center items-center gap-2 flex-wrap">
              <button
                v-if="pagination.current_page > 1"
                @click="fetchBlogs(1)"
                class="px-3 py-1 bg-gray-200 rounded hover:bg-blue-600 hover:text-white"
              >
                First
              </button>

              <button
                v-if="pagination.prev_page_url"
                @click="fetchBlogs(pagination.current_page - 1)"
                class="px-3 py-1 bg-gray-200 rounded hover:bg-blue-600 hover:text-white"
              >
                Prev
              </button>

              <button
                v-for="page in pageNumbers"
                :key="page"
                @click="fetchBlogs(page)"
                :class="[ 
                  'px-3 py-1 rounded',
                  page === pagination.current_page
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-200 hover:bg-blue-600 hover:text-white'
                ]"
              >
                {{ page }}
              </button>

              <button
                v-if="pagination.next_page_url"
                @click="fetchBlogs(pagination.current_page + 1)"
                class="px-3 py-1 bg-gray-200 rounded hover:bg-blue-600 hover:text-white"
              >
                Next
              </button>

              <button
                v-if="pagination.current_page < pagination.last_page"
                @click="fetchBlogs(pagination.last_page)"
                class="px-3 py-1 bg-gray-200 rounded hover:bg-blue-600 hover:text-white"
              >
                Last
              </button>
            </div>
          </div>

          <!-- Sidebar -->
          <div data-aos="fade-right" class="hidden md:block md:col-span-1">
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
import { ref, onMounted, computed } from "vue";
import AOS from "aos";

const apiBase = useRuntimeConfig().public.apiBase;
const baseUrl = useRuntimeConfig().public.baseUrl;

const blogs = ref<any[]>([]);
const latestBlogs = ref<any[]>([]);
const pagination = ref<any>({ current_page: 1, last_page: 1 });
const pendingBlogs = ref(true);
const pendingLatest = ref(true);

const getImgUrl = (url: string) => `${baseUrl}/${url}`;

// Fetch Blogs
const fetchBlogs = async (page = 1) => {
  pendingBlogs.value = true;
  const res: any = await $fetch(`${apiBase}/blogs?per_page=6&page=${page}`);
  blogs.value = res.data;
  pagination.value = res.pagination;
  pendingBlogs.value = false;
};

// Fetch Latest Blogs
const fetchLatestBlogs = async () => {
  pendingLatest.value = true;
  const res: any = await $fetch(`${apiBase}/latest-blogs`);
  latestBlogs.value = res.data;
  pendingLatest.value = false;
};

// Visible page numbers
const pageNumbers = computed(() => {
  const total = pagination.value.last_page;
  const current = pagination.value.current_page;
  const delta = 2;
  const range = [];
  let start = Math.max(1, current - delta);
  let end = Math.min(total, current + delta);
  for (let i = start; i <= end; i++) range.push(i);
  return range;
});

onMounted(() => {
  fetchBlogs();
  fetchLatestBlogs();
  AOS.init({ once: true, duration: 800 });
});
</script>
