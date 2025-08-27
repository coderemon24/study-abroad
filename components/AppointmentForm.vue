
<script lang="ts" setup>

</script>
<template>
  <div>
    <form  action="#" class="
          grid
          grid-cols-1
          gap-5
          md:grid-cols-2
          ">

      <div>
        <label class="block text-sm font-medium">
          Full Name <span class="text-red-600">*</span>
        </label>
        <input type="text" placeholder="ex: John Doe" class="
               ring-1
               ring-blue-700
               focus:ring-2
               focus:ring-blue-700
               focus:outline-none
               w-full
               mt-1
               p-2
               rounded-md
              ">
      </div>

      <div>
        <label class="block text-sm font-medium">
          Email <span class="text-red-600">*</span>
        </label>
        <input type="text" placeholder="ex: John Doe" class="
               ring-1
               ring-blue-700
               focus:ring-2
               focus:ring-blue-700
               focus:outline-none
               w-full
               mt-1
               p-2
               rounded-md
              ">
      </div>

      <div>
        <label class="block text-sm font-medium">
          Phone <span class="text-red-600">*</span>
        </label>
        <input type="text" placeholder="ex: John Doe" class="
               ring-1
               ring-blue-700
               focus:ring-2
               focus:ring-blue-700
               focus:outline-none
               w-full
               mt-1
               p-2
               rounded-md
              ">
      </div>

      <div>
        <label class="block text-sm font-medium">
          Country
        </label>
        <select class="
                ring-1
                ring-blue-700
                focus:ring-2
                focus:ring-blue-700
                focus:outline-none
                w-full
                mt-1
                p-2
                rounded-md
                ">
          <option value="">—Please choose an option—</option>
          <option value="us">United States</option>
          <option value="uk">United Kingdom</option>
          <option value="australia">Australia</option>
          <option value="malta">Malta</option>
          <option value="finland">Finland</option>
        </select>
      </div>



      <div>
        <label class="block text-sm font-medium">
          IELTS
        </label>
        <select class="
                ring-1
                ring-blue-700 
                focus:ring-2
                focus:ring-blue-700
                focus:outline-none
                w-full
                mt-1
                p-2
                rounded-md
                ">
          <option value="">—Please choose an option—</option>
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
      </div>

      <div>
        <label class="block text-sm font-medium">
          IELTS Score
        </label>
        <input type="text" placeholder="ex: John Doe" class="
               ring-1
               ring-blue-700
               focus:ring-2
               focus:ring-blue-700
               focus:outline-none
               w-full
               mt-1
               p-2
               rounded-md
              ">
      </div>

      <div class="
            md:col-span-2
            ">
        <label class="block text-sm font-medium">
          Subject <span class="text-red-600">*</span>
        </label>
        <input type="text" placeholder="ex: John Doe" class="
               ring-1
               ring-blue-700
               focus:ring-2
               focus:ring-blue-700
               focus:outline-none
               w-full
               mt-1
               p-2
               rounded-md
              ">
      </div>

      <div class="
            md:col-span-2
            ">
        <label class="block text-sm font-medium">
          Inquery <span class="text-red-600">*</span>
        </label>
        <textarea class="
              w-full
              mt-1
              p-2
              rounded-md
              ring-1
              ring-blue-700
              focus:ring-2
              focus:ring-blue-700
              focus:outline-none
              
              " placeholder="What's on your mind?"></textarea>
      </div>

      <div>
        <button type="submit" class="
              bg-blue-800
              w-[10rem]
              text-white
              px-6
              py-2
              rounded-md
              hover:bg-blue-700
              transition
              duration-300
              ">Send</button>
      </div>

    </form>
  </div>
</template>



<style></style>