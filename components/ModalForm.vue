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

                    <AppointmentForm />
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