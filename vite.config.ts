import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import {TanStackRouterVite} from '@tanstack/router-plugin/vite'
import tsconfigpath from 'vite-tsconfig-paths'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    TanStackRouterVite({target: 'react', autoCodeSplitting: true}),
    tsconfigpath(),
    react(),
  ],
  define: {
    'process.env' : {}
  }
})
