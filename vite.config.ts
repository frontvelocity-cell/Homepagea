import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// Merged Vite configuration - removed duplicate content
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': '/src'
    }
  }
})