<template>
  <div class="min-h-screen bg-gray-50 text-gray-800">
    <!-- Blog Header -->
    <div class="relative h-64 md:h-96 rounded-b-3xl overflow-hidden shadow-lg">
      <img
        :src="post.image"
        alt="Blog Image"
        class="w-full h-full object-cover brightness-50 transition-transform duration-500 hover:scale-110"
      />
      <div
        class="absolute inset-0 flex flex-col items-center justify-center text-center p-4"
      >
        <h1
          class="text-4xl md:text-5xl font-extrabold text-white leading-snug drop-shadow-lg"
        >
          {{ post.title }}
        </h1>
        <p class="mt-2 text-sm text-gray-200 opacity-90">
          {{ formatDate(post.date) }}
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
        <p>
          این یک نمونه متن لورم ایپسوم برای بخش محتوای مقاله است. شما می‌توانید
          این قسمت را با محتوای واقعی جایگزین کنید. هدف این بخش نمایش زیبایی
          صفحه و طراحی ساده و خوانا برای کاربران است.
        </p>
        <p>
          لورم ایپسوم به‌عنوان متن ساختگی در طراحی و صفحه‌آرایی استفاده می‌شود و
          بخش‌های مختلف مقاله را پر می‌کند تا طرح کلی صفحه مشخص شود.
        </p>
        <img
          src="https://via.placeholder.com/800x400"
          alt="Example"
          class="my-8 rounded-lg shadow-md transition-shadow hover:shadow-2xl"
        />
        <p>
          اینجا می‌توانید تصاویری مرتبط با مقاله قرار دهید. تصاویر می‌توانند
          جذابیت محتوای مقاله را افزایش دهند و کاربران را به خواندن ادامه مطلب
          تشویق کنند.
        </p>
        <p>
          لورم ایپسوم استاندارد در طراحی وب و چاپ است. در اینجا متنی ساده و زیبا
          که برای مطالعه کاربران مناسب باشد استفاده شده است.
        </p>
      </article>
    </section>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();

const post = ref({
  id: route.params.id,
  title: "عنوان مقاله",
  date: "2024-06-15",
  image: "https://via.placeholder.com/800x400",
  content: "", // Placeholder for future content if needed
});

const formatDate = (date) => {
  const options = { year: "numeric", month: "long", day: "numeric" };
  return new Date(date).toLocaleDateString("fa-IR", options);
};
</script>
