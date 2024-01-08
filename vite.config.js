import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import firebasePlugin from 'vite-plugin-firebase';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), firebasePlugin({
    // mandatory firebase project id
    projectId: "crud-react-df318",
    // project directory, i.e. where firebase.json is (defaults to `config.root`)
  
    // whether to materialize (write on disk) `.runtimeconfig.json` for functions emulator (defaults to `false`)
    materializeConfig: true,
    // emulator targets (defaults to `['hosting', 'functions']`)
    targets: ['hosting']
  })],
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
