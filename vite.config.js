import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import jsconfig from './jsconfig.json'
// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), jsconfig()],
})
