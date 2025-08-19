<template>
  <div class="text-black/70 pb-10">
    <div class="container mx-auto w-11/12">
      <!----- Breadcrumb ------->
      <div class="breadcrumb pt-8 flex items-center gap-2 text-sm mb-6">
        <NuxtLink class="text-blue-700 hover:underline" to="/">Home</NuxtLink>
        <i class="fa-solid fa-chevron-right text-gray-500"></i>
        <span class="text-gray-600">Blogs</span>
        <i class="fa-solid fa-chevron-right text-gray-500"></i>
        <span class="text-gray-600">Study in Australia</span>
      </div>
    </div>

    <section class="container mx-auto w-11/12">
      <div class="my-10 grid grid-cols-1 md:grid-cols-3 gap-10">
        <!-- main content -->
        <div class="grid grid-cols-1 gap-8 md:col-span-2">
          <div class="p-6 bg-white rounded-lg shadow-lg">
            <img class="w-full rounded-lg" :src="blogImg1" alt="" />

            <div class="mt-4">
              <!-- date and author -->
              <div
                class="flex items-center justify-between text-sm text-gray-500 mb-3"
              >
                <span class="flex items-center gap-2">
                  <i class="fa-solid fa-clock"></i>
                  <span>Mar 12, 2023 - 10:00 AM</span>
                </span>
                <span class="flex items-center gap-2">
                  <i class="fa-solid fa-user-circle"></i>
                  <span>John Doe</span>
                </span>
              </div>

              <!-- tags -->
              <div class="flex gap-2 flex-wrap">
                <span
                  v-for="tag in Array(3)"
                  :key="tag"
                  class="bg-blue-700/20 text-blue-700 px-3 py-1 rounded-full text-xs hover:bg-blue-700/40 hover:text-blue-700 transition-all duration-300 ease-in-out cursor-pointer"
                  >australia</span
                >
              </div>

              <!-- main content -->
              <div class="mt-6">
                <h2 class="text-2xl md:text-3xl font-bold mb-4">
                  🌏 Study Abroad in Australia: Your Gateway to a Bright Future
                </h2>
                <p class="text-lg opacity-70 mb-5">
                  Australia has become one of the most popular destinations for
                  international students looking to build a successful academic
                  and professional future. With world-class universities, a
                  diverse culture, and strong career opportunities, studying in
                  Australia can be a life-changing experience.
                </p>
                <p class="text-lg opacity-70 mb-5">
                  🎓 Why Choose Australia? <br />

                  Globally Recognized Universities <br />
                  Australia is home to top-ranking institutions like the
                  University of Melbourne, Australian National University (ANU),
                  and the University of Sydney. Degrees from these universities
                  are respected worldwide.

                  <br /><br />

                  Diverse Range of Courses <br />
                  Whether you’re interested in Business, Engineering, IT, Health
                  Sciences, or Creative Arts — Australia offers flexible
                  programs tailored to your career goals. <br /><br />

                  Safe and Welcoming Environment <br />
                  With a multicultural society and student-friendly cities like
                  Sydney, Melbourne, Brisbane, and Perth, you’ll feel right at
                  home. <br /><br />

                  Work While You Study <br />
                  International students can work up to 24 hours per week
                  (during semesters) and full-time during holidays, helping
                  cover living expenses and gain valuable work experience.
                  <br /><br />

                  Pathway to Permanent Residency (PR) <br />
                  Many students choose Australia not just for education but also
                  for long-term career opportunities and the chance to apply for
                  PR.
                </p>
              </div>
            </div>
          </div>

          <!-- comments section -->
          <div class="p-6 bg-white rounded-lg shadow-lg">
            <h3 class="text-xl font-semibold mb-4">💬 Comments</h3>

            <!-- comments list -->
            <div v-if="comments.length > 0" class="space-y-4 mb-6">
              <div
                v-for="(comment, index) in comments"
                :key="index"
                class="p-3 border rounded-lg"
              >
                <p class="text-sm 
                font-semibold text-blue-800
                flex items-center
                gap-2
                ">
                  <i class="fa-solid text-black/70 fa-user-circle"></i>
                  <span>
                    {{ comment.name }}
                  </span>
                </p>
                <p class="text-sm text-gray-500
                pl-6
                italic
                ">
                  {{ comment.message }}
                </p>
              </div>
            </div>
            <p v-else class="text-gray-500 mb-6">No comments yet. Be the first!</p>

            <!-- comment form -->
            <form @submit.prevent="addComment" class="space-y-4">
              <div>
                <input
                  v-model="newComment.name"
                  type="text"
                  placeholder="Your Name"
                  class="w-full p-2 border rounded-lg focus:ring focus:ring-blue-300"
                  required
                />
              </div>
              <div>
                <textarea
                  v-model="newComment.message"
                  placeholder="Your Comment"
                  class="w-full p-2 border rounded-lg focus:ring focus:ring-blue-300"
                  rows="3"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                class="px-4 py-2 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition"
              >
                Post Comment
              </button>
            </form>
          </div>
        </div>

        <!-- sidebar -->
        <div class="hidden md:block md:col-span-1">
          <div class="sticky top-10">
            <BlogSidebar :blogs="blogs" />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import blogImg1 from '~/assets/images/slider/slide-1.jpeg'

const blogs = [
  {
    image: blogImg1,
    title: 'Study in Australia with scholarship 2',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos dolores voluptate Lorem ipsum dolor sit amet consectetur adipisicing elit...',
    tags: ['Canada', 'UK', 'USA'],
    date: '03 July 2023',
    path: '#'
  }
]

// comments state
const comments = ref<{ name: string; message: string }[]>([])
const newComment = ref({ name: '', message: '' })

// add comment
const addComment = () => {
  if (newComment.value.name && newComment.value.message) {
    comments.value.push({ ...newComment.value })
    newComment.value = { name: '', message: '' }
  }
}
</script>

<style scoped></style>
