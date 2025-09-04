<script lang="ts" setup>
const config = useRuntimeConfig();
const apiBase = config.public.apiBase;

const isLoading = ref(false);
const formData = ref({
  company_name: '',
  first_name: '',
  last_name: '',
  email: '',
  phone: '',
  postal_address: '',
  country: '',
  applicants_market: '',
  students_destination: '',
  sent_students: '',
  is_valid_data: false,
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
    const response: any = await $fetch(`${apiBase}/agents`, {
      method: 'POST',
      body: formData.value,
    });

    if (response) {
      successMessage.value = response.message;
      startSuccessTimer();
      errors.value = {}; // errors clear
      formData.value = {
        company_name: '',
        first_name: '',
        last_name: '',
        email: '',
        phone: '',
        postal_address: '',
        country: '',
        applicants_market: '',
        students_destination: '',
        sent_students: '',
        is_valid_data: false,
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

      <div class="
            md:col-span-2
            ">
      
        <label class="block text-sm font-medium">
          Company Name <span class="text-red-600"></span>
        </label>
        <input type="text" 
        @input="clearFieldError('company_name')"
        v-model="formData.company_name" placeholder="ex: Care2 Training" class="
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
              :class="errors.company_name ? 'ring-red-600' : ''"
              >
              
          <p v-if="errors.company_name" class="text-red-600 text-sm mt-1">{{ errors.company_name[0] }}</p>
      </div>

      <div>
      
        <label class="block text-sm font-medium">
          First Name <span class="text-red-600">*</span>
        </label>
        <input type="text" 
        @input="clearFieldError('first_name')"
        v-model="formData.first_name" placeholder="ex: John Doe" class="
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
              :class="errors.first_name ? 'ring-red-600' : ''"
              >
              
          <p v-if="errors.first_name" class="text-red-600 text-sm mt-1">{{ errors.first_name[0] }}</p>
      </div>

      <div>
      
        <label class="block text-sm font-medium">
          Last Name <span class="text-red-600"></span>
        </label>
        <input type="text" 
        @input="clearFieldError('last_name')"
        v-model="formData.last_name" placeholder="ex: John Doe" class="
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
              :class="errors.last_name ? 'ring-red-600' : ''"
              >
              
          <p v-if="errors.last_name" class="text-red-600 text-sm mt-1">{{ errors.last_name[0] }}</p>
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
          Postal Address <span class="text-red-600">*</span>
        </label>
        <input type="text" 
        @input="clearFieldError('postal_address')"
        v-model="formData.postal_address" placeholder="ex: Dhaka 1205" class="
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
              :class="errors.postal_address ? 'ring-red-600' : ''"
              >
              
          <p v-if="errors.postal_address" class="text-red-600 text-sm mt-1">{{ errors.postal_address[0] }}</p>
      </div>

      <div>
        <label class="block text-sm font-medium">
          Country <span class="text-red-600">*</span>
        </label>
        <input type="text" 
        class="
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
              placeholder="ex: Bangladesh"
              :class="errors.country ? 'ring-red-600' : ''"
              @input="clearFieldError('country')"
              v-model="formData.country" list="country-list" 
              >

        <p v-if="errors.country" class="text-red-600 text-sm mt-1">{{ errors.country[0] }}</p>
      </div>

      <div class="
            md:col-span-2
            ">
        <input 
        @input="clearFieldError('subject')"
        v-model="formData.applicants_market" type="text" 
        placeholder="What is the target market of your applicants?" class="
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
              :class="errors.applicants_market ? 'ring-red-600' : ''"
              >
              
          <p v-if="errors.applicants_market" class="text-red-600 text-sm mt-1">{{ errors.applicants_market[0] }}</p>
              
      </div>

      <div class="
            md:col-span-2
            ">
        <input 
        @input="clearFieldError('students_destination')"
        v-model="formData.students_destination" type="text" 
        placeholder="What destination market do you send students to?" class="
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
              :class="errors.students_destination ? 'ring-red-600' : ''"
              >
              
          <p v-if="errors.students_destination" class="text-red-600 text-sm mt-1">{{ errors.students_destination[0] }}</p>
              
      </div>

      <div class="
            md:col-span-2
            ">
        <input 
        @input="clearFieldError('sent_students')"
        v-model="formData.sent_students" type="text" 
        placeholder="How many students did you send overseas last year?" class="
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
              :class="errors.sent_students ? 'ring-red-600' : ''"
              >
              
          <p v-if="errors.sent_students" class="text-red-600 text-sm mt-1">{{ errors.sent_students[0] }}</p>
              
      </div>
      
      <div class="
            md:col-span-2
            flex
            gap-2
            ">
            
            <input type="checkbox" v-model="formData.is_valid_data"
            class="
            mr-2
            h-6
            w-8
            bg-white!
            "
            />
            <span class="text-sm
            ">
              I confirm that the information field in this form is true and correct. Care2 Training is thereby authorized to store and share with university admissions related purposes only.
            </span>
            <p v-if="errors.is_valid_data" class="text-red-600 text-sm mt-1">{{ errors.is_valid_data[0] }}</p>
      </div>

      <div>
        <button type="submit"
  class="bg-blue-800 w-[10rem] text-white px-6 py-2 rounded-md 
         hover:bg-blue-700 transition duration-300 cursor-pointer flex items-center justify-center"
  :disabled="isLoading"
>
  <span v-if="!isLoading">Submit</span>
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