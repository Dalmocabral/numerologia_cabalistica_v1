// src/components/CalculoHarmonico.jsx
import { numerosHarmonicos } from "./TabelaNumerologia"; // Caminho correto

export const calcularNumeroHarmonico = (dataNascimento) => {
  if (!dataNascimento) return [];

  const partes = dataNascimento.split(/\D+/);
  let dia;
  
  if (partes.length === 3) {
    dia = parseInt(partes[0]) <= 31 ? partes[0] : partes[2];
  } else {
    return [];
  }

  if (!dia) return [];

  let numeroBase = parseInt(dia);
  while (numeroBase > 9) {
    numeroBase = numeroBase.toString()
      .split('')
      .reduce((sum, digit) => sum + parseInt(digit, 10), 0);
  }

  return numerosHarmonicos[numeroBase] || []; // Agora o objeto está disponível
};