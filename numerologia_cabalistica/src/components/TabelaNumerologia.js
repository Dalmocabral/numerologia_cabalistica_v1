// src/components/TabelaNumerologia.js
export const tabelaNumeros = {
  'A': 1, 'B': 2, 'C': 3, 'D': 4, 'E': 5, 'F': 8, 'G': 3, 'H': 5, 'I': 1,
  'J': 1, 'K': 2, 'L': 3, 'M': 4, 'N': 5, 'O': 7, 'P': 8, 'Q': 1, 'R': 2,
  'S': 3, 'T': 4, 'U': 6, 'V': 6, 'W': 6, 'X': 6, 'Y': 1, 'Z': 7, 'ç': 6,
};

export const tabelaAcentos = {
  '́': 2,  // Agudo (´) adiciona +2
  '̀': 2,  // Grave (`) adiciona +2
  '̈': 2,  // Trema (¨) adiciona +2
  '̂': 7,  // Circunflexo (^) adiciona +7
  '̃': 3,  // Tilde (~) adiciona +3
  'º': 7,  // Símbolo ordinal adiciona +7
};

export const vogais = ['A', 'E', 'I', 'O', 'U', 'Y'];

export const tabelaNumerologia = [
  {
    numero: 1,
    'Vibra com': 9,
    'Atrai': [4, 8],
    'É oposto': [6, 7],
    'É passivo em relação a': [2, 3, 5],
  },
  {
    numero: 2,
    'Vibra com': 8,
    'Atrai': [7, 9],
    'É oposto': [5],
    'É passivo em relação a': [1, 3, 4, 6],
  },
  {
    numero: 3,
    'Vibra com': 7,
    'Atrai': [5, 6, 9],
    'É oposto': [4, 8],
    'É passivo em relação a': [1, 2],
  },
  {
    numero: 4,
    'Vibra com': 6,
    'Atrai': [1, 8],
    'É oposto': [3, 5],
    'É passivo em relação a': [2, 7, 9],
  },
  {
    numero: 5,
    'Vibra com': 5,
    'Atrai': [3, 9],
    'É oposto': [2, 4, 6],
    'É passivo em relação a': [1, 7, 8],
  },
  {
    numero: 6,
    'Vibra com': 4,
    'Atrai': [3, 7, 9],
    'É oposto': [1, 8],
    'É passivo em relação a': [2],
  },
  {
    numero: 7,
    'Vibra com': 3,
    'Atrai': [2, 6],
    'É oposto': [1, 9],
    'É passivo em relação a': [4, 5, 8],
  },
  {
    numero: 8,
    'Vibra com': 2,
    'Atrai': [1, 4],
    'É oposto': [3, 6],
    'É passivo em relação a': [5, 7, 9],
  },
  {
    numero: 9,
    'Vibra com': 1,
    'Atrai': [2, 3, 5, 6],
    'É oposto': [7],
    'É passivo em relação a': [4, 8],
  },
];