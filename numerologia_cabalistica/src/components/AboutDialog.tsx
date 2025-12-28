import { Close, Code, GitHub, LinkedIn } from '@mui/icons-material';
import {
    Box,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    Divider,
    IconButton,
    Link,
    Typography,
    useTheme
} from '@mui/material';

const AboutDialog = ({ open, onClose }) => {
  const theme = useTheme();

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
                 Versão 1.0.0
             </Typography>
          </Box>

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
