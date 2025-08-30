<template>
  <div class="
  text-black/70
  pb-10
  ">
    <div class="container mx-auto w-11/12">
        <!----- Breadcrumb ------->
      <div class="breadcrumb pt-8 flex items-center gap-2 text-sm mb-6">
        <NuxtLink class="text-blue-700 hover:underline" to="/">Home</NuxtLink>
        <i class="fa-solid fa-chevron-right text-gray-500"></i>
        <span class="text-gray-600">Blogs</span>
      </div>
    </div>
    
    <section class="container mx-auto w-11/12">
       <div class="
       my-10
       grid
       grid-cols-1
       md:grid-cols-3
       gap-10
       ">
        
          <!-- main content -->
          <div class="
          grid
          grid-cols-1
          md:grid-cols-2
          gap-8
          md:col-span-2
          ">
          
            <BlogCard data-aos="fade-up" v-for="item in blogs"
            :image="getImgUrl(item.image)"
            :title="item.title"
            :description="item.description"
            :tags="item?.category?.category_name"
            :date="item.created_at"
            :path="'/blog/' + item?.slug"
            />
            
          </div>
          
          <!-- sidebar -->
        <div 
        data-aos="fade-right"
        class="
          hidden
          md:block
          md:col-span-1
        ">
        <div class="sticky top-10">
          <BlogSidebar :blogs="latestBlogs" />
          </div>
        </div>

       </div>
    </section>
    
  </div>
</template>

<script lang="ts" setup>
import AOS from 'aos';

const apiBase = useRuntimeConfig().public.apiBase
const baseUrl = useRuntimeConfig().public.baseUrl

const blogs = ref([]);
const latestBlogs = ref([]);

const getBlogs = async () => {
  const response: any = await $fetch(`${apiBase}/blogs`);
  if (response) {
    blogs.value = response.data;
  }
}

const getLatestBlogs = async () => {
  const response: any = await $fetch(`${apiBase}/latest-blogs`);
  if (response) {
    latestBlogs.value = response.data;
  }
}

const getImgUrl = (url: string) => {
  return `${baseUrl}/${url}`
}



onMounted(() => {
  nextTick(() => {
    AOS.init({
      once: true, // animation once on scroll
      duration: 800
    });
  });
  
  AOS.refresh();
  
  getBlogs();
  getLatestBlogs();
  
});

</script>

<style scoped>

</style>