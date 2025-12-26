// src/components/CalculoArcano.js
import { generateInvertedPyramid } from "./generateInvertedPyramid";
/**
 * Calcula o Arcano Pessoal baseado na data de nascimento.
 * Regra: Soma dia + mês + ano. 
 * Se o resultado > 22, soma-se os algarismos do resultado até ser <= 22.
 * * Exemplo: 27/05/1984
 * 27 + 05 + 1984 = 2016
 * 2016 > 22 -> 2 + 0 + 1 + 6 = 9 (Arcano 9)
 * * Exemplo: 15/03/1970
 * 15 + 03 + 1970 = 1988
 * 1988 > 22 -> 1 + 9 + 8 + 8 = 26
 * 26 > 22 -> 2 + 6 = 8 (Arcano 8)
 */
export const calcularArcanoPessoal = (dataNascimento) => {
  if (!dataNascimento) return '';

  // Divide a data (esperado formato AAAA-MM-DD do input date HTML)
  const [anoStr, mesStr, diaStr] = dataNascimento.split('-');
  
  const dia = parseInt(diaStr, 10);
  const mes = parseInt(mesStr, 10);
  const ano = parseInt(anoStr, 10);

  if (isNaN(dia) || isNaN(mes) || isNaN(ano)) return '';

  // 1. Soma inicial: Dia + Mês + Ano
  let soma = dia + mes + ano;

  // 2. Redução até que seja <= 22
  while (soma > 22) {
    const digitos = soma.toString().split('').map(Number);
    soma = digitos.reduce((acc, curr) => acc + curr, 0);
  }

  return soma;
};

/**
 * Calcula o Arcano Cabalístico (Ponta da Pirâmide do NOME COMPLETO).
 * Ex: Dalmo dos Santos Cabral -> Retorna 9
 */
export const calcularArcanoCabalistico = (nomeCompleto) => {
  if (!nomeCompleto) return "";

  // 1. Remove acentos para garantir a contagem padrão (E=5, não É=7)
  // IMPORTANTE: Não usamos .split(" ")[0] aqui, pois queremos o nome todo.
  const nomeProcessado = nomeCompleto
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, "")
    .toUpperCase();

  // 2. Gera a pirâmide numérica com o nome completo
  // A sua função generateInvertedPyramid já remove os espaços automaticamente.
  const piramide = generateInvertedPyramid(nomeProcessado);

  // 3. Pega o valor da ÚLTIMA linha (a ponta final do triângulo)
  if (piramide && piramide.length > 0) {
    const ultimaLinha = piramide[piramide.length - 1];
    
    if (ultimaLinha && ultimaLinha.data && ultimaLinha.data.length === 1) {
      return ultimaLinha.data[0]; // Retorna o único número que sobrou (ex: 9)
    }
  }
  
  return "";
};