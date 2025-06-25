import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/loomoStudio/',
  plugins: [react()],
  build: {
    chunkSizeWarningLimit: 60000,
    target: 'es2019'
    
  },
});
