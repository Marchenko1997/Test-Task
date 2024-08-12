// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react-swc'


// export default defineConfig({
//   base: '/Test-Task/', 
//   plugins: [react()],
//   build: {
//     outDir: 'build',
//     rollupOptions: {
   
//       output: {
//         assetFileNames: assetInfo => {
//           if (assetInfo.name === 'style.css') return 'style.css';
//           return 'assets/[name]-[hash][extname]';
//         },
//         chunkFileNames: 'assets/[name]-[hash].js',
//         entryFileNames: 'assets/[name]-[hash].js',
//       }
//     }
//   }
// });

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// Импорт метода loadEnv для загрузки переменных окружения
import { loadEnv } from 'vite';

export default ({ mode }) => {
  // Загрузка переменных окружения для текущего режима
  const env = loadEnv(mode, process.cwd());

  return defineConfig({
    base: env.VITE_BASE_URL || '/Test-Task/',
    plugins: [react()],
    build: {
      outDir: 'build',
      rollupOptions: {
        output: {
          assetFileNames: assetInfo => assetInfo.name === 'style.css' ? 'style.css' : 'assets/[name]-[hash][extname]',
          chunkFileNames: 'assets/[name]-[hash].js',
          entryFileNames: 'assets/[name]-[hash].js',
        }
      }
    }
  });
};
