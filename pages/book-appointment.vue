<template>
  <div class="
  py-8
  text-black/70
  ">
    <!-- breadcrumb -->
    <section class="container mx-auto w-11/12">
      <!----- Breadcrumb ------->
      <div class="breadcrumb flex items-center gap-2 text-sm mb-6">
        <NuxtLink class="text-blue-700 hover:underline" to="/">Home</NuxtLink>
        <i class="fa-solid fa-chevron-right text-gray-500"></i>
        <span class="text-gray-600">Book Appointment</span>
      </div>
    </section>

    <!-- book appointment -->
    <section>
      <div class="container mx-auto w-11/12">
        <h1 
        data-aos="fade-up"
        class="
        text-3xl
        font-semibold
        md:text-4xl
        title-design
        mt-10
        ">Book an Appointment</h1>


        <div 
        data-aos="fade-up"
        class="
      grid
      grid-cols-1
      md:grid-cols-3
      mt-12
      bg-white
      rounded-xl
      overflow-hidden
      shadow-lg
      ">
          <div class="p-8
         md:col-span-2
         ">
            <AppointmentForm />
          </div>
          <div>
            <img class="
          w-full
          h-full
          " :src="img" alt="">
          </div>
        </div>
        
      </div>

    </section>

    <!-- join community -->
    <section class="
     container
     mx-auto
     w-11/12
     py-8
     ">
      <div class="
      mt-10
      bg-white
      p-5
      md:p-10
      rounded-lg
      shadow
      ">
        <div class="
          mb-3
          md:w-[60%]
          md:mx-auto
          md:text-center
          md:flex
          md:flex-col
          md:items-center
          ">
          <h1 class="
            text-2xl
            font-semibold
            text-blue-800
            md:text-center
            md:text-4xl
            ">
            Join Our Community of Students.
          </h1>
          <p class="
            text-gray-500
            mt-3
            text-justify
            md:text-center
            ">
            Connect with like-minded learners, share experiences, and grow together in a supportive student community.
          </p>
          <NuxtLink class="
            btn-outline
            " to="#contact">
            <span class="relative z-10">Join Now</span>
          </NuxtLink>
        </div>
      </div>
    </section>

  </div>
</template>

<script lang="ts" setup>
import img from '~/public/assets/images/appointment.jpg'
import AOS from 'aos';
import AppointmentForm from '~/components/AppointmentForm.vue';

onMounted(() => {
  nextTick(() => {
    AOS.init({
      once: true, // animation once on scroll
      duration: 800
    });
  });
  
  AOS.refresh();
});

</script>

<style></style>