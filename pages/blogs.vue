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
          
            <BlogCard v-for="item in blogs"
            :image="item.image"
            :title="item.title"
            :description="item.description"
            :tags="item.tags"
            :date="item.date"
            :path="item?.path"
            />
            
          </div>
          
          <!-- sidebar -->
<div class="
  hidden
  md:block
  md:col-span-1
">
  <div class="sticky top-10">
    <div class="relative">
      <input class="
        ring-1
        ring-blue-700
        w-full
        p-3
        rounded-md
        focus:outline-none
        focus:ring-2
        bg-transparent
      " 
      @focus="searchShow = true"
      @blur="searchShow = false"
      placeholder="Search..." type="search" name="search" id="search">
       
      <span class="
        absolute
        top-1/2
        -translate-y-1/2
        right-3
      ">
        <i class="fa-solid fa-magnifying-glass"></i>
      </span>
    </div>
    
    <div v-if="searchShow" class="
      p-3
      bg-white
      rounded-md
      shadow-lg
      mt-2
      max-h-[250px]
      overflow-y-auto
      grid
      grid-cols-1
      gap-3
    ">
      <NuxtLink to="#" v-for="item in Array(6)" class="
        bg-white
        flex
        overflow-hidden
        rounded-md
        border
        border-gray-300
      ">
        <img class="w-20" src="~/assets/images/slider/slide-1.jpeg" alt="">
        <p class="py-1 px-3">
          Study in Cana with up to 100% of scholarship
        </p>
      </NuxtLink>
    </div>
    
    <div class="
      mt-10
      bg-white
      p-5
      rounded-lg
      shadow-md
    ">
      <h2 class="
        title-design
        text-2xl
        text-black/90
        mb-3
      ">Recent Blogs</h2>
      
      <div class="
        flex
        flex-col
        gap-4
        mt-10
        max-h-[500px]
        overflow-y-auto
      ">
        <BlogCard :sidebar="true" v-for="item in blogs" 
          :image="item.image" 
          :title="item.title" 
          :description="item.description" 
          :tags="item.tags" 
          :date="item.date" 
          :path="item?.path" />
      </div>
    </div>
  </div>
</div>

       </div>
    </section>
    
  </div>
</template>

<script lang="ts" setup>
import blogImg from '~/assets/images/slider/slide-2.jpeg'
import blogImg1 from '~/assets/images/slider/slide-1.jpeg'

const sidebar = ref(false)

const blogs = [
  {
    image: blogImg,
    title: 'Study in Australia with scholarship 2',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos dolores voluptate Lorem ipsum dolor sit amet consectetur adipisicing elit...',
    tags: ['Canada','UK', 'USA'],
    date: '03 July 2023',
    path: '#'
  },
  
  {
    image: blogImg1,
    title: 'Study in Australia with scholarship 2',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos dolores voluptate Lorem ipsum dolor sit amet consectetur adipisicing elit...',
    tags: ['Canada','UK', 'USA'],
    date: '03 July 2023',
    path: '#'
  },
  {
    image: blogImg,
    title: 'Study in Australia with scholarship 2',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos dolores voluptate Lorem ipsum dolor sit amet consectetur adipisicing elit...',
    tags: ['Canada','UK', 'USA'],
    date: '03 July 2023',
    path: '#'
  },
  
  {
    image: blogImg1,
    title: 'Study in Australia with scholarship 2',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos dolores voluptate Lorem ipsum dolor sit amet consectetur adipisicing elit...',
    tags: ['Canada','UK', 'USA'],
    date: '03 July 2023',
    path: '#'
  },
]

const searchShow = ref(false)

</script>

<style scoped>

</style>