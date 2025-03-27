//src/components/NovoMapaDialog.jsx

import React, { useState, useEffect } from 'react';
import { Dialog, DialogTitle, DialogContent, TextField, DialogActions, Button, CircularProgress, Typography, Box } from '@mui/material';

const NovoMapaDialog = ({ open, onClose, onSalvarNome }) => {
  const [nome, setNome] = useState('');
  const [dataNascimento, setDataNascimento] = useState('');
  const [mesInteresse, setMesInteresse] = useState('');
  const [diaInteresse, setDiaInteresse] = useState('');
  const [loading, setLoading] = useState(false);
  const [loadingMessage, setLoadingMessage] = useState('');

  useEffect(() => {
    if (open) {
      setNome('');
      setDataNascimento('');
      setMesInteresse('');
      setDiaInteresse('');
      setLoading(false); // Reseta o estado de carregamento ao abrir o diálogo
    }
  }, [open]);

  const handleSalvar = async () => {
    setLoading(true);

    setLoadingMessage('Analisando os dados...');
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setLoadingMessage('Calculando as informações...');
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setLoadingMessage('Finalizando...');
    await new Promise((resolve) => setTimeout(resolve, 1000));

    onSalvarNome(nome, dataNascimento, mesInteresse, diaInteresse);
    setLoading(false);
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Criar Novo Mapa</DialogTitle>
      <DialogContent>
        {loading ? (
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
            <CircularProgress />
            <Typography variant="body1">{loadingMessage}</Typography>
          </Box>
        ) : (
          <>
            <TextField
              autoFocus
              margin="dense"
              label="Nome"
              fullWidth
              value={nome}
              onChange={(e) => setNome(e.target.value)}
            />
            <TextField
              margin="dense"
              label="Data de Nascimento"
              type="date"
              fullWidth
              InputLabelProps={{ shrink: true }}
              value={dataNascimento}
              onChange={(e) => setDataNascimento(e.target.value)}
            />
            <TextField
              margin="dense"
              label="Mês de Interesse (1-12)"
              type="number"
              fullWidth
              value={mesInteresse}
              onChange={(e) => setMesInteresse(e.target.value)}
            />
            <TextField
              margin="dense"
              label="Dia de Interesse (1-31)"
              type="number"
              fullWidth
              value={diaInteresse}
              onChange={(e) => setDiaInteresse(e.target.value)}
            />
          </>
        )}
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} disabled={loading}>Cancelar</Button>
        <Button onClick={handleSalvar} disabled={loading}>Salvar</Button>
      </DialogActions>
    </Dialog>
  );
};

export default NovoMapaDialog;