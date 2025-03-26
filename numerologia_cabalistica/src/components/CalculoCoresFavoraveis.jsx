// src/components/CalculoCoresFavoraveis.jsx
import { coresFavoraveis } from './TabelaNumerologia';

export const calcularCoresFavoraveis = (numeroExpressao) => {
  if (!numeroExpressao) return '';
  
  const dados = coresFavoraveis[numeroExpressao];
  
  if (!dados) return 'Nenhuma informação disponível';
  
  return `${dados.cores.join(', ')}`;
};