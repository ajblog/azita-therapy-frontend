<template>
  <div class="min-h-screen bg-gray-50 text-gray-800 mt-10">
    <!-- Header Section -->
    <header
      class="relative bg-gradient-to-b from-green-100 to-white py-16 px-4 shadow-md rounded-b-3xl"
    >
      <div
        class="container mx-auto flex flex-col md:flex-row items-center gap-8 mt-8 transition-all ease-in-out duration-500"
      >
        <!-- Portrait -->
        <div class="w-full md:w-1/2 flex justify-center">
          <img
            src="../../assets/images/azita_2.jpg"
            alt="Therapist Portrait"
            class="rounded-3xl shadow-lg w-80 md:w-96 transition-transform transform hover:scale-105"
          />
        </div>
        <!-- Bio -->
        <div class="w-full md:w-1/2 text-center md:text-right space-y-4">
          <h1
            class="text-4xl font-extrabold text-green-700 mb-4 opacity-0 animate-fadeIn"
          >
            درباره من
          </h1>
          <p
            class="text-lg leading-relaxed text-gray-600 opacity-0 animate-fadeIn delay-200"
          >
            من [نام درمانگر] هستم، درمانگر و مشاور با بیش از ۱۰ سال تجربه در
            حوزه‌های روان‌شناسی بالینی و مشاوره خانواده. هدف من کمک به شما در
            دستیابی به آرامش ذهنی، توسعه فردی و داشتن زندگی سالم و متعادل است.
            با ارائه خدمات مشاوره فردی و گروهی، در کنارتان خواهم بود تا بهترین
            نسخه خودتان را بیابید.
          </p>
        </div>
      </div>
      <!-- Decorative Element -->
      <div
        class="absolute top-0 right-0 w-1/2 h-16 bg-green-200 rounded-bl-full opacity-50"
      ></div>
    </header>

    <!-- Experience & Qualifications -->
    <section
      class="container mx-auto px-4 mt-16 space-y-12 transition-all duration-500 opacity-0 animate-fadeIn delay-300"
    >
      <!-- Experiences -->
      <div
        class="bg-white shadow-lg rounded-lg p-8 hover:shadow-2xl transition-shadow duration-300"
      >
        <h2 class="text-3xl font-bold text-green-700 mb-6">تجربیات</h2>
        <ul class="list-disc text-gray-700 space-y-3 ml-6">
          <li>بیش از ۱۰ سال تجربه مشاوره روان‌شناسی بالینی</li>
          <li>متخصص در درمان اضطراب و افسردگی</li>
          <li>مدرس دوره‌های خودشناسی و مهارت‌های زندگی</li>
          <li>مشاور خانواده و زوج‌درمانی</li>
          <li>همکاری با کلینیک‌های معتبر روان‌درمانی</li>
        </ul>
      </div>

      <!-- Qualifications -->
      <div
        class="bg-white shadow-lg rounded-lg p-8 hover:shadow-2xl transition-shadow duration-300"
      >
        <h2 class="text-3xl font-bold text-green-700 mb-6">مدارک تحصیلی</h2>
        <ul class="list-disc text-gray-700 space-y-3 ml-6">
          <li>دکترای روان‌شناسی بالینی از دانشگاه تهران</li>
          <li>کارشناسی ارشد مشاوره خانواده از دانشگاه شهید بهشتی</li>
          <li>دوره‌های تخصصی درمان شناختی-رفتاری (CBT)</li>
          <li>مدارک بین‌المللی در حوزه مداخله در بحران</li>
        </ul>
      </div>
    </section>
  </div>
</template>

<script setup></script>

<style scoped>
/* Custom styles */
@keyframes fadeIn {
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fadeIn {
  animation: fadeIn 1s ease-out forwards;
}

.animate-fadeIn.delay-200 {
  animation-delay: 0.2s;
}

.animate-fadeIn.delay-300 {
  animation-delay: 0.3s;
}
</style>
