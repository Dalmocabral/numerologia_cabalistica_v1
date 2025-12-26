//src/components/CalculoImpressao.jsx

import { tabelaNumeros } from './TabelaNumerologia';

export const calcularImpressao = (nome) => {
  const nomeFormatado = nome.toUpperCase().replace(/\s/g, '');
  const consoantes = nomeFormatado.split('').filter((letra) => !['A', 'E', 'I', 'O', 'U'].includes(letra));
  const somaConsoantes = consoantes.reduce((total, letra) => total + (tabelaNumeros[letra] || 0), 0);

  const reduzirNumero = (numero) => {
    while (numero >= 10) {
      numero = numero.toString().split('').reduce((sum, digit) => sum + parseInt(digit, 10), 0);
    }
    return numero;
  };

  return reduzirNumero(somaConsoantes);
};