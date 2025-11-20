// src/components/PiramideInvertida.jsx
import React, { useState } from 'react';
import { Box, Typography, Button } from '@mui/material';
import { findSequences } from './generateInvertedPyramid';
import { sequenciaNegativa } from '../components/TabelaNumerologia';
import DialogNomeSocial from './DialogNomeSocial';

const PiramideInvertida = ({ dados, onNomeSocialChange }) => {
  const [dialogOpen, setDialogOpen] = useState(false);

  if (!dados || dados.length === 0) {
    return (
      <Typography variant="body1" sx={{ color: 'text.secondary', fontStyle: 'italic', mt: 2 }}>
        Insira um nome para gerar a pirâmide
      </Typography>
    );
  }

  // Encontrar e agrupar sequências únicas usando sequenciaNegativa
  const sequencesFound = {};
  dados.forEach(row => {
    if (row.type === 'numbers') {
      const sequences = findSequences(row.data);
      sequences.forEach(index => {
        if (index % 3 === 0) {
          const num = row.data[index];
          const sequenceKey = `${num}${num}${num}`;
          if (!sequencesFound[sequenceKey]) {
            sequencesFound[sequenceKey] = sequenciaNegativa[sequenceKey] || `Sequência ${num} ${num} ${num} encontrada, mas interpretação não disponível.`;
          }
        }
      });
    }
  });

  const handleSaveNomeSocial = (nomeSocial, arcano) => {
    onNomeSocialChange(nomeSocial, arcano); // Chama a função do App.jsx
    setDialogOpen(false); // Fecha o diálogo
  };

  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      mt: 4,
      textAlign: 'center'
    }}>
      {/* Renderização da pirâmide */}
      {dados.map((row, rowIndex) => (
        <Box
          key={rowIndex}
          sx={{
            display: 'flex',
            gap: 0.5,
            justifyContent: 'center',
            alignItems: 'center',
            mb: 0.5,
            py: 0.5
          }}
        >
          {row.data.map((item, itemIndex) => {
            const baseStyle = {
              minWidth: '2.2rem',
              height: '2.2rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: '4px',
              transition: 'all 0.2s ease'
            };

            if (row.type === 'letters') {
              return (
                <Box
                  key={itemIndex}
                  sx={{
                    ...baseStyle,
                    fontSize: '1.8rem',
                    fontWeight: 700,
                    color: 'primary.main',
                    bgcolor: 'background.paper',
                    border: '1px solid',
                    borderColor: 'divider'
                  }}
                >
                  {item}
                </Box>
              );
            }

            const sequences = findSequences(row.data);
            const isSequence = sequences.includes(itemIndex);

            return (
              <Box
                key={itemIndex}
                sx={{
                  ...baseStyle,
                  fontSize: '1.5rem',
                  fontWeight: isSequence ? 700 : 500,
                  color: isSequence ? 'error.contrastText' : 'text.primary',
                  bgcolor: isSequence ? 'error.main' : 'background.paper',
                  border: '1px solid',
                  borderColor: isSequence ? 'error.dark' : 'divider'
                }}
              >
                {item}
              </Box>
            );
          })}
        </Box>
      ))}

      {/* Exibição simplificada das sequências */}
      {Object.keys(sequencesFound).length > 0 && (
        <Box sx={{
          mt: 4,
          width: '100%',
          maxWidth: '600px',
          textAlign: 'left',
          p: 2
        }}>
          <Typography variant="h6" gutterBottom sx={{ color: 'error.main' }}>
            Interpretação das Sequências:
          </Typography>

          {Object.entries(sequencesFound).map(([sequence, description], index) => (
            <Box key={index} sx={{ mb: 2 }}>
              <Typography variant="body1" component="div">
                <Box component="span" sx={{ fontWeight: 'bold' }}>
                  {sequence.charAt(0)} {sequence.charAt(1)} {sequence.charAt(2)}
                </Box> - {description}
              </Typography>
            </Box>
          ))}
        </Box>
      )}

      {/* Botão para criar nome social */}
      <Button
        variant="contained"
        sx={{ mt: 4 }}
        onClick={() => setDialogOpen(true)}
      >
        Criar Nome Social
      </Button>

      {/* Dialog para criar nome social - AGORA ESTÁ AQUI */}
      <DialogNomeSocial
        open={dialogOpen}
        onClose={() => setDialogOpen(false)}
        onSave={handleSaveNomeSocial}
      />
    </Box>
  );
};

export default PiramideInvertida;