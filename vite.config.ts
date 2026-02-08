import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: './',
  root: './', // Assicura che la root sia la directory corrente
  build: {
    outDir: 'dist',
    emptyOutDir: true,
  },
  css: {
    postcss: './postcss.config.js',
  },
});