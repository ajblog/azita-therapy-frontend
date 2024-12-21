<template>
  <div v-if="loading"><Spinner /></div>
  <div v-else class="min-h-screen bg-gray-50 text-gray-800">
    <!-- Blog Header -->
    <div class="relative h-64 md:h-96 rounded-b-3xl overflow-hidden shadow-lg">
      <img
        :src="posts?.picture"
        alt="Blog Image"
        class="w-full h-full object-cover brightness-50 transition-transform duration-500 hover:scale-110"
      />
      <div
        class="absolute inset-0 flex flex-col items-center justify-center text-center p-4"
      >
        <h1
          class="text-4xl md:text-5xl font-extrabold text-white leading-snug drop-shadow-lg"
        >
          {{ posts?.title }}
        </h1>
        <p class="mt-2 text-sm text-gray-200 opacity-90">
          {{
            //@ts-ignore
            formatDate(posts?.created_at)
          }}
        </p>
      </div>
    </div>

    <!-- Blog Content -->
    <section class="container mx-auto px-4 md:px-12 lg:px-20 mt-8">
      <!-- Back Button -->
      <div class="mb-8">
        <router-link
          to="/blog"
          class="flex items-center gap-2 text-green-600 hover:text-green-800 transition-colors duration-300"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M7.707 14.707a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414l5-5a1 1 0 011.414 1.414L3.414 9H17a1 1 0 110 2H3.414l4.293 4.293a1 1 0 010 1.414z"
              clip-rule="evenodd"
            />
          </svg>
          <span class="text-sm font-semibold">بازگشت</span>
        </router-link>
      </div>

      <!-- Content -->
      <article class="leading-relaxed text-gray-700 text-lg space-y-6">
        <!-- Decode base64 content before displaying -->
        <div v-html="decodedContent"></div>
      </article>
    </section>
  </div>
</template>

<script setup lang="ts">
import { getPostsById } from "@/api/blog";
import { IPost } from "@/shared/models/blog";
import { onMounted, ref, computed } from "vue";
import { useRoute } from "vue-router";
import Spinner from "@/shared/components/ui/Spinner/Spinner.vue";

const posts = ref<IPost>();
const loading = ref(true);

// Fetch posts when component is mounted
onMounted(async () => {
  try {
    console.log(route.params.id);
    const response = await getPostsById(
      parseInt(route.params.post_id as string)
    );
    // Store the latest post
    posts.value = response.data[0];
  } catch (error) {
    console.error("Error fetching posts:", error);
  } finally {
    loading.value = false;
  }
});

const route = useRoute();

// Function to format the date
const formatDate = (date: string) => {
  const options = { year: "numeric", month: "long", day: "numeric" };
  //@ts-ignore
  return new Date(date).toLocaleDateString("fa-IR", options);
};

// Computed property to decode base64 content
const decodedContent = computed(() => {
  return posts.value?.content
    ? decodeURIComponent(escape(atob(posts.value?.content)))
    : "";
});
</script>
