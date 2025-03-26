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

export const numerosHarmonicos = {
  1: [2, 4, 9],
  2: [1, 2, 3, 4, 5, 6, 7, 8, 9],
  3: [2, 3, 6, 8, 9],
  4: [1, 2, 6, 7],
  5: [2, 5, 6, 7, 9],
  6: [2, 3, 4, 5, 6, 9],
  7: [2, 4, 5, 7],
  8: [2, 3, 9],
  9: [1, 2, 3, 5, 6, 8, 9]
};


export const coresFavoraveis = {
  1: {
    descricao: "amarelo e laranja, castanho, dourado, verde, creme e branco",
    cores: ["amarelo", "laranja", "castanho", "dourado", "verde", "creme", "branco"]
  },
  2: {
    descricao: "Todos os tons de verde, creme, branco e cinza",
    cores: ["verde", "creme", "branco", "cinza"]
  },
  3: {
    descricao: "Violeta, vinho, púrpura e vermelho",
    cores: ["violeta", "vinho", "púrpura", "vermelho"]
  },
  4: {
    descricao: "Azul, cinza, púrpura e ouro",
    cores: ["azul", "cinza", "púrpura", "ouro"]
  },
  5: {
    descricao: "Todas as cores claras, cinza e prateado",
    cores: ["cores claras", "cinza", "prateado"]
  },
  6: {
    descricao: "Rosa, azul e verde",
    cores: ["rosa", "azul", "verde"]
  },
  7: {
    descricao: "Verde, amarelo, branco, cinza e azul-claro",
    cores: ["verde", "amarelo", "branco", "cinza", "azul-claro"]
  },
  8: {
    descricao: "Púrpura, cinza, azul, preto e castanho",
    cores: ["púrpura", "cinza", "azul", "preto", "castanho"]
  },
  9: {
    descricao: "Vermelho, rosa, coral e vinho",
    cores: ["vermelho", "rosa", "coral", "vinho"]
  },
  11: {
    descricao: "Branco, violeta e cores claras",
    cores: ["branco", "violeta", "cores claras"]
  },
  22: {
    descricao: "Violeta, branco e cores claras",
    cores: ["violeta", "branco", "cores claras"]
  }
};


export const negativeSequenceTriangleNumberRepeat = [
  "Está relacionado à iniciativa e determinação. No entanto, essa sequência pode limitar uma pessoa, diminuindo sua coragem de se aventurar em algo novo. Pode também resultar em um longo período inativo, desempregado ou mesmo impotente para realizar qualquer coisa, permanecendo nesse estado pelo tempo que durar o Arcano que domina o período.",
  "Com a autoconfiança - essa configuração pode provocar timidez e indecisão, levando o indivíduo a ser subjugado por pessoas próximas, como amigos, colegas de trabalho ou conhecidos. Isso pode resultar na perda da autoestima e limitar seus projetos e realizações.",
  "Com a comunicação: a pessoa pode se sentir incompreendida. Há uma falta de diálogo em várias áreas, principalmente com colegas de trabalho e parceiros(as). Existe dificuldade em se impor em projetos e persuadir as pessoas.",
  "Com o trabalho: essa sequência pode dificultar qualquer realização profissional. Geralmente, está associada a baixa remuneração e perspectivas profissionais desafiadoras. A pessoa pode encontrar dificuldades para se manter no emprego ou obter sucesso em suas atividades.",
  "Com a instabilidade financeira e pessoal: essa sequência pode causar mudanças indesejadas de residência, emprego, círculo social e relacionamentos. Sob essa influência, a pessoa experimenta altos e baixos constantes, lutando para se estabelecer profissionalmente e sempre em busca de melhores oportunidades, porém sem sucesso. Além disso, pode ocorrer uma tendência de se afastar do meio social em que vive.",
  "Com os afetos e sentimentos: essa sequência pode levar a decepções nos relacionamentos com amigos, sócios, colegas de trabalho, familiares e até mesmo com o parceiro amoroso. A pessoa pode se sentir incompreendida em seus objetivos e emoções.",
  "Com o medo e a intolerância: essa sequência pode levar a pessoa a se afastar dos outros e se tornar dependente, vaidosa, arrogante e intolerante. Provoca sentimentos de solidão, desânimo e pode contribuir para o desenvolvimento de doenças nervosas e dependências. É importante buscar o equilíbrio emocional e cultivar a compreensão e a tolerância.",
  "Com problemas emocionais e também financeiros: essa sequência pode tornar a pessoa retraída, afastando-a das atividades sociais. Caso não haja um desenvolvimento espiritual, pode haver descontrole emocional. Sob essa vibração, a pessoa pode experimentar altos e baixos financeiros e, como consequência, enfrentar graves problemas de saúde ou até mesmo seus dependentes. É essencial buscar equilíbrio emocional e buscar orientação para lidar com os desafios financeiros, a fim de promover bem-estar e evitar problemas de saúde.",
  "Com relação a finanças: essa sequência indica sérios problemas financeiros, perda de bens materiais, fracasso empresarial e provações resultantes de períodos prolongados de inatividade. Essa situação pode afetar o sistema nervoso e o coração, gerando tensões e desafios emocionais."
]