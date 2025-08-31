<template>
   <div>
    <!-- hero section-->
     <section>
          <AppSwiper />
     </section>
 
     <!-- what we offer -->
      <section class="
      py-12
      bg-gray-100
      ">
        <div class="
        container mx-auto w-11/12
        ">
          <div class="
          grid
          grid-cols-1
          md:grid-cols-3
          gap-5
          md:gap-15
          ">
            <OfferCard
            v-for="(item, index) in cardItems"
            :icon="item.icon" 
            :title="item.title"
            :description="item.description"
            data-aos="fade-up"
            :data-aos-delay="200 * index + 1"
            class="
            bg-white
            shadow-xl
            " />
          </div>
        </div>
      </section>
      
      <!-- our partners -->
      <section class="
      py-12
      bg-white
      ">
        <div class="
        container mx-auto w-11/12
        ">
        
        <div class="mb-10" >
            <h4 class="
            text-gray-500
            capitalize
            mb-1
            "
            data-aos="fade-up"
            >Our Partners</h4>
            <h2 class="
            title-design
            text-3xl
            text-black/90
            "
            data-aos="fade-up"
            data-aos-delay="200"
            >Building Future Together</h2>
          </div>
        
          <Partners data-aos="fade-up" />
        </div>
      </section>
      
      <!-- student counselling -->
      <section class="
      py-12
      bg-blue-100/20
      ">
        <div class="
        container mx-auto w-11/12
        ">
        
          <Counselling :data="homePage"/>
        
        </div>
      </section>
      
      <!-- about us -->
      <section class="
      py-12
      bg-gray-50
      ">
        <div class="
        container mx-auto w-11/12
        ">
          <About :data="homePage" />
        </div>
      </section>
      
      <!-- our services -->
      <section class="
      py-12
      bg-gray-100
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
            ">Services</h4>
            <h2 
            data-aos="fade-up"
            data-aos-delay="200"
            class="
            title-design
            text-3xl
            text-black/90
            ">What We Offer</h2>
          </div>
        
          <div class="
          grid
          grid-cols-1
          md:grid-cols-3
          items-center
          gap-5
          ">
            <ServiceCard 
          data-aos="fade-up"  
          v-for="source in serviceItems" 
          :icon="source.icon"
          :title="source.title"
          :description="source.description"
          :path="'/services/' + source.slug"
          />
          </div>
          
        </div>
      </section>
      
      <!-- how we work -->
      <section class="
      py-12
      bg-blue-100/30
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
            ">Our Process</h4>
            <h2 
            data-aos="fade-up"
            data-aos-delay="200"
            class="
            title-design
            text-3xl
            text-black/90
            ">How We Work</h2>
          </div>
        
          <HowWeWork :data="homePage" />
        </div>
      </section>
      
      <!-- Voice of achievers -->
      <section class="
      py-12
      pb-22
      bg-white
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
            ">Success Story</h4>
            <h2 
            data-aos="fade-up"
            data-aos-delay="200"
            class="
            title-design
            text-3xl
            text-black/90
            ">Voice of Achievers</h2>
          </div>
        
          <Achivers data-aos="fade-up" prevIcon="i-lucide-chevron-left" nextIcon="i-lucide-chevron-right" />
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
      
      <!-- Contact Us -->
      <section class="
      py-12
      pb-22
      bg-blue-300/10
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
            ">Contact</h4>
            <h2 
            data-aos="fade-up"
            data-aos-delay="200"
            class="
            title-design
            text-3xl
            text-black/90
            ">Get in Touch</h2>
          </div>
        
          <ContactForm :contactImg="homePage?.contact" data-aos="fade-up" data-aos-delay="200" />
        </div>
      </section>
      
      <!-- modal form-->
       <section>
          <ModalForm />
       </section>
     
   </div>
 </template>
 
 <script lang="ts" setup>
import Counselling from '~/components/Counselling.vue';
import FAQ from '~/components/FAQ.vue';
import AOS from 'aos';

const apiBase = useRuntimeConfig().public.apiBase

const cardItems = ref([
  {
    icon: 'fa-solid fa-graduation-cap',
    title: '',
    description: '',
  },
  {
    icon: 'fa-solid fa-user-graduate',
    title: '',
    description: '',
  },
  {
    icon: 'fa-solid fa-headset',
    title: '',
    description: '',
  },
])

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




const serviceItems = ref([]);

const getServices = async () => {
  try {
    const response: any = await $fetch(`${apiBase}/services`);
    if (response && response.data) {
      serviceItems.value = response.data;
    }
  } catch (error) {
    console.error("Error fetching services:", error);
  }
}

const limitWords = (text: string, count: number) => {
  if (!text) return '';
  const clean = text.replace(/(<([^>]+)>)/gi, "");
  return clean.split(" ").slice(0, count).join(" ") + "...";
};

onMounted(() => {
  nextTick(() => {
    AOS.init({
      once: true, // animation once on scroll
      duration: 800
    });
  });
  
  AOS.refresh();
  
  getPage();
  getServices();
  
});
 </script>
 
 <style scoped>
 

 </style>