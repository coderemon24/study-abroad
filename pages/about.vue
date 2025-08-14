<template>
  <div class="py-8 pb-0">
    <div class="container w-11/12 mx-auto">
      <!----- Breadcrumb ------->
      <div class="breadcrumb flex items-center gap-2 text-sm mb-6">
        <NuxtLink class="text-blue-700 hover:underline" to="/">Home</NuxtLink>
        <i class="fa-solid fa-chevron-right text-gray-500"></i>
        <span class="text-gray-600">About Us</span>
      </div>
      <!---page title-->
      <div class="content bg-white p-3 rounded-lg shadow">
        <h1 class="text-3xl uppercase font-medium text-black/80 text-center">About Us</h1>
      </div>
      <!----- page contents ----->
      <div class="mt-5 flex">
        <!----- tabs ----->
        <div class="tabs min-w-1/3 md:min-w-1/5 pb-8">
          <ul class="flex flex-col gap-6 text-md">
            <li 
              v-for="(tab, index) in tabs" 
              :key="index"
              :class="[
                'group cursor-pointer',
                { 'activeTab': activeTab === tab.id }
              ]"
              @click="setActiveTab(tab.id)"
            >
              <a href="#" class="group-hover:text-blue-700
              group-hover:cursor-pointer
              ">{{ tab.title }}</a>
            </li>
          </ul>
        </div>
        <!----- contents ----->
        <div class="border-l border-gray-300 pl-5 md:w-4/5 w-2/3 pb-8">
          <!----- Dynamic content based on active tab -->
          <div 
            v-for="(tab, index) in tabs" 
            :key="index"
            class="shadow-md bg-white p-6 rounded-lg mb-5"
            :class="{'hidden': activeTab !== tab.id}"
          >
            <h2 class="text-md md:text-2xl text-gray-800 text-left font-semibold mb-3">{{ tab.title }}</h2>
            <p class="text-sm md:font-normal md:text-[17px] text-gray-400 md:leading-8">
              {{ tab.content }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const tabs = [
  {
    id: 'introduction',
    title: 'Introduction',
    content: "Welcome to Care2Training, where professional expertise meets a genuine commitment to empowering individuals on their journey toward success. John is the Founder and CEO of Care2Training, bringing years of experience in guiding learners toward achieving their educational and professional goals. As a dedicated trainer and mentor, [he/she] specializes in delivering high-quality training programs designed to equip individuals with the knowledge and skills they need to thrive. With a deep passion for education and personal growth, [he/she] is committed to serving learners both locally and globally."
  },
  {
    id: 'policy',
    title: 'Our Policy',
    content: 'Our policy is to provide a supportive environment that fosters personal growth and professional development for individuals who are seeking to excel in their educational and professional pursuits.  We believe that learning can transform lives, and our goal is to empower individuals with the knowledge and skills they need to succeed in their chosen fields.'
  },
  {
    id: 'goals',
    title: 'Our Mission',
    content: 'Our mission is to empower individuals with the knowledge and skills they need to succeed in their educational and professional pursuits. We believe that learning can transform lives, and our goal is to provide a supportive environment that fosters personal growth and professional development.'
  },
  {
    id: 'activities',
    title: 'Our Vision',
    content: ' Our vision is to be a leading provider of training programs that empower individuals to achieve their educational and professional goals. We strive to provide high-quality training programs that are tailored to the needs of our learners, ensuring that they receive the knowledge and skills they need to succeed in their chosen fields.'
  },
];

const activeTab = ref('introduction');

const setActiveTab = (tabId) => {
  activeTab.value = tabId;
};
</script>

<style scoped>
.activeTab a {
  color: rgb(0, 0, 230); 
  font-weight: bold;
}

.tabs li {
  padding: 8px 12px;
  border-radius: 4px;
  transition: all 0.3s ease;
}

.tabs li:hover {
  background-color: #0034e015;
}

.tabs li.activeTab {
  background-color: rgba(0, 0, 207, 0.068);
  border-left: 3px solid rgb(0, 0, 207);
}

</style>