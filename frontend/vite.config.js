import path from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import proxyOptions from './proxyOptions'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 8080,
    host: true,               // allow access from network (http://127.0.0.1:8080 or LAN IP)
    proxy: proxyOptions       // forwards /api, /assets, etc. to Frappe
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'), // so you can import like "@/components/..."
    },
  },
  build: {
    outDir: path.resolve(__dirname, '../cht/public/frontend'), // build output folder
    emptyOutDir: true,                                         // clear before each build
  },
})
