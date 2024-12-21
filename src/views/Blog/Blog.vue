<!-- Blog List Page -->
<template>
  <div class="min-h-screen bg-gray-50 text-gray-800 mt-10">
    <!-- Header -->
    <header
      class="relative bg-gradient-to-b from-green-100 to-white py-16 px-4 shadow-md rounded-b-3xl"
    >
      <div class="container mx-auto text-center">
        <h1 class="text-4xl font-extrabold text-green-700">
          آخرین پست‌های وبلاگ
        </h1>
        <p class="text-lg text-gray-600 mt-4">
          جدیدترین مقالات و نوشته‌ها را در اینجا پیدا کنید
        </p>
      </div>
    </header>

    <!-- Blog Posts -->
    <section class="container mx-auto px-4 mt-12">
      <div
        v-if="!loading"
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        <div
          v-for="post in posts"
          :key="post.id"
          class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
        >
          <!-- Blog Image -->
          <img
            :src="post.picture"
            alt="Blog Image"
            class="w-full h-48 object-cover"
          />
          <!-- Blog Details -->
          <div class="p-6">
            <h2 class="text-2xl font-semibold text-gray-800 truncate">
              {{ post.title }}
            </h2>
            <p class="text-sm text-gray-500 mt-2">
              {{ formatDate(post.created_at) }}
            </p>
            <p class="text-gray-600 mt-4 line-clamp-3">
              {{ post.description }}
            </p>
            <div class="mt-6 text-right">
              <router-link
                :to="`/blog/${post.id}`"
                class="text-green-600 hover:underline font-medium"
              >
                ادامه مطلب →
              </router-link>
            </div>
          </div>
        </div>
      </div>
      <div v-if="loading"><Spinner /></div>

      <!-- Pagination -->
      <!-- <div class="flex justify-center mt-12">
        <button
          class="mx-2 px-4 py-2 rounded-full bg-gray-200 hover:bg-gray-300 transition"
          v-for="page in totalPages"
          :key="page"
          @click="changePage(page)"
          :class="{ 'bg-green-500 text-white': currentPage === page }"
        >
          {{ page }}
        </button>
      </div> -->
    </section>
  </div>
</template>

<script setup lang="ts">
import { getPosts } from "@/api/blog";
import { IPost } from "@/shared/models/blog";
import { onMounted, ref } from "vue";
import Spinner from "@/shared/components/ui/Spinner/Spinner.vue";

const currentPage = ref(1);
const totalPages = ref(5);

// const changePage = (page) => {
//   currentPage.value = page;
//   // Fetch posts for the current page (replace with actual API call)
// };

const posts = ref<IPost[]>([]);
const loading = ref(true);

// Fetch posts when component is mounted
onMounted(async () => {
  try {
    const response = await getPosts();
    // Store the latest 5 posts
    posts.value = response.data;
  } catch (error) {
    console.error("Error fetching posts:", error);
  } finally {
    loading.value = false;
  }
});

const formatDate = (date: string) => {
  const options = { year: "numeric", month: "long", day: "numeric" };
  //@ts-ignore
  return new Date(date).toLocaleDateString("fa-IR", options);
};
</script>

<style scoped>
.line-clamp-3 {
  display: -webkit-box;
  line-clamp: 3;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
