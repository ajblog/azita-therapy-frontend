<template>
  <div class="min-h-screen bg-gray-50 text-gray-800 mt-10">
    <!-- Header Section -->
    <header
      class="relative bg-gradient-to-b from-green-100 to-white py-16 px-4 shadow-md rounded-b-3xl"
    >
      <div class="container mx-auto text-center">
        <h1 class="text-4xl font-extrabold text-green-700">تماس با من</h1>
        <p class="text-lg leading-relaxed text-gray-600 mt-4">
          خوشحال می‌شوم که به شما کمک کنم. اگر سوالی دارید یا نیاز به مشاوره
          دارید، لطفاً فرم زیر را پر کنید و من به سرعت با شما تماس خواهم گرفت.
        </p>
      </div>
    </header>

    <!-- Contact Form Section -->
    <section class="container mx-auto px-4 mt-16 space-y-12">
      <div class="bg-white shadow-lg rounded-lg p-8">
        <h2 class="text-3xl font-bold text-green-700 mb-6">فرم تماس</h2>

        <!-- Contact Form -->
        <form @submit.prevent="submitForm">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <!-- Name Field -->
            <div class="flex flex-col">
              <label for="name" class="text-lg text-gray-700 mb-2"
                >نام شما</label
              >
              <input
                type="text"
                id="name"
                v-model="form.name"
                class="p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                required
              />
            </div>

            <!-- Email Field -->
            <div class="flex flex-col">
              <label for="email" class="text-lg text-gray-700 mb-2"
                >ایمیل شما</label
              >
              <input
                type="email"
                id="email"
                v-model="form.email"
                class="p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                required
              />
            </div>
          </div>

          <!-- Subject Field -->
          <div class="flex flex-col mt-8">
            <label for="subject" class="text-lg text-gray-700 mb-2"
              >موضوع</label
            >
            <input
              type="text"
              id="subject"
              v-model="form.subject"
              class="p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          </div>

          <!-- Message Field -->
          <div class="flex flex-col mt-8">
            <label for="message" class="text-lg text-gray-700 mb-2"
              >پیام شما</label
            >
            <textarea
              id="message"
              v-model="form.message"
              class="p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              rows="6"
              required
            ></textarea>
          </div>

          <!-- Submit Button -->
          <div class="mt-8 flex justify-center">
            <button
              type="submit"
              class="px-8 py-3 bg-green-600 text-white text-lg font-semibold rounded-full hover:bg-green-700 transition-colors"
            >
              ارسال پیام
            </button>
          </div>
        </form>
      </div>
    </section>

    <!-- Social Media Links -->
    <section class="container mx-auto px-4 mt-16 text-center">
      <h2 class="text-3xl font-bold text-green-700 mb-6">راه‌های ارتباطی</h2>
      <div class="flex justify-center gap-6">
        <!-- WhatsApp Link -->
        <a
          href="https://wa.me/+YourPhoneNumber"
          target="_blank"
          class="text-2xl text-green-600 hover:text-green-800 transition-colors"
        >
          <i class="fab fa-whatsapp"></i>
          WhatsApp
        </a>

        <!-- Telegram Link -->
        <a
          href="https://t.me/YourTelegramUsername"
          target="_blank"
          class="text-2xl text-green-600 hover:text-green-800 transition-colors"
        >
          <i class="fab fa-telegram"></i>
          Telegram
        </a>

        <!-- Instagram Link -->
        <a
          href="https://instagram.com/YourInstagramUsername"
          target="_blank"
          class="text-2xl text-green-600 hover:text-green-800 transition-colors"
        >
          <i class="fab fa-instagram"></i>
          Instagram
        </a>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from "vue";

const form = ref({
  name: "",
  email: "",
  subject: "",
  message: "",
});

const submitForm = async () => {
  // For actual email functionality, replace this with an email service API (like EmailJS, Formspree, etc.)
  alert("Your message has been sent!");
  form.value.name = "";
  form.value.email = "";
  form.value.subject = "";
  form.value.message = "";
};
</script>

<style scoped>
/* Custom styles for form and social icons */
i {
  margin-right: 8px;
  font-size: 1.5rem;
}

button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

button:active {
  transform: scale(0.98);
}

input:focus,
textarea:focus {
  outline: none;
  border-color: #4caf50;
  box-shadow: 0 0 5px rgba(76, 175, 80, 0.5);
}
</style>
