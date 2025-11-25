// src/App.jsx
import React, { useState } from 'react';
import { ThemeProvider, createTheme, styled } from '@mui/material/styles';
import PsychologyIcon from '@mui/icons-material/Psychology';
import CssBaseline from '@mui/material/CssBaseline';
import { Box, Divider, TextField, Typography, Tabs, Tab, Button, Table, TableBody, TableCell, tableCellClasses, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
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
import { calcularMesPessoal, calcularDiaPessoal, calcularMesesPessoaisRestantes } from './components/CalculoMesDiaPessoal';
import { calcularSubconsciente } from './components/CalculoSubconsciente';
import { calcularCicloVida } from './components/CalculoCicloVida';
import { calcularMomentosDecisivos } from './components/CalcularMomentosDecisivos';
import { calcularDesafios } from './components/CalculoDesafios';
import { calcularHarmoniaConjugal } from './components/CalculoHarmoniaConjugal';
import { calcularNumeroHarmonico } from "./components/CalculoHarmonico";
import { calcularCoresFavoraveis } from './components/CalculoCoresFavoraveis';
import { generateInvertedPyramid } from "./components/generateInvertedPyramid";
import { arcanos } from './components/TabelaNumerologia';
import { calcularArcanoPessoal, calcularArcanoCabalistico } from './components/CalculoArcano';
import PiramideInvertida from "./components/PiramideInvertida";

// Estilos personalizados para as células da tabela
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.grey[500],
    color: theme.palette.common.white,
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
  const [harmonicos, setHarmonicos] = useState([]);
  const [numeroExpressao, setNumeroExpressao] = useState('');
  const [tabIndex, setTabIndex] = useState(0);
  const [piramide, setPiramide] = useState([]);
  const [nomeSocial, setNomeSocial] = useState('');
  const [arcano, setArcano] = useState('');
  const arcanoPessoal = calcularArcanoPessoal(dataNascimento);
  const arcanoCabalistico = calcularArcanoCabalistico(nome);

  // Estado para armazenar múltiplos nomes sociais
  const [nomesSociais, setNomesSociais] = useState([]);

  const darkTheme = createTheme({ palette: { mode: 'dark' } });
  const lightTheme = createTheme({ palette: { mode: 'light' } });

  const toggleDarkMode = () => setDarkMode(!darkMode);

  const handleSalvarNome = (novoNome, novaDataNascimento, novoMesInteresse, novoDiaInteresse) => {
    setNome(novoNome);
    setDataNascimento(novaDataNascimento);
    setMesInteresse(novoMesInteresse);
    setDiaInteresse(novoDiaInteresse);

    // Limpa os dados do nome social quando um novo nome principal é processado
    setNomeSocial('');
    setArcano('');
    setNomesSociais([]);

    const resultado = calcularNumeroHarmonico(novaDataNascimento);
    setHarmonicos(resultado);

    const expressao = calcularExpressao(novoNome);
    setNumeroExpressao(expressao);

    setPiramide(generateInvertedPyramid(novoNome));
  };

  // FUNÇÃO: Para adicionar nome social à lista
  const handleSaveNomeSocial = (nomeSocial, arcanoNumber) => {
    // Adiciona à lista de nomes sociais
    setNomesSociais(prev => [...prev, {
      nome: nomeSocial,
      arcano: arcanoNumber,
      dataCriacao: new Date().toLocaleDateString('pt-BR')
    }]);
    
    // Também define como nome social atual (mantém compatibilidade)
    setNomeSocial(nomeSocial);
    setArcano(arcanoNumber);
  };

  // FUNÇÃO: Para remover nome social da lista
  const handleRemoverNomeSocial = (index) => {
    setNomesSociais(prev => prev.filter((_, i) => i !== index));
  };

  const formatarData = (data) => {
    if (!data) return '';
    const [ano, mes, dia] = data.split('-');
    return `${dia}/${mes}/${ano}`;
  };

  // Cálculos principais
  const destino = calcularDestino(dataNascimento);
const expressao = calcularExpressao(nome);
const missao = calcularMissao(destino, expressao);
  const momentosDecisivos = calcularMomentosDecisivos(dataNascimento, calcularDestino(dataNascimento));
  const desafios = calcularDesafios(dataNascimento, calcularCicloVida(dataNascimento, calcularDestino(dataNascimento)));
  const harmonia = calcularHarmoniaConjugal(missao);

  // Cálculo dos Meses Pessoais Restantes
  const mesesPessoaisLista = calcularMesesPessoaisRestantes(dataNascimento, mesInteresse);

  // Função para alternar entre as abas
  const handleTabChange = (event, newIndex) => {
    setTabIndex(newIndex);
  };

  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <Sidebar
          darkMode={darkMode}
          toggleDarkMode={toggleDarkMode}
          onSalvarNome={handleSalvarNome}
          nomeCliente={nome}
          dataNascimento={dataNascimento}
          nomesSociais={nomesSociais}
        />
      </ThemeProvider>

      <ThemeProvider theme={lightTheme}>
        <CssBaseline />
        <div style={{ marginLeft: 240, padding: '16px' }}>
          {nome ? (
            <Box id="pdf-nome-numerologia" sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: 4 }}>
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
                  <TextField label="Missão" value={missao} disabled fullWidth sx={{ mt: 2 }} />
                  <TextField label="Dívidas Cármicas" value={calcularDividasCarmicas(dataNascimento, calcularExpressao(nome), calcularDestino(dataNascimento), calcularMotivacao(nome))} disabled fullWidth sx={{ mt: 2 }} />
                </Box>
                <Box sx={{ display: "flex", gap: 2 }}>
                  <TextField label="Lições Cármicas" value={calcularLicoesCarmicas(nome)} disabled fullWidth sx={{ mt: 2 }} />
                  <TextField label="Tendências Ocultas" value={calcularTendenciasOcultas(nome)} disabled fullWidth sx={{ mt: 2 }} />
                  <TextField label="Ano Pessoal" value={calcularAnoPessoal(dataNascimento)} disabled fullWidth sx={{ mt: 2 }} />
                  
                  <TextField label="Dia Pessoal" value={calcularDiaPessoal(dataNascimento, mesInteresse, diaInteresse)} disabled fullWidth sx={{ mt: 2 }} />
                  <TextField label="Subconsciente" value={calcularSubconsciente(calcularLicoesCarmicas(nome))} disabled fullWidth sx={{ mt: 2 }} />
                  <TextField label="Número Harmônico" value={harmonicos.length ? harmonicos.join(", ") : "Nenhum"} disabled fullWidth sx={{ mt: 2 }} />
                </Box>
                <Box sx={{ mt: 2, p: 2, border: "1px solid #ccc", borderRadius: 2 }}>
                  <TextField
                    label="Meses Pessoais"
                    value={mesesPessoaisLista
                      .map(item => `${item.nomeMes}/${item.ano} – ${item.valor}`)
                      .join('\n')
                    }
                    multiline
                    disabled
                    fullWidth
                    sx={{ mt: 2 }}
                  />
                </Box>
                <Box sx={{ display: "flex", gap: 2 }}>
                  <TextField label="Cores Favoráveis" value={calcularCoresFavoraveis(numeroExpressao)} disabled fullWidth sx={{ mt: 2 }} />
                  <TextField label="Nome social" value={nomeSocial} disabled fullWidth sx={{ mt: 2 }} />
                  <TextField label="Arcano Taro" value={arcanoPessoal} disabled  fullWidth sx={{ mt: 2 }} />
                  <TextField label="Arcano Cabalística" value={arcanoCabalistico} disabled  fullWidth sx={{ mt: 2 }} />
                </Box>

                {/* SEÇÃO: Lista de Nomes Sociais Salvos */}
                {nomesSociais.length > 0 && (
                  <Box sx={{ mt: 4, width: '100%' }}>
                    <Typography variant="h5" gutterBottom sx={{ color: 'primary.main' }}>
                      Nomes Sociais Salvos
                    </Typography>
                    <TableContainer component={Paper}>
                      <Table>
                        <TableHead>
                          <TableRow>
                            <StyledTableCell>Nome Social</StyledTableCell>
                            <StyledTableCell align="center">Arcano</StyledTableCell>
                            <StyledTableCell align="center">Data de Criação</StyledTableCell>
                            <StyledTableCell align="center">Significado do Arcano</StyledTableCell>
                            <StyledTableCell align="center">Ações</StyledTableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          {nomesSociais.map((nomeSocial, index) => (
                            <StyledTableRow key={index}>
                              <StyledTableCell component="th" scope="row">
                                <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
                                  {nomeSocial.nome}
                                </Typography>
                              </StyledTableCell>
                              <StyledTableCell align="center">
                                <Typography variant="h6" sx={{ color: 'success.main', fontWeight: 'bold' }}>
                                  {nomeSocial.arcano}
                                </Typography>
                              </StyledTableCell>
                              <StyledTableCell align="center">
                                {nomeSocial.dataCriacao}
                              </StyledTableCell>
                              <StyledTableCell align="center">
                                {arcanos[nomeSocial.arcano] ? (
                                  <Typography variant="body2" sx={{ fontStyle: 'italic' }}>
                                    {arcanos[nomeSocial.arcano].titulo}
                                  </Typography>
                                ) : (
                                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                    Descrição não disponível
                                  </Typography>
                                )}
                              </StyledTableCell>
                              <StyledTableCell align="center">
                                <Button 
                                  size="small" 
                                  color="error"
                                  onClick={() => handleRemoverNomeSocial(index)}
                                >
                                  Remover
                                </Button>
                              </StyledTableCell>
                            </StyledTableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </TableContainer>
                  </Box>
                )}

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

                  {/* Tabela dos Desafios */}
                  <Box sx={{ flex: 1 }}>
                    <Typography variant="h6" align="center">Desafios</Typography>
                    <TableContainer component={Paper}>
                      <Table sx={{ minWidth: 700 }} aria-label="customized table">
                        <TableHead>
                          <TableRow>
                            <StyledTableCell>Desafio</StyledTableCell>
                            <StyledTableCell align="right">Valor</StyledTableCell>
                            <StyledTableCell align="right">Período</StyledTableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          {desafios.map((desafio, index) => (
                            <StyledTableRow key={index}>
                              <StyledTableCell component="th" scope="row">
                                {desafio.nome}
                              </StyledTableCell>
                              <StyledTableCell align="right">{desafio.valor}</StyledTableCell>
                              <StyledTableCell align="right">{desafio.periodo}</StyledTableCell>
                            </StyledTableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </TableContainer>
                  </Box>
                </Box>

                {/* Tabela dos Momentos Decisivos e Harmonia Conjugal lado a lado */}
                <Box sx={{ display: 'flex', gap: 2, mt: 4 }}>
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

                  {/* Tabela da Harmonia Conjugal */}
                  <Box sx={{ flex: 1 }}>
                    <Typography variant="h6" align="center">
                      Harmonia Conjugal -{' '}
                      <Box component="span" sx={{ color: 'error.main' }}>
                        {harmonia?.numero}
                      </Box>
                    </Typography>
                    <TableContainer component={Paper}>
                      <Table sx={{ minWidth: 700 }} aria-label="customized table">
                        <TableHead>
                          <TableRow>
                            <StyledTableCell>#</StyledTableCell>
                            <StyledTableCell align="right"></StyledTableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          {harmonia && (
                            <>
                              <StyledTableRow>
                                <StyledTableCell component="th" scope="row">Vibra com</StyledTableCell>
                                <StyledTableCell align="right">{harmonia.vibraCom}</StyledTableCell>
                              </StyledTableRow>
                              <StyledTableRow>
                                <StyledTableCell component="th" scope="row">Atrai</StyledTableCell>
                                <StyledTableCell align="right">{harmonia.atrai}</StyledTableCell>
                              </StyledTableRow>
                              <StyledTableRow>
                                <StyledTableCell component="th" scope="row">É oposto</StyledTableCell>
                                <StyledTableCell align="right">{harmonia.oposto}</StyledTableCell>
                              </StyledTableRow>
                              <StyledTableRow>
                                <StyledTableCell component="th" scope="row">É passivo em relação a</StyledTableCell>
                                <StyledTableCell align="right">{harmonia.passivo}</StyledTableCell>
                              </StyledTableRow>
                            </>
                          )}
                        </TableBody>
                      </Table>
                    </TableContainer>
                  </Box>
                </Box>
              </Box>

              {/* Adicionando Tabs abaixo das tabelas */}
              <Box sx={{ width: '100%', mt: 4 }}>
                <Tabs value={tabIndex} onChange={handleTabChange} centered>
                  <Tab label="Pirâmide Invertida" />
                  <Tab label="Arcanos" />
                </Tabs>

                {/* Conteúdo das abas */}
                {tabIndex === 0 && (
                  <Box sx={{ mt: 2 }}>
                    <PiramideInvertida
                      dados={piramide}
                      onNomeSocialChange={handleSaveNomeSocial}
                    />
                  </Box>
                )}

                {tabIndex === 1 && (
                  <Box sx={{ mt: 2 }}>
                    <Typography variant="h6" gutterBottom>Arcanos Maiores</Typography>
                    <TableContainer component={Paper}>
                      <Table>
                        <TableHead>
                          <TableRow>
                            <StyledTableCell>Número</StyledTableCell>
                            <StyledTableCell>Título</StyledTableCell>
                            <StyledTableCell>Descrição</StyledTableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          {Object.entries(arcanos).map(([numero, arcano]) => (
                            <StyledTableRow key={numero}>
                              <StyledTableCell>
                                <Typography variant="h6" sx={{ fontWeight: 'bold', color: 'primary.main' }}>
                                  {numero}
                                </Typography>
                              </StyledTableCell>
                              <StyledTableCell>
                                <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
                                  {arcano.titulo}
                                </Typography>
                              </StyledTableCell>
                              <StyledTableCell>
                                <Typography variant="body2">
                                  {arcano.descricao}
                                </Typography>
                              </StyledTableCell>
                            </StyledTableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </TableContainer>
                  </Box>
                )}
              </Box>
            </Box>
          ) : (
            // Mensagem de boas-vindas
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
          )}
        </div>
      </ThemeProvider>
    </>
  );
};

export default App;