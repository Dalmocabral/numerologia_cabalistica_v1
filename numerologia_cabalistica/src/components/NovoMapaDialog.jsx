// src/components/NovoMapaDialog.jsx
import React, { useState } from 'react';
import { Dialog, DialogTitle, DialogContent, TextField, DialogActions, Button } from '@mui/material';

const NovoMapaDialog = ({ open, onClose, onSalvarNome }) => {
  const [nome, setNome] = useState('');
  const [dataNascimento, setDataNascimento] = useState('');

  const handleSalvar = () => {
    // Chama a função onSalvarNome passando o nome e a data de nascimento
    onSalvarNome(nome, dataNascimento);
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
          InputLabelProps={{
            shrink: true,
          }}
          value={dataNascimento}
          onChange={(e) => setDataNascimento(e.target.value)}
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