// src/components/CalculoDesafios.js
export const calcularDesafios = (dataNascimento, ciclosVida) => {
  if (!dataNascimento) return [];

  const [ano, mes, dia] = dataNascimento.split('-').map(Number);

  // Função para reduzir um número a um único dígito
  const reduzirNumero = (numero) => {
    while (numero >= 10) {
      numero = numero.toString().split('').reduce((acc, dig) => acc + Number(dig), 0);
    }
    return numero;
  };

  // Primeiro Desafio
  const reduzidoDia = reduzirNumero(dia);
  const reduzidoMes = reduzirNumero(mes);
  const primeiroDesafio = Math.abs(reduzidoDia - reduzidoMes);
  const periodoPrimeiroDesafio = ciclosVida[0]?.periodo || 'N/A';

  // Segundo Desafio
  const reduzidoAno = reduzirNumero(ano);
  const segundoDesafio = Math.abs(reduzidoDia - reduzidoAno);
  const periodoSegundoDesafio = ciclosVida[1]?.periodo || 'N/A';

  // Terceiro Desafio
  const terceiroDesafio = Math.abs(primeiroDesafio - segundoDesafio);
  const periodoTerceiroDesafio = ciclosVida[2]?.periodo || 'N/A';

  // Retorna um array de objetos, onde cada objeto representa um desafio
  return [
    { nome: 'Primeiro Desafio', valor: primeiroDesafio, periodo: periodoPrimeiroDesafio },
    { nome: 'Segundo Desafio', valor: segundoDesafio, periodo: periodoSegundoDesafio },
    { nome: 'Terceiro Desafio', valor: terceiroDesafio, periodo: periodoTerceiroDesafio },
  ];
};