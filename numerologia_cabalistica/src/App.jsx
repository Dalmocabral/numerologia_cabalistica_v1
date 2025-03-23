// src/App.jsx
import React, { useState } from 'react';
import { ThemeProvider, createTheme, styled } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Box, Divider, TextField, Typography } from '@mui/material';
import { Table, TableBody, TableCell, tableCellClasses, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import Sidebar from './components/Sidebar';
import NomeNumerologia from './components/NomeNumerologia';
import { calcularImpressao } from './components/CalculoImpressao';
import { calcularExpressao } from './components/CalculoExpressao';
import { calcularDestino } from './components/CalculoDestino';
import { calcularMotivacao } from './components/CalculoMotivacao';
import { calcularMissao } from './components/CalculoMissao';
import { calcularDividasCarmicas } from './components/CalculoDividasCarmicas';
import { calcularLicoesCarmicas } from './components/CalculoLicoesCarmicas';
import { calcularTendenciasOcultas } from './components/CalculoTendenciasOcultas';
import { calcularAnoPessoal } from './components/CalculoAnoPessoal';
import { calcularMesPessoal, calcularDiaPessoal } from './components/CalculoMesDiaPessoal';
import { calcularSubconsciente } from './components/CalculoSubconsciente';
import { calcularCicloVida } from './components/CalculoCicloVida';
import { calcularMomentosDecisivos } from './components/CalcularMomentosDecisivos';

// Estilos personalizados para as células da tabela
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.grey[500], // Cinza médio
    color: theme.palette.common.white, // Texto branco
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

// Estilos personalizados para as linhas da tabela
const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // Esconde a borda da última linha
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

const App = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [nome, setNome] = useState('');
  const [dataNascimento, setDataNascimento] = useState('');
  const [mesInteresse, setMesInteresse] = useState('');
  const [diaInteresse, setDiaInteresse] = useState('');

  const darkTheme = createTheme({ palette: { mode: 'dark' } });
  const lightTheme = createTheme({ palette: { mode: 'light' } });

  const toggleDarkMode = () => setDarkMode(!darkMode);

  const handleSalvarNome = (novoNome, novaDataNascimento, novoMesInteresse, novoDiaInteresse) => {
    setNome(novoNome);
    setDataNascimento(novaDataNascimento);
    setMesInteresse(novoMesInteresse);
    setDiaInteresse(novoDiaInteresse);
  };

  const formatarData = (data) => {
    if (!data) return '';
    const [ano, mes, dia] = data.split('-');
    return `${dia}/${mes}/${ano}`;
  };

  const momentosDecisivos = calcularMomentosDecisivos(dataNascimento, calcularDestino(dataNascimento));

  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <Sidebar darkMode={darkMode} toggleDarkMode={toggleDarkMode} onSalvarNome={handleSalvarNome} />
      </ThemeProvider>

      <ThemeProvider theme={lightTheme}>
        <CssBaseline />
        <div style={{ marginLeft: 240, padding: '16px' }}>
          {nome && (
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: 4 }}>
              <NomeNumerologia nome={nome} />
              <Divider sx={{ width: '100%', my: 2 }} />
              <Box sx={{ display: "flex", flexDirection: "column", gap: 2, width: "100%" }}>
                <Box sx={{ display: "flex", gap: 2 }}>
                  <TextField label="Motivação" value={calcularMotivacao(nome)} disabled fullWidth sx={{ mt: 2 }} />
                  <TextField label="Impressão" value={calcularImpressao(nome)} disabled fullWidth sx={{ mt: 2 }} />
                  <TextField label="Expressão" value={calcularExpressao(nome)} disabled fullWidth sx={{ mt: 2 }} />
                  <TextField label="Data Nascimento" value={formatarData(dataNascimento)} disabled fullWidth sx={{ mt: 2 }} />
                </Box>
                <Box sx={{ display: "flex", gap: 2 }}>
                  <TextField label="Número de Destino" value={calcularDestino(dataNascimento)} disabled fullWidth sx={{ mt: 2 }} />
                  <TextField label="Missão" value={calcularMissao(nome, dataNascimento)} disabled fullWidth sx={{ mt: 2 }} />
                  <TextField label="Dívidas Cármicas" value={calcularDividasCarmicas(dataNascimento, calcularExpressao(nome), calcularDestino(dataNascimento), calcularMotivacao(nome))} disabled fullWidth sx={{ mt: 2 }} />
                </Box>
                <Box sx={{ display: "flex", gap: 2 }}>
                  <TextField label="Lições Cármicas" value={calcularLicoesCarmicas(nome)} disabled fullWidth sx={{ mt: 2 }} />
                  <TextField label="Tendências Ocultas" value={calcularTendenciasOcultas(nome)} disabled fullWidth sx={{ mt: 2 }} />
                  <TextField label="Ano Pessoal" value={calcularAnoPessoal(dataNascimento)} disabled fullWidth sx={{ mt: 2 }} />
                  <TextField label="Mês Pessoal" value={calcularMesPessoal(dataNascimento, mesInteresse)} disabled fullWidth sx={{ mt: 2 }} />
                  <TextField label="Dia Pessoal" value={calcularDiaPessoal(dataNascimento, mesInteresse, diaInteresse)} disabled fullWidth sx={{ mt: 2 }} />
                  <TextField label="Subconsciente" value={calcularSubconsciente(calcularLicoesCarmicas(nome))} disabled fullWidth sx={{ mt: 2 }} />
                </Box>

                {/* Container para as tabelas */}
                <Box sx={{ display: 'flex', gap: 2, mt: 4 }}>
                  {/* Tabela do Ciclo de Vida */}
                  <Box sx={{ flex: 1 }}>
                    <Typography variant="h6" align="center">Ciclo de Vida</Typography>
                    <TableContainer component={Paper}>
                      <Table sx={{ minWidth: 700 }} aria-label="customized table">
                        <TableHead>
                          <TableRow>
                            <StyledTableCell>Ciclo</StyledTableCell>
                            <StyledTableCell align="right">Idade</StyledTableCell>
                            <StyledTableCell align="right">Período</StyledTableCell>
                            <StyledTableCell align="right">Energia</StyledTableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          {calcularCicloVida(dataNascimento, calcularDestino(dataNascimento)).map((ciclo, index) => (
                            <StyledTableRow key={index}>
                              <StyledTableCell component="th" scope="row">
                                {ciclo.ciclo}
                              </StyledTableCell>
                              <StyledTableCell align="right">{ciclo.idade}</StyledTableCell>
                              <StyledTableCell align="right">{ciclo.periodo}</StyledTableCell>
                              <StyledTableCell align="right">{ciclo.energia}</StyledTableCell>  
                            </StyledTableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </TableContainer>
                  </Box>

                  {/* Tabela dos Momentos Decisivos */}
                  <Box sx={{ flex: 1 }}>
                    <Typography variant="h6" align="center">Momentos Decisivos</Typography>
                    <TableContainer component={Paper}>
                      <Table sx={{ minWidth: 700 }} aria-label="customized table">
                        <TableHead>
                          <TableRow>
                            <StyledTableCell>Energia</StyledTableCell>
                            <StyledTableCell align="right">Idade</StyledTableCell>
                            <StyledTableCell align="right">Período</StyledTableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          {momentosDecisivos.map((momento, index) => (
                            <StyledTableRow key={index}>
                              <StyledTableCell component="th" scope="row">
                                {momento.momento}
                              </StyledTableCell>
                              <StyledTableCell align="right">{
                                index === 0 ? `0 até ${momentosDecisivos[0].fim - new Date(dataNascimento).getFullYear()} anos` :
                                  index === 1 ? `${momentosDecisivos[0].fim - new Date(dataNascimento).getFullYear()} até ${momentosDecisivos[1].fim - new Date(dataNascimento).getFullYear()} anos` :
                                    index === 2 ? `${momentosDecisivos[1].fim - new Date(dataNascimento).getFullYear()} até ${momentosDecisivos[2].fim - new Date(dataNascimento).getFullYear()} anos` :
                                      `${momentosDecisivos[2].fim - new Date(dataNascimento).getFullYear()} anos em diante`
                              }</StyledTableCell>
                              <StyledTableCell align="right">{`${momentosDecisivos[index].inicio} até ${momentosDecisivos[index].fim}`}</StyledTableCell>
                            </StyledTableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </TableContainer>
                  </Box>
                </Box>
              </Box>
            </Box>
          )}
        </div>
      </ThemeProvider>
    </>
  );
};

export default App;