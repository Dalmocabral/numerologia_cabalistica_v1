import { tabelaNumerologia } from './TabelaNumerologia';

const reduzirNumero = (num) => {
  while (num >= 10 && num !== 11 && num !== 22) {
    num = num.toString().split('').reduce((acc, digit) => acc + Number(digit), 0);
  }
  return num;
};

export const calcularHarmoniaConjugal = (missao) => {
  const numeroReduzido = reduzirNumero(missao);

  // Encontrar o objeto correspondente na tabela
  const harmonia = tabelaNumerologia.find((item) => item.numero === numeroReduzido);

  if (!harmonia) return null;

  return {
    numero: numeroReduzido,
    vibraCom: harmonia['Vibra com'],
    atrai: harmonia['Atrai'].join(', '),
    oposto: harmonia['É oposto'].join(', '),
    passivo: harmonia['É passivo em relação a'].join(', '),
  };
};
