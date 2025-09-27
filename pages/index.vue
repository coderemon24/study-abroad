<template>
  <div class="overflow-hidden">
    <!-- Loader -->
    <div v-if="pending" class="min-h-screen flex items-center justify-center">
      <div class="animate-pulse space-y-4 w-11/12 max-w-4xl">
        <div class="h-8 bg-gray-300 rounded w-3/4"></div>
        <div class="h-6 bg-gray-300 rounded w-1/2"></div>
        <div class="h-64 bg-gray-200 rounded"></div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-5 mt-5">
          <div v-for="i in 3" :key="i" class="h-40 bg-gray-200 rounded"></div>
        </div>
      </div>
    </div>

    <!-- Actual content -->
    <div v-else>
      <!-- hero section -->
      <section>
        <AppSwiper
          :data="homePage.hero"
          :title="homePage.main_title"
          :subtitle="homePage.subtitle"
          :description="homePage.hero_description"
        />
      </section>

      <!-- what we offer -->
      <section class="py-12 bg-gray-100">
        <div class="container mx-auto w-11/12">
          <div class="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-15">
            <OfferCard
              v-for="(item, index) in cardItems"
              :key="index"
              :icon="item.icon"
              :title="item.title"
              :description="item.description"
              data-aos="fade-up"
              :data-aos-delay="200 * index + 1"
              class="bg-white shadow-xl"
            />
          </div>
        </div>
      </section>

      <!-- our partners -->
      <section class="py-12 bg-white">
        <div class="container mx-auto w-11/12">
          <div class="mb-10">
            <h4 data-aos="fade-up" class="text-gray-500 capitalize mb-1">Our Partners</h4>
            <h2 data-aos="fade-up" data-aos-delay="200" class="title-design text-3xl text-black/90">Building Future Together</h2>
          </div>
          <Partners data-aos="fade-up" :partners="homePage.universities || []" />
        </div>
      </section>

      <!-- student counselling -->
      <section class="py-12 bg-blue-100/20">
        <div class="container mx-auto w-11/12">
          <Counselling :data="homePage" />
        </div>
      </section>

      <!-- about us -->
      <section class="py-12 bg-gray-50">
        <div class="container mx-auto w-11/12">
          <About :data="homePage" />
        </div>
      </section>

      <!-- our services -->
      <section class="py-12 bg-gray-100">
        <div class="container mx-auto w-11/12">
          <div class="mb-10">
            <h4 data-aos="fade-up" class="text-gray-500 capitalize mb-1">Services</h4>
            <h2 data-aos="fade-up" data-aos-delay="200" class="title-design text-3xl text-black/90">What We Offer</h2>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-3 items-center gap-5">
            <ServiceCard
              v-for="service in serviceItems"
              :key="service.id"
              :icon="service.icon"
              :title="service.title"
              :description="service.description"
              :path="'/services/' + service.slug"
              data-aos="fade-up"
            />
          </div>
        </div>
      </section>

      <!-- how we work -->
      <section class="py-12 bg-blue-100/30">
        <div class="container mx-auto w-11/12">
          <div class="mb-10">
            <h4 data-aos="fade-up" class="text-gray-500 capitalize mb-1">Our Process</h4>
            <h2 data-aos="fade-up" data-aos-delay="200" class="title-design text-3xl text-black/90">How We Work</h2>
          </div>
          <HowWeWork :data="homePage" />
        </div>
      </section>

      <!-- Voice of achievers -->
      <section class="py-12 pb-22 bg-white">
        <div class="container mx-auto w-11/12">
          <div class="mb-10">
            <h4 data-aos="fade-up" class="text-gray-500 capitalize mb-1">Success Story</h4>
            <h2 data-aos="fade-up" data-aos-delay="200" class="title-design text-3xl text-black/90">Voice of Achievers</h2>
          </div>
          <Achivers data-aos="fade-up" prevIcon="i-lucide-chevron-left" nextIcon="i-lucide-chevron-right" />
        </div>
      </section>

      <!-- Our Reach -->
      <section class="py-12 pb-22 bg-white">
        <div class="container mx-auto w-11/12">
          <div class="mb-10">
            <h4 data-aos="fade-up" class="text-gray-500 capitalize mb-1">Our Reach</h4>
            <h2 data-aos="fade-up" data-aos-delay="200" class="title-design text-3xl text-black/90">
              Connecting Learners Worldwide
            </h2>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div data-aos="fade-up" data-aos-delay="400" class="shadow bg-blue-700/10 px-7 rounded-lg text-center flex flex-col items-center gap-4 py-8">
              <h2 class="text-6xl text-blue-700 font-plus font-bold">{{ aboutItems.partner_count }}+</h2>
              <p class="text-black/80 text-3xl">{{ aboutItems.university_partner }}</p>
            </div>
            <div data-aos="fade-up" data-aos-delay="300" class="shadow bg-blue-700/10 px-7 rounded-lg text-center flex flex-col items-center gap-4 py-8">
              <h2 class="text-6xl text-blue-700 font-plus font-bold">{{ aboutItems.student_count }}+</h2>
              <p class="text-black/80 text-3xl">{{ aboutItems.student_recruited }}</p>
            </div>
            <div data-aos="fade-up" data-aos-delay="500" class="shadow bg-blue-700/10 px-7 rounded-lg text-center flex flex-col items-center gap-4 py-8">
              <h2 class="text-6xl text-blue-700 font-plus font-bold">{{ aboutItems.ex_count }}+</h2>
              <p class="text-black/80 text-3xl">{{ aboutItems.ex_title }}</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Contact Us -->
      <section class="py-12 pb-22 bg-blue-300/10">
        <div class="container mx-auto w-11/12">
          <div class="mb-10">
            <h4 data-aos="fade-up" class="text-gray-500 capitalize mb-1">Contact</h4>
            <h2 data-aos="fade-up" data-aos-delay="200" class="title-design text-3xl text-black/90">Get in Touch</h2>
          </div>
          <ContactForm :contactImg="homePage.contact" data-aos="fade-up" data-aos-delay="200" />
        </div>
      </section>

      <!-- modal form -->
      <section>
        <ModalForm />
      </section>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import AOS from 'aos';
const apiBase = useRuntimeConfig().public.apiBase;
// useAsyncData to fetch home page content
const { data: homeData, pending, error } = await useAsyncData('home-page', () =>
  $fetch(`${apiBase}/home-page`)
);

const homePage = ref({});
const cardItems = ref([
  { icon: 'fa-solid fa-graduation-cap', title: '', description: '' },
  { icon: 'fa-solid fa-user-graduate', title: '', description: '' },
  { icon: 'fa-solid fa-headset', title: '', description: '' },
]);
const serviceItems = ref([]);
const aboutItems = ref({});
const metaInfo = ref({});

if (homeData.value) {
  homePage.value = homeData.value.home;

  // fill Offer Cards
  cardItems.value[0].title = homeData.value.home.ss_title || '';
  cardItems.value[0].description = homeData.value.home.ss_description || '';
  cardItems.value[1].title = homeData.value.home.consultation_title || '';
  cardItems.value[1].description = homeData.value.home.consultation_description || '';
  cardItems.value[2].title = homeData.value.home.support_title || '';
  cardItems.value[2].description = homeData.value.home.support_description || '';

  // Services
  serviceItems.value = homeData.value.services || [];
  // About
  aboutItems.value = homeData.value.about || {};
  // Meta
  metaInfo.value = homeData.value.meta_data || {};
}

// initialize AOS
onMounted(() => {
  AOS.init({ once: true, duration: 800 });
  AOS.refresh();
});

useHead({
  title: metaInfo.value.title || 'Care2 Training',
  meta: [
    {
      name: 'description',
      content:
        metaInfo.value.description || 'Learn about Care2 Training’s mission to guide students and professionals worldwide with trusted study abroad, career, and recruitment services.'
    },
    {
      name: 'keywords',
      content: metaInfo.value.keywords || 'Care2 Training, Study Abroad, Career, Recruitment, Education'
    }
  ]
});
</script>

<style scoped>
/* Loader animation styling */
.animate-pulse > div {
  background-color:gray;
  border-radius: 4px;
}
</style>
