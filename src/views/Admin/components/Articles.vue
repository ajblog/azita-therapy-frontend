<template>
  <div class="min-h-screen bg-gray-50 py-10">
    <!-- Header -->
    <header
      class="bg-gradient-to-b from-green-100 to-white py-16 px-4 rounded-b-3xl shadow-md"
    >
      <div class="max-w-4xl mx-auto text-center">
        <h1 class="text-4xl font-extrabold text-green-700">مدیریت مقالات</h1>
        <p class="text-lg text-gray-600 mt-4">
          در این بخش می‌توانید مقالات را مشاهده، ویرایش و حذف کنید. همچنین برای
          افزودن مقالات جدید، فرم زیر را تکمیل نمایید.
        </p>
      </div>
    </header>

    <!-- Add Article Button -->
    <div class="max-w-4xl mx-auto mt-8 text-center">
      <button
        @click="showAddArticleForm = true"
        class="bg-green-600 text-white px-6 py-3 rounded-md hover:bg-green-700 transition-all duration-300"
      >
        افزودن مقاله
      </button>
    </div>

    <!-- Article Table -->
    <main class="w-full mx-auto mt-10 px-4">
      <div v-if="loading" class="flex justify-center">
        <Spinner size="w-32" />
      </div>

      <div v-else class="bg-white shadow-lg rounded-lg overflow-hidden">
        <table class="w-full table-auto text-sm md:text-base rtl">
          <thead>
            <tr class="bg-green-600 text-white">
              <th class="py-3 px-4 text-right">عنوان</th>
              <th class="py-3 px-4 text-right hidden sm:table-cell">توضیحات</th>
              <th class="py-3 px-4 text-right">نویسندگان</th>
              <th class="py-3 px-4 text-left">عملیات</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="(article, index) in articles"
              :key="article.id"
              class="hover:bg-gray-100 transition-colors duration-300"
            >
              <td class="py-4 px-4 text-gray-700 text-right">
                {{ article.name }}
              </td>
              <td
                class="py-4 px-4 text-gray-500 text-right hidden sm:table-cell"
              >
                {{ article.description }}
              </td>
              <td class="py-4 px-4 text-right">
                <span
                  v-for="writer of article.writer"
                  class="inline-block bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm ml-2"
                >
                  {{ writer }}
                </span>
              </td>
              <td class="py-4 px-4 text-left flex items-center space-x-4">
                <a
                  :href="article.file_address"
                  target="_blank"
                  class="text-blue-600 hover:text-blue-800 transition-all duration-300 ml-4"
                >
                  <i class="fas fa-eye"></i> مشاهده
                </a>
                <button
                  @click="openDeleteModal(article.id ? article.id : 0)"
                  class="text-red-600 hover:text-red-800 transition-all duration-300"
                >
                  <i class="fas fa-trash-alt"></i> حذف
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </main>

    <!-- Add Article Form -->
    <div
      v-if="showAddArticleForm"
      class="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50"
    >
      <div class="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h2 class="text-2xl font-bold text-center text-green-700 mb-6">
          افزودن مقاله جدید
        </h2>
        <form @submit.prevent="submitArticleForm">
          <div class="mb-4">
            <label for="name" class="block text-lg font-medium text-gray-700"
              >عنوان مقاله</label
            >
            <input
              id="name"
              v-model="newArticle.name"
              type="text"
              required
              class="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          <div class="mb-4">
            <label
              for="description"
              class="block text-lg font-medium text-gray-700"
              >توضیحات</label
            >
            <textarea
              id="description"
              v-model="newArticle.description"
              required
              class="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            ></textarea>
          </div>

          <div class="mb-4">
            <label
              for="released_date"
              class="block text-lg font-medium text-gray-700"
              >تاریخ انتشار</label
            >
            <input
              id="released_date"
              v-model="newArticle.released_date"
              type="date"
              required
              class="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          <div class="mb-4">
            <label
              for="file_address"
              class="block text-lg font-medium text-gray-700"
              >فایل مقاله</label
            >
            <input
              id="file_address"
              type="file"
              accept=".pdf,.doc,.docx"
              required
              @change="handleFileUpload"
              class="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          <div class="mb-4">
            <label for="writers" class="block text-lg font-medium text-gray-700"
              >نویسندگان</label
            >
            <input
              id="writers"
              v-model="newArticle.writer"
              placeholder="نویسندگان را با - از هم جدا کنید"
              type="text"
              required
              class="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          <div class="flex justify-between items-center">
            <button
              @click="showAddArticleForm = false"
              class="text-gray-600 px-4 py-2 rounded-md hover:bg-gray-200 transition-all duration-300"
            >
              بازگشت
            </button>
            <button
              type="submit"
              class="bg-green-600 text-white px-6 py-3 rounded-md hover:bg-green-700 transition-all duration-300"
            >
              ارسال
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import {
  Article,
  getArticles,
  deleteArticle,
  createArticle,
} from "@/api/articles"; // Assuming you have these API functions

const articles = ref<Article[]>([]);
const loading = ref<boolean>(true);
const showAddArticleForm = ref<boolean>(false);
const newArticle = ref<Article>({
  name: "",
  description: "",
  released_date: "",
  file_address: "",
  writer: "",
});

const fetchArticles = async () => {
  loading.value = true;
  try {
    const response = await getArticles();
    articles.value = response.data;
  } catch (error) {
    console.error("Error fetching articles:", error);
  } finally {
    loading.value = false;
  }
};

const openDeleteModal = (articleId: number) => {
  if (confirm("آیا از حذف این مقاله مطمئن هستید؟")) {
    deleteArticle(articleId).then(() => {
      fetchArticles(); // Refresh the article list after deletion
    });
  }
};

const submitArticleForm = async () => {
  const formData = new FormData();
  formData.append("name", newArticle.value.name);
  formData.append("description", newArticle.value.description);
  formData.append("released_date", newArticle.value.released_date);
  formData.append("writer", JSON.stringify(newArticle.value.writer.split("-")));

  // Append the file correctly
  const fileInput = document.getElementById("file_address") as HTMLInputElement;
  if (fileInput && fileInput.files && fileInput.files[0]) {
    formData.append("file_address", fileInput.files[0]);
  } else {
    console.error("No file selected");
    return; // Stop execution if no file is selected
  }

  // Log FormData using `forEach`
  formData.forEach((value, key) => {
    console.log(key, value); // Log each field and its value
  });

  try {
    await createArticle(formData); // Assuming this API function accepts FormData
    fetchArticles(); // Refresh the article list after adding
    showAddArticleForm.value = false; // Close form
  } catch (error) {
    console.error("Error submitting article:", error);
  }
};

const handleFileUpload = (event: Event) => {
  const fileInput = event.target as HTMLInputElement;
  if (fileInput && fileInput.files && fileInput.files[0]) {
    newArticle.value.file_address = URL.createObjectURL(fileInput.files[0]); // For temporary display URL
  }
};

// Fetch articles on mount
fetchArticles();
</script>

<style scoped>
/* General Table and Form Styles */
table th,
table td {
  white-space: nowrap;
}

table th,
table td,
form input,
form textarea {
  font-family: "Arial", sans-serif;
}

button {
  transition: all 0.3s ease;
}

@media (max-width: 640px) {
  table th,
  table td {
    white-space: normal;
  }
}
</style>
