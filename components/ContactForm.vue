<script lang="ts" setup>
import contactImg from '~/assets/images/contact.png'

defineProps({
  contactImg: {
    type: String,
    default: contactImg
  },
  contactPage: {
    type: Boolean,
    default: false
  }
})

const config = useRuntimeConfig()
const apiBase = config.public.apiBase
const baseUrl = config.public.baseUrl

const successMessage = ref('')
let successTimer: any = null // timer

const startSuccessTimer = () => {
  successTimer = setTimeout(() => {
    successMessage.value = ''
  }, 5000)
}

const formData = ref({
  name: '',
  email: '',
  phone: '',
  subject: '',
  message: '',
  country: ''
})

const errors = ref<Record<string, string[]>>({})
const isLoading = ref(false)

const submitForm = async () => {
  isLoading.value = true
  try {
    const { data, error } = await useFetch(`${apiBase}/contact-us`, {
      method: 'POST',
      body: formData.value
    })

    if (error.value) {
      if (error.value?.data?.errors) {
        errors.value = error.value.data.errors
      }
    } else if (data.value) {
      successMessage.value = (data.value as any).message || 'Message sent successfully!'
      startSuccessTimer()
      errors.value = {}
      formData.value = {
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        country: ''
      }
    }
  } catch (err: any) {
    if (err?.data?.errors) {
      errors.value = err.data.errors
    }
  } finally {
    isLoading.value = false
  }
}

const clearFieldError = (field: string) => {
  if (errors.value[field]) {
    delete errors.value[field]
  }
  if (successMessage.value) {
    successMessage.value = ''
    if (successTimer) clearTimeout(successTimer)
  }
}
</script>

<template>
  <div
    class="bg-white shadow-md text-black/70 p-8 
    rounded-md flex flex-col md:flex-row gap-10 items-center"
  >
  
    <!-- Contact Form -->
    <form
      @submit.prevent="submitForm"
      data-aos="fade-left"
      data-aos-delay="400"
      action="#"
      class="grid grid-cols-1 md:grid-cols-2 gap-5 flex-1 w-full"
    >
    <p v-if="successMessage" class="
          text-green-700
          w-full
          bg-green-100
          p-2
          px-4
          rounded-md
          mb-3
          col-span-2
        ">
          {{ successMessage }}
        </p>
        
      <!-- Full Name -->
      <div>
        <label class="block text-sm font-medium"
          >Full Name <span class="text-red-600">*</span></label
        >
        <input
          v-model="formData.name"
          @input="clearFieldError('name')"
          type="text"
          placeholder="ex: John Doe"
          :class="errors.name ? 'ring-red-600' : ''"
          class="w-full mt-1 p-2 rounded-md ring-1 ring-blue-700 focus:ring-2 focus:ring-blue-700 focus:outline-none"
        />

        <p v-if="errors.name" class="text-red-600 text-sm mt-1">{{ errors.name[0] }}</p>
      </div>

      <!-- Email -->
      <div>
        <label class="block text-sm font-medium"
          >Email <span class="text-red-600">*</span></label
        >
        <input
          v-model="formData.email"
          @input="clearFieldError('email')"
          type="email"
          placeholder="ex: example@gmail.com"
          :class="errors.email ? 'ring-red-600' : ''"
          class="w-full mt-1 p-2 rounded-md ring-1 ring-blue-700 focus:ring-2 focus:ring-blue-700 focus:outline-none"
        />

        <p v-if="errors.email" class="text-red-600 text-sm mt-1">{{ errors.email[0] }}</p>
      </div>

      <!-- Phone -->
      <div>
        <label class="block text-sm font-medium">Phone</label>
        <input
          v-model="formData.phone"
          @input="clearFieldError('phone')"
          type="text"
          min="0"
          step="1"
          placeholder="+880 18xx-xxxxxx"
          :class="errors.phone ? 'ring-red-600' : ''"
          class="w-full mt-1 p-2 rounded-md ring-1 ring-blue-700 focus:ring-2 focus:ring-blue-700 focus:outline-none"
        />

        <p v-if="errors.phone" class="text-red-600 text-sm mt-1">{{ errors.phone[0] }}</p>
      </div>

      <!-- Country -->
      <div>
        <label class="block text-sm font-medium">Country</label>
        <input
          v-model="formData.country"
          @input="clearFieldError('country')"
          type="text"
          placeholder="ex: Bangladesh"
          :class="errors.country ? 'ring-red-600' : ''"
          class="w-full mt-1 p-2 rounded-md ring-1 ring-blue-700 focus:ring-2 focus:ring-blue-700 focus:outline-none"
        />

        <p v-if="errors.country" class="text-red-600 text-sm mt-1">{{ errors.country[0] }}</p>
      </div>

      <!-- Subject -->
      <div class="md:col-span-2">
        <label class="block text-sm font-medium"
          >Subject <span class="text-red-600">*</span></label
        >
        <input
          v-model="formData.subject"
          @input="clearFieldError('subject')"
          type="text"
          placeholder="ex: Want to know more about..."
          :class="errors.subject ? 'ring-red-600' : ''"
          class="w-full mt-1 p-2 rounded-md ring-1 ring-blue-700 focus:ring-2 focus:ring-blue-700 focus:outline-none"
        />

        <p v-if="errors.subject" class="text-red-600 text-sm mt-1">{{ errors.subject[0] }}</p>
      </div>

      <!-- Message -->
      <div class="md:col-span-2">
        <label class="block text-sm font-medium">Message</label>
        <textarea
          v-model="formData.message"
          @input="clearFieldError('message')"
          rows="4"
          placeholder="What's on your mind?"
          :class="errors.message ? 'ring-red-600' : ''"
          class="w-full mt-1 p-2 rounded-md ring-1 ring-blue-700 focus:ring-2 focus:ring-blue-700 focus:outline-none"
        ></textarea>

        <p v-if="errors.message" class="text-red-600 text-sm mt-1">{{ errors.message[0] }}</p>
      </div>

      <!-- Button -->
      <div class="md:col-span-2">
        <button
          type="submit"
          class="bg-blue-800 w-[10rem] text-white px-6 py-2 rounded-md 
         hover:bg-blue-700 transition duration-300 cursor-pointer flex items-center justify-center"
          :disabled="isLoading"
        >
          <span v-if="!isLoading">Send</span>
          <span v-else class="flex items-center">
            <svg
              class="animate-spin h-5 w-5 mr-2 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                class="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                stroke-width="4"
              ></circle>
              <path
                class="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
              ></path>
            </svg>
            Processing...
          </span>
        </button>
      </div>
    </form>

    <!-- Contact Image -->
    <div
      data-aos="fade-right"
      data-aos-delay="400"
      v-if="!contactPage"
      class="hidden md:flex flex-1 justify-center"
    >
      <img class="w-[80%] object-fit" :src="contactImg" alt="contact-image" />
    </div>
  </div>
</template>

<style scoped></style>
