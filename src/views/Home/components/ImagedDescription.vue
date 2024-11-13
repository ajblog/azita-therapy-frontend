<template>
  <div class="max-w-7xl mx-auto p-6 mt-10">
    <!-- Main container with fade-in animation -->
    <div
      class="flex flex-col md:flex-row items-center bg-transparent p-8 rounded-xl shadow-lg space-y-6 md:space-y-0 md:space-x-8 animate__animated animate__fadeInUp gap-2"
    >
      <!-- Profile Image (Squared) -->
      <div
        class="w-48 h-48 md:w-64 md:h-64 overflow-hidden shadow-xl border-4 border-green-600 rounded-md"
      >
        <img
          src="../../../assets/images/azita.jpg"
          alt="Site Owner's Portrait"
          class="object-cover w-full h-full"
        />
      </div>

      <!-- Glass-like Box (with backdrop blur) -->
      <div
        class="relative flex-1 p-8 bg-white/30 backdrop-blur-md border-2 border-green-500 rounded-xl shadow-lg space-y-6 hover:shadow-2xl transition-shadow duration-500 md:h-64"
      >
        <!-- Decorative Pseudo-element (use :after) -->
        <div
          class="absolute inset-0 z-0 bg-gradient-to-r from-green-400 to-teal-400 opacity-30 rounded-xl pointer-events-none"
        ></div>

        <h2
          class="relative z-10 text-3xl font-semibold text-green-800 tracking-wide"
        >
          آزیتا دریای‌لعل
        </h2>
        <p
          class="relative z-10 text-lg text-green-700 font-light leading-relaxed"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
          odio. Praesent libero. Sed cursus ante dapibus diam.
        </p>

        <!-- Decorative Border Line at the Bottom -->
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// No specific script logic needed for this component
</script>

<style scoped>
@keyframes fadeInUp {
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate__fadeInUp {
  animation: fadeInUp 1s ease-out;
}
</style>
