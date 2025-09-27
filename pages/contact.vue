<template>
   <div class="overflow-hidden">
      <div class="py-8 text-black/80">
      <div class="container w-11/12 mx-auto">
         <!----- Breadcrumb ------->
         <div class="breadcrumb flex items-center gap-2 text-sm mb-6">
            <NuxtLink class="text-blue-700 hover:underline" to="/">Home</NuxtLink>
            <i class="fa-solid fa-chevron-right text-gray-500"></i>
            <span class="text-gray-600">Contact</span>
         </div>
         <!--- page top -->
         <div class="
          mb-3
          md:w-[60%]
          md:mx-auto
          md:text-center
          md:flex
          md:flex-col
          md:items-center
          ">
            <h1 
            data-aos="fade-up"
            class="
            text-2xl
            font-semibold
            text-blue-800
            md:text-center
            md:text-3xl
            ">
               Get Started With Free Consultancy!
            </h1>
            <p 
            data-aos="fade-up"
            data-aos-delay="200"
            class="
            text-gray-500
            mt-3
            text-justify
            md:text-center
            ">
               Get expert guidance for free! Explore your options and plan your next steps with personalized
               consultancy—no cost, no obligation.
            </p>
            <NuxtLink
            data-aos="fade-up"
            data-aos-delay="400"
            class="
            btn-outline
            w-[15rem]!
            py-3!
            " to="book-appointment">
               <span class="relative z-10">Book an Appointment</span>
            </NuxtLink>
         </div>

         <!-- contact information -->
         <div class="
          pb-10
          ">
            <div class="mt-6">
               <h2 
               data-aos="fade-up"
               class="
              text-2xl
              title-design
              ">Contact Information</h2>
            </div>
            <div class="
            grid
            grid-cols-1
            md:grid-cols-2
            lg:grid-cols-3
            gap-5
            mt-10
            ">
            
               <div class="
                  p-6
                  bg-white
                  shadow-md
                  rounded-lg
               "
               data-aos="fade-up"
               data-aos-delay="200"
               v-for="(item, index) in contactInfos"
               >
                  <!-- address -->
                  <div
                  
                  class="
                     flex
                     flex-row
                     gap-4
               ">
                     <p class="
                  bg-blue-700
                  w-8
                  h-8
                  flex
                  items-center
                  justify-center
                  text-white
                  text-lg
                  mb-3
                  rounded-md
                  ">
                        <i class="fa-solid fa-location-dot"></i>
                     </p>

                     <div class="
                  w-4/5
                  ">
                        <h3 class="
                     text-lg
                     font-semibold
                     -mt-1
                     mb-1
                     ">{{ item?.title }}</h3>
                        <a class="
                     text-gray-600
                     mb-2
                     block
                     hover:text-blue-700
                     transition-all
                     "
                     target="_blank"
                     :href="getHref(item, 'map')"
                     >
                           {{ item?.address }}
                        </a>
                     </div>
                  </div>
                  <!-- phone -->
                  <div
                  
                  class="
                     flex
                     flex-row
                     gap-4
               ">
                     <p class="
                  bg-blue-700
                  w-8
                  h-8
                  flex
                  items-center
                  justify-center
                  text-white
                  text-lg
                  mb-3
                  rounded-md
                  ">
                        <i class="fa-solid fa-phone"></i>
                     </p>

                     <div class="
                  w-4/5
                  ">
                        <a class="
                     text-gray-600
                     mb-2
                     block
                     hover:text-blue-700
                     transition-all
                     " 
                     target="_blank"
                     :href="getHref(item, 'phone')"
                     >
                           {{ item?.phone }}
                        </a>
                     </div>
                  </div>
                  <!-- email -->
                  <div
                  
                  class="
                     flex
                     flex-row
                     gap-4
               ">
                     <p class="
                  bg-blue-700
                  w-8
                  h-8
                  flex
                  items-center
                  justify-center
                  text-white
                  text-lg
                  mb-3
                  rounded-md
                  ">
                        <i class="fa-solid fa-envelope"></i>
                     </p>

                     <div class="
                  w-4/5
                  ">
                        <a class="
                     text-gray-600
                     mb-2
                     block
                     hover:text-blue-700
                     transition-all
                     "
                     :href="getHref(item, 'email')"
                     target="_blank"
                     >
                           {{ item?.email }}
                        </a>
                     </div>
                  </div>
                  
               </div>
               
            </div>
         </div>
         <!----- page contents ----->
         <div id="contact" class="
          md:flex
          gap-5
          ">

            <div class="
            my-6
            md:p-6
            rounded-lg
            w-full
            md:w-1/2
            ">
               <ContactForm data-aos="fade-left" :contactPage="true" />
            </div>

            <div 
            data-aos="fade-right"
            class="
            py-6
            md:pt-8.5
            w-full
            md:w-1/2
            ">
               <div>
                  <iframe
                     :src="defContact.map"
                     width="100%" style="border:0;" class="
                h-[400px]
                md:h-[500px]
                md:mt-4
                rounded-lg
                " loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
               </div>
            </div>
         </div>
      </div>
   </div>
   </div>
</template>

<script lang="ts" setup>
import AOS from 'aos';

const apiBase = useRuntimeConfig().public.apiBase;
const contactInfos = ref([]);
const defContact = ref({});
const metaData = ref({});
const getDefContact = async () => {
   try {
      const response :any = await $fetch(`${apiBase}/contact-infos`);
      
      if(response)
      {
         defContact.value = response.data;
         metaData.value = response.meta_info;
      }
      
   } catch (error) {
      console.error('Error fetching contact info:', error);
   }
};

const getAdditionalContacts = async () => {
   try {
      const response :any = await $fetch(`${apiBase}/additional-contact`);
      
      if(response && response.data)
      {
         contactInfos.value = response.data;
      }
      
   } catch (error) {
      console.error('Error fetching additional contacts:', error);
   }
};

const getHref = (item: any, type: "phone" | "email" | "map" = "map") => {
  if(type === "email" && item.email){
    return `mailto:${item.email.trim()}`;
  }
  if(type === "phone" && item.phone){
    return `tel:${item.phone.replace(/\s+/g, "")}`;
  }
  if(type === "map" && item.map_link && item.map_link !== "0"){
    return item.map_link;
  }
  return "#";
};


onMounted(() => {
  nextTick(() => {
    AOS.init({
      once: true, // animation once on scroll
      duration: 800
    });
  });
  
  AOS.refresh();
  
   getDefContact();
   getAdditionalContacts();
});

useSeoMeta({
  title: () => metaData.value?.title || "Contact",
  description: () =>
    metaData.value?.description ||
    "Learn about Care2 Training’s mission to guide students and professionals worldwide with trusted study abroad, career, and recruitment services.",
  keywords: () =>
    metaData.value?.keywords ||
    "Care2 Training, Study Abroad, Career, Recruitment, Education"
});

</script>

<style></style>