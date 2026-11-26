import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  // Relative asset URLs, so the production build works from a sub-folder
  // (e.g. GitHub Pages at /tourismwebsite/) as well as from a domain root.
  base: './',
  plugins: [react(), tailwindcss()],
})
