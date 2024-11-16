<template>
  <div class="relative p-6 mt-8">
    <!-- Container -->
    <div
      class="relative max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-stretch bg-white shadow-2xl rounded-3xl overflow-hidden"
    >
      <!-- Image Section -->
      <div
        class="relative w-full md:w-1/2 bg-gradient-to-tl from-green-300 via-teal-200 to-green-100 p-6 flex items-center justify-center"
      >
        <div class="relative w-80 h-80 overflow-hidden rounded-[20%] shadow-xl">
          <img
            src="../../../assets/images/azita.jpg"
            alt="Azita Daryaye-Lal"
            class="object-cover w-full h-full"
          />
        </div>
        <!-- Decorative Element -->
        <div
          class="absolute top-4 left-4 w-16 h-16 bg-green-400/20 rounded-full blur-xl"
        ></div>
      </div>

      <!-- Content Section -->
      <div class="flex-1 p-8 md:p-12 text-center md:text-right">
        <h2 class="text-4xl font-extrabold text-green-800 leading-tight mb-4">
          دکتر آزیتا دریای‌لعل
        </h2>
        <p
          class="text-lg text-green-700 font-light leading-relaxed tracking-wide mb-6"
        >
          روان‌درمانگر و مشاور شما در مسیر زندگی بهتر. با من همراه شوید تا با
          استفاده از راهکارهای علمی و عملی، کیفیت زندگی و آرامش را تجربه کنید.
        </p>

        <!-- Call-to-Action Buttons -->
        <div
          class="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
        >
          <button
            class="px-6 py-3 text-sm font-semibold rounded-full bg-green-600 text-white shadow hover:bg-green-700 hover:shadow-lg transition-all duration-300"
          >
            رزرو جلسه مشاوره
          </button>
          <button
            class="px-6 py-3 text-sm font-semibold rounded-full border border-green-600 text-green-600 hover:bg-green-600 hover:text-white hover:shadow-lg transition-all duration-300"
          >
            درباره من
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Extra styles for hover and animations */
div:hover img {
  transform: scale(1.05);
  transition: transform 0.4s ease-in-out;
}
</style>
