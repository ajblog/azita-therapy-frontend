<template>
    <div class="flex justify-center items-center h-full">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        :class="['animate-spin', spinnerSize]"
      >
        <!-- Background Circle (static) -->
        <circle 
          cx="12" 
          cy="12" 
          r="10" 
          stroke="currentColor" 
          stroke-width="4" 
          fill="none" 
          class="text-gray-300"
        />
        <!-- Foreground Circle (rotating) -->
        <circle
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          stroke-width="4"
          fill="none"
          class="text-green-600"
          stroke-dasharray="31.415 31.415" 
          stroke-dashoffset="0"
        />
      </svg>
    </div>
  </template>
  
  <script setup lang="ts">
  import { defineProps } from 'vue';
  
  // Define the prop with a default value
  const props = defineProps({
    size: {
      type: String,
      default: 'w-12', // default size (w-12)
    }
  });
  
  // Compute the size class based on the prop value
  const spinnerSize = props.size;
  </script>
  
  <style scoped>
  /* Optional: Add custom rotation animations */
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  
  /* Apply the spin animation */
  .animate-spin {
    animation: spin 1.5s linear infinite;
  }
  </style>
  