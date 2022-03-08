import { fileURLToPath, URL } from 'url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import pugLint from 'vite-plugin-vue-pug-lint';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [pugLint(), vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
