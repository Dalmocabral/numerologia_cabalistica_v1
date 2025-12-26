// src/components/NomeNumerologia.jsx
import { Box, Typography } from '@mui/material';
import { tabelaAcentos, tabelaNumeros } from '../utils/TabelaNumerologia';

const calcularValorComAcento = (letra) => {
  if (letra.trim() === "") return 0;

  // Se for um símbolo isolado (como o apóstrofo)
  if (tabelaAcentos[letra]) {
    return tabelaAcentos[letra];
  }

  // Captura acentos combinantes
  const acentos = letra.normalize('NFD').match(/[\u0300-\u036f]/g);

  // Letra base
  const letraBase = letra.normalize('NFD').replace(/[\u0300-\u036f]/g, '');

  let valorBase = tabelaNumeros[letraBase] || 0;

  if (acentos) {
    acentos.forEach(acento => {
      if (tabelaAcentos[acento]) {
        valorBase += tabelaAcentos[acento];
      }
    });
  }

  return valorBase;
};



// Função para verificar se uma letra é vogal (considerando acentos)
const isVogal = (letra) => {
    const letraBase = letra.normalize('NFD').replace(/[\u0300-\u036f]/g, ''); // Remove acentos
    return ['A', 'E', 'I', 'O', 'U'].includes(letraBase);
};

const NomeNumerologia = ({ nome }) => {
    if (!nome) return null;

    // Converte para maiúsculas e remove espaços
    const nomeFormatado = nome.toUpperCase().replace(/\s/g, '');

    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
                textAlign: 'center',
                marginTop: 4,
            }}
        >
            {/* Renderiza as letras do nome */}
            <Box sx={{ display: 'flex', gap: 2 }}>
                {nomeFormatado.split('').map((letra, index) => (
                    <Box
                        key={index}
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            gap: 0.5,
                        }}
                    >
                        <Typography
                            variant="h5"
                            component="span"
                            sx={{
                                color: isVogal(letra) ? '#64B5F6' : '#9E9E9E', // Azul para vogais, cinza para consoantes
                                fontSize: '2rem',
                            }}
                        >
                            {letra}
                        </Typography>
                        <Typography
                            variant="body1"
                            component="span"
                            sx={{
                                color: isVogal(letra) ? '#64B5F6' : '#9E9E9E',
                                fontSize: '1.5rem',
                            }}
                        >
                            {calcularValorComAcento(letra) || '-'}
                        </Typography>
                    </Box>
                ))}
            </Box>
        </Box>
    );
};

export default NomeNumerologia;
