<template>
  <div class="flex h-full w-full">
    <!-- Sidebar -->
    <div class="w-1/4 bg-gray-800 text-white">
      <div class="p-4 font-bold text-lg border-b border-gray-700">
        آزیتا خوش آمدی !
      </div>
      <nav>
        <ul>
          <li
            v-for="item in sidebarItems"
            :key="item.key"
            @click="selectItem(item.key)"
            :class="[
              'cursor-pointer px-4 py-3 hover:bg-gray-700',
              selectedItem === item.key ? 'bg-gray-700' : '',
            ]"
          >
            {{ item.label }}
          </li>
        </ul>
      </nav>
    </div>

    <!-- Content -->
    <div class="flex-1 bg-gray-50 p-6">
      <component :is="currentView" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, defineAsyncComponent, computed } from "vue";

// Sidebar items
const sidebarItems = [
  {
    key: "articles",
    label: "مقالات",
    component: defineAsyncComponent(() => import("./Articles.vue")),
  },
  {
    key: "blog",
    label: "وبلاگ",
    component: defineAsyncComponent(() => import("./Blog.vue")),
  },
];

// Selected item
const selectedItem = ref<string>(sidebarItems[0].key);

// Dynamically load the current view
const currentView = computed(() => {
  const selected = sidebarItems.find((item) => item.key === selectedItem.value);
  return selected?.component || null;
});

// Handle item selection
const selectItem = (key: string) => {
  selectedItem.value = key;
};
</script>
