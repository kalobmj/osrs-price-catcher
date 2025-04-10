import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: "/osrspricecatcher/",
  plugins: [react()],
  server: {
    proxy: {
      '/proxy': 'http://localhost:3001'
    },
  },
});