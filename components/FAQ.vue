<template>
  <div class="
  grid
  grid-cols-1
  gap-5
  md:grid-cols-2
  ">
    <div>
      <UAccordion :items="items" />
    </div>
    <div class="hidden md:block">
      <img class="w-[50%] mx-auto" :src="faqImg" alt="">
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { AccordionItem } from '@nuxt/ui';
import faqImg from '~/assets/images/faq.png';

const items = ref<AccordionItem[]>([
  {
    class: 'text-black/90 border-b border-blue-700/20',
    label: 'What services does Care2Training provide?',
    icon: 'i-lucide-circle-question-mark',
    ui: {
        header: 'text-black/90 px-3 bg-blue-700/10 border-b border-blue-700/20',
        body: 'text-black/90 px-4 bg-white py-3 leading-7 font-poppins font-thin ',
        
    },
    content: 'Care2Training offers a wide range of professional development and consultancy services, including counseling, study abroad guidance, skills training, workshops, and career development support. Our goal is to help individuals and organizations achieve growth and success through structured learning and expert advice.'
  },
  {
    class: 'text-black/90 border-b border-blue-700/20',
    ui: {
        header: 'text-black/90 px-3 bg-blue-700/10 border-b border-blue-700/20',
        body: 'text-black/90 px-4 bg-white py-3 leading-7 font-poppins font-thin ',
        
    },
    label: 'Does Care2Training offer international study support?',
    icon: 'i-lucide-circle-question-mark',
    content: 'Yes. We provide complete guidance for students who want to study abroad. This includes admission counseling, documentation support, visa guidance, scholarship information, and career planning to ensure a smooth transition into international education.'
  },
  {
    class: 'text-black/90 border-b border-gray-700/20',
    ui: {
        header: 'text-black/90 px-3 bg-blue-700/10 border-b border-blue-700/20',
        body: 'text-black/90 px-4 bg-white py-3 leading-7 font-poppins font-thin ',
        
    },
    label: 'Are the trainers qualified?',
    icon: 'i-lucide-circle-question-mark',
    content: 'Absolutely. All of our trainers are industry experts and certified professionals with years of experience in their respective fields. We carefully select trainers who can deliver practical, real-world knowledge instead of just theory.'
  }
])

</script>

<style>

</style>