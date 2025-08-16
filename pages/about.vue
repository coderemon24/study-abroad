<template>
  <div class="py-8 pb-0 text-black/80" >
    <div class="container w-11/12 mx-auto">
      <!----- Breadcrumb ------->
      <div class="breadcrumb flex items-center gap-2 text-sm mb-6">
        <NuxtLink class="text-blue-700 hover:underline" to="/">Home</NuxtLink>
        <i class="fa-solid fa-chevron-right text-gray-500"></i>
        <span class="text-gray-600">About Us</span>
      </div>

      <!----- about page - about ----->
      <div class="py-8 md:w-10/12 mx-auto text-black/80">
        <div class="
        text-center
        text-4xl
        font-semibold
        ">
          <h1 class="
          mb-2
          text-blue-800
          md:text-6xl
          ">Study Abroad!</h1>
          <h2 class="
          text-2xl
          mb-6
          md:text-4xl
          ">
            Plan with a team who knows the way and cares for you.
          </h2>
          
          <img class="
          w-full
          mb-6
          " :src="consulting" alt="consulting image">
          
        </div>
        <div class="
        text-justify
        mt-6
        md:mb-12
        ">
            <h2 class="
            text-2xl
            mb-5
            font-semibold
            text-black/80
            title-design
            md:text-4xl
            uppercase
            ">About Care2Training</h2>
            <p class="
            text-gray-500
            leading-7
            ">
              Care2Training has been your trusted partner in skill development, career growth, and study abroad guidance since its inception. We help learners and professionals simplify their career journeys through personalized counseling and structured training programs. At Care2Training, our mission is to provide accurate guidance, practical knowledge, and the right resources to empower individuals to make informed decisions for their future. We proudly collaborate with leading institutions and organizations across Australia, Canada, Malaysia, the UK, and the USA. Our dedicated team is here to support you today, so you can achieve excellence tomorrow. Unlock your true potential with Care2Training – your pathway to success.
            </p>
          </div>
      </div>
    
    </div>
    
    <!-- our reach -->
      <section class="
      py-12
      pb-22
      bg-white
      ">
        <div class="
        container mx-auto w-11/12
        ">
        
        <div class="mb-10">
            <h4 class="
            text-gray-500
            capitalize
            mb-1
            ">Our Reach</h4>
            <h2 class="
            title-design
            text-3xl
            text-black/90
            ">Connecting Learners Worldwide</h2>
          </div>
        
          <div class="
          grid
          grid-cols-1
          md:grid-cols-3
          gap-8
          ">
            <div v-for="item in reaches" class="
            shadow
            bg-blue-700/10
            px-7
            rounded-lg
            text-center
            flex
            flex-col
            items-center
            gap-4
            py-8
            ">
              <h2 class="
              text-6xl
              text-blue-700
              font-plus
              font-bold
              ">{{ item.number }}+</h2>
              
              <p class="
              text-black/80
              text-3xl
              ">{{ item.name }}</p>
            </div>
          </div>
          
        </div>
      </section>
    
    <!-- our services -->
      <section class="
      py-12
      pb-10
      bg-blue-100/10
      ">
        <div class="
        container mx-auto w-11/12
        ">
        
        <div class="mb-10">
            <h4 class="
            text-gray-500
            capitalize
            mb-1
            ">Our Services</h4>
            <h2 class="
            title-design
            text-3xl
            text-black/90
            ">What We Do</h2>
          </div>
        
          
        <div class="
        mt-5 
        flex
        flex-col
        md:flex-row
        ">
        <!----- tabs ----->
        <div class="tabs w-full md:w-1/5 md:min-w-1/5 pb-8">
          <ul class="
          flex 
          flex-row 
          md:gap-6 text-md
          gap-3
          md:flex-col
          flex-wrap
          ">
            <li 
              v-for="(tab, index) in tabs" 
              :key="index"
              :class="[
                'group cursor-pointer',
                { 'activeTab': activeTab === tab.id }
              ]"
              @click="setActiveTab(tab.id)"
            >
              <a href="javascript:void(0)" class="group-hover:text-blue-700
              group-hover:cursor-pointer
              ">{{ tab.title }}</a>
            </li>
          </ul>
        </div>
        <!----- contents ----->
        <div class="md:border-l border-gray-300 md:pl-5 md:w-4/5 w-full pb-8">
          <!----- Dynamic content based on active tab -->
          <div 
            v-for="(tab, index) in tabs" 
            :key="index"
            class="shadow-md bg-white p-6 rounded-lg mb-5"
            :class="{'hidden': activeTab !== tab.id}"
          >
            <h2 class="text-xl md:text-2xl text-gray-800 text-left font-semibold mb-3">{{ tab.content_title }}</h2>
            <p class="text-sm md:text-[17px] md:font-thin md:text-gray-400 text-gray-600">
              {{ tab.content }}
            </p>
            
            <img class="
            mt-6
            rounded
            w-full
            md:w-5/8
            " :src="tab.image" :alt="tab.content_title">
          </div>
        </div>
      </div>
          
        </div>
      </section>
    
  </div>
</template>

<script lang="ts" setup>
import consulting from "~/assets/images/consulting.jpg"

const reaches = [
  {
    name: "University Partnered",
    number: 203,
  },
  {
    name: "Students Recruited",
    number: 1500,
  },
  {
    name: "Years of Active Services",
    number: 23,
  },
];

const tabs = [
  {
    id: 'counselling',
    title: 'Free Counselling',
    content_title: 'We want the best for you!',
    image: consulting,
    content: 'Consultation sessions aim to help you find the right program and university. Our Team will walk you through all the ins and outs of the entire study abroad process. And it’s completely free.'
  },
  {
    id: 'admission_process',
    title: 'Admission Process',
    content_title: 'We offer a wide choice of courses and institutions',
    image: consulting,
    content: 'We assist you to find the best program and universities according to your requirements. Our admissions team will take care of the application and admission process to help you secure your place at your preferred institution.'
  },
  {
    id: 'visa_support',
    title: 'Visa Application Support',
    content_title: 'We are here to help you secure your visa',
    image: consulting,
    content: 'We will simplify and guide you to prepare your visa documents. Our Team will take care of your visa application and help you obtain your Student Visa/ Permit.'
  },
  {
    id: 'predeparture',
    title: 'Pre-Departure Support',
    content_title: 'We will help you prepare for your trip',
    image: consulting,
    content: 'To help you be well-prepared for your journey overseas we will provide: pre-departure briefings, help you arrange accommodations, airport pickup, etc.'
  },
  {
    id: 'postdeparture',
    title: 'Post-Departure Support',
    content_title: 'We will help you prepare for your trip',
    image: consulting,
    content: 'We at Executive continue to provide our support and help even when you reach a new country. We’ll assist you with: open bank account overseas, university enrollment, etc.'
  },
];

const activeTab = ref('counselling');

const setActiveTab = (tabId) => {
  activeTab.value = tabId;
};




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