import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { waitlistApi } from './waitlist-api.ts'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), waitlistApi()],
})
