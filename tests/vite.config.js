import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { fileURLToPath } from 'node:url'

export default defineConfig({
  plugins: [react()],
  resolve: { alias: { '@emailjs/browser': fileURLToPath(new URL('./emailjs-mock.js', import.meta.url)) } },
  build: { ssr: 'tests/ui-fixture.jsx', outDir: '.test-build', emptyOutDir: true },
})
