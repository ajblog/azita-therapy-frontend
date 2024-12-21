<template>
  <div class="flex h-screen bg-gray-50 items-center justify-center">
    <div class="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
      <h1 class="text-2xl font-bold text-center text-gray-800">مدیریت سایت</h1>
      <p class="text-sm text-center text-gray-600 mt-2">
        اطلاعات زیر را وارد کنید
      </p>
      <form @submit.prevent="handleLogin" class="mt-6 space-y-4">
        <div>
          <label for="username" class="block text-sm font-medium text-gray-700"
            >Username</label
          >
          <input
            id="username"
            v-model="username"
            type="text"
            class="mt-1 block w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            placeholder="Enter your username"
            required
          />
        </div>
        <div>
          <label for="password" class="block text-sm font-medium text-gray-700"
            >Password</label
          >
          <input
            id="password"
            v-model="password"
            type="password"
            class="mt-1 block w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            placeholder="Enter your password"
            required
          />
        </div>
        <button
          type="submit"
          class="w-full py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
        >
          Login
        </button>
      </form>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { userSignIn } from "@/api/user";
import { ref } from "vue";
import { useRouter } from "vue-router";

const username = ref<string>("");
const password = ref<string>("");
const router = useRouter();

const handleLogin = async () => {
  try {
    const response = await userSignIn({
      username: username.value,
      password: password.value,
    });
    console.log("Login response:", response); // Log the response
    // Example: Assuming response contains a 'token' property
    document.cookie = `accessToken=${response.data.access_token}; path=/;`;
    router.push("/admin");
  } catch (error) {
    console.error("Login error:", error); // Log the error for debugging
    alert("مشکلی پیش آمده است");
  }
};
</script>
