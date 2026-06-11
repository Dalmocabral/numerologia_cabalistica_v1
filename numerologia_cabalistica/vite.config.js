import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

import { VitePWA } from 'vite-plugin-pwa'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      devOptions: {
        enabled: true
      },
      manifest: {
        short_name: "Numeris",
        name: "Numerologia Cabalística",
        start_url: "/numerologia_cabalistica_v1/",
        display: "standalone",
        theme_color: "#ffffff",
        background_color: "#ffffff",
        icons: [
          {
            src: "favicon.ico",
            sizes: "64x64 32x32 24x24 16x16",
            type: "image/x-icon"
          },
          {
            src: "logo192.png",
            type: "image/png",
            sizes: "192x192"
          },
          {
            src: "logo512.png",
            type: "image/png",
            sizes: "512x512"
          }
        ]
      }
    })
  ],
  base: "/numerologia_cabalistica_v1",
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/setupTests.js',
    css: true,
  }
})
