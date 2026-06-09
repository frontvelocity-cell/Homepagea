<template>
  <div id="app" class="min-h-screen bg-gray-50">
    <nav class="bg-white shadow-sm border-b border-gray-200">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between h-16">
          <div class="flex items-center">
            <h1 class="text-xl font-semibold text-gray-900">Vue Contact App</h1>
          </div>
          <div class="flex items-center space-x-4">
            <router-link 
              to="/" 
              class="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
              active-class="text-primary-600 bg-primary-50"
            >
              Home
            </router-link>
            <router-link 
              to="/contact" 
              class="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
              active-class="text-primary-600 bg-primary-50"
            >
              Contact
            </router-link>
          </div>
        </div>
      </div>
    </nav>
    
    <main class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
      <router-view />
    </main>
  </div>
</template>

<script setup lang="ts">
// App component with navigation
</script>