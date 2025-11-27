// src/components/CalculoAssinatura.js
import { generateInvertedPyramid, findSequences } from "./generateInvertedPyramid";
import { calcularExpressao } from "./CalculoExpressao";

// Arcanos "ruins" para evitar na assinatura
const ARCANOS_NEGATIVOS = [
  13, 15, 16, 18, 29, 40, 43, 47, 51, 54, 63, 65, 67, 69, 73, 85, 96
];

// --- FUNÇÃO PRINCIPAL DE ANÁLISE ---
export const analisarAssinatura = (assinatura, expressaoAlvo) => {
  const assinaturaLimpa = assinatura.trim().toUpperCase().replace(/[^A-ZÇÁÉÍÓÚÀÈÌÒÙÂÊÎÔÛÃÕÄËÏÖÜ']/g, '');
  
  // 1. Gerar Pirâmide
  const piramide = generateInvertedPyramid(assinaturaLimpa);
  
  // 2. Calcular Expressão
  const expressaoAtual = calcularExpressao(assinaturaLimpa);
  
  // 3. Análise de Arcanos
  const arcanosEncontrados = [];
  let possuiArcanoNegativo = false;

  piramide.forEach(row => {
    if (row.type === 'numbers') {
      for (let i = 0; i < row.data.length - 1; i++) {
        const num1 = row.data[i];
        const num2 = row.data[i+1];
        const arcano = parseInt(`${num1}${num2}`, 10);
        
        const isNegativo = ARCANOS_NEGATIVOS.includes(arcano);
        if (isNegativo) possuiArcanoNegativo = true;

        arcanosEncontrados.push({ valor: arcano, isNegativo });
      }
    }
  });

  // 4. Análise de Sequências (333, etc)
  let possuiSequenciaNegativa = false;
  const sequenciasDetectadas = [];
  
  piramide.forEach(row => {
    if (row.type === 'numbers') {
      const seqs = findSequences(row.data);
      if (seqs.length > 0) {
        possuiSequenciaNegativa = true;
        const numSeq = row.data[seqs[0]]; 
        sequenciasDetectadas.push(`${numSeq}${numSeq}${numSeq}`);
      }
    }
  });

  // 5. Arcano Regente (Bico)
  let arcanoRegente = null;
  if (piramide.length > 0) {
     const ultimaLinha = piramide[piramide.length - 1];
     if (ultimaLinha.data.length === 1) arcanoRegente = ultimaLinha.data[0];
  }

  // 6. Validações
  const tamanhoValido = assinaturaLimpa.length >= 3 && assinaturaLimpa.length <= 5;
  
  // Nota: Se não passar expressaoAlvo, ele apenas analisa sem validar a meta
  const expressaoValida = expressaoAlvo ? (parseInt(expressaoAtual) === parseInt(expressaoAlvo)) : true;
  
  const isAprovada = 
    tamanhoValido && 
    expressaoValida && 
    !possuiArcanoNegativo && 
    !possuiSequenciaNegativa;

  return {
    assinatura: assinaturaLimpa,
    expressaoAtual,
    expressaoAlvo,
    arcanosEncontrados: [...new Set(arcanosEncontrados.map(a => a.valor))],
    arcanosNegativosEncontrados: arcanosEncontrados.filter(a => a.isNegativo).map(a => a.valor),
    sequenciasDetectadas,
    arcanoRegente,
    piramide,
    check: {
      tamanho: tamanhoValido,
      expressao: expressaoValida,
      semArcanosNegativos: !possuiArcanoNegativo,
      semSequencias: !possuiSequenciaNegativa
    },
    aprovada: isAprovada
  };
};

// --- FUNÇÃO GERADORA AUTOMÁTICA ---
export const gerarAssinaturasAutomaticas = (nomeSocial, expressaoAlvo) => {
    if (!nomeSocial || !expressaoAlvo) return [];

    // 1. Extrair letras únicas do nome para usar como base
    const letrasBase = [...new Set(nomeSocial.toUpperCase().replace(/[^A-Z]/g, '').split(''))];
    
    const resultados = [];
    const tentados = new Set(); // Evita duplicatas
    const maxResultados = 5;

    // Função recursiva para permutar letras
    const permutar = (atual) => {
        if (resultados.length >= maxResultados) return;
        
        // Só testa se tiver entre 3 e 5 letras
        if (atual.length >= 3 && atual.length <= 5) {
            if (!tentados.has(atual)) {
                tentados.add(atual);
                const analise = analisarAssinatura(atual, expressaoAlvo);
                if (analise.aprovada) {
                    resultados.push(analise);
                }
            }
        }

        // Se chegou a 5 letras, não adiciona mais
        if (atual.length === 5) return;

        // Tenta adicionar cada letra disponível
        for (let letra of letrasBase) {
            permutar(atual + letra);
            if (resultados.length >= maxResultados) return;
        }
    };

    // Inicia a busca (pode ser pesado, limitamos a profundidade pela lógica acima)
    // Para otimizar, começamos tentando as iniciais do nome
    const iniciais = nomeSocial.split(' ').map(n => n[0]).join('');
    if (iniciais.length >= 2) permutar(iniciais); // Tenta começar pelas iniciais
    
    // Tenta combinações gerais
    for (let letra of letrasBase) {
        permutar(letra);
        if (resultados.length >= maxResultados) break;
    }

    return resultados;
};