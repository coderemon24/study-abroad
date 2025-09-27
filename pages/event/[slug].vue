<template>
    <div class="overflow-hidden">
        <section class=" text-gray-800">

        <div class="container mx-auto w-11/12">
            <!----- Breadcrumb ------->
            <div class="breadcrumb pt-8 flex items-center gap-2 text-sm mb-6">
                <NuxtLink class="text-blue-700 hover:underline" to="/">Home</NuxtLink>
                <i class="fa-solid fa-chevron-right text-gray-500"></i>
                <span class="text-gray-600">Events</span>
                <i class="fa-solid fa-chevron-right text-gray-500"></i>
                <span class="text-gray-600">{{ event.title }}</span>
            </div>
        </div>

        <div class="container mx-auto pb-12">

            <!-- Event Banner -->
            <div class="w-full mb-6">
                <img :src="getImgUrl(event.banner)"
                    alt="Event Banner" class="w-full h-auto rounded-lg shadow-md object-cover" />
            </div>

            <!-- Event Info -->
            <div class="
            shadow-md
            rounded-lg
            p-8
            ">
                <div class=" mx-auto space-y-4">
                    <h1 class="text-2xl md:text-3xl font-bold text-blue-800">
                        {{ event.title }}
                    </h1>
                    <p class="text-gray-600">{{ event.subtitle }}</p>

                    <!-- Event Details -->
                    <div class="space-y-2 mt-4">
                        <p class="flex gap-2">
                            <span class="text-red-500">📅</span>
                            <span>Date: {{ formatDate(event.date) }}</span>
                        </p>
                        <p class="flex gap-2">
                            <span class="text-red-500">⏰</span>
                            <span>Time: {{ event.time }}</span>
                        </p>
                        <p class="flex gap-2">
                            <span class="text-red-500">
                                <i class="fa-solid fa-location-dot"></i>
                            </span>
                            <span>Venue: {{ event.venue }}</span>
                        </p>
                        <p class="flex gap-2">
                            <span class="text-red-500">🎟️</span>
                            <span>Entry: {{ event.entry_fee }}</span>
                        </p>
                        <p class="">
                            <span class="text-red-500">📝</span>
                            <span class="font-bold ml-2">Description:</span>
                            <div class="mt-2 blog-content" v-html="event.description"></div>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </div>
</template>

<script lang="ts" setup>

const route = useRoute();
const router = useRouter();
const slug = route.params.slug;

const apiBase = useRuntimeConfig().public.apiBase
const baseUrl = useRuntimeConfig().public.baseUrl

// Example Event Data
const event = ref({});

const getEvent = async () => {
    try {
        const response = await $fetch(`${apiBase}/event/${slug}`);
        if (!response || !response.data) {
            router.push('/errors/404')
            return
        }
        
        if (response) {
            event.value = response.data;
        }
    }catch (error) {
        router.push('/errors/404')
        return
    }
}

const getImgUrl = (url: string) => {
  return `${baseUrl}/${url}`
}

const limitWords = (text: string, count: number) => {
  if (!text) return '';
  const clean = text.replace(/(<([^>]+)>)/gi, "");
  return clean.split(" ").slice(0, count).join(" ") + "...";
};

const formatDate = (dateString: string) => {
  if (!dateString) return ''
  const date = new Date(dateString)
  return new Intl.DateTimeFormat('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  }).format(date)
}

onMounted(() => {
    getEvent();
});

useSeoMeta({
  title: () => event.value?.meta_title || "Event",
  description: () =>
    event.value?.meta_description ||
    "Learn about Care2 Training’s mission to guide students and professionals worldwide with trusted study abroad, career, and recruitment services.",
  keywords: () =>
    event.value?.meta_keywords ||
    "Care2 Training, Study Abroad, Career, Recruitment, Education"
});

</script>

<style scoped>
/* Optional: small shadow effect for icons/text */
.flex>span:first-child {
    font-size: 1.25rem;
}

:deep(.blog-content *) {
  all: revert;
  display: revert;
}
</style>
