import React, { useState, useEffect } from 'react';
import { Dialog, DialogTitle, DialogContent, TextField, DialogActions, Button } from '@mui/material';

const NovoMapaDialog = ({ open, onClose, onSalvarNome }) => {
  // Estados para armazenar os valores dos inputs
  const [nome, setNome] = useState('');
  const [dataNascimento, setDataNascimento] = useState('');
  const [mesInteresse, setMesInteresse] = useState('');
  const [diaInteresse, setDiaInteresse] = useState('');

  // Resetar os inputs ao abrir o diálogo
  useEffect(() => {
    if (open) {
      setNome('');
      setDataNascimento('');
      setMesInteresse('');
      setDiaInteresse('');
    }
  }, [open]);

  // Função para salvar os dados
  const handleSalvar = () => {
    onSalvarNome(nome, dataNascimento, mesInteresse, diaInteresse);
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Criar Novo Mapa</DialogTitle>
      <DialogContent>
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
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancelar</Button>
        <Button onClick={handleSalvar}>Salvar</Button>
      </DialogActions>
    </Dialog>
  );
};

export default NovoMapaDialog;
