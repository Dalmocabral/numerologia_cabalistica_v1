import { app, BrowserWindow, ipcMain } from 'electron'
import { autoUpdater } from 'electron-updater'

import { createRequire } from 'node:module'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const require = createRequire(import.meta.url)
const __dirname = path.dirname(fileURLToPath(import.meta.url))

// The built directory structure
//
// ├─┬─ dist
// │ └── index.html
// ├── dist-electron
// │ ├── main.js
// │ └── preload.js
//
process.env.APP_ROOT = path.join(__dirname, '..')

// 🚧 Use ['ENV_NAME'] avoid vite:define plugin - Vite@2.x
export const VITE_DEV_SERVER_URL = process.env['VITE_DEV_SERVER_URL']
export const MAIN_DIST = path.join(process.env.APP_ROOT, 'dist-electron')
export const RENDERER_DIST = path.join(process.env.APP_ROOT, 'dist')

process.env.VITE_PUBLIC = VITE_DEV_SERVER_URL ? path.join(process.env.APP_ROOT, 'public') : RENDERER_DIST

let win: BrowserWindow | null

function createWindow() {
  win = new BrowserWindow({
    icon: path.join(process.env.VITE_PUBLIC || '', 'electron-vite.svg'),
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
    },
  })

  // Test active push message to Renderer-process.
  win.webContents.on('did-finish-load', () => {
    win?.webContents.send('main-process-message', (new Date).toLocaleString())
  })
  
  ipcMain.handle('get-app-version', () => app.getVersion());

  if (VITE_DEV_SERVER_URL) {
    win.loadURL(VITE_DEV_SERVER_URL)
  } else {
    // win.loadFile('dist/index.html')
    win.loadFile(path.join(RENDERER_DIST, 'index.html'))
  }
}

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
    win = null
  }
})

app.on('activate', () => {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})

autoUpdater.autoDownload = false;

app.whenReady().then(() => {
  createWindow()
})

ipcMain.handle('check-for-updates', async () => {
  if (app.isPackaged) {
    try {
      await autoUpdater.checkForUpdates()
    } catch (error) {
      win?.webContents.send('update-error', String(error))
    }
  } else {
    win?.webContents.send('update-error', 'Auto-update só funciona no app instalado (não no modo dev).')
  }
})

// Auto-updater events
autoUpdater.on('update-available', (info) => {
  win?.webContents.send('update-available', info.version)
})

autoUpdater.on('update-not-available', () => {
  win?.webContents.send('update-not-available')
})

autoUpdater.on('download-progress', (progressObj) => {
  win?.webContents.send('download-progress', progressObj.percent)
})

autoUpdater.on('update-downloaded', () => {
  win?.webContents.send('update-downloaded')
})

autoUpdater.on('error', (err) => {
  win?.webContents.send('update-error', err.message)
})

// Listeners from frontend
ipcMain.on('start-download', () => {
  autoUpdater.downloadUpdate()
})

ipcMain.on('restart_app', () => {
  autoUpdater.quitAndInstall()
})
