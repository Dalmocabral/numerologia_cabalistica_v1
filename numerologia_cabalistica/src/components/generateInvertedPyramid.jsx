import { tabelaNumeros, tabelaAcentos } from "../components/TabelaNumerologia";

// Função para calcular valor com acento OU caractere especial
const calcularValorComAcento = (letra) => {
  if (letra.trim() === "") return 0;

  // Se for um caractere especial listado na tabela (ex: apostrofo)
  if (tabelaAcentos[letra]) {
    return tabelaAcentos[letra];
  }

  const acentos = letra.normalize('NFD').match(/[\u0300-\u036f]/g);
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

// Converte um nome para números numerológicos sem incluir espaços
export const nameToNumbers = (name) => {
  return name
    .normalize('NFC')
    .toUpperCase()
    .split("")
    // Incluindo apóstrofo e letras acentuadas
    .filter(char => /[A-ZÇÁÉÍÓÚÀÈÌÒÙÂÊÎÔÛÃÕÄËÏÖÜ'’]/.test(char))
    .map((char) => calcularValorComAcento(char));
};

// Função para reduzir números maiores que 9 somando seus dígitos
const reduzirNumero = (num) => {
  while (num > 9) {
    num = [...num.toString()].reduce((acc, digit) => acc + parseInt(digit), 0);
  }
  return num;
};

// Função para gerar a pirâmide invertida
export const generateInvertedPyramid = (name) => {
  if (!name || name.trim() === '') return [];
  
  let rows = [];

  const letras = name
    .normalize('NFC')
    .toUpperCase()
    .split("")
    .filter(char => /[A-ZÇÁÉÍÓÚÀÈÌÒÙÂÊÎÔÛÃÕÄËÏÖÜ'’]/.test(char));

  rows.push({
    type: 'letters',
    data: letras
  });

  let currentRow = nameToNumbers(name);

  rows.push({
    type: 'numbers',
    data: [...currentRow]
  });

  // Construção da pirâmide invertida
  while (currentRow.length > 1) {
    currentRow = currentRow
      .map((num, i, arr) => {
        if (i < arr.length - 1) {
          let soma = parseInt(num) + parseInt(arr[i + 1]);
          return reduzirNumero(soma);
        }
        return null;
      })
      .filter(num => num !== null);

    rows.push({
      type: 'numbers',
      data: [...currentRow]
    });
  }

  return rows;
};

export const findSequences = (row) => {
  const sequences = [];
  let currentNum = null;
  let count = 1;

  for (let i = 0; i < row.length; i++) {
    if (row[i] === currentNum) {
      count++;
      
      if (count === 3) {
        sequences.push(i-2, i-1, i);
      }

      if (count > 3) continue;

    } else {
      currentNum = row[i];
      count = 1;
    }
  }

  return sequences;
};
