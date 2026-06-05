// src/App.jsx
import { Alert, Button, Snackbar } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { useEffect, useState } from 'react';
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom';
import NumerologyDashboard from './components/NumerologyDashboard';
import Sidebar from './components/Sidebar';
import WelcomeScreen from './components/WelcomeScreen';
import { useNumerology } from './hooks/useNumerology';

import AdminPanel from './components/AdminPanel';
import { RequireLicense } from './components/RequireLicense';

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const navigate = useNavigate();

  // Use the custom hook for all numerology logic
  const {
      nome,
      dataNascimento,
      nomeCompanheiro,
      dataNascCompanheiro,
      nomesSociais,
      nomeSocial,
      assinatura,
      harmonicos,
      piramide,
      profile,
      partnerProfile,
      handleSalvarNome,
      handleSaveNomeSocial,
      handleRemoverNomeSocial,
      handleSalvarAssinatura
  } = useNumerology();

  // Wrapper triggers navigation after saving
  const onSalvarNomeWrapper = (...args) => {
    handleSalvarNome(...args);
    navigate('/mapa');
  };

  // Effect to redirect if we have data (persistence) but act on root
  useEffect(() => {
    // If we have a name loaded from persistence and we are at root, go to map
    if (nome && window.location.pathname === '/') {
        navigate('/mapa');
    }
  }, [nome, navigate]);

  // Auto-Update Logic
  const [currentVersion, setCurrentVersion] = useState('Carregando...');
  const [updateVersion, setUpdateVersion] = useState(null);
  const [downloadProgress, setDownloadProgress] = useState(null);
  const [updateDownloaded, setUpdateDownloaded] = useState(false);
  const [updateError, setUpdateError] = useState(null);

  useEffect(() => {
    if ((window as any).ipcRenderer) {
      (window as any).ipcRenderer.invoke('get-app-version').then((version: string) => {
        setCurrentVersion(version);
      });

      (window as any).ipcRenderer.on('update-available', (event: any, version: string) => {
        setUpdateVersion(version || 'Nova Versão');
      });
      (window as any).ipcRenderer.on('download-progress', (event: any, percent: number) => {
        setDownloadProgress(percent);
      });
      (window as any).ipcRenderer.on('update-downloaded', () => {
        setUpdateDownloaded(true);
      });
      (window as any).ipcRenderer.on('update-error', (event: any, err: string) => {
        setUpdateError(err);
      });

      (window as any).ipcRenderer.on('update-not-available', () => {
        setUpdateError('Você já está na versão mais recente!');
      });

      // Checa por atualizações SOMENTE AGORA que o React já montou os listeners
      (window as any).ipcRenderer.invoke('check-for-updates');
    }
  }, []);

  const handleStartDownload = () => {
    if ((window as any).ipcRenderer) {
        setDownloadProgress(0); // Start progress
        (window as any).ipcRenderer.send('start-download');
    }
  };

  const handleRestart = () => {
    if ((window as any).ipcRenderer) {
        (window as any).ipcRenderer.send('restart_app');
    }
  };

  const handleCheckUpdate = () => {
    if ((window as any).ipcRenderer) {
      setUpdateError(null);
      (window as any).ipcRenderer.invoke('check-for-updates');
    }
  };


  const darkTheme = createTheme({ palette: { mode: 'dark' } });
  
  // Dynamic content theme based on darkMode state
  const contentTheme = createTheme({ palette: { mode: darkMode ? 'dark' : 'light' } });

  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <>
      {/* Sidebar always uses Dark Theme or maybe user wants it controlled too? 
          Original code forced Dark on Sidebar. Preserving that choice for now. */}
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <Sidebar
          darkMode={darkMode}
          toggleDarkMode={toggleDarkMode}
          onSalvarNome={onSalvarNomeWrapper}
          nomeCliente={nome}
          dataNascimento={dataNascimento}
          nomesSociais={nomesSociais}
          onSaveNomeSocial={handleSaveNomeSocial}
          onSalvarAssinatura={handleSalvarAssinatura}
          assinatura={assinatura}
          nomeCompanheiro={nomeCompanheiro}
          dataNascimentoCompanheiro={dataNascCompanheiro}
          // Updater props
          currentVersion={currentVersion}
          updateVersion={updateVersion}
          downloadProgress={downloadProgress}
          updateDownloaded={updateDownloaded}
          updateError={updateError}
          onStartDownload={handleStartDownload}
          onRestart={handleRestart}
          onCheckUpdate={handleCheckUpdate}
        />
      </ThemeProvider>

      {/* Main Content Area */}
      {/* Note: I am now using 'contentTheme' which respects the darkMode toggle, 
          improving on the previous code that hardcoded LightTheme */}
      <ThemeProvider theme={contentTheme}>
        <CssBaseline />
        <div style={{ marginLeft: 240, padding: '16px', minHeight: '100vh' }}>
            <Routes>
                {/* Rota Pública de Admin */}
                <Route path="/admin-secreto" element={<AdminPanel />} />

                {/* Rotas Protegidas */}
                <Route path="/" element={
                  <RequireLicense>
                    <WelcomeScreen />
                  </RequireLicense>
                } />
                
                <Route path="/mapa" element={
                  <RequireLicense>
                    {nome ? (
                        <NumerologyDashboard
                            nome={nome}
                            dataNascimento={dataNascimento}
                            profile={profile}
                            partnerProfile={partnerProfile}
                            harmonicos={harmonicos}
                            piramide={piramide}
                            nomeSocial={nomeSocial}
                            nomesSociais={nomesSociais}
                            assinatura={assinatura}
                            nomeCompanheiro={nomeCompanheiro}
                            onSaveNomeSocial={handleSaveNomeSocial}
                            onRemoverNomeSocial={handleRemoverNomeSocial}
                            onSalvarAssinatura={handleSalvarAssinatura}
                            setAssinatura={handleSalvarAssinatura}
                        />
                    ) : (
                        <Navigate to="/" replace />
                    )}
                  </RequireLicense>
                } />
                {/* Fallback */}
                <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
        </div>
      </ThemeProvider>

    </>
  );
};

export default App;