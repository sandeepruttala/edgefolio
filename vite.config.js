import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
    plugins: [react()],
    base: '/edgefolio/',
    build: {
        outDir: 'dist',
        sourcemap: false,
    },
    server: {
        port: 3000,
        open: true,
    },
})
