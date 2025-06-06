import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/nome-do-seu-repositorio/', // Substitua pelo nome do seu repositório no GitHub
  build: {
    outDir: 'dist',
  },
})