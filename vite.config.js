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
  alias: {
    "@components": path.resolve(__dirname, 'src', 'components'),
    "@api": path.resolve(__dirname, 'src', 'api')
  }
})
