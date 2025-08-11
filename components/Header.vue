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
            md:justify-center
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
                   ">হিলফুল ফুজুল ফাউন্ডেশন</h2>
                        <p class="
                   text-[10px]
                   ">ইসলামের আদর্শে, সমাজের কল্যাণে</p>
                    </div>

                    <ul class="
            py-2
             px-6
             flex
             flex-col
             gap-1
             md:flex-row
             md:gap-1
             md:py-1
             
             text-lg
            ">
                        <li class="
                    relative
                    ">
                            <NuxtLink :class="[
                                'transition-all text-black ease-in-out duration-300 py-3 md:px-6 pl-3 w-full block',
                                $route.path === '/'
                                    ? 'activeRoute'
                                    : 'hover:bg-green-700 hover:text-white hover:rounded-md md:hover:bg-green-100/20  md:hover:text-white'
                            ]" to="/" @click="closeMenu">
                                Home
                            </NuxtLink>
                        </li>
                        <li class="
                    relative
                    ">
                            <NuxtLink :class="[
                                'transition-all text-black ease-in-out duration-300 py-3 md:px-6 pl-3 w-full block',
                                $route.path === '/about'
                                    ? 'activeRoute'
                                    : 'hover:bg-green-700 hover:text-white hover:rounded-md md:hover:bg-green-100/20  md:hover:text-white'
                            ]" to="/about"  @click="closeMenu">
                            
                                About 
                            </NuxtLink>
                        </li>
                        <li class="
                    relative
                    ">
                            <NuxtLink :class="[
                                'transition-all ease-in-out text-black duration-300 py-3 md:px-6 pl-3 w-full block',
                                $route.path === '/contact'
                                    ? 'activeRoute'
                                    : 'hover:bg-green-700 hover:text-white hover:rounded-md md:hover:bg-green-100/20  md:hover:text-white'
                            ]" to="/contact" @click="closeMenu">
                                Contact</NuxtLink>
                        </li>
                    </ul>
                </div>

            </nav>
        </div>
    </div>
</template>

<script lang="ts" setup>
const route = useRoute();

const isOpen = ref(false);



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

const carouselConfig = {
  itemsToShow: 1,
  autoplay: 3000,
  pauseAutoplayOnHover: true,
  snapAlign: 'center',
  wrapAround: true,
  transition: 3000,
  easing: 'linear',
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