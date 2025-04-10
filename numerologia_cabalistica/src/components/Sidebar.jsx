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
import { Add, DarkMode, LightMode, PictureAsPdf } from '@mui/icons-material';
import PsychologyIcon from '@mui/icons-material/Psychology';
import NovoMapaDialog from './NovoMapaDialog';
import PdfGeneratorButton from './PdfGeneratorButton'; // Importe o componente novamente

const Sidebar = ({ darkMode, toggleDarkMode, onSalvarNome, nomeCliente, dataNascimento }) => {
  const [openDialog, setOpenDialog] = useState(false);

  const handleOpenDialog = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
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
            backgroundColor: darkMode ? '#121212' : '#ffffff',
            color: darkMode ? '#ffffff' : '#000000',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          },
        }}
      >
        <Box>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              py: 3,
              mb: 2
            }}
          >
            <PsychologyIcon sx={{
              fontSize: 80,
              color: 'primary.main',
              mb: 1
            }} />
            <Typography
              variant="h5"
              component="div"
              sx={{
                fontWeight: 'bold',
                color: 'primary.main'
              }}
            >
              Numeris
            </Typography>
          </Box>

          <Divider />

          <List>
            <ListItem button onClick={handleOpenDialog}>
              <ListItemIcon>
                <Add sx={{ color: darkMode ? '#ffffff' : '#000000' }} />
              </ListItemIcon>
              <ListItemText primary="Calcular Mapa" />
            </ListItem>

            {/* Botão de PDF estilizado como ListItem mas usando o componente PdfGeneratorButton */}
            <PdfGeneratorButton
              nomeCliente={nomeCliente}
              dataNascimento={dataNascimento}
              asListItem={true} // Nova prop para renderizar como ListItem
              darkMode={darkMode} // Passar o tema para estilização
            />
          </List>
        </Box>

        <Box>
          <Divider />
          <List>
            <ListItem button onClick={toggleDarkMode}>
              <ListItemIcon>
                {darkMode ? (
                  <LightMode sx={{ color: darkMode ? '#ffffff' : '#000000' }} />
                ) : (
                  <DarkMode sx={{ color: darkMode ? '#ffffff' : '#000000' }} />
                )}
              </ListItemIcon>
              <ListItemText primary={darkMode ? 'Modo Claro' : 'Modo Escuro'} />
            </ListItem>
          </List>
        </Box>
      </Drawer>
      <NovoMapaDialog open={openDialog} onClose={handleCloseDialog} onSalvarNome={onSalvarNome} />
    </>
  );
};

export default Sidebar;