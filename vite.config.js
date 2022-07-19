import { defineConfig } from 'vite'
import path from 'path'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    watch: {
      usePolling: true
    }
  },
  resolve: {
    alias: {
      "@components": path.resolve(__dirname, 'src', 'components'),
      "@atoms": path.resolve(__dirname, 'src', 'components', 'atoms'),
      "@molecules": path.resolve(__dirname, 'src', 'components', 'molecules'),
      "@organisms": path.resolve(__dirname, 'src', 'components', 'organisms'),
      "@api": path.resolve(__dirname, 'src', 'api')
    }
  }
})
