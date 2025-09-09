<template>
    <div class="
  bg-white
  text-black/70
  pt-5
  border-t
  border-blue-700/20
  ">
        <footer class="container w-11/12 mx-auto">
            <!-- footer top -->
            <div class="
        py-4
        border-b
        border-gray-300
        md:flex
        md:justify-between
        ">
                <!---- man with msg --->
                <div class="
                flex
                items-center
                justify-center
                flex-col
                gap-2
                w-[80%]
                mx-auto
                md:flex-row
                md:justify-start
                md:gap-8
                md:w-1/2
                md:mx-0
                ">
                    <img class="
                        w-12
                        h-12
                        rounded-full
                        ring-2
                        ring-blue-900
                        " :src="officer" alt="image">

                    <p class="
                    text-sm
                    text-gray-500
                    text-center
                    md:text-left
                    md:text-[1rem]
                    ">
                        Work with us to secure your future. Schedule a call to learn more about our services.
                    </p>
                </div>

                <div class="
                flex
                items-center
                justify-center
                gap-5
                pt-3
                py-2
                ">
                    <i class="fa-solid text-blue-700 text-3xl fa-comments"></i>
                    <div>
                        <p class="">Have any queries?</p>
                        <p>
                            <span class="">Call: </span>
                            <a class="text-gray-600" href="#">{{ contactInfo.phone }}</a>
                        </p>
                    </div>
                </div>

            </div>

            <!-- footer middle -->
            <div class="
             py-8
             md:grid
             md:grid-cols-4
             md:gap-10
             ">
                <div class="mb-1">
                    <div>
                        <img class="w-20" :src="getImgUrl(gSettings?.site_logo)" alt="care2training logo" >
                    </div>
                    
                    <p class="
                    
                    mt-4
                    ">
                        {{ contactInfo.address }}
                    </p>

                    <!--social icons-->
                    <ul class="
                    flex
                    gap-2
                    items-center
                    justify-start
                    mt-4
                    ">
                        <li v-for="item in socialIcons">
                            <a target="_blank" class="
                            social_icon
                            text-blue-700!
                            ring-blue-700!
                            hover:bg-blue-700!
                            hover:text-white!
                            w-9!
                            h-9!
                            text-[1rem]!
                            " :href="item.href">
                                <i :class="item.icon"></i>
                            </a>
                        </li>
                    </ul>
                </div>

                <div class="
                mt-4
                md:mt-0
                ">
                    <h4 class="
                    text-black/90
                    font-semibold
                    relative
                    before:absolute
                    before:content-['']
                    before:h-[2px]
                    before:w-12
                    before:bg-blue-700
                    before:bottom-0
                    mb-3
                    text-xl
                    ">Quick Links</h4>

                    <ul>
                        <li v-for="item in quickLinks">
                            <NuxtLink class="
                            flex
                            items-center
                            gap-5
                            hover:text-blue-700
                            transition-all
                            duration-300
                            " :to="item.href">
                                {{ item.name }}
                        </NuxtLink>
                        </li>
                    </ul>
                    
                </div>

                <div class="
                mt-4
                md:mt-0
                ">
                    <h4 class="
                    text-black/90
                    font-semibold
                    relative
                    before:absolute
                    before:content-['']
                    before:h-[2px]
                    before:w-12
                    before:bg-blue-700
                    before:bottom-0
                    mb-3
                    text-xl
                    ">Top Study Destinations</h4>

                    <ul>
                        <li v-for="item in destinations">
                            <NuxtLink class="
                            flex
                            items-center
                            gap-5
                            hover:text-blue-700
                            transition-all
                            duration-300
                            " :to="`/country/${item.slug}`">
                                {{ item.name }}
                        </NuxtLink>
                        </li>
                    </ul>
                    
                </div>
                
                <div class="
                mt-4
                md:mt-0
                ">
                    <h4 class="
                    text-black/90
                    font-semibold
                    relative
                    before:absolute
                    before:content-['']
                    before:h-[2px]
                    before:w-12
                    before:bg-blue-700
                    before:bottom-0
                    mb-3
                    text-xl
                    ">Business Hours</h4>

                    <ul>
                        <li>
                            <h4 class="
                            text-lg
                            text-black/90
                            "><b>Uk:</b> Monday to Friday 9am - 5pm</h4>
                        </li>
                        <li>
                            <h4 class="
                            text-lg
                            text-black/90
                            "><b>BD:</b> Saturday to Thursday 10am - 6pm</h4>
                        </li>
                    </ul>
                    <!-- subscribe -->
                    <form 
                    @submit.prevent="submitForm"
                    class="
                    
                    ">
                       <h3 class="
                       text-blue-700
                       text-lg
                       mt-2
                       tracking-wider
                       mb-[-0.6rem]
                       ">Newsletter</h3>
                        <div class="
                        py-4
                        relative
                        ">
                            <input 
                        v-model="formData.email"
                        class="
                        bg-gray-200
                        ring-1
                        ring-blue-700
                        text-black
                        placeholder:text-gray-600
                        py-3
                        px-4
                        md:py-2
                        md:px-3
                        rounded-tl-full
                        rounded-bl-full
                        focus:outline-none
                        text-sm
                        " type="text" placeholder="example@gmail.com">
                        <button class="
                        bg-blue-700
                        text-white
                        py-[0.75rem]
                        px-4
                        md:py-2
                        md:px-3
                        rounded-tr-full
                        rounded-br-full
                        hover:bg-blue-700
                        hover:text-white
                        cursor-pointer
                        transition-all
                        ease-in-out
                        duration-300
                        absolute
                        left-[47%]
                        md:left-[12.5rem]
                        md:right-auto
                        top-[0.9rem]
                        md:top-[0.9rem]
                        z-10
                        text-sm
                        "> <i class="fa-solid text-xl fa-paper-plane"></i> </button>
                        </div>
                    
                    <p v-if="errors.email" class="text-red-600 text-sm mt-1">{{ errors.email[0] }}</p>
                </form>
                </div>

            </div>
            
            <!-- footer address -->
            <div class="
            py-5
            grid
            grid-cols-1
            gap-5
            md:grid-cols-4
            md:gap-10
            border-t
            border-gray-300
            ">
                <div 
                v-for = "(item, index) in footerAddress"
                class="
                flex
                gap-3
                ">
                    <div class="
                    bg-blue-700
                    w-18
                    h-18
                    rounded-lg
                    flex
                    items-center
                    justify-center
                    text-3xl
                    "
                    :class="[
                        index === 3 ? 'w-[9rem] md:w-[15rem]' : '',
                        index === 2 ? 'w-[11.9rem] md:w-[20rem]' : ''
                    ]"
                    >
                        <i :class="item.icon" class="text-white"></i>
                    </div>
                    <div>
                        <p class="
                        text-blue-700
                        text-lg
                        font-medium
                        ">{{ item.title }}</p>
                        <p class="
                        hover:text-blue-700
                        transition-all
                        duration-300
                        cursor-pointer
                        "
                        v-for="phone in item.contents"
                        >{{ phone }}</p>
                    </div>
                </div>
            </div>
            
            <!-- footer bottom -->
            <div class="
            text-black/60
            py-4
            flex
            flex-col
            md:flex-row
            items-center
            justify-between
            gap-2
            border-t
            border-gray-300
            text-xs
            md:text-sm
            ">
                <p>
                    Copyright &copy; {{  year  }} Care2Training - All Rights Reserved.
                </p>
                <ul class="
                flex
                gap-2
                ">
                    <li><NuxtLink class="
                        hover:text-blue-700
                        transition-all
                        duration-300
                        " 
                        to="/terms-and-conditions"
                        >Terms & Conditions</NuxtLink></li>
                    <li><NuxtLink class="
                        transition-all
                        duration-300
                        hover:text-blue-700
                        " 
                        to="/privacy-policy"
                        >Privacy Policy</NuxtLink></li>
                </ul>
            </div>
            
            <a 
            :href="`https://wa.me/${ contactInfo.phone }`" target="_blank"
            class="
            bg-green-500
            text-white
            fixed
            bottom-10
            right-8
            w-14
            h-14
            flex
            items-center
            justify-center
            rounded-full
            text-4xl
            p-3
            z-50
            "
            :class="[
                scrollButton ? 'bottom-25' : ''
            ]"
            >
                <i class="fa-brands fa-whatsapp"></i>
            </a>
            
            <!-- click to top -->
            <button
            v-if="scrollButton"
            class="
            fixed
            bottom-10
            right-9
            bg-blue-700
            w-12
            h-12
            rounded-full
            flex
            items-center
            justify-center
            z-50
            cursor-pointer
            " @click="scrollTop">
                <i class="fa-solid fa-chevron-up text-white"></i>
            </button>

        </footer>
    </div>
</template>

<script lang="ts" setup>
import manImg from '~/public/assets/images/officer.jpg';
import mainLogo from '~/public/assets/images/logo.webp'
import { get } from '@nuxt/ui/runtime/utils/index.js';

const officer = ref(manImg);
const logo = ref(mainLogo);
const socialIcons = [
    {
        name: 'facebook',
        icon: 'fa-brands fa-facebook-f',
        href: 'https://www.facebook.com/care2traininguk/',
    },
    {
        name: 'twitter',
        icon: 'fa-brands fa-twitter',
        href: '#',
    },
    {
        name: 'instagram',
        icon: 'fa-brands fa-instagram',
        href: 'https://www.instagram.com/care2training/',
    },
    {
        name: 'linkedin',
        icon: 'fa-brands fa-linkedin',
        href: 'https://www.linkedin.com/company/care2-training',
    },
];
const quickLinks = ref([
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Events', href: '/events' },
    { name: 'Blogs', href: '/blogs' },
    { name: 'Book Appointment', href: '/book-appointment' },
]);

const footerAddress = ref([
   {
    title: 'Call Us',
    icon: 'fa-solid fa-phone',
    contents:[
        '+880 1842-497766',
        '+44 0203 576 2072'
    ]
   },
   {
    title: 'Email Us',
    icon: 'fa-solid fa-envelope',
    contents:[
        'info@care2training.com',
        'study@care2training.com'
    ]
   },
   {
    title: 'Dhaka Office',
    icon: 'fa-solid fa-location-dot',
    contents:[
        `622 Mizan Square (13th Floor, 13/B),
Begum Rokeya Avenue,
West Kazipara, Mirpur, Dhaka, Bangladesh`
    
    ]
   }, 
   {
    title: 'UK Office',
    icon: 'fa-solid fa-location-dot',
    contents:[
        `Unit 301, 3rd Floor, 7 Kirkdale Road, Bushwood, London E11 1HP, UK
0203 576 2072
`
    
    ]
   } 
]);
const year = new Date().getFullYear();
const scrollButton = ref(false);

onMounted(() => {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            scrollButton.value = true;
        } else {
            scrollButton.value = false;
        }
    });
    
});

onUnmounted(() => {
    window.removeEventListener('scroll', () => { });
})

const scrollTop = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

const apiBase = useRuntimeConfig().public.apiBase
const baseUrl = useRuntimeConfig().public.baseUrl

const formData = ref({
    email:'',
});

const errors = ref<Record<string, string[]>>({});

const submitForm = async () => {
    try {
        const {data, error} = await useFetch(`${apiBase}/subscribe`, {
            method:'POST',
            body: formData.value
        });
        
        formData.value={
            email:''
        }
        
    } catch (err: any) {
        if (err?.data?.errors) {
            errors.value = err.data.errors
        }
    }
}

const contactInfo = ref({});

const getContactInfos = async () => {
    const response: any = await $fetch(`${apiBase}/contact-infos`);
    if(response)
    {
        contactInfo.value = response.data
    }
}

const destinations = ref([]);
const gSettings = ref({});

const getDestinations = async () => {
    const response: any = await $fetch(`${apiBase}/top-study-destinations`);
    if(response)
    {
        destinations.value = response.data
    }
}

const getGeneralSettings = async () => {
    const response: any = await $fetch(`${apiBase}/general-settings`);
    if(response)
    {
        gSettings.value = response.data
    }
}
const getImgUrl = (imgPath: string) => {
    return imgPath ? `${baseUrl}/` + imgPath : '';
}


onMounted(() => {
    getContactInfos();
    getDestinations();
    getGeneralSettings();
})


</script>

<style></style>