<template>
  <div>
    <div
      class="
        sticky_header 
        w-full top-0 z-99
        transition-all
        duration-300
        ease-in-out
        bg-white
      "
    >
      <div
        class="
          bg-white
          md:py-0
          shadow-md
          border-b
          border-gray-400
          md:border-b-0
          md:shadow-none
        "
      >
        <!-- Topbar -->
        <div v-if="topbar" class="border-b-[1px] border-gray-300 py-2">
          <div
            class="
              container
              w-11/12
              mx-auto
              flex
              items-center
              justify-between
              md:flex-row-reverse
              flex-col
              gap-4
            "
          >
            <div>
              <NuxtLink
                class="
                  bg-blue-800
                  text-white
                  py-1.5
                  px-4
                  rounded-full
                  text-sm
                  hover:bg-white
                  hover:text-blue-800
                  hover:ring-1
                  hover:ring-blue-800
                  transition
                  duration-300
                "
                :class="$route.path === '/agent-registration' ? 'bg-white text-blue-800! ring-1 ring-blue-800' : ''"
                to="/agent-registration"
              >
                Become an Agent
              </NuxtLink>
            </div>

            <ul class="flex md:gap-5">
              <li class="relative md:hidden">
                <NuxtLink
                  :class="[
                    'list_item appointment_btn ',
                    $route.path === ap_btn.href ? 'ap_btn_active' : 'list_item_hover'
                  ]"
                  :to="ap_btn.href"
                  @click="closeMenu"
                >
                  {{ ap_btn.name }}
                </NuxtLink>
              </li>

              <li v-for="item in details" class="hidden md:block">
                <a class="text-sm text-gray-700" 
                :class="[
                  item.id
                ]"
                target="_blank"
                :href="getHref(item)">
                  <i :class="item.icon"></i>
                  <span v-if="item.flag" :class="item.flag"></span>
                  <span class="ml-2" v-if="item.dynamic !== 'yes'">{{ item.title }}</span>
                  <span class="ml-2" v-else>+{{ item.title }}</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <!-- Mobile Logo + Hamburger -->
        <div class="md:hidden container w-11/12 mx-auto">
          <div class="flex items-center justify-between py-5">
            <NuxtLink to="/">
              <img class="w-12" :src="getImgUrl(generalSettings?.site_logo)" alt="main-logo" />
            </NuxtLink>

            <a href="javascript:void(0)" @click="toggleMenu" class="text-black">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-8">
                <path
                  fill-rule="evenodd"
                  d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75H12a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z"
                  clip-rule="evenodd"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <!-- Header Menu -->
      <div class="bg-white md:bg-white md:border-b-0">
        <div class="header container w-11/12 mx-auto">
          <nav class="block w-full md:flex md:justify-between md:items-center md:py-3">
            <!-- Mobile Overlay -->
            <div
              class="bg-black w-full h-[100%] fixed z-50 right-0 top-0 bottom-0 opacity-50 md:hidden"
              @click="closeMenu"
              v-show="isOpen"
            ></div>

            <!-- Menu -->
            <div
              id="menu"
              class="
                bg-white
                text-green-700
                md:text-white
                text-md
                top-0
                fixed
                z-100
                -left-60
                w-full
                flex
                flex-col
                gap-2
                max-w-0
                h-[100%]
                transition-all
                duration-500
                ease-in-out
                md:static
                md:flex-row
                md:max-w-full
                md:h-auto
                md:bg-transparent
                md:justify-between
                md:gap-4
              "
            >
              <div class="md:hidden text-center shadow-md p-3">
                <h2 class="font-bold text-black mb-1">{{ generalSettings?.site_name }}</h2>
                <p class="text-[10px]">Study Abroad</p>
              </div>

              <div class="hidden md:block">
                <NuxtLink to="/">
                  <img class="w-20" :src="getImgUrl(generalSettings?.site_logo)" alt="logo" />
                </NuxtLink>
              </div>

              <!-- Navigation -->
              <ul class="py-2 px-6 flex flex-col gap-[2px] md:flex-row md:gap-1 md:py-1 text-md md:items-center">
                <li v-for="item in navItems" :key="item.name" class="relative group">
                  <NuxtLink
                    :class="[
                      'list_item cursor-pointer',
                      $route.path === item.href ? 'activeRoute px-2' : 'list_item_hover'
                    ]"
                    :to="item.href || 'javascript:void(0)'"
                    @click.prevent="item.dropdown ? toggleDropdown(item.name) : closeMenu()"
                  >
                    {{ item.name }}
                    <span>
                      <i v-if="item.dropdown" class="fa-solid fa-caret-down ml-1 text-sm"></i>
                    </span>
                  </NuxtLink>

                  <!-- Dropdown -->
                  <ul
                    v-if="item.dropdown && item.dropdown.length"
                    class="
                    h-[60vh]
                    md:h-auto
                    overflow-y-auto
                    "
                    :class="[
                      'absolute z-50 bg-white shadow-md md:shadow-none md:pt-7 p-4 border border-gray-300 md:border-0 w-full md:w-56 overflow-hidden transition-all duration-300 ease-in-out md:border-b-2 md:border-blue-700',
                      item.dropdown.length > 8 ? 'grid md:grid-cols-2 gap-2 md:w-96' : 'block',
                      isMobile ? (activeDropdown === item.name ? 'relative visible opacity-100 translate-y-0' : 'hidden') : 'invisible translate-y-[80%] opacity-0 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100'
                    ]"
                  >
                    <li class="relative py-1" v-for="dropdown in item.dropdown" :key="dropdown.slug">
                      <NuxtLink
                        v-if="dropdown.name"
                        :class="[
                          'text-black/80 mb-1',
                          $route.path === '/country/' + dropdown.slug ? 'activeRouteMobile' : 'list_item_hover_mobile'
                        ]"
                        :to="'/country/' + dropdown.slug"
                        @click="closeMenu()"
                      >
                        {{ dropdown.name }}
                      </NuxtLink>

                      <NuxtLink
                        v-if="dropdown.title"
                        :class="[
                          'text-black/80 mb-1',
                          $route.path === '/services/' + dropdown.slug ? 'activeRoute' : 'list_item_hover'
                        ]"
                        :to="'/services/' + dropdown.slug"
                        @click="closeMenu()"
                      >
                        {{ dropdown.title }}
                      </NuxtLink>
                    </li>
                  </ul>
                </li>

                <li class="relative">
                  <NuxtLink
                    :class="[
                      'list_item appointment_btn mt-3',
                      $route.path === ap_btn.href ? 'ap_btn_active' : 'list_item_hover'
                    ]"
                    :to="ap_btn.href"
                    @click="closeMenu"
                  >
                    {{ ap_btn.name }}
                  </NuxtLink>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';

const isOpen = ref(false);
const activeDropdown = ref<string | null>(null);
const isMobile = ref(false);

const navItems = ref([
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Study Destinations', dropdown: [] },
  { name: 'Services', dropdown: [] },
  { name: 'Events', href: '/events' },
  { name: 'Blogs', href: '/blogs' },
  { name: 'Contact', href: '/contact' },
]);

const toggleDropdown = (name: string) => {
  if (!isMobile.value) return;
  activeDropdown.value = activeDropdown.value === name ? null : name;
};

const apiBase = useRuntimeConfig().public.apiBase;
const baseUrl = useRuntimeConfig().public.baseUrl;

const generalSettings = ref({});

const { data: headerData, pending, error } = await useAsyncData('header-data', () =>
  $fetch(`${apiBase}/get-header`)
  
)

const getImgUrl = (url: string) => `${baseUrl}/${url}`;

const ap_btn = { name: 'Book an appointment', href: '/book-appointment' };

const details = ref([
  { id:'email', title: 'support@care2training.com', icon: 'fa-solid fa-envelope' },
  { id:'phone', dynamic:'yes', title: '+8801712345678', flag: 'fi fi-bd' },
  { id:'phone', title: '+44 0203 576 2072', flag: 'fi fi-gb' },
]);


if(headerData.value){
  generalSettings.value = headerData.value?.icons;
  navItems.value[3].dropdown = headerData.value?.services;
  navItems.value[2].dropdown = headerData.value?.countries;
  details.value[0].title = headerData.value?.contacts?.email;
  details.value[1].title = headerData.value?.contacts?.phone;
}

const getHref = (item: any) => {
  if (item.id === "email") {
    return `mailto:${item.title}`;
  }
  if (item.id === "phone") {
    return `tel:${item.title.replace(/\s+/g, "")}`; // space remove for tel:
  }
  return "#";
};


const toggleMenu = () => {
  const menu = document.querySelector('#menu');
  if (!menu) return;
  isOpen.value = !isOpen.value;
  menu.classList.toggle('max-w-0');
  menu.classList.toggle('max-w-[80vw]');
  menu.classList.toggle('-left-60');
  menu.classList.toggle('left-0');
};

const closeMenu = () => {
  const menu = document.querySelector('#menu');
  if (!menu) return;
  isOpen.value = false;
  menu.classList.add('max-w-0');
  menu.classList.remove('max-w-[80vw]');
  menu.classList.add('-left-60');
  menu.classList.remove('left-0');
  activeDropdown.value = null;
};

const topbar = ref(true);
const classes = ['fixed', 'bg-white', 'shadow-lg', 'border-b', 'border-blue-800', 'z-[999]', 'top-[-2px]'];

const stickyNav = () => {
  const header = document.querySelector('.sticky_header');
  if (!header) return;
  window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
      header.classList.add(...classes);
      topbar.value = false;
    } else {
      header.classList.remove(...classes);
      topbar.value = true;
    }
  });
};

const router = useRouter();
router.afterEach(() => closeMenu());

onMounted(() => {
  const checkScreen = () => {
    isMobile.value = window.innerWidth < 768;
  };
  checkScreen();
  window.addEventListener('resize', checkScreen);

  stickyNav();
});

useHead({
  link: [
    { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/flag-icons/css/flag-icons.min.css' },
    {rel: 'icon', type: 'image/x-icon', href: computed(() => getImgUrl(generalSettings.value?.site_favicon))},
  ],
});
</script>

<style scoped>
.sticky_header {
  transition: all 0.3s ease-in-out;
}
.sticky_header.fixed {
  transition: all 0.3s ease-in-out;
  animation: slideDown 0.3s ease-in-out;
  margin-top: -2px;
}
@keyframes slideDown {
  from {
    transform: translateY(-100%);
  }
  to {
    transform: translateY(0);
  }
}
</style>
