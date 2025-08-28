<script setup lang="ts">
defineProps<{
  prevIcon?: string
  nextIcon?: string
}>()

const apiBase = useRuntimeConfig().public.apiBase
const baseUrl = useRuntimeConfig().public.baseUrl
const items = ref([]);

const getStories = async () => {
  const response: any = await $fetch(`${apiBase}/success-stories`);
  if (response) {
    items.value = response.data;
  }
}

const getImgUrl = (url: string) => {
  return `${baseUrl}/${url}`
}


onMounted(() => {
  getStories();
})

</script>

<template>
  <UCarousel v-slot="{ item }" arrows dots loop :autoplay="{ delay: 2000 }" :prev-icon="prevIcon" :next-icon="nextIcon"
    :items="items" :ui="{
      item: 'basis-1/1 md:basis-1/3 lg:basis-1/4',
      dot: 'data-[state=active]:bg-blue-800 bg-blue-800/20',

    }" class="w-full  mx-auto py-4">
    <div class="
    p-5
    ">
      <NuxtLink 
      :to="item.url"
      target="_blank"
      class="
    block
    cursor-pointer
    shadow-md
    rounded-md
    overflow-hidden
    hover:shadow-lg
    hover:shadow-blue-600/30
    ">
        <img :src="getImgUrl(item.image)" width="100%" height="320" class="overflow-hidden">
        <h2 class="
        p-3
        text-black/90
        ">{{ item.title }}</h2>
  </NuxtLink>
    </div>

  </UCarousel>
</template>
