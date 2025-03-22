// src/components/Sidebar.jsx
import React, { useState } from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, IconButton } from '@mui/material';
import { Add, DarkMode, LightMode } from '@mui/icons-material';
import NovoMapaDialog from './NovoMapaDialog';

const Sidebar = ({ darkMode, toggleDarkMode, onSalvarNome }) => {
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
          '& .MuiDrawer-paper': {
            width: 240,
            boxSizing: 'border-box',
            backgroundColor: darkMode ? '#121212' : '#ffffff',
            color: darkMode ? '#ffffff' : '#000000',
          },
        }}
      >
        <List>
          <ListItem button onClick={handleOpenDialog}>
            <ListItemIcon>
              <Add sx={{ color: darkMode ? '#ffffff' : '#000000' }} />
            </ListItemIcon>
            <ListItemText primary="Calcular Mapa" />
          </ListItem>
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
      </Drawer>
      <NovoMapaDialog open={openDialog} onClose={handleCloseDialog} onSalvarNome={onSalvarNome} />
    </>
  );
};

export default Sidebar;