import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// configuração básica do vite pra rodar o projeto
export default defineConfig({
  plugins: [react()],
})
