import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'


export default defineConfig({
  base: '/Test-Task/', 
  plugins: [react()],
  build: {
    outDir: 'build',
    rollupOptions: {
   
      output: {
        assetFileNames: assetInfo => {
          if (assetInfo.name === 'style.css') return 'style.css';
          return 'assets/[name]-[hash][extname]';
        },
        chunkFileNames: 'assets/[name]-[hash].js',
        entryFileNames: 'assets/[name]-[hash].js',
      }
    }
  }
});

