import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import electron from 'vite-plugin-electron'
import renderer from 'vite-plugin-electron-renderer'

// https://vite.dev/config/
export default defineConfig(({ command }) => {
  const isElectron = process.env.ELECTRON_BUILD === 'true'

  const config = {
    plugins: [
      react(),
      isElectron && electron([
        {
          // Main-Process entry file of the Electron App.
          entry: 'electron/main.ts',
        },
        {
          entry: 'electron/preload.ts',
          onstart(options) {
            // Notify the Renderer-Process to reload the page when the Preload-Scripts build is complete, 
            // instead of restarting the entire Electron App.
            options.reload()
          },
        },
      ]),
      isElectron && renderer(),
    ].filter(Boolean),
    // IMPORTANT: Electron apps are local files, so base must be ./ (relative) 
    // unless we are specifically building for the github pages web deploy.
    // However, the user wants BOTH.
    // When running in Electron, resources are loaded from file:// protocol, so absolute paths like /numerologia... fail.
    // We can conditionally set base. But usually 'vite' command runs Electron in dev mode.
    // For production build, if it's for electron, base should be './'.
    // Since 'command' is 'serve' during dev, and 'build' during build.
    // We might need a separate env var or check how it's being invoked.
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
