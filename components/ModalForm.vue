<template>
    <div class="
  text-black/80
  ">

        <div @click="modalClose" class="
    w-full
    h-[150vh]
    fixed
    top-[-3.5rem]
    left-0
    z-999
    bg-black/50
    modalOverly
    "></div>

        <div class="container mx-auto w-11/12">

            <div class="
      
      bg-white
      rounded-xl
      shadow-lg
      overflow-y-scroll
      max-h-[80vh]
      md:overflow-hidden
      md:max-h-full
      scale-0
      transition-all
      duration-500
      ease-in-out
      leadModal
      fixed
          z-9999
          top-1/2
          left-1/2
          -translate-x-1/2
          -translate-y-1/2
          md:w-10/12
          w-full
      ">



                <div class="p-8
         md:col-span-2
         
         ">

                    <div class="
         flex
         justify-between
         ">
                        <h1 class="
        text-xl
        font-semibold
        md:text-3xl
        title-design
        mb-8
        ">Get Expert Advice for Your Future Abroad</h1>

                        <button @click="modalClose" class="
        text-2xl
        mt-[-2rem]
        text-red-600
        cursor-pointer
        modalClose
        ">
                            <i class="fa-solid fa-xmark"></i>
                        </button>

                    </div>

                    <form action="#" class="
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
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
const showModal = () => {
    const modal = document.querySelector('.leadModal') as HTMLElement;
    modal.classList.remove('scale-0');
    modal.classList.add('scale-100');
}

const modalClose = () => {
    const modal = document.querySelector('.leadModal') as HTMLElement;
    const overlay = document.querySelector('.modalOverly') as HTMLElement;
    
    overlay.classList.add('hidden');

    modal.classList.remove('scale-100');
    modal.classList.add('scale-0');
}



onMounted(() => {
    showModal();
});
</script>

<style></style>