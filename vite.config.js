import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',   // Allow access from local network (like your phone)
    port: 5173,        // Optional: force it to use 5173
    strictPort: true,  // Fail if 5173 is busy instead of picking another port
  },
})
