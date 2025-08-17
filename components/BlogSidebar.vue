<template>
  <div>

    <div class="
    relative
    ">
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
      " @focus="searchShow = true" @blur="searchShow = false" placeholder="Search..." type="search" name="search"
          id="search">

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
      absolute
      w-full
      z-10
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
        <BlogCard :sidebar="true" v-for="item in blogs" :image="item.image" :title="item.title"
          :description="item.description" :tags="item.tags" :date="item.date" :path="item?.path" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>

defineProps({
  blogs: {
    type: Array,
    default: []
  },
  searchShow: {
    type: Boolean,
    default: false
  }
})

const searchShow = ref(false)

</script>

<style></style>