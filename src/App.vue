<template>
  <div class="flex flex-col min-h-screen">
    <!-- Header (conditionally rendered) -->
    <Header v-if="showHeaderFooter" />

    <!-- Main content (router-view) -->
    <div class="flex-grow">
      <router-view />
    </div>

    <!-- Footer (conditionally rendered) -->
    <Footer v-if="showHeaderFooter" />
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useRoute } from "vue-router";

import Header from "./shared/components/layout/header/Header.vue";
import Footer from "./shared/components/layout/footer/Footer.vue";

// Determine if header and footer should be shown
const route = useRoute();
const excludedRoutes = ["/admin-login", "/admin"];

const showHeaderFooter = computed(() => {
  return !excludedRoutes.includes(route.path);
});
</script>

<style scoped>
/* Optional: Add any specific global styles if needed */
</style>
