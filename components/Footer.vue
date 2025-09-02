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
                    ">Address</h4>
                    
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
                            <a class="
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
                    ">Contact Us</h4>

                    <ul>
                        <li>
                            <p>
                                <span class="text-gray-700 font-medium">Phone: </span>
                                <a href="#">{{ contactInfo.phone }}</a>
                            </p>
                            <p>
                                <span class="text-gray-700 font-medium">Mail: </span>
                                <a href="#">{{ contactInfo.email }}</a>
                            </p>
                            <p>
                                <span class="text-gray-700 font-medium">Skype: </span>
                                <a href="#">3fN2d@example.com</a>
                            </p>
                        </li>
                    </ul>
                    <!-- subscribe -->
                    <form 
                    @submit.prevent="submitForm"
                    class="
                    py-4
                    relative
                    ">
                        <input 
                        v-model="formData.email"
                        class="
                        bg-gray-200
                        ring-2
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
                        bg-blue-800
                        text-white
                        py-3.5
                        px-4
                        md:py-2.5
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
                        right-[31%]
                        md:left-[12rem]
                        md:right-auto
                        top-3.5
                        md:top-3.5
                        z-10
                        text-sm
                        ">Subscribe</button>
                    
                    <p v-if="errors.email" class="text-red-600 text-sm mt-1">{{ errors.email[0] }}</p>
                </form>
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
                            <a class="
                            flex
                            items-center
                            gap-5
                            " :href="item.href">
                                {{ item.name }}
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
                    ">Map</h4>
                    
                    <div class="
                    rounded
                    overflow-hidden
                    ">
                        <iframe :src="contactInfo?.map" width="100%" height="225" style="border:0;"  loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                    
                </div>

            </div>
            
            <!-- footer bottom -->
            <div class="
            text-black/60
            py-4
            flex
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

const officer = ref(manImg);
const logo = ref(mainLogo);
const socialIcons = [
    {
        name: 'facebook',
        icon: 'fa-brands fa-facebook-f',
        href: '#',
    },
    {
        name: 'twitter',
        icon: 'fa-brands fa-twitter',
        href: '#',
    },
    {
        name: 'instagram',
        icon: 'fa-brands fa-instagram',
        href: '#',
    },
    {
        name: 'linkedin',
        icon: 'fa-brands fa-linkedin',
        href: '#',
    },
];

const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Events', href: '/events' },
    { name: 'Blogs', href: '/blogs' },
    { name: 'Book Appointment', href: '/book-appointment' },
];


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


onMounted(() => {
    getContactInfos();
})


</script>

<style></style>