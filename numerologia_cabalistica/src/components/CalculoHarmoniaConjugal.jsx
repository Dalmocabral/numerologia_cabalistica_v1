import { tabelaNumerologia } from './TabelaNumerologia';

// Mantenha sua função original para outros cálculos
const reduzirNumero = (num) => {
  while (num >= 10 && num !== 11 && num !== 22) {
    num = num.toString().split('').reduce((acc, digit) => acc + Number(digit), 0);
  }
  return num;
};

export const calcularHarmoniaConjugal = (missao) => {
  // 1. Pega o número da missão (que pode vir como 11 ou 22)
  let numeroParaHarmonia = reduzirNumero(missao);

  // 2. CORREÇÃO: Se for Mestre, reduz para um dígito para achar na tabela de Harmonia
  if (numeroParaHarmonia === 11) {
      numeroParaHarmonia = 2;
  } else if (numeroParaHarmonia === 22) {
      numeroParaHarmonia = 4;
  }

  // 3. Agora busca na tabela (vai buscar o 2 ou o 4 em vez de 11 ou 22)
  const harmonia = tabelaNumerologia.find((item) => item.numero === numeroParaHarmonia);

  if (!harmonia) return null;

  return {
    numero: numeroParaHarmonia, // Mostra o número base (2 ou 4)
    vibraCom: harmonia['Vibra com'],
    atrai: harmonia['Atrai'].join(', '),
    oposto: harmonia['É oposto'].join(', '),
    passivo: harmonia['É passivo em relação a'].join(', '),
  };
};