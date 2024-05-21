import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import ViteYaml  from '@modyfi/vite-plugin-yaml';
import path from 'path'

export default defineConfig({
  plugins: [vue(), ViteYaml()],
  resolve: {
    alias: {
      '@component': path.resolve(__dirname, 'src/components'),
      '@page': path.resolve(__dirname, 'src/pages'),
      '@particle': path.resolve(__dirname, 'src/particle-js'),
      '@fr': path.resolve(__dirname, 'src/languages/fr'),
      '@en': path.resolve(__dirname, 'src/languages/en'),
    }
  }
})
