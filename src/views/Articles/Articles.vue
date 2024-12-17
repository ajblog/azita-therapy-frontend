<template>
  <div class="min-h-screen bg-gray-50 mt-10">
    <!-- Header -->
    <header
      class="relative flex flex-col items-center justify-center text-center bg-gradient-to-b from-green-100 to-white py-16 px-4 rounded-b-3xl shadow-md"
    >
      <div class="space-y-4 max-w-2xl mx-auto">
        <h1 class="text-4xl font-extrabold text-green-700">
          صفحه دانلود مقالات
        </h1>
        <p class="text-lg text-gray-600 leading-relaxed">
          در این صفحه می‌توانید به مقالات علمی و تخصصی در حوزه‌های مختلف
          روان‌شناسی، پزشکی و سلامت دسترسی پیدا کنید. هر مقاله شامل توضیحات
          مختصر، نویسندگان و دسته‌بندی مشخص است.
        </p>
      </div>
      <!-- Decorative Element -->
      <div
        class="absolute top-0 right-0 w-1/2 h-16 bg-green-200 rounded-bl-full"
      ></div>
    </header>

    <!-- Article Table -->
    <main class="container mx-auto mt-8 px-4">
      <div
        class="bg-white shadow-lg rounded-lg overflow-auto transition-transform duration-500 hover:scale-[1.01]"
      >
        <table
          class="w-full table-auto border-collapse text-sm md:text-base rtl"
        >
          <!-- Table Header -->
          <thead>
            <tr class="bg-green-600 text-white text-right">
              <th class="py-3 px-4">عنوان</th>
              <th class="py-3 px-4 hidden sm:table-cell">توضیحات</th>
              <th class="py-3 px-4">نویسندگان</th>
              <th class="py-3 px-4">دسته‌بندی</th>
              <th class="py-3 px-4 text-left"></th>
            </tr>
          </thead>
          <!-- Table Body -->
          <tbody>
            <tr
              v-for="(article, index) in articles"
              :key="index"
              class="hover:bg-gray-100 transition-colors duration-300"
            >
              <td class="py-4 px-4 text-gray-700 text-right">
                {{ article.title }}
              </td>
              <td
                class="py-4 px-4 text-gray-500 text-right hidden sm:table-cell"
              >
                {{ article.description }}
              </td>
              <td class="py-4 px-4 text-right">
                {{ article.authors }}
              </td>
              <td class="py-4 px-4 text-right">
                <span
                  class="inline-block bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm"
                >
                  {{ article.category }}
                </span>
              </td>
              <td class="py-4 px-4 text-left">
                <button
                  class="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded transition-all duration-300"
                >
                  دانلود
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </main>
  </div>
</template>

<script setup>
const articles = [
  {
    title: "روان‌شناسی بالینی",
    description: "مقاله‌ای درباره روش‌های نوین درمان بالینی.",
    authors: "دکتر علی احمدی",
    category: "روان‌شناسی",
  },
  {
    title: "تغذیه و سلامت",
    description: "اهمیت تغذیه سالم در زندگی روزمره.",
    authors: "مهندس زهرا رضایی",
    category: "سلامت",
  },
  {
    title: "پیشگیری از بیماری‌ها",
    description: "بررسی راهکارهای پیشگیری از بیماری‌های شایع.",
    authors: "دکتر محمد کریمی",
    category: "پزشکی",
  },
  {
    title: "آموزش سلامت",
    description: "راهنمای جامع آموزش سلامت.",
    authors: "دکتر فاطمه صادقی",
    category: "سلامت",
  },
];
</script>

<style scoped>
table th,
table td {
  white-space: nowrap; /* جلوگیری از شکست متن */
}

@media (max-width: 640px) {
  table th,
  table td {
    white-space: normal; /* متن‌ها در موبایل چند خطی می‌شوند */
  }
}
</style>
