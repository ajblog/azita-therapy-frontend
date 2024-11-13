<template>
  <div class="flex flex-col min-h-screen">
    <!-- Header -->
    <Header />

    <!-- Main content (router-view) -->
    <div class="flex-grow">
      <router-view />
    </div>

    <Footer />
    <!-- Footer -->
  </div>
</template>

<script setup lang="ts">
import Header from "./shared/components/layout/header/Header.vue";
import Footer from "./shared/components/layout/footer/Footer.vue";
</script>

<style scoped>
/* Optional: Add any specific global styles if needed */
</style>
