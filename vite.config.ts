import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';

export default defineConfig({
  plugins: [react()],
  css: {
    postcss: {
      plugins: [tailwindcss, autoprefixer],
    },
  },
  base: '/',
  resolve: {
    alias: {
      '@components': '/src/components',
      '@pages': '/src/pages',
      '@styles': '/src/assets/styles',
      '@images': '/src/assets/images',
      '@data': '/src/data',
      '@services': '/src/services',
    },
  },
});
