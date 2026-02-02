import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
  },
  build: {
    outDir: 'dist',
    sourcemap: false,
  },
  // SEO optimizations
  define: {
    __SITE_URL__: JSON.stringify(process.env.VITE_SITE_URL || 'https://raed-houimli.dev'),
  }
})
