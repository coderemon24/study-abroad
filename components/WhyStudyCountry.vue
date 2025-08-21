<template>
  <section class="relative ">
    <div class=" grid grid-cols-1 md:grid-cols-2 gap-12">
      
      <!-- Left: Timeline -->
      <div class="relative">
        <div class="absolute left-5 top-0 bottom-0 w-1 bg-gradient-to-tr from-indigo-600 to-purple-500 rounded-full"></div>
        
        <div
        data-aos="fade-up"
          v-for="(fact, index) in facts"
          :key="index"
          class="relative mb-5 pl-16"
        >
          <!-- Dot -->
          <div
            class="absolute left-0 w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-tr from-indigo-600 to-purple-500 text-white font-bold shadow-lg"
          >
            {{ index + 1 }}
          </div>
          
          <!-- Card -->
          <div
            class="bg-white/20 backdrop-blur-xl p-6 rounded-2xl shadow-md hover:translate-x-2 transition-transform"
          >
            <p class="text-black/70 text-lg font-medium leading-relaxed">
              {{ fact }}
            </p>
          </div>
        </div>
      </div>

      <!-- Right: Image / Visual -->
      <div class="flex justify-center items-center">
        <div class="relative 
        bottom-0
        ">
          <img
          data-aos="fade-right"
            src="~/assets/images/country/australian.webp"
            alt="Student"
            class="w-full h-full object-cover -mb-8"
          />
          <!-- Glow effect -->
          <div class="absolute inset-0 rounded-3xl bg-gradient-to-r from-indigo-500 to-cyan-400 blur-3xl opacity-30 -z-10"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const facts = [
  "Australia is currently home to nearly 700,000 international students.",
  "7 of the best student cities are located in Australia.",
  "Australian universities rank in the world’s top 50 across many study areas.",
  "The Australian Government has invested over AUD $300 million in scholarships for international students.",
  "You can gain work experience while you study in Australia.",
  "An Australian qualification will attract potential employers globally."
];
</script>
