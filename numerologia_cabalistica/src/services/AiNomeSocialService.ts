import { generateInvertedPyramid, nameToNumbers } from '../utils/generateInvertedPyramid';
import { calcularExpressao } from '../utils/CalculoExpressao';
import { arcanos } from '../utils/TabelaNumerologia';

export interface SugestaoNomeSocial {
  nome: string;
  expressao: number;
  arcanoNumber: number | null;
  arcanoTitulo?: string;
  arcanoDescricao?: string;
  arcanoImage?: string;
  piramide: any[];
  temSequenciaNegativa: boolean;
  sequenciasEncontradas: number[];
  tipo: 'limpo' | 'com_alerta';
  origem: 'ia' | 'heuristica';
}

// Chave salva localmente no navegador/Electron
const STORAGE_KEY = 'numeris_gemini_api_key';

export const getGeminiApiKey = (): string => {
  try {
    return localStorage.getItem(STORAGE_KEY) || '';
  } catch {
    return '';
  }
};

export const setGeminiApiKey = (key: string): void => {
  try {
    localStorage.setItem(STORAGE_KEY, key.trim());
  } catch (e) {
    console.error('Erro ao salvar chave da API:', e);
  }
};

// Função para detectar sequências de 3+ números iguais em uma linha
export const detectarSequenciasLinha = (row: number[]): number[] => {
  const sequences: number[] = [];
  let count = 1;

  for (let i = 1; i < row.length; i++) {
    if (row[i] === row[i - 1]) {
      count++;
      if (count === 3) {
        sequences.push(row[i]);
      }
    } else {
      count = 1;
    }
  }
  return sequences;
};

// Analisa um nome único e retorna o diagnóstico cabalístico completo
export const analisarCandidatoNomeSocial = (nome: string, origem: 'ia' | 'heuristica' = 'heuristica'): SugestaoNomeSocial => {
  const nomeLimpo = nome.trim();
  const piramide = generateInvertedPyramid(nomeLimpo);

  let arcanoNum: number | null = null;
  let arcanoInfo: any = null;

  if (piramide.length > 0) {
    const lastRow = piramide[piramide.length - 1];
    if (lastRow.type === 'numbers' && lastRow.data.length === 1) {
      arcanoNum = lastRow.data[0];
      if (arcanos && arcanos[arcanoNum]) {
        arcanoInfo = arcanos[arcanoNum];
      }
    }
  }

  // Detecta se existem sequências negativas em qualquer linha da pirâmide
  const sequenciasTotais: number[] = [];
  piramide.forEach((row) => {
    if (row.type === 'numbers' && Array.isArray(row.data)) {
      const seqs = detectarSequenciasLinha(row.data);
      if (seqs.length > 0) {
        sequenciasTotais.push(...seqs);
      }
    }
  });

  const temSequenciaNegativa = sequenciasTotais.length > 0;
  const expressao = calcularExpressao(nomeLimpo);

  return {
    nome: nomeLimpo,
    expressao,
    arcanoNumber: arcanoNum,
    arcanoTitulo: arcanoInfo?.titulo || (arcanoNum ? `Arcano ${arcanoNum}` : 'Arcano Indefinido'),
    arcanoDescricao: arcanoInfo?.descricao || '',
    arcanoImage: arcanoInfo?.image || '',
    piramide,
    temSequenciaNegativa,
    sequenciasEncontradas: Array.from(new Set(sequenciasTotais)),
    tipo: temSequenciaNegativa ? 'com_alerta' : 'limpo',
    origem,
  };
};

// Gerador Heurístico Combinatório Amplo (testa todas as combinações cabalísticas possíveis)
export const gerarVariacoesHeuristicas = (nomeCompleto: string): string[] => {
  if (!nomeCompleto || nomeCompleto.trim().length === 0) return [];

  const preposicoes = new Set(['DE', 'DA', 'DO', 'DOS', 'DAS', 'E']);
  const partes = nomeCompleto
    .trim()
    .split(/\s+/)
    .map((p) => p.toUpperCase())
    .filter((p) => !preposicoes.has(p) && p.length > 0);

  if (partes.length === 0) return [nomeCompleto];

  const primeiroNome = partes[0];
  const ultimoNome = partes.length > 1 ? partes[partes.length - 1] : '';
  const nomesDoMeio = partes.slice(1, partes.length - 1);
  const todosSobrenomes = [...nomesDoMeio, ultimoNome].filter(Boolean);

  const sugestoes = new Set<string>();

  // Função auxiliar para modular palavras conforme práticas cabalísticas
  const modularPalavra = (palavra: string): string[] => {
    const list = new Set<string>([palavra]);
    
    // 1. Adicionar H suave final
    if (['A', 'E', 'O', 'I', 'U'].some((v) => palavra.endsWith(v))) {
      list.add(`${palavra}H`);
    }
    // 2. Troca de I por Y e Y por I
    if (palavra.includes('I')) list.add(palavra.replace(/I/g, 'Y'));
    if (palavra.includes('Y')) list.add(palavra.replace(/Y/g, 'I'));
    // 3. Troca de C por K
    if (palavra.includes('C')) list.add(palavra.replace(/C/g, 'K'));
    // 4. Dobrar consoantes comuns na cabala
    ['L', 'N', 'S', 'T', 'R', 'M', 'B'].forEach((c) => {
      if (palavra.includes(c) && !palavra.includes(c + c)) {
        list.add(palavra.replace(new RegExp(c), c + c));
      }
    });
    // 5. Inicial abreviada
    list.add(`${palavra[0]}.`);
    return Array.from(list);
  };

  // Base rica de apelidos elegantes e variações fonéticas
  const apelidos: Record<string, string[]> = {
    MARIA: ['Mari', 'Malu', 'Mary', 'Mariah', 'Maysa'],
    LANA: ['Lan', 'Lany', 'Lani', 'Lanna', 'Lanah', 'Alana'],
    JOSE: ['Zé', 'Zeca', 'Joe'],
    FRANCISCO: ['Chico', 'Franco', 'Fran'],
    EDUARDO: ['Edu', 'Dudu', 'Edward'],
    GABRIEL: ['Gabi', 'Biel'],
    GABRIELA: ['Gabi', 'Ella'],
    BEATRIZ: ['Bia', 'Beatrix'],
    FERNANDO: ['Nando', 'Fred'],
    FERNANDA: ['Nanda', 'Fê'],
    RODRIGO: ['Rod', 'Rigo'],
    GUILHERME: ['Gui', 'Guil'],
    ISABELA: ['Isa', 'Bella', 'Bela'],
    ISABELLA: ['Isa', 'Bella'],
    JULIANA: ['Ju', 'July', 'Juli'],
    LEONARDO: ['Léo', 'Leo', 'Leon'],
    MATHEUS: ['Math', 'Matheus'],
    LUCAS: ['Luke', 'Luca'],
    CAROLINA: ['Carol', 'Carolyn'],
    ALEXANDRE: ['Alex', 'Xande'],
    PATRICIA: ['Paty', 'Pati'],
    DALMO: ['Dal', 'Dalmo'],
  };

  // Coleta todas as modulações do primeiro nome (e apelidos)
  const listaPrimeiros = new Set<string>(modularPalavra(primeiroNome));
  if (apelidos[primeiroNome]) {
    apelidos[primeiroNome].forEach((ap) => {
      modularPalavra(ap.toUpperCase()).forEach((v) => listaPrimeiros.add(v));
    });
  }

  // Coleta modulações de todos os sobrenomes
  const modSobrenomes = todosSobrenomes.map((sob) => modularPalavra(sob));

  // GERAÇÃO SISTEMÁTICA DE COMBINAÇÕES:
  listaPrimeiros.forEach((p) => {
    // 1. Primeiro + cada sobrenome individualmente
    modSobrenomes.forEach((sobList) => {
      sobList.forEach((s) => {
        sugestoes.add(`${p} ${s}`);
      });
    });

    // 2. Primeiro + Sobrenome do Meio + Último
    if (nomesDoMeio.length > 0 && ultimoNome && modSobrenomes.length >= 2) {
      modSobrenomes[0].forEach((m) => {
        modSobrenomes[modSobrenomes.length - 1].forEach((u) => {
          sugestoes.add(`${p} ${m} ${u}`);
        });
      });
    }

    // 3. Primeiro + Inicial do Meio + Último
    nomesDoMeio.forEach((m) => {
      if (ultimoNome) {
        sugestoes.add(`${p} ${m[0]}. ${ultimoNome}`);
        sugestoes.add(`${p} ${m} ${ultimoNome[0]}.`);
      }
    });

    // 4. Inversão comercial (Sobrenome + Primeiro)
    todosSobrenomes.forEach((sob) => {
      sugestoes.add(`${sob} ${p}`);
    });
  });

  // Retorna como array formatado em Title Case
  return Array.from(sugestoes).map(formatarTitleCase);
};

// Formatação para Nome Capitalizado (ex: "Maria Silva")
export const formatarTitleCase = (str: string): string => {
  return str
    .toLowerCase()
    .split(' ')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
};

// Chamada à API da IA (Google Gemini 1.5 Flash ou modelo configurado)
export const gerarSugestoesViaIA = async (nomeCompleto: string, apiKey?: string): Promise<string[]> => {
  const key = apiKey || getGeminiApiKey();

  if (!key) {
    return [];
  }

  const prompt = `Você é um consultor especialista em numerologia cabalística e personal branding.
O nome de nascimento do cliente é: "${nomeCompleto}".
Gere uma lista de 25 sugestões de nomes sociais, nomes artísticos e nomes comerciais derivados do nome original.
As sugestões devem ser:
1. Curtas, sonoras, fáceis de memorizar e pronunciar no Brasil.
2. Formadas pelo primeiro nome, sobrenome, segundo sobrenome ou variações com apelidos elegantes e iniciais.
3. Inclua sutis variações ortográficas conhecidas na cabala (ex: uso de Y, H suave, consoantes dobradas).

Retorne ESTRITAMENTE um array JSON contendo apenas as strings com os nomes gerados, no formato:
["Nome Sobrenome", "Nome S. Sobrenome", "Nome OutroSobrenome"]
Não adicione explicações ou markdown fora do bloco JSON.`;

  const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${key}`;

  const response = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      contents: [
        {
          parts: [{ text: prompt }],
        },
      ],
      generationConfig: {
        temperature: 0.7,
        responseMimeType: 'application/json',
      },
    }),
  });

  if (!response.ok) {
    return [];
  }

  const data = await response.json();
  const rawText = data?.candidates?.[0]?.content?.parts?.[0]?.text || '[]';

  try {
    const parsed = JSON.parse(rawText);
    if (Array.isArray(parsed)) {
      return parsed.map((item) => String(item).trim()).filter((item) => item.length > 2);
    }
  } catch (e) {
    console.warn('Erro ao interpretar resposta da IA:', e);
  }

  return [];
};

// Função Principal de Geração e Validação Cabalística
export const obterSugestoesValidadas = async (
  nomeCompleto: string,
  usarIA: boolean = true
): Promise<{ sugestoes: SugestaoNomeSocial[]; usouIA: boolean }> => {
  let nomesCandidatos: string[] = [];
  let usouIA = false;

  const apiKey = getGeminiApiKey();

  if (usarIA && apiKey) {
    try {
      const iaNomes = await gerarSugestoesViaIA(nomeCompleto, apiKey);
      if (iaNomes.length > 0) {
        nomesCandidatos = iaNomes;
        usouIA = true;
      }
    } catch {
      // Falha silenciosa de rede ou chave
    }
  }

  // Combina sugestões (IA + Heurísticas cabalísticas ricas)
  const heuristicos = gerarVariacoesHeuristicas(nomeCompleto);
  const combinados = Array.from(new Set([...nomesCandidatos, ...heuristicos]));

  // Analisa e valida cada nome cabalisticamente
  const resultados: SugestaoNomeSocial[] = combinados
    .map((nome) => analisarCandidatoNomeSocial(nome, usouIA ? 'ia' : 'heuristica'))
    .filter((res) => res.piramide.length > 0);

  // Filtra ESTRITAMENTE apenas nomes 100% válidos (sem sequências negativas / sem bloqueios)
  const nomesValidos = resultados.filter((res) => !res.temSequenciaNegativa);

  // Ordena os nomes válidos por arcanos mais favoráveis
  const arcanosMaisFavoraveis = new Set([1, 3, 5, 6, 7, 10, 11, 14, 17, 19, 20, 21]);

  nomesValidos.sort((a, b) => {
    const aFav = a.arcanoNumber ? arcanosMaisFavoraveis.has(a.arcanoNumber) : false;
    const bFav = b.arcanoNumber ? arcanosMaisFavoraveis.has(b.arcanoNumber) : false;
    if (aFav && !bFav) return -1;
    if (!aFav && bFav) return 1;
    return (a.arcanoNumber || 0) - (b.arcanoNumber || 0);
  });

  return { sugestoes: nomesValidos, usouIA };
};
