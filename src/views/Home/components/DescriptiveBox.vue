<template>
  <div class="max-w-7xl mx-auto py-12 px-6">
    <!-- Section Header -->
    <div class="text-center mb-12">
      <h2
        class="text-3xl font-bold text-green-800 hover:text-green-900 transition-all duration-300"
      >
        خدمات ویژه درمانی
      </h2>
      <div class="w-20 mx-auto mt-4 border-b-4 border-green-600"></div>
      <p class="text-lg text-green-600 mt-4">
        مجموعه‌ای از خدمات روان‌شناسی برای بهبود کیفیت زندگی شما.
      </p>
    </div>

    <!-- Cards Grid -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
      <!-- Decorative Gradient Background -->
      <div
        class="absolute inset-0 bg-gradient-to-r from-green-100 to-teal-100 opacity-30 rounded-xl -z-10"
      ></div>

      <!-- Card 1: Therapy Session -->
      <div
        class="group relative bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 space-y-6 border border-green-100 hover:border-green-300"
      >
        <div
          class="w-20 h-20 flex justify-center items-center bg-green-600 text-white rounded-full shadow-md mx-auto group-hover:scale-110 transition-transform duration-300"
        >
          <i class="fas fa-heartbeat text-3xl"></i>
        </div>
        <h3
          class="text-xl font-bold text-green-800 group-hover:text-green-900 text-center transition-all duration-300"
        >
          جلسه درمانی
        </h3>
        <p class="text-sm text-green-600 text-center">
          ایجاد فضایی امن برای بیان افکار و احساسات. جلسه درمانی خود را
          برنامه‌ریزی کنید.
        </p>
      </div>

      <!-- Card 2: Consultation -->
      <div
        class="group relative bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 space-y-6 border border-teal-100 hover:border-teal-300"
      >
        <div
          class="w-20 h-20 flex justify-center items-center bg-teal-500 text-white rounded-full shadow-md mx-auto group-hover:scale-110 transition-transform duration-300"
        >
          <i class="fas fa-comments text-3xl"></i>
        </div>
        <h3
          class="text-xl font-bold text-teal-800 group-hover:text-teal-900 text-center transition-all duration-300"
        >
          مشاوره فردی
        </h3>
        <p class="text-sm text-teal-600 text-center">
          درباره سلامت روانی خود صحبت کنید و بهبود زندگی‌تان را آغاز کنید.
        </p>
      </div>

      <!-- Card 3: Mindfulness -->
      <div
        class="group relative bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 space-y-6 border border-teal-100 hover:border-teal-300"
      >
        <div
          class="w-20 h-20 flex justify-center items-center bg-teal-400 text-white rounded-full shadow-md mx-auto group-hover:scale-110 transition-transform duration-300"
        >
          <i class="fas fa-puzzle-piece text-3xl"></i>
        </div>
        <h3
          class="text-xl font-bold text-teal-800 group-hover:text-teal-900 text-center transition-all duration-300"
        >
          تکنیک‌های ذهن‌آگاهی
        </h3>
        <p class="text-sm text-teal-600 text-center">
          استفاده از تکنیک‌های ذهن‌آگاهی برای دستیابی به آرامش و غلبه بر
          چالش‌ها.
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// No additional logic is required for this static component.
</script>

<style scoped>
/* Animation for hover scale */
.group:hover .group-hover\:scale-110 {
  transform: scale(1.1);
}

/* Transition utilities for hover states */
.group:hover .group-hover\:text-green-900 {
  color: #065f46;
}

.group:hover .group-hover\:text-teal-900 {
  color: #0d9488;
}
</style>
