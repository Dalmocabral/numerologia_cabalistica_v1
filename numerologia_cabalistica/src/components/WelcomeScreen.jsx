
import PsychologyIcon from '@mui/icons-material/Psychology';
import { Box, Typography } from '@mui/material';

const WelcomeScreen = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                height: '80vh',
                textAlign: 'center',
                opacity: 0.6,
            }}
        >
            <Typography variant="h1" sx={{ color: 'primary.main', mb: 2 }}>
                <PsychologyIcon sx={{ fontSize: 80, color: 'primary.main' }} />
                Numeris
            </Typography>
            <Typography variant="h3" sx={{ color: 'primary.main', mb: 2 }}>
                Seja bem-vindo ao Sistema de Numerologia Cabalística!
            </Typography>
            <Typography variant="h5" sx={{ color: 'text.secondary' }}>
                Insira seus dados no menu ao lado para começar.
            </Typography>
        </Box>
    );
};

export default WelcomeScreen;
