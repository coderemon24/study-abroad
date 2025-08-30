<template>
    <div>
        <!-- comments section -->
        <div class="p-6 bg-white rounded-lg shadow-lg">
            <h3 class="text-xl font-semibold mb-4">💬 Comments</h3>

            <!-- comments list -->
            <div v-if="comments.length > 0" class="space-y-4 mb-6">
                <div v-for="(comment, index) in comments" :key="index" class="p-3 border rounded-lg">
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
                    <input v-model="newComment.name" type="text" placeholder="Your Name"
                        class="w-full p-2 border rounded-lg focus:ring focus:ring-blue-300" required />
                </div>
                <div>
                    <textarea v-model="newComment.message" placeholder="Your Comment"
                        class="w-full p-2 border rounded-lg focus:ring focus:ring-blue-300" rows="3"
                        required></textarea>
                </div>
                <button type="submit" class="px-4 py-2 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition">
                    Post Comment
                </button>
            </form>
        </div>
    </div>
</template>

<script lang="ts" setup>

</script>

<style></style>