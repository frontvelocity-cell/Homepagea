<template>
  <div class="text-center">
    <div class="max-w-md mx-auto">
      <div class="mb-8">
        <h1 class="text-6xl font-bold text-gray-900 mb-4">404</h1>
        <h2 class="text-2xl font-semibold text-gray-700 mb-2">Page Not Found</h2>
        <p class="text-gray-600">
          Sorry, the page you are looking for doesn't exist.
        </p>
      </div>
      
      <div class="space-y-4">
        <router-link 
          to="/" 
          class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
        >
          Go Home
        </router-link>
        
        <div>
          <button 
            @click="$router.go(-1)" 
            class="text-primary-600 hover:text-primary-500 text-sm font-medium"
          >
            ← Go Back
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// 404 Not Found page
</script>