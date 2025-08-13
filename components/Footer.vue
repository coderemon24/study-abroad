<template>
    <div class="
  bg-black
  text-white
  pt-5
  ">
        <footer class="container w-11/12 mx-auto">
            <!-- footer top -->
            <div class="
        py-4
        border-b
        border-gray-700
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
                        <p class="text-gray-500">Have any queries?</p>
                        <p>
                            <span class="text-gray-500">Call: </span>
                            <a class="text-gray-300" href="#">+880 2 555 5555</a>
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
                    <img class="w-20" :src="logo" alt="main-logo">

                    <p class="
                    text-justify
                    text-sm
                    text-gray-300
                    mt-4
                    ">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet id aliquam eligendi quod, cum, non
                        quidem similique, maiores architecto laborum veniam? Provident eum molestias laudantium libero
                        obcaecati laboriosam reprehenderit recusandae.
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
                            text-white!
                            ring-white!
                            hover:bg-white!
                            hover:text-blue-700!
                            " :href="item.href">
                                <i :class="item.icon"></i>
                            </a>
                        </li>
                    </ul>
                </div>

                <div>
                    <h4 class="
                    text-gray-100
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
                        <li v-for="item in quickLinks"><a class="
                            item_hover
                            " href="">{{ item.name }}</a></li>
                    </ul>
                </div>
                
                <div class="
                mt-4
                md:mt-0
                ">
                    <h4 class="
                    text-gray-100
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
                    ">Countries</h4>

                    <ul>
                        <li v-for="item in countries"><a class="item_hover" href="#">{{ item.name }}</a></li>
                    </ul>
                </div>

                <div class="
                mt-4
                md:mt-0
                ">
                    <h4 class="
                    text-gray-100
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
                    ">Contact Information</h4>

                    <ul>
                        <li v-for="item in addrInfo">
                            <a class="
                            flex
                            items-center
                            gap-5
                            " href="">
                                <i :class="item.icon"></i>
                                {{ item.title }}
                            </a>
                        </li>
                    </ul>
                    
                    <!-- subscribe -->
                    <div class="
                    py-4
                    relative
                    ">
                        <input class="
                        bg-white
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
                        py-3
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
                        right-[31%]
                        md:right-[0%]
                        z-10
                        text-sm
                        ">Subscribe</button>
                    </div>
                </div>

            </div>
            
            <!-- footer bottom -->
            <div class="
            text-gray-300
            py-4
            flex
            items-center
            justify-between
            gap-2
            border-t
            border-gray-700
            text-xs
            md:text-sm
            ">
                <p>
                    Copyright &copy; 2023 Care2Training - All Rights Reserved.
                </p>
                <ul class="
                flex
                gap-2
                ">
                    <li><a class="
                        hover:text-blue-700
                        transition-all
                        duration-300
                        " href="#">Terms & Conditions</a></li>
                    <li><a class="
                        transition-all
                        duration-300
                        hover:text-blue-700
                        " href="#">Privacy Policy</a></li>
                </ul>
            </div>

        </footer>
    </div>
</template>

<script lang="ts" setup>
import manImg from '~/assets/images/officer.jpg';
import mainLogo from '~/assets/images/logo.webp';

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
    { name: 'Book Appointment', href: '/contact' },
];

const countries = [
    {
        name: 'United States',
        href: '#',
    },
    {
        name: 'United Kingdom',
        href: '#',
    },
    {
        name: 'Canada',
        href: '#',
    },
    {
        name: 'Australia',
        href: '#',
    },
    {
        name: 'New Zealand',
        href: '#',
    },
    {
        name: 'South Africa',
        href: '#',
    },
]

const addrInfo = [
    {
        title: 'Panthapath, Dhaka',
        icon: 'fa-solid fa-location-dot',
    },
    {
        title: 'support@care2training.com',
        icon: 'fa-solid fa-envelope',
    },
    {
        title: '+880 2 555 5555',
        icon: 'fa-solid fa-phone',
    },
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

const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}
</script>

<style></style>