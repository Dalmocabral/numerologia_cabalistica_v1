// src/components/TabelaArcanosTransito.jsx
import {
    Box,
    Card, CardContent, CardMedia,
    Grid,
    Paper,
    Table, TableBody, TableCell, TableContainer,
    TableHead, TableRow,
    Typography
} from '@mui/material';
import { useEffect, useState } from 'react';
import { calcularArcanosTransito } from '../utils/CalculoArcanosTransito';
import { arcanos } from '../utils/TabelaNumerologia'; // Importe o dicionário

const TabelaArcanosTransito = ({ nome, dataNascimento }) => {
  const dados = calcularArcanosTransito(nome, dataNascimento);
  const [arcanoAtual, setArcanoAtual] = useState(null);

  useEffect(() => {
    if (dados) {
      const atual = dados.find(d => d.isAtual);
      if (atual) {
        setArcanoAtual({
           ...atual,
           info: arcanos[atual.arcano]
        });
      }
    }
  }, [dados]);

  if (!dados || dados.length === 0) return null;

  return (
    <Box sx={{ mt: 4 }}>
      <Typography variant="h6" align="center" gutterBottom sx={{ color: 'primary.main' }}>
        Previsões (Arcanos de Trânsito - Ciclos de 4 Anos)
      </Typography>

      <Grid container spacing={2}>
        {/* COLUNA 1: TABELA */}
        <Grid item xs={12} md={arcanoAtual ? 7 : 12}>
          <TableContainer component={Paper} sx={{ maxHeight: 500 }}>
            <Table stickyHeader size="small">
              <TableHead>
                <TableRow>
                  <TableCell sx={{ fontWeight: 'bold', bgcolor: '#f5f5f5' }}>Arcano</TableCell>
                  <TableCell sx={{ fontWeight: 'bold', bgcolor: '#f5f5f5' }}>Período</TableCell>
                  <TableCell sx={{ fontWeight: 'bold', bgcolor: '#f5f5f5' }}>Idade</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {dados.map((row, index) => (
                  <TableRow 
                    key={index} 
                    // Destaque Verde se for atual
                    sx={{ 
                      bgcolor: row.isAtual ? '#e8f5e9' : 'inherit',
                      borderLeft: row.isAtual ? '4px solid #4caf50' : 'none'
                    }}
                  >
                    <TableCell>
                      <Box sx={{ 
                        border: `2px solid ${row.isAtual ? '#4caf50' : '#d32f2f'}`, 
                        color: row.isAtual ? '#4caf50' : '#d32f2f', 
                        fontWeight: 'bold', 
                        width: 30, height: 30, 
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        borderRadius: 1,
                        bgcolor: 'white'
                      }}>
                        {row.arcano}
                      </Box>
                    </TableCell>
                    <TableCell sx={{ fontWeight: row.isAtual ? 'bold' : 'normal' }}>
                       {row.inicio} a {row.fim}
                    </TableCell>
                    <TableCell sx={{ fontWeight: row.isAtual ? 'bold' : 'normal' }}>
                       {row.idadeInicio} - {row.idadeFim} anos
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>

        {/* COLUNA 2: CARTA DO PERÍODO ATUAL */}
        {arcanoAtual && arcanoAtual.info && (
          <Grid item xs={12} md={5}>
            <Card variant="outlined" sx={{ border: '2px solid #4caf50', height: '100%' }}>
               <Box sx={{ p: 1, bgcolor: '#4caf50', color: 'white', textAlign: 'center', fontWeight: 'bold' }}>
                 VIBRAÇÃO DO PERÍODO ATUAL
               </Box>
               {arcanoAtual.info.image && (
                  <CardMedia
                    component="img"
                    height="250"
                    image={arcanoAtual.info.image}
                    alt={arcanoAtual.info.titulo}
                    sx={{ objectFit: "contain", mt: 2 }}
                  />
               )}
               <CardContent>
                 <Typography variant="h6" align="center" gutterBottom color="success.main">
                   Arcano {arcanoAtual.arcano} - {arcanoAtual.info.titulo}
                 </Typography>
                 <Typography variant="body2" sx={{ textAlign: 'justify', maxHeight: 300, overflow: 'auto' }}>
                   {arcanoAtual.info.descricao}
                 </Typography>
               </CardContent>
            </Card>
          </Grid>
        )}
      </Grid>
    </Box>
  );
};

export default TabelaArcanosTransito;