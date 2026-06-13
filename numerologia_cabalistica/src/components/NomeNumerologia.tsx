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

    // Divide o nome em palavras, ignorando espaços múltiplos
    const palavras = nome.toUpperCase().trim().split(/\s+/);

    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
                textAlign: 'center',
                marginTop: 4,
                width: '100%'
            }}
        >
            {/* Renderiza as palavras, permitindo quebra de linha (wrap) */}
            <Box sx={{ 
                display: 'flex', 
                flexWrap: 'wrap', 
                justifyContent: 'center', 
                gap: 4, // Espaçamento maior entre as palavras
                rowGap: 3 // Espaçamento vertical quando quebra de linha
            }}>
                {palavras.map((palavra, pIndex) => (
                    <Box key={pIndex} sx={{ display: 'flex', gap: 0.5 }}>
                        {palavra.split('').map((letra, lIndex) => (
                            <Box
                                key={lIndex}
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
                                        color: isVogal(letra) ? '#64B5F6' : '#9E9E9E',
                                        fontSize: { xs: '1.5rem', sm: '1.8rem', md: '2rem' }, // Responsivo
                                        fontWeight: 'bold'
                                    }}
                                >
                                    {letra}
                                </Typography>
                                <Typography
                                    variant="body1"
                                    component="span"
                                    sx={{
                                        color: isVogal(letra) ? '#64B5F6' : '#9E9E9E',
                                        fontSize: { xs: '1.2rem', sm: '1.4rem', md: '1.5rem' }, // Responsivo
                                    }}
                                >
                                    {calcularValorComAcento(letra) || '-'}
                                </Typography>
                            </Box>
                        ))}
                    </Box>
                ))}
            </Box>
        </Box>
    );
};

export default NomeNumerologia;
