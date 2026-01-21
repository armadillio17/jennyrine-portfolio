import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  // Use the repo name as base in production, and root in dev
  base: process.env.NODE_ENV === 'production' ? '/My-Portfolio/' : '/',
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});