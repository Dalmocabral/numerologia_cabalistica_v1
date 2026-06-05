import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import App from './App'
import './index.css'

import { LicenseProvider } from './contexts/LicenseContext'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <LicenseProvider>
      <HashRouter>
         <App />
      </HashRouter>
    </LicenseProvider>
  </StrictMode>,
)
