
import React, { useState, useEffect } from 'react';
import { Box, Typography, Button } from '@mui/material';
import { findSequences } from './generateInvertedPyramid';
import { negativeSequenceTriangleNumberRepeat } from '../components/TabelaNumerologia';
import DialogNomeSocial from './DialogNomeSocial';


const PiramideInvertida = ({ dados, onNomeSocialChange }) => {
  const [dialogOpen, setDialogOpen] = useState(false);

  // Limpa o diálogo quando novos dados são recebidos
  useEffect(() => {
    setDialogOpen(false);
  }, [dados]);

  if (!dados || dados.length === 0) {
    return (
      <Typography variant="body1" sx={{ color: 'text.secondary', fontStyle: 'italic', mt: 2 }}>
        Insira um nome para gerar a pirâmide
      </Typography>
    );
  }

  // Encontrar e agrupar sequências únicas
  const sequencesFound = {};
  dados.forEach(row => {
    if (row.type === 'numbers') {
      const sequences = findSequences(row.data);
      sequences.forEach(index => {
        if (index % 3 === 0) { // Pegar cada sequência apenas uma vez
          const num = row.data[index];
          const sequenceKey = `${num} ${num} ${num}`;
          if (!sequencesFound[sequenceKey]) {
            sequencesFound[sequenceKey] = negativeSequenceTriangleNumberRepeat[num - 1] || '';
          }
        }
      });
    }
  });

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
                <Box component="span" sx={{ fontWeight: 'bold' }}>{sequence}</Box> - {description}
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

      <DialogNomeSocial
        open={dialogOpen}
        onClose={() => setDialogOpen(false)}
        onSave={(nomeSocial, arcano) => {
          onNomeSocialChange(nomeSocial, arcano);
          setDialogOpen(false);
        }}
      />
    </Box>
  );
};

export default PiramideInvertida;