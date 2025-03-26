import { tabelaNumeros, tabelaAcentos } from "../components/TabelaNumerologia";

// Função para calcular valor com acento (mantida igual)
const calcularValorComAcento = (letra) => {
  if (letra.trim() === "") return 0;

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
    .filter(char => /[A-ZÇÁÉÍÓÚÀÈÌÒÙÂÊÎÔÛÃÕÄËÏÖÜ]/.test(char)) // Remover espaços
    .map((char) => calcularValorComAcento(char)); // Calcular diretamente sem zeros
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

  // Normalizamos e filtramos para manter apenas letras válidas
  const letras = name
    .normalize('NFC')
    .toUpperCase()
    .split("")
    .filter(char => /[A-ZÇÁÉÍÓÚÀÈÌÒÙÂÊÎÔÛÃÕÄËÏÖÜ]/.test(char)); // Remover espaços

  rows.push({
    type: 'letters',
    data: letras
  });

  // Converter nome para números (sem incluir espaços)
  let currentRow = nameToNumbers(name);
  rows.push({
    type: 'numbers',
    data: [...currentRow]
  });

  // Construir a pirâmide invertida
  while (currentRow.length > 1) {
    currentRow = currentRow
      .map((num, i, arr) => {
        if (i < arr.length - 1) {
          let soma = parseInt(num) + parseInt(arr[i + 1]); 
          return reduzirNumero(soma); // Aplicar a redução numerológica
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
  let sequenceStart = 0;

  for (let i = 0; i < row.length; i++) {
    if (row[i] === currentNum) {
      count++;
      
      // Quando encontramos exatamente 3 números iguais
      if (count === 3) {
        // Marca os 3 primeiros da sequência
        sequences.push(i-2, i-1, i);
      }
      
      // Ignora qualquer número além do terceiro na sequência
      if (count > 3) {
        continue;
      }
    } else {
      currentNum = row[i];
      count = 1;
      sequenceStart = i;
    }
  }

  return sequences;
};
