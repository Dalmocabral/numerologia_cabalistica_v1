import React, { useState, useEffect } from 'react';
import { 
  Dialog, DialogTitle, DialogContent, TextField, DialogActions, 
  Button, CircularProgress, Typography, Box, Divider, Alert 
} from '@mui/material';

const NovoMapaDialog = ({ open, onClose, onSalvarNome }) => {
  // Dados Cliente
  const [nome, setNome] = useState('');
  const [dataNascimento, setDataNascimento] = useState('');
  const [mesInteresse, setMesInteresse] = useState('');
  const [diaInteresse, setDiaInteresse] = useState('');

  // Dados Companheiro (Novos)
  const [nomeCompanheiro, setNomeCompanheiro] = useState('');
  const [dataNascimentoCompanheiro, setDataNascimentoCompanheiro] = useState('');

  const [loading, setLoading] = useState(false);
  const [loadingMessage, setLoadingMessage] = useState('');
  
  // Estado para erros de validação
  const [errors, setErrors] = useState({ nome: false, data: false });

  useEffect(() => {
    if (open) {
      // Resetar tudo ao abrir
      setNome('');
      setDataNascimento('');
      setMesInteresse('');
      setDiaInteresse('');
      setNomeCompanheiro('');
      setDataNascimentoCompanheiro('');
      setErrors({ nome: false, data: false }); // Limpa erros
      setLoading(false);
    }
  }, [open]);

  const handleSalvar = async () => {
    // 1. VALIDAÇÃO
    const newErrors = {
      nome: !nome.trim(), // Erro se nome estiver vazio
      data: !dataNascimento // Erro se data estiver vazia
    };

    setErrors(newErrors);

    // Se houver algum erro, para aqui e não salva
    if (newErrors.nome || newErrors.data) {
      return;
    }

    // Se passou, prossegue com o salvamento
    setLoading(true);
    setLoadingMessage('Analisando os dados...');
    
    // Simulação de processamento
    await new Promise((resolve) => setTimeout(resolve, 500));
    
    // Passa os dados
    onSalvarNome(nome, dataNascimento, mesInteresse, diaInteresse, nomeCompanheiro, dataNascimentoCompanheiro);
    
    setLoading(false);
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle>Criar Novo Mapa</DialogTitle>
      <DialogContent>
        {loading ? (
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2, py: 4 }}>
            <CircularProgress />
            <Typography variant="body1">{loadingMessage}</Typography>
          </Box>
        ) : (
          <>
            <Typography variant="subtitle2" color="primary" sx={{ mt: 1 }}>DADOS DO CLIENTE</Typography>
            
            <TextField
              autoFocus
              margin="dense"
              label="Nome Completo *"
              fullWidth
              value={nome}
              onChange={(e) => {
                setNome(e.target.value);
                if (errors.nome) setErrors({ ...errors, nome: false }); // Limpa erro ao digitar
              }}
              error={errors.nome} // Mostra vermelho se erro
              helperText={errors.nome ? "O nome é obrigatório." : ""}
              required // Marca visualmente como obrigatório
            />
            
            <TextField
              margin="dense"
              label="Data de Nascimento *"
              type="date"
              fullWidth
              InputLabelProps={{ shrink: true }}
              value={dataNascimento}
              onChange={(e) => {
                setDataNascimento(e.target.value);
                if (errors.data) setErrors({ ...errors, data: false }); // Limpa erro ao digitar
              }}
              error={errors.data} // Mostra vermelho se erro
              helperText={errors.data ? "A data de nascimento é obrigatória." : ""}
              required // Marca visualmente como obrigatório
            />
            
            <Box sx={{ display: 'flex', gap: 2 }}>
                <TextField
                margin="dense"
                label="Mês de Interesse"
                type="number"
                fullWidth
                value={mesInteresse}
                onChange={(e) => setMesInteresse(e.target.value)}
                />
                <TextField
                margin="dense"
                label="Dia de Interesse"
                type="number"
                fullWidth
                value={diaInteresse}
                onChange={(e) => setDiaInteresse(e.target.value)}
                />
            </Box>

            <Divider sx={{ my: 3 }} />

            <Typography variant="subtitle2" color="secondary">DADOS DO COMPANHEIRO(A) - OPCIONAL</Typography>
            <Typography variant="caption" color="textSecondary" sx={{ mb: 1, display: 'block' }}>
                Preencha apenas se quiser comparar a Harmonia Conjugal.
            </Typography>

            <TextField
              margin="dense"
              label="Nome do Companheiro(a)"
              fullWidth
              value={nomeCompanheiro}
              onChange={(e) => setNomeCompanheiro(e.target.value)}
            />
            <TextField
              margin="dense"
              label="Data de Nascimento do Companheiro(a)"
              type="date"
              fullWidth
              InputLabelProps={{ shrink: true }}
              value={dataNascimentoCompanheiro}
              onChange={(e) => setDataNascimentoCompanheiro(e.target.value)}
            />
          </>
        )}
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} disabled={loading}>Cancelar</Button>
        <Button 
          onClick={handleSalvar} 
          disabled={loading} 
          variant="contained"
        >
          Calcular Mapa
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default NovoMapaDialog;