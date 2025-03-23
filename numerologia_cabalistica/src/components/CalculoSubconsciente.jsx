export const calcularSubconsciente = (licoesCarmicas) => {
  if (!licoesCarmicas || licoesCarmicas.length === 0) return 9; // Se não houver lições cármicas, subconsciente é 9
  
  // Certifica-se de que `licoesCarmicas` é um array de números
  const numeroLicoes = Array.isArray(licoesCarmicas) ? licoesCarmicas.length : String(licoesCarmicas).split(',').length;
  
  return 9 - numeroLicoes;
};
