<template>
  <div class="max-w-md mx-auto bg-white rounded-lg shadow-md p-6">
    <div class="mb-6">
      <h1 class="text-2xl font-bold text-gray-900 mb-2">Contact Form</h1>
      <p class="text-gray-600">Fill out the form below and we'll get back to you soon.</p>
    </div>
    
    <form @submit.prevent="handleSubmit" class="space-y-6">
      <!-- Name Field -->
      <div>
        <label for="name" class="block text-sm font-medium text-gray-700 mb-2">
          Name
        </label>
        <div class="relative">
          <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <svg class="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
            </svg>
          </div>
          <input
            id="name"
            v-model="form.name"
            type="text"
            placeholder="John Doe"
            class="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-primary-500 focus:border-primary-500"
            required
          />
        </div>
      </div>

      <!-- Email Field -->
      <div>
        <label for="email" class="block text-sm font-medium text-gray-700 mb-2">
          Email
        </label>
        <div class="relative">
          <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <svg class="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
            </svg>
          </div>
          <input
            id="email"
            v-model="form.email"
            type="email"
            placeholder="john@example.com"
            class="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-primary-500 focus:border-primary-500"
            required
          />
        </div>
      </div>

      <!-- Subject Field -->
      <div>
        <label for="subject" class="block text-sm font-medium text-gray-700 mb-2">
          Subject
        </label>
        <div class="relative">
          <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <svg class="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-1l-4 4z"></path>
            </svg>
          </div>
          <input
            id="subject"
            v-model="form.subject"
            type="text"
            placeholder="How can we help?"
            class="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-primary-500 focus:border-primary-500"
            required
          />
        </div>
      </div>

      <!-- Message Field -->
      <div>
        <label for="message" class="block text-sm font-medium text-gray-700 mb-2">
          Message
        </label>
        <textarea
          id="message"
          v-model="form.message"
          rows="4"
          placeholder="Tell us more about your inquiry..."
          class="block w-full px-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-primary-500 focus:border-primary-500"
          required
        ></textarea>
      </div>

      <!-- Submit Button -->
      <div>
        <button
          type="submit"
          :disabled="isSubmitting"
          class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 disabled:opacity-50 disabled:cursor-not-allowed transition duration-200"
        >
          {{ isSubmitting ? 'Submitting...' : 'Submit' }}
        </button>
      </div>
    </form>

    <!-- Success Message -->
    <div v-if="showSuccess" class="mt-4 p-4 bg-green-50 border border-green-200 rounded-md">
      <p class="text-sm text-green-800">Thank you! Your message has been sent successfully.</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'

interface ContactForm {
  name: string
  email: string
  subject: string
  message: string
}

// Merged reactive form object from both versions
const form = reactive<ContactForm>({
  name: '',
  email: '',
  subject: '',
  message: ''
})

// State management for submission and success feedback
const isSubmitting = ref(false)
const showSuccess = ref(false)

// Enhanced submit handler combining both approaches
const handleSubmit = async () => {
  isSubmitting.value = true
  
  try {
    // Simulate form submission with async handling
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    console.log('Form submitted:', form)
    isSubmitting.value = false
    showSuccess.value = true
    
    // Reset form using Object.assign for cleaner approach
    Object.assign(form, {
      name: '',
      email: '',
      subject: '',
      message: ''
    })
    
    // Auto-hide success message after 3 seconds
    setTimeout(() => {
      showSuccess.value = false
    }, 3000)
  } catch (error) {
    console.error('Form submission error:', error)
    isSubmitting.value = false
  }
}
</script>