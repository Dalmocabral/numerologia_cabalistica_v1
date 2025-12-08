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
import TabelaArcanosTransito from './components/TabelaArcanosTransito';
import { calcularDiasFavoraveis } from './components/CalculoDiasFavoraveis';

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
  const diasFavoraveis = calcularDiasFavoraveis(dataNascimento);
  const [assinatura, setAssinatura] = useState(null);
  const [nomeCompanheiro, setNomeCompanheiro] = useState('');
  const [dataNascCompanheiro, setDataNascCompanheiro] = useState('');

  // Estado para armazenar múltiplos nomes sociais
  const [nomesSociais, setNomesSociais] = useState([]);

  const darkTheme = createTheme({ palette: { mode: 'dark' } });
  const lightTheme = createTheme({ palette: { mode: 'light' } });

  const toggleDarkMode = () => setDarkMode(!darkMode);

  const handleSalvarNome = (novoNome, novaDataNascimento, novoMesInteresse, novoDiaInteresse, novoNomeComp, novaDataComp) => {
    // Dados do Cliente
    setNome(novoNome);
    setDataNascimento(novaDataNascimento);
    setMesInteresse(novoMesInteresse);
    setDiaInteresse(novoDiaInteresse);

    // Dados do Companheiro (CORREÇÃO AQUI: Usar os nomes corretos dos parâmetros)
    setNomeCompanheiro(novoNomeComp);
    setDataNascCompanheiro(novaDataComp);

    // Limpezas
    setNomeSocial('');
    setArcano('');
    setNomesSociais([]);
    setAssinatura(null);

    // Cálculos Iniciais
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

  let harmoniaCompanheiro = null;
  if (nomeCompanheiro && dataNascCompanheiro) {
    const destinoComp = calcularDestino(dataNascCompanheiro);
    const expressaoComp = calcularExpressao(nomeCompanheiro);
    const missaoComp = calcularMissao(destinoComp, expressaoComp);
    harmoniaCompanheiro = calcularHarmoniaConjugal(missaoComp);
  }

  // Cálculo dos Meses Pessoais Restantes
  const mesesPessoaisLista = calcularMesesPessoaisRestantes(dataNascimento, mesInteresse);

  // Função para alternar entre as abas
  const handleTabChange = (event, newIndex) => {
    setTabIndex(newIndex);
  };

  // 2. NOVA FUNÇÃO PARA SALVAR A ASSINATURA
  const handleSalvarAssinatura = (dadosAssinatura) => {
    setAssinatura(dadosAssinatura);
  };

  // Verifica se o número base está presente na lista de números da linha
  const isMatch = (numerosDaLinha, baseParaComparar) => {
    if (!numerosDaLinha || !baseParaComparar) return false;
    // Converte para string e verifica se a base está inclusa
    // Ex: "1, 5, 9" inclui "5"? Sim.
    const lista = numerosDaLinha.toString().split(',').map(n => n.trim());
    return lista.includes(baseParaComparar.toString());
  };

  // Função para verificar comparações na Harmonia Conjugal
  const isComparacaoHarmonia = (campo, harmoniaAtual, harmoniaOutra) => {
    // Se não tiver companheiro, não há comparação
    if (!harmoniaOutra) return false;

    // Se não tiver o campo no objeto atual, retorna false
    if (!harmoniaAtual || !harmoniaAtual[campo]) return false;

    // Pega o número base da outra pessoa
    const numeroBaseOutra = harmoniaOutra.numero.toString();

    // Pega os números do campo atual (ex: "1, 5, 9")
    const numerosAtuais = harmoniaAtual[campo].toString().split(',').map(num => num.trim());

    // Verifica se o número base da outra pessoa está presente na lista atual
    return numerosAtuais.includes(numeroBaseOutra);
  };

  // Mantenha também a função original se ainda precisar dela para outras coisas
  const isResultadoIncomum = (valor) => {
    if (!valor || valor === '') return false;
    if (valor.includes('-')) return true;
    if (valor.includes('0')) return true;

    const numeros = valor.split(',').map(num => num.trim());
    return numeros.some(num => {
      const numInt = parseInt(num);
      return numInt <= 0 || numInt === 13;
    });
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
          onSaveNomeSocial={handleSaveNomeSocial}
          onSalvarAssinatura={handleSalvarAssinatura}
          assinatura={assinatura}
          nomeCompanheiro={nomeCompanheiro}           // <--- PASSAR AQUI
          dataNascimentoCompanheiro={dataNascCompanheiro}
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
                <Box sx={{ mt: 2 }}>
                  <TextField
                    label="Dias do Mês Favoráveis"
                    value={diasFavoraveis}
                    disabled
                    fullWidth

                  />
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
                  <TextField label="Arcano Taro" value={arcanoPessoal} disabled fullWidth sx={{ mt: 2 }} />
                  <TextField label="Arcano Cabalística" value={arcanoCabalistico} disabled fullWidth sx={{ mt: 2 }} />
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

                {/* 4. EXIBIR A ASSINATURA NA TELA SE ELA EXISTIR */}
                {/* 4. EXIBIR A ASSINATURA NA TELA (FORMATO TABELA) */}
                {assinatura && (
                  <Box sx={{ mt: 4, width: '100%' }}>
                    <Typography variant="h5" gutterBottom sx={{ color: 'success.main', display: 'flex', alignItems: 'center', gap: 1 }}>
                      Assinatura do Poder Escolhida
                    </Typography>

                    <TableContainer component={Paper} sx={{ border: '2px solid #4caf50' }}>
                      <Table>
                        <TableHead>
                          <TableRow>
                            <StyledTableCell>Assinatura</StyledTableCell>
                            <StyledTableCell align="center">Arcano Regente</StyledTableCell>
                            <StyledTableCell align="center">Significado</StyledTableCell>
                            <StyledTableCell align="center">Ações</StyledTableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          <StyledTableRow>
                            {/* Coluna da Assinatura */}
                            <StyledTableCell component="th" scope="row">
                              <Typography variant="h5" sx={{ fontWeight: 'bold', letterSpacing: 2, color: 'primary.main' }}>
                                {assinatura.assinatura}
                              </Typography>
                            </StyledTableCell>

                            {/* Coluna do Número do Arcano */}
                            <StyledTableCell align="center">
                              <Box sx={{
                                display: 'inline-flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                width: 40,
                                height: 40,
                                borderRadius: '50%',
                                bgcolor: 'success.light',
                                color: 'success.dark',
                                fontWeight: 'bold',
                                fontSize: '1.2rem'
                              }}>
                                {assinatura.arcanoRegente}
                              </Box>
                            </StyledTableCell>

                            {/* Coluna do Título do Arcano */}
                            <StyledTableCell align="center">
                              {arcanos[assinatura.arcanoRegente] ? (
                                <Box>
                                  <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
                                    {arcanos[assinatura.arcanoRegente].titulo}
                                  </Typography>
                                  <Typography variant="caption" color="textSecondary">
                                    {arcanos[assinatura.arcanoRegente].descricao.substring(0, 60)}...
                                  </Typography>
                                </Box>
                              ) : (
                                <Typography variant="body2" color="textSecondary">Indisponível</Typography>
                              )}
                            </StyledTableCell>

                            {/* Botão de Remover */}
                            <StyledTableCell align="center">
                              <Button
                                size="small"
                                color="error"
                                variant="outlined"
                                onClick={() => setAssinatura(null)}
                              >
                                Remover
                              </Button>
                            </StyledTableCell>
                          </StyledTableRow>
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

                {/* Container Principal para Momentos e Harmonia */}
                <Box sx={{ mt: 4, display: 'flex', flexDirection: 'column', gap: 4 }}>

                  {/* 1. MOMENTOS DECISIVOS (Largura Total para melhor leitura) */}
                  <Box>
                    <Typography variant="h6" align="center" gutterBottom sx={{ color: 'primary.main' }}>
                      Momentos Decisivos
                    </Typography>
                    <TableContainer component={Paper}>
                      <Table size="small">
                        <TableHead>
                          <TableRow>
                            <StyledTableCell>Energia</StyledTableCell>
                            <StyledTableCell align="center">Idade</StyledTableCell>
                            <StyledTableCell align="center">Período</StyledTableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          {momentosDecisivos.map((momento, index) => {
                            const startAge = index === 0 ? 0 : momentosDecisivos[index - 1].fim - new Date(dataNascimento).getFullYear();
                            const endAge = momento.fim === '...' ? '...' : (startAge + (momento.fim - momento.inicio));
                            const labelIdade = momento.fim === '...'
                              ? `${startAge} anos em diante`
                              : `${startAge} até ${endAge} anos`;
                            const labelPeriodo = momento.fim === '...'
                              ? `${momento.inicio} em diante`
                              : `${momento.inicio} a ${momento.fim}`;

                            return (
                              <StyledTableRow key={index}>
                                <StyledTableCell component="th" scope="row">
                                  <Typography fontWeight="bold">{momento.momento}</Typography>
                                </StyledTableCell>
                                <StyledTableCell align="center">{labelIdade}</StyledTableCell>
                                <StyledTableCell align="center">{labelPeriodo}</StyledTableCell>
                              </StyledTableRow>
                            );
                          })}
                        </TableBody>
                      </Table>
                    </TableContainer>
                  </Box>

                  {/* 2. HARMONIA CONJUGAL (Lado a Lado se tiver companheiro) */}
                  {/* 2. HARMONIA CONJUGAL (Lado a Lado se tiver companheiro) */}
                  <Box>
                    <Typography variant="h6" align="center" gutterBottom sx={{ color: 'primary.main' }}>
                      Análise de Harmonia Conjugal
                    </Typography>

                    <Box sx={{
                      display: 'flex',
                      gap: 2,
                      flexDirection: { xs: 'column', md: 'row' },
                      justifyContent: 'center'
                    }}>

                      {/* Tabela Cliente */}
                      {harmonia && (
                        <Box sx={{ flex: 1, maxWidth: harmoniaCompanheiro ? '50%' : '100%' }}>
                          <Typography variant="subtitle2" align="center" sx={{ color: 'primary.dark', fontWeight: 'bold', mb: 1 }}>
                            {nome} (Base: {harmonia.numero})
                          </Typography>
                          <TableContainer component={Paper} elevation={2}>
                            <Table size="small">
                              <TableHead>
                                <TableRow>
                                  <StyledTableCell>Tipo</StyledTableCell>
                                  <StyledTableCell align="center">Números</StyledTableCell>
                                </TableRow>
                              </TableHead>
                              <TableBody>
                                <StyledTableRow>
                                  <StyledTableCell>Vibra com</StyledTableCell>
                                  <StyledTableCell
                                    align="center"
                                    sx={{
                                      bgcolor: isComparacaoHarmonia('vibraCom', harmonia, harmoniaCompanheiro) ? '#e8f5e9' : 'inherit',
                                      color: isComparacaoHarmonia('vibraCom', harmonia, harmoniaCompanheiro) ? '#1b5e20' : 'inherit',
                                      fontWeight: isComparacaoHarmonia('vibraCom', harmonia, harmoniaCompanheiro) ? 'bold' : 'normal',
                                      borderLeft: isComparacaoHarmonia('vibraCom', harmonia, harmoniaCompanheiro) ? '3px solid #4caf50' : 'none'
                                    }}
                                  >
                                    {harmonia.vibraCom}
                                  </StyledTableCell>
                                </StyledTableRow>

                                <StyledTableRow>
                                  <StyledTableCell>Atrai</StyledTableCell>
                                  <StyledTableCell
                                    align="center"
                                    sx={{
                                      bgcolor: isComparacaoHarmonia('atrai', harmonia, harmoniaCompanheiro) ? '#e8f5e9' : 'inherit',
                                      color: isComparacaoHarmonia('atrai', harmonia, harmoniaCompanheiro) ? '#1b5e20' : 'inherit',
                                      fontWeight: isComparacaoHarmonia('atrai', harmonia, harmoniaCompanheiro) ? 'bold' : 'normal',
                                      borderLeft: isComparacaoHarmonia('atrai', harmonia, harmoniaCompanheiro) ? '3px solid #4caf50' : 'none'
                                    }}
                                  >
                                    {harmonia.atrai}
                                  </StyledTableCell>
                                </StyledTableRow>

                                <StyledTableRow>
                                  <StyledTableCell>É oposto</StyledTableCell>
                                  <StyledTableCell
                                    align="center"
                                    sx={{
                                      bgcolor: isComparacaoHarmonia('oposto', harmonia, harmoniaCompanheiro) ? '#e8f5e9' : 'inherit',
                                      color: isComparacaoHarmonia('oposto', harmonia, harmoniaCompanheiro) ? '#1b5e20' : 'inherit',
                                      fontWeight: isComparacaoHarmonia('oposto', harmonia, harmoniaCompanheiro) ? 'bold' : 'normal',
                                      borderLeft: isComparacaoHarmonia('oposto', harmonia, harmoniaCompanheiro) ? '3px solid #4caf50' : 'none'
                                    }}
                                  >
                                    {harmonia.oposto}
                                  </StyledTableCell>
                                </StyledTableRow>

                                <StyledTableRow>
                                  <StyledTableCell>É passivo</StyledTableCell>
                                  <StyledTableCell
                                    align="center"
                                    sx={{
                                      bgcolor: isComparacaoHarmonia('passivo', harmonia, harmoniaCompanheiro) ? '#e8f5e9' : 'inherit',
                                      color: isComparacaoHarmonia('passivo', harmonia, harmoniaCompanheiro) ? '#1b5e20' : 'inherit',
                                      fontWeight: isComparacaoHarmonia('passivo', harmonia, harmoniaCompanheiro) ? 'bold' : 'normal',
                                      borderLeft: isComparacaoHarmonia('passivo', harmonia, harmoniaCompanheiro) ? '3px solid #4caf50' : 'none'
                                    }}
                                  >
                                    {harmonia.passivo}
                                  </StyledTableCell>
                                </StyledTableRow>
                              </TableBody>
                            </Table>
                          </TableContainer>
                        </Box>
                      )}

                      {/* Tabela Companheiro */}
                      {harmoniaCompanheiro && (
                        <Box sx={{ flex: 1, maxWidth: '50%' }}>
                          <Typography variant="subtitle2" align="center" sx={{ color: 'secondary.dark', fontWeight: 'bold', mb: 1 }}>
                            {nomeCompanheiro} (Base: {harmoniaCompanheiro.numero})
                          </Typography>
                          <TableContainer component={Paper} elevation={2}>
                            <Table size="small">
                              <TableHead>
                                <TableRow>
                                  <StyledTableCell sx={{ bgcolor: 'secondary.main' }}>Tipo</StyledTableCell>
                                  <StyledTableCell align="center" sx={{ bgcolor: 'secondary.main' }}>Números</StyledTableCell>
                                </TableRow>
                              </TableHead>
                              <TableBody>
                                <StyledTableRow>
                                  <StyledTableCell>Vibra com</StyledTableCell>
                                  <StyledTableCell
                                    align="center"
                                    sx={{
                                      bgcolor: isComparacaoHarmonia('vibraCom', harmoniaCompanheiro, harmonia) ? '#e8f5e9' : 'inherit',
                                      color: isComparacaoHarmonia('vibraCom', harmoniaCompanheiro, harmonia) ? '#1b5e20' : 'inherit',
                                      fontWeight: isComparacaoHarmonia('vibraCom', harmoniaCompanheiro, harmonia) ? 'bold' : 'normal',
                                      borderLeft: isComparacaoHarmonia('vibraCom', harmoniaCompanheiro, harmonia) ? '3px solid #4caf50' : 'none'
                                    }}
                                  >
                                    {harmoniaCompanheiro.vibraCom}
                                  </StyledTableCell>
                                </StyledTableRow>

                                <StyledTableRow>
                                  <StyledTableCell>Atrai</StyledTableCell>
                                  <StyledTableCell
                                    align="center"
                                    sx={{
                                      bgcolor: isComparacaoHarmonia('atrai', harmoniaCompanheiro, harmonia) ? '#e8f5e9' : 'inherit',
                                      color: isComparacaoHarmonia('atrai', harmoniaCompanheiro, harmonia) ? '#1b5e20' : 'inherit',
                                      fontWeight: isComparacaoHarmonia('atrai', harmoniaCompanheiro, harmonia) ? 'bold' : 'normal',
                                      borderLeft: isComparacaoHarmonia('atrai', harmoniaCompanheiro, harmonia) ? '3px solid #4caf50' : 'none'
                                    }}
                                  >
                                    {harmoniaCompanheiro.atrai}
                                  </StyledTableCell>
                                </StyledTableRow>

                                <StyledTableRow>
                                  <StyledTableCell>É oposto</StyledTableCell>
                                  <StyledTableCell
                                    align="center"
                                    sx={{
                                      bgcolor: isComparacaoHarmonia('oposto', harmoniaCompanheiro, harmonia) ? '#e8f5e9' : 'inherit',
                                      color: isComparacaoHarmonia('oposto', harmoniaCompanheiro, harmonia) ? '#1b5e20' : 'inherit',
                                      fontWeight: isComparacaoHarmonia('oposto', harmoniaCompanheiro, harmonia) ? 'bold' : 'normal',
                                      borderLeft: isComparacaoHarmonia('oposto', harmoniaCompanheiro, harmonia) ? '3px solid #4caf50' : 'none'
                                    }}
                                  >
                                    {harmoniaCompanheiro.oposto}
                                  </StyledTableCell>
                                </StyledTableRow>

                                <StyledTableRow>
                                  <StyledTableCell>É passivo</StyledTableCell>
                                  <StyledTableCell
                                    align="center"
                                    sx={{
                                      bgcolor: isComparacaoHarmonia('passivo', harmoniaCompanheiro, harmonia) ? '#e8f5e9' : 'inherit',
                                      color: isComparacaoHarmonia('passivo', harmoniaCompanheiro, harmonia) ? '#1b5e20' : 'inherit',
                                      fontWeight: isComparacaoHarmonia('passivo', harmoniaCompanheiro, harmonia) ? 'bold' : 'normal',
                                      borderLeft: isComparacaoHarmonia('passivo', harmoniaCompanheiro, harmonia) ? '3px solid #4caf50' : 'none'
                                    }}
                                  >
                                    {harmoniaCompanheiro.passivo}
                                  </StyledTableCell>
                                </StyledTableRow>
                              </TableBody>
                            </Table>
                          </TableContainer>
                        </Box>
                      )}
                    </Box>
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
              <Box sx={{ width: '100%', mt: 4 }}>
                <TabelaArcanosTransito nome={nome} dataNascimento={dataNascimento} />
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