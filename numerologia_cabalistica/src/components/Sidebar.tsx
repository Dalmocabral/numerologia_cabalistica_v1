// src/components/Sidebar.jsx
import { Add, Create, DarkMode, LightMode, PersonAdd } from '@mui/icons-material'; // Ícones novos
import InfoIcon from '@mui/icons-material/Info';
import PsychologyIcon from '@mui/icons-material/Psychology';
import SaveIcon from '@mui/icons-material/Save';
import FolderOpenIcon from '@mui/icons-material/FolderOpen';
import {
    Badge,
    Box,
    Divider,
    Drawer,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Typography
} from '@mui/material';
import { useState } from 'react';
import AboutDialog from './AboutDialog';
import DialogAssinatura from './DialogAssinatura';
import DialogNomeSocial from './DialogNomeSocial'; // Importe o Dialog de Nome Social
import NovoMapaDialog from './NovoMapaDialog';
import PdfGeneratorButton from './PdfGeneratorButton';
import DialogCarregarDados from './DialogCarregarDados';

const Sidebar = ({ 
  darkMode, 
  toggleDarkMode, 
  onSalvarNome, 
  nomeCliente, 
  dataNascimento,
  nomesSociais = [],
  onSaveNomeSocial, // <--- Recebe a função para salvar nome social do App
  onSalvarAssinatura, // <--- NOVA PROP
  mesInteresse,
  assinatura,
  diaInteresse,
  nomeCompanheiro, 
  dataNascimentoCompanheiro,
  currentVersion,
  updateVersion,
  downloadProgress,
  updateDownloaded,
  updateError,
  onStartDownload,
  onRestart,
  onCheckUpdate
}) => {
  const [openMapaDialog, setOpenMapaDialog] = useState(false);
  const [openSocialDialog, setOpenSocialDialog] = useState(false); // Estado para o dialog de nome social
  const [openAssinaturaDialog, setOpenAssinaturaDialog] = useState(false);
  const [openAbout, setOpenAbout] = useState(false);
  const [openCarregarDialog, setOpenCarregarDialog] = useState(false);
  

  // Handlers para o Mapa
  const handleOpenMapa = () => setOpenMapaDialog(true);
  const handleCloseMapa = () => setOpenMapaDialog(false);

  // Handlers para o Nome Social
  const handleOpenSocial = () => setOpenSocialDialog(true);
  const handleCloseSocial = () => setOpenSocialDialog(false);

  const handleSaveCurrentProfile = async () => {
    const db = (window as any).electronDB;
    if (!db) {
      alert("O banco de dados (electronDB) não está conectado! O preload script falhou?");
      return;
    }
    if (db && nomeCliente) {
      const data = {
        nomeCliente,
        dataNascimento,
        nomesSociais,
        mesInteresse,
        diaInteresse,
        assinatura,
        nomeCompanheiro,
        dataNascimentoCompanheiro
      };
      try {
        const res = await db.saveProfile(data);
        if (res.success) {
          alert("Dados salvos com sucesso no Banco de Dados local!");
        } else {
          alert("Erro ao salvar dados: " + res.error);
        }
      } catch (e) {
        alert("Erro crítico ao salvar: " + e.message);
      }
    }
  };

  const handleLoadProfile = (profile) => {
    onSalvarNome(
      profile.nomeCliente, 
      profile.dataNascimento, 
      profile.mesInteresse || '', 
      profile.diaInteresse || '', 
      profile.nomeCompanheiro || '', 
      profile.dataNascimentoCompanheiro || '',
      profile.nomesSociais || [],
      profile.assinatura || null
    );
  };

  return (
    <>
      <Drawer
        variant="permanent"
        sx={{
          width: 240,
          flexShrink: 0,
          display: 'flex',
          flexDirection: 'column',
          '& .MuiDrawer-paper': {
            width: 240,
            boxSizing: 'border-box',
            backgroundColor: '#121212', 
            color: '#ffffff',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          },
        }}
      >
        <Box>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', py: 3, mb: 2 }}>
            <PsychologyIcon sx={{ fontSize: 80, color: 'primary.main', mb: 1 }} />
            <Typography variant="h5" component="div" sx={{ fontWeight: 'bold', color: 'primary.main' }}>
              Numeris
            </Typography>
          </Box>

          <Divider sx={{ borderColor: 'rgba(255, 255, 255, 0.12)' }} />

          <List>
            {/* Botão Calcular Mapa */}
            <ListItem button onClick={handleOpenMapa}>
              <ListItemIcon><Add sx={{ color: '#ffffff' }} /></ListItemIcon>
              <ListItemText primary="Calcular Mapa" />
            </ListItem>
            
            {/* Botão Criar Nome Social (Só aparece se tiver um cliente carregado) */}
            <ListItem button onClick={handleOpenSocial} disabled={!nomeCliente}>
              <ListItemIcon><PersonAdd sx={{ color: !nomeCliente ? 'grey' : '#ffffff' }} /></ListItemIcon>
              <ListItemText primary="Criar Nome Social" />
            </ListItem>

             {/* Botão Assinatura (Desabilitado) */}
             <ListItem 
            button 
            onClick={() => setOpenAssinaturaDialog(true)} 
            disabled={!nomesSociais || nomesSociais.length === 0}
         >
            <ListItemIcon>
              <Create sx={{ color: (!nomesSociais || nomesSociais.length === 0) ? 'grey' : '#ffffff' }} />
            </ListItemIcon>
            <ListItemText primary="Assinatura do Poder" />
         </ListItem>
        

            {/* Botão PDF */}
            <PdfGeneratorButton
              nomeCliente={nomeCliente}
              dataNascimento={dataNascimento}
              nomesSociais={nomesSociais}
              mesInteresse={mesInteresse}
              diaInteresse={diaInteresse}
              asListItem={true}
              darkMode={true} // Forcing dark mode styles for the button itself if it relies on it
              assinatura={assinatura}
              nomeCompanheiro={nomeCompanheiro}           
              dataNascimentoCompanheiro={dataNascimentoCompanheiro} 
            />

            {/* Banco de Dados Local (Electron apenas) */}
            <Divider sx={{ borderColor: 'rgba(255, 255, 255, 0.12)', my: 1 }} />
            <ListItem button onClick={handleSaveCurrentProfile} disabled={!nomeCliente}>
              <ListItemIcon><SaveIcon sx={{ color: !nomeCliente ? 'grey' : '#ffffff' }} /></ListItemIcon>
              <ListItemText primary="Salvar Dados" />
            </ListItem>
            <ListItem button onClick={() => setOpenCarregarDialog(true)}>
              <ListItemIcon><FolderOpenIcon sx={{ color: '#ffffff' }} /></ListItemIcon>
              <ListItemText primary="Carregar Dados" />
            </ListItem>
          </List>
        </Box>

        <Box>
          <Divider sx={{ borderColor: 'rgba(255, 255, 255, 0.12)' }} />
          <List>
            <ListItem button onClick={() => setOpenAbout(true)}>
              <ListItemIcon>
                <Badge color="error" variant="dot" invisible={!updateVersion}>
                  <InfoIcon sx={{ color: '#ffffff' }} />
                </Badge>
              </ListItemIcon>
              <ListItemText primary="Sobre" />
            </ListItem>
            <ListItem button onClick={toggleDarkMode}>
              <ListItemIcon>
                {darkMode ? <LightMode sx={{ color: '#ffffff' }} /> : <DarkMode sx={{ color: '#ffffff' }} />}
              </ListItemIcon>
              <ListItemText primary={darkMode ? 'Modo Claro' : 'Modo Escuro'} />
            </ListItem>
          </List>
        </Box>
      </Drawer>
      
      {/* Diálogos */}
      <NovoMapaDialog open={openMapaDialog} onClose={handleCloseMapa} onSalvarNome={onSalvarNome} />
      
      <DialogNomeSocial 
        open={openSocialDialog} 
        onClose={handleCloseSocial} 
        onSave={onSaveNomeSocial} 
      />
      <DialogAssinatura 
        open={openAssinaturaDialog}
        onClose={() => setOpenAssinaturaDialog(false)}
        nomeSocial={nomesSociais.length > 0 ? nomesSociais[nomesSociais.length - 1].nome : ''}
        onSalvar={onSalvarAssinatura} 
      />
      <AboutDialog 
        open={openAbout} 
        onClose={() => setOpenAbout(false)}
        currentVersion={currentVersion}
        updateVersion={updateVersion}
        downloadProgress={downloadProgress}
        updateDownloaded={updateDownloaded}
        updateError={updateError}
        onStartDownload={onStartDownload}
        onRestart={onRestart}
        onCheckUpdate={onCheckUpdate}
      />
      <DialogCarregarDados
        open={openCarregarDialog}
        onClose={() => setOpenCarregarDialog(false)}
        onLoadProfile={handleLoadProfile}
      />
    </>

  );
};

export default Sidebar;