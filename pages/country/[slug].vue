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
             <NuxtLink data-aos="fade-up" :to="`/book-appointment`"
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
                        Book an Appointment
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

        <!-- our partners -->
        <section v-if="partners && partners.length" class="
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

        <!-- page contents -->
         <section class="
         bg-white
         p-12
         ">
            <div class="
            container
            mx-auto
            w-11/12
            ">
                <div class="
                blog-content
                ">
                    <div v-html="countryPage?.contents?.page_description"></div>
                </div>
            </div>
         </section>
        
        <!-- our articles -->
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
            ">Articles</h4>
                    <h2 data-aos="fade-up" data-aos-delay="200" class="
            title-design
            text-3xl
            text-black/90
            ">Our Recent Blogs</h2>
                </div>

                <RecentBlogs data-aos="fade-up" prevIcon="i-lucide-chevron-left" nextIcon="i-lucide-chevron-right" />
            </div>
        </section>

    </div>
    </div>
</template>

<script lang="ts" setup>
import AOS from 'aos';


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

useSeoMeta({
  title: () => countryPage.value?.meta_title || "Country",
  description: () =>
    countryPage.value?.meta_description ||
    "Learn about Care2 Training’s mission to guide students and professionals worldwide with trusted study abroad, career, and recruitment services.",
  keywords: () =>
    countryPage.value?.meta_keywords ||
    "Care2 Training, Study Abroad, Career, Recruitment, Education"
});

</script>

<style>
.country_hero {
    /* background-image: url('~/assets/images/country/australia.jpg'); */
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
}

:deep(.blog-content *) {
  all: revert;
  display: revert;
}
</style>