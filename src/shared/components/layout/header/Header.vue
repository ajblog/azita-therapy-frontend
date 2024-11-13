<template>
  <header class="bg-green-50 p-4 shadow-md">
    <div class="max-w-7xl mx-auto flex items-center justify-between">
      <!-- Logo and Title Section -->
      <div class="flex items-center space-x-4">
        <h1 class="text-2xl font-semibold text-green-600">آزیتا دریای‌لعل</h1>
      </div>

      <!-- Desktop Navigation Links -->
      <nav class="hidden md:flex gap-6">
        <a href="#" class="text-lg text-green-600 hover:text-green-800">خانه</a>
        <!-- Home -->
        <a href="#" class="text-lg text-green-600 hover:text-green-800"
          >درباره</a
        >
        <!-- About -->
        <a href="#" class="text-lg text-green-600 hover:text-green-800"
          >خدمات</a
        >
        <!-- Services -->
        <a href="#" class="text-lg text-green-600 hover:text-green-800">تماس</a>
        <!-- Contact -->
      </nav>

      <!-- Sign In Section (Visible on both desktop and mobile) -->
      <div class="flex items-center space-x-4">
        <!-- Sign In (Desktop) -->
        <button
          class="bg-green-600 text-white py-2 px-4 rounded-full hover:bg-green-700 md:block hidden"
        >
          ورود/ثبت نام
        </button>
        <!-- Sign In (Desktop) -->
      </div>

      <!-- Mobile Burger Menu Button -->
      <div class="md:hidden flex items-center">
        <button
          @click="toggleMobileMenu"
          class="text-green-600 focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            class="h-6 w-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
    </div>

    <!-- Mobile Menu (Hidden by default, shown when the burger is clicked) -->
    <div v-show="isMobileMenuOpen" class="md:hidden bg-green-50 p-4">
      <nav class="space-y-4">
        <a href="#" class="block text-green-600 hover:text-green-800"> خانه </a>
        <!-- Home -->
        <a href="#" class="block text-green-600 hover:text-green-800">
          درباره
        </a>
        <!-- About -->
        <a href="#" class="block text-green-600 hover:text-green-800">
          خدمات
        </a>
        <!-- Services -->
        <a href="#" class="block text-green-600 hover:text-green-800"> تماس </a>
        <!-- Contact -->
      </nav>

      <!-- Sign In Button on Mobile -->
      <div class="mt-4">
        <button
          class="w-full bg-green-600 text-white py-2 px-4 rounded-full hover:bg-green-700"
        >
          ورود/ثبت نام
        </button>
        <!-- Sign In (Mobile) -->
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref } from "vue";

const isMobileMenuOpen = ref(false);

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
};
</script>

<style scoped>
/* Custom styles for your header, if needed */
</style>
