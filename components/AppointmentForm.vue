<script lang="ts" setup>
const config = useRuntimeConfig();
const apiBase = config.public.apiBase;

const isLoading = ref(false);
const formData = ref({
  name: '',
  email: '',
  phone: '',
  subject: '',
  message: '',
  country: '',
  is_ielts:'',
  ielts_score:''
});

const errors = ref<Record<string, string[]>>({});
const successMessage = ref('');
let successTimer: any = null; // timer 

// success message auto clear 
const startSuccessTimer = () => {
  if (successTimer) clearTimeout(successTimer);
  successTimer = setTimeout(() => {
    successMessage.value = '';
  }, 10000); // 10 sec
};

// submit form
const submitForm = async () => {
  isLoading.value = true
  try {
    const response: any = await $fetch(`${apiBase}/book-appointment`, {
      method: 'POST',
      body: formData.value,
    });

    if (response) {
      successMessage.value = response.message;
      startSuccessTimer();
      errors.value = {}; // errors clear
      formData.value = {
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        country: '',
        is_ielts:'',
        ielts_score:''
      };
    }
  } catch (error: any) {
    if (error?.data?.errors) {
      errors.value = error.data.errors;
    }
  }finally{
    isLoading.value = false
  }
};

// clear field error on input
const clearFieldError = (field: string) => {
  if (errors.value[field]) {
    delete errors.value[field];
  }
  if (successMessage.value) {
    successMessage.value = '';
    if (successTimer) clearTimeout(successTimer);
  }
};
</script>
<template>
  <div>
    <p v-if="successMessage" class="
          text-green-600
          w-full
          bg-green-100
          p-2
          px-4
          rounded-md
          mb-4
        ">
          {{ successMessage }}
        </p>
    <form  action="#" @submit.prevent="submitForm" class="
          grid
          grid-cols-1
          gap-5
          md:grid-cols-2
          ">

      <div>
      
        <label class="block text-sm font-medium">
          Full Name <span class="text-red-600">*</span>
        </label>
        <input type="text" 
        @input="clearFieldError('name')"
        v-model="formData.name" placeholder="ex: John Doe" class="
               ring-1
               ring-blue-700
               focus:ring-2
               focus:ring-blue-700
               focus:outline-none
               w-full
               mt-1
               p-2
               rounded-md
              "
              :class="errors.name ? 'ring-red-600' : ''"
              >
              
          <p v-if="errors.name" class="text-red-600 text-sm mt-1">{{ errors.name[0] }}</p>
      </div>

      <div>
        <label class="block text-sm font-medium">
          Email <span class="text-red-600">*</span>
        </label>
        <input type="text" 
        @input="clearFieldError('email')"
        v-model="formData.email" placeholder="ex: John Doe" class="
               ring-1
               ring-blue-700
               focus:ring-2
               focus:ring-blue-700
               focus:outline-none
               w-full
               mt-1
               p-2
               rounded-md
              "
              :class="errors.email ? 'ring-red-600' : ''"
              >
              
          <p v-if="errors.email" class="text-red-600 text-sm mt-1">{{ errors.email[0] }}</p>
      </div>

      <div>
        <label class="block text-sm font-medium">
          Phone <span class="text-red-600">*</span>
        </label>
        <input type="text" 
        @input="clearFieldError('phone')"
        v-model="formData.phone" placeholder="ex: 018xx-xxxxxx" class="
               ring-1
               ring-blue-700
               focus:ring-2
               focus:ring-blue-700
               focus:outline-none
               w-full
               mt-1
               p-2
               rounded-md
              "
              :class="errors.phone ? 'ring-red-600' : ''"
              >
              
          <p v-if="errors.phone" class="text-red-600 text-sm mt-1">{{ errors.phone[0] }}</p>
      </div>

      <div>
        <label class="block text-sm font-medium">
          Country
        </label>
        <select
        @change="clearFieldError('country')"
        v-model="formData.country" class="
                ring-1
                ring-blue-700
                focus:ring-2
                focus:ring-blue-700
                focus:outline-none
                w-full
                mt-1
                p-2
                rounded-md
                "
                :class="errors.country ? 'ring-red-600' : ''"
                >
          <option value="">—Please choose an option—</option>
          <option value="us">United States</option>
          <option value="uk">United Kingdom</option>
          <option value="australia">Australia</option>
          <option value="malta">Malta</option>
          <option value="finland">Finland</option>
        </select>

        <p v-if="errors.country" class="text-red-600 text-sm mt-1">{{ errors.country[0] }}</p>
      </div>



      <div>
        <label class="block text-sm font-medium">
          IELTS
        </label>
        <select
        @change="clearFieldError('is_ielts')"
        v-model="formData.is_ielts" class="
                ring-1
                ring-blue-700 
                focus:ring-2
                focus:ring-blue-700
                focus:outline-none
                w-full
                mt-1
                p-2
                rounded-md
                "
                :class="errors.is_ielts ? 'ring-red-600' : ''"
                >
          <option value="">—Please choose an option—</option>
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>

        <p v-if="errors.is_ielts" class="text-red-600 text-sm mt-1">{{ errors.is_ielts[0] }}</p>
      </div>

      <div>
        <label class="block text-sm font-medium">
          IELTS Score
        </label>
        <input 
        @input="clearFieldError('ielts_score')"
        v-model="formData.ielts_score" type="text" placeholder="ex: John Doe" class="
               ring-1
               ring-blue-700
               focus:ring-2
               focus:ring-blue-700
               focus:outline-none
               w-full
               mt-1
               p-2
               rounded-md
              "
              :class="errors.ielts_score ? 'ring-red-600' : ''"
              >
              
          <p v-if="errors.ielts_score" class="text-red-600 text-sm mt-1">{{ errors.ielts_score[0] }}</p>
      </div>

      <div class="
            md:col-span-2
            ">
        <label class="block text-sm font-medium">
          Subject <span class="text-red-600">*</span>
        </label>
        <input 
        @input="clearFieldError('subject')"
        v-model="formData.subject" type="text" placeholder="ex: John Doe" class="
               ring-1
               ring-blue-700
               focus:ring-2
               focus:ring-blue-700
               focus:outline-none
               w-full
               mt-1
               p-2
               rounded-md
              "
              :class="errors.subject ? 'ring-red-600' : ''"
              >
              
          <p v-if="errors.subject" class="text-red-600 text-sm mt-1">{{ errors.subject[0] }}</p>
              
      </div>

      <div class="
            md:col-span-2
            ">
        <label class="block text-sm font-medium">
          Inquery <span class="text-red-600">*</span>
        </label>
        <textarea
        @input="clearFieldError('message')"
        v-model="formData.message" class="
              w-full
              mt-1
              p-2
              rounded-md
              ring-1
              ring-blue-700
              focus:ring-2
              focus:ring-blue-700
              focus:outline-none
              " 
              :class="errors.message ? 'ring-red-600' : ''"
              placeholder="What's on your mind?"></textarea>

        <p v-if="errors.message" class="text-red-600 text-sm mt-1">{{ errors.message[0] }}</p>
      </div>

      <div>
        <button type="submit"
  class="bg-blue-800 w-[10rem] text-white px-6 py-2 rounded-md 
         hover:bg-blue-700 transition duration-300 cursor-pointer flex items-center justify-center"
  :disabled="isLoading"
>
  <span v-if="!isLoading">Send</span>
  <span v-else class="flex items-center">
    <svg class="animate-spin h-5 w-5 mr-2 text-white" xmlns="http://www.w3.org/2000/svg" fill="none"
         viewBox="0 0 24 24">
      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
      <path class="opacity-75" fill="currentColor"
            d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z">
      </path>
    </svg>
    Processing...
  </span>
</button>
      </div>

    </form>
  </div>
</template>



<style></style>