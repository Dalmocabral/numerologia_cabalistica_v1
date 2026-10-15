import {
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  CircularProgress,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  Tab,
  Tabs,
  TextField,
  Typography,
} from '@mui/material';
import {
  AutoFixHigh,
  Edit,
  Refresh,
  Save,
  WarningAmber,
} from '@mui/icons-material';
import { useEffect, useState } from 'react';
import type { FC, SyntheticEvent } from 'react';
import { generateInvertedPyramid } from '../utils/generateInvertedPyramid';
import { arcanos } from '../utils/TabelaNumerologia';
import {
  obterSugestoesValidadas,
  type SugestaoNomeSocial,
} from '../services/AiNomeSocialService';

interface DialogNomeSocialProps {
  open: boolean;
  onClose: () => void;
  onSave: (nome: string, arcanoNumber: number | null) => void;
  nomeOriginal?: string;
  dataNascimento?: string;
}

const DialogNomeSocial: FC<DialogNomeSocialProps> = ({
  open,
  onClose,
  onSave,
  nomeOriginal = '',
}) => {
  // Tabs: 0 = Nome social Manualmente, 1 = Sugestões por IA
  const [tabIndex, setTabIndex] = useState<number>(0);

  // Estados da Aba Manual
  const [nomeManual, setNomeManual] = useState<string>('');
  const [piramideManual, setPiramideManual] = useState<any[]>([]);
  const [arcanoManualNumber, setArcanoManualNumber] = useState<number | null>(null);
  const [arcanoManualInfo, setArcanoManualInfo] = useState<any>(null);

  // Estados da Aba IA
  const [sugestoes, setSugestoes] = useState<SugestaoNomeSocial[]>([]);
  const [sugestaoSelecionada, setSugestaoSelecionada] = useState<SugestaoNomeSocial | null>(null);
  const [loadingIA, setLoadingIA] = useState<boolean>(false);
  const [jaTentouGerar, setJaTentouGerar] = useState<boolean>(false);
  const [ultimoClienteProcessado, setUltimoClienteProcessado] = useState<string>('');

  // Carrega sugestões iniciais automaticamente ao abrir ou quando o cliente mudar
  useEffect(() => {
    if (open) {
      const nomeAtual = (nomeOriginal || '').trim();
      if (nomeAtual && (nomeAtual !== ultimoClienteProcessado || sugestoes.length === 0)) {
        // Reseta estados anteriores para não manter dados do cliente anterior
        setNomeManual('');
        setPiramideManual([]);
        setArcanoManualNumber(null);
        setArcanoManualInfo(null);
        setSugestoes([]);
        setSugestaoSelecionada(null);
        setJaTentouGerar(false);
        setUltimoClienteProcessado(nomeAtual);
        handleGerarSugestoes(false, nomeAtual);
      }
    }
  }, [open, nomeOriginal]);

  // Atualização da pirâmide manual em tempo real
  useEffect(() => {
    if (nomeManual && nomeManual.trim().length > 0) {
      const generated = generateInvertedPyramid(nomeManual);
      setPiramideManual(generated);

      if (generated.length > 0) {
        const lastRow = generated[generated.length - 1];
        if (lastRow.type === 'numbers' && lastRow.data.length === 1) {
          const num = lastRow.data[0];
          setArcanoManualNumber(num);
          if (arcanos && arcanos[num]) {
            setArcanoManualInfo(arcanos[num]);
          } else {
            setArcanoManualInfo(null);
          }
        } else {
          setArcanoManualNumber(null);
          setArcanoManualInfo(null);
        }
      }
    } else {
      setPiramideManual([]);
      setArcanoManualNumber(null);
      setArcanoManualInfo(null);
    }
  }, [nomeManual]);

  const handleTabChange = (_event: SyntheticEvent, newValue: number) => {
    setTabIndex(newValue);
  };

  const handleGerarSugestoes = async (forcarIA: boolean = true, nomeParam?: string) => {
    const nomeBase = (nomeParam || nomeOriginal || nomeManual || '').trim();
    if (!nomeBase) return;

    setLoadingIA(true);
    setSugestaoSelecionada(null);

    try {
      const { sugestoes: resultado } = await obterSugestoesValidadas(nomeBase, forcarIA);
      // Garante apenas nomes 100% válidos (sem sequências negativas / sem bloqueios)
      const nomesLimpos = resultado.filter((s) => !s.temSequenciaNegativa);
      setSugestoes(nomesLimpos);

      if (nomesLimpos.length > 0) {
        setSugestaoSelecionada(nomesLimpos[0]);
      }
    } catch (err: any) {
      console.error('Erro na geração:', err);
    } finally {
      setLoadingIA(false);
      setJaTentouGerar(true);
    }
  };

  const handleConfirmarEscolha = (nome: string, arcanoNum: number | null) => {
    onSave(nome, arcanoNum);
    onClose();
  };

  // Função para detectar sequências de 3+ números para pintar de vermelho
  const getSequenceIndices = (row: number[]) => {
    const sequences: number[] = [];
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

  // Renderizador unificado da Pirâmide Invertida
  const renderVisualizadorPiramide = (piramideData: any[]) => {
    if (!piramideData || piramideData.length === 0) return null;

    return (
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          fontFamily: 'monospace',
          overflowX: 'auto',
          py: 1,
          px: 1,
          maxWidth: '100%',
        }}
      >
        {piramideData.map((row, rowIndex) => {
          const sequences = row.type === 'numbers' ? getSequenceIndices(row.data) : [];
          const isLastRow = rowIndex === piramideData.length - 1;

          return (
            <Box
              key={rowIndex}
              sx={{
                display: 'flex',
                justifyContent: 'center',
                gap: 0.5,
                mb: 0.4,
                width: 'fit-content',
                mx: 'auto',
              }}
            >
              {row.data.map((item: any, itemIndex: number) => {
                const isSequence = sequences.includes(itemIndex);
                const isLetter = row.type === 'letters';
                const isArcanoNumber = isLastRow && row.type === 'numbers' && row.data.length === 1;

                return (
                  <Box
                    key={itemIndex}
                    sx={{
                      minWidth: isLetter ? '1.8rem' : '1.6rem',
                      height: isLetter ? '1.8rem' : '1.6rem',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: isLetter ? '1.1rem' : '0.95rem',
                      fontWeight: isSequence || isArcanoNumber ? 700 : 500,
                      color: isLetter
                        ? 'primary.main'
                        : isSequence
                        ? 'error.contrastText'
                        : isArcanoNumber
                        ? 'success.contrastText'
                        : 'text.primary',
                      bgcolor: isSequence
                        ? 'error.main'
                        : isArcanoNumber
                        ? 'success.main'
                        : isLetter
                        ? 'action.hover'
                        : 'transparent',
                      borderRadius: '4px',
                      border: isLetter ? '1px solid' : 'none',
                      borderColor: 'divider',
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
    );
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth="xl" fullWidth>
      <DialogTitle sx={{ pb: 1 }}>
        <Box>
          <Typography variant="h5" component="div" sx={{ fontWeight: 600 }}>
            Análise do Nome Social
          </Typography>
          {nomeOriginal && (
            <Typography variant="body2" color="text.secondary">
              Nome de Batismo do Cliente: <strong>{nomeOriginal}</strong>
            </Typography>
          )}
        </Box>
      </DialogTitle>

      <DialogContent dividers sx={{ p: { xs: 1.5, sm: 3 } }}>
        {/* Abas Superiores: Manual Primeiro, Sugestões por IA depois */}
        <Tabs value={tabIndex} onChange={handleTabChange} centered sx={{ mb: 3 }}>
          <Tab icon={<Edit />} label="Nome social Manualmente" iconPosition="start" />
          <Tab icon={<AutoFixHigh />} label="Sugestões por IA" iconPosition="start" />
        </Tabs>

        {/* ======================================================== */}
        {/* ABA 0: NOME SOCIAL MANUALMENTE                           */}
        {/* ======================================================== */}
        {tabIndex === 0 && (
          <Box>
            <TextField
              autoFocus
              margin="dense"
              label="Digite o Nome Social"
              type="text"
              fullWidth
              variant="outlined"
              value={nomeManual}
              onChange={(e) => setNomeManual(e.target.value.toUpperCase())}
              inputProps={{ style: { textTransform: 'uppercase' } }}
              placeholder="Ex: MARIA SILVA, DALMO CABRAL..."
              sx={{ mb: 3 }}
            />

            {/* Visualização da Pirâmide Manual */}
            {piramideManual.length > 0 && (
              <Grid container spacing={3}>
                <Grid item xs={12} md={7}>
                  <Card variant="outlined" sx={{ p: 2 }}>
                    <Typography variant="subtitle2" sx={{ mb: 1, textAlign: 'center', fontWeight: 600 }}>
                      Pirâmide Invertida de "{nomeManual}"
                    </Typography>
                    {renderVisualizadorPiramide(piramideManual)}
                  </Card>
                </Grid>

                <Grid item xs={12} md={5}>
                  {arcanoManualInfo ? (
                    <Card variant="outlined" sx={{ bgcolor: 'action.selected', p: 1 }}>
                      <CardContent>
                        {arcanoManualInfo.image && (
                          <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
                            <img
                              src={arcanoManualInfo.image}
                              alt={arcanoManualInfo.titulo}
                              style={{
                                maxWidth: '160px',
                                maxHeight: '160px',
                                borderRadius: '8px',
                              }}
                              onError={(e) => {
                                (e.target as HTMLElement).style.display = 'none';
                              }}
                            />
                          </Box>
                        )}
                        <Typography variant="h6" gutterBottom sx={{ textAlign: 'center', fontWeight: 600 }}>
                          {arcanoManualInfo.titulo} - Número {arcanoManualNumber}
                        </Typography>
                        <Typography
                          variant="body2"
                          color="text.secondary"
                          sx={{ maxHeight: '160px', overflowY: 'auto', lineHeight: 1.5, fontSize: '0.85rem' }}
                        >
                          {arcanoManualInfo.descricao}
                        </Typography>
                      </CardContent>
                    </Card>
                  ) : (
                    <Box sx={{ p: 3, textAlign: 'center', color: 'text.secondary' }}>
                      {arcanoManualNumber ? `Arcano ${arcanoManualNumber} identificado.` : 'Digite um nome para visualizar o Arcano.'}
                    </Box>
                  )}
                </Grid>
              </Grid>
            )}
          </Box>
        )}

        {/* ======================================================== */}
        {/* ABA 1: SUGESTÕES POR IA                                  */}
        {/* ======================================================== */}
        {tabIndex === 1 && (
          <Box>
            {/* Barra de Ação Superior */}
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                flexWrap: 'wrap',
                gap: 2,
                mb: 2.5,
                p: 2,
                bgcolor: 'action.hover',
                borderRadius: 2,
              }}
            >
              <Box>
                <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                  Nomes Sugeridos Harmonizados
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Opções harmonizadas e livres de bloqueios, validadas pela Pirâmide Invertida Cabalística.
                </Typography>
              </Box>

              <Button
                variant="contained"
                startIcon={loadingIA ? <CircularProgress size={18} color="inherit" /> : <Refresh />}
                onClick={() => handleGerarSugestoes(true)}
                disabled={loadingIA || (!nomeOriginal && !nomeManual)}
                sx={{ textTransform: 'none', px: 2.5 }}
              >
                {loadingIA ? 'Analisando...' : 'Gerar Novas Sugestões'}
              </Button>
            </Box>

            {/* Spinner durante o carregamento */}
            {loadingIA && (
              <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', py: 8, gap: 2 }}>
                <CircularProgress size={50} />
                <Typography variant="body1" color="text.secondary">
                  Gerando combinações e calculando as pirâmides cabalísticas...
                </Typography>
              </Box>
            )}

            {/* Grid com Duas Colunas (Lista de Sugestões Válidas + Detalhes Selecionados) */}
            {!loadingIA && sugestoes.length > 0 && (
              <Grid container spacing={3}>
                {/* Coluna Esquerda: Lista de Opções Válidas */}
                <Grid item xs={12} md={4.5}>
                  <Typography variant="subtitle2" sx={{ mb: 1.5, fontWeight: 600 }}>
                    Nomes Válidos ({sugestoes.length}):
                  </Typography>

                  <Box sx={{ maxHeight: '60vh', overflowY: 'auto', pr: 1 }}>
                    {sugestoes.map((item, idx) => {
                      const isSelected = sugestaoSelecionada?.nome === item.nome;
                      return (
                        <Card
                          key={idx}
                          onClick={() => setSugestaoSelecionada(item)}
                          variant="outlined"
                          sx={{
                            mb: 1.2,
                            cursor: 'pointer',
                            transition: 'all 0.2s',
                            borderColor: isSelected ? 'primary.main' : 'divider',
                            bgcolor: isSelected ? 'action.selected' : 'background.paper',
                            boxShadow: isSelected ? 2 : 0,
                            '&:hover': {
                              borderColor: 'primary.light',
                              bgcolor: 'action.hover',
                            },
                          }}
                        >
                          <CardContent sx={{ py: 1.2, px: 2, '&:last-child': { pb: 1.2 } }}>
                            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 0.5 }}>
                              <Typography variant="h6" sx={{ fontSize: '1.05rem', fontWeight: 600 }}>
                                {item.nome}
                              </Typography>
                            </Box>

                            <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', mt: 0.8 }}>
                              <Chip
                                label={item.arcanoTitulo || `Arcano ${item.arcanoNumber}`}
                                size="small"
                                variant="outlined"
                                color="primary"
                                sx={{ height: 22, fontSize: '0.72rem' }}
                              />
                              <Chip
                                label={`Expressão: ${item.expressao}`}
                                size="small"
                                variant="outlined"
                                sx={{ height: 22, fontSize: '0.72rem' }}
                              />
                            </Box>
                          </CardContent>
                        </Card>
                      );
                    })}
                  </Box>
                </Grid>

                {/* Coluna Direita: Detalhes, Pirâmide e Arcano do Nome Selecionado */}
                <Grid item xs={12} md={7.5}>
                  {sugestaoSelecionada ? (
                    <Card variant="outlined" sx={{ p: 2.5, bgcolor: 'background.paper' }}>
                      {/* Cabeçalho da Opção Selecionada */}
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 2, mb: 2 }}>
                        <Box>
                          <Typography variant="h5" sx={{ fontWeight: 700, color: 'primary.main' }}>
                            {sugestaoSelecionada.nome}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            Expressão: <strong>{sugestaoSelecionada.expressao}</strong> | Arcano: <strong>{sugestaoSelecionada.arcanoNumber}</strong>
                          </Typography>
                        </Box>

                        <Button
                          variant="contained"
                          color="primary"
                          startIcon={<Save />}
                          onClick={() => handleConfirmarEscolha(sugestaoSelecionada.nome, sugestaoSelecionada.arcanoNumber)}
                          sx={{ px: 3, textTransform: 'none', fontWeight: 600 }}
                        >
                          Salvar este Nome Social
                        </Button>
                      </Box>

                      {/* Pirâmide Invertida do Nome Selecionado */}
                      <Box sx={{ p: 1.5, bgcolor: 'action.hover', borderRadius: 2, mb: 2.5 }}>
                        <Typography variant="caption" sx={{ fontWeight: 600, color: 'text.secondary', display: 'block', mb: 1, textAlign: 'center' }}>
                          PIRÂMIDE INVERTIDA CABALÍSTICA
                        </Typography>
                        {renderVisualizadorPiramide(sugestaoSelecionada.piramide)}
                      </Box>

                      {/* Card do Arcano Regente */}
                      {sugestaoSelecionada.arcanoNumber && (
                        <Card variant="outlined" sx={{ bgcolor: 'action.selected' }}>
                          <CardContent sx={{ display: 'flex', gap: 2, alignItems: 'flex-start', flexDirection: { xs: 'column', sm: 'row' } }}>
                            {sugestaoSelecionada.arcanoImage && (
                              <img
                                src={sugestaoSelecionada.arcanoImage}
                                alt={sugestaoSelecionada.arcanoTitulo}
                                style={{
                                  width: 90,
                                  height: 'auto',
                                  borderRadius: 6,
                                  alignSelf: 'center',
                                }}
                                onError={(e) => {
                                  (e.target as HTMLElement).style.display = 'none';
                                }}
                              />
                            )}
                            <Box sx={{ flex: 1 }}>
                              <Typography variant="subtitle1" sx={{ fontWeight: 700, color: 'primary.main' }}>
                                {sugestaoSelecionada.arcanoTitulo} (Número {sugestaoSelecionada.arcanoNumber})
                              </Typography>
                              <Typography
                                variant="body2"
                                color="text.secondary"
                                sx={{
                                  maxHeight: 120,
                                  overflowY: 'auto',
                                  lineHeight: 1.5,
                                  fontSize: '0.82rem',
                                  mt: 0.5,
                                }}
                              >
                                {sugestaoSelecionada.arcanoDescricao || 'Descrição do arcano disponível na interpretação cabalística.'}
                              </Typography>
                            </Box>
                          </CardContent>
                        </Card>
                      )}
                    </Card>
                  ) : (
                    <Box sx={{ height: 300, display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'text.secondary' }}>
                      Selecione uma opção ao lado para visualizar a pirâmide e o arcano.
                    </Box>
                  )}
                </Grid>
              </Grid>
            )}

            {!loadingIA && sugestoes.length === 0 && jaTentouGerar && (
              <Card
                variant="outlined"
                sx={{
                  p: { xs: 2.5, sm: 4 },
                  textAlign: 'center',
                  bgcolor: 'background.paper',
                  borderRadius: 3,
                  borderColor: 'warning.main',
                  my: 2,
                  boxShadow: 1,
                }}
              >
                <WarningAmber sx={{ fontSize: 56, color: 'warning.main', mb: 1.5 }} />
                <Typography variant="h6" sx={{ fontWeight: 700, color: 'text.primary', mb: 1 }}>
                  Nenhum nome social 100% harmonizado encontrado automaticamente
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ maxWidth: 660, mx: 'auto', mb: 2.5, lineHeight: 1.6 }}
                >
                  O sistema gerou e analisou todas as combinações e permutações possíveis a partir de{' '}
                  <strong>"{nomeOriginal || nomeManual}"</strong>, porém todas as variações diretas
                  apresentaram <strong>sequências negativas (bloqueios)</strong> na Pirâmide Invertida.
                </Typography>

                <Box
                  sx={{
                    maxWidth: 620,
                    mx: 'auto',
                    p: 2.5,
                    bgcolor: 'action.hover',
                    borderRadius: 2,
                    textAlign: 'left',
                    mb: 3,
                    border: '1px solid',
                    borderColor: 'divider',
                  }}
                >
                  <Typography variant="subtitle2" sx={{ fontWeight: 700, mb: 1, color: 'primary.main' }}>
                    💡 Dicas da Cabala para Harmonização:
                  </Typography>
                  <Typography variant="body2" color="text.secondary" component="div" sx={{ lineHeight: 1.7 }}>
                    • Acesse a aba <strong>Nome social Manualmente</strong>.<br />
                    • Adicione uma letra <strong>H</strong> suave ao final (ex: <em>Lanah</em>, <em>Cabrall</em>).<br />
                    • Troque vogais como <strong>I por Y</strong> ou dobre consoantes (ex: <em>Lany</em>, <em>Lanna</em>).<br />
                    • Teste utilizar apenas as <strong>iniciais</strong> com o sobrenome (ex: <em>Lana C.</em> ou <em>L. Cabral</em>).
                  </Typography>
                </Box>

                <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
                  <Button
                    variant="contained"
                    color="primary"
                    startIcon={<Edit />}
                    onClick={() => {
                      setNomeManual(nomeOriginal || '');
                      setTabIndex(0);
                    }}
                    sx={{ textTransform: 'none', px: 3, fontWeight: 600 }}
                  >
                    Ajustar na Aba Manual
                  </Button>
                  <Button
                    variant="outlined"
                    startIcon={<Refresh />}
                    onClick={() => handleGerarSugestoes(true)}
                    sx={{ textTransform: 'none', px: 2.5 }}
                  >
                    Tentar Novamente
                  </Button>
                </Box>
              </Card>
            )}

            {!loadingIA && sugestoes.length === 0 && !jaTentouGerar && (
              <Box sx={{ textAlign: 'center', py: 6 }}>
                <AutoFixHigh sx={{ fontSize: 60, color: 'text.secondary', mb: 2, opacity: 0.5 }} />
                <Typography variant="h6" gutterBottom>
                  Nenhuma sugestão gerada ainda
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
                  Clique no botão abaixo para gerar variações cabalísticas a partir do nome original.
                </Typography>
                <Button variant="contained" onClick={() => handleGerarSugestoes(true)}>
                  Gerar Sugestões Agora
                </Button>
              </Box>
            )}
          </Box>
        )}
      </DialogContent>

      <DialogActions sx={{ px: 3, py: 2 }}>
        <Button onClick={onClose} color="inherit">
          Fechar
        </Button>

        {tabIndex === 0 && (
          <Button
            onClick={() => handleConfirmarEscolha(nomeManual, arcanoManualNumber)}
            disabled={!nomeManual || nomeManual.trim().length === 0}
            variant="contained"
            color="primary"
            startIcon={<Save />}
          >
            Salvar Nome Social
          </Button>
        )}
      </DialogActions>
    </Dialog>
  );
};

export default DialogNomeSocial;