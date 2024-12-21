<template>
  <div v-if="posts.length > 0" class="swiper-container mt-10 p-6">
    <!-- Title Section -->
    <h2 class="text-2xl font-bold text-center mb-6">آخرین مطالب وبلاگ</h2>

    <swiper
      :slidesPerView="1"
      :spaceBetween="10"
      loop
      :autoplay="{
        pauseOnMouseEnter: false,
        disableOnInteraction: true,
        delay: 1000,
      }"
      effect="fade"
    >
      <swiper-slide v-for="(post, index) in posts" :key="index">
        <div class="relative w-full h-full">
          <img
            :src="post.picture"
            alt="Post Image"
            class="w-full h-[300px] object-cover"
          />
          <div
            class="content absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center"
          >
            <div>
              <h3 class="text-lg font-bold">{{ post.title }}</h3>
              <p>{{ post.description }}</p>
            </div>
          </div>
        </div>
      </swiper-slide>
    </swiper>

    <router-link
      to="/blog"
      class="button w-fit mt-4 block mx-auto bg-green-500 hover:bg-green-600 text-white py-2 px-6 rounded-full text-center"
      >مشاهده وبلاگ</router-link
    >
  </div>

  <!-- Show the spinner if still loading -->
  <div v-else-if="loading" class="flex justify-center items-center">
    <Spinner size="w-20" />
  </div>

  <!-- If no posts are available, show a message -->
  <div v-else class="text-center">
    <p class="text-lg text-gray-600">هیچ مطلبی یافت نشد</p>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/swiper-bundle.css"; // Use this instead of .min.css
import { getPosts } from "@/api/blog"; // Adjust path to your API call

const posts = ref<any[]>([]);
const loading = ref(true);

// Fetch posts when component is mounted
onMounted(async () => {
  try {
    const response = await getPosts();
    // Store the latest 5 posts
    posts.value = response.data.slice(0, 5);
  } catch (error) {
    console.error("Error fetching posts:", error);
  } finally {
    loading.value = false;
  }
});
</script>

<style scoped>
.swiper-container {
  width: 100%;
}

.swiper-slide {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%; /* Ensure the slide takes full width */
  position: relative;
}

.swiper-slide img {
  object-fit: cover;
  width: 100%;
  filter: blur(5px);
}

.content {
  position: absolute;
  z-index: 1;
  padding: 20px;
  color: white;
  text-align: center;
  background-color: rgba(0, 0, 0, 0.5); /* Semi-transparent overlay */
  border-radius: 8px;
}

.content h3 {
  font-size: 1.5rem;
  font-weight: bold;
}

.content p {
  font-size: 1rem;
}

/* Green button with hover effect */
.button {
  background-color: #38a169; /* Green */
  transition: background-color 0.3s;
}

.button:hover {
  background-color: #2f855a; /* Darker green on hover */
}
</style>
