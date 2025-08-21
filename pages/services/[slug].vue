<template>
  <div class="min-h-screen bg-gradient-to-b from-white to-gray-100 text-gray-800 py-16 px-6">
    <div class="max-w-5xl mx-auto space-y-8">

      <!-- Service Hero Section -->
      <div class="text-center">
        <h1 
        data-aos="fade-up"
        class="text-5xl font-extrabold text-gray-900 mb-4">
          {{ service.title }}
        </h1>
        <p 
        data-aos="fade-up"
        data-aos-delay="200"
        class="text-lg text-gray-600 max-w-3xl mx-auto">
          {{ service.details }}
        </p>
      </div>

      <!-- Overview -->
      <section 
      data-aos="fade-left"
      class="bg-white p-10 rounded-3xl shadow-lg border border-gray-200">
        <h2 class="text-3xl font-bold text-gray-900 mb-4">Overview</h2>
        <p class="text-gray-600 leading-relaxed">
          Our <span class="font-semibold">{{ service.title }}</span> program ensures that students receive
          personalized guidance and step-by-step assistance throughout the journey.
          We focus on simplifying complex procedures while helping you achieve your
          academic and professional goals.
        </p>
      </section>

      <!-- Benefits -->
      <section 
      data-aos="fade-right"
      class="bg-white p-10 rounded-3xl shadow-lg border border-gray-200">
        <h2 class="text-3xl font-bold text-gray-900 mb-6">Key Benefits</h2>
        <ul class="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700">
          <li class="p-5 rounded-xl bg-gradient-to-r from-blue-50 to-cyan-50 border border-cyan-100 shadow-sm">
            <i class="fa-solid text-blue-700 fa-check-circle mr-2"></i>
             Step-by-step expert guidance
          </li>
          <li class="p-5 rounded-xl bg-gradient-to-r from-blue-50 to-cyan-50 border border-cyan-100 shadow-sm">
            <i class="fa-solid text-blue-700 fa-check-circle mr-2"></i>
            Save time with simplified processes
          </li>
          <li class="p-5 rounded-xl bg-gradient-to-r from-blue-50 to-cyan-50 border border-cyan-100 shadow-sm">
            <i class="fa-solid text-blue-700 fa-check-circle mr-2"></i>
            Increased chances of success
          </li>
          <li class="p-5 rounded-xl bg-gradient-to-r from-blue-50 to-cyan-50 border border-cyan-100 shadow-sm">
            <i class="fa-solid text-blue-700 fa-check-circle mr-2"></i>
            Personalized support from professionals
          </li>
        </ul>
      </section>

      <!-- Process -->
      <section 
      data-aos="fade-up"
      class="bg-white p-10 rounded-3xl shadow-lg border border-gray-200">
        <h2 class="text-3xl font-bold text-gray-900 mb-6">Our Process</h2>
        <div>
          <UTimeline 
          class="" 
          color="info"
          :ui="{
            indicator: 'bg-blue-700/80 text-white',
            separator: 'bg-blue-700/80',
            title: 'text-blue-800',
          }"
          :items="process" />
        </div>
      </section>

      <!-- Why Choose Us -->
      <section data-aos="fade-up" class="bg-gradient-to-r from-blue-700/80 to-blue-500 p-12 rounded-3xl shadow-lg text-white">
        <h2 class="text-3xl font-bold mb-6">Why Choose Us?</h2>
        <p class="text-lg leading-relaxed mb-6">
          With years of proven expertise and successful cases, we are committed to 
          making your journey smoother, faster, and stress-free. Our priority is 
          your success and long-term growth.
        </p>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div class="p-6 bg-white/10 rounded-2xl text-center shadow-lg">
            <h3 class="text-xl font-semibold">✔ Experienced Experts</h3>
          </div>
          <div class="p-6 bg-white/10 rounded-2xl text-center shadow-lg">
            <h3 class="text-xl font-semibold">✔ 24/7 Support</h3>
          </div>
          <div class="p-6 bg-white/10 rounded-2xl text-center shadow-lg">
            <h3 class="text-xl font-semibold">✔ 98% Success Rate</h3>
          </div>
        </div>
      </section>

      <!-- Back Button -->
      <div data-aos="fade-up" data-aos-delay="200" class="text-center">
        <NuxtLink 
          to="/"
          class="inline-block mt-6 px-8 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 
                 hover:shadow-[0_0_20px_#00f2fe] transition-all text-white font-semibold">
          ← Back to Home
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts" >
import { useRoute } from 'vue-router'
import type { TimelineItem } from '@nuxt/ui'
import AOS from 'aos';

onMounted(() => {
  nextTick(() => {
    AOS.init({
      once: true, // animation once on scroll
      duration: 800
    });
  });
  
  AOS.refresh();
});

const route = useRoute()

const allServices = {
  "admission-guidance": {
    title: "University Admission Guidance",
    details: "We help you find the best universities and guide you through the entire admission process with documentation, requirements, and step-by-step mentoring."
  },
  "visa-services": {
    title: "Visa Application Support",
    details: "Our experts assist you in preparing and submitting visa applications, ensuring a smooth approval process with minimal stress."
  },
  "career-counseling": {
    title: "Career Counseling",
    details: "We provide personalized career guidance to help you make informed decisions about your education and professional path."
  },
  "study-abroad": {
    title: "Scholarship Assistance",
    details: "Our team identifies the best scholarships worldwide and supports you in preparing applications for maximum success."
  },
  "job-placement-services": {
    title: "Job Placement Services",
    details: "With strong networks, we help students and graduates secure internships and jobs globally."
  },
  "language-test-prep": {
    title: "Language & Entrance Test Preparation",
    details: "We provide training for IELTS, TOEFL, SAT, GRE, and other entrance exams with expert coaching."
  },
}

const process = ref<TimelineItem[]>([
   {
    title: 'Project Kickoff',
    description: 'Kicked off the project with team alignment. Set up project milestones and allocated resources.',
    icon: 'i-lucide-rocket'
  },
  {
    title: 'Design Phase',
    description: 'User research and design workshops. Created wireframes and prototypes for user testing.',
    icon: 'i-lucide-palette'
  },
  {
    title: 'Development Sprint',
    description: 'Frontend and backend development. Implemented core features and integrated with APIs.',
    icon: 'i-lucide-code'
  },
  {
    title: 'Testing & Deployment',
    description: 'QA testing and performance optimization. Deployed the application to production.',
    icon: 'i-lucide-check-circle'
  }
]);

const service = allServices[route.params.slug]
</script>
