import {
  Alert,
  Box,
  Button,
  Card,
  CardContent,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
  Grid,
  IconButton,
  Snackbar,
  TextField,
  Typography,
} from '@mui/material';
import {
  CloudUpload,
  Delete,
  RestartAlt,
  Save,
  Settings,
} from '@mui/icons-material';
import { useEffect, useRef, useState } from 'react';
import type { ChangeEvent, FC } from 'react';
import {
  DEFAULT_MENSAGEM_FINAL,
  getReportSettings,
  otimizarImagemLogo,
  resetReportSettings,
  saveReportSettings,
  type ReportSettings,
} from '../services/SettingsService';

interface DialogConfiguracoesProps {
  open: boolean;
  onClose: () => void;
}

const DialogConfiguracoes: FC<DialogConfiguracoesProps> = ({ open, onClose }) => {
  const [nomeOrientadora, setNomeOrientadora] = useState('');
  const [cargoOrientadora, setCargoOrientadora] = useState('');
  const [logotipoBase64, setLogotipoBase64] = useState('');
  const [mensagemFinal, setMensagemFinal] = useState('');
  const [toastOpen, setToastOpen] = useState(false);
  const [toastMsg, setToastMsg] = useState('');
  const [toastSeverity, setToastSeverity] = useState<'success' | 'info'>('success');

  const fileInputRef = useRef<HTMLInputElement>(null);

  // Carrega configurações salvas ao abrir o diálogo
  useEffect(() => {
    if (open) {
      const settings = getReportSettings();
      setNomeOrientadora(settings.nomeOrientadora || '');
      setCargoOrientadora(settings.cargoOrientadora || '');
      setLogotipoBase64(settings.logotipoBase64 || '');
      setMensagemFinal(settings.mensagemFinal || '');
    }
  }, [open]);

  // Manipulador de upload de arquivo
  const handleFileChange = async (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    try {
      const base64 = await otimizarImagemLogo(file, 800);
      setLogotipoBase64(base64);
      setToastMsg('Logotipo carregado com sucesso!');
      setToastSeverity('success');
      setToastOpen(true);
    } catch (err) {
      console.error('Erro ao processar imagem:', err);
      alert('Não foi possível processar a imagem. Tente outro formato (PNG ou JPG).');
    }
  };

  const handleRemoverLogo = () => {
    setLogotipoBase64('');
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
    setToastMsg('Logotipo removido.');
    setToastSeverity('info');
    setToastOpen(true);
  };

  const handleSalvar = () => {
    const settings: ReportSettings = {
      nomeOrientadora: nomeOrientadora.trim(),
      cargoOrientadora: cargoOrientadora.trim(),
      logotipoBase64: logotipoBase64.trim(),
      mensagemFinal: mensagemFinal.trim(),
    };

    saveReportSettings(settings);
    setToastMsg('Configurações salvas com sucesso!');
    setToastSeverity('success');
    setToastOpen(true);

    setTimeout(() => {
      onClose();
    }, 400);
  };

  const handleRestaurarPadroes = () => {
    if (window.confirm('Deseja restaurar todas as configurações para o padrão sem logotipo e sem nome de orientadora?')) {
      resetReportSettings();
      setNomeOrientadora('');
      setCargoOrientadora('');
      setLogotipoBase64('');
      setMensagemFinal('');
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
      setToastMsg('Configurações restauradas para o padrão.');
      setToastSeverity('info');
      setToastOpen(true);
    }
  };

  const handleCarregarTextoPadrao = () => {
    setMensagemFinal(DEFAULT_MENSAGEM_FINAL);
  };

  return (
    <>
      <Dialog open={open} onClose={onClose} maxWidth="md" fullWidth>
        <DialogTitle sx={{ display: 'flex', alignItems: 'center', gap: 1.5, pb: 1 }}>
          <Settings color="primary" />
          <Box>
            <Typography variant="h6" component="div" sx={{ fontWeight: 600 }}>
              Configurações do Relatório (PDF)
            </Typography>
            <Typography variant="caption" color="text.secondary">
              Personalize o logotipo, os dados da orientadora e a mensagem de encerramento do mapa.
            </Typography>
          </Box>
        </DialogTitle>

        <DialogContent dividers sx={{ p: { xs: 2, sm: 3 } }}>
          <Grid container spacing={3}>
            {/* SEÇÃO 1: DADOS DA ORIENTADORA */}
            <Grid item xs={12}>
              <Typography variant="subtitle2" color="primary" sx={{ fontWeight: 700, mb: 1 }}>
                1. DADOS DA ORIENTADORA / CONSULTORA
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                Se esses campos não forem preenchidos, o PDF será gerado em formato neutro, sem nome de orientadora.
              </Typography>

              <Grid container spacing={2}>
                <Grid item xs={12} sm={7}>
                  <TextField
                    label="Nome da Orientadora / Numeróloga"
                    fullWidth
                    variant="outlined"
                    value={nomeOrientadora}
                    onChange={(e) => setNomeOrientadora(e.target.value)}
                    placeholder="Ex: Manouche Yasmin, Maria Joana..."
                  />
                </Grid>
                <Grid item xs={12} sm={5}>
                  <TextField
                    label="Cargo / Título"
                    fullWidth
                    variant="outlined"
                    value={cargoOrientadora}
                    onChange={(e) => setCargoOrientadora(e.target.value)}
                    placeholder="Ex: Numeróloga Cabalística"
                  />
                </Grid>
              </Grid>
            </Grid>

            <Grid item xs={12}>
              <Divider />
            </Grid>

            {/* SEÇÃO 2: LOGOTIPO */}
            <Grid item xs={12}>
              <Typography variant="subtitle2" color="primary" sx={{ fontWeight: 700, mb: 1 }}>
                2. LOGOTIPO PERSONALIZADO
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                Aparecerá na capa e na marca d'água suave das páginas. Se não houver logotipo, o PDF é gerado sem imagem.
              </Typography>

              <Card variant="outlined" sx={{ p: 2, bgcolor: 'background.default' }}>
                <CardContent sx={{ p: '0 !important', display: 'flex', alignItems: 'center', gap: 3, flexWrap: 'wrap' }}>
                  {logotipoBase64 ? (
                    <Box
                      sx={{
                        width: 140,
                        height: 100,
                        border: '1px dashed',
                        borderColor: 'divider',
                        borderRadius: 1,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        bgcolor: '#ffffff',
                        p: 1,
                      }}
                    >
                      <img
                        src={logotipoBase64}
                        alt="Preview Logotipo"
                        style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }}
                      />
                    </Box>
                  ) : (
                    <Box
                      sx={{
                        width: 140,
                        height: 100,
                        border: '1px dashed',
                        borderColor: 'text.disabled',
                        borderRadius: 1,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'text.secondary',
                        p: 1,
                        textAlign: 'center',
                      }}
                    >
                      <CloudUpload sx={{ fontSize: 32, opacity: 0.5, mb: 0.5 }} />
                      <Typography variant="caption">Sem logotipo</Typography>
                    </Box>
                  )}

                  <Box sx={{ flex: 1, minWidth: 200 }}>
                    <input
                      type="file"
                      ref={fileInputRef}
                      onChange={handleFileChange}
                      accept="image/png, image/jpeg, image/webp"
                      style={{ display: 'none' }}
                      id="input-logo-file"
                    />
                    <Box sx={{ display: 'flex', gap: 1.5, flexWrap: 'wrap', mb: 1 }}>
                      <Button
                        variant="outlined"
                        component="label"
                        htmlFor="input-logo-file"
                        startIcon={<CloudUpload />}
                        sx={{ textTransform: 'none' }}
                      >
                        {logotipoBase64 ? 'Trocar Imagem' : 'Selecionar Imagem'}
                      </Button>

                      {logotipoBase64 && (
                        <Button
                          variant="outlined"
                          color="error"
                          onClick={handleRemoverLogo}
                          startIcon={<Delete />}
                          sx={{ textTransform: 'none' }}
                        >
                          Remover
                        </Button>
                      )}
                    </Box>
                    <Typography variant="caption" color="text.secondary" display="block">
                      Formatos suportados: PNG (fundo transparente recomendado) ou JPG.
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12}>
              <Divider />
            </Grid>

            {/* SEÇÃO 3: UMA NOTA PESSOAL (CONSIDERAÇÕES FINAIS) */}
            <Grid item xs={12}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1, flexWrap: 'wrap', gap: 1 }}>
                <Typography variant="subtitle2" color="primary" sx={{ fontWeight: 700 }}>
                  3. UMA NOTA PESSOAL (CONSIDERAÇÕES FINAIS)
                </Typography>
                <Button
                  size="small"
                  variant="text"
                  onClick={handleCarregarTextoPadrao}
                  sx={{ textTransform: 'none', fontSize: '0.8rem' }}
                >
                  Carregar Texto Padrão
                </Button>
              </Box>

              <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                Mensagem calorosa de encerramento no final do mapa.
              </Typography>

              <TextField
                multiline
                rows={6}
                fullWidth
                variant="outlined"
                value={mensagemFinal}
                onChange={(e) => setMensagemFinal(e.target.value)}
                placeholder={DEFAULT_MENSAGEM_FINAL}
              />
            </Grid>
          </Grid>
        </DialogContent>

        <DialogActions sx={{ px: 3, py: 2, display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 1 }}>
          <Button
            color="inherit"
            startIcon={<RestartAlt />}
            onClick={handleRestaurarPadroes}
            sx={{ textTransform: 'none' }}
          >
            Restaurar Padrões
          </Button>

          <Box sx={{ display: 'flex', gap: 1 }}>
            <Button onClick={onClose} color="inherit" sx={{ textTransform: 'none' }}>
              Cancelar
            </Button>
            <Button
              variant="contained"
              color="primary"
              startIcon={<Save />}
              onClick={handleSalvar}
              sx={{ textTransform: 'none', px: 3, fontWeight: 600 }}
            >
              Salvar Configurações
            </Button>
          </Box>
        </DialogActions>
      </Dialog>

      <Snackbar
        open={toastOpen}
        autoHideDuration={3000}
        onClose={() => setToastOpen(false)}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert onClose={() => setToastOpen(false)} severity={toastSeverity} sx={{ width: '100%' }}>
          {toastMsg}
        </Alert>
      </Snackbar>
    </>
  );
};

export default DialogConfiguracoes;
