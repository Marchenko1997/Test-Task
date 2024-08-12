import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'


export default defineConfig({
  base: '/Test-Task/', 
  server: {
    historyApiFallback: true 
  },
  plugins: [react()]
});