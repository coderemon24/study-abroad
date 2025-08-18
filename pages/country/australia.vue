<template>
    <div class="
  py-8
  text-black/70
  ">

        <section class="container mx-auto w-11/12">
            <!----- Breadcrumb ------->
            <div class="breadcrumb flex items-center gap-2 text-sm mb-6">
                <NuxtLink class="text-blue-700 hover:underline" to="/">Home</NuxtLink>
                <i class="fa-solid fa-chevron-right text-gray-500"></i>
                <span class="text-gray-600">Country</span>
                <i class="fa-solid fa-chevron-right text-gray-500"></i>
                <span class="text-gray-600">Australia</span>
            </div>
        </section>

        <!-- country hero -->
        <section class="
     relative
     before:content-['']
     before:absolute
     before:top-0
     before:left-0
     before:w-full
     before:h-full
     before:bg-gradient-to-r
     before:to-blue-700/80
     before:from-purple-700
     country_hero
     ">
            <div class="container mx-auto w-11/12 
        relative z-10
        top-0
        text-white
        px-5
        pt-12
        grid
        grid-cols-2
        items-end
        ">
                <div class="
           pb-12
           md:pb-[12rem]
           ">
                    <h1 class="
             text-4xl
             md:text-8xl
             md:font-extrabold
             font-semibold
             mb-2
             ">Study in Australia</h1>
                    <p class="
             
             ">Apply for August 2025 Session</p>
                </div>

                <div>
                    <img class="
             w-full
             md:w-3/4
             " :src="girl" alt="">
                </div>
            </div>
        </section>

        <!-- offer cards -->
        <section class="
     py-12
     ">
            <div class="
        container 
        mx-auto 
        w-11/12
        grid
        grid-cols-1
        md:grid-cols-3
        gap-8
        md:gap-15
        ">
                <OfferCard v-for="item in cardItems" :icon="item.icon" :title="item.title"
                    :description="item.description" class="
            bg-white
            shadow-xl
            " />
            </div>
        </section>

        <!-- our partners -->
        <section class="
     py-12
     bg-white
     ">
            <div class="
        container
        mx-auto
        w-11/12
        ">
                <div class="mb-10">
                    <h4 class="
            text-gray-500
            capitalize
            mb-1
            ">Country Partners</h4>
                    <h2 class="
            title-design
            text-3xl
            text-black/90
            ">
                        Our Australian University Partners
                    </h2>
                </div>

                <div class="
          flex
          flex-row
          flex-wrap
          gap-0
          justify-center
          items-center
          md:gap-5
          ">
                    <img v-for="(item, index) in Array(40)" class="
            w-1/3
            md:w-1/5
            lg:w-1/6
            xl:w-1/7
            partner
            grayscale
            hover:grayscale-0
            cursor-pointer
            transition-all
            duration-300
            ease-in-out
            " :src="utas" alt="">
                </div>

            </div>
        </section>

        <!-- our partners -->
        <section class="
     bg-blue-100/10
     py-12
     pb-0
     ">
            <div class="
        container
        mx-auto
        w-11/12
        ">
                <div class="mb-10">
                    <h4 class="
            text-gray-500
            capitalize
            mb-1
            ">Choose Your University</h4>
                    <h2 class="
            title-design
            text-3xl
            text-black/90
            ">
                        Why Study in Australia
                    </h2>
                </div>

                <WhyStudyCountry />

            </div>
        </section>

        <!-- how much does it cost to study in australia -->
        <section class="relative bg-gradient-to-r from-purple-700 to-blue-500 py-16 px-6">
            <div class="max-w-5xl mx-auto text-center text-white">
                <!-- Heading -->
                <h2 class="text-3xl md:text-4xl font-extrabold mb-4">
                    How Much Does it Cost to Study in <span class="text-yellow-300">Australia?</span>
                </h2>
                <p class="text-lg opacity-90 mb-10">
                    Here’s a quick breakdown of tuition fees for international students in Australia.
                </p>

                <!-- Cards Layout -->
                <div class="grid md:grid-cols-2 gap-8">
                    <!-- Bachelor’s Degree Card -->
                    <div
                        class="bg-white text-gray-800 shadow-lg rounded-2xl p-6 hover:scale-105 transition transform duration-300">
                        <h3 class="text-xl font-semibold mb-3">🎓 Undergrad Bachelor’s Degree</h3>
                        <p class="text-lg font-bold text-blue-600">A$15,000 – 49,500 / Annually</p>
                    </div>

                    <!-- Master’s Degree Card -->
                    <div
                        class="bg-white text-gray-800 shadow-lg rounded-2xl p-6 hover:scale-105 transition transform duration-300">
                        <h3 class="text-xl font-semibold mb-3">📘 Post-Graduate Master’s Degree</h3>
                        <p class="text-lg font-bold text-blue-600">A$20,000 – 50,000 / Annually</p>
                    </div>
                </div>

                <!-- Link -->
                <div class="mt-10">
                    <a href="#"
                        class="inline-block bg-yellow-400 text-gray-900 px-6 py-3 rounded-full font-medium hover:bg-yellow-300 transition">
                        Learn More About Costs →
                    </a>
                </div>
            </div>
        </section>

        <!-- why care2training -->
        <section class="relative bg-blue-100/20  text-black/70 py-16 overflow-hidden">
            <!-- Background shapes -->
            <div class="absolute inset-0">
                <div class="absolute top-10 left-10 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
                <div class="absolute bottom-10 right-10 w-56 h-56 bg-white/10 rounded-full blur-3xl"></div>
            </div>

            <div
                class="container mx-auto px-6 lg:px-12 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

                <!-- Left Content -->
                <div data-aos="fade-right">
                    <h2 class="text-4xl md:text-5xl font-bold leading-tight mb-6">
                        Why <span class="text-blue-800">Care2Training?</span>
                    </h2>
                    <p class="text-lg text-black/70 leading-relaxed mb-6">
                        For nearly <span class="font-semibold">25 years</span>, we’ve been helping students achieve
                        their higher education dreams abroad. With a <span class="font-semibold">99% success
                            rate</span>, we proudly stand as one of Bangladesh’s leading education consultants.
                    </p>
                    <p class="text-lg text-black/70 leading-relaxed">
                        Partnering with top-ranked universities across <span
                            class="underline decoration-blue-600">Australia, Canada, Malaysia, UK, and the USA</span>,
                        we provide award-winning guidance every step of the way.
                    </p>

                    <!-- Stats -->
                    <div class="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-6">
                        <div
                            class="bg-white/10 backdrop-blur-md p-6 rounded-2xl text-center shadow-lg hover:scale-105 transition">
                            <div class="text-3xl font-bold text-blue-800">20K+</div>
                            <div class="text-sm mt-2">Students Recruited</div>
                        </div>
                        <div
                            class="bg-white/10 backdrop-blur-md p-6 rounded-2xl text-center shadow-lg hover:scale-105 transition">
                            <div class="text-3xl font-bold text-blue-800">60+</div>
                            <div class="text-sm mt-2">Prestigious Awards</div>
                        </div>
                        <div
                            class="bg-white/10 backdrop-blur-md p-6 rounded-2xl text-center shadow-lg hover:scale-105 transition">
                            <div class="text-3xl font-bold text-blue-800">200+</div>
                            <div class="text-sm mt-2">Universities Partnered</div>
                        </div>
                    </div>
                </div>

                <!-- Right Side Image -->
                <div class="flex justify-center lg:justify-end" data-aos="fade-left">
                    <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="Study Abroad"
                        class="w-80 drop-shadow-2xl hover:scale-110 transition duration-500" />
                </div>
            </div>
        </section>

        <!-- Voice of achievers -->
        <section class="
            py-12
            pb-22
            ">
            <div class="
        container mx-auto w-11/12
        ">

                <div class="mb-10">
                    <h4 class="
            text-gray-500
            capitalize
            mb-1
            ">Success Story</h4>
                    <h2 class="
            title-design
            text-3xl
            text-black/90
            ">Voice of Achievers</h2>
                </div>

                <Achivers prevIcon="i-lucide-chevron-left" nextIcon="i-lucide-chevron-right" />
            </div>
        </section>

    </div>
</template>

<script lang="ts" setup>
import girl from '~/assets/images/country/australian.webp';
import utas from '~/assets/images/country/utas.png';

const cardItems = ref([
    {
        icon: 'fa-solid fa-graduation-cap',
        title: 'Scholarship',
        description: 'Up to 50% grant or scholarship among the best universities.',
    },
    {
        icon: 'fa-solid fa-briefcase',
        title: 'Work Rights',
        description: 'Up to 5-Years of post-study work rights',
    },
    {
        icon: 'fa-solid fa-earth-europe',
        title: 'Quick Visa',
        description: 'Personalized VISA service tailored to your individual need',
    },
])

</script>

<style>
.country_hero {
    background-image: url('~/assets/images/country/australia.jpg');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
}
</style>