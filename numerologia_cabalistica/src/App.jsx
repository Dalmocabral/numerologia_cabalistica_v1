
// src/App.jsx
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { useState } from 'react';
import NumerologyDashboard from './components/NumerologyDashboard';
import Sidebar from './components/Sidebar';
import WelcomeScreen from './components/WelcomeScreen';
import { useNumerology } from './hooks/useNumerology';

const App = () => {
  const [darkMode, setDarkMode] = useState(true);

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

  const darkTheme = createTheme({ palette: { mode: 'dark' } });
  const lightTheme = createTheme({ palette: { mode: 'light' } });

  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <Sidebar
          darkMode={darkMode}
          toggleDarkMode={toggleDarkMode}
          onSalvarNome={handleSalvarNome}
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

      <ThemeProvider theme={lightTheme}>
        <CssBaseline />
        <div style={{ marginLeft: 240, padding: '16px' }}>
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
                setAssinatura={handleSalvarAssinatura} // Pass handler for null case too
            />
          ) : (
            <WelcomeScreen />
          )}
        </div>
      </ThemeProvider>
    </>
  );
};

export default App;