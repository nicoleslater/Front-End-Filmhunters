import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [react()],
  define: {
    'process.env.VITE_BASE_URL': JSON.stringify('https://your-api-url.com'),
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    rollupOptions: {
      input: 'src/main.jsx',
    },
  },
});
