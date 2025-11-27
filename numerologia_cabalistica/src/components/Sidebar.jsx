// src/components/Sidebar.jsx
import React, { useState } from 'react';
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Box,
  Typography,
  Divider
} from '@mui/material';
import { Add, DarkMode, LightMode, PersonAdd, Create } from '@mui/icons-material'; // Ícones novos
import PsychologyIcon from '@mui/icons-material/Psychology';
import NovoMapaDialog from './NovoMapaDialog';
import DialogNomeSocial from './DialogNomeSocial'; // Importe o Dialog de Nome Social
import PdfGeneratorButton from './PdfGeneratorButton';
import DialogAssinatura from './DialogAssinatura';

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
  diaInteresse
}) => {
  const [openMapaDialog, setOpenMapaDialog] = useState(false);
  const [openSocialDialog, setOpenSocialDialog] = useState(false); // Estado para o dialog de nome social
  const [openAssinaturaDialog, setOpenAssinaturaDialog] = useState(false);
  

  // Handlers para o Mapa
  const handleOpenMapa = () => setOpenMapaDialog(true);
  const handleCloseMapa = () => setOpenMapaDialog(false);

  // Handlers para o Nome Social
  const handleOpenSocial = () => setOpenSocialDialog(true);
  const handleCloseSocial = () => setOpenSocialDialog(false);

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
            backgroundColor: darkMode ? '#121212' : '#ffffff',
            color: darkMode ? '#ffffff' : '#000000',
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

          <Divider />

          <List>
            {/* Botão Calcular Mapa */}
            <ListItem button onClick={handleOpenMapa}>
              <ListItemIcon><Add sx={{ color: darkMode ? '#ffffff' : '#000000' }} /></ListItemIcon>
              <ListItemText primary="Calcular Mapa" />
            </ListItem>
            
            {/* Botão Criar Nome Social (Só aparece se tiver um cliente carregado) */}
            <ListItem button onClick={handleOpenSocial} disabled={!nomeCliente}>
              <ListItemIcon><PersonAdd sx={{ color: !nomeCliente ? 'grey' : (darkMode ? '#ffffff' : '#000000') }} /></ListItemIcon>
              <ListItemText primary="Criar Nome Social" />
            </ListItem>

             {/* Botão Assinatura (Desabilitado) */}
             <ListItem 
            button 
            onClick={() => setOpenAssinaturaDialog(true)} 
            disabled={!nomesSociais || nomesSociais.length === 0}
         >
            <ListItemIcon>
              <Create sx={{ color: (!nomesSociais || nomesSociais.length === 0) ? 'grey' : (darkMode ? '#ffffff' : '#000000') }} />
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
              darkMode={darkMode}
              assinatura={assinatura}
            />
          </List>
        </Box>

        <Box>
          <Divider />
          <List>
            <ListItem button onClick={toggleDarkMode}>
              <ListItemIcon>
                {darkMode ? <LightMode sx={{ color: '#ffffff' }} /> : <DarkMode sx={{ color: '#000000' }} />}
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
        onSave={onSaveNomeSocial} // Passa a função que vem do App
      />
      <DialogAssinatura 
        open={openAssinaturaDialog}
        onClose={() => setOpenAssinaturaDialog(false)}
        nomeSocial={nomesSociais.length > 0 ? nomesSociais[nomesSociais.length - 1].nome : ''}
        onSalvar={onSalvarAssinatura} // <--- O ERRO ESTAVA AQUI (Verifique se o App passa essa prop pro Sidebar)
      />
    </>
  );
};

export default Sidebar;