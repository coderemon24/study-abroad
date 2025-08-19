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
          <BlogSidebar :blogs="blogs" />
          </div>
        </div>

       </div>
    </section>
    
  </div>
</template>

<script lang="ts" setup>
import blogImg from '~/assets/images/slider/slide-2.jpeg'
import blogImg1 from '~/assets/images/slider/slide-1.jpeg'

const blogs = [
  {
    image: blogImg,
    title: 'Study in Australia with scholarship 2',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos dolores voluptate Lorem ipsum dolor sit amet consectetur adipisicing elit...',
    tags: ['Canada','UK', 'USA'],
    date: '03 July 2023',
    path: '/blog/study-in-australia-with-scholarship'
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



</script>

<style scoped>

</style>