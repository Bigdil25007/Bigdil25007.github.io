import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@component': path.resolve(__dirname, 'src/components'),
      '@page': path.resolve(__dirname, 'src/pages'),
      '@particle': path.resolve(__dirname, 'src/particle-js'),
    }
  }
})
