// src/App.jsx
import React, { useState } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Box, Divider, TextField } from '@mui/material'; // Importe o TextField
import Sidebar from './components/Sidebar';
import NomeNumerologia from './components/NomeNumerologia';
import { tabelaNumeros } from './components/TabelaNumerologia'; // Importe a tabela de números
import { calcularImpressao } from './components/CalculoImpressao';
import { calcularExpressao } from './components/CalculoExpressao';
import { calcularDestino } from './components/CalculoDestino';
import { calcularMotivacao } from './components/CalculoMotivacao';
import { calcularMissao } from './components/CalculoMissao'; // Importar a função correta
import { calcularDividasCarmicas } from './components/CalculoDividasCarmicas'; // Importar
import { calcularLicoesCarmicas } from './components/CalculoLicoesCarmicas'; // Importar
import { calcularTendenciasOcultas } from './components/CalculoTendenciasOcultas'; // Importar
import { calcularAnoPessoal } from './components/CalculoAnoPessoal'; // Importar


const App = () => {
  // Estado para controlar o tema do Sidebar (escuro ou claro)
  const [darkMode, setDarkMode] = useState(true);

  // Estado para armazenar o nome inserido no diálogo
  const [nome, setNome] = useState('');

  // Estado para armazenar a data de nascimento inserida no diálogo
  const [dataNascimento, setDataNascimento] = useState('');

  // Tema escuro para o Sidebar
  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });

  // Tema claro para o conteúdo principal
  const lightTheme = createTheme({
    palette: {
      mode: 'light',
    },
  });

  // Função para alternar o tema do Sidebar
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  // Função para atualizar o nome e a data de nascimento (será passada para o Sidebar e NovoMapaDialog)
  const handleSalvarNome = (novoNome, novaDataNascimento) => {
    setNome(novoNome);
    setDataNascimento(novaDataNascimento);
  };

  // Função para formatar a data no formato dd/mm/aaaa
  const formatarData = (data) => {
    if (!data) return ''; // Se não houver data, retorna uma string vazia

    // Divide a data no formato yyyy-mm-dd
    const [ano, mes, dia] = data.split('-');

    // Retorna a data no formato dd/mm/aaaa
    return `${dia}/${mes}/${ano}`;
  };



  return (
    <>
      {/* Tema escuro para o Sidebar */}
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <Sidebar darkMode={darkMode} toggleDarkMode={toggleDarkMode} onSalvarNome={handleSalvarNome} />
      </ThemeProvider>

      {/* Tema claro para o conteúdo principal */}
      <ThemeProvider theme={lightTheme}>
        <CssBaseline />
        <div style={{ marginLeft: 240, padding: '16px' }}>
          {/* Renderiza o nome com os números correspondentes */}
          {nome && (
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
                marginTop: 4,
              }}
            >
              <NomeNumerologia nome={nome} />
              <Divider orientation="vertical" flexItem />
              <Divider sx={{ width: '100%', my: 2 }} />

              {/* Exibe o resultado da motivação em um TextField desabilitado */}
              <Box sx={{ display: "flex", flexDirection: "column", gap: 2, width: "100%" }}>
                {/* Primeira linha com 4 TextFields */}
                <Box sx={{ display: "flex", gap: 2 }}>
                  <TextField
                    label="Motivação"
                    value={calcularMotivacao(nome)}
                    disabled // Desabilita a edição
                    fullWidth
                    sx={{ mt: 2 }} // Margem no topo
                  />
                  <TextField
                    label="Impressão"
                    value={calcularImpressao(nome)}
                    disabled // Desabilita a edição
                    fullWidth
                    sx={{ mt: 2 }} // Margem no topo
                  />
                  <TextField
                    label="Expressão"
                    value={calcularExpressao(nome)}
                    disabled
                    fullWidth
                    sx={{ mt: 2 }} // Margem no topo
                  />
                  <TextField
                    label="Data Nascimento"
                    value={formatarData(dataNascimento)} // Exibe a data formatada
                    disabled
                    fullWidth
                    sx={{ mt: 2 }} // Margem no topo
                  />
                </Box>

                {/* Segunda linha com 3 TextFields */}
                <Box sx={{ display: "flex", gap: 2 }}>
                  <TextField
                    label="Número de Destino"
                    value={calcularDestino(dataNascimento)}
                    disabled
                    fullWidth
                    sx={{ mt: 2 }}
                  />
                  <TextField
                    label="Missão"
                    value={calcularMissao(nome, dataNascimento)} // Chama a função com os parâmetros corretos
                    disabled
                    fullWidth
                    sx={{ mt: 2 }}
                  />
                  <TextField
                    label="Dívidas Cármicas"
                    value={calcularDividasCarmicas(dataNascimento, calcularExpressao(nome), calcularDestino(dataNascimento), calcularMotivacao(nome))}
                    disabled
                    fullWidth
                    sx={{ mt: 2 }}
                  />
                </Box>

                {/* Tercira linha com  TextFields */}
                <Box sx={{ display: "flex", gap: 2 }}>
                  <TextField
                    label="Lições Cármicas"
                    value={calcularLicoesCarmicas(nome)}
                    disabled
                    fullWidth
                    sx={{ mt: 2 }}
                  />
                  <TextField
                    label="Tendências Ocultas"
                    value={calcularTendenciasOcultas(nome)}
                    disabled
                    fullWidth
                    sx={{ mt: 2 }}
                  />
                  <TextField
                    label="Ano Pessoal"
                    value={calcularAnoPessoal(dataNascimento)}
                    disabled
                    fullWidth
                    sx={{ mt: 2 }}
                  />

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