<template>
  <div class="min-h-screen bg-gradient-to-b from-white to-gray-100 text-gray-800 py-16 px-6">
    <div class="max-w-5xl mx-auto space-y-8">

      <!-- Service Hero Section -->
      <div class="text-center">
        <h1 data-aos="fade-up" class="text-5xl font-extrabold text-gray-900 mb-4">
          {{ service?.title }}
        </h1>
        <p data-aos="fade-up" data-aos-delay="200" class="text-lg text-gray-600 max-w-3xl mx-auto">
          {{ service.description }}
        </p>
      </div>

      <!-- Overview -->
      <section v-if="service?.static_content?.overview_title" data-aos="fade-left"
        class="bg-white p-10 rounded-3xl shadow-lg border border-gray-200">
        <h2 class="text-3xl font-bold text-gray-900 mb-4">{{ service?.static_content?.overview_title }}</h2>
        <p class="text-gray-600 leading-relaxed">
          {{ service?.static_content?.overview_description }}
        </p>
      </section>

      <!-- Benefits -->
      <section v-if="service?.benefits && service?.benefits.length>0" data-aos="fade-right"
        class="bg-white p-10 rounded-3xl shadow-lg border border-gray-200">
        <h2 class="text-3xl font-bold text-gray-900 mb-6">Key Benefits</h2>
        <ul class="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700">
          <li v-for="(benefit, index) in service?.benefits" :key="index"
            class="p-5 rounded-xl bg-gradient-to-r from-blue-50 to-cyan-50 border border-cyan-100 shadow-sm">
            <i class="fa-solid text-blue-700 fa-check-circle mr-2"></i>
            {{ benefit.title }}
          </li>
        </ul>
      </section>

      <!-- Process -->
      <section v-if="service?.process && service?.process.length>0" data-aos="fade-up"
        class="bg-white p-10 rounded-3xl shadow-lg border border-gray-200">
        <h2 class="text-3xl font-bold text-gray-900 mb-6">Our Process</h2>
        <div>
          <UTimeline :items="process" color="info" :ui="{
            indicator: 'bg-blue-700/80', 
            separator: 'bg-blue-700/80',
            title: 'text-blue-800'
          }">
            <template #icon="{ item }">
              <i :class="item.icon" class="text-blue-700 text-xl"></i>
            </template>
          </UTimeline>

        </div>
      </section>

      <!-- Why Choose Us -->
      <section v-if="service?.static_content?.why_title" data-aos="fade-up"
        class="bg-gradient-to-r from-blue-700/80 to-blue-500 p-12 rounded-3xl shadow-lg text-white">
        <h2 class="text-3xl font-bold mb-6">{{ service?.static_content?.why_title }}</h2>
        <p class="text-lg leading-relaxed mb-6">
          {{ service?.static_content?.why_description }}
        </p>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div class="p-6 bg-white/10 rounded-2xl text-center shadow-lg">
            <h3 class="text-xl font-semibold">✔ {{ service?.static_content?.why_ex }}</h3>
          </div>
          <div class="p-6 bg-white/10 rounded-2xl text-center shadow-lg">
            <h3 class="text-xl font-semibold">✔ {{ service?.static_content?.why_support }}</h3>
          </div>
          <div class="p-6 bg-white/10 rounded-2xl text-center shadow-lg">
            <h3 class="text-xl font-semibold">✔ {{ service?.static_content?.why_success }}</h3>
          </div>
        </div>
      </section>

      <!-- Back Button -->
      <div data-aos="fade-up" data-aos-delay="200" class="text-center">
        <NuxtLink to="/" class="inline-block mt-6 px-8 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 
                 hover:shadow-[0_0_20px_#00f2fe] transition-all text-white font-semibold">
          ← Back to Home
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
import type { TimelineItem } from '@nuxt/ui'
import AOS from 'aos';

useHead({
  title: 'Care2 Training – Services for Study Abroad, Work Abroad & Recruitment',
  meta: [
    {
      name: 'description',
      content: 'Explore Care2 Training’s comprehensive services for study abroad, work abroad, and recruitment. Discover how we can support your global journey with expert guidance and personalized solutions.'
    }
  ]
});

onMounted(() => {
  nextTick(() => {
    AOS.init({
      once: true, // animation once on scroll
      duration: 800
    });
  });

  AOS.refresh();
});

const route = useRoute();
const slug = route.params.slug;
const apiBase = useRuntimeConfig().public.apiBase

const service = ref({})

const getService = async () => {
  const response: any = await $fetch(`${apiBase}/services/${slug}`);
  if (response) {
    service.value = response.data;

    if (response.data?.process) {
      process.value = response.data.process.map((item: any) => ({
        title: item.title,
        description: item.description,
        icon: item.icon
      }))
    }
  }
}


const process = ref<TimelineItem[]>([]);


onMounted(() => {
  getService();

});

</script>
