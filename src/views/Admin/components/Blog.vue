<template>
  <div class="min-h-screen bg-gray-50 py-10">
    <!-- Header -->
    <header
      class="bg-gradient-to-b from-blue-100 to-white py-16 px-4 rounded-b-3xl shadow-md"
    >
      <div class="max-w-4xl mx-auto text-center">
        <h1 class="text-4xl font-extrabold text-blue-700">مدیریت بلاگ</h1>
        <p class="text-lg text-gray-600 mt-4">
          در این بخش می‌توانید پست های بلاگ را مشاهده، ویرایش و حذف کنید. همچنین
          برای افزودن پست جدید، فرم زیر را تکمیل نمایید.
        </p>
      </div>
    </header>

    <!-- Add Blog Button -->
    <div class="max-w-4xl mx-auto mt-8 text-center">
      <button
        @click="showAddPostForm = true"
        class="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-all duration-300"
      >
        افزودن پست
      </button>
    </div>

    <!-- Blog Table -->
    <main class="w-full mx-auto mt-10 px-4">
      <div v-if="loading" class="flex justify-center">
        <Spinner size="w-32" />
      </div>

      <div v-else class="bg-white shadow-lg rounded-lg overflow-hidden">
        <table class="w-full table-auto text-sm md:text-base rtl">
          <thead>
            <tr class="bg-blue-600 text-white">
              <th class="py-3 px-4 text-right">عنوان</th>
              <th class="py-3 px-4 text-right hidden sm:table-cell">توضیحات</th>
              <th class="py-3 px-4 text-left">عملیات</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="(post, index) in posts"
              :key="post.id"
              class="hover:bg-gray-100 transition-colors duration-300"
            >
              <td class="py-4 px-4 text-gray-700 text-right">
                {{ post.title }}
              </td>
              <td
                class="py-4 px-4 text-gray-500 text-right hidden sm:table-cell"
              >
                {{ post.description }}
              </td>
              <td
                class="py-4 px-4 text-left flex justify-end items-center space-x-4"
              >
                <a
                  :href="post.picture"
                  target="_blank"
                  class="text-blue-600 hover:text-blue-800 transition-all duration-300 ml-4"
                >
                  <i class="fas fa-eye"></i> مشاهده
                </a>
                <button
                  @click="editPost(post.id)"
                  class="text-yellow-600 hover:text-yellow-800 transition-all duration-300"
                >
                  <i class="fas fa-edit"></i> ویرایش
                </button>
                <button
                  @click="openDeleteModal(post.id)"
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

    <!-- Add/Edit Post Form -->
    <div
      v-if="showAddPostForm || showEditPostForm"
      class="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50"
    >
      <div class="bg-white p-8 rounded-lg shadow-lg max-w-2xl w-full">
        <h2 class="text-2xl font-bold text-center text-blue-700 mb-6">
          {{ showEditPostForm ? "ویرایش بلاگ" : "افزودن بلاگ جدید" }}
        </h2>
        <form @submit.prevent="submitPostForm">
          <div class="mb-4">
            <label for="title" class="block text-lg font-medium text-gray-700"
              >عنوان بلاگ</label
            >
            <input
              id="title"
              v-model="newPost.title"
              type="text"
              required
              class="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
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
              v-model="newPost.description"
              required
              class="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>

          <!-- Rich Text Editor for Content -->
          <div class="mb-4">
            <label for="content" class="block text-lg font-medium text-gray-700"
              >محتوا</label
            >
            <editor
              v-model="newPost.content"
              api-key="igq2fypedmmjk4t3ufngpn9hyepglmlhh0iiq9527o28fckz"
              :init="editorConfig"
            ></editor>
          </div>

          <div class="mb-4">
            <label for="picture" class="block text-lg font-medium text-gray-700"
              >تصویر</label
            >
            <input
              id="picture"
              type="file"
              accept=".jpg,.jpeg,.png"
              @change="handleFileUpload"
              class="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div class="flex justify-between items-center">
            <button
              @click="
                showAddPostForm = false;
                showEditPostForm = false;
              "
              class="text-gray-600 px-4 py-2 rounded-md hover:bg-gray-200 transition-all duration-300"
            >
              بازگشت
            </button>
            <button
              type="submit"
              class="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-all duration-300"
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
import Editor from "@tinymce/tinymce-vue"; // Import TinyMCE component
import {
  getPosts,
  getPostsById,
  createPost,
  updatePost,
  deletePost,
} from "@/api/blog"; // Importing blog post API functions

const posts = ref<any[]>([]);
const loading = ref<boolean>(true);
const showAddPostForm = ref<boolean>(false);
const showEditPostForm = ref<boolean>(false);
const newPost = ref<any>({
  title: "",
  description: "",
  content: "",
  picture: null,
});

// Fetch posts
const fetchPosts = async () => {
  loading.value = true;
  try {
    const response = await getPosts();
    posts.value = response.data;
  } catch (error) {
    console.error("Error fetching posts:", error);
  } finally {
    loading.value = false;
  }
};

// Open the edit form with the post data
const editPost = async (id: number) => {
  try {
    const response = await getPostsById(id);
    newPost.value = {
      ...response.data[0],
      picture: null,
      content: decodeBase64(response.data[0].content), // Decode content from base64
    };
    showAddPostForm.value = false;
    showEditPostForm.value = true;
  } catch (error) {
    console.error("Error fetching post for editing:", error);
  }
};

// Submit the form (create or update)
const submitPostForm = async () => {
  const formData = new FormData();
  formData.append("title", newPost.value.title);
  formData.append("description", newPost.value.description);
  formData.append("content", encodeBase64(newPost.value.content)); // Encode content to base64

  if (newPost.value.picture) {
    formData.append("picture", newPost.value.picture);
  }

  try {
    if (showEditPostForm.value) {
      await updatePost(newPost.value.id, formData);
    } else {
      await createPost(formData);
    }
    fetchPosts();
    showAddPostForm.value = false;
    showEditPostForm.value = false;
  } catch (error) {
    console.error("Error submitting post:", error);
  }
};

// Handle file upload
const handleFileUpload = (event: Event) => {
  const fileInput = event.target as HTMLInputElement;
  if (fileInput && fileInput.files && fileInput.files[0]) {
    newPost.value.picture = fileInput.files[0];
  }
};

// Open delete confirmation modal
const openDeleteModal = (postId: number) => {
  if (confirm("آیا از حذف این بلاگ مطمئن هستید؟")) {
    deletePost(postId).then(() => {
      fetchPosts(); // Refresh post list after deletion
    });
  }
};

// Utility function to encode to base64
const encodeBase64 = (str: string) => {
  return btoa(unescape(encodeURIComponent(str)));
};

// Utility function to decode from base64
const decodeBase64 = (str: string) => {
  return decodeURIComponent(escape(atob(str)));
};

// TinyMCE editor configuration
const editorConfig = {
  height: 300,
  menubar: false,
  plugins: "link image code", // Make sure 'image' plugin is included
  toolbar:
    "undo redo | bold italic | alignleft aligncenter alignright | link image | code", // Add 'image' to the toolbar
  image_advtab: true, // This enables more advanced options when selecting an image
};
fetchPosts();
</script>

<style scoped lang="scss">
/* Add your custom styles here */
</style>
