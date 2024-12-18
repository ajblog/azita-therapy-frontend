<script setup lang="ts">
import { useRouter } from "vue-router";
import { ref, onMounted } from 'vue';
import { getArticles, Article } from '../../../api/articles';  // Importing the API call
import Spinner from '@/shared/components/ui/Spinner/Spinner.vue';  // Import the spinner component

const router = useRouter();

// Redirect Function
const redirectToArticlesPage = () => {
  router.push("/articles");
};

// Store articles data
const articles = ref<Article[]>([]);
const loading = ref<boolean>(true);  // Track the loading state

// Fetch articles on component mount
onMounted(async () => {
  try {
    const response = await getArticles();  // Fetch articles using API
    articles.value = response.data;  // Store fetched articles
  } catch (error) {
    console.error('Error fetching articles:', error);
  } finally {
    loading.value = false;  // Stop loading once the data is fetched
  }
});
</script>

<style scoped>
/* Add subtle custom animations or additional styles here */
</style>

<template>
  <section
    class="bg-gradient-to-b from-green-50 to-green-100 py-12 px-6 lg:px-16 mt-10"
  >
    <!-- Section Header -->
    <div class="text-center mb-12">
      <h2
        class="text-3xl font-extrabold text-green-700 tracking-tight hover:underline underline-offset-4 decoration-green-500 transition-all duration-300"
      >
        مقالات علمی و کاربردی
      </h2>
      <p class="text-base text-green-600 mt-4 max-w-2xl mx-auto">
        کاوش در مقالات علمی و تحقیقاتی ما برای دستیابی به دانش بیشتر و آرامش
        درونی.
      </p>
    </div>

    <!-- Articles Grid or Spinner -->
    <div v-if="loading" class="flex justify-center items-center">
      <Spinner size="w-20" />
    </div>
    <div v-else class="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
      <div
        v-for="article in articles.slice(0,3)"
        :key="article.name"
        class="group relative bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
      >
        <!-- Decorative Line -->
        <div
          class="absolute -top-4 -right-4 w-16 h-16 rounded-full bg-gradient-to-tr from-green-300 to-green-500 opacity-30 group-hover:opacity-60 transition-opacity duration-300"
        ></div>

        <!-- Image -->
        <div class="relative overflow-hidden rounded-lg">
          <img
            :src="`https://via.placeholder.com/400x300?text=${article.name}`"
            :alt="article.name"
            class="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>

        <!-- Article Content -->
        <div class="mt-6">
          <h3
            class="text-lg font-semibold text-green-800 group-hover:text-green-900 transition-all duration-300"
          >
            {{ article.name }}
          </h3>
          <p class="text-sm text-green-600 mt-2">
            {{ article.description }}
          </p>
        </div>

        <!-- Download Link -->
        <div class="mt-4">
          <a
            :href="article.file_address"
            target="_blank"
            class="inline-block text-sm font-medium px-5 py-2 rounded-lg bg-green-600 text-white shadow-md hover:bg-green-700 hover:shadow-lg transition-all duration-300"
          >
            دانلود مقاله
          </a>
        </div>
      </div>
    </div>

    <!-- View More Button -->
    <div class="text-center mt-12">
      <button
        @click="redirectToArticlesPage"
        class="inline-block text-lg font-semibold px-8 py-3 rounded-lg bg-green-700 text-white shadow-md hover:bg-green-800 hover:shadow-lg transition-all duration-300"
      >
        مشاهده‌ی مقالات بیشتر
      </button>
    </div>
  </section>
</template>


