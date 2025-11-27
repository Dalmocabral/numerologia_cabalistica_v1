// src/components/DialogAssinatura.jsx
import React, { useState } from 'react';
import {
  Dialog, DialogTitle, DialogContent, DialogActions,
  TextField, Button, Box, Typography, Tabs, Tab,
  Card, CardContent, Chip, Grid, Divider, CircularProgress, Alert, CardMedia
} from '@mui/material';
import { CheckCircle, Cancel, AutoFixHigh, Edit, Save } from '@mui/icons-material';
import { analisarAssinatura, gerarAssinaturasAutomaticas } from './CalculoAssinatura';
import { calcularExpressao } from './CalculoExpressao';
import { arcanos } from './TabelaNumerologia';

const DialogAssinatura = ({ open, onClose, nomeSocial, onSalvar }) => {
  const [tabIndex, setTabIndex] = useState(0);
  const [inputManual, setInputManual] = useState('');
  const [sugestoes, setSugestoes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [sugestaoSelecionada, setSugestaoSelecionada] = useState(null);

  const expressaoAlvo = nomeSocial ? calcularExpressao(nomeSocial) : 0;

  const handleTabChange = (event, newValue) => {
    setTabIndex(newValue);
    setSugestaoSelecionada(null);
  };

  const gerarSugestoes = async () => {
    setLoading(true);
    setSugestaoSelecionada(null);
    setTimeout(() => {
        const resultados = gerarAssinaturasAutomaticas(nomeSocial, expressaoAlvo);
        setSugestoes(resultados);
        setLoading(false);
    }, 500);
  };

  const handleConfirmarSalvar = (dados) => {
      if (onSalvar) { // Proteção extra
          onSalvar(dados);
          onClose();
      } else {
          console.error("Função onSalvar não foi passada para o componente.");
      }
  };

  // Componente visual dos Checks (RESTAURADO)
  const RenderCheckItem = ({ label, isValid, value }) => (
    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 1, p: 1, bgcolor: isValid ? '#e8f5e9' : '#ffebee', borderRadius: 1 }}>
      <Typography variant="body2" sx={{ fontWeight: 'bold', color: isValid ? 'green' : 'error.main' }}>
        {label}
      </Typography>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        <Typography variant="body2" fontWeight="bold">{value}</Typography>
        {isValid ? <CheckCircle color="success" fontSize="small" /> : <Cancel color="error" fontSize="small" />}
      </Box>
    </Box>
  );

  const renderPiramide = (analise, mostrarBotaoSalvar = false) => {
    const infoArcano = arcanos[analise.arcanoRegente];

    return (
    <Box sx={{ mt: 2, p: 2, bgcolor: '#fafafa', borderRadius: 2, border: '1px solid #eee' }}>
       <Box sx={{ display: 'flex', gap: 4, flexDirection: { xs: 'column', sm: 'row' }, alignItems: 'center', justifyContent: 'center' }}>
           {/* Pirâmide */}
           <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
               <Typography variant="subtitle2" gutterBottom>
                   Assinatura: <strong>{analise.assinatura}</strong> (Exp: {analise.expressaoAtual})
               </Typography>
               
               <Box sx={{ fontFamily: 'monospace', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  {analise.piramide.map((row, idx) => (
                    <Box key={idx} sx={{ display: 'flex', gap: 0.5, mb: 0.5 }}>
                      {row.data.map((num, i) => (
                        <Box key={i} sx={{
                          width: 24, height: 24, 
                          display: 'flex', alignItems: 'center', justifyContent: 'center',
                          bgcolor: row.type === 'letters' ? '#1976d2' : 'white',
                          color: row.type === 'letters' ? 'white' : 'black',
                          border: '1px solid #ddd',
                          borderRadius: 1,
                          fontSize: '0.8rem',
                          fontWeight: 'bold'
                        }}>
                          {num}
                        </Box>
                      ))}
                    </Box>
                  ))}
               </Box>
           </Box>

           {/* Carta Arcano */}
           {infoArcano && (
               <Box sx={{ maxWidth: 200, textAlign: 'center' }}>
                   <Typography variant="caption" fontWeight="bold" color="primary">
                       ARCANO REGENTE {analise.arcanoRegente}
                   </Typography>
                   {infoArcano.image && (
                       <CardMedia
                           component="img"
                           image={infoArcano.image}
                           alt={infoArcano.titulo}
                           sx={{ height: 180, objectFit: 'contain', my: 1, borderRadius: 1 }}
                       />
                   )}
                   <Typography variant="body2" fontWeight="bold">
                       {infoArcano.titulo}
                   </Typography>
               </Box>
           )}
       </Box>

       {/* Botão Salvar */}
       {mostrarBotaoSalvar && analise.aprovada && (
           <Box sx={{ mt: 3, textAlign: 'center' }}>
               <Button 
                   variant="contained" 
                   color="success" 
                   startIcon={<Save />}
                   onClick={() => handleConfirmarSalvar(analise)}
               >
                   ESCOLHER ESTA ASSINATURA
               </Button>
           </Box>
       )}
    </Box>
  )};

  const analiseManual = inputManual ? analisarAssinatura(inputManual, expressaoAlvo) : null;

  return (
    <Dialog open={open} onClose={onClose} maxWidth="md" fullWidth>
      <DialogTitle sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
         <Typography variant="h6">Assinatura de Poder</Typography>
         <Typography variant="body2" color="textSecondary">
            Para o Nome Social: <strong>{nomeSocial}</strong> (Expressão Alvo: <strong>{expressaoAlvo}</strong>)
         </Typography>
      </DialogTitle>
      
      <DialogContent>
        <Tabs value={tabIndex} onChange={handleTabChange} centered sx={{ mb: 3 }}>
          <Tab icon={<AutoFixHigh />} label="Automático (Sugestões)" />
          <Tab icon={<Edit />} label="Manual (Testar)" />
        </Tabs>

        {/* ABA AUTOMÁTICA */}
        {tabIndex === 0 && (
          <Box>
             <Box sx={{ textAlign: 'center', mb: 3 }}>
               <Button variant="contained" onClick={gerarSugestoes} disabled={loading || !nomeSocial}>
                 {loading ? "Calculando..." : "Gerar Sugestões"}
               </Button>
             </Box>

             {loading && <Box sx={{ display: 'flex', justifyContent: 'center', p: 4 }}><CircularProgress /></Box>}

             {!loading && sugestoes.length > 0 && (
               <Grid container spacing={2}>
                 <Grid item xs={12} md={4}>
                   <Typography variant="subtitle2" gutterBottom>Opções:</Typography>
                   {sugestoes.map((sug, idx) => (
                     <Card 
                       key={idx} 
                       onClick={() => setSugestaoSelecionada(sug)}
                       sx={{ 
                         mb: 1, cursor: 'pointer', 
                         bgcolor: sugestaoSelecionada === sug ? '#e3f2fd' : 'white',
                         border: sugestaoSelecionada === sug ? '1px solid #1976d2' : '1px solid #eee'
                       }}
                     >
                       <CardContent sx={{ py: 1, '&:last-child': { pb: 1 } }}>
                         <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <Typography variant="h6" color="primary">{sug.assinatura}</Typography>
                            <CheckCircle color="success" fontSize="small" />
                         </Box>
                       </CardContent>
                     </Card>
                   ))}
                 </Grid>
                 <Grid item xs={12} md={8}>
                    {sugestaoSelecionada ? renderPiramide(sugestaoSelecionada, true) : (
                        <Box sx={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'text.secondary' }}>
                            Selecione uma opção.
                        </Box>
                    )}
                 </Grid>
               </Grid>
             )}
          </Box>
        )}

        {/* ABA MANUAL (AGORA COM OS BOTÕES RESTAURADOS) */}
        {tabIndex === 1 && (
          <Box>
             <TextField
               label="Digite sua Assinatura (3 a 5 letras)"
               fullWidth
               value={inputManual}
               onChange={(e) => setInputManual(e.target.value.toUpperCase())}
               helperText={`${inputManual.length} caracteres`}
             />

             {analiseManual && (
               <Box sx={{ mt: 3 }}>
                  {/* --- AQUI ESTÃO OS BOTÕES DE VALIDAÇÃO RESTAURADOS --- */}
                  <Box sx={{ display: 'flex', gap: 2, mb: 2, flexWrap: 'wrap' }}>
                      <Chip 
                        label={`Tamanho: ${analiseManual.check.tamanho ? 'OK' : 'Inválido'}`} 
                        color={analiseManual.check.tamanho ? 'success' : 'error'} 
                      />
                      <Chip 
                        label={`Expressão: ${analiseManual.expressaoAtual} (Alvo: ${expressaoAlvo})`} 
                        color={analiseManual.check.expressao ? 'success' : 'error'} 
                      />
                      <Chip 
                        label={analiseManual.check.semArcanosNegativos ? 'Arcanos: Limpo' : 'Arcanos: Negativos!'} 
                        color={analiseManual.check.semArcanosNegativos ? 'success' : 'error'} 
                      />
                      <Chip 
                        label={analiseManual.check.semSequencias ? 'Sequências: Limpo' : 'Sequências: Detectadas!'} 
                        color={analiseManual.check.semSequencias ? 'success' : 'error'} 
                      />
                  </Box>

                  {analiseManual.aprovada ? (
                     <Alert severity="success" sx={{ mb: 2 }}>Esta assinatura é PODEROSA e compatível!</Alert>
                  ) : (
                     <Alert severity="warning" sx={{ mb: 2 }}>Esta assinatura precisa de ajustes.</Alert>
                  )}

                  {/* Renderiza a pirâmide E o botão de salvar se estiver aprovada */}
                  {renderPiramide(analiseManual, true)} 
               </Box>
             )}
          </Box>
        )}
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Fechar</Button>
      </DialogActions>
    </Dialog>
  );
};

export default DialogAssinatura;