// src/App.jsx
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