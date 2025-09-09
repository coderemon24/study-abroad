<template>
    <div class="overflow-hidden">
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
                <span class="text-gray-600">{{ countryPage.name }}</span>
            </div>
        </section>

        <!-- country hero -->
        <section v-if="countryPage?.contents" class="
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
     " :style="`background-image: url(${getImgUrl(countryPage?.contents?.hero_bg_img)})`">
            <div class="container mx-auto w-11/12 
        relative z-10
        top-0
        text-white
        px-5
        pt-12
        grid
        md:grid-cols-2
        grid-cols-1
        items-end
        ">
                <div data-aos="fade-left" class="
           pb-12
           md:pb-[12rem]
           ">
                    <h1 data-aos="fade-up" data-aos-delay="200" class="
             text-4xl
             md:text-8xl
             md:font-extrabold
             font-semibold
             mb-2
             ">{{ countryPage?.contents?.hero_title }}</h1>
                    <p data-aos="fade-up" data-aos-delay="400" class="
             
             ">{{ countryPage?.contents?.hero_subtitle }}</p>
             <NuxtLink data-aos="fade-up" :to="`/blog/${countryPage?.slug}`"
                        class="inline-block
                        cursor-pointer
                        bg-white
                        text-gray-900
                        px-4
                        md:px-6
                        py-3
                        mt-5
                        rounded-full
                        font-medium
                        hover:bg-gray-100
                        transition
                        ease-in-out
                        duration-300
                        group
                        text-sm
                        md:text-base
                        ">
                        Read More About {{ countryPage?.name }}
                        <span class="
                        group-hover:ml-2
                        transition-all
                        duration-300
                        ">
                            <i class="fa-solid fa-arrow-right-long ml-1"></i>
                        </span>
                    </NuxtLink>
                </div>

                <div data-aos="fade-right">
                    <img class="
             w-full
             md:w-3/4
             hidden
             md:block
             " :src="getImgUrl(countryPage?.contents?.hero_st_img)" :alt="countryPage?.contents?.hero_subtitle">
                </div>
            </div>
        </section>

        <!-- offer cards -->
        <section v-if="countryPage?.contents" class="
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
                <OfferCard data-aos="fade-up" v-for="item in cardItems" :icon="item.icon" :title="item.title"
                    :description="item.description" class="
            bg-white
            shadow-xl
            " />
            </div>
        </section>

        <!-- our partners -->
        <section v-if="partners" class="
     py-12
     bg-white
     ">
            <div class="
        container
        mx-auto
        w-11/12
        ">
                <div class="mb-10">
                    <h4 data-aos="fade-up" class="
            text-gray-500
            capitalize
            mb-1
            ">Country Partners</h4>
                    <h2 data-aos="fade-up" data-aos-delay="200" class="
            title-design
            text-3xl
            text-black/90
            ">
                        Our {{ countryPage?.name }} University Partners
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
                    <img data-aos="fade-up" v-for="(item, index) in partners" class="
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
            " :src="getImgUrl(item.image)" :alt="item.name">
                </div>

            </div>
        </section>

        <!-- why study in australia -->
        <section v-if="countryPage?.studies" class="
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
                    <h4 data-aos="fade-up" class="
            text-gray-500
            capitalize
            mb-1
            ">Choose Your University</h4>
                    <h2 data-aos="fade-up" data-aos-delay="200" class="
            title-design
            text-3xl
            text-black/90
            ">
                        Why Study in Australia
                    </h2>
                </div>

                <WhyStudyCountry :data="countryPage" />

            </div>
        </section>

        <!-- how much does it cost to study in australia -->
        <section v-if="countryPage?.contents" class="relative bg-gradient-to-r from-purple-700 to-blue-500 py-16 px-6">
            <div class="max-w-5xl mx-auto text-center text-white">
                <!-- Heading -->
                <h2 data-aos="fade-up" class="text-3xl md:text-4xl font-extrabold mb-4">
                    How Much Does it Cost to Study in <span class="text-yellow-300">Australia?</span>
                </h2>
                <p data-aos="fade-up" data-aos-delay="200" class="text-lg opacity-90 mb-10">
                    Here’s a quick breakdown of tuition fees for international students in Australia.
                </p>

                <!-- Cards Layout -->
                <div class="grid md:grid-cols-2 gap-8">
                    <!-- Bachelor’s Degree Card -->
                    <div data-aos="fade-left"
                        class="bg-white text-gray-800 shadow-lg rounded-2xl p-6 hover:scale-105 transition transform duration-300">
                        <h3 class="text-xl font-semibold mb-3">🎓 Undergrad/Bachelor’s Degree</h3>
                        <p class="text-lg font-bold text-blue-600">{{ countryPage?.contents?.under_cost }}</p>
                    </div>

                    <!-- Master’s Degree Card -->
                    <div data-aos="fade-right"
                        class="bg-white text-gray-800 shadow-lg rounded-2xl p-6 hover:scale-105 transition transform duration-300">
                        <h3 class="text-xl font-semibold mb-3">📘 Post-Graduate Master’s Degree</h3>
                        <p class="text-lg font-bold text-blue-600">{{ countryPage?.contents?.post_cost }}</p>
                    </div>
                </div>

                <!-- Link -->
                <div class="mt-10
                flex
                flex-col
                md:flex-row
                gap-5
                justify-center
                ">
                    <NuxtLink data-aos="fade-up" :to="`/blog/${countryPage?.slug}`"
                        class="inline-block
                        cursor-pointer
                        bg-white
                        text-gray-900
                        px-6
                        py-3
                        rounded-full
                        font-medium
                        hover:bg-gray-100
                        transition
                        ease-in-out
                        duration-300
                        group
                        ">
                        Read More About {{ countryPage?.name }}
                        <span class="
                        group-hover:ml-2
                        transition-all
                        duration-300
                        ">
                            <i class="fa-solid fa-arrow-right-long ml-1"></i>
                        </span>
                    </NuxtLink>
                    
                    <NuxtLink data-aos="fade-up" to="/book-appointment"
                        class="inline-block
                        cursor-pointer
                         bg-yellow-400 text-gray-900 px-6 py-3 rounded-full font-medium hover:bg-yellow-300 transition">
                        Book an Appointment
                    </NuxtLink>
                </div>
            </div>
        </section>

        <!-- why care2training -->
        <section v-if="countryPage?.contents" class="relative bg-blue-100/20  text-black/70 py-16 overflow-hidden">
            <!-- Background shapes -->
            <div class="absolute inset-0">
                <div class="absolute top-10 left-10 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
                <div class="absolute bottom-10 right-10 w-56 h-56 bg-white/10 rounded-full blur-3xl"></div>
            </div>

            <div
                class="container mx-auto px-6 lg:px-12 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

                <!-- Left Content -->
                <div data-aos="fade-right">
                    <h2 data-aos="fade-up" data-aos-delay="200"
                        class="text-4xl md:text-5xl font-bold leading-tight mb-6">
                        Why <span class="text-blue-800">Care2Training?</span>
                    </h2>
                    <p data-aos="fade-up" data-aos-delay="400" class="text-lg text-black/70 leading-relaxed mb-6">
                       <div v-html="countryPage?.contents?.why_description"></div>
                    </p>

                    <!-- Stats -->
                    <div class="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-6">
                        <div data-aos="fade-left" data-aos-delay="200"
                            class="bg-white/10 backdrop-blur-md p-6 rounded-2xl text-center shadow-lg hover:scale-105 transition">
                            <div class="text-3xl font-bold text-blue-800">{{ countryPage?.contents?.st_recruited }}</div>
                            <div class="text-sm mt-2">Students Recruited</div>
                        </div>
                        <div data-aos="fade-up" data-aos-delay="200"
                            class="bg-white/10 backdrop-blur-md p-6 rounded-2xl text-center shadow-lg hover:scale-105 transition">
                            <div class="text-3xl font-bold text-blue-800">{{ countryPage?.contents?.pgs_award }}</div>
                            <div class="text-sm mt-2">Prestigious Awards</div>
                        </div>
                        <div data-aos="fade-right" data-aos-delay="200"
                            class="bg-white/10 backdrop-blur-md p-6 rounded-2xl text-center shadow-lg hover:scale-105 transition">
                            <div class="text-3xl font-bold text-blue-800">{{ countryPage?.contents?.u_partner }}</div>
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
                    <h4 data-aos="fade-up" class="
            text-gray-500
            capitalize
            mb-1
            ">Success Story</h4>
                    <h2 data-aos="fade-up" data-aos-delay="200" class="
            title-design
            text-3xl
            text-black/90
            ">Voice of Achievers</h2>
                </div>

                <Achivers data-aos="fade-up" prevIcon="i-lucide-chevron-left" nextIcon="i-lucide-chevron-right" />
            </div>
        </section>

    </div>
    </div>
</template>

<script lang="ts" setup>
import AOS from 'aos';

useHead({
  title: 'Care2 Training – Country Information for Study Abroad, Work Abroad & Recruitment Services',
  meta: [
    {
      name: 'description',
      content: 'Explore detailed country information with Care2 Training. Get insights on study abroad, work abroad, and recruitment services to make informed decisions for your global journey.'
    }
  ]
});

const route = useRoute()
const slug = route.params.slug
const apiBase = useRuntimeConfig().public.apiBase
const baseUrl = useRuntimeConfig().public.baseUrl

const cardItems = ref([
    {
        icon: 'fa-solid fa-graduation-cap',
        title: '',
        description: '',
    },
    {
        icon: 'fa-solid fa-briefcase',
        title: '',
        description: '',
    },
    {
        icon: 'fa-solid fa-earth-europe',
        title: '',
        description: '',
    },
])

const countryId = ref(null);
const countryPage = ref([])
const notFound = ref(false)  
const router = useRouter()

const getCountryPage = async () => {
    try {
        const response: any = await $fetch(`${apiBase}/country/${slug}`);
        
        if (!response || !response.data) {
            router.push('/errors/404')
            return
        }

        countryPage.value = response.data
        countryId.value = response.data.id

        cardItems.value = [
            {
                icon: 'fa-solid fa-graduation-cap',
                title: response.data?.contents?.ss_title || '',
                description: response.data?.contents?.ss_description || '',
            },
            {
                icon: 'fa-solid fa-briefcase',
                title: response.data?.contents?.rights_title || '',
                description: response.data?.contents?.rights_description || '',
            },
            {
                icon: 'fa-solid fa-earth-europe',
                title: response.data?.contents?.visa_title || '',
                description: response.data?.contents?.visa_description || '',
            },
        ]

    } catch (err) {
      router.push('/errors/404')
      return
    }
}


const partners = ref([]);
const getPartners = async () => {
    const response: any = await $fetch(`${apiBase}/partners/${countryId.value}`);
    if (response) {
        partners.value = response.data;
    }
}


const getImgUrl = (url: string) => {
    return `${baseUrl}/${url}`
}



onMounted(async() => {
    nextTick(() => {
        AOS.init({
            once: true, // animation once on scroll
            duration: 800
        });
    });

    AOS.refresh();

    await getCountryPage();
    await getPartners();
});
</script>

<style>
.country_hero {
    /* background-image: url('~/assets/images/country/australia.jpg'); */
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
}
</style>