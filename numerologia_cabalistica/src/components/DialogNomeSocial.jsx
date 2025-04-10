import React, { useState, useEffect } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  DialogActions,
  Button,
  Box
} from '@mui/material';
import { generateInvertedPyramid } from './generateInvertedPyramid';

const DialogNomeSocial = ({ open, onClose, onSave }) => {
  const [nome, setNome] = useState('');
  const [piramide, setPiramide] = useState([]);
  const [arcanoNumber, setArcanoNumber] = useState(null);

  useEffect(() => {
    if (nome) {
      const generatedPyramid = generateInvertedPyramid(nome);
      setPiramide(generatedPyramid);

      // Encontrar o último número (arcano)
      if (generatedPyramid.length > 0) {
        const lastRow = generatedPyramid[generatedPyramid.length - 1];
        if (lastRow.type === 'numbers' && lastRow.data.length === 1) {
          setArcanoNumber(lastRow.data[0]);
        }
      }
    } else {
      setPiramide([]);
      setArcanoNumber(null);
    }
  }, [nome]);

  const handleSave = () => {
    if (nome && arcanoNumber) {
      onSave(nome, arcanoNumber); // Chama a função onSave com os parâmetros
      setNome(''); // Limpa o campo nome
      onClose(); // Fecha o diálogo
    }
  };

  // Função para detectar sequências de 3+ números (marcando apenas os 3 primeiros)
  const getSequenceIndices = (row) => {
    const sequences = [];
    let count = 1;

    for (let i = 1; i < row.length; i++) {
      if (row[i] === row[i - 1]) {
        count++;
        if (count === 3) {
          sequences.push(i - 2, i - 1, i); // Marca os 3 primeiros
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
    <Dialog open={open} onClose={onClose} maxWidth="md" fullWidth>
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
            flexDirection: 'column',
            alignItems: 'center',
            fontFamily: 'monospace',
            mt: 2,
            width: '100%',
            overflow: 'hidden',
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
          Salvar Nome
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default DialogNomeSocial;