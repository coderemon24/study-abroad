<script setup lang="ts">
defineProps<{
  prevIcon?: string
  nextIcon?: string
}>()

const apiBase = useRuntimeConfig().public.apiBase
const baseUrl = useRuntimeConfig().public.baseUrl

// useAsyncData দিয়ে fetch করা
const { data: items, pending, error } = await useAsyncData('latestStories', () =>
  $fetch(`${apiBase}/latest-blogs`)
)

const getImgUrl = (url: string) => `${baseUrl}/${url}`

const limitWords = (text: string, count: number) => {
  if (!text) return ''
  const clean = text.replace(/(<([^>]+)>)/gi, "")
  return clean.split(" ").slice(0, count).join(" ") + "..."
}

const formatDate = (dateString: string) => {
  if (!dateString) return ''
  const date = new Date(dateString)
  return new Intl.DateTimeFormat('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  }).format(date)
}
</script>

<template>
  <div v-if="pending" class="text-center py-10">
    Loading stories...
  </div>

  <UCarousel
    v-else
    v-slot="{ item }"
    arrows
    dots
    loop
    :autoplay="{ delay: 2000 }"
    :prev-icon="prevIcon"
    :next-icon="nextIcon"
    :items="items.data"
    :ui="{
      item: 'basis-1/1 md:basis-1/3 lg:basis-1/3',
      dot: 'data-[state=active]:bg-blue-800 bg-blue-800/20',
    }"
    class="w-full mx-auto py-4"
  >
    <div class="p-5">
      <NuxtLink
        :to="'/blog/' + item.slug"
        class="block cursor-pointer shadow-md rounded-md overflow-hidden hover:shadow-lg hover:shadow-blue-600/30"
      >
        <img
          :src="getImgUrl(item.image)"
          width="100%"
          class="overflow-hidden max-h-[230px]"
        />
        <div class="p-4">
          <h2 class="text-lg text-black/90">{{ limitWords(item.title, 10) }}</h2>
          <p class="text-sm text-black/80 mt-2">
            <p v-html="limitWords(item.description, 20)"></p>
          </p>
          <div class="flex justify-between">
            <p class="text-sm text-black/60 mt-2">
              <i class="fa-regular fa-calendar mr-1"></i> {{ formatDate(item.created_at) }}
            </p>
            <p class="text-sm text-black/60 mt-2">
              Read More <i class="fa-solid fa-chevron-right ml-1"></i>
            </p>
          </div>
        </div>
      </NuxtLink>
    </div>
  </UCarousel>
</template>
