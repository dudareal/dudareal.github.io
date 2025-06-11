import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: 'https://github.com/dudareal/dudareal.github.io',
  build: {
    outDir: 'dist',
  },
})