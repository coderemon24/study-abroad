<template>
    <!---- Topbar -->
    <div class="
    bg-white
    py-6
    md:py-0
    shadow-md
    border-b
    border-gray-400
    md:border-b-0
    md:shadow-none
    ">
        <div class="container w-11/12 mx-auto">
            <div class="
            flex
            items-center
            justify-between
            ">
                <div class="md:hidden">
                    <img class="w-12" :src="logoMain" alt="">
                </div>    
            
                <div class="icon 
                    md:hidden
                    ">
                        <a href="javascript:void(0)" @click="toggleMenu">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                class="size-8">
                                <path fill-rule="evenodd"
                                    d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75H12a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z"
                                    clip-rule="evenodd" />
                            </svg>
                        </a>
                </div>
            </div>
        </div>
    </div>

    <!---- Header Menu -->
    <div class="
    bg-white
    md:bg-white
    md:border-b-0
    ">
        <div class="header container w-11/12 mx-auto">
            <nav class="
            block
            w-full
            md:flex
            md:justify-between
            md:items-center
            md:py-3
            ">

                <div class="
                bg-black
                w-full
                h-[100%]
                fixed
                z-50
                right-0
                top-0
                bottom-0
                opacity-50
                md:hidden
                " @click="closeMenu" v-show="isOpen"></div>
                <div id="menu" class="
            bg-white
            text-green-700
            md:text-white
            text-md
            top-0
            fixed
            z-50
            -left-60
            w-full
            flex
            flex-col
            gap-2
            max-w-0
            h-[100%]
            transition-all
            duration-500
            overflow-hidden
            ease-in-out
            md:static
            md:flex-row
            md:max-w-full
            md:h-auto
            md:bg-transparent
            md:justify-between
            md:gap-4
            ">

                    <div class="
                md:hidden
                text-center
                shadow-md
                p-3
                ">
                        <h2 class="
                   font-bold
                   text-black
                   mb-1
                   ">Care2Training</h2>
                        <p class="
                   text-[10px]
                   ">
                        Study Abroad
                    </p>
                    </div>
                    
                    <div class="hidden md:block">
                        <img class="w-20" :src="logoMain" alt="logo">
                    </div>

                    <ul class="
             py-2
             px-6
             flex
             flex-col
             gap-[2px]
             md:flex-row
             md:gap-1
             md:py-1
             text-md
             md:items-center
            ">
            
            
                        <li v-for="item in navItems" class="
                    relative
                    ">
                            <NuxtLink :class="[
                                'list_item',
                                $route.path === item.href
                                    ? 'activeRoute'
                                    : 'list_item_hover'
                            ]" :to="item.href" @click="closeMenu">
                                {{ item.name }}
                            </NuxtLink>
                        </li>
                        
                    
                        <li class="
                    relative
                    ">
                            <NuxtLink :class="[
                                'list_item appointment_btn',
                                $route.path === ap_btn.href
                                    ? 'ap_btn_active'
                                    : 'list_item_hover'
                            ]" :to="ap_btn.href" @click="closeMenu">
                                {{ ap_btn.name }}</NuxtLink>
                        </li>
                        
                    </ul>
                    
                </div>

            </nav>
        </div>
    </div>
</template>

<script lang="ts" setup>
import logo from '~/assets/images/logo.webp';

const isOpen = ref(false);
const logoMain = ref(logo);

const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Country', href: '/country' },
    { name: 'Services', href: '/services' },
    { name: 'Events', href: '/events' },
    { name: 'Blogs', href: '/blogs' },
    { name: 'Contact', href: '/contact' },
];

const ap_btn = {
    name: 'Book an appointment',
    href: '/contact',
};

const toggleMenu = () => {
    const menu = document.querySelector('#menu');
    if (!menu) return;
    isOpen.value = !isOpen.value;
    menu.classList.toggle('max-w-0');
    menu.classList.toggle('max-w-[60vw]');
    menu.classList.toggle('-left-60');
    menu.classList.toggle('left-0');
};

const closeMenu = () => {
    const menu = document.querySelector('#menu');
    if (!menu) return;

    isOpen.value = false;

    menu.classList.add('max-w-0');
    menu.classList.remove('max-w-[60vw]');
    menu.classList.add('-left-60');
    menu.classList.remove('left-0');
};


</script>

<style>
.carousel__item {
  padding: 0 10px;
  min-height: 120px; /* Adjust based on your content */
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Adjust carousel navigation buttons if needed */
.carousel__prev,
.carousel__next {
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: none;
}

.carousel__prev:hover,
.carousel__next:hover {
  background-color: rgba(0, 0, 0, 0.7);
}
</style>