import LockIcon from '@mui/icons-material/Lock';
import { Alert, Box, Button, CircularProgress, Paper, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { useLicense } from '../contexts/LicenseContext';

export const LicenseGate = () => {
  const { validateLicense, isLoading } = useLicense();
  const [email, setEmail] = useState('');
  const [key, setKey] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !key) {
      setError("Por favor preencha todos os campos.");
      return;
    }

    const result = await validateLicense(email, key);
    if (!result.success) {
      setError(result.message);
    }
  };

  return (
    <Box
      sx={{
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f5f5f5', 
        // Or integrate with your theme colors if you prefer
      }}
    >
      <Paper
        elevation={3}
        sx={{
          p: 4,
          maxWidth: 400,
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 2
        }}
      >
        <LockIcon color="primary" sx={{ fontSize: 40 }} />
        <Typography variant="h5" component="h1" gutterBottom>
          Ativação do Sistema
        </Typography>
        
        <Typography variant="body2" color="textSecondary" align="center" sx={{ mb: 2 }}>
          Para acessar o Numeris, por favor insira seu email e chave de licença.
        </Typography>

        {error && <Alert severity="error" sx={{ width: '100%' }}>{error}</Alert>}

        <form onSubmit={handleSubmit} style={{ width: '100%' }}>
          <TextField
            label="Email Cadastrado"
            type="email"
            fullWidth
            margin="normal"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={isLoading}
          />
          <TextField
            label="Chave de Acesso"
            type="password"
            fullWidth
            margin="normal"
            value={key}
            onChange={(e) => setKey(e.target.value)}
            disabled={isLoading}
          />
          
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            size="large"
            disabled={isLoading}
            sx={{ mt: 3 }}
          >
            {isLoading ? <CircularProgress size={24} color="inherit" /> : "Validar Acesso"}
          </Button>
        </form>
      </Paper>
    </Box>
  );
};
