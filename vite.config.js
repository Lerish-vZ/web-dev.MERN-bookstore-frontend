import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  
    server: {
      host: '0.0.0.0', // Expose server to local network
      port: 5173, // Explicitly set port if necessary
    },
  
})
