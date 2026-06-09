<template>
  <div class="text-center">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 class="text-4xl font-bold text-gray-900 mb-6">Welcome to Vue Contact App</h1>
      <p class="text-xl text-gray-600 mb-8">
        A modern contact form built with Vue 3, TypeScript, and Tailwind CSS.
      </p>
      
      <!-- Feature cards section showcasing the tech stack -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div class="bg-white p-6 rounded-lg shadow-md">
          <h3 class="text-xl font-semibold text-gray-800 mb-4">Vue 3</h3>
          <p class="text-gray-600">The progressive JavaScript framework with Composition API support.</p>
        </div>
        
        <div class="bg-white p-6 rounded-lg shadow-md">
          <h3 class="text-xl font-semibold text-gray-800 mb-4">TypeScript</h3>
          <p class="text-gray-600">Type-safe development with full IntelliSense support.</p>
        </div>
        
        <div class="bg-white p-6 rounded-lg shadow-md">
          <h3 class="text-xl font-semibold text-gray-800 mb-4">Tailwind CSS</h3>
          <p class="text-gray-600">Utility-first CSS framework for rapid UI development.</p>
        </div>
      </div>
      
      <!-- Call-to-action button with consistent styling -->
      <div class="flex justify-center">
        <router-link 
          to="/contact" 
          class="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition duration-200"
        >
          Get in Touch
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// Merged home page component combining contact app intro with tech stack showcase
// Uses consistent primary color scheme and improved accessibility with focus states
</script>