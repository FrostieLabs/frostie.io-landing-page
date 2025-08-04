import { defineConfig } from 'vite'
import path from 'path'
import { copyFileSync } from 'fs'
import react from '@vitejs/plugin-react'

const copy404Plugin = () => {
  return {
    name: 'copy-404',
    closeBundle() {
      const distPath = path.resolve(process.cwd(), 'dist')
      const indexPath = path.join(distPath, 'index.html')
      const notFoundPath = path.join(distPath, '404.html')

      try {
        copyFileSync(indexPath, notFoundPath)
        console.log('✅ Successfully copied index.html to 404.html')
      } catch (error) {
        console.error('❌ Failed to copy 404.html:', error)
      }
    }
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), copy404Plugin()],
  base: "/",
  // server: {
  //   allowedHosts: true
  // },
})