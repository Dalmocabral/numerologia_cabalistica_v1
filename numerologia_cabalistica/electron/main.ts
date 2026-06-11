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

  // Maximize the window automatically
  win.maximize();

  // Test active push message to Renderer-process.
  win.webContents.on('did-finish-load', () => {
    win?.webContents.send('main-process-message', (new Date).toLocaleString())
  })
  
  win.webContents.on('console-message', (event, level, message, line, sourceId) => {
    import('electron-log/main').then(log => {
      log.default.info(`[Renderer] ${message} (${sourceId}:${line})`);
    });
  });

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

import log from 'electron-log/main'

log.initialize({ preload: true })
log.info('=====================================')
log.info('Aplicativo iniciado com sucesso! Versão:', app.getVersion())
log.info('=====================================')

autoUpdater.logger = log
autoUpdater.autoDownload = false;

app.whenReady().then(() => {
  createWindow()
})

ipcMain.handle('check-for-updates', async () => {
  log.info('Frontend solicitou verificação de atualizações (botão clicado ou app montado).')
  if (app.isPackaged) {
    try {
      log.info('Iniciando autoUpdater.checkForUpdates()...')
      await autoUpdater.checkForUpdates()
      log.info('autoUpdater.checkForUpdates() concluído com sucesso.')
    } catch (error) {
      log.error('Erro catastrofico no checkForUpdates:', error)
      win?.webContents.send('update-error', String(error))
    }
  } else {
    log.info('Tentativa de atualizar no modo de desenvolvimento. Ignorado.')
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

import Store from 'electron-store';

const store = new Store();

// Get all profiles
ipcMain.handle('db-get-profiles', () => {
  const profiles = store.get('profiles') || [];
  return profiles;
});

// Save a profile
ipcMain.handle('db-save-profile', (_, profileData) => {
  try {
    const profiles = (store.get('profiles') || []) as any[];
    // Find if profile already exists by name
    const existingIndex = profiles.findIndex(p => p.nomeCliente === profileData.nomeCliente);
    
    if (existingIndex >= 0) {
      profiles[existingIndex] = { ...profiles[existingIndex], ...profileData, updatedAt: new Date().toISOString() };
    } else {
      profiles.push({ ...profileData, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() });
    }
    
    store.set('profiles', profiles);
    return { success: true };
  } catch (err) {
    console.error('Failed to save profile:', err);
    return { success: false, error: err.message };
  }
});

// Delete a profile
ipcMain.handle('db-delete-profile', (_, nomeCliente) => {
  try {
    let profiles = (store.get('profiles') || []) as any[];
    profiles = profiles.filter(p => p.nomeCliente !== nomeCliente);
    store.set('profiles', profiles);
    return { success: true };
  } catch (err) {
    return { success: false, error: err.message };
  }
});
