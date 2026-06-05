import { CheckCircle, Close, Code, Email, GitHub, Key, LinkedIn, SystemUpdateAlt, ErrorOutline } from '@mui/icons-material';
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
  IconButton,
  Link,
  LinearProgress,
  Typography,
  useTheme
} from '@mui/material';
import { useLicense } from '../contexts/LicenseContext';

const AboutDialog = ({ 
  open, 
  onClose,
  currentVersion,
  updateVersion,
  downloadProgress,
  updateDownloaded,
  updateError,
  onStartDownload,
  onRestart,
  onCheckUpdate
}) => {
  const theme = useTheme();
  const { licenseData } = useLicense();

  return (
    <Dialog 
      open={open} 
      onClose={onClose}
      maxWidth="sm"
      fullWidth
      PaperProps={{
        sx: {
          borderRadius: 2,
          backgroundImage: theme.palette.mode === 'dark' 
            ? 'linear-gradient(to bottom right, #1e1e1e, #121212)'
            : 'linear-gradient(to bottom right, #ffffff, #f8f9fa)',
          color: theme.palette.text.primary
        }
      }}
    >
      <DialogTitle sx={{ m: 0, p: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Typography variant="h6" component="div" sx={{ fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: 1 }}>
          <Code color="primary" /> Sobre o Sistema
        </Typography>
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <Close />
        </IconButton>
      </DialogTitle>
      
      <Divider />
      
      <DialogContent sx={{ py: 4 }}>
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
          
          <Box 
            sx={{ 
                width: 80, 
                height: 80, 
                bgcolor: 'primary.main', 
                borderRadius: '50%', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                mb: 2,
                boxShadow: 3
            }}
          >
             <Typography variant="h3" sx={{ color: 'white', fontWeight: 'bold' }}>N</Typography>
          </Box>

          <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold', color: 'text.primary' }}>
            Numeris
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
            Sistema de Numerologia Cabalística Profissional
          </Typography>
          
          <Box sx={{ bgcolor: 'action.hover', p: 2, borderRadius: 2, width: '100%', mb: 3 }}>
             <Typography variant="subtitle2" color="text.secondary">
                 Versão Atual: {currentVersion || 'Desconhecida'}
             </Typography>
          </Box>

          {/* Seção de AutoUpdate */}
          {updateVersion && (
             <Box sx={{ 
                width: '100%', 
                mb: 3, 
                textAlign: 'left', 
                bgcolor: 'info.main', 
                color: 'info.contrastText',
                p: 2, 
                borderRadius: 2, 
                boxShadow: 2
             }}>
                <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 1, display: 'flex', alignItems: 'center', gap: 1 }}>
                    <SystemUpdateAlt /> Nova Versão Disponível: {updateVersion}
                </Typography>
                
                {updateError && (
                  <Typography variant="body2" color="error.light" sx={{ mb: 2, display: 'flex', alignItems: 'center', gap: 1 }}>
                    <ErrorOutline fontSize="small" /> Erro no download: {updateError}
                  </Typography>
                )}

                {updateDownloaded ? (
                  <Box sx={{ mt: 2 }}>
                    <Typography variant="body2" sx={{ mb: 2, fontWeight: 'medium' }}>
                      Atualização baixada com sucesso! O aplicativo será reiniciado para aplicar a instalação.
                    </Typography>
                    <Button 
                      variant="contained" 
                      color="success" 
                      fullWidth 
                      onClick={onRestart}
                      sx={{ fontWeight: 'bold' }}
                    >
                      Reiniciar e Instalar Agora
                    </Button>
                  </Box>
                ) : downloadProgress !== null ? (
                  <Box sx={{ mt: 2 }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                      <Typography variant="body2">Baixando atualização...</Typography>
                      <Typography variant="body2" sx={{ fontWeight: 'bold' }}>{Math.round(downloadProgress)}%</Typography>
                    </Box>
                    <LinearProgress 
                      variant="determinate" 
                      value={downloadProgress} 
                      sx={{ height: 10, borderRadius: 5, backgroundColor: 'rgba(255,255,255,0.3)', '& .MuiLinearProgress-bar': { backgroundColor: 'white' } }} 
                    />
                  </Box>
                ) : (
                  <Box sx={{ mt: 2 }}>
                    <Typography variant="body2" sx={{ mb: 2 }}>
                      A versão mais recente traz melhorias e correções. Deseja baixar agora?
                    </Typography>
                    <Button 
                      variant="contained" 
                      sx={{ bgcolor: 'white', color: 'info.main', fontWeight: 'bold', '&:hover': { bgcolor: '#f0f0f0' } }} 
                      fullWidth 
                      onClick={onStartDownload}
                    >
                      Baixar Atualização
                    </Button>
                  </Box>
                )}
             </Box>
          )}

          {!updateVersion && (
             <Box sx={{ width: '100%', mb: 3 }}>
                <Button 
                  variant="outlined" 
                  fullWidth 
                  onClick={onCheckUpdate}
                  sx={{ borderColor: 'divider', color: 'text.secondary' }}
                  startIcon={<SystemUpdateAlt />}
                >
                  Procurar Atualizações
                </Button>
             </Box>
          )}

          {updateError && (
            <Typography variant="body2" color="error.main" sx={{ mb: 2, display: 'flex', alignItems: 'center', gap: 1 }}>
              <ErrorOutline fontSize="small" /> Status: {updateError}
            </Typography>
          )}

          {/* Seção de Licença */}
          {licenseData && (
             <Box sx={{ width: '100%', mb: 3, textAlign: 'left', bgcolor: 'background.paper', p: 2, borderRadius: 2, border: '1px solid', borderColor: 'divider' }}>
                <Typography variant="subtitle2" sx={{ fontWeight: 'bold', mb: 2, display: 'flex', alignItems: 'center', gap: 1 }}>
                    <Key fontSize="small" color="primary" /> Informações da Licença
                </Typography>
                
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                    <Email fontSize="small" color="action" />
                    <Typography variant="body2">
                        {licenseData.email}
                    </Typography>
                </Box>
                
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                    <Key fontSize="small" color="action" />
                    <Typography variant="body2" sx={{ fontFamily: 'monospace' }}>
                        {licenseData.key}
                    </Typography>
                </Box>

                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <CheckCircle fontSize="small" color="success" />
                    <Typography variant="body2" color="success.main" sx={{ fontWeight: 'bold' }}>
                        Ativo
                    </Typography>
                </Box>
             </Box>
          )}

          <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 1 }}>
            Desenvolvido por:
          </Typography>
          <Typography variant="h6" color="primary" sx={{ mb: 3 }}>
            Dalmo dos Santos Cabral
          </Typography>

          <Box sx={{ display: 'flex', gap: 3 }}>
            <Link 
                href="https://github.com/dalmocabral" 
                target="_blank" 
                rel="noopener"
                sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textDecoration: 'none', color: 'text.primary', '&:hover': { color: 'primary.main' } }}
            >
                <GitHub sx={{ fontSize: 40, mb: 1 }} />
                <Typography variant="caption">GitHub</Typography>
            </Link>
            
            <Link 
                href="https://www.linkedin.com/in/dalmo-cabral-062374131/" 
                target="_blank" 
                rel="noopener"
                 sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textDecoration: 'none', color: 'text.primary', '&:hover': { color: '#0077b5' } }}
            >
                <LinkedIn sx={{ fontSize: 40, mb: 1, color: '#0077b5' }} />
                <Typography variant="caption">LinkedIn</Typography>
            </Link>
          </Box>

        </Box>
      </DialogContent>
      <DialogActions sx={{ p: 2, justifyContent: 'center' }}>
        <Typography variant="caption" color="text.secondary">
          © {new Date().getFullYear()} Todos os direitos reservados.
        </Typography>
      </DialogActions>
    </Dialog>
  );
};

export default AboutDialog;
