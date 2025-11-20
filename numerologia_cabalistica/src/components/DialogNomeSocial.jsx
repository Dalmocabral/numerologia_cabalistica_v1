import React, { useState, useEffect } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  DialogActions,
  Button,
  Box,
  Typography,
  Card,
  CardContent
} from '@mui/material';
import { generateInvertedPyramid } from './generateInvertedPyramid';
import { arcanos } from '../components/TabelaNumerologia'; // Importar o dicionário de arcanos

const DialogNomeSocial = ({ open, onClose, onSave }) => {
  const [nome, setNome] = useState('');
  const [piramide, setPiramide] = useState([]);
  const [arcanoNumber, setArcanoNumber] = useState(null);
  const [arcanoInfo, setArcanoInfo] = useState(null);

  useEffect(() => {
    if (nome) {
      const generatedPyramid = generateInvertedPyramid(nome);
      setPiramide(generatedPyramid);

      // Encontrar o último número (arcano)
      if (generatedPyramid.length > 0) {
        const lastRow = generatedPyramid[generatedPyramid.length - 1];
        if (lastRow.type === 'numbers' && lastRow.data.length === 1) {
          const arcanoNum = lastRow.data[0];
          setArcanoNumber(arcanoNum);
          
          // Buscar informações do arcano no dicionário
          if (arcanos[arcanoNum]) {
            setArcanoInfo(arcanos[arcanoNum]);
          } else {
            setArcanoInfo(null);
          }
        }
      }
    } else {
      setPiramide([]);
      setArcanoNumber(null);
      setArcanoInfo(null);
    }
  }, [nome]);

  const handleSave = () => {
    if (nome && arcanoNumber) {
      onSave(nome, arcanoNumber);
      setNome('');
      onClose();
    }
  };

  // Função para detectar sequências de 3+ números
  const getSequenceIndices = (row) => {
    const sequences = [];
    let count = 1;

    for (let i = 1; i < row.length; i++) {
      if (row[i] === row[i - 1]) {
        count++;
        if (count === 3) {
          sequences.push(i - 2, i - 1, i);
        }
      } else {
        count = 1;
      }
    }
    return sequences;
  };

  // Função para calcular a margem esquerda de cada linha
  const calculateMargin = (rowIndex, totalRows, rowLength) => {
    const maxLength = piramide[0]?.data.length || 0;
    return `${(maxLength - rowLength) * 1.5}rem`;
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth="lg" fullWidth>
      <DialogTitle>Criar Nome Social</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          label="Digite o nome social"
          type="text"
          fullWidth
          variant="outlined"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          sx={{ mb: 4 }}
        />

        {/* Visualização da pirâmide invertida */}
        {piramide.length > 0 && (
          <Box sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            gap: 4,
            mt: 2,
            width: '100%'
          }}>
            {/* Pirâmide */}
            <Box sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              fontFamily: 'monospace',
              flex: 1,
              minHeight: 'fit-content'
            }}>
              {piramide.map((row, rowIndex) => {
                const sequences = row.type === 'numbers' ? getSequenceIndices(row.data) : [];
                const marginLeft = calculateMargin(rowIndex, piramide.length, row.data.length);
                const isLastRow = rowIndex === piramide.length - 1;

                return (
                  <Box
                    key={rowIndex}
                    sx={{
                      display: 'flex',
                      justifyContent: 'center',
                      gap: 1,
                      mb: 0.5,
                      width: 'fit-content',
                      mx: 'auto'
                    }}
                  >
                    {row.data.map((item, itemIndex) => {
                      const isSequence = sequences.includes(itemIndex);
                      const isLetter = row.type === 'letters';
                      const isArcanoNumber = isLastRow && row.type === 'numbers' && row.data.length === 1;

                      return (
                        <Box
                          key={itemIndex}
                          sx={{
                            minWidth: '2rem',
                            height: '2rem',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: isLetter ? '1.5rem' : '1.3rem',
                            fontWeight: isSequence || isArcanoNumber ? 700 : 500,
                            color: isLetter ? 'primary.main' :
                              isSequence ? 'error.contrastText' :
                                isArcanoNumber ? 'success.contrastText' : 'text.primary',
                            bgcolor: isSequence ? 'error.main' :
                              isArcanoNumber ? 'success.main' : 'transparent',
                            borderRadius: '4px',
                            border: isLetter ? '1px solid' : 'none',
                            borderColor: 'divider'
                          }}
                        >
                          {item}
                        </Box>
                      );
                    })}
                  </Box>
                );
              })}
            </Box>

            {/* Informações do Arcano */}
            {arcanoInfo && (
              <Box sx={{ flex: 1 }}>
                <Card variant="outlined" sx={{ bgcolor: 'success.light' }}>
                  <CardContent>
                    <Typography variant="h6" gutterBottom sx={{ color: 'success.dark' }}>
                      {arcanoInfo.titulo} - Número {arcanoNumber}
                    </Typography>
                    <Typography 
                      variant="body2" 
                      sx={{ 
                        color: 'text.primary',
                        lineHeight: 1.6,
                        maxHeight: '300px',
                        overflow: 'auto'
                      }}
                    >
                      {arcanoInfo.descricao}
                    </Typography>
                    <Box sx={{ mt: 2, p: 1, bgcolor: 'success.main', borderRadius: 1 }}>
                      <Typography variant="body2" sx={{ color: 'white', fontWeight: 'bold' }}>
                        Este será o seu Arcano pessoal com este nome social
                      </Typography>
                    </Box>
                  </CardContent>
                </Card>
              </Box>
            )}
          </Box>
        )}

        {/* Mensagem quando não há arcano encontrado */}
        {piramide.length > 0 && !arcanoInfo && arcanoNumber && (
          <Box sx={{ mt: 2, p: 2, bgcolor: 'warning.light', borderRadius: 1 }}>
            <Typography variant="body2">
              Arcano {arcanoNumber} encontrado, mas descrição não disponível no dicionário.
            </Typography>
          </Box>
        )}
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancelar</Button>
        <Button
          onClick={handleSave}
          disabled={!nome}
          variant="contained"
          color="primary"
        >
          Salvar Nome Social
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default DialogNomeSocial;