import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    // 1. Tailwind CSS plugin must run first to process CSS directives
    tailwindcss(),
    // 2. React plugin handles JSX compilation and bundling
    react(),
  ],
});