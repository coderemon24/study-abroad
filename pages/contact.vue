<template>
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
               <div
               data-aos="fade-up"
               data-aos-delay="200"
               v-for="item in contactInfos" class="
              bg-white
              p-6
              rounded-lg
              flex
              flex-row
              gap-4
              shadow-md
              ">
                  <p class="
                bg-blue-700
                w-13
                h-13
                flex
                items-center
                justify-center
                text-white
                text-xl
                mb-3
                rounded-md
                ">
                     <i :class="item.icon"></i>
                  </p>

                  <div class="
                w-4/5
                ">
                     <h3 class="
                  text-lg
                  font-semibold
                  -mt-1
                  mb-1
                  ">{{ item.title }}</h3>
                     <p v-for="address in item.addresses" class="
                  text-gray-600
                  mb-2
                  ">
                        {{ address.address }}
                     </p>
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
                     src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3514.0085844141754!2d90.3868791!3d23.7507284!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b9ac5fce59cb%3A0xfd3e17cbaa2f7805!2sKaizen%20IT%20Ltd.!5e1!3m2!1sen!2sbd!4v1755167494499!5m2!1sen!2sbd"
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
</template>

<script lang="ts" setup>
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

const contactInfos = [
   {
      icon: 'fa-solid fa-location-dot',
      title: 'Office Location:',
      addresses: [
         {address: 'Care2Training International Gazi Tower (3rd floor) House: 02, Green Road Dhanmondi, Dhaka 1205'},
         {address: 'Care2Training International Gazi Tower (3rd floor) House: 02, Green Road Dhanmondi, Dhaka 1205'}
      ]
   },
   {
      icon: 'fa-solid fa-phone',
      title: 'Contact Number:',
      addresses: [
         {address: '+880 2 8888 8888'},
         {address: '+880 2 8888 8888'},
         {address: '+880 2 8888 8888'},
      ]
   },
   {
      icon: 'fa-solid fa-envelope',
      title: 'Email:',
      addresses: [
         {address: 'info@care2training.com'},
         {address: 'info.uk@care2training.com'},
         {address: 'info.australia@care2training.com'},
         {address: 'info.us@care2training.com'},
         {address: 'info.canada@care2training.com'},
      ]
   },
];

</script>

<style></style>