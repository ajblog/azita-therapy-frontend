<template>
  <footer class="bg-green-50 p-6 shadow-md mt-10">
    <div
      class="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center"
    >
      <!-- Copyright Section (hidden as per request) -->
      <div class="text-center md:text-left">
        <p class="text-sm text-green-600">
          © 2024 آزیتا دریای‌لعل. تمامی حقوق محفوظ است.
        </p>
      </div>

      <!-- Contact and Social Links -->
      <div class="flex items-center gap-8 mt-4 md:mt-0">
        <!-- Phone Number -->
        <a
          href="tel:+982112345678"
          class="text-green-600 hover:text-green-800 flex items-center"
        >
          <i class="fas fa-phone-alt"></i>
        </a>

        <!-- Email -->
        <a
          href="mailto:example@domain.com"
          class="text-green-600 hover:text-green-800 flex items-center"
        >
          <i class="fas fa-envelope"></i>
        </a>

        <!-- Instagram -->
        <a
          href="https://www.instagram.com"
          target="_blank"
          class="text-green-600 hover:text-green-800 flex items-center"
        >
          <i class="fab fa-instagram"></i>
        </a>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts"></script>

<style scoped>
/* Custom styles for your footer */
footer {
  background-color: #f0fdf4; /* Light green background */
}

footer .icon {
  font-size: 1.5rem; /* Adjust icon size */
}
</style>
