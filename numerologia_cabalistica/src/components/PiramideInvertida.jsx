// src/components/PiramideInvertida.jsx
import React from 'react';
import { Box, Typography, Paper, Divider } from '@mui/material';
import { findSequences } from './generateInvertedPyramid';
import { sequenciaNegativa } from '../components/TabelaNumerologia';

const PiramideInvertida = ({ dados }) => {

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

  const hasSequences = Object.keys(sequencesFound).length > 0;

  return (
    <Box sx={{ width: '100%', mt: 4 }}>
      
      {/* Container Flex para alinhar Lado a Lado */}
      <Box sx={{ 
        display: 'flex', 
        flexDirection: { xs: 'column', md: 'row' }, // Mobile: Coluna, Desktop: Linha
        gap: 4, 
        alignItems: 'flex-start', // Alinha no topo
        justifyContent: 'center'
      }}>

        {/* --- LADO ESQUERDO: PIRÂMIDE --- */}
        <Box sx={{ 
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center',
          flex: hasSequences ? 2 : 1, // Se tiver texto, ocupa 2/3, senão ocupa tudo
          width: '100%'
        }}>
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
        </Box>

        {/* --- LADO DIREITO: DESCRIÇÕES (SÓ APARECE SE TIVER SEQUÊNCIAS) --- */}
        {hasSequences && (
          <Paper 
            elevation={2}
            sx={{
              flex: 1, // Ocupa 1/3 do espaço
              p: 3,
              bgcolor: '#fff0f0', // Fundo levemente avermelhado para alerta
              borderLeft: '6px solid #d32f2f',
              width: '100%',
              textAlign: 'left'
            }}
          >
            <Typography variant="h6" gutterBottom sx={{ color: 'error.main', fontWeight: 'bold' }}>
              Sequências Negativas Identificadas
            </Typography>
            <Divider sx={{ mb: 2, bgcolor: 'error.light' }} />

            {Object.entries(sequencesFound).map(([sequence, description], index) => (
              <Box key={index} sx={{ mb: 3 }}>
                <Typography variant="subtitle1" sx={{ fontWeight: 'bold', color: 'error.dark', display: 'flex', alignItems: 'center', gap: 1 }}>
                  ⚠️ Sequência {sequence}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.primary', mt: 0.5, lineHeight: 1.6 }}>
                  {description}
                </Typography>
              </Box>
            ))}
          </Paper>
        )}

      </Box>
    </Box>
  );
};

export default PiramideInvertida;