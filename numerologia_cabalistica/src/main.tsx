import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './index.css'

import { LicenseProvider } from './contexts/LicenseContext'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <LicenseProvider>
      <BrowserRouter basename={import.meta.env.BASE_URL}>
         <App />
      </BrowserRouter>
    </LicenseProvider>
  </StrictMode>,
)
