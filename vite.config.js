import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

const THREE_PACKAGES = ['three', '@react-three/fiber', '@react-three/drei']

export default defineConfig({
  plugins: [tailwindcss(), react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules/seasonalfx')) {
            return 'seasonalfx'
          }
          if (THREE_PACKAGES.some((pkg) => id.includes(`node_modules/${pkg}`))) {
            return 'three-vendor'
          }
        },
      },
    },
  },
})
