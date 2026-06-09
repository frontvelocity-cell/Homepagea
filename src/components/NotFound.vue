<template>
  <div class="text-center">
    <div class="max-w-md mx-auto">
      <div class="mb-8">
        <!-- Merged: Using larger text size from second version for better visual impact -->
        <h1 class="text-9xl font-bold text-gray-300 mb-4">404</h1>
        <!-- Merged: Using more prominent styling from second version -->
        <h2 class="text-2xl font-bold text-gray-800 mb-2">Page Not Found</h2>
        <!-- Merged: Using clearer message from second version -->
        <p class="text-gray-600">
          The page you're looking for doesn't exist.
        </p>
      </div>
      
      <div class="space-y-4">
        <!-- Merged: Using more modern button styling from second version with transition -->
        <router-link 
          to="/" 
          class="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-200"
        >
          Go Home
        </router-link>
        
        <div>
          <!-- Merged: Using proper Vue 3 Composition API method instead of direct $router access -->
          <button 
            @click="goBack" 
            class="text-blue-600 hover:text-blue-800 font-medium"
          >
            ← Go Back
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// Merged: Added proper Vue Router import for better practices
import { useRouter } from 'vue-router'

// 404 Not Found page - merged comment
const router = useRouter()

// Merged: Using proper router.back() method instead of router.go(-1)
const goBack = () => {
  router.back()
}
</script>