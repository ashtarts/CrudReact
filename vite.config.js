import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import ViteFirebasePlugin from 'vite-plugin-firebase';
import firebaseConfig from './firebaseConfig';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['firebase'], 
    include: ['firebase/app', 'firebase/firestore']
  },
  build: {
    rollupOptions: {
      external: ['firebase/firestore'],
    },
  },
})
