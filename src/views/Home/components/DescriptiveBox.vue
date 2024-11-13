<template>
  <div class="max-w-7xl mx-auto p-6 mt-10">
    <div
      class="grid grid-cols-1 md:grid-cols-3 gap-8 animate__animated animate__fadeInUp"
    >
      <!-- Widget 1: Therapy Session -->
      <div
        class="bg-white/50 backdrop-blur-lg p-6 rounded-xl shadow-lg space-y-4 hover:shadow-2xl transition-all duration-500"
      >
        <div
          class="flex justify-center items-center bg-green-600 p-4 rounded-full text-white"
        >
          <i class="fas fa-heartbeat text-3xl"></i>
        </div>
        <h3 class="text-xl font-semibold text-green-700 text-center">
          Therapy Session
        </h3>
        <p class="text-green-600 text-center">
          A safe space to explore thoughts and emotions. Schedule your next
          session for meaningful conversations.
        </p>
      </div>

      <!-- Widget 2: Consultation -->
      <div
        class="bg-white/50 backdrop-blur-lg p-6 rounded-xl shadow-lg space-y-4 hover:shadow-2xl transition-all duration-500"
      >
        <div
          class="flex justify-center items-center bg-teal-500 p-4 rounded-full text-white"
        >
          <i class="fas fa-comments text-3xl"></i>
        </div>
        <h3 class="text-xl font-semibold text-green-700 text-center">
          Consultation
        </h3>
        <p class="text-green-600 text-center">
          Talk about your mental well-being and start your journey towards
          emotional healing. Book an appointment.
        </p>
      </div>

      <!-- Widget 3: Mindfulness -->
      <div
        class="bg-white/50 backdrop-blur-lg p-6 rounded-xl shadow-lg space-y-4 hover:shadow-2xl transition-all duration-500"
      >
        <div
          class="flex justify-center items-center bg-teal-400 p-4 rounded-full text-white"
        >
          <i class="fas fa-puzzle-piece text-3xl"></i>
        </div>
        <h3 class="text-xl font-semibold text-green-700 text-center">
          Mindfulness
        </h3>
        <p class="text-green-600 text-center">
          Embrace mindfulness techniques to center yourself and overcome mental
          hurdles. Get started with our tools.
        </p>
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

/* Additional styling for hover effect */
.bg-green-600:hover {
  background-color: #16a34a; /* Darker green on hover */
}

.bg-teal-500:hover {
  background-color: #14b8a6; /* Darker teal on hover */
}

.bg-teal-400:hover {
  background-color: #2dd4bf; /* Darker teal on hover */
}
</style>
