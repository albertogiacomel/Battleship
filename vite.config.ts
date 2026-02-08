import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // Il base path './' assicura che gli asset vengano caricati correttamente
  // anche se l'app non è servita dalla root del dominio.
  base: './', 
});