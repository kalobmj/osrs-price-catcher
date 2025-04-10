import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  // base line screws up our images
  // base: '/osrs-price-catcher/',
  base: process.env.NODE_ENV === 'production' ? '/osrs-price-catcher/' : '/',
  plugins: [react()],
  server: {
    proxy: {
      '/proxy': 'http://localhost:3001'
    },
  },
});