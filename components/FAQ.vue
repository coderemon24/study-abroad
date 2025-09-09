<template>
  <div class="
  grid
  grid-cols-1
  gap-5
  md:grid-cols-2
  ">
    <div>
      <UAccordion data-aos="fade-left"
      class="faq_accordion"
      :ui="{
        header: 'text-black/90! px-3 bg-blue-700/10 border-b border-blue-700/20',
        body: '!text-black px-4 bg-white py-3 leading-7 font-poppins font-thin ',
      }"
      :items="items" >
        
          <template #item="{ item }">
            <div v-html="decodeHtml(item.content)"></div>
          </template>
      
      </UAccordion>
    </div>
    <div data-aos="fade-right" class="hidden md:block">
      <img class="w-[50%] mx-auto" :src="getImgUrl(imageProp)"  alt="faq">
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { AccordionItem } from '@nuxt/ui';
import faqImg from '~/public/assets/images/faq.png';

defineProps({
  imageProp: {
    type: String,
    default: faqImg
  }
})
const apiBase = useRuntimeConfig().public.apiBase
const baseUrl = useRuntimeConfig().public.baseUrl

const getImgUrl = (img: any) => {
  return `${baseUrl}/${img}`
}

const items = ref<AccordionItem[]>([])

const getFaq = async () => {
  const response: any = await $fetch(`${apiBase}/faq`);
  console.log(response.data[0].answer);
  if (response && response.data) {
      items.value = response.data.map((faq: any) => ({
        label: faq.question,   // UAccordion expects `label`
        content: faq.answer    // UAccordion expects `content`
      }))
    }
}
const decodeHtml = (html: string) => {
  const txt = document.createElement("textarea");
  txt.innerHTML = html;
  return txt.value;
};

onMounted(() => {
  getFaq()
})

</script>

<style>

</style>