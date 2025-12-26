// src/components/CalculoArcanosTransito.js
import { tabelaNumeros, tabelaAcentos } from "./TabelaNumerologia";

const reduzir = (n) => {
  while (n > 9) {
    n = n.toString().split('').reduce((acc, d) => acc + parseInt(d), 0);
  }
  return n;
};

const getValorLetra = (letra) => {
  if (!letra) return 0;
  let l = letra.toUpperCase();
  const acentos = l.normalize('NFD').match(/[\u0300-\u036f]/g);
  const base = l.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  let val = tabelaNumeros[base] || 0;
  if (acentos) {
    acentos.forEach(a => { if (tabelaAcentos[a]) val += tabelaAcentos[a]; });
  }
  return val;
};

export const calcularArcanosTransito = (nome, dataNascimento) => {
  if (!nome || !dataNascimento) return [];

  const partesData = dataNascimento.split('-'); 
  const diaNasc = parseInt(partesData[2]); 
  if (isNaN(diaNasc)) return [];

  const nomeLimpo = nome.replace(/\s+/g, '').toUpperCase();
  const letras = nomeLimpo.split('');

  const linhaVermelha = letras.map(letra => {
    const valorOriginal = getValorLetra(letra);
    return reduzir(valorOriginal + diaNasc);
  });

  const arcanosList = [];
  for (let i = 0; i < linhaVermelha.length - 1; i++) {
    const num1 = linhaVermelha[i];
    const num2 = linhaVermelha[i+1];
    arcanosList.push(parseInt(`${num1}${num2}`));
  }

  // --- MUDANÇA AQUI: Duração Fixa de 4 Anos ---
  const duracaoAnos = 4; 
  
  let dataAtual = new Date(partesData[0], partesData[1] - 1, partesData[2]);
  let idadeAtual = 0;

  const resultado = arcanosList.map((arcano) => {
    const inicioData = new Date(dataAtual);
    const inicioIdade = idadeAtual;

    // Avança 4 anos
    idadeAtual += duracaoAnos;
    dataAtual.setFullYear(dataAtual.getFullYear() + duracaoAnos);

    // Verifica se é o período atual
    const hoje = new Date();
    // Ajuste fino: O fim é um dia antes do próximo aniversário de ciclo
    const fimParaComparacao = new Date(dataAtual);
    fimParaComparacao.setDate(fimParaComparacao.getDate() - 1);
    
    const isAtual = hoje >= inicioData && hoje <= fimParaComparacao;

    return {
      arcano: arcano,
      inicio: inicioData.toLocaleDateString('pt-BR'),
      fim: fimParaComparacao.toLocaleDateString('pt-BR'),
      idadeInicio: inicioIdade,
      idadeFim: idadeAtual,
      isAtual: isAtual // Flag para identificar o período vigente
    };
  });

  return resultado;
};