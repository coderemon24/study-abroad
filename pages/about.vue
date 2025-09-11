<template>
  <div class="overflow-hidden">
    <div class="py-8 pb-0 text-black/80">
    <div class="container w-11/12 mx-auto">
      <!-- Breadcrumb -->
      <div class="breadcrumb flex items-center gap-2 text-sm mb-6">
        <NuxtLink class="text-blue-700 hover:underline" to="/">Home</NuxtLink>
        <i class="fa-solid fa-chevron-right text-gray-500"></i>
        <span class="text-gray-600">About Us</span>
      </div>

      <!-- About Section -->
      <div class="py-8 md:w-10/12 mx-auto text-black/80 text-center">
        <h1
          data-aos="fade-up"
          class="mb-2 text-blue-800 md:text-6xl text-4xl font-semibold"
        >
          {{ contents.main_title }}
        </h1>
        <h2
          data-aos="fade-up"
          data-aos-delay="200"
          class="text-2xl mb-6 md:text-4xl"
        >
          {{ contents.subtitle }}
        </h2>
        <img
          data-aos="fade-up"
          data-aos-delay="400"
          class="w-full mb-6"
          :src="getImageUrl(contents.hero)"
          :alt="contents.main_title"
        />

        <div class="mt-6 md:mb-12 text-left">
          <h2
            data-aos="fade-up"
            class="text-2xl mb-5 font-semibold text-black/80 title-design md:text-4xl uppercase"
          >
            About Care2Training
          </h2>
          <div
            data-aos="fade-up"
            data-aos-delay="200"
            class="text-gray-500 leading-7"
            v-html="contents.hero_description"
          ></div>
        </div>
      </div>
    </div>

    <!-- Our Team -->
    <section class="py-12 pb-22 bg-white">
      <div class="container mx-auto w-11/12">
        <div class="mb-10 ">
          <h4 data-aos="fade-up" class="text-gray-500 capitalize mb-1">
            Our Team
          </h4>
          <h2 data-aos="fade-up" data-aos-delay="200" class="title-design text-3xl text-black/90">
            The People Behind Our Success
          </h2>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 place-items-center gap-3 mx-auto">
          <div
            v-for="team in teams"
            :key="team.id"
            data-aos="fade-up"
            class="bg-white px-3 rounded-lg text-center flex flex-col items-center py-5 mx-auto"
          >
            <img
              class="w-30 h-30 rounded-full object-cover border-3 border-blue-800"
              :src="getImageUrl(team.image)"
              :alt="team.name"
            />
            <p class="text-black/80 text-2xl mt-3">{{ team.name }}</p>
            <span>{{ team.designation }}</span>
            <ul class="flex gap-4 items-center justify-center mt-3">
              <li><NuxtLink :to="team.facebook"><i class="fa-brands fa-square-facebook"></i></NuxtLink></li>
              <li><NuxtLink :to="team.twitter"><i class="fa-brands fa-square-x-twitter"></i></NuxtLink></li>
              <li><NuxtLink :to="team.linkedin"><i class="fa-brands fa-linkedin"></i></NuxtLink></li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ -->
      <section class="
      py-12
      pb-12
      bg-gray-10/10
      ">
        <div class="
        container mx-auto w-11/12
        ">
        
        <div class="mb-10">
            <h4 
            data-aos="fade-up"
            class="
            text-gray-500
            capitalize
            mb-1
            ">FAQ</h4>
            <h2 
            data-aos="fade-up"
            data-aos-delay="200"
            class="
            title-design
            text-3xl
            text-black/90
            ">Everything You Need to Know</h2>
          </div>
        
          <FAQ :imageProp="homePage?.faq" />
        </div>
      </section>

    <!-- Mission & Vision -->
    <section class="py-12 pb-10 bg-blue-100/10">
      <div class="container mx-auto w-11/12">
        <div class="mb-10">
          <h4 data-aos="fade-up" class="text-gray-500 capitalize mb-1">Mission & Vision</h4>
          <h2 data-aos="fade-up" data-aos-delay="200" class="title-design text-3xl text-black/90">
            Roadmap To Success
          </h2>
        </div>

        <div class="mt-5 flex flex-col md:flex-row">
          <!-- Tabs -->
          <div class="tabs w-full md:w-1/5 md:min-w-1/5 pb-8">
            <ul data-aos="fade-left" class="flex flex-row md:gap-6 gap-3 md:flex-col flex-wrap text-md">
              <li
                v-for="tab in tabs"
                :key="tab.id"
                :class="['group cursor-pointer', { activeTab: activeTab === tab.id }]"
                @click="setActiveTab(tab.id)"
              >
                <a href="javascript:void(0)" class="group-hover:text-blue-700">{{ tab.title }}</a>
              </li>
            </ul>
          </div>

          <!-- Tab Content -->
          <div
            data-aos="fade-right"
            class="md:border-l border-gray-300 md:pl-5 md:w-4/5 w-full pb-8"
          >
            <div
              v-for="tab in tabs"
              :key="tab.id"
              class="shadow-md bg-white p-6 rounded-lg mb-5"
              v-show="activeTab === tab.id"
            >
              <p v-html="tabContent(tab.id)"></p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
  </div>
</template>

<script lang="ts" setup>
import AOS from "aos";

useHead({
  title: 'About Care2 Training – Education & Career Experts',
  meta: [
    {
      name: 'description',
      content: 'Learn about Care2 Training’s mission to guide students and professionals worldwide with trusted study abroad, career, and recruitment services.'
    }
  ]
});


interface Tab {
  id: string;
  title: string;
  content: string;
}

interface Content {
  main_title: string;
  subtitle: string;
  hero: string;
  hero_description: string;
  partner_count: number;
  university_partner: string;
  student_count: number;
  student_recruited: string;
  ex_count: number;
  ex_title: string;
  mission: string;
  vision: string;
  values: string;
}

const config = useRuntimeConfig();
const apiBase = config.public.apiBase;
const baseUrl = config.public.baseUrl;

const contents = ref<Content>({
  main_title: "",
  subtitle: "",
  hero: "",
  hero_description: "",
  partner_count: 0,
  university_partner: "",
  student_count: 0,
  student_recruited: "",
  ex_count: 0,
  ex_title: "",
  mission: "",
  vision: "",
  values: ""
});

const tabs = ref<Tab[]>([
  { id: "mission", title: "Our Mission", content: "" },
  { id: "vision", title: "Our Vision", content: "" },
  { id: "values", title: "Values", content: "" }
]);

const activeTab = ref("mission");
const setActiveTab = (tabId: string) => (activeTab.value = tabId);

const { data: teams } = await useFetch(`${apiBase}/teams`);

const getImageUrl = (img: string) => `${baseUrl}/${img}`;

// Dynamic tab content
const tabContent = (id: string) => {
  if (!contents.value) return "";
  switch (id) {
    case "mission":
      return contents.value.mission;
    case "vision":
      return contents.value.vision;
    case "values":
      return contents.value.values;
    default:
      return "";
  }
};

const homePage = ref([]);

const getPage = async () => {
  try {
    const response: any = await $fetch(`${apiBase}/home-page`);
    if (response && response.data) {
      homePage.value = response.data;

      // Safely set titles and descriptions
      cardItems.value[0].title = response.data.ss_title || '';
      cardItems.value[0].description = response.data.ss_description || '';
      cardItems.value[1].title = response.data.consultation_title || '';
      cardItems.value[1].description = response.data.consultation_description || '';
      cardItems.value[2].title = response.data.support_title || '';
      cardItems.value[2].description = response.data.support_description || '';
    }
  } catch (error) {
    console.error("Error fetching home page:", error);
  }
}

// Fetch About Page Content
const getContents = async () => {
  const res: any = await $fetch(`${apiBase}/about-page`);
  if (res?.data) contents.value = res.data;
};

onMounted(async () => {
  AOS.init({ once: true, duration: 800 });
  await getContents();
  await getPage();
});
</script>

<style scoped>
.activeTab a {
  color: #1447e6;
  font-weight: bold;
}

.tabs li {
  padding: 8px 12px;
  border-radius: 4px;
  transition: all 0.3s ease;
}

.tabs li:hover {
  background-color: #1449e615;
}

.tabs li.activeTab {
  background-color: #1449e615;
  border-left: 3px solid #1447e6;
}
</style>
