import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import electron from 'vite-plugin-electron'
import renderer from 'vite-plugin-electron-renderer'
import { VitePWA } from 'vite-plugin-pwa'

// https://vite.dev/config/
export default defineConfig(({ command }) => {
  const isElectron = process.env.ELECTRON_BUILD === 'true'

  const config = {
    plugins: [
      react(),
      isElectron && electron([
        {
          entry: 'electron/main.ts',
        },
        {
          entry: 'electron/preload.ts',
          onstart(options) {
            options.reload()
          },
          vite: {
            build: {
              rollupOptions: {
                output: {
                  format: 'cjs',
                  entryFileNames: '[name].js',
                },
              },
            },
          },
        },
      ]),
      isElectron && renderer(),
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
    ].filter(Boolean),
    base: isElectron ? './' : (command === 'serve' ? '/' : '/numerologia_cabalistica_v1'),
    test: {
      globals: true,
      environment: 'jsdom',
      setupFiles: './src/setupTests.js',
      css: true,
    }
  }
  return config
})
