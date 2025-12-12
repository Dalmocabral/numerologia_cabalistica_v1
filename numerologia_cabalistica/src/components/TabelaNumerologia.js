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
  "'": 2,  // Apóstrofo simples adiciona +2
  "’": 2,  // Apóstrofo tipográfico (curvado) adiciona +2
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


export const motivacaoTextos = {
  1: `Deseja Independência – Liberdade, liderança e controle de tudo; viver longe de
pressões, ser campeão (ã) absoluto (a), realizar-se em si mesmo (a); ficar longe da
mediocridade, fazer fortuna, ser elogiado (a) e atendido (a) pelo mundo; viver longe
de detalhes; impor seus padrões pessoais; muito dinamismo e autossuficiência; não
ser atrapalhado (a) por ninguém, ficar só.
O Número 1 na Motivação exige que você se situe sempre de forma a ficar na frente
dos outros. Tem que ser o (a) primeiro (a) em tudo o que faz. O fato de ser o (a)
primeiro (a) o (a) impede, obviamente, de ter muita consideração pelos outros até
que suas próprias necessidades sejam satisfeitas. A liderança adquirida em vidas
passadas traz agora o desejo de continuar a se empenhar numa consciência mais
elevada. Torna-se independente, também, com relação às suas crenças. O desejo
por pensamentos livres e independentes continua ocupando o seu anseio mais
profundo. Ambicioso (a) e criativo (a), é direto (a) e não gosta de muitos detalhes,
quer liderar, dirigir, dominar; às vezes é obstinado (a). Não gosta muito de receber
ordens de quem quer que seja e trabalha melhor por conta própria ou em cargo de
chefia. A incompreensão e a recusa em aceitar conselhos podem trazer transtornos
à sua carreira e aos seus planos profissionais. Se não tiver bom nível de consciência
espiritual, poderá se tornar egoísta, excessivamente vaidoso (a) e arrogante.
Geralmente é impaciente e com pouco senso diplomático. Por esse motivo poderá
enfrentar dificuldades no seu meio profissional ou mesmo entre familiares, amigos e
companheiros afetivos. Suas boas qualidades são: confiança em si, distinção, poder
executivo, dignidade e foco nos propósitos.
Quando inseguro (a) tende a ameaçar os outros, podendo agredir, ofender, se tornar
inflexível, irredutível, vingativo (a) e preconceituoso (a). Cultura, educação e
refinamento pessoal são características indispensáveis que precisa adquirir para o
seu triunfo pessoal, profissional e principalmente afetivo.
`, 
  
2: `Deseja Paz e Equilíbrio – Prestar serviço e devoção; criar harmonia, sentir o ritmo da
vida, trabalhar com os outros, ter amigos leais e boas companhias; acumular
conhecimentos e coisas; conforto sem supérfluos; ser amado (a) por todos, receber
convites, sentir-se compreendido (a); vencer todas as negociações; não ser exposto
(a).
O Número 2 na Motivação indica o desejo de ser sempre gentil com todos,
conseguindo ou não. Deseja ser compassivo (a), compreensivo (a), atencioso (a),
útil e sempre fazendo concessões em favor da harmonia de todos. O seu maior
desejo é a paz e a harmonia. O discernimento é um ponto forte do seu caráter; por
esse motivo é um (a) bom (a) intermediário (a) ajudando a levar a paz às forças
opostas. Anseia por amor e compreensão e prefere ser liderado (a) a liderar. O seu
desejo é estar casado (a); desfrutar de companheirismo, paz, harmonia e conforto.
Manifesta a sua natureza sensível através da suavidade, cordialidade e
prestatividade; a sua principal característica é a cooperação. Pela sua passividade e
calma natural, normalmente as pessoas com quem convive tendem a se aproveitar e
explorá-lo (a). Normalmente não procura impor suas ideias; prefere escutar os
outros antes de expor as suas próprias. Está sempre procurando reunir
conhecimentos sobre assuntos diversos e se relaciona com todas as pessoas sem
discriminar raça, credo, classe social ou posição econômica; numa só amizade e
dedicação. É muito vulnerável em sua sensibilidade e se magoa profundamente com
fatos que a outros não afetariam.
Quando inseguro (a) tende a não decidir, escapa, elogia demais os outros, deixa-se
influenciar, chora, enfraquece, fica longe das atenções, se deprime, critica e ironiza.
É importante para o seu desenvolvimento profissional e pessoal, que aprenda a
conviver com as pessoas; ser mais comunicativo (a) e compartilhar os seus
conhecimentos com todos, levando sua mensagem de harmonia e paz.`,

3: `Deseja a Beleza em Todas as Coisas – Plateia; ser o centro de todas as atenções;
interesses múltiplos, estar sempre ocupado (a); esquecer o desagradável;
numerosas amizades, namorar tudo e todas (os), estar cercado (a) por uma
atmosfera agradável, ser amado (a), estar com gente bonita; sentimentos intensos e
extremados; divertir-se; vender ideias, se autopromover; realizar todas as fantasias;
comprar compulsivamente.
O Número 3 na Motivação indica que o seu maior desejo é se expressar e receber a
aprovação dos outros. Quer emitir a sua opinião, ser criativo (a), cultivar o talento e
admirar a beleza. Como instrumento para a sua expressão efetiva, acredita na
abordagem vitrine em relação à vida. Quer explorar o aqui e agora e não o passado
ou futuro. Procura a felicidade e a encontra ao deixar os outros felizes. É muito
consciencioso (a) em relação ao dever. Adora uma plateia, é popular, tem muitos
amigos e quer viver cercado (a) de beleza. Possui natureza impetuosa, entusiástica
e sonhadora. Se expressa na criação artística, nas coisas que elevam o espírito
humano e em tudo que causa alegria e prazer aos outros. Seus atos são guiados
pelo instinto de liberdade, sinceridade e sociabilidade. Uma de suas características é
se tornar difícil ao convívio sem motivo aparente. Às vezes se fecha em si mesmo
(a), se mostra irritadiço (a), pouco à vontade, e não gosta de se sentir bajulado (a).
Tem poderes psíquicos sobre os demais e precisa ter cuidado com o uso que faz de
sua força mental, pois pode comprometer sua paz e harmonia, quase sempre
inadvertidamente. Possui bondade natural; normalmente gosta de crianças, plantas
e animais de estimação. É profundo pensador e adquire conhecimentos pela
intuição e inspiração. Inclina-se a dispersar os seus talentos, pois é muito versátil e
precisa desenvolver concentração, tenacidade e persistência, porém, por sua força
de vontade e determinação garante o sucesso. Não aprecia minúcias, coisas
arrastadas e rotina. Ambicioso (a) luta para alcançar altas posições.
Quando inseguro (a) tende a evitar discussões, inventar coisas, mentir; fala tudo o
que lhe vem à cabeça, plagia, repete chavões, satiriza, se faz engraçado (a),
ridiculariza, gasta sem limites; pode tomar pileques. Precisa cultivar paciência,
Tolerância e concentração. Por ser altruísta, muitas vezes não sabe dizer não e
assume mais compromissos que consegue cumprir. Deve evitar atividades
corriqueiras; estudar filosofia e psicologia humana, fazer uma coisa de cada vez,
concluindo cada tarefa ou compromisso assumido.
`,

4: `Deseja Ordem em Todas as Coisas – Fidelidade absoluta; persistência, disciplina
rígida; conquistas materiais; rígido código de ética, viver longe da pretensão e
falsidade; anseia amor, repele as atenções emocionais; viver ao ar livre, muita saúde,
limpeza e arrumação; o máximo de segurança, ser rico (a) e não precisar de
ninguém; comprar tudo o que deseja sem ficar descapitalizado.


O Número 4 na Motivação mostra o desejo de ver os fatos reais e a verdade sem
enfeites, o que o (a) torna mais preparado (a) que a maioria para realizar algo
construtivo com isso. Muitas pessoas pedem a verdade, mas poucas estão tão
preparadas como você para aceitá-la. O seu desejo é ser justo (a) em todos os seus
relacionamentos; gosta de trabalhar duro por aquilo que ambiciona; priva-se até
mesmo de alguma coisa ou aceita inconveniências em favor de vantagens futuras.
O lado prático permeia todo o seu ser; seu desejo é ver tudo muito bem organizado.
Deseja ordem e disciplina tanto em casa como no trabalho. Quer trabalhar
metodicamente e com afinco em favor dos outros e não gosta muito de inovações.
É um (a) conservador (a) nato (a), realista e equilibrado (a), e sempre é possível
contar com você. Profissional de alto gabarito se realiza na dedicação, na perfeição
dos detalhes e na conclusão de um trabalho bem feito. Ama o sólido, o palpável, o
prático, aquilo que se desenvolve, cresce e que protege. Gosta de se sentir protegido
(a) e assessorado (a). Normalmente é prático (a), analítico (a) e confiável; valoriza a
lealdade e a honestidade. É bom (a) disciplinador (a), determinado (a) e tenaz em
seus propósitos. Possui habilidades mecânicas naturais e trabalha bem com as
mãos. É extremamente otimista e enfrenta os obstáculos com coragem, por mais
árduos que sejam.


Quando inseguro (a) tende a se tornar rígido (a), guarda ou acumula coisas para o
futuro, toma todas as precauções possíveis, se queixa e se subestima; teima, fica
obsessivo (a) e pessimista; controla tudo e todos. As suas conquistas materiais
devem ser através dos seus talentos profissionais e esforços permanentes; assim
pode conseguir tudo o que deseja, mas tenha também objetivos que visem
beneficiar a humanidade.
`,

5: `Deseja Liberdade Pessoal – Mudanças constantes; falar, agir, viajar,
despreocupação, variedade, distância da rotina e dos detalhes; abertura a qualquer
experiência; eterna tentativa; passar adiante, abandonar com facilidade ou
agarrar-se demasiado tempo; pessoas novas e bonitas; evitar caminhos já
percorridos, buscar o inusitado e o novo; ter todas as gratificações sensuais que
preferir; exibir qualidades, tirar o máximo da vida, ser amado sem sentir-se preso;
não usar relógio.
O Número 5 na Motivação indica um forte desejo de buscar até finalmente encontrar
as soluções nas quais os outros nunca pensaram antes. Está sempre alerta e
suscetível a tudo o que está relacionado com os cinco sentidos. Aborda tudo com
certa intensidade sexual. Tudo o que parece ser diferente e interessante chama a
sua atenção. A variedade da autoexpressão é absolutamente essencial. As viagens
são um dos desejos da sua alma, por considerá-las educativas e ampliadoras do seu
horizonte. É um ser mutável; gosta de variedades e de experiências incomuns, e está
sempre à procura de novas oportunidades. Possui natureza perceptiva, arguta,
perspicaz e curiosidade natural. Isso instiga o seu desejo de investigar e elucidar
qualquer situação ou problema. Gosta de novidades e é um (a) entusiasta por novas
experiências e novos encontros; às vezes gosta também de rupturas. Com seu
raciocínio rápido se adapta a qualquer situação, sentindo-se à vontade e fazendo
com que os outros também se sintam. Relaciona-se bem em sociedade; possui
grande versatilidade e talentos para se dar bem em várias e diferentes atividades, e
não se cansa nem se atrapalha, pois como normalmente só faz o que gosta, é do
tipo que trabalha descansando.
Quando inseguro (a) tende a romper, cortar tudo ou todos que lhe atrapalham,
quebra o que estiver na frente, pergunta tudo para saber detalhes; dá escândalos,
exibe-se, tem vários programas no mesmo dia, exagera na bebida ou no sexo; corre
riscos. Por ter fortes inclinações filosóficas, é bom que busque conhecimentos
nessa área através de estudos, experiências e investigações.
`,

6: `Deseja um Lar Feliz – Família, união, harmonia, luxo e conforto; tolerância em
relação aos outros; dar refúgio e proteção aos que precisam de auxílio;
solidariedade, sentir o ritmo da vida; sentimentalismo exagerado; que todos sigam
suas ideias; dar jeito em tudo e solucionar tudo para todos; trabalhar em equipe; tem
interesse em tudo e por todos; distância de trabalhos mecânicos; sentir-se amado
(a) e necessário (a), tornar-se insubstituível, que seus filhos só deem alegrias; não
precisar pedir favores.
O Número 6 na Motivação descreve um grande desejo de ser amistoso (a), afável, e
conscientemente interessado (a) nos problemas dos outros como se fossem os
seus. Deseja se envolver, assumir um senso de responsabilidade social, e até
mesmo compartilhar de um senso de culpa coletiva pelo que os outros fazem em
cooperação de grupo. O seu desejo é ensinar aos outros a manterem a paz e a
harmonia em suas vidas. O seu interesse pelo bem estar dos seus familiares é tão
profundo que às vezes se torna sufocante e priva que eles vivam as suas próprias
experiências. Age de modo convencional e tolerante em relação ao comportamento
dos outros. Deseja ser sempre o refugio e o abrigo para aqueles que precisam de
atenção e auxilio. Sente o ritmo da vida na harmonia da música. Às vezes se torna
um (a) sentimentalista exagerado (a) incapaz de um julgamento real de uma
situação. Deseja impor suas próprias ideias e princípios a todos. Presta favores de
boa vontade. Gosta de cozinhar e aprecia uma boa mesa. Não se sente atraído (a)
por trabalhos mecânicos e técnicos. É idealista e tem como princípio orientar e
consertar tudo o que está errado no mundo. Quer criar raízes e fazer com que sua
vida gire em torno do seu lar e das pessoas queridas. É conciliador (a), aprecia a
fertilidade e tudo o que cresce, produz e se expande. Entusiasma-se com o milagre
da vida e sente a presença do amor em tudo. É simpático (a), intuitivo (a),
persistente, responsável e possui temperamento equilibrado. Adora uma casa bonita
com muitas plantas, móveis confortáveis, tudo na mais perfeita ordem. Possui gosto
refinado e se sente bem no conforto e na elegância. Conquista facilmente a
popularidade e o êxito social.
Quando inseguro (a) tende a mesquinharia, sentimentalismo, apego à família ou ao
passado, manipulação, perda de confiança e fé, atrai relações complicadas. Por sua
tendência à vaidade e ao egoísmo, é bom que se dedique aos estudos esotéricos,
metafísicos e espiritualistas, e seja compreensivo (a) com os outros.`,

7: `Deseja Obter Vitórias Intelectuais – Boa educação; privacidade, paz, sossego,
silêncio; estar só, atrair sem forçar nada, analisar profundamente; reservado (a),
intelectual, filósofo (a), tímido (a) em público; profundamente emotivo (a), mas não
demonstra os sentimentos; viver longe da pretensão e falsidade; proteger-se da
curiosidade dos outros a respeito de si; apreciar livros raros e tecidos finos; ter
poucos amigos íntimos; sabedoria, refinamento; não se misturar, ser ouvido por
todos.
O Número 7 na Motivação mostra o seu desejo de ficar sozinho (a) para explorar as
profundezas da alma. A sua busca é pela perfeição, de forma a se destacar, em seu
próprio julgamento, como a última palavra em distinção profissional. Busca
expressões de profundidade e percepção rara e não o que se comunica facilmente à
pessoas comuns. Na verdade, a sua motivação por especialização tende a fazer
com que não goste de pessoas comuns ou medíocres. Admira o refinamento, a
exclusividade, a sabedoria, a autoridade especializada, a distinção única, a perfeição
profissional, valores interiores, senso de espiritualidade, consciência de fé filosófica
e reconhecimento da herança cultural. Possui intuição e percepção refinadas; com
isso percebe ou vê o que para os outros ainda é imperceptível; pode vir a
desenvolver alguma forma de contato com outras realidades não físicas. Mostra-se
místico (a) e misterioso (a). Detesta ser mandado (a), não gosta de desconforto
físico, de barulho e confusão. É observador (a), pesquisador (a) e quer descobrir o
porquê de tudo. Não gosta de ter a liberdade tolhida, quer paz e tranquilidade para
viver consigo mesmo (a); sonhar e meditar. É íntegro (a) e autossuficiente; possui
senso de justiça. Deseja aprender sempre mais e entender de tudo. Está sempre em
busca de mais sabedoria. Sua harmonia conjugal depende de não exigir demais da
(o) parceira (o) ou atribuir a ela (e) culpas infundadas e procurar coisas que não
existem. Por ser íntegro (a), não tolera injustiças e está sempre pronto (a) a
defender os fracos e oprimidos. Muitas vezes é questionador (a) e intransigente, até
mesmo ríspido (a), se perceber os seus princípios ou verdades sendo violados.
Aspira a perfeição e daí parecer inseguro (a), cheio de dúvidas com dificuldade para
se decidir, questionando e pedindo outras opiniões, exigindo explicações e
comprovações até concluir o que é certo por si mesmo. Apesar disso aprende com
facilidade e tem excelente memória.
Quando inseguro (a) tende a se isolar, emudecer; achar explicações filosóficas,
psicológicas, espirituais, cármicas, e tenta explicar tudo racionalmente, dissecando,
analisando, criticando com frieza e distância. Bebidas alcoólicas, cigarros e drogas
em geral são venenos para o seu organismo; evite-os. Será muito mais feliz se viver
próximo à água, seja de um rio, lago ou mar.`,

8: `Deseja Poder Pessoal e Sucesso Financeiro – Domínio no mundo empresarial;
liderança, força, determinação e faro para negócios; sucesso através da
organização, eficiência e visão ampla; dinheiro e grandes ambições; ser respeitado
(a) em seus valores; acumular bens materiais; distância de rotina e detalhes; justiça,
honestidade e inspiração; conhecer pessoas profundamente; ter tudo em ordem e
livrar-se das confusões com garra e coragem; vencer na profissão e na vida.
O Número 8 na Motivação indica que você realmente aspira uma posição de poder e
influência no mundo. Deseja tudo em grande escala. Geralmente tem facilidade para
tomar decisões importantes, pois sabe o que quer em termos materiais e é capaz de
avaliar com precisão pessoas e situações no que diz respeito às suas exigências.
Deseja a prosperidade material e possui clara visão financeira. Aprecia a eficiência
sob todas as formas e faz bom juízo de valores, particularmente em considerações
importantes onde o dinheiro está envolvido. Possui a habilidade de organizar
grandes grupos e empreendimentos com sucesso. Nasceu para o mundo dos
grandes negócios e adora lutar contra seus opositores. Normalmente é ambicioso
(a) e quer poder, riqueza e sucesso. Possui mente determinada e realizadora.
Geralmente não luta contra os obstáculos, prefere contorná-los, e desse modo
consegue transformar opositores em colaboradores. Não é precipitado (a), nem
impulsivo (a), nem muito ousado (a), gosta de segurança e de reconhecimento dos
seus feitos. É intelectual, analítico (a), equilibrado (a) e muito eficiente naquilo que
se propõe a fazer. Possui tato, visão e imaginação para os negócios e geralmente é
bem sucedido (a). O seu objetivo é o dinheiro, os bens materiais e o poder. Possui
surpreendente força, coragem e energia que aplica em tudo o que faz, usando a
capacidade, previsão, responsabilidade e prudência que lhe são características.
Quando inseguro (a) tende a anular os outros; acabar com a concorrência; controlar
a vida dos outros; ter cautela exagerada; não se arriscar; se ofender quando não lhe
ouvem; muda as pessoas ou as coisas com críticas arrasadoras; não gasta nada ou
só usa marcas famosas. Precisa ser justo (a), persistente, analítico (a) e agir com
diplomacia para conseguir o que deseja.`,

9: `Deseja Entendimento Universal – Aconselhar e servir o mundo, ser o (a) guru;
concluir as coisas; entender a lei suprema, melhorar as condições de tudo e de
todos, de qualquer ser humano; amor impessoal e grande sedução; desprendimento
e visão ampla; distância de raízes e detalhes; cultura geral e ter coisas belas;
emoção forte e determinação; vida pessoal secundária em relação às outras
pessoas; fama e sucesso, ser aceito (a), passar boa imagem de si; talento para
suprir suas fantasias.
O Número 9 na Motivação representa o seu desejo de descobrir em todos algo com
que possa se identificar. Quer ver a vida de uma perspectiva mais ampla e luta
continuamente para enfatizar os vínculos que a humanidade tem em comum e não
as diferenças que distinguem uns dos outros. Tem uma maneira peculiar de ver as
coisas, o que o (a) leva facilmente ao fanatismo. A intuição é fortemente ativa; pode
despertar outras percepções sobre a realidade não física. Sente necessidade de dar
e receber amor. É gentil e clemente, de uma consciência expansiva dedicada à
elevação da humanidade. Está no ápice da realização intelectual e espiritual. Busca
sempre o conhecimento, e quer ensinar, aconselhar e servir à humanidade. Possui
um saber autoconsciente que, se for desenvolvido, pode se revelar genial. Tem
raciocínio rápido, vivo, ponderado e lógico para solucionar problemas que esteja
enfrentando e os que eventualmente possa surgir. Gosta de ser elogiado (a), mas
não espera por isso, pois normalmente suas ações são altruístas e desprovidas de
interesse pessoal. Às vezes falta concentração e persistência, principalmente no
campo profissional; com isso perde boa parte de suas fantásticas ideias. É corajoso
(a) e destemido (a) diante do perigo e não tem medo da derrota, pois sabe se
levantar com redobrada energia. A sua principal característica é o amor
incondicional e a universalidade em seus sentimentos e visão. Consegue superar o
egoísmo. Realiza-se na alegria que encontra nas mínimas coisas, na simpatia que
sente por todos, na congruência de seus princípios e na contenção instintiva que
acompanha tudo o que faz. Gosta de viagens e contatos no exterior; sente que todos
os povos e raças são seus irmãos e quer conhecê-los e ser conhecido e amado por
eles.
Quando inseguro (a) tende a usar os outros, sentir-se vítima, deixar as
oportunidades passarem; alienar-se, dissimular, ficar apático (a), manipular as
pessoas e se achar o próprio Deus ou iluminado (a) pelos espíritos; a deprimir-se.
Precisa desenvolver as suas boas qualidades; do contrário poderá se tornar solitário
(a) e introvertido (a), dominado (a) por seus conflitos íntimos e passível de
incompreensão por si próprio, e daqueles que o (a) rodeiam.
`,

11: `Deseja um Mundo Melhor – Idealismo, qualidade em vez de quantidade; apreciar
coisas refinadas; visão e criatividade; encontrar a fonte da juventude; descobrir o
remédio para todos os males; pairar acima das massas; interesse pelas
necessidades universais tal como as vê com seus próprios olhos; fama e
reconhecimento; que suas opiniões prevaleçam.
O Número 11 na Motivação indica que você deseja a evolução espiritual e o
desenvolvimento do seu poder pessoal acima de tudo. Mostra que vem trilhando
esse caminho há muito tempo, provavelmente por mais de uma encarnação. Através
da evolução espiritual aprendeu muitos dos mistérios da vida e da morte. Tem
coragem, talento e habilidade de liderança. É compreensivo (a), sábio (a), intuitivo
(a) e, muitas vezes, clarividente, com habilidades extremamente sensitivas.
Destemido (a), enfrenta com coragem os eventos inesperados. É um visionário e
gosta de se ver rodeado (a) de pessoas que o (a) admiram, mas sempre fazendo
prevalecer os seus pontos de vista; dá pouca importância às ideias alheias.
Normalmente é atraente e faz sucesso com o sexo oposto, conquistando facilmente
simpatia e popularidade. Por suas qualidades diplomáticas, às vezes contraditórias,
consegue manter em harmonia os mais diversos grupos antagônicos. Não é
disciplinador (a), mas possui grande senso de organização em sua aparente
desordem. É adepto (a) da harmonia das formas, dos métodos persuasivos, da
elevação moral das coisas e pessoas e de tudo que tem sentido superior. Apesar de
não concordar, é muito vulnerável na sua sensibilidade, magoando-se
profundamente com fatos que a outros nem sequer preocuparia.
Quando inseguro (a) tende a ficar nervoso, emocionalmente instável, sem rumo na
vida; avarento (a), negligente com o lado material; inquieto (a), vago (a), egocêntrico
(a), distante, paranoico (a) e depressivo (a); desatento (a) às necessidades
humanas. Por sua forte intuição e capacidade psíquica, é aconselhável seguir seus
pressentimentos, sem se ater a conselhos alheios ou ideias preconcebidas.
`,

22: `Deseja Ordem no Mais Alto Grau – Individualidade, paciência, diplomacia,
cooperação; expressão das próprias ideias e sentimentos; otimismo, liberdade para
progredir, harmonia; espiritualidade, cultura; poder material, capacidade
administrativa, amor universal; empolgar as massas; talento artístico, visão e
inspiração; construir o futuro.
O Número 22 na Motivação revela o seu desejo de continuar as realizações tangíveis
de vidas anteriores. Deseja a realização material. É um (a) mestre construtor (a). Sua
alma ambiciona deixar o mundo como um lugar tangivelmente melhor. Necessita
manter o equilíbrio mental enquanto expressa seus ideais de modo prático. A sua
maior preocupação é o bem estar e a segurança de toda a humanidade. É prático
(a), habilidoso (a), honesto (a), cordial, idealista, inspirado (a) e eficiente organizador
(a) com grande potencial de realização. Quer dar a sua contribuição para o gênero
humano. Deseja carinho e afeto, porém, em vista de sua severidade e de ser
sistemático (a) em tudo e com todos, deixa de atrair e desfrutar os afetos.
Inconscientemente, se deixa levar pelos sentimentos dos outros esquecendo os
seus. É otimista convicto (a) e enfrenta com coragem os obstáculos, por mais
difíceis que sejam. Possui grande capacidade de realização e conhecimento
intuitivo. É internacionalista; seu poder e influencia são de longo alcance, e se
estende por várias áreas. Possui grande capacidade para lidar com grupos
eficazmente quer como administrador, incentivador ou líder ideológico ou político.
Quando inseguro (a) tende a exploração, ganância, a buscar riqueza sem ética; ficar
rancoroso (a), imprudente, corrupto (a) e manipulador (a); complexo de inferioridade
e destruição em grande escala. Cultive a determinação e a persistência, e trabalhe
sempre em benefício da humanidade, sem se esquecer de si próprio (a).`
};




export const impressaoTextos = {

  1: `O Número 1 na Impressão faz você parecer uma pessoa enérgica, determinada,
agressiva, autocentrada, egocêntrica, egoísta e direta. Geralmente vai direto ao
assunto sem muitos rodeios. Tem um senso de honra e integridade desenvolvidos e
reage prontamente se a pureza de suas intenções for desacreditada. Apresenta ao
mundo uma imagem de independência e capacidade executiva. Para muitos é como
um individuo único, separado da multidão comum, talvez um solitário em alguns
aspectos, mas definitivamente diferente. Os outros esperam que seja capaz de
assumir o controle de qualquer situação e de dirigir com eficácia uma organização.
O cultivo da imagem correta está em primeiro lugar em sua mente, dependendo da
sua personalidade, como se fosse uma carteira de identidade para ingressar no
meio social. Poderá aparentar ser demasiado (a) agressivo (a) e dominador (a).
Veste-se para estar entre os primeiros da moda e gosta de modelos exclusivos que
o (a) coloquem em destaque, diferente dos demais. Arrojado (a), não se contenta
com o segundo lugar. Poderoso (a), não conformista, intrépido (a) explorador (a) da
vida. Sexualmente agressivo (a) e com imaginação erótica. Pontos de vista pouco
convencionais a respeito do amor e do casamento. Passa a imagem de um (a) líder
por natureza, e vive promovendo novas ideias, suas ou dos outros. Para conseguir o
que deseja pode tornar-se teimoso (a), egoísta, obstinado (a) ou opressor (a). Tem
aparência sólida e autoconfiante. Entre os amigos é sempre escolhido (a) para
liderar, pois passa a impressão de ser um (a) vencedor (a). Insistência é a sua
característica marcante.
`,

2: `O Número 2 na Impressão faz você parecer tímido (a), sensível, condescendente,
gentil, compreensivo (a), cooperativo (a). É visto (a) como um (a) bom (a) seguidor
(a), porque a sua inclinação pessoal é esperar que alguém tome a iniciativa ou lhe
diga o que fazer. Diante disso, parece ter dificuldades em tomar decisões. Mostra-se
paciente, cheio (a) de consideração e até mesmo um tanto indefeso (a). Suas
vibrações são mais femininas, não importa o quanto se esforce por disfarçar.
Parece tranquilo (a) e modesto (a) e aparenta necessitar de um ambiente de paz
para viver. É atraente e popular ao sexo oposto. Aparenta ser incompleto (a) em si
mesmo (a), sempre necessitando de companhia. Aparenta ser subjugado (a), mas
na realidade, assim como passa essa impressão, mostra também ser uma pessoa
que se preocupa com a paz e harmonia dos outros. Veste-se com bom gosto, mas
discretamente. É extremamente impressionável. Sexualmente passivo (a) tende a
equiparar o amor com o sexo. Pode abrir mão de seus próprios desejos para agradar
a (o) parceira (o) e se arrepender mais tarde. Aparenta ser tímido (a), porém
confiante e capaz de superar as suas próprias inibições. Possui feições que o (a)
destacam de todos os outros. Passa a impressão de ser ardoroso (a), idealista,
calado (a), pacífico (a), diplomata; muito hábil em conciliações de interesses seus e
alheios. Quer amor, amizade, carinho, harmonia e paz. Gosta de se sentir
compreendido (a) e confortado (a). Quando só, parece sonhador (a) vivendo com a
cabeça nas nuvens. Por ser calmo (a), gentil e agradável desperta nos outros
segurança e confiança. Normalmente age com naturalidade e simplicidade; não
gosta de se exibir, seja em família ou numa roda social. A discrição é seu lema.
Aprenda a ser mais dinâmico (a), arrojado (a), criativo (a), e procure sempre inovar
sem medo de errar ou ser diferente.`,

3: `O Número 3 na Impressão revela um ser talentoso em alguma forma de
autoexpressão, mesmo que não exercida. Raramente esconde seus sentimentos e
sempre sabe o que dizer e que opinião emitir. Apresenta uma disposição feliz e
descuidada porque parece levar as coisas de forma mais leve que os outros. Pode
parecer infantil, ingênuo (a) e desleixado (a), mas é, invariavelmente charmoso (a) e
persuasivo (a) quando entusiasmado (a) ou tenta convencer os outros de seu ponto
de vista. Possui um senso natural de juventude, que o (a) faz parecer divertido (a) e
espirituoso (a). Quer ser feliz e trazer felicidade e entusiasmo para os outros. É
atraente e vive cercado (a) de coisas bonitas. Segue a moda e tem talento artístico
na escolha de suas roupas. No lado negativo, poderá se tornar negligente e relaxado
(a) quanto ao estilo escolhido e ao modo de se vestir. Mostra-se melhor quando é
alvo das atenções, e chama para si todas elas. Investe contra as adversidades; é
ardente, sensual, seguro (a) de si e sexualmente agressivo (a). É popular e gosta de
ser aplaudido (a), notado (a), admirado (a) e visto (a) como um (a) verdadeiro (a)
artista. Demonstra personalidade e espírito de profundidade, justiça, esperança,
filantropia, alegria e felicidade. Porém, quando dominado (a) por paixão ou ódio
perde o equilíbrio e o senso de justiça e acredita somente em seus próprios ideais.
Tem modos elegantes e sóbrios, próprios dos vencedores. É otimamente
relacionado (a) e muito querido (a) no seu meio, goza de prestígio e autoridade,
graças a sua marcante personalidade. Quando algo o (a) frustra, a sua autoestima
cai rapidamente. Evite constrangimentos e aborrecimentos, e não se preocupe
demasiadamente com seus projetos futuros.
`,

4: `O Número 4 na Impressão mostra que você é uma pessoa prática, centrada e dotada
de esforço e persistência necessários para empreender qualquer tarefa. Parece ter
mais força e resistência que a média, suportando durezas e privações que os outros
não suportariam. Aparenta ser franco e direto mostrando sempre a verdade como
ela é. É “o (a) trabalhador (a) do mundo”, incansável, disciplinado (a), determinado
(a) e perseverante, que respeita os valores e o empreendimento, e pode-se contar
que faça mais que sua obrigação. É invariavelmente justo (a) e direto (a) em todas
as transações materiais, tentando mostrar a todos que a honestidade é a melhor
política. Passa a imagem de ser conservador (a), autodisciplinado (a) e ordeiro (a). A
sua imagem é a de um ser honrado, escrupuloso e talhado para a sua função.
Prefere viver no campo a morar na cidade. É elegante no vestir, preferindo o clássico
ao moderno. Boas roupas esportivas são do seu agrado, por serem resistentes e
necessitarem de poucos cuidados. Escolhe as suas roupas pela boa qualidade e
praticidade, mas é conservador (a) quanto no modo de vestir, bem como na sua
conduta. Sexualmente é estável e precisa de interação recíproca. Sente-se à vontade
com um modo de vida convencional. É pessoa de modos e atitudes consistentes. Às
vezes é excêntrico (a) e de difícil compreensão, principalmente para aqueles que
não fazem parte do seu convívio. Consegue agradar à primeira vista pela sua
aparência sólida e estável. É detalhista, ordeiro (a), natural no andar, de gestos
simples e graciosos (as). Bom ouvinte está sempre interessado (a) nas conversas
alheias quando estas lhe parecem sinceras e concretas. Aprecia tudo o que afirma e
confirma a posição do indivíduo, ama a autoridade, a lei que o ampara e a
segurança, sua, da família e das pessoas que o (a) rodeiam.
`,

5: `O Número 5 na Impressão revela que você invariavelmente sai da linha de uma
forma ou de outra, e insiste em fazer as coisas de modo diferente dos outros. Às
vezes, sob certas condições, essa habilidade para melhorar e buscar novas soluções
leva a uma mudança construtiva e a uma descoberta fundamental para todos os
envolvidos. Geralmente quando jovem é considerado (a) como difícil de lidar, pois
parece saber com absoluta certeza o que é melhor para si. Tem grande magnetismo
junto ao sexo oposto e possui forte apetite sexual. Gosta de atividades constantes,
variedades e mudanças, e acredita que a alteração é o progresso. Os outros o vêm
como um (a) vendedor (a) nato (a), um (a) propagandista ou um (a) promotor (a) de
eventos. Gosta de figurar sempre entre os dez mais bem vestidos ou, pelo menos,
de estar avançando quanto ao estilo vestindo roupas de cores vivas com bom gosto.
A impressão que passa é a do (a) caçador (a) de prazeres, o (a) viajante; catalisador
(a), agitado (a), entusiástico (a) que desafia todos os obstáculos. É divertido (a) e
atrai as atenções de todos. Adora multidões, surpresas e aventuras. Sexualmente é
agressivo (a), ardente e enérgico (a). Topa qualquer parada. É um ser cativante,
interessante, agradável e magnético. É leal e atrai tanto amizades como inimizades
com muita facilidade. Está sempre à procura do mais profundo nas pessoas e nas
coisas; gosta de se antecipar, descobrindo ou ditando modas. Uma das suas
maiores virtudes é o entusiasmo diante de qualquer inovação ou novidade. Mesmo
com idade avançada terá sempre uma aparência alegre e juvenil. É sempre bem
recebido (a) e querido (a) de todos e causa certa curiosidade pela versatilidade.`,

6: `O Número 6 na Impressão revela uma aparência de pessoa amistosa e agradável,
não importando como se sinta. Passa a impressão de estar mais preocupado (a)
com os valores dos outros num contexto social do que com suas próprias
motivações. Tende a se envolver e a ver o problema do ponto de vista do outro. A
sua aparência é a de um (a) professor (a) ou instrutor (a) nato (a). Parece estar
frequentemente falando sobre os assuntos dos outros, pois acredita sinceramente
que conhece de coração os interesses alheios. Possui uma vibração social e um
talento natural para se socializar e deixar os outros à vontade. A sua presença atrai
as pessoas que vêm para se aconselhar, adquirir conhecimento, se curar, pois você
possui uma aparência paternal/maternal que transmite conforto e segurança. Tem
bom senso de equilíbrio e simetria; por esse motivo, consegue ver todas as peças
individualmente e, ao mesmo tempo, como parte de um todo. É cuidadoso (a) na
escolha do vestuário, e demonstra talento artístico, preservando a harmonia das
cores em qualquer combinação que escolher. Prefere estilos confortáveis em vez de
modelos exclusivos e é minucioso (a) na escolha de tecidos macios e harmoniosos.
Mostra-se autoritário (a), porém esforça-se para harmonizar um relacionamento; é
intimamente romântico (a) e sentimental. Extremamente leal, muitas vezes irá se
sacrificar em favor daqueles a quem ama. Prefere conforto e estilo. Sexualmente,
aparenta ser passivo (a) e convencional, mas torna-se dominador (a) quando
inseguro (a). Suas atitudes dependem da (o) parceira (o); procura sempre agradar.
Pode ser contraditório (a), pois do mesmo modo que promove a harmonia, também
atrai confusão. O 6 o número da sedução, do vício e da virtude, das incertezas no
casamento e também do amor puro e simples. Pode inclinar-se excessivamente
para o sexo oposto e para os prazeres materiais, ou, ainda, deixar-se dominar pela
violência das paixões, podendo vir a ter numerosas relações amorosas durante a
vida, caso não tenha limites morais postos pela educação ou religião.
`,

7: `O Número 7 na Impressão mostra uma preferência por ficar só a estar em grupo.
Essa característica pode aparecer como uma distinção notável ou apenas como
uma excentricidade que impede o relacionamento social. Geralmente você deixa a
impressão de que tem algo a esconder ou que reluta em compartilhar com os
outros, adotando assim um ar de distanciamento que não permite que os outros o
(a) conheçam melhor. Mostra qualidades do (a) especialista e do (a) perfeccionista
solitário (a). Suas atitudes e comportamento revelam que vê o mundo de um ponto
de vista raro. Quando é finalmente compreendido (a) pelos outros, sua contribuição
empresta uma qualidade de profundidade nunca sentida antes. Um ar de mistério e
segredo o (a) envolve. Aparenta ser um (a) filósofo (a), místico (a), poeta (a); um (a)
pensador (a), cientista e pesquisador (a), cujos afastamentos temporários são uma
ocasião para suas meditações. Demonstra ser equilibrado (a), calado (a), distante;
vive numa torre de marfim. É refinado (a), bem organizado (a), calmo (a), faz
autocrítica constante; é mental e não físico. É asseado (a), bem arrumado (a) e
inclinado (a) a usar roupas de cores clássicas; evita cores claras ou vivas e veste-se
com bom gosto. Sexualmente é realista e não é impetuoso (a). Demora para ficar
suficientemente interessado (a) a ponto de se envolver num relacionamento. Seu
grande desejo de se ver cercado (a) de livros numa atmosfera de paz, beleza e
tranquilidade, o (a) leva a imaginar-se sábio (a); nesse refúgio espera que todos o (a)
venham consultar. Possui natureza expressiva, única e imponente; a sua
personalidade única o (a) diferencia dos demais. Personalidade exigente, sincero (a),
fiel e honesto (a) com os amigos, exige o mesmo deles. Vulgaridades, delongas e
atitudes passivas de críticas o (a) deixam triste e depressivo (a).`,

8: `O Número 8 na Impressão acentua uma atitude de comportamento acima das
tendências pessoais. Tem personalidade dinâmica e as pessoas reconhecem a sua
autoridade, pois aparenta ser abastado (a) e controlado (a). Existe um ar de
executivo (a) na sua aparência; capaz de dirigir grandes negócios. Emite poder e
força pessoal que é reconhecida onde estiver. Parece possuir uma fonte inesgotável
de força e resistência física. Possui a qualidade do julgamento, da tomada de
decisões e da influência do poder de manipulação para equacionar esses dois
elementos. Possui talento para sentir quando as coisas estão fora da linha ou
equilíbrio, e está invariavelmente certo (a), apesar de relutar em assumir as
consequências, se fizer algo a respeito. Assim, um aspecto óbvio da sua
personalidade é essa habilidade enérgica para lidar efetivamente com todos os tipos
de estruturas de poder. A aparência bem sucedida é o seu padrão; daí a insistência
em usar roupas bem acabadas e de boa qualidade. Levado (a) a extremos é o
espalhafatoso (a), o esbanjador (a), que deseja impressionar a todos através de
roupas de cores vivas e da exibição de grandes maços de dinheiro. Impressiona pela
aparência dominante e atraente. Preocupa-se com a impressão que causa aos
outros. É dominador (a), leal e generoso (a) num relacionamento. Sexualmente
prático (a) e agressivo (a), conta com a participação da (o) parceira (o). Aparenta
imponência, e influência mesmo que esteja com problemas pessoais ou financeiros.
Seus modos são calmos e equilibrados; sonha ser o (a) comandante (a) de algum
grande empreendimento comercial, ou um (a) poderoso (a) executivo (a) chefiando
muitos colaboradores. Ordeiro (a) e prático (a) procura tornar o seu local de trabalho
agradável e eficiente, com todas as coisas necessárias ao seu alcance para o bom
desenvolvimento profissional. Quando é ferido (a) em seu amor próprio, fica
passível de impulsos de mau humor e repulsa brincadeiras. Pode-se contar com
você, mesmo que normalmente dê a impressão de ser frio (a) e calculista. Gosta de
ser notado (a) e de dar impressão de boa situação financeira, porém sem
exibicionismo ou falsa ostentação. Costuma ser prudente e comedido (a) nas
atitudes e gastos.
`,

9: `O Número 9 na Impressão reflete uma personalidade, supostamente, no nível mais
alto da compaixão. Aparenta possuir uma amplitude de compreensão bem como um
magnetismo pessoal que é universal em extensão. Seu modo cordial, amistoso e
charmoso agrada a todos com quem entra em contato, e a abnegação que emana
faz com que seja amado (a) por muitos. Demonstra ter tolerância e compaixão pelos
outros, o que lhe permite perdoar e esquecer com facilidade. É generoso (a) para
com os necessitados e demonstra ter preocupações humanitárias. Aparenta ter
consciência de tudo o que está à sua volta, mas tem pouca disposição para agir. O
seu grande poder de atração parece residir em algum apelo aos instintos básicos, o
que pode levar a resultados imprevistos. Impressiona pela capacidade de ser
impessoal, de amar incondicionalmente e prestar serviços para melhorar as
condições de vida dos outros. Veste-se de forma artística, com um toque dramático,
mesmo desejando que suas roupas sejam bem ajustadas e confortáveis. Tende a
ser bonito (a), tanto no rosto como na silhueta e, caso se preocupe em cuidar da
pele e manter uma boa postura, poderá parecer jovem por muito tempo. Uma vez
envolvido (a) num relacionamento passa a ser um (a) grande amante, na cama ou
fora dela. Dócil, porém veemente! Atrai simpatias e antipatias na mesma proporção.
Sonha em ser um (a) humanitarista, ávido (a) por servir, compreensivo (a) em
relação aos sofrimentos alheios e uma fonte de conforto e aconselhamento.
Realiza-se na solidariedade e esforço que emprega para resolver problemas alheios.
Possui rara inteligência e profundos conhecimentos sobre os mais diversos
assuntos, mesmo sem uma educação suficiente. Sua aparência imponente,
personalidade marcante, sabedoria, bondade, compreensão e ponderação inspiram
confiança em todos que o (a) conhecem.`

}



export const expressaoTextos = {

  1: `O Número 1 na Expressão revela uma personalidade independente, desembaraçada,
agressiva, forte, dominadora e enérgica; original, inventiva, pioneira, ambiciosa,
determinada e pouco cooperativa. Ao ser você mesmo (a) é natural que algumas
pessoas o (a) considerem sob uma luz negativa, porque é assim que você as afeta.
Isso, no entanto, não deve se transformar em critério para julgar se está agindo de
modo positivo ou negativo. Você deve ser você mesmo (a), não importando como
sua vibração afeta os outros. Existe na natureza algo de todas as qualidades. Assim
como existem pessoas nascidas para liderar, existem outras para seguir. Cada um
deve encontrar o seu próprio nível de ação. O desafio é ser você mesmo (a) e deixar
que os outros descubram seus próprios níveis, sem interferir em suas funções ou
destruí-las.
Você representa o verdadeiro Eu Sou, consciente de si como o centro do mundo,
preocupado (a) com seus desejos individuais e procurando a autopreservação,
acima de tudo. Usa os seus recursos para seu próprio prazer e tem pouco interesse
pelas necessidades dos outros. Isso não é necessariamente mau, uma vez que está
aqui para desenvolver o Eu, mas não deve permitir que isso seja levado ao extremo
do amor próprio e se transforme em egocentrismo. As palavras que usa com mais
frequência são “eu” e “eu sou”. A liderança é a sua palavra chave e precisa aceitar o
destino de liderar enquanto outros o (a) seguem. A sua própria iniciativa
independente o (a) ajudará a obter sucesso através da determinação de defender as
suas crenças, mesmo sob constrangimento. Demonstrando autoconfiança e
habilidade de vencer, será bem sucedido (a) em qualquer circunstância.
Em vista da sua tremenda ousadia, você vive a sonhar com grandes e pioneiros
empreendimentos; está sempre à procura de novidades. Seu êxito profissional,
afetivo e pessoal dependerá exclusivamente do seu modo de pensar e agir. Sendo
individualista, dificilmente aceita conselhos ou sugestões dos outros. A tendência a
ser ditatorial, dominador ou demasiadamente agressivo (a) poderá causar
dificuldades ao seu progresso e atrair antipatias e má vontade de seus
colaboradores. Sua capacidade de liderança e sua vocação executiva lhe destinam
posição elevada. Trabalhos subalternos, sem movimentação, o (a) deixam
insatisfeito (a), deprimido (a) e estressado (a). Deve trabalhar por conta própria ou
em cargos de chefia. Desenvolva seu imenso potencial e leve seus projetos à
conclusão; seja prudente, ponderado (a) e aja com sabedoria para alcançar seu
objetivo maior que é tornar-se independente.`,

2: `O Número 2 na Expressão revela que você, sob muitos aspectos, é o oposto do
numero 1. É dependente, não agressivo (a), vacilante, gentil e receptivo (a). Sua
força reside na compreensão, sensibilidade, paciência, tato, diplomacia e ritmo. É
particularmente adepto (a) do assim chamado meio termo construtivo e,
naturalmente, cooperativo (a) e simpático (a). É bom (a) seguidor (a) e ouvinte,
geralmente cuidadoso (a), deliberado (a), e leva muito em conta os pequenos
detalhes e as pequenas coisas da vida, que, para você, constituem indicações
válidas de coisas maiores e mais importantes. Precisa da companhia de alguém que
interceda por você.
Seu desejo de paz o (a) coloca no papel de conciliador (a) e coadjuvante. Seu
destino poderia levá-lo (a) a atuar como embaixador (a) da boa vontade em nações
estrangeiras, e assim trazer incontáveis benefícios à humanidade. Use o seu tato e
diplomacia inatos para lidar com as situações difíceis da vida. A missão como
pacificador (a) é um dom mágico para criar um mundo melhor para se viver. Tem
também um senso aguçado para perceber os opostos, o que lhe permite
desenvolver seus talentos em linhas criativas. Expandindo essa percepção não
apenas maximiza o seu potencial artístico, mas intensifica também suas
habilidades como mediador. Terá facilidade para integrar-se a qualquer organização
ou grupo ao qual se filiar.
No lado negativo de seu caráter, destaca-se a hesitação constante e a falta de
iniciativa, com tendência para adiar decisões importantes por qualquer motivo,
levando-o (a) a situações delicadas, principalmente no âmbito profissional e afetivo.
Com destreza e sabedoria, trabalha mais nos bastidores e na retaguarda para levar
alegria e amor a todos. Cooperativo (a) e tímido (a) pode ser vulnerável e até passivo
(a), mas sempre atento (a) aos detalhes do ambiente. Nasceu para trabalhar em
conjunto com outras pessoas. Dificilmente se adapta ao comando em qualquer
nível. É detalhista e prefere fazer uso das suas habilidades naturais lidando com
pessoas e satisfazendo seu eterno desejo de harmonia. O afeto lhe é muito
importante, por isso, não pode viver na solidão. Um lar confortável é imprescindível
para a sua vida e segurança, sujeitando-se às vezes a sacrifícios, renúncias e
humilhações para preservação do mesmo e para a união, paz e harmonia de sua
família. Cultive as suas boas virtudes: compreensão, paciência e colaboração, e seja
um bom (a) conciliador (a) resolvendo todas as situações com diplomacia.
`,

3: `O Número 3 na Expressão revela, sob alguns aspectos, uma perfeita combinação
das vibrações de 1 (liderança) e 2 (cooperação), que resulta numa alegre forma de
autoexpressão criativa. Como o 1 é a força espiritual do início e o 2 é a reflexão
sensível do que pode ser, o 3 é o todo composto, que dá justificação ao que houve
antes no 1 e no 2. O três é produto da feliz união de 1 e 2.
Geralmente é entusiasmado (a), otimista, divertido (a), imaginativo (a), talentoso (a),
decorativo (a) e cheio (a) de sorte. Sua qualidade essencial é para a síntese – para
juntar uma miscelânea de itens formando um todo coerente. Tem o dom de fazer os
outros verem. Possui uma qualidade jovem que chega a ser ingênua, não
sofisticada, infantil, imatura e petulante, mas também tem a frescura e a
espontaneidade de uma criação totalmente nova. As suas qualidades sobressaem
melhor quando a responsabilidade, a praticidade e a persistência não precisam ser
levadas em conta ou muito a sério. Sua abordagem vitrine da vida deve ser
valorizada por aquilo que parece ser no momento, sem preocupações pelo que
aconteceu e pelo que vai acontecer. É naturalmente franco (a) e aberto (a), mas
tende a dispersar seus interesses de forma que é difícil mantê-los dirigidos para um
ponto por muito tempo. Tem um talento natural para a persuasão e pode ser um (a)
excelente vendedor (a), se o assunto ou produto cativa seu interesse ou entusiasmo.
O medo é o seu pior inimigo; medo, pessimismo e mau humor são fatores negativos
para você.
Tem talentos que lhe permitem escolher ocupações ou passatempos diversos. Sabe
inspirar e fazer os outros subirem na vida. Poderá desempenhar o papel de ator
principal e desenvolver seu talento de expressão e comunicação através de dramas,
elocuções ou línguas diversas. Explore as artes e a literatura. Estude as religiões do
mundo. Isso poderá ser uma saída construtiva para as suas energias, uma vez que
tem a inclinação natural para as filosofias espirituais. Para ser bem sucedido (a) use
o seu tempo com inteligência. Não desperdice suas energias em muitas direções de
uma só vez para assim protelar a realização de um destino valioso. Promova a
amizade entre seus iguais, sendo amigo (a) quando procurado (a). Você espalha
alegria e luz através do seu talento e autoexpressão. Mantenha o otimismo como
sua marca registrada.
É criativo (a), animado (a), sociável, expressivo (a) e cheio (a) de imaginação; assim
vive criando novos projetos e concretizando desejos e ideais, com bom gosto,
imaginação e originalidade, sem se importar se beneficiam a si próprio ou toda
humanidade. É apaixonado (a) pela família; gosta de receber e dar amor e sente-se
feliz ao contribuir para a felicidade dos outros. É ambicioso (a) e dificilmente desiste
dos seus ideais e dos seus objetivos. Detesta receber ordens e trabalhar em
profissão ou posição inferior. Sabe que possui qualidades superiores e sabe como
tirar proveito de qualquer situação que o (a) deixe feliz. Não se aborrece facilmente,
nem se entrega a preocupações desnecessárias, sendo a alegria e o entusiasmo as
suas qualidades mais importantes. Essa alegria e esse entusiasmo podem ser só
aparentes, pois raramente permite que outros conheçam seus problemas. Possui
grande envergadura moral. Nos momentos de cólera é impetuoso, porém não
guarda ressentimentos. Está destinado (a) a obter progresso social e realizar suas
vastas ambições tendo êxito em todos os seus empreendimentos. No amor, deve
escolher bem a (o) parceira (o), pois existe a tendência a ter várias experiências
amorosas ao longo da sua vida.`,

4: `O Número 4 na Expressão revela maturidade. Um ser que já nasceu “velho e sério”.
Tem os pés firmemente plantados no chão e prefere os fatos e as realidades
materiais da vida aos valores intelectuais. É geralmente sólido (a), prático (a),
econômico (a) e realista. Possui um grande talento para o senso comum, esforço
físico, persistência, ordem, regimentação e disciplina. Tem, também, uma alta
receptividade à dor, desconforto e dureza da vida. Na verdade, pode ser um pouco
duro e cruel com os outros, mas justifica isso sendo também exigente consigo
mesmo (a). Confia na lógica e no que pode detectar dos fatos materiais que se
apresentam. Tende a ser teimoso (a), difícil de persuadir e, sob alguns aspectos, um
tanto cego (a). Certos assuntos têm de ser provados repetidas vezes, porque é lento
(a) para aprender e aceitar. O lado físico e prático da vida é a área em que serve
melhor. É geralmente confiável e, invariavelmente, pode-se contar com que pegue
uma tarefa e a leve até o fim.
Os seus melhores talentos são para construir produtos tangíveis e úteis. Necessita
ver aquilo que construiu. O 4 é o construtor do mundo, a rocha sobre a qual se forma
toda substância terrena. É bem organizado (a) nos seus pensamentos e pode dirigir
o seu estabelecimento com eficiência. Transmite um ar de estabilidade. Como
resultado, outros confiarão em você para que o serviço seja feito de modo eficiente
e apropriado. Lida bem com o dinheiro e, por esse motivo, poderá considerar o
mundo financeiro como fértil para os seus talentos. As suas palavras chaves são
impaciência, honestidade, determinação e confiança. Exige obediência em família e
pratica a abnegação a fim de cumprir deveres, seja de modo real ou imaginário. O
seu agudo senso de valores faz com que tenha aversão á mediocridade. Sabe que
aquilo que vale a pena ter, vale a pena esperar.
O novo lhe assusta e sente-se mais à vontade lidando com atividades rotineiras e já
consagradas pela experiência. Gosta de construir coisas, mesmo que
aparentemente não tenham maior serventia, pois é dotado (a) de grande habilidade
manual. Não gosta de discussões fúteis, sem motivo aparente; não guarda rancor,
ressentimentos ou ódio de qualquer espécie; esquece rapidamente qualquer ofensa
ou constrangimento. Tem capacidade para assumir grande responsabilidade e
ajudar a proteger os outros. Será mais bem sucedido (a) trabalhando em grupo, em
algo já consagrado pelo tempo, e o seu poder de influência tende a ser de longo
alcance.
`,

5: `O Número 5 na Expressão revela uma ruptura fundamental com os padrões
vigentes. Seu objetivo é ser diferente, de alguma forma, de todos os outros. Precisa
obter vantagem sobre os outros na disputa. É particularmente atento (a) aos cinco
sentidos físicos: tato, visão, audição, paladar e olfato. Tem um talento natural para
descobrir maneiras novas, e muitas vezes melhores, de fazer as coisas. O
oportunismo é um recurso natural seu e não deve hesitar em fazer uso dele sempre
que lhe parecer bom, mesmo porque as oportunidades vêm e vão rapidamente.
Preocupa-se muito com velocidade e geralmente considera que qualquer coisa se
torna melhor quando sua velocidade é aumentada ou seu efeito sensorial
acentuado. Pode ser ótimo (a) animador (a) ou produtor (a) de eventos.
Muitas transformações ocorrem na sua vida e sua missão poderia bem ser a de
promover o progresso através da disposição de aceitar mudanças. Definitivamente
não está amarrado à orientação antiga ou a ideias ultrapassadas e princípios já
estabelecidos. Está disposto (a) a aceitar conceitos novos e outros pontos de vista,
e mesmo a ousar reivindicar a liberdade de sugerir novas maneiras de operação.
Tem a habilidade de apresentar coisas novas em termos lógicos e aceitáveis. Faz
das mudanças trampolins e, inteligentemente, as transforma em experiências de
crescimento. Todavia, não esquece as convenções, pois, na realidade, não é um (a)
rebelde. Em vez disso, propõe novas ideias para promover o esclarecimento; tem a
coragem e a disposição de deixar o velho e experimentar o novo. É bastante fluente
e expressivo (a) com as palavras e poderá constatar que escrever, lecionar ou
vender são saídas perfeitas para esses talentos.
O 5 é o número dos criativos, ousados, agitados e amantes da liberdade. A
característica deste número o (a) impele a viajar pelo mundo sempre em busca de
saber, de novas experiências e de prazer. É sociável, agradável e sempre bem vindo
(a) em festas e reuniões. Gosta de ocupações diferentes que permitem estar em
contato com pessoas, agir e expressar-se livremente. Detesta receber ordens,
principalmente de pessoas com estudo ou capacidade inferior às suas. Detesta
trabalhos pesados, enfadonhos, cansativos; prefere trabalhos intelectuais, ou
aqueles que o (a) colocam em destaque, como chefe de vendas, de marketing, de
criação, ou qualquer outro que implique em viajar e explorar. Possui grande
capacidade para lidar com qualquer tipo de pessoas, ricas e influentes, ou
intelectuais. Deve procurar profissões ou interesses que se relacionem diretamente
com o público. Faça uso de seu temperamento corajoso para levar até o fim os seus
projetos, pois tende a começar muitas coisas e não finalizar nenhuma.`,

6: `O Número 6 na Expressão revela uma pessoa que se relaciona facilmente com os
outros de maneira natural, amigável e consciente. A sua essência é o ajustamento,
diminuição e possível eliminação ou renúncia de certos fatores pessoais para
melhor apreciar um composto grupal. É mais dirigido (a) ao grupo que para a
individualidade. A ênfase está menos no individual “eu sou” e mais no, “nós somos”,
ou “poderíamos ser” agindo em equipe. A sua vibração é da associação e do ideal e
cede voluntariamente em favor do grupo. Ensinar é um dos seus talentos, porque
pode facilmente se colocar na posição da outra pessoa e ver através de seus olhos.
É da educação, do lar, da comunidade, da estabilidade e da proteção. Seu senso
ético o (a) faz acreditar que os fins não justificam os meios e, por isso, às vezes tem
certa dificuldade para fazer certos negócios.
Adora a vida no lar e na família. Do tipo conjugal, tem a família como seu principal
interesse. É normalmente bom (a), respeitável, confiável e generoso (a). Gosta de
conforto e das delícias da vida. É muito sociável e um (a) bom (a) anfitrião (ã);
cumprimenta a todos e se comunica com qualquer um dos convidados numa
reunião social. Orgulha-se dos seus bens e gosta de demonstrar os talentos e
realizações da família. Deverá treinar talentos artísticos a fim de poder compartilhar
o seu senso de estética e de apreciação do belo com outros. Muitos artistas
famosos trabalharam com essa vibração, expressando inteiramente o seu profundo
e continuado amor pelos outros através do próprio trabalho.
A família é a base de sustentação de toda a sua vida. Amar e ser amado (a) é o seu
maior desejo; quando privado (a) de amor, sente-se completamente perdido (a), sem
saber o que fazer e como agir. Aparentemente calmo (a), pode explodir quando
contrariado (a) ou criticado (a). Quer ver todos saudáveis, alegres e repletos de
sucesso e felicidade. É pródigo (a) em favorecer os outros, nada esperando em
retribuição, mas assim mesmo às vezes se frustra, pois as pessoas que favorece
dificilmente retribuem ou são gratas; assim muitas vezes passa por “otário (a)”.
Excelente marido (esposa) e amante entrega-se por inteiro (a) aos seus amores ou
amizades, mas exige a mesma dedicação dos outros, o que nem sempre acontece,
frustrando-o (a) e desestabilizando-o (a) emocionalmente por longos períodos. Pode
se elevar, conquistar fortuna, se for incentivado (a) pelo amor e for compreendido
(a) pelos que ama.
`,

7: `O Número 7 na Expressão revela um caráter que busca na individuação e na
especialização o caminho de evolução. A sua vibração é, portanto, solitária e
simboliza perfeição através de uma espécie de autopurificação. Isso significa
eliminação de muitos padrões e questões mundanas em favor de algo mais seleto e
espiritualmente elevado. Cultiva uma visão muito especial da vida, não
compartilhada ou particularmente apreciada pelas pessoas comuns. Parece possuir
uma dupla visão que o (a) torna capaz de reagir a partir de duas perspectivas ao
mesmo tempo. Essa visão dupla empresta, sem dúvida, uma profundidade adicional
à introspecção, mas resulta também numa atenção especializada que não pode ser
comunicada facilmente aos outros, a menos que estes também compartilhem desta
mesma faculdade. Provavelmente é um (a) dos (as) menos compreendidos (as)
dentre todos os que o (a) cercam, seja na família ou em qualquer grupo social.
A amplitude do seu caráter e a seriedade o (a) destinam a ser um (a) professor (a)
de ética. Separa o verdadeiro do falso e pode descobrir e revelar alguns dos
mistérios da vida ao mundo em expectativa. Poderá se tornar um (a) pensador (a),
um filósofo (a), um (a) cientista, um (a) místico (a) ou um (a) fanático (a) religioso
(a). Alguns poderão considerá-lo (a) estranho (a) e difícil de entender, mas seguirão
seus ensinamentos e procurarão seus conselhos quando estiverem em dificuldade.
Seu exemplo e imagem pública poderão beneficiar toda uma comunidade e,
eventualmente, o mundo. Encontra força na solidão e sabedoria nos momentos de
silêncio, bem como força no seu próprio conhecimento. Em épocas passadas, os
que nasciam sob o número 7 eram colocados no templo para se tornarem
sacerdotes, ou sacerdotisas, pois todos tinham consciência dos seus poderes
psíquicos. Desenvolva suas forças psíquicas; o mundo se beneficiará.
É perfeccionista, muitas vezes arredio (a) e calado (a); demora a esquentar um
relacionamento. De rara intuição e discernimento, não segue ideias preconcebidas
nem se sujeita a fazer o que não acredita; só faz o que quer e gosta. É vibrante em
seus propósitos, honesto (a), leal, amigo (a), profundo (a) e elevado (a) moralmente;
não gosta de futilidades e ilegalidades; as atividades ilegais o (a) aborrecem. Poderá
tentar de tal maneira entender os outros que pode se perder em suas ânsias e
dúvidas e, neste caso, precisa empregar todas as suas forças e vontade para não se
entregar à bebida, calmantes ou outros tipos de drogas como fuga. Trabalhe em prol
da humanidade, em serviços que beneficiem a coletividade e que de alguma
maneira o (a) satisfaçam intelectual e espiritualmente; medite e busque inspiração
no seu Eu Superior.`,

8: `O Número 8 na Expressão revela confrontação com decisões importantes,
julgamentos, controle administrativo e prerrogativas executivas. Assim, você é
alguém que, invariavelmente, tem a mente forte, os sentimentos maduros e está,
geralmente, preparado (a) para percorrer o caminho inteiro até chegar àquilo que
quer. Tende a ser eficiente ao extremo, a ponto de incorrer numa possível
desumanidade em alguns casos. Os fins invariavelmente são levados a justificar os
meios, não importando a quantidade de rompimentos que isso possa causar entre
os que precisam ceder. Esta qualidade pode ser consideravelmente suavizada por
outros fatores na análise geral, mas quando predomina essa vibração, comporta-se
exatamente dessa maneira. Como as qualidades executivas tendem a ser
desenvolvidas, de uma maneira ou de outra, com todas as estruturas de poder, é
geralmente considerado (a) como a evidência mais alta de poder e controle
material. E como o poder é aquilo pelo qual a sociedade paga, o 8 é considerado,
também, a vibração do dinheiro. Geralmente poder e dinheiro caminham juntos, mas
nem sempre. Alguns querem e buscam o poder, mas não se importam
particularmente com o dinheiro envolvido. Outros preferem o dinheiro e estão
apenas interessados indiretamente no poder que ele traz.
Tem coragem e força magníficas, e atingirá suas metas através do esforço. O
reconhecimento, o sucesso e a riqueza serão seu destino adequado. A perseverança
na carreira, e longas horas de trabalho intensivo, apoiadas pela ambição, o (a)
elevam à posição executiva mais alta no campo escolhido. Nenhuma posição
inferior seria aceitável. Todavia, necessita acoplar suas forças materiais com o
espiritual e conseguir o domínio sobre si, antes de alcançar e conservar a posição
que visualiza com o trabalho na sua vida. Algumas pessoas com esse número de
vibração usam a sua tremenda força e resistência nos esportes e tornam-se atletas
extraordinários, expressando com isso a determinação de serem os primeiros nos
esportes e não no mundo dos negócios. Contudo, no fim das suas carreiras
esportivas, muitos atletas famosos terminam no mundo dos negócios.
Tem dificuldade para expressar seus sentimentos, parece frio (a) e evasivo (a), mas
na verdade é muito carinhoso (a), meigo (a), amoroso (a), carente de afeição e com
muito calor humano. Por causa dessas características tende ao materialismo, ao
acúmulo de bens materiais e a ganância de querer possuir a maior quantidade de
dinheiro e bens possíveis. É organizado (a) e muito dedicado (a) à profissão; sabe
lidar bem com situações concretas que requerem discernimento e constância. É
austero (a), prático (a), direto (a), seguro (a) de si e generoso (a), mas pode tornar-se
violento (a) quando as coisas não correm como deseja. Como é dotado (a) de alto
senso de justiça, jamais deve fazer qualquer transação comercial fraudulenta, pois
essa falta poderá lhe ser muito prejudicial ao longo da existência. Normalmente não
perde tempo lutando pela fortuna, pois sabe com absoluta certeza que a
conquistará. Como dá grande importância ao dinheiro e ao status social, terá mais
chance de se realizar como alto (a) executivo (a), comerciante ou trabalhando por
conta própria.
`,

9: `O Número 9 na Expressão revela o mais alto e o último grau primário; representa o
término de um ciclo completo de desenvolvimento antes que o espírito inicie um
novo ciclo evolutivo, ou eleve-se a outras posições. Simboliza o final da conquista
humana. A materialidade saiu do quadro e o que resta é o espírito humano elevado à
posição de tolerância máxima, boa vontade universal, compaixão, ações
desprendidas, amor incondicional e, supostamente, compreensão da totalidade da
vida. No entanto, ainda retém uma boa dose de ímpeto emocional e intenso impacto
dramático. A sua essência deveria ser a objetividade, mas como está geralmente
engajado (a) demais com qualquer coisa que lhe capte interesse, às vezes confunde
objetividade com sua própria dedicação intensa. O número 9 é, na verdade, uma
vibração perigosa, porque a consciência alcançou um ponto em que sente que é um
direito natural assumir o comando sem dosar as consequências. Às vezes revela-se
bastante paranoico (a) e tende à aberrações mentais.
Tem a perfeição como meta, mas raramente a alcança nesse plano. Poderá
enfrentar muitas provas e contrariedades, mas a lição do perdão trará temperança
nessas situações. Quanto mais evoluir tanto mais provas estará apto (a) a enfrentar;
portanto, cuide-se para não perder o equilíbrio. Empenha-se em viver uma vida ideal
e espera inspirar outros a fazerem o mesmo. Deseja melhorar o mundo através da
filosofia e da filantropia, e torna-se impaciente quando os resultados demoram
aparecer. Necessita dar-se conta de que a evolução ocorre somente em longos
ciclos de tempo. Encontrará muitas pessoas famosas em sua vida, que ficarão
impressionadas com a amplitude dos seus pensamentos. Deverá aprender a não se
prender a velhos relacionamentos. Quando tiver cumprido o seu papel com relação a
um individuo, terá de seguir em frente. Não pode ficar limitado (a) a um pequeno
grupo de amigos. A sua ampla filosofia deve tocar e clarear a vida de muitos.
É um (a) pensador (a) nato (a) e dispõe de grande capacidade de raciocínio,
observação, criatividade e compreensão; conhece o âmago e as qualidades das
coisas e das pessoas. Deve sempre ser impessoal, pois como é universalista, o
materialismo pode causar sérios desapontamentos e aborrecimentos,
principalmente em relação a amigos e parentes que considera íntegros, mas que na
realidade podem não ser. O dinheiro vem fácil, mas também desaparece com a
mesma rapidez, pois é pouco dotado (a) de capacidade administrativa. Mas o mais
extraordinário é o fato de nunca lhe faltar dinheiro para o necessário. É o (a) “irmão
(ã) mais velho (a) da humanidade” e não deve ser egocêntrico (a) e nem
individualista. Servir é seu dever, trabalhar sem esperar recompensa e amar
incondicionalmente. Tem dificuldade para ser feliz no casamento, ou
relacionamentos amorosos, no entanto, é extraordinariamente dedicado, leal e
altruísta, não medindo esforços e sacrifícios para fazer o que acha certo, direito, ou
que seja seu dever. Na sua concepção é seu dever amar, proteger e defender o
próximo. Nasceu para ser livre e não deve apegar-se a nada e a ninguém, e sim amar
e trabalhar em prol de toda a humanidade, sem nada esperar em troca.
`,

11: `O Número 11 na Expressão revela grande intuição e visão profunda da vida. Suas
vibrações são as de um (a) líder espiritual, trabalhador (a) inspirado (a) para o bem
da humanidade. Sua visão é ampla e mais aguçada que a da maioria dos comuns. O
seu lema deve ser “amar o próximo como a si mesmo”, e deve adotá-lo como base.
Combina coragem, talento e poder, com fortes sentimentos de liderança. As suas
fortes intuições são valiosas para conseguir sabedoria e inspiração.
Poderá ser um (a) líder em negócios públicos ou civis em sua comunidade e
proporcionar melhor padrão de vida aos menos afortunados. Sua aspiração de
carreira poderia expressar-se através da atuação em palcos ou telas, como pregador
(a) ou professor (a) dinâmico (a). Seu padrão de comportamento deverá ser superior
ao da média. De alguma forma, deverá alcançar a fama ou o reconhecimento, e uma
vez que essa vibração confere grande potencial criativo, as artes ou profissões
inventivas são suas escolhas mais prováveis. Possui habilidade de destampar a
fonte criativa e de imbuir seu trabalho com um toque inspiracional que afetará as
almas daqueles que entrarem em contato com tudo o que criar. É realmente
inspirado (a)!
Talvez não seja bem sucedido (a) como negociante, sentindo-se mais à vontade em
profissões agitadas, como política, marketing, administração de grandes empresas
ou grandes projetos esotéricos, sociais e ideológicos. Profundo (a) conhecedor (a)
da alma humana, normalmente se destaca dos demais, pois o 11 sendo um “número
mestre” consegue vislumbrar em seus amigos e inimigos defeitos e virtudes que aos
outros seria impossível. Tem fé em seus ideais e dificilmente volta atrás em suas
decisões. Procura sempre ser justo (a), leal, compreensivo (a) e viver em harmonia
com todos. Precisa estudar assuntos relativos a esoterismo, metafísica e
espiritualidade; quando negligencia esses aspectos pode tornar-se indolente,
indeciso (a) e sujeito à vontade dos outros, sugado (a) e comandado (a) por seres
inferiores. Como é um ser “superior”, atrai inveja e conflito das pessoas ao seu
redor; faz amizades e inimizades com a mesma facilidade. A animosidade, as
atitudes bruscas e a banalidade lhe trazem inibição e causam prejuízo material,
moral e físico. Deixa-se dominar pelo sofrimento diante da ingratidão ou da
incompreensão dos que o (a) cercam, mas encontra ressurreição, vida e esperança
no mais insignificante gesto amistoso dessas pessoas. Realiza-se no trabalho em
empresas que exigem genialidade, profundo sentido humano, iluminação espiritual e
esforço incondicional. Não aceita a divagação, simulação e subjugação, e não
consegue se ocupar de coisas que não aprova. Como todos os seres humanos que
se destacam, tem certas dificuldades de adaptação ao meio e ao convívio com
seres inferiores, que não o (a) compreendem, não o (a) apoiam e ainda o (a)
criticam. Acredite em seus ideais e vá em frente sem se preocupar com o que os
outros pensam.
`,

22: `O Número 22 na Expressão revela qualidades geniais de poder e comando. Tem
necessidade de expressar um anseio básico de desenvolvimento, completar as
coisas de um modo pleno e trabalhar com grandes grupos ou organizações. Aprecia
o comércio de importação e exportação que, em geral exige viagens de longa
distância e encontros com pessoas importantes. Gosta de se inspirar numa ideia e
coloca-la em prática. Autoconhecimento lhe será sempre muito importante. A sua
destinação é construir!
Confia na sua habilidade de liderar e, por esse motivo, assume grandes
responsabilidades com naturalidade. Isso cumpre o seu anseio por realizações
importantes. Uma vez assumida a sua posição de grande poder e fortuna, desejará
participar de novos movimentos de massa, em importantes projetos cívicos e
comunitários. É o (a) supermaterialista, cuja influência pode ser mundial. No plano
material, é um (a) criador (a) que constrói de modo amplo. Pontes, hospitais,
museus e outras estruturas do gênero são obras que ambiciona deixar para o
mundo. Obras que auxiliam e esclarecem a humanidade. Sua influência é de tão
longo alcance que deve se cuidar contra motivos contrários à ética, pois, com o
passar do tempo, afetará muitas vidas. Sirva bem e será recompensado (a) em
proporção direta.
Se desejar algo que em princípio pareça impossível, vá em frente e alcançará o seu
objetivo com certa facilidade, pois é habilidoso (a), idealista, organizado (a) e tem
grande potencial de realização. As outras qualidades suas são: integridade moral,
honestidade, inspiração superior, disciplina técnica e social, constância nos
objetivos, e grande capacidade para levar até o fim um projeto ou objetivo. Não é
muito fácil conviver com você, pois sendo “superior”, normalmente não se adapta a
situações preconcebidas e não gosta de aceitar ordens de quem quer que seja;
gosta de trabalhar sozinho (a) ou então em cargos de chefia. Assegurar as
vantagens da propriedade e da segurança é principal motivação da sua vida. Ama a
perícia, a previsão, a concretização e possui espírito de aventura. Será bem sucedido
trabalhando em grandes grupos. Pode aspirar ser chefe de grandes instituições,
diretor (a) de negócios internacionais, ou organizador (a) de serviços públicos. Terá
grande êxito na política, podendo ser chefe de estado. A duplicidade, desonestidade
e cegueira de visão são armas mortais para o seu destino. Pode tornar-se famoso
(a), nacional ou internacionalmente, porque tem grande capacidade de persuasão e
consegue convencer a todos com seus argumentos e ideias. Faça isso em benefício
da humanidade!`

}


export const destinoTextos = { 

  1: `O Número 1 no Destino significa que a direção geral para a sua vida inteira será
uma escalada sem fim para se superar ou para se aperfeiçoar a cada passo do
caminho. Nada vem fácil demais para você. A totalidade de experiências da vida
tende a empurrá-lo (a) de maneira que cada sucesso se transforme em mero
fundamento para outro esforço em uma nova direção. A solução ideal para todas as
situações importantes da vida com as quais você constantemente se defronta é
confiar em seus próprios recursos, e nunca esperar que as soluções venham de
outras pessoas. Seu destino consiste em desenvolver a sua individualidade,
independência e capacidade de liderança. Às vezes você poderá ter de lutar contra
as pressões para se conformar, mas realizará plenamente o seu potencial
mantendo-se firme em suas convicções. Os outros o (a) procuram em busca de
orientação. Deve reconhecer que precisa de colaboradores, embora a decisão final
deva caber sempre a você. Seja o seu próprio chefe!
Pioneirismo, iniciativa, grande capacidade de liderança, inventividade, capacidade
de comando e espírito executivo. Devido a estas características, com esta vibração,
normalmente tem êxito e prosperidade em quase todas as atividades. Normalmente
é firme nos ideais, constante nos desejos, ativo nos propósitos e fiel cumpridor de
seus deveres, estando especialmente apto para ocupar postos de responsabilidade
que requerem mente desperta e constantes iniciativas. O número 1 necessita de
brilho, de reconhecimento e sucesso. Para conseguir esse estágio, dedica-se
exaustivamente ao trabalho e normalmente torna-se o melhor na sua área de
atuação. Dá sempre a impressão de ser feliz, ou estar feliz, mesmo que não esteja.
A sua capacidade criativa por vezes se torna excesso de ânimo e surge
naturalmente a arrogância, o caráter dominador e também certo egoísmo, pois
tende a achar que o sucesso do grupo dependeu exclusivamente de seu esforço.
Esse tipo de postura pode tornar difícil o convívio com os amigos e colegas de
trabalho, além de dificultar o relacionamento a dois, pois não é nada fácil conviver
com você.
Como não gosta de receber ordens, é bom sempre procurar trabalhar por conta
própria ou em cargo de chefia. É individualista, íntegro (a) e honesto (a) em seus
propósitos e precisa aprender a ser pioneiro (a), a trabalhar em grupo e a ser o (a)
comandante, não o (a) ditador (a); a ouvir conselhos, analisar situações e, após
refletir, tomar decisões. Ou seja, não agir precipitadamente.`,

2: `O Número 2 no Destino significa que a direção geral da sua vida é um constante
encorajamento a se refrear e esperar pacientemente pelo momento certo para
capitalizar o ritmo ideal. Entre outras coisas, possui a essência do ritmo e da
adequação do tempo. Um senso natural de adequação ao tempo é instintivo em uns
e impossível em outros. A presença do número 2 no seu destino simboliza os seus
talentos naturais nesse sentido. Esta é uma ênfase necessária em sua vida. Como o
número 2 indica sensibilidade altamente desenvolvida, você reflete com clareza
essa qualidade gentil e vitalmente importante em sua vida. As oportunidades e
recompensas virão através da paciência e perseverança. Seu destino é ser
carinhoso (a), tolerante e apaziguador (a) em todos os seus relacionamentos. A
cooperação é vital para o seu sucesso. Você se sentirá atraído (a) por pessoas
fortes, que poderão ter necessidade da sua bondade e sensibilidade. A sua ação é a
do poder por detrás do trono.
O número 2 é das associações com outras pessoas; aquele capaz de unir, juntar
ideias e fatos e contribuir para a realização de qualquer projeto. Possui grande
capacidade para assimilar ideias alheias, valorizá-las e condensá-las, de forma a
criar um clima de satisfação em todos os envolvidos. Desempenhará com eficiência
todo o trabalho que requeira convicções, fidelidade pessoal, compreensão da
natureza humana e desejo altruísta de servir. É gentil na maneira de se expressar e
de se relacionar com todos. Bom (a) mediador (a) e diplomata, com grande
facilidade para harmonizar intrigas e divergências.
Pelo lado negativo, tende para o acomodamento e a esperar que os outros tomem a
iniciativa, procurando manter-se na retaguarda e aparecendo pouco. Como não é
pioneiro nem individualista quanto aos seus projetos de vida, é muito comum perder
excelentes oportunidades por causa disso, não notando que o tempo vai passando
e os projetos e ideais vão ficando cada vez mais distantes.
Precisa cultivar a paciência, a cooperação, o tato, a lealdade; aplicação e
capacidade de seguir a orientação dos outros. Sendo o seu principal atributo a
união, precisa aprender a unir todos aqueles que desejam estar em parceria.
Porém, não deve interferir – o que normalmente faz – naqueles que não desejam
estar unidos. Trabalhe sempre em parceria; se não existir, procure. Não fique
parado (a) esperando que as coisas caiam do céu ou que apareça alguém do nada
para lhe ajudar a resolver seus problemas.`,

3: `O Número 3 no Destino significa que a direção geral da sua vida tende a condições
de facilidade e relaxamento, para que seja possível contribuir para os aspectos
decorativos da vida. Você veio para se expressar a si próprio (a) e emitir opiniões e
criticas, porque tem talento para visualizar. Tem, invariavelmente, um elevado senso
de imaginação, o que para algumas pessoas pode assumir as proporções de
irrealidade ou de não se ater aos fatos como são. Seu caminho é o da beleza, da
versatilidade e da expressão de suas próprias ideias e sentimentos. Se entregue a
ele sem restrições. Surgirão oportunidades para uma existência ativa, expressiva e
criativa. Os amigos sempre o (a) incentivarão em suas ambições. Você poderá
transformar qualquer adversidade em benefício. Penetrará em qualquer ambiente
graças ao seu poder de comunicação. As palavras são a chave do seu destino!
O Destino 3 é da sociabilidade. Você é alegre, versátil e talentoso (a). É criativo (a),
sociável e possui dons artísticos, seja falando, representando, escrevendo, pintando
ou desenvolvendo qualquer outro tipo de arte. Ao longo da sua vida precisa sempre
procurar cultivar esses talentos, ou seja, a criatividade, os contatos sociais e a
expressão de suas ideias e sentimentos. Tudo o que faz cresce e se multiplica. Tem
na comunicação, como um todo, o seu principal trunfo para ser próspero e feliz. São
suas admiráveis qualidades: amor à família, ser excelente amigo, saber superar as
contrariedades, animar os outros e a si próprio, mesmo em ocasiões difíceis. A
emoção e a criatividade são as fontes do seu sucesso em trabalhos que requeira
facilidade de expressão e capacidade executiva.
A sua fase negativa se externa pela impaciência. Não gosta muito de cumprir
horários, é vaidoso (a) e tem tendência a desprezar pessoas menos inteligentes, e
até criticá-las. Às vezes essas disposições crescem e surge a insociabilidade,
aspereza e dependência. Pode ter até excesso de otimismo e perder muita energia
em coisas sem importância. Por isso deve controlar o gasto de energia, para
aproveitá-la em planos e projetos que visem o bem da humanidade.
Como você nasceu com o dom da palavra, da comunicação, deve usa-lo
intuitivamente para alcançar o sucesso em trabalhos mentais. Pode trabalhar ligado
às artes plásticas, literatura, decoração, justiça, comunicação, conferencista.
Precisa manter sob controle as suas necessidades de movimentação e os excessos
de atividades corriqueiras. Seja mais seleto nas amizades, ou seja, prefira a
qualidade à quantidade.`,

4: `O Número 4 no Destino significa que a direção geral da sua vida é uma necessidade
constante de permanecer firme, de escavar, de segurar e trabalhar continuamente a
mesma coisa muitas vezes. Rotina, disciplina, esforço físico, senso comum e lógica
são as chaves para transformar esse desafio árduo numa realidade prática de valor
duradouro. O número 4 simboliza entre outras coisas certa dose de dureza; a
experiência total da vida tende a ser fatigante e difícil, demanda um esforço enorme
e persistência inacreditável. Terá oportunidades para construir gradualmente o seu
futuro e desejará as coisas que o dinheiro pode comprar. Faça o que precisa ser
feito e terá possibilidades de grandes realizações, graças ao seu conhecimento
prático, as quais produzirão resultados palpáveis. Aplique-se e não tenha medo de
sujar as mãos. Você se ajusta muito bem a regras e normas. Organização é o seu
forte!
O Destino 4 é da conquista, por meio do trabalho duro e incansável. Precisa cultivar
a paciência, a confiança e a disposição para servir. Sua vida, em geral, não é muito
fácil, em termos de retorno e exigências. Terá que trabalhar muito, com muita
dedicação para manter a vida financeira, afetiva e social. Porém, tudo o que
consegue é sólido e permanente. Dedica-se de corpo e alma aos seus projetos e
conquistas e quase sempre é bem sucedido profissionalmente. Tem poucos
amigos,
porém sinceros e não se interessa por quantidade, preferindo a qualidade em tudo e
em todos. Em si repousa a segurança e a estabilidade para manter tudo e todos que
de você dependem.
Como é muito estruturado (a), conservador (a) e inflexível, viver em grupo é
extremamente difícil e quase sempre rejeita o novo, pois essa incerteza lhe
transmite insegurança e possibilidades de perdas. É perfeccionista ao extremo e
cobra demais dos outros, sejam eles familiares, amigos ou subordinados,
tornando-se por vezes chato (a) e incompreendido (a). Se levar uma vida negativa,
poderá inclinar-se para assuntos fraudulentos, conspirações, orgulho demasiado ou
para planos astutos e maléficos para enriquecer rapidamente à custa do sofrimento
alheio.
Para evitar esse seu lado negativo precisa cultivar a ponderação, desenvolver o
senso de responsabilidade moral, do equilíbrio no poder e da correta aplicação do
saber em todos os seus planos e ações. Para viver sem muitos altos e baixos,
precisa ser justo (a), ponderado (a) e servir os outros sempre que se apresente uma
oportunidade. Precisa se relacionar positivamente com todos e respeitar o direito
que os outros têm de errar.
`,

5: `O Número 5 no Destino significa que a direção geral da sua vida é uma série de
reviravoltas surpreendentes, em que as melhores oportunidades aparecem de
súbito e de uma maneira tal que você é forçado (a) a assumir grandes riscos ou
atitudes especulativas para conseguir romper com o padrão geral que o (a) segura.
Nada tende a durar muito tempo sob o Destino 5, a menos que se torne apegado (a)
demais ou corrompido (a) demais, para aceitar o convite da aventura. Como o
número 5 simboliza, entre outras coisas, sexo e poder regenerativo de estímulo
sensorial, isso sempre tem uma função importante na direção da sua vida. Conte
com frequentes mudanças, com o inesperado e todas as experiências que a vida
pode oferecer. Cultiva relações com todos os tipos de pessoas, tornando-se um (a)
oportunista (a) que sabe tirar proveito das circunstâncias. Precisa aprender a usar
adequadamente a sua liberdade. Apegar-se a pessoas e coisas por mais tempo que
deve só lhe trará aborrecimentos e frustrações. Vive à procura de prazer e terá
muitas oportunidades para romances ardentes, embora geralmente de duração não
muito longa. Com sua habilidade engenhosa é capaz de fazer mais de uma coisa ao
mesmo tempo. Nunca lhe faltarão aventuras!
O Destino 5 é do (a) viajante, aventureiro (a), sempre desejoso (a) de mudanças e
de novidades. Esta vibração pertence às pessoas versáteis, no sentido de mudar,
alterar e transformar. Está sempre à procura do que é novo, moderno, diferente.
Essa procura também se estende pelo âmbito do saber. Aprender e conhecer, muito
mais do que por capricho ou prazer. É alegre, comunicativo (a), sempre bem vindo
(a) em qualquer roda. Com você não existe mau tempo; está sempre de bem com a
vida e, por isso, por vezes é confundido (a) e até tachado (a) de irresponsável, coisa
que não é em absoluto.
Normalmente compra mais coisas do que necessita e pode pagar, levando-o (a) a
ter alguns problemas financeiros ao longo da vida. No lado sentimental, busca
relações novas e intrigantes, que são as que o (a) atraem, e às vezes se envolve
em situações afetivas de que dificilmente se desvencilha. Você é um ser
extrovertido com ampla visão de tudo e de todos.
Para evitar os aspectos negativos e prejudiciais ao desenvolvimento pessoal,
precisa desenvolver o poder de análise e seleção, aproveitando as experiências
para aperfeiçoar e elevar seu caráter e sentir uma nobre afinidade humana isenta de
interesses particulares, sexuais ou materiais. Como vive o presente, tem muitos
começos e poucas finalizações. É aconselhável trabalhar com um propósito
definido, com um objetivo altruísta e levá-lo até o fim, aconteça o que acontecer.
Lembre-se que a desordem não faz parte do Universo; logo, quando encontrar
desordem, mude; transforme a desordem em uma nova ordem.`,

6: `O Número 6 no Destino significa que a direção geral da sua vida é desenvolver uma
compreensão do que ganha ao desistir de alguma coisa pessoal, para operar mais
efetivamente numa sociedade ou equipe. Você sempre abre mão de alguma coisa:
geralmente algum tipo de independência ou a própria individualidade. A sua
individualidade, e independência social, não são tão importantes para você quanto a
satisfação obtida ao se juntar a outras pessoas num esforço cooperativo. No
entanto, pode ser que leve algum tempo antes de compreender a sabedoria que
isso contém. Você poderá prestar valiosos serviços à família e à comunidade.
Pessoas dependentes e desajustadas o (a) procurarão em busca de orientação.
Interesses financeiros e casamento correrão bem quando for gentil, responsável e
protetor (a). Sustente seus ideais; coloque o bem estar do grupo acima do seu, mas
fique sabendo que sacrifícios excessivos poderão lhe trazer infelicidade emocional.
Caberá a você uma parcela acima do normal de preocupações familiares, embora
vá estar sempre protegido (a).
É normalmente dócil, educado (a), não suporta brigas e desentendimentos e quer
sempre manter tudo calmo e tranquilo. O número 6 é da harmonia, do lar e do amor.
Tem grande facilidade para fazer os outros felizes, pois é dotado (a) de grande
magnetismo e capacidade de amar a tudo e a todos. Possui o dom da delicadeza,
sendo muito dedicado (a) às crianças, aos animais e adora plantas. Ama e adora a
família e jamais foge de suas obrigações para com qualquer pessoa ou parente.
Detesta aglomerações e festividades excessivas, gosta da harmonia e de viver em
paz. Geralmente se dá bem em relacionamentos afetivos, pois é amável e muito
gentil.
Por outro lado, é demasiado sentimental, vulnerável e crédulo (a), sempre confiando
nas aparências sem analisar os fatos friamente. Tem, normalmente, dois problemas:
o acomodamento e a falta de interesse. Por ser profundo (a), necessita de
tranquilidade para, no mínimo, aparentar estar bem consigo mesmo (a). Quanto ao
interesse, necessita ser constantemente incentivado (a), pois caso contrário tem
tendência a deixar tudo a meio caminho. Na tentativa de manter tudo calmo e
tranquilo, por vezes acaba interferindo de maneira não condizente com o momento,
pois nem sempre a docilidade é o melhor remédio para certas situações, e isso o (a)
perturba demais, levando-o (a) a se retrair e a acomodar-se, até que outro fato ou
circunstância o (a) incentivem.
O Destino 6 é da responsabilidade e da liderança; precisa aprender a se ajustar a
condições pouco harmoniosas, a não assumir o fardo dos outros, a defender suas
próprias ideias e a servir com alegria. Precisa trabalhar com o público, pois
conquista amizades e simpatias com grande facilidade, sendo respeitado (a) e
amado (a) por todos.
`,

7: `O Número 7 no Destino significa que a direção geral para a sua vida é se afastar um
pouco do fluxo geral das experiências e buscar justificativas e alento no seu interior,
como algo oposto aos elementos físicos e materiais da vida diária. Isso não
significa, no entanto, que descubra seu caminho apenas através da religião, da
espiritualidade ou dos elementos metafísicos, ou que se preocupe menos pela
totalidade da vida. Pode se tornar um (a) especialista aperfeiçoado (a), de
preferência em algum campo profissional em que a sua sabedoria superior faça
com
que se destaque como autoridade em seu campo, acima da competição comum. Em
geral, este é o seu ajuste ideal, apesar de algumas vezes não conquistar essa
posição de isolamento protegido. Tem grande capacidade para a análise como para
a síntese. A pesquisa cientifica é o seu forte. Sua inteligência aguçada e intuição lhe
conferem uma capacidade excepcional. Terá oportunidade de receber uma boa
educação. Não renuncie a ela, torne-se um (a) perito (a), um (a) especialista.
Selecione cuidadosamente os seus amigos e os ambientes que costuma frequentar.
Explore o desconhecido e investigue o significado mais elevado da vida. Deve estar
ciente de que estar só não significa sentir-se solitário. Você é a melhor companhia
para si mesmo (a). Descobrirá que suas maiores vitórias acontecerão quando
permitir que as coisas venham até você.
Você é uma pessoa que, normalmente, busca na vida o entendimento, o
conhecimento mais profundo e qualitativo. No desenrolar de sua vida
desempenhará com eficiência trabalhos que requeiram perfeição de detalhes,
fidelidade, identificação mental e percepção intuitiva. É individualista, concentrado
(a), inspirado (a), reservado (a), de confiança e compreensivo (a), amoroso (a) e
dedicado (a), porém dificilmente sabe expressar o que sente. Busca sempre o lado
oculto das coisas e das pessoas. Nunca se satisfaz com as aparências e busca
conhecer a essência de tudo e de todos.
Por vezes é dominador (a), crítico (a), exigente, perfeccionista, angustiado (a),
impaciente, orgulhoso (a) e aparentemente descrente. Apresenta, ainda, dificuldade
para se expressar, carência de estima própria e excesso de fantasias. Precisa
aprender a valorizar as pessoas como elas são, ou seja, respeitar o fato de os
outros serem fruto daquilo que conseguiram absorver da vida e do convívio com os
demais.
O Destino 7 é da sabedoria e também da solidão, por isso, necessita desenvolver
seus poderes mentais, estudar, meditar, buscar o significado mais elevado da vida.
Enfim, tornar-se um (a) especialista. Terá sucesso como educador (a), cientista,
advogado (a), professor (a), escritor (a) de temas espirituais e de ciências ocultas.`,

8: `O Número 8 no Destino significa que a direção geral da sua vida tende a um esforço
ativo e consciente para restaurar o equilíbrio que você sente estar faltando em áreas
muito importantes da vida. Para realizar efetivamente esse ajuste, em geral é
necessário atacar os elementos com força e empregar algum tipo de terapia de
choque, para apanhar os componentes de surpresa. As táticas simples de
persuasão não funcionam porque os elementos que estão fora de equilíbrio se
agrupam de tal forma que é necessária dinamite para deslocá-los. Como as áreas
da vida que precisam dessa correção são extremamente importantes para você,
existe geralmente um conflito de poder envolvido, em que os fracos de coração são
avisados desde o início de que vão precisar de todos os seus recursos para apoiar o
seu julgamento. Você está destinado (a) a viver e a trabalhar no meio de pessoas
influentes. Desenvolva o seu vigor físico, trabalhe com afinco e use com eficiência a
sua tremenda energia. Acumule capital e aufira lucro em todos os seus
empreendimentos. Sua vocação é supervisionar e se encarregar da solução de
problemas. Você nasceu para ser um (a) executivo (a). Seja justo (a) e sensato (a)
quando estiver exercendo a autoridade que lhe foi delegada. Poderá contar com a
ajuda de seus subordinados quando precisar. Esforce-se ao máximo antes de se
dar por vencido (a). É você quem dá as ordens. Pense Grande!
Você é aquele (a) que tem capacidade para planejar, organizar e levar a efeito
qualquer tipo de negócio. O seu Destino é o do ganho financeiro e material e seus
meios de realização são: associação do esforço, cooperação técnica e justiça.
Geralmente não tem problemas financeiros, pois caso não seja herdeiro (a) é
empreendedor (a). Objetividade é o seu lema. É justo (a), disciplinado (a), honesto
(a), amigo (a), econômico (a), elegante e bom negociante.
No lado negativo, por estar sempre sendo impulsionado (a) para ganhar dinheiro,
por vezes se esquece da família, do lado sentimental e do social. Apresenta,
também, acentuada dificuldade em demonstrar afeto e carinho. No ímpeto de
conquistas materiais, chegará a esquecer-se de si próprio (a) e deixar de conseguir
exatamente aquilo que está lutando para obter.
Precisa cultivar a eficiência na arte de negociar e compreender as leis que
comandam a acumulação, o poder e o uso do dinheiro. Alcançará o máximo se
conseguir equilíbrio entre o ganhar dinheiro e as atividades espirituais, pois nessa
luta para acumular dinheiro, até se esquece de sua espiritualidade. Necessita
aprender que as pessoas precisam de atenção. Por isso, fique atento (a): quanto
maior for a ostentação, mais as pessoas concluirão que você não precisa delas. E,
se em algum momento realmente precisar, elas não estarão por perto. Poderá ser
um (a) grande banqueiro (a), comerciante, corretor (a), engenheiro (a), político (a),
advogado (a) e bem sucedido (a) nos negócios em geral.
`,

9: `O Número 9 no Destino significa que a direção geral da sua vida tende a afastá-lo
(a) dos compromissos mais pessoais e íntimos, colocando-o (a) num caminho que,
supostamente, enriquece a totalidade da experiência humana. Está destinado (a) a
percorrer a Terra, para que possa entrar em contato com todo espectro da
experiência humana. Dessa forma pode ser um pouco de alguma coisa para todas
as pessoas. Em grau mais baixo de consciência isso pode significar apenas certo
distanciamento social e objetividade clínica. Em níveis mais elevados de
consciência pode se tornar um (a) líder espiritual ou religioso, uma força de
persuasão política, protagonista de movimentos sociais, pioneiro (a) em áreas de
compaixão humana ou instrumento de insurreições. O fanatismo fica mais profundo
quando consegue manipular os instintos primais da psicologia de multidão. Você
pode percorrer a vida relativamente intocado (a) por causas apaixonadas, mas pode
ser subitamente levado (a) à frente de levantes e movimentos que parecem surgir
fora de época apenas para aquela ocasião. Seu impulso é à força de paixão e
sentimento que pode concentrar naquele momento. Mas, seja qual for o seu nível de
envolvimento, sempre reage com entusiasmo, interesse e até mesmo devoção
apaixonada a problemas amplos que tocam a universalidade da vida. Por outro lado,
nunca se vê atraído (a) pelo provincianismo de assuntos menores.
Seja uma fonte de inspiração para os outros. Preste serviços, ensine, aconselhe e
divirta. Você tem o dom de cativar a audiência. É naturalmente compassivo (a),
profundamente intuitivo (a) e deve sempre se esforçar para manter sua largueza de
visão. Não se deixe prender por restrições à sua liberdade pessoal, nem se deixe
abater pelos desapontamentos. Você irá desfrutar de uma grande variedade de
experiências, porém não deve se apegar às pessoas ou aos bens materiais que
cruzarem o seu caminho. Suas maiores oportunidades surgirão quando se entregar
de maneira irrestrita e sem esperar nada em troca.
O Destino 9 é da universalidade. Você tem caráter independente, mente original,
capacidade criativa, é sentimental, leal e esforçado (a); é dado (a) a feitos heroicos,
uma alma sempre disposta a lutar, seja para perder ou ganhar. Necessita que as
pessoas ao seu redor estejam bem, e se não estiverem tudo fará para que isso
aconteça. Sua necessidade de auxiliar é voltada para o todo, para a humanidade e
não para uma pessoa ou um caso especial. Preocupa-se com tudo que esteja em
desacordo com suas inspirações. É muito emotivo (a) e sentimental.
Como vive para o mundo, por vezes acaba perdendo excelentes oportunidades,
principalmente no âmbito profissional. Para sobreviver com dignidade é necessário
ser destituído (a) de egoísmo e procurar ser impessoal, nada esperando em
retribuição.
Precisa servir e se divertir; aprender a amar o próximo, a se livrar dos preconceitos
e a colocar os interesses dos outros adiante dos seus. Precisa, também, ser
generoso (a), bondoso (a), tolerante e compreensivo (a). Terá sucesso como
educador (a), artista, músico (a), escritor (a), professor (a), sociólogo (a), reformador
(a), líder de ideologias, missionário (a) ou em trabalhos que requeiram habilidade
manual.
`,

11: `O Número 11 no Destino significa que a direção geral da sua vida será a de
transmitir diplomaticamente a sua mensagem para o mundo. Poderá ter inspiração
e
reconhecimento se encaminhar com sabedoria seus elevados ideais. Sua
espiritualidade e intuição nunca irão lhe faltar. Terá oportunidade de traçar um
caminho a ser seguido (a) pelos outros. As coisas materiais da vida terão
importância apenas secundária. Esta é uma das vibrações mais difíceis devido à
demanda por padrões elevados de consciência ser constante. Esta é uma
encarnação de provas e singular. Precisa praticar o lema “ama o próximo como a si
mesmo” e tê-lo como base. As suas fortes intuições são valiosas para conseguir
sabedoria e inspiração. Procure o equilíbrio entre a vida material e física, que
necessita ser considerada, e a vida espiritual que está subordinada à sua auto
compreensão. Precisa aprender a ter paciência e ao mesmo tempo tomar decisões
rápidas.
O Destino 11 é o da inspiração. O número 11 é o das pessoas altamente sensíveis
e intuitivas, que possuem facilidade de ver não somente a realidade atual, mas
também os seus desdobramentos. Enxerga longe; normalmente é impaciente e
dotado (a) de certo nervosismo. Pertence ao povo e é capaz de sacrificar sua
própria vida e harmonia doméstica em prol da humanidade. Pela sua consciência
universal e amor fervoroso pelo próximo, não pode deixar de fazer de sua vida uma
missão baseada em suas convicções, fidelidade pessoal, compreensão humana e
desejo altruísta de servir.
No lado negativo aparece tendência a vícios. Por ser muito sensível capta com
maior intensidade as imperfeições do mundo e das pessoas. Com isso vai
acumulando insatisfações e sofrimentos. Essas insatisfações e sofrimentos devem
servir para melhorar sempre os seus conceitos sobre tudo e todos e não para
alimentar os vícios.
Precisa investigar o lado oculto da vida e das coisas e desmistificar, confiar na
própria intuição, ter fé, conservar-se humilde diante da notoriedade e inspirar os
outros através de seu exemplo. Como a Natureza lhe dotou de certos atributos que
não deu aos demais, deve usá-los para melhorar o planeta, os seus semelhantes e
a própria vida. Não exija demais dos outros ou que eles compreendam ou façam o
mesmo que você.
`,

22: `O Número 22 no Destino significa que a direção geral da sua vida está voltada para
conquistar a fama e dar sua contribuição em benefício de todos. Transforme os
seus
sonhos em realidade numa escala universal – comércio, política ou arte
internacional. Terá oportunidade de deixar uma marca permanente na história da
humanidade. Eleve-se acima de todos os preconceitos e atue com desenvoltura
sobre tudo o que cruzar o seu caminho. O Número 22 possui a força de mudar o
mundo! Tem necessidade de expressar um anseio básico de desenvolvimento,
completar as coisas de um modo pleno e trabalhar com grandes grupos e
organizações comerciais. Apreciará o comércio internacional de importação e
exportação que, em geral exige viagens de longa distância e encontros com
pessoas importantes. Gosta de se inspirar numa ideia e colocá-la em prática. O
autoconhecimento lhe e muito valioso. O número 22 promete sucesso!
O Destino 22 é o do mestre construtor que se dedica altruisticamente à
humanidade. É, também, o número da sabedoria. As pessoas com esta vibração
são normalmente precoces em todas as atividades, sejam elas de cunho material,
social, mental ou espiritual. Conhecem da vida o superficial, o profundo e o invisível,
e possuem uma capacidade inata para o ensino. É uma alma de grande maturidade,
mente de extensa visão, coração de amplos alentos, caráter de firme
responsabilidade, personalidade que impõe respeito e pessoa trabalhadora; é
infatigável nas tarefas que se impõe e nas ambições que acalenta. Desempenhará
com eficácia todo trabalho que requeira uma ampla visão dos problemas, rara
perícia para resolvê-los e um conhecimento sumamente eficaz. Além de todos
esses dons, ainda possui facilidade de entender e desenvolver processos de alta
magia, entendida como uma força extrafísica e não como uma forma racional.
No lado negativo, aparece tendência para a arrogância, corrupção, traição e
menosprezo pelo semelhante.
Precisa aprender que justiça, cooperação e serviço prestado também fazem parte
do cotidiano; a penetrar nos problemas até as suas últimas motivações de seus atos
e as verdadeiras razões de seu proceder. Você está destinado (a) a ser líder pela
sua capacidade executiva que se estende por vasto campo, indo mesmo além das
fronteiras internacionais. No tocante à magia, a mesma poderá ser construtiva ou
destrutiva; o que semear, colherá!`

}

export const missaoTextos = {

  1: `A Missão 1 pede que domine seu ego e abra o coração. É a missão do ser
inteligente, mas que também pode ser ambicioso e agressivo. Confie em seus
propósitos e seja independente tanto quanto possível, e poderá aspirar aos maiores
cargos em sua profissão ou atividade. Quando tomar consciência de sua missão,
muito lhe será exigido, principalmente no sentido de liderança. Então poderá estar à
frente com toda a sua originalidade e criatividade buscando sempre o novo, o
inédito. Mas tenha cuidado para não se tornar excessivamente autoritário (a),
dominador (a) e inflexível, o que lhe causará problemas principalmente com
subordinados e pessoas mais próximas, como parentes e amigos. Se agir com
prudência e sabedoria, será admirado (a) e respeitado (a), tendo sempre a
consideração dos outros. De tudo o que a vida lhe proporciona em oportunidades,
talentos e aptidões, a sua verdadeira vocação será sempre a de estar à frente,
liderar, ser pioneiro (a) em alguma coisa, seja qual for o seu destino.
`,

2: `A Missão 2 pede que se disponha a colaborar para o bem de todos e cultive a
disposição para servir e equilibrar, para que tudo esteja em perfeita ordem e em
perfeito estado de funcionamento. Paz e disposição ordenada são os seus
principais lemas. Seja um (a) mediador (a) de retaguarda, sempre disposto (a) a
resolver tudo na base da diplomacia. Busque a harmonia entre pesquisar e executar,
coerência entre propósitos e objetivos, pois são estas suas principais virtudes. Aja
sempre de modo inteligente, sólido, perseverante, discreto, conservador e
econômico. Você pode ser muito bem um ser afetuoso, bom (a) amante e sempre
pronto (a) a ajudar indistintamente aqueles que o (a) procuram, e os necessitados,
pois faz parte de sua índole. Mas tome cuidado para não se deixar enganar por
pessoas de má fé, pois isso lhe causaria grande chateação, embora consiga relevar
com certa facilidade e perdoar.`,

3: `A Missão 3 trará oportunidade de usar a verdadeira autoexpressão em palavras, na
escrita ou representando num palco qualquer. Pede que se disponha a ser criativo
(a), popular, sociável, imaginativo (a) e artístico (a) de algum modo. Você veio para
brilhar, e a sua melhor expressão será sempre aquela que represente algum modo
de estar num palco. Mesmo com idade avançada poderá manter a sua aparência
jovial, alegre e divertida. Muitas oportunidades surgirão ao longo de sua vida,
proporcionando sucesso e reconhecimento. Siga sempre a sua intuição e não se
deixe seduzir ou levar pela conversa dos outros. O seu lema deve ser alegria,
portanto não permita que tristezas o (a) levem à depressão ou desânimo. Evite
trabalhos rotineiros e enfadonhos. Deve estimular a arte em sua plenitude, a
comunicação, a música, a literatura, ou qualquer outra forma de expressão para a
sua criatividade.
`,

4: `A Missão 4 pede que trabalhe incansavelmente, seja disciplinado (a), perseverante,
sincero (a), honesto (a), paciente, conservador (a) e tranquilo (a). A sua missão não
é a de um (a) visionário (a) e sim de alguém que anda com os pés no chão, que
persegue e consegue seus objetivos por métodos já consagrados. Seja um (a)
construtor (a), um (a) lutador (a) determinado (a) e corajoso (a), mas considere
sempre o âmbito coletivo e não somente o seu prazer pessoal. Amor, tolerância,
paciência e harmonia fazem parte da sua vocação natural e lhe será muito exigido
ao longo de toda a sua vida. Se compreender bem a sua missão e possuir
discernimento compatível poderá conseguir reconhecimento em âmbito nacional ou
até internacional, dependendo de suas habilidades. Manifeste todo o seu carisma.`,

5: `A Missão 5 pede que seja ousado (a), enérgico (a) e amante da liberdade. Mas
lembre-se que liberdade traz em si a conta da responsabilidade, portanto, nem tanto
deve ser uma liberdade de fuga, externa, mas um estado interior de livre expressão
de sua natureza. Versatilidade e mente investigadora, boa memória e capacidade de
fazer várias coisas ao mesmo tempo são próprias de sua natureza. Busque o novo,
viaje tanto quanto possível, aceite novidades, experimente a vida de um jeito mais
aventureiro, porém, leve as coisas até o seu final, pois como gosta de muitas
novidades pode deixar sempre alguma coisa por terminar. A sua popularidade
permite que se expresse e se comunique abertamente e livremente com qualquer
publico, pois há um certo grau de magnetismo sexual na sua energia que atrai as
pessoas, principalmente do sexo oposto. Desenvolva atividades que o (a) coloquem
em contato com pessoas e novidades. Respeite as opiniões dos outros, mas
considere acima de tudo a sua, e siga a sua própria intuição para ser bem sucedido
(a).`,

6: `A Missão 6 pede que considere a família como a sua principal fonte de inspiração e
cuidados. Seja equilibrado (a), prático (a), leal, compreensivo (a) e expresse seus
sentimentos. Integridade, bondade, honestidade, amorosidade, confiança e
disposição para ajudar são da sua natureza interior. Priorize sempre o bem estar da
família ou do grupo, antes do seu próprio. Harmonize e apazigue pessoas e
ambientes, pois sabe muito bem fazer isso. A sua sensibilidade permite que sinta o
sofrimento alheio às vezes até de modo emocional demais, porém, se souber
equilibrar-se interiormente conseguirá ajudar sempre os que necessitam de você.
Tome cuidado para não se envolver demais com os problemas alheios, pois poderá
ser usado (a) como capacho por aqueles que não possuem a mesma compreensão
que você. Deixe que cada um seja como é e aceite as diferenças com naturalidade.
Procure desenvolver alguma atividade no campo do auxílio humanitário, mesmo que
seja como voluntário.
`,

7: `A Missão 7 pede que busque a sabedoria acima de tudo, através do estudo, da
pesquisa e da introspecção. Cultive o silêncio e desenvolva as suas habilidades
psíquicas e a intuição. Quietude, pouca sociabilidade e boa capacidade de
observação são qualidades de seu ser. Os valores que o (a) atraem são aqueles que
remetem mais para as coisas do espírito que da matéria. Busque a essência das
coisas. Seja um (a) educador (a) em essência, em qualquer atividade que exerça.
Monitore a sua tendência a ser autoritário (a), se ela aparecer, e espere que aqueles
que desejam saber algo o (a) procurem, porque isso tende a acontecer com certa
frequência. Tome cuidado para que a sua tendência a se introverter não assuma
proporções que o (a) prejudique socialmente, no entanto, cultive a meditação como
hábito de vida. Valorize a vida pelo que ela representa em seu conjunto de
aprendizados e riquezas interiores e não pelo que proporciona em riquezas
materiais, embora isso também seja importante e não deve ser negligenciado.
Dedique-se à pesquisa, às buscas espirituais e a tudo que exija certa qualidade de
perfeição.`,

8: `A Missão 8 pede que seja um organizador (a) dedicado (a), prático (a) e justo (a). A
sua meta principal deve ser o progresso material, e através dele desenvolver a
justiça e evoluir espiritualmente. Persistência e força de vontade são características
inerentes à sua natureza, o que faz com que esteja sempre atento (a) à espreita de
oportunidades de progredir materialmente. Evite discussões e teimosias, e prefira
contornar os obstáculos que gastar sua energia e tempo em discussões
improdutivas. Tenha como uma de suas metas mais importantes na vida a justiça.
Não somente a justiça dos homens e sim a da sua consciência, para que não
distribua mal a riqueza que produzir, pois se isso acontecer é de seu dom natural e
deve considerar a generosidade como uma atitude fundamental para a
prosperidade. Precisa aprender a disciplinar-se, pois lhe será exigida real capacidade
executiva. Poderá dedicar-se a negócios em grande escala, trabalhar com
propriedades ou dedicar-se ao direito, à magistratura ou à política.
`,

9: `A Missão 9 pede que, ao longo de sua vida, busque o máximo de conhecimentos
possíveis. Mas não o conhecimento adquirido dos livros, das universidades, e sim
aquele que vem das suas próprias experiências, embora os livros e a universidade
sejam importantes também. Só assim alcançará a sabedoria que almeja. Seja
generoso (a) e desenvolva a compaixão, de modo a contribuir para melhorar a
condição da espécie humana, e sempre busque a verdade. Sua qualidade de
universalista o (a) faz considerar o tempo como uma eterna oportunidade, e não
deve se preocupar com passado e futuro, pois já sabe de antemão as respostas que
busca. Tome cuidado para não sofrer sem necessidade ao perceber as misérias
humanas, lembrando que é mais fácil para aquele que conserva os olhos sem
lágrimas e os ouvidos sem dor ajudar o seu semelhante, do que para aquele que
chora junto. A sua aparência de irmão (ã) mais velho (a) às vezes pode levar a
esquecer-se de si em prol dos outros, o que não é bom. Não espere ser
compreendido (a), pois é mais fácil você compreender que ser compreendido (a)
pelos outros. Seja o mestre, o guia e o conselheiro de sua gente.
`,

11: `A Missão 11 pede que tenha a fé como sua grande virtude. A fé não representa
necessariamente religiosidade e sim uma profunda confiança em seus ideais,
propósitos, intuições, nos seus projetos, na vida. E, acima de tudo, confiança nas
forças atuantes da vida e no propósito que ela tem para você. Os seus propósitos
pessoais devem estar alinhados com o propósito maior da vida – a sua evolução
espiritual. A diplomacia deve ser sua arma principal, pois possui excelente
capacidade para estabelecer a harmonia entre os opostos. Seja justo (a) e imparcial
ao arbitrar qualquer discórdia, seja familiar ou entre amigos ou colegas de trabalho.
Evite guardar mágoas e alimentar rancores por causa de contrariedades; resolva
tudo diplomaticamente na hora ou mais breve que puder. Aprimore sua oratória, pois
poderá ser importante em alguma oportunidade que surgirá como líder de grupo
religioso ou político. Existe boa chance de desfrutar de paz, harmonia e felicidade
nos anos finais da sua vida. Pelo poder deste número, fama e distinção
provavelmente serão a sua recompensa.`,

22: `A Missão 22 pede que seja altruísta e voltado (a) para a humanidade. Visão em larga
escala e capacidade de levar a bom termo qualquer projeto que vise o bem da
humanidade, do Planeta. Desenvolva sua missão no âmbito do amor, da tolerância,
da paciência, da dedicação e da renúncia. Não negligencie estes atributos e use de
sabedoria sempre, pois qualquer descuido poderá lhe acarretar consequências
conturbadoras. A responsabilidade de quem detém Missão 22 é a maior dentre
todos os outros números, pois se trata da mais alta vibração construtiva. Muitos
testes poderão surgir ao longo da sua vida visando chamá-lo (a) a assumir a sua
missão. Boas chances de êxito profissional em variadas áreas de atuação. Seja
idealista e prático (a), e mantenha os pés no chão. Estude os princípios
fundamentais do ser humano e trabalhe para construir um mundo melhor. Pode se
dedicar à política, à religião, ou às altas finanças, podendo vir a ser grande estadista,
líder religioso, magnata industrial, comercial ou de múltiplos interesses.
`

}


export const dividasCarmicasTextos = {

  13: `Esta Dívida Cármica representa negligências ou atentados contra a vida, causando
a morte sua ou de outros em vida passada. Certamente cometeu algum ato contra a
vida, que pode ter sido: suicídio; homicídio; passividade ou negligência com a
própria vida; passividade ou negligência com a vida alheia; vícios de qualquer
natureza que apressaram a própria morte.
Qualquer que tenha sido o caso, ou os casos, os mesmos foram cometidos por
escolha e decisão própria, não sofrendo influências de outras pessoas. Em vida
passada deve ter se mostrado indiferente, não se importando com a preservação da
sua vida, nem com a dos outros. Por seus atos, pode ter apressado a sua morte, ou
de outras pessoas. Pode mesmo ter incorrido em graves transgressões, como
suicídio ou homicídio. Em todos os casos a sua atitude deve ter sido intencional, ou
pelo menos sabia no que poderia resultar.
Agora, pelo medo das transformações pode se refugiar na inércia, na indiferença
total e descontentamento constante; resvalar para a preguiça, negatividade e
ineficiência; a ter medo da morte, estendendo este medo para toda e qualquer
mudança ou transformação, inconscientemente associando-as com a morte. Para
superar seus medos e evitar repetir os mesmos atos nocivos do passado, precisa
manter-se ocupado (a) no campo do trabalho; evitar a indiferença, as más atitudes e
o descontentamento.
Na Vida Atual – Probabilidade de haver dificuldades para aceitar rotinas e
pormenores. Medo do trabalho e da morte; eventuais perdas no plano material;
indiferença, descontentamento e más atitudes; preguiça, negatividade e ineficiência;
pressentimentos; eventual tendência a uso de drogas.
A Conscientização – O que deve fazer: Aplicar-se na realização de suas tarefas
cuidando dos pormenores e detalhes. A palavra chave é trabalho no plano material.
Dominar o medo da morte, encarando-a com uma mudança de conscientização.
Desenvolver talentos e habilidades e motivar-se para a vida. Trabalhar e manter-se
ocupado (a) o tempo todo.`,

14: `É a Dívida Cármica que trata dos bens materiais. Ela adverte sobre a perda de
propriedades e fracassos nos negócios. Em vida passada, para subir na vida, agiu
fraudulentamente visando ganhos financeiros e materiais e prejudicando outras
pessoas, como sócios, amigos, familiares e companheiros de jornada, levando-os a
ter prejuízos, ou à miséria total, à desonra e destituição moral. Com isso trouxe para
esta vida o peso desses crimes causados pela inconsciência e ambição egoísta.
Agora poderá sofrer adiamentos, perturbações emocionais e enfrentar perdas e
desapontamentos. O seu erro foi a consequência natural da falta de compreensão, e
pode, ainda agora, incidir no mesmo erro. Deve aprender a lição do desapego. Para
reajustar este carma precisa cultivar a compreensão, desapego e perdão.
Na Vida Atual – Possibilidade de vir a enfrentar provações financeiras e materiais;
dificuldades em realizar-se sexualmente e, eventualmente, até mesmo sofrer
abusos sexuais. Poderá ter interesse demasiado no físico, com perda de energia;
indecisões, eventuais doenças, adiamentos e perturbações emocionais.
Envolvimentos emocionais que podem acabar mal; desapontamentos, perdas e
decepções no domínio material e financeiro poderão acontecer em algum momento.
A Conscientização – O que deve fazer: Aprender a lição do desapego, desenvolver
a compreensão, humildade, amor e compaixão. Evitar extremismos, equilibrar o
corpo físico através do uso adequado da sexualidade; cuidar da saúde do corpo.
Determinar-se para uma direção positiva na vida e aprender a usar adequadamente
o ritmo e o tempo. Aprender a conviver com mudanças, aceitando-as como uma
nova forma de consciência. Ter objetivos sempre e nunca desistir deles nem
desanimar. Palavras chaves: Compreensão, Desapego e Perdão.`,

16: `Esta Dívida Cármica trata basicamente do orgulho e da vaidade humana. Em vida
passada, agiu guiado (a) pelo despotismo cruel na manifestação da vontade própria,
com egoísmo desmedido, sem se importar com os direitos e os sentimentos dos
outros. Agora poderá sofrer calamidades, fracassos, acidentes, decepções e outras
adversidades. A consequência desse carma pode ser, ainda, arcar com traições,
perda de posição social, da reputação, de fortuna e poder; ver seus sonhos
obstruídos e sofrer decepções e desenganos causados por falsos amigos.
Conforme for estruturada a sua vida agora, algumas tragédias podem acontecer, e ir
do triunfo à queda, enfrentar provações dolorosas e incompreensíveis, muitas vezes
envolvendo pessoas queridas e o quer que seja de seu apreço. Para reajustar esse
carma, seja compreensivo (a), humilde, justo (a), solidário (a) e altruísta, dedicando
ao próximo todo bem que possa fazer.
Na Vida Atual – Será afetado (a) constantemente em seu orgulho e vaidade com
eventuais fracassos em seus planos; eventuais acidentes, decepções e
adversidades. Atrairá falsos amigos e poderá ter alguns sonhos obstruídos.
Possibilidade de ocorrer separação no casamento; dificuldade em encontrar um par
afetivo duradouro. Perda de posição social, de fortuna e poder, perda de bens
materiais. Algumas tragédias podem ser conhecidas. De todas as possíveis
repercussões de seus atos passados descritas aqui, talvez ocorram apenas
algumas, aquelas relacionadas mais diretamente com as causas.
A Conscientização – O que deve fazer: Aprender a lição do desapego material e
sentimental. Aprender a aceitar a dor e não resistir às mudanças frequentes a que
estará sujeito (a). Ampliar as perspectivas de vida, buscando a meta de crescimento
em todas as direções. Aprender a interiorizar-se, visando o encontro com a sua
própria sabedoria. Desenvolver a confiança em si mesmo (a) e no mundo que o (a)
cerca. Estar consciente de que todo o progresso interior é inseparável do conflito.
Deve ser justo (a) e honesto (a) com tudo e com todos e ser solidário (a). As
palavras chaves são Compreensão, Paciência e Solidariedade.`,

19: `Este é o número do equilíbrio, indicando que se tira da vida exatamente o que nela
se colocou, ou seja, o efeito vem exatamente como foi causado. Em vida passada
tomou posse de algo e deve ter cometido transgressões que ficaram impunes,
imputando responsabilidades a outros que pagaram por elas. Pode ter, ainda,
usurpado bens ou direitos autorais de outros, assumindo com isso posições que
não
lhe cabiam por mérito e sim aos seus verdadeiros proprietários e autores,
apregoando como sendo seus ou de sua autoria. Agora poderá sofrer quebra de
sigilos e ver seus segredos revelados. Terá de enfrentar suas falhas e colher o que
semeou. Este aviso é para que não seja dominador e exerça a tolerância. A maneira
de reajustar este carma é levar uma vida elevada e altruísta, compatível com o seu
destino e do que os outros esperam de você.
Na Vida Atual – Momentos difíceis no curso da vida. Convívio com as próprias
falhas e colheita do que semeou. Perda de energia e momentos desperdiçados,
perdas materiais, injustiças, fraqueza de caráter, intolerância. Tentativa de domínio
sobre tudo e todos, abuso de poder. Pode perceber no final da vida que tudo se
perdeu.
A Conscientização – O que deve fazer: Tomar consciência de que retiramos da vida
exatamente o que nela colocamos – outrora tomou algo de alguém e agora deve
pagar o seu preço. Aprender a ser justo (a), não ser dominador (a) e exercer a
tolerância. Usar equilibradamente o poder com amor incondicional. Construir o
caráter a partir das próprias experiências. Aprender a utilizar bem o tempo e a
própria energia, canalizando-a para o melhor. Palavras chave: Justiça e Altruísmo.`,
}


export const licoesCarmicasTexto = {

  1: `Este é um aspecto que vem sendo negligenciado desde encarnações passadas, e
agora se apresenta na lista dos aprendizados importantes, na encarnação atual,
como uma lição a ser aprendida no setor da individualidade. A falta de iniciativa, de
originalidade, de ambição, de dinamismo, de independência, de autoconfiança e de
domínio sobre as suas fraquezas e medos, mais o acentuado grau de individualismo
que o (a) levou a pensar mais em si que no todo, vem prejudicando o bom
andamento do seu progresso pessoal e evolução espiritual. Em vez de expressar
essas qualidades essenciais, os receios e a carência de autoconfiança minaram as
suas iniciativas em torno do seu progresso. Como consequência disso, agora teme
as decisões, tem dificuldade para iniciar coisas novas, e deve aprender a fazê-lo se
quiser ser bem sucedido (a). Para eliminar esse aspecto negativo de sua
personalidade será preciso avançar corajosamente sobre o temor, confiar em si
mesmo (a), apoiar-se nas suas melhores qualidades e ter iniciativa própria, deixando
de depender dos outros. Precisa desenvolver o seu senso de integridade,
originalidade, pioneirismo e independência; aprimorar a sua determinação e
liderança; reforçar a vontade e desenvolver a sua individualidade equilibradamente.
Precisa, ainda, aprender a respeitar os limites da autoridade; ser menos egoísta e a
falar de seus sentimentos.`,

2: `Este é um aspecto que vem sendo negligenciado desde encarnações passadas, e
agora se apresenta na lista dos aprendizados importantes, na encarnação atual,
como uma lição a ser aprendida no setor da colaboração e da sensibilidade. A falta
de tato, de cooperação, de disciplina e de consideração pelos outros; a timidez e a
desconfiança fizeram com que perdesse boas oportunidades de progresso pessoal.
Houve preocupação excessiva com detalhes, impaciência e pouco senso
diplomático, junto com sentimento de vítima ou de perseguição deliberada,
sensibilidade excessiva e insegurança que minaram a sua autoconfiança. Isso se
manifesta na atual encarnação na forma de timidez e desconfiança, a ponto de
evitar se relacionar para não se expor. Para eliminar esta negatividade precisa
aprender a cooperar, ter consideração pelos outros, aceitar ordens e não se apoiar
nos outros. Precisa desenvolver uma sensibilidade equilibrada, compreensão e
capacidade de observação, senso diplomático e ritmo. Ser impessoal, porém,
reconhecendo as necessidades dos outros.
`,

3: `Este é um aspecto que vem sendo negligenciado desde encarnações passadas, e
agora se apresenta na lista dos aprendizados importantes, na encarnação atual,
como uma lição que se impõe aprender no setor das manifestações criativas e da
autoexpressão. A deficiência em sua autoexpressão arrefeceu a sua criatividade e o
seu senso de humor, enfraquecendo a vontade e a autoconfiança, a ponto de
desejar se esconder para não ser notado (a) em público. Isso afeta as suas
iniciativas mais expressivas na encarnação atual fazendo com que se irrite
facilmente, principalmente diante das críticas; que tenha pouca imaginação e
desperdice seus melhores talentos. Para eliminar esta negatividade precisa
aprender a usar a palavra sem timidez, externar as suas ideias com segurança e
firmeza, cultivar a imaginação, desenvolver apurado senso de humor, expressar-se
com alegria, e ter paciência.`,

4: `Este é um aspecto que vem sendo negligenciado desde encarnações passadas, e
agora se apresenta na lista dos aprendizados importantes, na encarnação atual,
como uma lição a se aplicar no setor do trabalho e da disciplina. Certamente, não
gostava de trabalhar, foi deficiente nos detalhes e pormenores, teve dificuldade para
a sistematização e faltou perseverança e prudência. Adiava indefinidamente as suas
obrigações. Isso afeta as suas iniciativas na encarnação atual, podendo ser forçado
(a) a construir um alicerce, a ter de encarar o trabalho, seja de que tipo for, ter
paciência e concentração na sua ocupação, sem aceitar ou impor-se limitações.
Para equilibrar essas deficiências, precisa aplicar-se no trabalho com dedicação e
amor, dominar a cólera e não se sentir deprimido (a) pelo trabalho. Precisa se
realizar através do trabalho árduo e do esforço físico, de disciplina, da lógica, e
persistir nas suas metas e objetivos visando à ordem e a estruturação dos seus
planos.`,

5: `Este é um aspecto que vem sendo negligenciado desde encarnações passadas e
agora se apresenta na lista dos aprendizados importantes, na encarnação atual,
como uma lição a ser aprendida no setor das liberdades e das responsabilidades. O
medo de enfrentar mudanças ou novidades, de exercer sua liberdade e assumir as
responsabilidades inerentes cristalizou atitudes e comportamentos apegados e
comodistas, relutância em assumir riscos e dificuldade para se adaptar às
novidades; manifestou reações sensoriais pobres e falta de controle sobre seus
apetites sexuais. Agora se sente incompreendido (a) e tem curiosidade e interesse
pelos seus semelhantes como defesa a uma imaginária rejeição por parte dos
outros. É, constantemente, obrigado a enfrentar alguma mudança, às vezes
inesperada. Para eliminar esta negatividade de sua personalidade precisa olhar para
o passado apenas com a percepção dos fatos, e não como um modo de se
justificar. Precisa aprender a aceitar as mudanças, equilibrar a sua liberdade e
direcionar equilibradamente a sua energia sexual; conter seu impulso para
reviravoltas intempestivas e exercer seu senso de responsabilidade.`,

6: `Este é um aspecto que vem sendo negligenciado desde encarnações passadas e
agora se apresenta na lista dos aprendizados importantes, na encarnação atual,
como uma lição a ser aprendida no setor familiar. Houve, no passado, negação em
assumir certas responsabilidades e obrigações familiares, com filhos, com o
casamento; negligencia com relação às atividades e responsabilidades domésticas,
refletindo-se em dificuldade para conviver em família e grupos, e falta de motivação
social. Agora, precisa se esforçar para ser bom (a) companheiro (a) no casamento,
bom pai ou boa mãe, bom (a) filho (a), porque muito lhe será exigido tendo mesmo
que assumir responsabilidades domésticas e prestar serviços aos outros. Precisa
aceitar as coisas como elas são e não ser tanto exigente com os outros; aprender a
consciência do envolvimento com os outros e cultivar os valores da família,
assumindo as obrigações que são inerentes às suas responsabilidades domésticas.`,

7: `Este é um aspecto que vem sendo negligenciado desde encarnações passadas e
agora se apresenta na lista dos aprendizados importantes, na encarnação atual,
como uma lição a ser aprendida no setor familiar. Houve, no passado, negação em
assumir certas responsabilidades e obrigações familiares, com filhos, com o
casamento; negligencia com relação às atividades e responsabilidades domésticas,
refletindo-se em dificuldade para conviver em família e grupos, e falta de motivação
social. Agora, precisa se esforçar para ser bom (a) companheiro (a) no casamento,
bom pai ou boa mãe, bom (a) filho (a), porque muito lhe será exigido tendo mesmo
que assumir responsabilidades domésticas e prestar serviços aos outros. Precisa
aceitar as coisas como elas são e não ser tanto exigente com os outros; aprender a
consciência do envolvimento com os outros e cultivar os valores da família,
assumindo as obrigações que são inerentes às suas responsabilidades domésticas.`,

8: `Este é um aspecto que vem sendo negligenciado desde encarnações passadas e
agora se apresenta na lista dos aprendizados importantes, na encarnação atual,
como uma lição a ser aprendida no setor das finanças e da justiça. Originada na
incapacidade de assumir com eficiência e vontade a conduta nos negócios, nas
finanças e outros assuntos da vida material; na não apreciação do justo valor do
dinheiro, do poder e da justiça. Agora ainda poderá ter de enfrentar constantes
problemas econômicos ou financeiros, ter fraca percepção da realidade, sede de
poder, ganância, carência de bom discernimento, falta de senso de valor do dinheiro
ou preocupação excessiva com ele, sem motivo. Para eliminar esta negatividade
precisa aprender a utilizar corretamente o dinheiro como um meio de trocas; a não
pensar unicamente nos valores materiais, mas também não negligenciá-los; exercer
o poder com amor e justiça, e assumir posições que exijam autoridade e
prerrogativas administrativas.`,

9: `Este é um aspecto que vem sendo negligenciado desde encarnações passadas e
agora se apresenta na lista dos aprendizados importantes, na encarnação atual,
como a suprema lição do amor e da compaixão. Em constantes repetições das
mesmas atitudes, negligenciando na compreensão, na compaixão, no perdão, na
solidariedade, na caridade humana, cristalizou-se profundamente na consciência um
padrão endurecido de ego que ainda não aprendeu a olhar para o seu semelhante
como uma extensão sua. A insensibilidade para com as dores alheias, a falsa noção
de que são os outros os responsáveis pelas tragédias que atrai, imputando-lhes
culpa, reflete toda escuridão da ignorância sobre a mais elevada das leis eternas da
evolução humana/espiritual – a Lei do Amor. Para eliminar esta negatividade de sua
personalidade, precisa aprender a ser generoso (a), bondoso (a), amoroso (a),
compreensivo (a) e a ter compaixão pelo sofrimento alheio; praticar a caridade,
desenvolver a tolerância, a compreensão e o perdão. Esta é a lição mais difícil de ser
aprendida, porque afeta diretamente o orgulhoso ego, que não admite ser humilde e
oferecer a “outra face” perante a ofensa, a agressão, revidando continuamente na
mesma moeda recebida.`,

}

export const mesesPessoal = {
  1: `Mês Pessoal 1
É o mês para assumir o comando e novas responsabilidades. Bom para desenvolver
a individualidade e a independência, para abrir novas oportunidades, decidir,
começar algo novo, dinamizar, propor, apressar as coisas, forçar o movimento
daquilo que e está emperrado. Favorece os pioneiros, as pessoas influentes, os
inventores e os planejadores. Porém, é um mês onde também as pessoas tendem a
dominar, consciente ou inconscientemente, todos os envolvidos. Para negócios e
especulações, é excelente.`,

  2: `Mês Pessoal 2
É um mês passivo e receptivo, bom para exercitar a paciência, harmonizar e
apaziguar grupos, agir com diplomacia, assumir compromissos e proteger, nutrir,
sentir, intermediar. É um mês de hesitações e dúvidas, portanto, nenhum projeto
deve ser iniciado neste período, pois corre risco de não dar certo. O êxito só virá pela
colaboração e cooperação com outras pessoas.`,

  3: `Mês Pessoal 3
Um mês favorável para as relações externas e os contatos. Bom para a vida social,
as amizades, para aventurar-se em novo relacionamento, sendo que para isso o ano
pessoal precisa estar favorável também. Ideal para expressar alegria e criatividade,
para diversão, comunicação, imaginação, popularidade, exposição. O cuidado deve
ser para não dispersar energias, e com isso oportunidades também.`,

  4: `Mês Pessoal 4
É um mês para trabalhar na construção de fundações sólidas; ser realista e
equilibrado (a). Ideal para organizar, sistematizar, economizar e aprender a lidar com
limites e restrições, bem como atentar-se para os pormenores, tanto no domínio
profissional quanto no lar. Um mês para tratar de assuntos concretos.`,

  5: `Mês Pessoal 5
Um mês favorável para viagens, mudanças, liberdade e aventuras. Será um mês
movimentado, bom para novas amizades, para desfrutar de novas sensações da
sensualidade e sexualidade. Bom para desfrutar os prazeres físicos, porém, isso
pode também ser delicado caminho para perdições viciosas. Bom período para
exercitar a inteligência, a esperteza e a versatilidade. A agitação deste mês poderá
insuflar a impaciência.`,

  6: `Mês Pessoal 6
Este é um período para dar atenção às obrigações afetivas, mas também de
proteção financeira. É importante desenvolver atividades familiares e domésticas,
cumprir deveres e obrigações, assumir responsabilidades. Manter a calma e a
serenidade, cumprir a rotina sem grandes inovações, evitar se meter em confusões
ou discussões, a fim de que a paz se estabeleça no lar ou no grupo.`,

  7: `Mês Pessoal 7
Um mês que pode retardar um pouco alguns projetos por necessidade de análise
mais aprofundada. Bom período para reflexão, introspecção, isolamento,
crescimento interior, autoconsciência, avaliar a vida pessoal, silenciar. Favorece as
alianças e os acordos, o desenvolvimento da intuição e o interesse por assuntos
metafísicos, espirituais ou esotéricos.`,

  8: `Mês Pessoal 8
Este é o mês que favorece todos os campos de domínio material e financeiro. Bom
para os negócios e empreendimentos, para atividades políticas e com público em
geral. Surge algum carisma que pode facilitar as alianças nos negócios ou na
política. A agitação pode levar ao nervosismo, sendo aconselhável manter-se calmo
(a) e não discutir nem argumentar sem razão.`,

  9: `Mês Pessoal 9
É o mês da espiritualidade e da intelectualidade. O sucesso virá das realizações
positivas que ajudem os outros. Os objetivos devem ser canalizados para benefício
mais da humanidade que aos interesses pessoais. Período de finalizações,
completude, inspiração, humanidade; bom para viagens e contato com multidões.
Estimula a confiança, a coragem, independência e determinação.`,

  11: `Mês Pessoal 11
Um mês favorável às grandes realizações e revelações, sejam elas de cunho
material, mental ou espiritual. Ideal para por as ideias em ordem, pois a intuição
estará mais aflorada, a inteligência vibrante e a imaginação correndo solta. Período
favorável para os ajustes daquilo que pode melhorar o ser humano, a sua
espiritualidade.`,

  22: `Mês Pessoal 22
Normalmente, neste período você se sente mais prático(a), cordial, idealista,
inspirado(a) e eficiente. Logo, é uma excelente época para desenvolver novas idéias,
pois os projetos iniciados neste período, quase sempre conseguem grandes êxitos,
tanto materiais quanto espirituais. Sendo o número mais poderoso, não é bom
desperdiçar a oportunidade, pois ela pode nunca mais aparecer.`
};


export const anoPessoalDescritivo = {
  1: `Ano Pessoal 1
Este é o ano para começar coisas novas; o ano que estabelece o estilo de todo o
ciclo de nove anos, com perspectivas de grandes mudanças e novos rumos. É o
momento de tomar iniciativa e mostrar coragem e determinação. Para ter sucesso e
conquistar a felicidade, precisa ser independente, criativo (a), seguro (a), seletivo (a)
e seguir sua própria intuição. A armadilha a ser evitada é a falta de iniciativa, a qual
poderá resultar numa apatia que se estenderá por todo o ciclo. O Ano Pessoal 1
oferece a oportunidade de estabelecer o seu rumo e escolher a orientação que vai
tomar para todo o ciclo de nove anos. Seja precavido (a) contra a preguiça e a
procrastinação; comece algo importante este ano ou no mínimo comece alguma
nova atividade. Os acontecimentos e circunstâncias deste ano lhe ensinarão sobre
autoconsciência, individualidade e sobre mudanças vitais que têm de acontecer no
seu íntimo se você quiser atingir o que se propõe na vida, e o que a vida tem para lhe
ensinar. Você vai aprender sobre independência, liderança autoconfiança, iniciativa e
originalidade e precisará de uma grande fé em si mesmo (a) para agir de maneira
adequada. Encontrará situações que envolverão os seus sentimentos mais
profundos, a sua mente e os seus talentos únicos, e a sua necessidade de mais
liberdade. Seu desejo por conquistas materiais e financeiras será favorecido por
oportunidades inesperadas e novos conhecimentos. Desenvolva um senso realista
do seu valor pessoal; observe os seus sentimentos e siga a sua intuição.`,

  2: `Ano Pessoal 2
Este é o ano para agir com discrição e ser paciente, mantendo-se receptivo (a) às
ideias dos outros e permanecendo em segundo plano.
É uma fase muito boa para amizades e relacionamentos.
Para ter sucesso e conquistar a felicidade, você precisa ser delicado (a), diplomático
(a) e cooperativo (a) no trato com as outras pessoas. As armadilhas a serem
evitadas são a hipersensibilidade e a propensão para envolver-se em discussões
e/ou ser excessivamente atrevido (a). O Ano Pessoal 2 é uma excitante viagem na
qual você encontrará uma conexão entre o seu passado, o seu presente e o seu
futuro. Você vai poder usar essas informações para pôr em prática as suas metas
mais ambiciosas. Será preciso perseverança e grande paciência. Isso significa fazer
tudo o que tiver que fazer mais lentamente. Se aceitar o passado e viver no presente,
e se não lutar contra a lentidão de tudo, a compreensão que ganhará neste ano o (a)
levará na direção do futuro de sua escolha. Você sentirá necessidade de mais calor
e afeto na sua vida, uma maior aceitação dos seus sentimentos e dos sentimentos
dos outros. A verdadeira prosperidade e a segurança não podem ser conquistadas
pela competição beligerante e pela agressão. Portanto, paz, cooperação e tolerância
são agora os seus melhores meios de avançar. Coopere e aprenda a ficar na sua
posição de apoio e você estará desenvolvendo uma confiança e uma elegância que
lhe permitirão, com calma e eficácia, lidar com todas as situações sem se envolver
nos problemas das outras pessoas.`,

  3: `Ano Pessoal 3
Este é um ano de boa saúde e de intensa vida social que, no entanto, poderá trazer
tensão emocional. É uma fase boa para divertimentos, viagens, crescimento pessoal
e para cultivar novas amizades. O sucesso e a felicidade resultam do fato de se dar
vazão à própria criatividade e de se expressar construtivamente através das
palavras: escrevendo, lecionando, representando ou cantando. As armadilhas a
serem evitadas são a extravagância (que pode acarretar dificuldades financeiras no
ano 4) e a perda de oportunidades em decorrência da dispersão das energias. O ano
pessoal 3 é também um ano propenso a romances, sendo que as pessoas casadas
que sucumbirem a relacionamentos extraconjugais nesse ano é quase certo que
estarão preparando o caminho para o divórcio ou separação no ano 4. No Ano
Pessoal 3, a sua felicidade a longo prazo é a questão central. A vibração do 3 libera
o desejo e a força motriz da sua vontade para descobrir – e então realizar – o que o
(a) torna feliz. Relacionamentos e projetos importantes poderão florescer e novas
oportunidades surgem por toda parte ao seu redor. A vibração dinâmica deste ano
permite que você determine os seus verdadeiros desejos e perceba que eles podem
ser realizados. É provável que as ideias, os planos ou projetos que você começou há
dois anos mostrem agora sinais de progresso. Se esforce o máximo possível. A sua
vontade será de estar perto de outras pessoas cuja vontade também seja livre e
dinâmica. As experiências deste ano lhe mostrarão que a evolução humana se mede
pelo nível da consciência e livre arbítrio da pessoa, e que o contato direto com os
outros é uma parte essencial da natureza humana que deve ser expandida. Chegou
a hora de considerar os seus desejos e a sua felicidade em primeiro lugar, porém,
evitando o egoísmo.`,

  4: `Ano Pessoal 4
Este é um ano de restrições, de trabalho duro e de grandes despesas. É o momento
de se construir para o futuro. O sucesso e a felicidade resultam da autodisciplina, de
ser metódico (a) e de dar forma concreta às suas ideias. Esta é uma boa fase para
lidar com propriedades e imóveis. A armadilha a ser evitada é a da negligência com
a saúde. O Ano Pessoal 4 é de identidade, prioridade e esforço. Os acontecimentos
deste ano de muito trabalho não deixarão nenhuma dúvida de que chegou a hora de
estabelecer novas prioridades e de trabalhar com afinco em benefício de uma
determinada meta de longo prazo. Sem essa visão e esse compromisso, este ano
poderia ser um percurso confuso e acidentado. A energia do 4 rege a força da
vontade; a vontade é feita de sentimentos. Saber como você sente é a única maneira
de saber o que você quer fazer na sua vida. Toda a nossa criatividade parte dos
nossos sentimentos. A energia do 4 é muito séria e prática, e precisa de uma meta
especifica para perseguir. Neste ano, você vai desenvolver melhor o sentido que dá
para a própria vida e estabelecer um rumo e uma direção a seguir. Organize a sua
vida de acordo com o que é importante para você. Livre-se de circunstâncias e
crenças que o (a) limitam do ponto de vista físico, emocional, criativo e intelectual.
Analise e organize suas finanças.`,

  5: `Ano Pessoal 5
Este é o ano para se deixar levar por condições em constante mudança, para viver o
presente sem fazer muitos planos para o futuro, para abandonar-se aos seus
impulsos mais creativos da Alma. É um ano em ritmo acelerado, propenso a
acidentes e cheio de mudanças inesperadas: do bom para o ruim, do ruim para o
bom. É um ano para divertimentos, sem se pensar no futuro. O sucesso e a
felicidade resultam de você ser adaptável, de procurar desenvolver a própria
personalidade e de aproveitar as oportunidades antes que sejam perdidas. As
armadilhas a serem evitadas são a dispersão de energias, o excesso de atividades
sexuais e o mau uso da liberdade pessoal em prejuízo dos outros. O Ano Pessoal 5 é
excitante e imprevisível. Sua energia é a da mudança, da liberdade, da variedade, da
escolha, do súbito e inesperado, do incomum e do físico. É o ponto intermediário de
todo o ciclo de nove anos. Os primeiros quatro anos ficaram para trás; os quatro
anos seguintes ainda estão por vir, e você está exatamente no meio do ciclo. É um
ano que pede ajustes nas metas e objetivos para então seguir com mais leveza e
confiança rumo às realizações deles. O ano pessoal 5 oferece oportunidades para
dar uma guinada na sua vida depois de estabelecer uma orientação inteiramente
diferente de todas as que já seguiu antes. As escolhas que você faz devem ser
baseadas nas suas sensações sobre a intuição, junto com uma reflexão sobre o
resultado provável de suas escolhas. Significa que você deve estar atento (a) a
como algumas mudanças podem produzir uma reação em cadeia de muitas
mudanças. É essencial que você saiba como está se sentindo a todo momento.
Neste ano você deve liberar todas as emoções reprimidas que vem pesando dentro
de você há muito tempo. O princípio energético envolvido no sexo e na reprodução
estarão ativados.`,

  6: `Ano Pessoal 6
Este é um ano para o casamento e as responsabilidades domésticas. É uma fase
em que alguma doença crônica, eventualmente, talvez se manifeste para que possa
ser curada. Pode também ser um ano de problemas relativos a viagens, tais como
defeitos no carro, bagagem perdida e assim por diante. O sucesso e a felicidade
resultam de uma dedicação altruísta à família e à comunidade. As armadilhas a
serem evitadas consistem em ser excessivamente idealista ou propenso (a) a
discussões e em esperar demasiado dos outros. O Ano Pessoal 6 representa um
momento decisivo da sua vida, em que você terá a sensação definida de dever e
prioridade. O primeiro passo para tornar este ano bem sucedido é admitir que você
realmente tem responsabilidades. Você sentirá um forte desejo de se sentir mais
independente e confiante e de encontrar o seu lugar no mundo. Ao mesmo tempo,
pode ser preciso procurar outra pessoa – talvez o cônjuge, a (o) amante, o filho, o
pai, a mãe, o parente, o animal de estimação, o amigo, o vizinho ou até mesmo a sua
casa ou a sua comunidade para equilibrar as necessidades deles com as suas. Você
chegou a uma etapa muito importante e emocional da sua jornada, porque neste
ano os seus relacionamentos mais íntimos irão para o centro do palco. No momento
há três importantes pistas de energia abertas para você. Na esquerda e na direita,
ficam as franjas instáveis dos extremos opostos. A pista do centro contém a única
energia capaz de impedir que os dois extremos colidam, destruindo o amor e a vida;
a ligação entre os extremos que pode restabelecer a paz e a harmonia. A pista do
centro é o equilíbrio, e é nela que você deve se concentrar no momento.`,

  7: `Ano Pessoal 7
Este é um ano para o isolamento e o descanso. Um ano para o estudo e o
aperfeiçoamento interior. É uma fase de introspecção. O sucesso e a felicidade
resultam do estudo dos significados mais elevados da vida. As atividades
materialistas devem ser evitadas. O dinheiro só aparecerá se não correr atrás dele.
Quanto menor for a ambição melhor serão os resultados. As armadilhas a serem
evitadas são as de negligenciar a saúde, forçar decisões, ser excessivamente crítico
(a) e permitir que temores e complexos submersos venham à tona. O Ano Pessoal 7
é de buscas e aprendizados. Um momento de introspecção, emoção, pesquisa,
análise, intuição, reflexão, autorrealização, reclusão e, acima de tudo, fé. Um ritmo
inesperadamente lento poderá, às vezes, causar frustração e preocupação. Nessas
ocasiões, lembre-se de que isso não significa falta de movimento, mas uma
possibilidade de caminhar de maneira mais realista em direção às suas metas
maiores e de longo prazo. Este é um ano centrado em si mesmo (a), em que você
vai descobrir que tem um potencial muito maior do que imagina. Você vai buscar – e
encontrar – o caminho ou estilo de vida que pareçam mais certos para você. Um
aspecto mais sério da sua natureza irá se manifestar, junto com a plena consciência
de que o status quo simplesmente nunca mais será bom o bastante. Em vez de se
apressar a sair à procura de novas oportunidades, entenda que elas é que estão
procurando você. Tentar se esforçar ou seguir à força só resultarão nos mesmos
velhos sentimentos de descontentamento que você achava que o seu esforço e
empenho eliminariam.`,

  8: `Ano Pessoal 8
Este é um ano dinâmico e materialista. Os negócios provavelmente deverão
prosperar. Poderá haver grandes perdas ou grandes ganhos, dependendo de como
você lidou com os anos anteriores do ciclo. É uma excelente fase para comprar e
vender imóveis; hora de pagar e de cobrar dívidas. O dinheiro pode surgir de fontes
inesperadas. O sucesso e a felicidade resultam da coragem de ousar grandes feitos,
de utilizar o bom senso, de dar atenção ao dinheiro, de ser organizado (a), prático (a)
e eficiente. As armadilhas a serem evitadas são as de ser emotivo (a) e sentimental
demais. Você consegue o que quer no Ano Pessoal 8, no entanto, se você não
souber o que quer, não terá como saber o que vai conseguir. Este ano é momento de
ser específico (a) e de sentir o que vai no seu coração e se deixar atrair pela
realização dos seus desejos. Você está percorrendo um ano que irá prosperar de
acordo com a sua força de vontade e o seu desejo de ser bem sucedido (a). Ao
longo do Ano Pessoal 8 você vai sentir um sensível aumento na sua capacidade de
fazer as coisas acontecerem e conseguir que as coisas sejam feitas. Em razão
disso serão maiores as expectativas, junto com a sua autoconfiança e a sensação
de que está satisfeito (a). Tradicionalmente a energia do 8 é conhecida como a
energia do poder, dos ganhos materiais e financeiros, da realização, das
recompensas, da posição social e da satisfação pessoal. Neste ano, você vai passar
por todas essas experiências enquanto busca o verdadeiro significado delas.`,

  9: `Ano Pessoal 9
Este é um ano de faxina, entre o fim de um ciclo e o começo do próximo. É o
momento de se livrar de tudo o que for desnecessário ou estiver gasto pelo uso;
especialmente pessoas para as quais não existe mais lugar em sua vida. É uma boa
fase para escrever, representar, viajar e para se dedicar aos estudos metafísicos.
Haverá alguma espécie de perda; um relacionamento poderá terminar. O sucesso e
a felicidade resultam da compaixão, das atividades humanitárias, do desapego
emocional e de deixar que se vá o que quer que comece a sair da sua vida. As
armadilhas a serem evitadas são as de ser ciumento (a) e possessivo (a). O Ano
Pessoal 9 conduz você ao fim de um ciclo completo de nove anos da sua vida. Este
é o momento de concluir negócios inacabados, de chegar a conclusões, de amarrar
pontas soltas e arrumar as coisas do passado. Essas ações irão capacitá-lo (a) a
entrar nos próximos nove anos da sua vida sem a pressão das questões não
resolvidas do passado que estarão puxando a sua energia para trás. A sua realidade
não é só uma questão de onde você se encontra hoje, ou de onde você want estar
amanhã. Ela é feita de todas as coisas que já lhe aconteceram na vida, de todas as
pessoas que você conheceu, de tudo o que você já fez e de todos os sentimentos
que você alguma vez sentiu – ou negou. Este ano oferece a oportunidade de uma
transformação evolutiva importante. Haverá mudanças e melhoras em todos os
setores da sua vida, embora você possa não ver imediatamente os méritos positivos
de determinadas situações. Às vezes você terá uma sensação de entorpecimento ou
de estagnação. Isso acontece porque você está próximo de admitir plenamente a
sua realidade, mas mantém as emoções envolvidas dentro de você em vez de
deixa-las do lado de fora. Neste ano não basta ter uma compreensão intelectual do
livre arbítrio. Você vai aprender que os seus sentimentos são os únicos meios de
provocar a sua liberdade pessoal. É um ano de finalizações e você deve livrar-se de
tudo aquilo que não se faz mais necessário, sejam coisas materiais ou sentimentos
e crenças. Nada de novo acontece no ano pessoal nove enquanto não forem feitas
as finalizações necessárias.`
};



export const tendenciaOculta = {
  1: `Tendência Oculta 1
É o desejo da individualidade. Há uma tendência a ser autoritário (a), dominador (a),
arrogante e um tanto egoísta.`,

  2: `Tendência Oculta 2
É o desejo de associações. Há uma tendência para depender demasiadamente dos
outros, principalmente da família e dos amigos, tanto monetariamente como
emocionalmente.`,

  3: `Tendência Oculta 3
É desejo da autoexpressão. Há uma tendência à vaidade, à impaciência, à
presunção, a dispersar energias, viver sem objetivos concretos e buscar sempre
diversões e festas, sem se preocupar muito com o dia de amanhã.`,

  4: `Tendência Oculta 4
É o desejo de trabalho. Há uma tendência para asfixiar sua personalidade com
quantidade excessiva de detalhes (perfeccionista), de ser teimoso (a), intolerante e
obstinado (a) demais.`,

  5: `Tendência Oculta 5
É o desejo de mudança e também de liberdade pessoal. Há uma tendência para
viver à custa dos outros, abusar do sexo, de algumas drogas ou bebidas, para
mudanças sem motivo aparente e para ser precipitado (a) e impulsivo (a).`,

  6: `Tendência Oculta 6
É o desejo de realização e responsabilidade. Há uma tendência para se preocupar
excessivamente com a família, principalmente com os filhos (se os tiver), com os
deveres profissionais, para ser teimoso (a), perfeccionista e para apegar-se a
modelos inflexíveis e obstinados.`,

  7: `Tendência Oculta 7
É o desejo de sabedoria e conhecimento. Há uma tendência para o fingimento, para
a intriga e até para o alcoolismo, pois normalmente sente-se incompreendido (a) e
até rejeitado (a) pelos parentes, amigos, companheira (o) ou simplesmente
conhecidos.`,

  8: `Tendência Oculta 8
É o desejo do materialismo. Há uma tendência para se preocupar excessivamente
em como ganhar dinheiro, obter bens materiais e também poder.`,

  9: `Tendência Oculta 9
É o desejo de conhecimento e amor universal. Há uma tendência para se preocupar
excessivamente com os problemas mundiais em detrimento de si próprio e da
família.`
};

export const respostaSubconsciente = {
  2: `Resposta Subconsciente 2
É um ser arrogante, mentiroso (a), que não respeita regras e quer que tudo e todos
girem em torno de si.`,

  3: `Resposta Subconsciente 3
É dispersivo (a) e até indisciplinado (a); normalmente reage de forma explosiva e até
de certa maneira destrutiva.`,

  4: `Resposta Subconsciente 4
Normalmente é um ser que vive perdido num labirinto de detalhes. As suas reações
são fracas, tem tendência a vacilar e até atrapalhar os outros.`,

  5: `Resposta Subconsciente 5
É uma pessoa tensa e nervosa. Numa crise tem tendência a agir de forma confusa e
impulsiva.`,

  6: `Resposta Subconsciente 6
É um ser sentimental. Sua primeira preocupação numa crise é com os entes
queridos, seus objetos de estimação e animais (se os tiver).`,

  7: `Resposta Subconsciente 7
Normalmente é arredio (a) e não gosta de se envolver com problemas alheios. Em
uma emergência, considerará analiticamente a situação e, então, normalmente se
retirará para dentro de si mesmo (a) e rezará. Se existirem perdas materiais ou de
vidas, poderá se entregar a vícios, como a bebida ou drogas.`,

  8: `Resposta Subconsciente 8
É eficiente e organizado (a). Numa crise ou em qualquer ocasião pode-se contar
com ele (a), pois é seguro (a) e digno (a) de confiança.`,

  9: `Resposta Subconsciente 9
É um ser entediado (a). A maioria das coisas tem pouca importância para você.
Numa crise é melhor não contar com você, pois é impessoal, filósofo (a),
introspectivo (a), resignado (a) e indeciso (a).`
};

export const sequenciaNegativa = {
  111: `Sequência Negativa 111
A pessoa fica limitada, perdendo a coragem de se aventurar em algo novo. Pode,
também, ficar um longo período inativo (a), desempregado (a) ou mesmo impotente
para realizar o que quer que seja permanecendo nesse estado o tempo que durar o
Arcano que domina o período. Esta sequência indica, eventualmente, tendência para
desenvolver alguns distúrbios ou doenças cardíacas.`,

  222: `Sequência Negativa 222
Esta sequência indica possibilidade de timidez e indecisão, podendo levar o (a) seu
(a) possuidor (a) a ser subjugado (a) por aqueles mais próximos, sejam eles amigos,
sócios, colegas de trabalho ou simplesmente conhecidos. Faz perder a autoestima,
limitando-o (a) quanto a seus projetos e realizações. Pode, eventualmente, surgir
alguma doença que provoque dependência.`,

  333: `Sequência Negativa 333
Indica possibilidade de ser incompreendido (a), dificuldade no diálogo,
principalmente com colegas de trabalho e com a (o) companheira (o). Tem
dificuldade de se impor em seus projetos e para convencer as pessoas. Esta
sequência pode, eventualmente, indicar possibilidade de doenças respiratórias ou de
articulações.`,

  444: `Sequência Negativa 444
Reflete dificuldade na realização profissional. Pode ser mal remunerado (a) e as
perspectivas profissionais serem difíceis, ou ter dificuldade em se manter no
emprego, ou se dar bem em qualquer atividade. Pode, eventualmente, indicar
possibilidade de doenças reumáticas ou arteriais.`,

  555: `Sequência Negativa 555
Indica possíveis mudanças não desejadas de casa, de profissão ou meio social. Sob
esta influência, a pessoa tem frequentes altos e baixos, não se fixando
profissionalmente, sempre à procura de melhores oportunidades, e ter dificuldade
para as encontrar. Pode, também, causar fuga do meio social em que habita e a
desenvolver alguma doença de pele.`,

  666: `Sequência Negativa 666
Indica possibilidade de haver decepções com amigos, sócios, parentes e até com o
cônjuge (namorada (o) ou companheira (o)), que não o (a) compreende em seus
propósitos e sentimentos. Algum tipo de doença cardíaca pode aparecer nesse
estado.`,

  777: `Sequência Negativa 777
Faz com que se afaste de tudo e de todos. Pode levar ao desmando, transforma-lo
(a) em um ser dependente, vaidoso (a), arrogante e, consequentemente, vítima da
própria intolerância. A persistência nesse sentimento provoca sentimentos de
solidão, doenças nervosas, dependências e, eventualmente, algum tipo de câncer.`,

  888: `Sequência Negativa 888
Esta sequência torna arredio (a), afastando-o (a) das atividades sociais. Caso não
seja evoluído (a) espiritualmente, poderá descontrolar-se emocionalmente com
muita facilidade. Sob esta vibração, poderá oscilar entre a riqueza e a pobreza e,
como consequência desse estresse, poderá desenvolver alguma doença.`,

  999: `Sequência Negativa 999
Reflete uma tendência a passar por dificuldades financeiras, eventualmente perdas
de bens, eventuais fracassos nos negócios e vários tipos de provações provocadas
pelos períodos de estagnação. Tudo isto pode afetar o sistema nervoso e o coração.`
};


export const arcanos = {
  1: {
    image: "https://i.ibb.co/PbRw50V/1-O-mago.jpg",
    titulo: "ARCANO PESSOAL 1 - O MAGO ou ",
    descricao: "Aponta para os dons e para o potencial criativo que ainda não se manifestaram. Pode surgir como um pressentimento, uma intuição, uma súbita rajada de energia com relação a novas oportunidades. Indica um momento de clareza e de identificação das possibilidades inexploradas. O Mago vem indicar que agora a viagem será possível, e que ele tem consciência de suas reais possibilidades e de sua capacidade, ainda que não desenvolvida. A atenção deve se voltar para a intuição e os pressentimentos, pois podem revelar as novas oportunidades que poderão surgir de modo inesperado. Representa a atividade mental consciente, a convicção e a direção e prontidão; a inteligência materializada pela vontade."
  },
  2: {
    image: "https://i.ibb.co/1G16HZRQ/2-A-Sacerdotisa.jpg",
    titulo: "ARCANO PESSOAL 2 - A PAPISA ou A SACERDOTISA",
    descricao: "Indica força e intuição e sugere o encontro com o mundo interior. O indivíduo pode estar sendo conduzido para esse mundo sem qualquer explicação por intermédio de seu interesse pelas coisas ocultas, pelo esoterismo, ou, talvez, pelos efeitos de algum sonho perturbador. Enfim, por algo que de alguma forma lhe diga que existem forças superiores que atuam na vida das pessoas. Denota percepção das próprias necessidades espirituais e sentimento religioso. Representa a atividade mental intuitiva; a sensibilidade aflorada, a sabedoria e o mistério, os planos futuros, os estudos, o silêncio e a espera."
  },
  3: {
    image: "https://i.ibb.co/ZpYxKKCK/3-A-Imperatriz.jpg",
    titulo: "ARCANO PESSOAL 3 - A IMPERATRIZ ou A EMPERATRIZ",
    descricao: "Significa criatividade, produtividade, maternidade, abundância, boas colheitas, êxito em um ambiente seguro e isento de perigos. Fertilidade tanto mental como física. Indica uma fase da vida mais ligada às coisas terrenas. Um casamento, ou mesmo o nascimento de uma criança podem estar prestes a acontecer. A Imperatriz mostra ainda o êxito nas empresas, e nos empreendimentos, se a pessoa for firme e reta nos pensamentos e ações. Representa o poder da imaginação, a visualização criativa, as emoções saudáveis e o amor; a materialização do desejo; comunicação, inovação, fertilidade, expansão e crescimento."
  },
  4: {
    image: "https://i.ibb.co/pjLnJvFZ/4-O-Imperador.jpg",
    titulo: "ARCANO PESSOAL 4 - O IMPERADOR ou O EMPERADOR",
    descricao: "Significa liderança, atividade mental, dominação, domínio, paternidade. Ditadura; paixão, mas sempre controlada pela inteligência. É a majestade e o poder. Mostra manifestação de autoridade ou necessidade de consulta a uma autoridade ou superior hierárquico. Confronto com o princípio paternal, tanto no seu aspecto positivo quanto negativo. Representa o poder e a autoridade, a faculdade da razão, a lógica e o raciocínio indutivo; atividade, força e poder; a realidade estruturada e lógica, a disciplina, o anseio por estabilidade e seriedade; os planos seguros."
  },
  5: {
    image: "https://i.ibb.co/4whHbnMy/5-O-Papa.jpg",
    titulo: "ARCANO PESSOAL 5 - O PAPA ou O HIEROFANTE",
    descricao: "Significa ortodoxia, apego às formas externas, ao convencional, ao credo e ao ritual. Tradicionalismo; necessidade de seguir as normas socialmente aceitas; disposição para o dever, a consciência, a generosidade, o perdão, a compaixão e a busca por respostas de ordem filosófica. O Hierofante pode surgir na forma de um psicoterapeuta, um conselheiro, um mestre ou mentor espiritual a quem nos dirigimos em busca de auxilio e orientação. Pode estar indicando que há necessidade de começar a buscar algumas respostas de ordem filosófica. Esse questionamento pode se traduzir no estudo aprofundado de alguma filosofia, ou de um sistema religioso, ou crença, ou mesmo na forma de um profundo comprometimento com relação ao sentido da vida. Representa a compreensão racional das coisas percebidas intuitivamente; as trocas de experiências para aprender e ensinar, as mudanças, a responsabilidade e a moralidade."
  },
  6: {
    image: "https://i.ibb.co/CpxBP6dk/6-Os-namorados.jpg",
    titulo: "ARCANO PESSOAL 6 - OS ENAMORADOS ou OS AMANTES",
    descricao: "Significa escolha, eleição, tentação, atração. A luta entre o sagrado e o profano nas relações amorosas. Harmonia dos aspectos interior e exterior da vida; amor puro na sua expressão mais elevada; altruísmo. No mundo divino é a ciência do bem e do mal; no mundo intelectual é o equilíbrio da necessidade e da liberdade; no mundo físico é o antagonismo das forças naturais, o encadeamento das causas aos efeitos. Indica necessidade de escolhas, quase sempre no plano amoroso. Pode também indicar a necessidade de estabilizar as emoções. Representa as escolhas seletivas, as faculdades discriminativas da mente; a busca pelo equilíbrio e estabilidade emocional; as uniões, as relações e situações felizes."
  },
  7: {
    image: "https://i.ibb.co/qvzb51v/7-O-carro.jpg",
    titulo: "ARCANO PESSOAL 7 - O CARRO",
    descricao: "Significa triunfo, êxito, vitória. Controle sobre as forças da natureza. Recuperação da saúde, vitória sobre as penúrias econômicas ou sobre inimigos de qualquer tipo. É o arcano que representa o alcance de algo grande; conflito e luta que, por sua vez, resultam em crescimento e fortalecimento da personalidade. Pode também significar viagens agradáveis e cômodas. Representa poder e vontade; triunfo, avanço e progresso; novas experiências, confiança, novidades, agilidade."
  },
  8: {
    image: "https://i.ibb.co/xK8pscqY/11-a-justi-a.jpg",
    titulo: "ARCANO PESSOAL 8 - A FORÇA",
    descricao: "A Força, como Arcano Pessoal, representa a necessidade de confrontar desafios com inteligência e sabedoria. A pessoa deve lidar de maneira equilibrada com aspectos práticos e espirituais da vida, relaxar e acreditar em suas capacidades, usando seu carisma e influência positivamente."
  },
  9: {
    image: "https://i.ibb.co/Ng7Kmyw2/9-heremita.jpg",
    titulo: "ARCANO PESSOAL 9 - O EREMITA ou O HERMITÃO",
    descricao: "O Eremita, como Arcano Pessoal, encoraja a viver uma vida de reflexão e autoconhecimento. A pessoa deve buscar a serenidade em seu próprio espaço, evitar a dependência dos outros, e transmitir sabedoria, sempre atenta para não se doar em excesso, lembrando que cada coisa tem seu tempo."
  },
  10: {
    image: "https://i.ibb.co/0j3vY6c/10-Roda-da-fortuna.jpg",
    titulo: "ARCANO PESSOAL 10 - A RODA DA FORTUNA",
    descricao: "Significa êxito, golpe de sorte inesperado; mudança para melhor. Evolução favorável, segundo as leis do acaso; prenuncia alguma mudança brusca na vida, que tanto pode ser boa como ruim. De qualquer forma, a virada da roda sempre traz o crescimento e inaugura uma nova fase da vida. Representa a riqueza, as trocas favoráveis e a expansão; mudanças e boa fortuna; adverte sobre o tempo e a instabilidade, a falta de planos e a lei do retorno; indica que é tempo de aprender para crescer."
  },
  11: {
    image: "https://i.ibb.co/wNGxwn8f/8-A-justi-a.jpg",
    titulo: "ARCANO PESSOAL 11 - A JUSTIÇA",
    descricao: "Significa força de caráter; o poder espiritual vencendo o poder material e as forças impulsivas das paixões físicas e emocionais. O amor triunfando sobre o ódio. Vitória da natureza superior sobre os desejos mundanos e carnais; uma situação onde a colisão com o leão interior é inevitável, em que a administração bem conduzida da própria raiva e de todas as emoções é altamente benéfica. A coragem, a força e a autodisciplina são necessárias para dominar a situação. Representa a energia que atua transformando a matéria; a força da mente e o domínio sobre o ambiente."
  },
  12: {
    image: "https://i.ibb.co/XZJFJQNK/12-Enforcado.jpg",
    titulo: "ARCANO PESSOAL 12 - O PENDURADO ou O ENFORCADO",
    descricao: "Significa renúncia ou sacrifício por motivos superiores; desenvolvimento das faculdades psíquicas; domínio da tentação material; transformação da personalidade através da renúncia ou do sacrifício; necessidade do sacrifício voluntário com o propósito de atingir algo muito mais valioso. Representa a abnegação e o sacrifício voluntário por uma causa justa."
  },
  13: {
    image: "https://i.ibb.co/qLt8BTmY/13-Morte.jpg",
    titulo: "ARCANO PESSOAL 13 - A MORTE",
    descricao: "Significa transformação, mudança e destruição seguidas de renovação; morte de uma parte de si, para o nascimento de novas ideias e de novas oportunidades; uma transformação inevitável, um renascimento do ser interior, desde que se consiga abrir mão da parte de nós que não somos mais. Se essa experiência será dolorosa ou não, vai depender da nossa capacidade em aceitar e reconhecer a necessidade dos fechamentos. Representa as transformações profundas que a vida exige de nós; renovação e mudanças radicais."
  },
  14: {
    image: "https://i.ibb.co/0Jt0y2c/14-Temperan-a.jpg",
    titulo: "ARCANO PESSOAL 14 - A TEMPERANÇA",
    descricao: "Significa moderação, adaptação, compreensão, cooperação e trabalho em harmonia com os demais; boa administração; o que imagina ocorrerá; conseguirá combinações de êxito; paz interior; necessidade de um redirecionamento no fluxo dos sentimentos e dos relacionamentos. Representa as provas a serem superadas e o otimismo e a confiança necessários para isso; adaptação."
  },
  15: {
    image: "https://i.ibb.co/0Jt0y2c/15-O-diabo.jpg",
    titulo: "ARCANO PESSOAL 15 - O DIABO",
    descricao: "(O Diabo)."
  },
  16: {
    image: "https://i.ibb.co/0Jt0y2c/16-A-torre.jpg",
    titulo: "ARCANO PESSOAL 16 - A TORRE",
    descricao: "(A Torre)."
  },
  17: {
    image: "https://i.ibb.co/0Jt0y2c/17-A-estrela.jpg",
    titulo: "ARCANO PESSOAL 17 - A ESTRELA",
    descricao: "Significa inspiração, visão, esperança, idealismo; ajuda desinteressada; dons espirituais em desenvolvimento; grande amor em evidência; esperança e fé em meio às atribulações; renascimento da alegria e do amor; influência, ascendência, criatividade, contato com alguma pessoa que trará inspiração. Representa ideia ou conceito de esperança; caminhos abertos, reinício, ação e projetos favoráveis."
  },
  18: {
    image: "https://i.ibb.co/0Jt0y2c/18-O-lua.jpg",
    titulo: "ARCANO PESSOAL 18 - A LUA",
    descricao: "Significa inspiração, imaginação, intuição; desenvolvimento das faculdades psíquicas latentes; viagem astral; o mundo subconsciente dos sonhos; as trevas; um período de confusão, de flutuação e de incertezas. Representa o inconsciente misterioso e oculto; inimigos ocultos, feitiçaria, escuridão, medo, intrigas e fofocas."
  },
  19: {
    image: "https://i.ibb.co/0Jt0y2c/19-O-sol.jpg",
    titulo: "ARCANO PESSOAL 19 - O SOL",
    descricao: "Significa paz, amor e felicidade; uma vida bem vivida; um trabalho bem feito; despertar e renovação; assuntos legais favoráveis; alegria e prosperidade; cumulação no plano espiritual; um período de clareza, dinamismo e confiança renovada. Representa a luz presente em cada ser humano, sua sabedoria, generosidade, confiança e caráter; saúde e bem-estar."
  },
  20: {
    image: "https://i.ibb.co/0Jt0y2c/20-O-julgamento.jpg",
    titulo: "ARCANO PESSOAL 20 - O JULGAMENTO",
    descricao: "Significa renascimento de uma nova vida; que coisas maravilhosas vão ocorrer; poderá vislumbrar o que lhe prepara o futuro; transformação; verá tudo sob uma nova luz; rompimento com o convencional; propõe um período de recompensas pelos esforços empreendidos anteriormente. Representa o julgamento ou síntese que permitem a compreensão da realidade final e o transcender da mente; aproveitar as experiências passadas, renascer para vida nova; troca de ideias, popularidade, fama."
  },
  21: {
    image: "https://i.ibb.co/0Jt0y2c/21-O-mundo.jpg",
    titulo: "ARCANO PESSOAL 21 - O MUNDO",
    descricao: "Significa liberdade para ir em qualquer direção que desejar; conclusão de um trabalho bem feito; triunfo em qualquer coisa que se empreenda; um período de realizações e de totalização; o momento do sucesso, da finalização positiva de um processo ou de uma questão; o instante de alcançarmos um objetivo, de atingirmos um ideal pelo qual lutamos durante muito tempo. Representa os poderes paranormais, a dominação sobre as leis físicas e a matéria; sucesso, viagens, plenitude."
  },
  22: {
    image: "https://i.ibb.co/0Jt0y2c/22-O-louco.jpg",
    titulo: "ARCANO PESSOAL 22 - O LOUCO",
    descricao: "Significa decisão importante; encontrar-se diante de uma escolha que deve ser decidida com cuidado, mas também com coragem e, sobretudo, atendendo a intuição e aos impulsos interiores; anuncia o advento de um novo capítulo da vida. Existe o risco, mas existe também o desejo de saltar no desconhecido. Representa as inteligências sobre-humanas, a espontaneidade, o espiritual atuando no material, o risco."
  },
  23: {
    image: "https://i.ibb.co/Ngcwzmq3/23-O-LAVRADOR.png",
    titulo: "Arcano 23 - O LAVRADOR (Senhor/Rei do Bastão/Rei de Paus/k de Paus)",
    descricao: "Aparece um aspecto da personalidade que vai gerar novas ideias; qualidades de liderança, bondade e honestidade. É o símbolo do poder adquirido pelo mérito e pelo trabalho, sendo emblema de proteção das pessoas bem colocadas. Representa autoconfiança, motivação, empreendedorismo, sabedoria e convicção; respeitabilidade e amizades. Risco: inflexibilidade e intolerância."
  },
  24: {
    image: "https://i.ibb.co/jvk04cYV/24-A-TECEL.png",
    titulo: "Arcano 24 - A TECELÃ (Senhora/Rainha do Copo/Rainha de Copas/Dama de Copas)",
    descricao: "É símbolo de posição elevada; demonstra a força da imaginação, da constância e da objetividade; momento de oferecer e receber aconchego e proteção. Representa a ação desejada, o plano criativo; o feminino atraente e inteligente; crescimento, atividade, firmeza e amor pela vida. Risco: vaidade e orgulho."
  },
  25: {
    image: "https://i.ibb.co/cWfYjdj/25-O-ARGONAUTA.png",
    titulo: "Arcano 25 - O ARGONAUTA ou O NAVEGADOR (Cavalheiro de Bastão/Soldado do Bastão/Cavaleiro de Paus)",
    descricao: "Significa partida, mudanças, fuga, dissensão, separação, abandono, início ou final de uma situação importante; o símbolo dos altos empregos secundários, da luta para conquistar uma posição, do poder adquirido pelas lutas; momento de desenvolver as qualidades exuberantes, aventureiras e voláteis contidas em si. Representa a ação necessária no plano formativo; mudança de residência, de cidade, de situação e modo de vida; entusiasmo. Risco: tensão, euforia, exibicionismo, impaciência."
  },
  26: {
    titulo: "Arcano 26",
    descricao: "Significa curiosidade, entusiasmo; que é hora de identificar os lampejos criativos dentro de si e ser audacioso. Esse momento quase sempre se manifesta na forma de uma vaga sensação de insatisfação, mas que não chega a justificar uma mudança radical. Representa ação imediata no plano material; chegada de boas notícias, oportunidade, entusiasmo e aventura, bem como possibilidade de viagens. Risco: impulsividade, inexperiência levando a maus resultados."
  },
  27: {
    titulo: "ARCANO 27 – O INESPERADO",
    descricao: "Representa situações opressivas em seu limite; falta de perspectiva, fardo pesado, excesso de responsabilidades, sobrecarga, tensões e preocupações, desentendimentos, traições, falsidades e hipocrisias; necessidade de mudar a energia; final de uma fase."
  },
  28: {
    image: "https://i.ibb.co/mr9TXZQH/27-O-INESPERADO.png",
    titulo: "Arcano 28",
    descricao: "Empreendimentos científicos ou misteriosos, cujo sucesso depende de muita prudência e discrição; viagens perigosas; surpresas; atraso, suspensão, adiamento, demora, obstáculo, contrariedade. Representa o poder da informação e da cultura, força física ou psíquica; conhecimentos especiais; atitude defensiva, medo de se machucar e sofrer que leva a manter uma situação que não funciona mais; desconfiança, recusa de novidades que leva a fechar-se em si. Persistência e vigilância. Risco de virar um “mártir”."
  },
  29: {
    titulo: "Arcano 29",
    descricao: "Significa rapidez e fluidez dos impulsos criativos; que o sucesso da sua meta está ao seu alcance e próximo; um período de ação depois de muita espera e luta; novas ideias que trarão benefícios; campo, agricultura, bens imóveis, divertimento, alegria, paz, tranquilidade; viagens por causa de dinheiro e de grandes negócios, felicidade certa; necessidade de equilibrar o orçamento. Representa a percepção dos sentimentos das outras pessoas; o imprevisto e a rapidez de ação; notícias imprevistas."
  },
  30: {
    titulo: "Arcano 30",
    descricao: "Significa bravura e muita pressão no trabalho ou em outros aspectos da vida. Representa o valor e o prazer em riscos e atividades perigosas que resultam em estímulo; atividades arriscadas; defesa do interesse mediante intransigência, ameaças e concorrência. Equilibrar a força defensiva, a fim de obter vitórias em seus pontos de vista. Risco de se fixar só na defensiva."
  },
  31: {
    titulo: "Arcano 31",
    descricao: "O sucesso nos empreendimentos depende de vontade, firmeza e perseverança. Representa esforços compensados, vitória depois da luta; reconhecimento, conquistas e sucesso. Triunfo pela perseverança e exemplo. Risco de se tornar orgulhoso."
  },
  32: {
    titulo: "Arcano 32",
    descricao: "Pressagia concurso de circunstâncias favoráveis ao êxito das empresas, se o consulente não exceder o fim a que se propõe; energias opostas criando agitação e inquietude; luta contra o dragão da realidade material para atingir os objetivos. Representa luta pela vida e poder, competição, respeito pelos outros; desafio pondo à prova as habilidades. Contendas, disputas, embates, espírito esportivo e confronto de ideias. Risco de instabilidade nos ímpetos."
  },
  33: {
    titulo: "Arcano 33",
    descricao: "Significa um período de recompensa pelos esforços empreendidos; realização do sucesso esperado; empresas sérias e estáveis; associação, aliança, reunião, contrato, êxito, adiantamento; momento de desfrutar dos resultados do trabalho. Representa o fim de um trabalho bem feito e a satisfação proporcionada, ambientes e sensações agradáveis; boa comunicação, alegria, sociabilidade. Estabilidade e realização; o valor das pequenas conquistas. Risco de desprezar o valor das pequenas conquistas."
  },
  34: {
    titulo: "Arcano 34",
    descricao: "Denota começo de êxito nos empreendimentos, inovações felizes, espírito de invenção; poderá receber ajuda de alguém de sua confiança; bases firmes e os negócios tendem a prosperar. Representa a união que cria a força; criatividade e associações férteis, visão de longo alcance; a ética pessoal. A virtude está em se reconhecer o que é necessário para seguir em frente."
  },
  35: {
    titulo: "Arcano 35",
    descricao: "Significa o equilíbrio, ou desequilíbrio, dos ímpetos; grande capacidade e intuição; formulação de um novo projeto, de um objetivo ou de uma ideia; o futuro parece brilhante, mas guarda seus segredos e mistérios. Representa o poder que se manifesta como cooperação e ajuda; a dualidade que se manifesta como cooperação e assistência, mas que traz o componente da indecisão, da apatia; dividir para multiplicar. Risco de se tornar arrogante."
  },
  36: {
    image: "https://i.ibb.co/mCQc244R/36-A-INICIA-O.png",
    titulo: "Arcano 36 - A INICIAÇÃO",
    descricao: "Representa a força criativa propulsora das novas ideias, a inspiração, a determinação e a coragem; novos horizontes e a disposição para arriscar-se; os estágios iniciais de um novo empreendimento ou o nascimento de algo ou de uma criança. Risco de inflexibilidade."
  },
  37: {
    titulo: "Arcano 37",
    descricao: "O controle emocional. É o momento de experimentar um aspecto ambivalente da própria personalidade, ou seja, o conselheiro, o ouvinte, aquele que pode curar os outros com suas palavras e carinho. Representa o plano arquetípico das emoções e sentimentos; a força dos sentimentos espirituais na alma; o fluir dos sentimentos; a sensibilidade, a honestidade e a generosidade masculinas; autoajuda. Risco de desonestidade e hipocrisia masculina."
  },
  38: {
    titulo: "Arcano 38",
    descricao: "Maturidade emocional. É o momento de encontrar-se com o profundo, desconhecido e paradoxal mundo dos sentimentos que traz dentro de si; anuncia justiça, favores e proteção; o agente catalisador dos sentimentos mais profundos. Representa o plano arquetípico das emoções estéticas, o plano criativo e a inteligência ativa feminina; a espera para obter clareza. Risco de preguiça e pouca afabilidade feminina."
  },
  39: {
    titulo: "Arcano 39",
    descricao: "É tempo de experimentar a incrível e mágica dimensão do amor, a conexão com as emoções; indica uma possível proposta de casamento, ou mesmo o momento de se apaixonar; uma proposta de trabalho, ou o envolvimento com ideais mais elevados. Representa as emoções e os sentimentos no plano formativo; chegada de novas amizades e afeições; reconciliação, cordialidade e paz. Risco de abuso de confiança."
  },
  40: {
    titulo: "Arcano 40",
    descricao: "É indício de algo novo no plano afetivo, que pode ser um relacionamento ou uma nova perspectiva emocional dentro de um relacionamento existente, ou até mesmo o nascimento de uma criança. Representa as emoções no plano do desejo e temor; proposta amorosa e oferta afetuosa; reconciliação, consideração e promoção. Sensibilidade emocional. Risco de sedução e zombaria."
  },
  41: {
    titulo: "Arcano 41",
    descricao: "É a experiência da felicidade desejada; um período de muito contentamento e de harmonia permanente nos domínios do coração; realização das suas esperanças e sonhos; vida feliz; muitas simpatias. Representa o sucesso no nível emocional e dos sentimentos; a felicidade familiar compartilhada; boa reputação e um lar feliz. A saciedade que leva á plenitude da felicidade pela autorrealização. Risco de se tornar dependente dos outros."
  },
  42: {
    titulo: "Arcano 42",
    descricao: "Os seus desejos poderão agora ser realizados; um período de satisfação e alegrias, de realizações de sonhos e projetos; fortuna, honras, glória e reputação; vitória, êxito, ganho, triunfo, prosperidade, lealdade, boa-fé, franqueza, verdade. Representa a felicidade, o bem-estar e a segurança material; alegria de viver e o desfrutar do êxito. Risco de excessos e luxúria, escapismo e fuga."
  },
  43: {
    image: "https://i.ibb.co/TDyZw7TV/43-Alucina-o.png",
    titulo: "ARCANO PESSOAL 43 -  Alucinação",
    descricao: "É a necessidade de buscar um sentido para a vida e para suas relações amorosas; necessidade de despertar e desistir de alguma coisa; excessivo interesse pelos prazeres que pode levar a escândalos amorosos; paixões violentas, divórcio, mau casamento, sedução. Representa a busca espiritual pelo abandono do material; partida difícil. A indolência e contrariedade; hora de perceber qual é o seu papel na relação. Risco de abandono cruel."
  },
  44: {
    titulo: "Arcano 44",
    descricao: "É reflexão, pensamento, talentos; uma situação emocional em que existem muitas possibilidades aparentes, mas o indivíduo está diante do desafio de optar e agir em termos realistas para que aquelas potencialidades possam se manifestar. Representa megalomania e ilusões; a realidade onírica, fantasias e êxito de pouco v"
  },
  45: {
    titulo: "Arcano 45",
    descricao: "É a felicidade que vem do passado; o prazer. Possível encontro ou reencontro com pessoa de significado, ou o retorno de um amor antigo, de um sonho acalentado há muito que poderá ser realizado num futuro próximo. Ser feliz por si mesmo; entregar-se ao momento e ser feliz. Representa ânsia pelo passado, pela infância, com recordações felizes, paz interior por aceitação do passado; sonhos. Risco de apego ao passado que traz melancolia, ou de buscar o prazer nos outros."
  },
  46: {
    titulo: "Arcano 46",
    descricao: "É final de uma relação ou amizade com sofrimento; remorso; algo não deu certo, uma possível traição abrindo espaço para a tristeza e o arrependimento; separação num relacionamento, mas que pode não significar um rompimento definitivo. Representa a alegria perdida, tristezas, lamentações e prazeres obscuros; despedida dolorosa, amargura, depressão, fracasso e resignação. Frustração e arrependimento."
  },
  47: {
    titulo: "Arcano 47",
    descricao: "O prazer excessivo que costuma conduzir ao cansaço e ao desejo de coisas ainda maiores, talvez impossíveis de alcançar; aparente inocência, mas com um aguilhão desagradável escondido exigindo moderação nas relações e em tudo o que tenha a ver com as emoções. Representa aborrecimento e depressão, insatisfação e traições; inconstância nos sentimentos e falta de motivação, apatia, mau humor e ciúmes. Ostentação e saciedade com risco de tédio."
  },
  48: {
    titulo: "Arcano 48",
    descricao: "Êxito, começo de um novo estilo de vida, de um novo relacionamento, o nascimento de uma criança ou qualquer outra situação promissora de realização emocional. Porém, cada uma dessas situações é também um princípio, uma iniciação em níveis mais profundos das experiências do coração e o indício de novas descobertas para o futuro. Representa abundância, amizades, alegria, diversão, celebrações e sucesso; gratidão. Risco de se tornar autossuficiente e dissimular os sentimentos."
  },
  49: {
    titulo: "Arcano 49",
    descricao: "Abundância, equilíbrio emocional, amizades e celebração. Entendimento, amizade profunda ou amor; início de um relacionamento; também uma reconciliação, um encontro ou um acordo comercial; quase sempre sugere uma relação entre duas pessoas; poder de atração. Representa amor, afeição e amizade; união afetiva ou casamento; harmonia. Risco de dependência emocional."
  },
  50: {
    titulo: "Arcano 50",
    descricao: "Início de coisas: amor, alegria ou saúde. Representa o poder dos sentimentos; amor, abundância, alegria e prazer; a escolha certa da oportunidade que gera satisfação e realização. Novas emoções envolvendo os relacionamentos em geral, renovando-os. Risco de cegueira e instabilidade emocional."
  },
  51: {
    titulo: "Arcano 51",
    descricao: "Significa maturidade e sabedoria, confiança; um conselheiro confiável; momento de encontrar dentro de si o dom ambivalente da liderança e da estratégia; o arrojo intelectual e a inspiração para desenvolver novos projetos. Representa o pensamento organizado e ideias claras e objetivas; espirituosidade, perspicácia, versatilidade; autoridade masculina enérgica. Risco de intelectualismo excessivo, desumanidade e cinismo masculino."
  },
  52: {
    titulo: "Arcano 52",
    descricao: "Momento de se defrontar com sua própria dimensão obstinada e sua fé inabalável nos altos propósitos e ideais. Esses ideais, altivos e nobres, irão contribuir para o aperfeiçoamento da consciência e a qualidade da própria vida. Será preciso enxergar onde os problemas estão sendo criados para si mesmo ao exigir uma perfeição exagerada para si e para os outros. Representa o plano criativo ordenado pelo pensamento racional indutivo – a razão; independência, inteligência e intelecto femininos. Risco de ressentimento e dureza intelectual feminina."
  },
  53: {
    titulo: "Arcano 53",
    descricao: "É momento de se preparar para eventuais mudanças repentinas em sua vida deixando de lado os antigos padrões existentes. Tais mudanças podem acontecer com uma pessoa que aparece trazendo a inquietação, o fascínio e a tendência para o rompimento, ou a concepção de uma nova ideia, ou projeto, que surge para quebrar antigas formas de pensamento, ou ainda, alguém que se oponha aos seus planos ou pensamentos. Representa a sequência ordenada do pensamento lógico no plano formativo; imprevisibilidade, controvérsia, rigor, hostilidade e agressividade. Contundência, impetuosidade e atropelo."
  },
  54: {
    image: "https://i.ibb.co/cKDSkvqv/54-Valete-de-Espada.png",
    titulo: "Arcano 54 - Valete de Espadas (Senhor/Rei de Espadas/k de Espadas)",
    descricao: "Momento de confrontar-se com a curiosidade infantil e a predisposição maliciosa para a fofoca e o mexerico. Possibilidade de vir a se tornar vítima da intriga dos outros ou ter propensão para se envolver em pequenas disputas. Representa o pensamento aproximado na verificação do plano material; espionagem, vigilância; a discórdia semeada e a crítica esclarecedora. Defensividade."
  },
  55: {
    titulo: "Arcano 55",
    descricao: "Finalização de uma situação difícil; pode ser dolorosa, mas, pelo menos o problema será encarado de frente com honestidade, para que um futuro com muito menos conflitos possa começar. A lição já se completou, e tanto a situação econômica como a saúde tendem a melhorar. Representa a ruína total e irreversível; desolação, o ponto final insuportável. Um pedido de ajuda pode ser atendido. Hora de finalizar uma ideia, um processo, uma situação que se esgotou."
  },
  56: {
    titulo: "Arcano 56",
    descricao: "Um período de muita ansiedade e dúvidas com relação ao futuro. É importante examinar e identificar de onde surge a culpa por trás dos temores, em vez de se deixar escravizar por ela. Representa crueldade, desespero, preocupações, tristeza e depressão; consciência culpada, arrependimento, abatimento, tormento, insônia e medo. Pede paciência e resignação."
  },
  57: {
    titulo: "Arcano 57",
    descricao: "Uma situação de dificuldade e quase impossibilidade de agir por medo das consequências; uma decisão se faz necessária, com muita prudência. Representa força paralisada, impossibilidade de ação, indecisão; confusão mental e autossabotagem; racionalidade sem emoção; um período de crises finalizando. Auto-aprisionamento mental."
  },
  58: {
    titulo: "Arcano 58",
    descricao: "Momento de agir com muita diplomacia evitando os confrontos diretos para preservar ao máximo as próprias forças; pode acarretar uma desagradável sensação de falsidade e hipocrisia, mas a vida assim o exige; seus planos poderão não dar resultados positivos ou não estão dando resultados como esperava. Representa esforço inútil; falsidade, impostura, fuga; enganar-se para conseguir algo. Futilidades e subterfúgios; jogos mentais, uso de artifícios mentais; presunção."
  },
  59: {
    titulo: "Arcano 59",
    descricao: "Período onde a capacidade de compreensão da mente ajuda a diminuir a dificuldade e a liberar a ansiedade provocada anteriormente para efetuar uma passagem mais serena. Representa a procura de novos objetivos; o progresso, o sucesso merecido, as viagens; novas experiências, transformação hesitante; um terreno novo; cautela. O aprendizado da ciência mental; afastar-se do problema para vê-lo em perspectiva. Risco de vitimização."
  },
  60: {
    titulo: "Arcano 60",
    descricao: "Necessidade de se encarar as próprias limitações e de reconhecer que a vida deve ser vivida dentro dos limites das próprias capacidades. Representa derrotas, traições e aflições; infâmia e perfídia; o lado negro extrapolado. A derrota, tanto a sua quanto do seu adversário. Risco de humilhar os outros tendo-os como adversários."
  },
  61: {
    titulo: "Arcano 61",
    descricao: "Período de introversão, silêncio e recuperação das forças para enfrentar os novos desafios; a situação tende a melhorar. Representa um período de descanso, uma trégua e um tempo de retiro para recuperação à espera do momento oportuno. A trégua necessária para alcançar a paz mental. Hora de questionar quais dos sacrifícios feitos foram importantes; meditar. Risco de procrastinação."
  },
  62: {
    titulo: "Arcano 62",
    descricao: "Conflito, dor e separação; pequenas brigas podem levar a desgostos sérios; alguém tem que começar a perdoar; mais vale que seja você. Representa dor e sofrimento, infortúnio e privação; sentimentos feridos. Tristeza, sacrifícios necessários."
  },
  63: {
    titulo: "Arcano 63",
    descricao: "Um estado de tensão, no qual existe uma recusa tácita em enfrentar uma situação iminente de conflito; indecisão na hora de definir opções. Representa um período de paz com estagnação; dilema e análise. Desequilíbrio mental; não é momento de decidir. Risco de impasse."
  },
  64: {
    titulo: "Arcano 64",
    descricao: "A emergência de um novo conceito dentro de um conflito; poderes mentais despertando; isso significa uma mudança na vida da pessoa. Representa o poder da mente e da razão; capacidade para o triunfo, compreensão, resolução e prontidão; a hora chegada. Nova maneira de pensar; nova oportunidade de usar a mente. Risco de racionalidade excessiva; mente astuciosa."
  },
  65: {
    titulo: "Arcano 65",
    descricao: "Momento de aceitar os desafios materiais da vida; canalização da autoconfiança e do aperfeiçoamento no processo de realização material da própria pessoa; boa posição nos negócios. Representa a inteligência masculina para o sucesso; a sensação auditiva; solidez, estabilidade e tino comercial; o rei de todos os recursos, o investidor. Risco de se tornar controlador."
  },
  66: {
    titulo: "Arcano 66",
    descricao: "Momento de aprender mais a respeito da própria sensualidade; de compreender o valor do corpo e a importância dos prazeres que preservam e enriquecem a vida; de aprender a preservar seus recursos materiais, estabelecendo condições de vida seguras e estáveis, administrando e economizando dinheiro e esforços. Representa a inteligência feminina atuando no plano criativo; a sensação visual; dinheiro, constância, fidelidade, coragem, fertilidade, senso familiar; habilidade e competência no rumo certo. Cuidado, nutrição e proteção. Risco de mimar demais os seus “protegidos”."
  },
  67: {
    titulo: "Arcano 67",
    descricao: "Momento de desenvolver aquela dimensão da personalidade capaz de aceitar com serenidade e firmeza quaisquer tarefas de caráter cotidiano; dedicação, lealdade e firmeza de atitudes; decisão e ação firme; motivação constante; êxito, conquista de fortuna; paz e tranquilidade final. Representa o plano formativo na sensação do olfato e do paladar; a perseverança nas ideias e ações que geram dinheiro; recebimento de ofertas. Cauteloso e observador, sabe o que deseja."
  },
  68: {
    titulo: "Arcano 68",
    descricao: "O acúmulo de energia a ser utilizada na realização de projetos materiais e para preencher as necessidades do corpo; aparece na forma de pequenas quantias de dinheiro que devem ser poupadas, ao invés de serem gastas inutilmente, ou surge um passatempo que pode se tornar uma profissão altamente lucrativa; abertura para novas ideias e visão das oportunidades surgindo. Representa o plano material na sensação do tato; oportunidade surpreendente e valiosa e proposta concreta e útil; observação e estudo."
  },
  69: {
    image: "https://i.ibb.co/HTkmxP9C/69-O-AZAR.png",
    titulo: "ARCANO PESSOAL 69 -  O AZAR",
    descricao: "Período de muita satisfação e segurança e a consciência de que realizou algo permanente para ser passado adiante; situação econômica próspera; sugere partilhamento de herança de família, ou talvez um momento de realização artística; perpetuação de uma coisa boa. Representa a posse do segredo da riqueza; plenitude e riqueza. Risco de opulência."
  },
  70: {
    titulo: "Arcano 70",
    descricao: "Período de autossatisfação justificada em vista de tudo aquilo que se conseguiu. Representa riqueza material e sucesso econômico; vislumbre, golpe de sorte, lucro e abundância. O ganho pelos feitos do esforço no trabalho. Risco de autossuficiência."
  },
  71: {
    titulo: "Arcano 71",
    descricao: "Momento em que o indivíduo representa o papel do aprendiz dedicado que se empenha bravamente para adquirir e desenvolver um novo ofício; um talento recém descoberto que vale a pena ser trabalhado e desenvolvido; em termos mais práticos, um passatempo pode se transformar numa profissão. Representa as tarefas sistemáticas, o esforço dirigido e o aprendizado; início promissor. A prudência, a repetição das práticas básicas confirmadas."
  },
  72: {
    titulo: "Arcano 72",
    descricao: "Momento de tomada de decisão; ponderação e cautela; energia para um novo projeto; fortuna adquirida pelo trabalho pessoal. Representa o amadurecimento e a paciência; “devagar e sempre”. Escolher o momento certo de tomar a decisão; de escolher entre investir mais ou se contentar com que já colheu. Risco de apegar-se ao que já conquistou, e perder."
  },
  73: {
    titulo: "Arcano 73",
    descricao: "Uma situação de oferecimento, tanto financeiro como pessoal; será levado a oferecer sua bondade, ou receber a generosidade dos outros; momento de recuperar a autoconfiança e a fé na vida; coisas boas, possível ascensão e ambiente feliz; desfrute os bons resultados do seu trabalho. Representa surpresas agradáveis, presentes e filantropia – o propósito vale a pena; generosidade e disposição para ajudar – caridade; tolerância e compreensão. Sucesso. Risco de manipulação pela caridade praticada em favor do ego."
  },
  74: {
    titulo: "Arcano 74",
    descricao: "Um período de dificuldades financeiras, ou até mesmo grandes perdas; pode vir acompanhado pela perda da autoconfiança; é muito importante reagir a esse desafio positivamente; não se deixe levar pelo orgulho; tudo passa inclusive esse momento. Representa ruína econômica, desemprego e pobreza; crise, obstáculos e privações. Preocupação; momento de refletir sobre as reais necessidades."
  },
  75: {
    titulo: "Arcano 75",
    descricao: "Momento favorável; possíveis aquisições ou herança; capacidade de trabalho e de acúmulo de posses. Representa o poder econômico e a prosperidade. Momento de estabilizar as posses dos recursos para conservar. Risco de ganância."
  },
  76: {
    titulo: "Arcano 76",
    descricao: "Período de sucesso inicial em algum empreendimento; talvez um projeto comece a dar lucro, ou mesmo uma obra literária ou artística que atinja o sucesso; prêmio, reconhecimento do trabalho e do talento; fortuna por empresas habilmente dirigidas, pelo trabalho e pelo gênio. Representa o trabalho material e a construção; o progresso e os holofotes. Sucesso pelo trabalho em equipe. Risco de discrepâncias pelo trabalho."
  },
  77: {
    titulo: "Arcano 77",
    descricao: "Período de disponibilidade de recursos financeiros e de energia para a realização de novos projetos; é necessário que esteja disposto a aplicar seu capital e a assumir riscos ao invés de economizar para uma possibilidade futura; um momento favorável para todos aqueles que sabem lidar com dinheiro, ou fortuna dividida, porém, probabilidade de associação produtiva. Representa as trocas harmoniosas e favoráveis; flexibilidade. Adaptação para lidar bem com os recursos conquistados, principalmente frente a mudanças."
  },
  78: {
    titulo: "Arcano 78",
    descricao: "Possibilidade de realização material; disposição de energia à execução de um trabalho; início de prosperidade ou aventuras bem sucedidas; o dinheiro pode surgir de repente na forma de uma herança ou jogo. Representa a grande oportunidade da concretização do plano material e da riqueza; a percepção sensorial. Novas habilidades; despertar de novos talentos. Risco de transformar tudo em obrigação."
  },
  79: {
    titulo: "Arcano 79",
    descricao: "Reinício de uma atividade; novo momento; nova vida."
  },
  80: {
    titulo: "Arcano 80",
    descricao: "Reportar-se ao"
  },
  81: {
    titulo: "Arcano 81",
    descricao: "Poderá haver problemas com a justiça; ou da lei de causa e efeito."
  },
  82: {
    titulo: "Arcano 82",
    descricao: "Poderá servir de escada para os outros, voluntária ou involuntariamente."
  },
  83: {
    titulo: "Arcano 83",
    descricao: "Associação intelectual ou cultural; progresso."
  },
  84: {
    titulo: "Arcano 84",
    descricao: "Trabalhar com e para o povo – político, filantropo ou humanitário."
  },
  85: {
    titulo: "Arcano 85",
    descricao: "Significa afastamento da vida social ou perda temporária de bens ou da própria vida."
  },
  86: {
    titulo: "Arcano 86",
    descricao: "Significa vitória sobre alguma coisa conseguida após muita luta e determinação."
  },
  87: {
    titulo: "Arcano 87",
    descricao: "Reportar-se ao"
  },
  88: {
    titulo: "Arcano 88",
    descricao: "Reportar-se ao"
  },
  89: {
    titulo: "Arcano 89",
    descricao: "Significa mérito não reconhecido."
  },
  90: {
    titulo: "Arcano 90",
    descricao: "Reportar-se ao"
  },
  91: {
    titulo: "Arcano 91",
    descricao: "Período de solidão enquanto perdurar a influência do Arcano."
  },
  92: {
    titulo: "Arcano 92",
    descricao: "União tardia ou uma associação com grupos ou pessoas."
  },
  93: {
    titulo: "Arcano 93",
    descricao: "Significa um grande período de sabedoria e bons resultados."
  },
  94: {
    titulo: "Arcano 94",
    descricao: "Significa solidão na velhice ou morte de pessoa idosa."
  },
  95: {
    titulo: "Arcano 95",
    descricao: "Significa reconhecimento intelectual."
  },
  96: {
    titulo: "Arcano 96",
    descricao: "Significa amores secretos e que poderão causar graves problemas."
  },
  97: {
    titulo: "Arcano 97",
    descricao: "Significa decisão difícil ou solidão a muito esperada que se concretiza."
  },
  98: {
    titulo: "Arcano 98",
    descricao: "Significa alto cargo e grande influência."
  },
  99: {
    titulo: "Arcano 99",
    descricao: "Significa muito dinheiro e riqueza material"
  }
};


export const CicloVida = {
  1: `Ciclo de Vida 1
O Número 1 (um) no primeiro Ciclo de Vida indica um período difícil. Quando criança
precisa aprender a desenvolver a sua individualidade. Caso não a tenha
desenvolvido, certamente na juventude e adolescência, ou mesmo até à entrada do
2º Ciclo de Vida terá dificuldades emocionais, e também para se estabilizar
profissionalmente. O ideal é que a criança nesse Ciclo de Vida seja educada dentro
de limites que lhe dão liberdade bem dosada, nem restrita demais nem solta demais,
afim de que possa se desenvolver harmoniosamente. Caso seja adulto, maior de 18
anos, e ainda esteja no primeiro Ciclo de Vida e tenha sido reprimido (a), ou seja, não
tenha tido educação condizente, precisa absorver esses ensinamentos e os colocar
em prática imediatamente. Este é um palco que apresenta pessoas independentes e
até autoritárias. A sua necessidade, neste período da vida é de buscar aquilo que
deseja. Iniciativa e ambição presentes neste Ciclo de Vida de Vida. Figura masculina
em evidência.`,

  2: `Ciclo de Vida 2
O Número 2 (dois) no primeiro Ciclo de Vida mostra uma criança muito mimada que,
possivelmente, recebeu grande influência da mãe ou dos avós. É natural que na
adolescência, em vista da forte influência familiar pense em se casar o mais cedo
possível, e isso é muito comum, principalmente entre os homens. Esse é um palco
que apresenta submissão, afeição e amizade. A bondade e o serviço estão
presentes. Aparece certa insegurança e necessidade de se auto posicionar. Figura
feminina em evidência.`,

  3: `Ciclo de Vida 3
O Número 3 (três) no primeiro Ciclo de Vida mostra uma infância e adolescência
feliz, despreocupada e com muitos amigos. Período importante para se auto
expressar em alguma atividade criativa. Possibilidade de sucesso artístico na
escola. Pode não ser um período particularmente favorável aos estudos, mas com
certeza muitas oportunidades surgirão para expressar ideias e emoções através das
artes, da música, do teatro ou da escrita. Não é um bom período para casamento
devido às facilidades para diversão. É um palco que apresenta amigos e parentes
em volta. Há uma necessidade de buscar alegria. Apresenta abertura para a vida.
Lado social em evidência.`,

  4: `Ciclo de Vida 4
O Número 4 (quatro) no primeiro Ciclo de Vida é uma indicação de restrições
familiares, de disciplina e trabalho duro na escola. Certamente essa criança tem, ou
teve, pais e parentes de certa maneira severos impondo seu comando e não
admitindo contestações. Estudos trabalhosos; a criança precisa, ou precisou, lutar
para se libertar de influências repressoras. Um ciclo bastante duro e limitado sujeito
a pouca criatividade, limitando-se a obedecer. Isso pode levar a ter relacionamentos
por vezes difíceis, onde, normalmente o cônjuge é que manda e dita as regras. Esse
é um palco que apresenta trabalho, estrutura e busca de bases. Aparece disposição
de buscar segurança e há uma necessidade sentir-se buscando o que já é
concretizado pelos outros. Lado material em evidência.`,

  5: `Ciclo de Vida 5
O Número 5 (cinco) no primeiro Ciclo de Vida indica um período de muitas
mudanças e liberdade, que às vezes é demasiada grande para que se possa lidar
com ela de maneira construtiva, especialmente na fase criança e adolescente. Sem
orientação adequada, nesse período, o jovem pode ter problemas causados por
envolvimentos precoces com sexo, álcool e drogas. É um período não pouco
favorável para o casamento, e normalmente quando isso acontece dura pouco. No
lado profissional também aparece alguma dificuldade de se assentar, mudando
continuamente de emprego ou atividade. A estabilidade tende a acontecer somente
com a entrada no segundo Ciclo de Vida. É um palco que apresenta muitos
movimentos, mudanças e transformações. Há uma necessidade de situações
inovadoras. Este Ciclo de Vida apresenta dinamismo. Lado físico em evidência.`,

  6: `Ciclo de Vida 6
O Número 6 (seis) no primeiro Ciclo de Vida mostra uma infância cheia de deveres e
responsabilidades pesadas demais para a criança suportar. Os pais devem cuidar de
não sobrecarregar o filho com responsabilidades demais. No todo, um período
restritivo até que quando a pressão tende a diminuir e um casamento ou aventura
amorosa pode acontecer. Surge ainda dificuldade em se ajustar à sociedade, pois é
incompreendido (a) nos seus planos e objetivos. Esse é um palco que apresenta a
família e o círculo social em primeiro lugar. A sua necessidade é de viver em grupo e
com a família. Apresenta necessidade de vivenciar a união familiar e os amigos.
Responsabilidade em evidência.`,

  7: `Ciclo de Vida 7
O Número 7 (sete) no primeiro Ciclo de Vida mostra um período muito difícil. A
criança e o jovem conserva-se retraído e pode sofrer com a falta de compreensão
dos pais, professores e amigos. Tal incompreensão leva, invariavelmente, ao
isolamento, retraimento e até medo de encarar a vida nessa fase. No final da
adolescência, por volta dos 20/21 anos de idade, em virtude dessa retração, pode
desenvolver complexos de culpa e falta de autoconfiança, dificultando o seu
progresso pessoal e profissional. O palco apresenta espiritualidade, religiosidade e
introspecção. Necessidade de autoconhecimento. Aparece a necessidade de ser
motivado a se expressar. O interior em evidência.`,

  8: `Ciclo de Vida 8
O Número 8 (oito) no primeiro Ciclo de Vida mostra um período de realizações e de
enriquecimento intelectual. Um período forte demais para uma criança. É
extraordinário para o aprendizado acerca dos aspectos materiais da vida, de poder e
justiça. É nesse período que se forjam os homens de negócios, políticos, advogados
e todos aqueles que pensam mais no lado material da vida. Nesse palco se
apresenta o lado material da vida, a busca de realização, a intelectualidade.
Necessidade de buscar equilíbrio entre os vários aspectos da vida. O exterior em
evidência.`,

  9: `Ciclo de Vida 9
O Número 9 (nove) é o mais difícil dentre todos os primeiros Ciclos de Vida. Quando
criança surge boas oportunidades educacionais, mas também muita tensão. Na
adolescência sente-se confuso (a), assustado (a), nervoso (a) e tem grandes
dificuldades de concentração. Um período de muita sensibilidade e espiritualidade.
Normalmente a criança, ou jovem, sente-se incompreendido pelos que o cercam.
Não é recomendável casar cedo, e caso o faça, normalmente não dura muito.
Profissionalmente poderá enfrentar problemas de relacionamento e por isso pode
permanecer inativo por longo período até a chegada o segundo Ciclo de Vida,
quando então, poderá por em prática todas as suas potencialidades. Esse é um
palco que apresenta movimentos, transformações, inovações, altos e baixos,
exigindo adaptação e aceitação. Necessidade de trabalhar a paciência e o amor.
Apresenta abertura ao saber. A vida em si está em evidência.`,

  11: `Ciclo de Vida 11
O Número 11 (onze) no primeiro Ciclo de Vida indica um período complexo e muito
difícil para uma criança suportar, devido a grande inspiração que traz e uma energia
espiritual muito intensa. Por ser forte, normalmente a criança/adolescente, recebe
uma proteção maior de alguém da família, mãe ou avó, pois, por ser diferenciado (a),
poderá sofrer discriminações por parte de colegas ou outras pessoas. Um palco que
apresenta fortes emoções. Necessidade de trabalhar o autocentramento.`
};

export const segundoCicloVida = {
  1: `Segundo Ciclo de Vida 1 
O Número 1 (um) no segundo Ciclo de Vida mostra um período de ambições, grande 
desejo de realizações e também de sucesso relativo. Precisa desenvolver seus 
próprios recursos, estudando e se dedicando ao máximo possível, além de 
esforçar-se para tornar-se independente e chegar ao terceiro Ciclo de Vida já com 
definição profissional, social e financeira. Este Ciclo de Vida revela disposição para 
realizar; denota autonomia, energia e construção. Deve buscar realizações e 
independência, mas não deve sacrificar os outros para realização de seus próprios 
desejos. Energia, realizações, êxitos dos esforços!`,

  2: `Segundo Ciclo de Vida 2 
O Número 2 (dois) no segundo Ciclo de Vida é indicador de sociabilidade e 
receptividade. É necessário cultivar a paciência, o tato, a diplomacia e a capacidade 
de perceber os sentimentos alheios. Pode indicar ainda, uma carreira diplomática, 
ser juiz, médico (a), professor (a) ou consultor (a). A sua disposição está para 
associações, cooperação e trabalho em equipe. Pode ocorrer certa submissão, o 
que pode não ser ruim se isso significar ser cooperativo (a). É um período para 
trocar, colaborar e ter solidariedade. A família e o casamento serão favorecidos. 
Evitar colocar-se demasiadamente à frente.`,

  3: `Segundo Ciclo de Vida 3 
O Número 3 (três) no segundo Ciclo de Vida mostra uma fase agradável da vida, 
com certa despreocupação. É a fase da sociabilidade, na qual a criatividade e a 
originalidade podem se exteriorizar pelas ideias e sentimentos através de algum tipo 
de arte: pintura, música, teatro, escrita, etc. É um magnífico período para 
desenvolver a criatividade, porém, não deve despender demasiada energia em 
coisas fúteis. A sua disposição está voltada para buscar felicidade, amigos, sucesso 
e realizações. Deve criar, expressar, ter alegria de viver. É o mais agradável de todos 
os ciclos.`,

  4: `Segundo Ciclo de Vida 4 
O Número 4 (quatro) no segundo Ciclo de Vida é sinônimo de trabalho duro, de 
produtividade e de construção do alicerce no qual se apoiará no futuro. É um 
período em que surge a necessidade de aprender a aceitar a rotina e a trabalhar em 
algo produtivo, sólido e a fazer economia. A sua disposição neste Ciclo de Vida é 
para construir, trabalhar, produzir, plantar. Poucas viagens, a não ser de trabalho, e 
férias destinadas a se refazer para continuar. Deve construir estrutura e segurança.`,

  5: `Segundo Ciclo de Vida 5 
O Número 5 (cinco) no segundo Ciclo de Vida é indicativo de um período de 
expansão de horizontes, época propícia para viagens, mudanças, romances, 
liberdade, novas atividades e também novos amigos. Quase sempre, neste período, 
a pessoa encontrará as suas melhores oportunidades longe de casa. Precisa 
aprender a se adaptar, a procurar novas maneiras de ver as coisas e a evitar a 
tendência para fixar-se por muito tempo num determinado lugar. Em resumo, é um 
período de grande movimentação, de grandes mudanças e de novos horizontes. 
Grande disposição para inovações, mudanças, atividades variadas e dinamismo. 
Reviravoltas inesperadas poderão acontecer, por isso deve aprender a lidar e 
trabalhar com as mudanças e o dinamismo.`,

  6: `Segundo Ciclo de Vida 6  
O Número 6 (seis) no segundo Ciclo de Vida mostra um período de ajustes e de 
responsabilidades nos assuntos domésticos em geral. É um bom momento para o 
casamento ou firmar-se num relacionamento, ter filhos e solidificar a família. Em 
suma, é um período familiar, de colocar a casa em ordem, de viver mais para a 
família, e deixar de ser tanto individualista. A sua disposição é para enfrentar 
grandes responsabilidades, viver em família, conciliar e ajudar os outros. Adaptação 
tanto no plano familiar quanto profissional, confrontação com problemas diversos, 
às vezes relativos a outros. Vida familiar feliz. Deve servir a família e grupos e não 
perseguir a perfeição.`,

  7: `Segundo Ciclo de Vida 7 
O Número 7 (sete) no segundo Ciclo de Vida indica um período de crescimento 
tranquilo, de estudos e reflexões. A sua disposição está voltada para estudar, 
pesquisar, refletir, se autoconhecer, crescer. Deve buscar no autoconhecimento a 
sua essência e a sua espiritualidade, sua própria verdade e sua legitimidade. 
Casamento pouco provável; se vier a acontecer deve ser fruto de criteriosa escolha. 
Isto, é claro, não significa que não deva se casar, apenas que deve prestar muita 
atenção nos seus sentimentos, pois poderá haver alguma dificuldade no 
relacionamento devido a uma tendência a se interiorizar demais. Não há 
necessidade de procurar as oportunidades, elas se apresentarão. Mas não basta só 
esperar, é preciso estar atento (a) a elas e saber agarrá-las. Um período em que a fé 
pode desabrochar.`,

  8: `Segundo Ciclo de Vida 8 
O Número 8 (oito) no segundo Ciclo de Vida mostra um período de preocupação 
com os aspectos materiais e financeiros da vida. Este período promete assuntos 
importantes no mundo dos negócios e das finanças. Terá êxito material, se agir 
construtivamente, com boas possibilidades de realizações no mundo dos negócios 
e de ganhar muito dinheiro com o trabalho e também através de especulações. Terá 
de se esforçar para atenuar as tensões existentes. Deve resgatar o seu próprio 
poder pessoal.`,

  9: `Segundo Ciclo de Vida 9 
O Número 9 (nove) no segundo Ciclo de Vida traz a possibilidade de sucesso na vida 
pública. É um período altamente espiritual e é preciso aprender a cultivar a 
tolerância, o amor à humanidade, o altruísmo e o controle emocional. Probabilidade 
de haver dificuldades no casamento devido à tendência a dedicar-se e a dar mais 
amor à humanidade que à própria família. É, também, indício de alguma perda, seja 
ela material, afetiva ou social. Disposição voltada para a busca de sabedoria 
espiritual, para aprender o desapego, o desprendimento e a doar-se. Tendências 
espirituais que levam ao sucesso na vida pública, com poucos fracassos se os 
esforços necessários forem feitos. Deve trabalhar o perdão e o desapego.`,

  11: `Segundo Ciclo de Vida 11 
O Número 11 (onze) no segundo Ciclo de Vida mostra um período de revelações, de 
ideais e grandeza, e, possivelmente de fama. Não é um bom momento para 
empreendimentos comerciais ou de especulações, sejam elas financeiras ou 
imobiliárias. É o momento de desenvolver a mente, de se especializar em alguma 
coisa, de estudar, ensinar e também de inspirar as outras pessoas através do seu 
próprio exemplo. Disposição voltada para as questões espirituais, sensoriais e 
intuitivas. Deve desenvolver a intuição e aproveitá-la bem neste Ciclo de Vida.`,

  22: `Segundo Ciclo de Vida 22 
O Número 22 (vinte e dois) no segundo Ciclo de Vida é indício de grandes 
realizações e de liderança em alto nível. O objetivo primordial neste Ciclo de Vida 
deve ser o de beneficiar a humanidade como um todo. Em virtude do grande poder 
deste número, os nervos e as emoções serão testados durante todo o período e a 
pessoa deve manter-se o mais calma possível e seguir a orientação da sua intuição. 
Disposição fortemente inclinada para grandes realizações, autoridade e comando. 
Deve direcionar toda a sua energia para realizações que beneficiem a humanidade.`
};

export const terceiroCicloVida = {
  1: `Terceiro Ciclo de Vida 1 
O Número 1 (um) no terceiro Ciclo de Vida indica uma fase final da vida de certa 
maneira solitário, porém com grande vitalidade, intensa atividade cerebral e vontade 
de buscar novos objetivos. É importante se manter ativo (a) e independente e contar 
com seus próprios recursos. Será impossível pensar em aposentadoria. 
Positivo: Com disposição para agir, autorrealizado. 
Negativo: Sensação de ter falhado na vida.`,

  2: `Terceiro Ciclo de Vida 2 
O Número 2 (dois) no terceiro Ciclo de Vida mostra um período de amor sincero e de 
amigos íntimos. Um período agradável para amizade calorosa e terna, para estar 
bem consigo mesmo (a). Poderá sentir-se impelido (a) a colecionar coisas, tais 
como selos, moedas, antiguidades ou qualquer coisa extravagante. Pode ser um 
período de influência feminina no casamento. 
Positivo: Atingindo a serenidade, com o afetivo tranquilo. 
Negativo: Sente-se vitimizado (a), com dificuldade de aceitar o que passou na vida.`,

  3: `Terceiro Ciclo de Vida 3 
O Número 3 (três) no terceiro Ciclo de Vida indica um período de expressão de 
ideias e sentimentos através de diversas formas de arte, música, teatro ou literatura. 
O período é de expansão, atividades agradáveis e contatos com pessoas. A 
criatividade continua a se desenvolver. Possibilidade de muitas amizades e grande 
atividade social. 
Positivo: Viverá com muitos amigos e atividades prazerosas, sentindo que viveu 
sempre com alegria. 
Negativo: Comporta-se como adolescente, irresponsável e inconveniente.`,

  4: `Terceiro Ciclo de Vida 4 
O Número 4 (quatro) no terceiro Ciclo de Vida mostra que, mesmo aposentado (a) 
legalmente, tende a continuar trabalhando, seja por necessidade, seja por escolha. 
Mesmo sendo o terceiro Ciclo de Vida, será um período para trabalhar e produzir, por 
opção ou necessidade. Aposentadoria improvável. 
Positivo: Está estruturado e sente que tem base. 
Negativo: Sente-se desestruturado em todos os sentidos.`,

  5: `Terceiro Ciclo de Vida 5 
O Número 5 (cinco) no terceiro Ciclo de Vida revela um período de liberdade pessoal, 
bom para viagens e mudanças, para novas atividades e variedades, seja de amigos 
ou de residência. Aposentadoria incerta. Atividades novas até o último momento, 
viagens e mudanças agradáveis. 
Positivo: Sente-se com muita vontade de viver. 
Negativo: Sente-se instável em todos os sentidos, corpo sem energia.`,

  6: `Terceiro Ciclo de Vida 6 
O Número 6 (seis) no terceiro Ciclo de Vida poderá ser o mais agradável de todos - 
uma fase de felicidade e harmonia no lar - se tiver aprendido a adaptar-se e assumir 
responsabilidades. Caso não tenha aprendido poderá ser sobrecarregado (a) com 
problemas domésticos e responsabilidades imprevistas; será preciso que as aceite 
com alegria. Segurança, mas talvez com restrições. A família estará presente. 
Positivo: Sente-se protegido (a) pela família e comunidade. 
Negativo: Sente que é um peso para a família ou estará sem família.`,

  7: `Terceiro Ciclo de Vida 7 
O Número 7 (sete) no terceiro Ciclo de Vida indica um período agradável e 
repousante, quando os estudos poderão ser feitos em casa.  Aposentadoria não 
garantida. Será um período de poucas atividades, poucas saídas ou viagens, mas 
agradável, de tranquilidade e sensatez. Boa fase para aprimorar o 
autoconhecimento. 
Positivo: Sente-se conectado ao Eu Superior. 
Negativo: Sentimento de rejeição, de abandono, com doenças da alma e 
desconectado de Deus.`,

  8: `Terceiro Ciclo de Vida 8 
O Número 8 (oito) no terceiro Ciclo de Vida mostra que ainda há muitas coisas a 
realizar durante este período. A pessoa é impelida para o dinheiro, o poder, o êxito. 
Possibilidade de ficar rico, e ainda frutificar abundantemente em seus negócios ou 
atividades profissionais. Aposentadoria pouco provável. 
Positivo: Sente-se com todo seu poder pessoal, com dinheiro e sucesso. 
Negativo: Tem a energia da morte, doenças físicas e degenerativas.`,

  9: `Terceiro Ciclo de Vida 9 
O Número 9 (nove) no terceiro Ciclo de Vida mostra um período de retiro, estudos e 
reflexões. Precisa cultivar a tolerância e o amor pela humanidade. Neste Ciclo de 
Vida geralmente há alguma espécie de perda. Aposentadoria provável. 
Positivo: Profundo sentido de desapego da Terra. 
Negativo: Sente que não conquistou nada e se apega à vida.`,

  11: `Terceiro Ciclo de Vida 11 
O Número 11 (onze) no terceiro Ciclo de Vida indica um período de isolamento, de 
inspiração, de leitura, de alguma incursão na arte de escrever e, possivelmente, de 
fama. Período de provável aposentadoria. Bom período para reflexões sobre o lado 
metafísico da vida. 
Positivo: Sente que valeu a pena viver. 
Negativo: Sensação de frustração e pouco amor pela vida.`,

  22: `Terceiro Ciclo de Vida 22 
O Número 22 (vinte e dois) no terceiro ciclo de vida talvez torne a pessoa tensa e 
nervosa. Deve procurar manter-se ativo (a) durante esse período e dedicar-se a um 
hobby, tal como a escultura, a pintura, as artes divinatórias, etc. Aposentadoria 
improvável. Deve aproveitar até o último momento da vida realizando, construindo, 
melhorando o mundo, porque as vibrações são fortes. Prevenir o nervosismo 
mantendo uma atividade física apropriada. 
Positivo: Sente-se realizado (a) por tudo o que fez. 
Negativo: Sente-se frustrado (a) por ter perdido oportunidades.`
};


export const desafios = {
  0: `Desafio 0
Pode escolher entre enfrentar todos os obstáculos que existem, ou não ter desafio
algum a vencer. Seu Eu Superior saberá orientá-lo (a), pois a sua alma possui a
inteligência do significado de todos os números, e conhece os meios de superar
todas as fraquezas. O desafio zero indica ser uma alma que conserva latentes os
conhecimentos trazidos de outros ciclos da existência. Pode também ser o mais
penoso de todos os desafios para quem não cultiva o amor, a compreensão, o
autoconhecimento. É o desafio da escolha. É provável que tenha dificuldade em agir
conforme suas preferências. O desafio zero indica que poderá ser evoluído (a) para
tomar suas próprias decisões. Deve atentar para todos os desafios sem uma ênfase
especial em qualquer deles. Fique atento (a) para quais armadilhas a vida lhe
reserva. Para encarar o desafio zero é preciso ter controle de todos os outros
desafios: a independência do 1, a diplomacia do 2, o otimismo do 3, a aplicação do
4, a compreensão do 5, o ajuste e sincronia do 6, a sabedoria do 7, o poder
construtivo do 8.`,

  1: `Desafio 1
Falta de iniciativa e dificuldade para decidir. Tendência para a solidão ou para a
independência extrema. Precisa desenvolver a força de vontade, a coragem e o
caráter, ou estará sujeito (a) a ser dominado (a) e mantido (a) em humildade diante
dos outros, principalmente dos próprios parentes. Surgirão divergências, das quais
deve se libertar, sem imputar culpa aos outros ou ressentir-se e se tornar
beligerante. Pode se achar vacilante e voltar-se em todas as direções para agradar
aos outros. Sofrerá a intromissão de estranhos e não agradará a ninguém nem a si
próprio enquanto for fraco (a) e indeciso (a). Precisa persistir e se tornar
determinado (a) a exigir respeito dos outros, respeitando-se, antes, a si mesmo (a).
Precisa confiar em suas ideias criativas e originais. Deve avaliar seus planos antes
de executá-los, assegurando-se de que são viáveis, plausíveis e racionais. Certo (a) e
seguro (a) do que vai fazer, deve seguir em frente com firmeza e decisão.`,

  2: `Desafio 2
Dualidade, vacilação, extrema sensibilidade; falta de autoconfiança. Precisa
desenvolver a confiança em si próprio (a) ou se tornará muito inibido (a). É muito
sensível e vulnerável, por isso se magoa e acha difícil perdoar. Se acalentar um
complexo de inferioridade, poderá se tornar capacho dos outros. Deve se fortalecer
a fim de não se sentir ofendido (a) pela menor provocação ou por fatos criados pela
sua própria imaginação. É importante que cultive um ponto de vista mais amplo e
pare de voltar tudo para si próprio (a), não se deixar levar pela tendência a copiar os
outros e usar seus próprios talentos. Não deve sacrificar sua sinceridade só por
gostar de preservar a paz, nem evitar a verdade por querer harmonia, para ser
amável, ou apenas para dar boa impressão.`,

  3: `Desafio 3
Tendência para o desperdício de energia e a falar em excesso, ou emudecer demais.
Precisa aprender a não dispersar seus talentos, pois tende a fazer muitas coisas ao
mesmo tempo. Aprenda a tolerar críticas, a enfrentá-las; cultive amigos e viva em
sociedade, pois se temer as críticas poderá se tornar recluso (a). Precisa aprender a
não ser extravagante impelido pelo desejo de ser diferente das outras pessoas. Evite
falatórios e mexericos, pois sempre acabarão sendo atribuídos a si próprio (a),
causando-lhe aborrecimentos. Não se deixe dominar pela melancolia ou
autocomiseração, tais sentimentos são nocivos e destrutivos. Exponha seus
talentos, pois assim estará proporcionando alegria a todos, melhorando o mundo e
se realizando pessoalmente.`,

  4: `Desafio 4
Tendência para a falta de organização ou para o excesso de normas; para a
preguiça ou preocupação excessiva com pouca coisa. Precisa aprender a
disciplinar-se com relação a ser metódico (a), pontual e sistemático (a), para
encontrar facilidade no seu progresso, desenvolvendo, assim, o grande senso de
valores que possui. Deve evitar ser preguiçoso (a), teimoso (a) e dogmático (a), ou
negligente com os detalhes e a não se importar com os compromissos ou encontros
marcados. É prudente que procure dominar essas inclinações que são poderosos
obstáculos ao seu progresso. Em geral, esse desafio mostra sua tendência para não
gostar do trabalho e da poupança e, com frequência, a adiar o que tem a fazer ou
fazê-lo de modo negligente. Está sujeito (a) a mudanças e inquietações constantes
que criam uma tendência a se preocupar desnecessariamente. Para vencer esse
desafio deve inspirar segurança e solidez. Persistindo na negatividade mostra
irresponsabilidade e fecha as portas à sua frente. Terá sucesso se desenvolver o
lado prático de sua natureza e confiar no seu raciocínio lógico.`,

  5: `Desafio 5
Excesso ou falta de atividade; instabilidade emocional e material. Fuga da
responsabilidade, sexualidade intensa, impulsividade excessiva que pode implicar
em adiamentos. Precisa aprender a conter o desejo por liberdade a qualquer preço;
se não conseguir refrear esse desejo, dificilmente conseguirá construir um alicerce
sólido na vida. Não deve se deixar levar por caprichos inconsequentes, provocando
mudanças só para satisfazer seus desejos sensoriais, ou materiais, ou atraído por
novas experiências. A busca por liberdade é um desejo natural, porém, deve refletir e
analisar se o querer ser livre não é na realidade pretexto para fugir de
responsabilidades. É essencial, para conquistar a liberdade realmente, aprender a se
desprender de pessoas e coisas somente por motivos importantes, cultivar um tipo
sadio de mudança sabendo discernir quando e o que deve ser descartado, pois
assim encontrará o sucesso. A curiosidade no que se refere ao sexo e aos sentidos
físicos pode torná-lo (a) inconstante e causar a infelicidade sua e de outras pessoas.
Pode se tornar impulsivo (a) demais e querer tentar tudo ao mesmo tempo o que o
(a) levará a perder estabilidade.`,

  6: `Desafio 6
Excesso de responsabilidade familiar; prepotência. Seja idealista e não dominador
(a). Evite influir na vida dos outros sem ser convidado (a), evitando aconselhar ou
criticar fuera de propósito. Não queira que todos vivam pelos seus princípios ou pela
sua maneira de pensar, e não seja positivo (a) demais sobre o que considera certo
ou errado. Precisa evitar discutir com qualquer um que esteja em desacordo com as
regras que elaborou. Terá mais sucesso ficando ligado (a) aos seus ideais e tentar
materializá-los; não se agarre às pessoas para isso. Conseguirá equilibrar a sua
felicidade ao aprender que os outros têm direito às suas próprias ideias e padrões.
Evite ser intransigente com colegas, sócios ou auxiliares. Evite o egoísmo, a
dominação e falta de compreensão. Para vencer este desafio cultive o amor, a
compreensão e o respeito pelas opiniões dos outros. Cuidado com hipocrisia e
falsidades.`,

  7: `Desafio 7
Arrogância e excesso de vaidade e falta de autoanálise. Escapismo, medo de
pobreza, medo de ficar só e de rejeição, falta de fé. Mostra-se rebelde contra os
tipos de pressão e tiranias e as hipocrisias morais, enfim, contra as condições e a
situação prevalecente da vida em sociedade. Com isso tende a não fazer esforço
algum para alterá-las ou melhorá-las, nem trabalhará para promover algo,
revoltando-se consigo mesmo (a). Seu momento é um teste de repressão. Excesso
ou falta de orgulho, insociabilidade e reserva, são capas para as frustrações.
Esconde seus verdadeiros sentimentos sob aparente agressividade. Precisa de boa
orientação educacional, a fim de desenvolver análise aguda e habilidades técnicas,
audácia e perseverança. Podem surgir crises de melancolia que, se não as controlar,
podem debilitar a sua saúde. Não se permita sufocar pela amargura, buscando no
recurso da bebida uma rota de fuga, só porque se sente incompreendido (a) pelos o
(a) cercam. Isso pode se tornar um hábito. Reduza o tempo que fica respirando suas
limitações e desenvolva suas qualidades espirituais. Este é um desafio difícil e
trágico de suportar, pois vê e conhece o que está errado no mundo, nas pessoas, e
sabe que não pode corrigir tudo. Estude bem as suas possibilidades e faça só o que
estiver ao seu alcance e puder.`,

  8: `Desafio 8
Cuidado com desperdício, preocupação excessiva com dinheiro, sede de poder e
medo da invalidez. Liberdade pessoal baseada em posses materiais é seu principal
objetivo de, habitualmente, lutar por dinheiro e poder. Teme carência, perdas ou
limitações e acaba atraindo-as. É um desafio de grande tensão; precisa desenvolver
uma mentalidade filosófica para ver os dois lados de cada situação: querer dinheiro
para seu conforto ou ser dominado por ele, querendo cada vez mais, como ideia fixa.
Precisa cultivar o bom senso e o equilíbrio, tendo em vista sempre que o dinheiro
existe para servir e não para escravizar. Vencendo este desafio da ambição
desmedida e insensata terá oportunidade de crescimento, promoção e
reconhecimento. Seus motivos para acumular fortuna devem ser razoáveis e fora de
qualquer censura.`
};


export const momentosDecisivos = {
  1: `Decisivo 1:
É um período difícil, em que muitas vezes será necessário enorme esforço para
manter-se firme em si próprio (a), dependendo apenas de si próprio para o sucesso.
Exige coragem, determinação e muita força de vontade. Inúmeros acasos e
situações inesperadas o (a) forçarão a enfrentar a vida pensando e agindo por si
mesmo (a). O Momento Decisivo 1 gera uma inclinação por independência; desejo
de expressar a individualidade por ideias originais; de conduzir e dirigir os outros, de
atingir suas realizações e ser reconhecido (a) por isso.
O Primeiro Momento Decisivo 1 indica uma juventude, incluindo infância e
adolescência, na maior parte do tempo, provavelmente, voltada para aprender como
usar suas ideias originais, como se conduzir sem se deixar levar pelo egoísmo, pela
teimosia, pela centralização em si ou dominação. Este é um período para aprender
sobre liderança e pode não produzir as oportunidades que se esperava. É,
principalmente, um período de aprendizagem. Um Momento Decisivo 1 no primeiro
Ciclo de Vida, indica uma criança agitada, voluntariosa e por vezes complicada, que
será difícil controlar e compreender.`,

  2: `Decisivo 2:
Este é o momento que demanda cooperação e diplomacia. Traz consigo a
oportunidade para cultivar o tato e a compreensão. Se for amigo (a) e companheiro
(a) atencioso (a) com seus semelhantes, este será um período de amizades sinceras
e de relacionamentos duradouros. Excelente fase para o casamento. Se for
impaciente e desatencioso (a) poderá ser uma fase de relacionamentos difíceis, de
incompreensões, brigas, discussões, em que poderá causar prejuízos às pessoas
que o (a) cercam. A ênfase geral desse Momento Decisivo é para a cooperação e
harmonia. Você estará propenso (a) a se tornar uma pessoa muito sensível durante
este período, até mesmo se isso não faz parte do seu temperamento básico. Um
período para desenvolver ações em parceria, cooperação e diplomacia. Período de
trabalho e, relativamente, pouco reconhecimento.
Decisivo 2 indica uma criança sensível, que pode se ferir
facilmente ou se ofender. Algumas dificuldades de expressão verbal ou emocional
se fazem sentir nesse período. Influência feminina, que pode ser da mãe, avó ou
alguma tia especial tornando muitas vezes a criança mimada demais. Um Momento
Decisivo 2 no primeiro Ciclo de Vida, é indício de uma mãe forte e dominadora, ou
pai ausente – por motivo de trabalho, morte ou separação. A criança, nesse caso,
pode se tornar excessivamente sensível e ter reflexos dessa sensibilidade na
juventude e adolescência, dificultando dessa maneira, as possibilidades de
progresso.`,

  3: `Decisivo 3:
É o momento de expandir a vida social e cultivar os próprios talentos. Trata-se de
uma fase apropriada para a autoexpressão, novas amizades, romance e fertilidade.
A manifestação descuidada das emoções poderá ter consequências desagradáveis,
pois existe, nesse estado, tendência ao desmando, vícios, brigas e discórdias.
Cuidado com os amigos, pois apesar de serem necessários, por vezes são más
companhias. O efeito geral deste período é o de luz e atividades agradáveis.
Qualquer talento artístico ou criativo oculto é o momento de manifestar agora. A
vida parece fluir em sua direção neste período; seus pensamentos estão mais no
presente que no futuro ou no passado. Estar com pessoas e se divertir é essencial.
Atitudes cheias de jovialidade – as coisas vêm fácil e vão fácil. É provável que o seu
trabalho ocorra como um divertimento ou um jogo.
O Primeiro Momento Decisivo 3 indica algumas dificuldades em selecionar das
muitas oportunidades as melhores. Haverá muitas oportunidades para desenvolver
seus talentos artísticos e criativos, ainda que não possa reconhecer ou esteja
querendo trabalhar tão duro quanto possa ser requerido para o desenvolvimento
dessas oportunidades. Há uma tendência para dispersar energias e trabalho em
ideias erradas. Poderá estar muito ocupado com o divertimento para se preocupar
com o futuro. Um Momento Decisivo 3 no primeiro Ciclo de Vida, geralmente indica
uma criança com dificuldade de se adaptar aos estudos. Indica, também,
oportunidades artísticas que se não alimentadas e direcionadas condizentemente,
poderão ser desperdiçadas, fazendo com que a pessoa já adulta venha a se
lamentar dessa negligência dos pais ou educadores.`,

  4: `Decisivo 4:
Este Momento Decisivo traz a oportunidade de se construir um sólido alicerce para
o futuro. É um período de trabalho duro e até de algumas restrições, e é importante
cultivar a paciência e os bons hábitos de trabalho. Neste período poderá haver
alguns problemas econômicos, que serão superados com inteligência, trabalho e
dedicação ao projeto final. A família e os parentes por afinidade podem se
apresentar na forma de oportunidade para a prática do auxílio humanitário, tanto na
parte financeira, como prestando ajuda em uma doença, por exemplo. As
recompensas sempre aparecem a partir da aplicação dos preceitos corretos de vida
e do esforço para se obter os resultados positivos. A influência geral de um
Momento Decisivo 4 é de uma visão realista e prática das coisas.
O Primeiro Momento Decisivo 4 indica que este pode ser um período exigente, que
solicitará trabalhar devido as circunstâncias econômicas, ou no qual você é uma
pessoa altamente motivada na busca por sua educação. Um Momento Decisivo 4 no
primeiro Ciclo de Vida, frequentemente indica que a pessoa poderá começar a
trabalhar muito nova e a assumir grandes responsabilidades ainda na juventude.`,

  5: `Decisivo 5:
Traz oportunidades para viagens, para experimentar novas sensações, novos
empreendimentos e para se livrar de tudo que está obsoleto ou que já não faz falta.
É uma fase de liberdade, de mudanças, muitas vezes súbitas e inesperadas, e de
desenvolvimento pessoal, principalmente se vier após um Momento Decisivo 4 ou 6.
A influência geral no Momento Decisivo 5 é a de liberdade e diminuição de
responsabilidade. As circunstâncias financeiras poderão mudar rapidamente, para
cima ou para baixo, como tudo neste período.
O Primeiro Momento Decisivo 5 indica um período difícil por ser complicado achar
estabilidade para construção de uma fundação satisfatória para a vida futura. É
provável que ocorram muitas mudanças, de escola, de amigos, de interesses. Este é
um período em que a pessoa estará mais diligente que os outros de sua idade, mas
isso também pode lhe trazer mais dificuldades que para eles. Impulsividade e um
desejo de independência são fortes em sua natureza durante este período. Um
Momento Decisivo 5 no primeiro Ciclo de Vida, indica uma criança ousada, inquieta,
esperta e pouco constante. Geralmente empreende mudanças súbitas, ora gostando
disto, ora daquilo, sem esperar as recompensas resultantes de um esforço ou
trabalho empreendido.`,

  6: `Decisivo 6:
É um período para os ajustes das responsabilidades familiares. Caso tenha
consciência disso, este é o momento de grande afetividade, de amor e de felicidade
doméstica, além de sucesso e segurança material. Do contrário, ou seja, caso seja
dispersivo ou inconstante, poderá ser um período de desgostos, discussões, brigas
e graves problemas domésticos e até indício de separação, caso seja casado (a) ou
mantenha um relacionamento estável. Inclinação para servir, ensinando,
aconselhando, promovendo harmonia.
O Primeiro Momento Decisivo 6 indica que, ainda jovem poderá assumir alguma
responsabilidade relacionado à casa e família. Poderá ocorrer forte sentimento de
limitação devido a essas pressões. É um período para atender às suas demandas,
as da sua família, dos seus amigos íntimos, em vez de só satisfazer seu ego.
Frequentemente um primeiro Momento Decisivo 6 sugere uma pessoa que está sob
as ordens íntimas de um pai ou de alguma figura de autoridade. Um Momento
Decisivo 6 no primeiro Ciclo de Vida, geralmente indica casamento precoce ou a
responsabilidade de tomar conta dos pais ou de algum familiar.`,

  7: `Decisivo 7:
É uma fase de introspecção, de meditação e estudo do significado mais profundo da
vida, de investigação e desenvolvimento de habilidades. Caso não esteja casado (a),
este pode não é o momento melhor para casamento. Isso não significa, no entanto,
que não possa se casar. Velhos relacionamentos que não produzem mais frutos
podem e devem ser deixados para trás. Normalmente sentirá vontade de se retirar
para dentro de si para desenvolver os seus recursos internos, o que de certa forma
poderá causar problemas de relacionamento, tanto a nível pessoal como familiar.
Poderá surgir certo desinteresse por assuntos materiais e pouca preocupação com
negócios práticos, acarretando um pouco de escassez financeira.
O Primeiro Momento Decisivo 7 indica que o circulo de amizades não será grande. A
pessoa estará mais ocupada em estudar, motivada para aprender mediante desejos
internos. Sua juventude poderá ser um tempo difícil e confuso. Um Momento
Decisivo 7 no primeiro Ciclo de Vida indica uma criança retraída, solitária, pensativa
e muito estudiosa. Quando os pais são excessivamente rígidos e severos, a criança
poderá contrair algum tipo de doença psicossomática ou mesmo depressão, ser
temperamental e desenvolver algum tipo de complexo.`,

  8: `Decisivo 8:
É um período de grandes realizações no mundo dos negócios. As despesas poderão
ser altas, porém, é uma excelente fase para correr atrás dos objetivos, de conquistar
poder, fama e sucesso material. Com dedicação, estudo, organização e trabalho
sistemático, com objetivo definido e colaboradores aptos e interessados,
dificilmente deixará de conseguir tudo o que deseja.
O Primeiro Momento decisivo 8 indica um período caracterizado por envolvimento
em negócios ou atividade comercial em idade precoce, ou pode ter que enfrentar
alguma restrição neste sentido. Um Momento Decisivo 8 no primeiro Ciclo de Vida,
indica que a pessoa começará ainda jovem a se dedicar aos negócios, a trabalhar
para se sustentar e também sustentar algum membro da família.`,

  9: `Decisivo 9:
Traz a oportunidade para cultivar o amor, a solidariedade, o altruísmo e para
viagens. Poderá haver algum tipo de perda ou desapontamento, principalmente
entre amigos. Um bom investimento é fazer obras humanitárias durante esse
período, pois os frutos dessa plantação são certos, e o sucesso e a fama se farão
presentes. A atitude nesse período da vida será mais humanista, solidária e
emocional.
Decisivo 9 indica um período de vida em que o tom será o da
abnegação, porém não será nada fácil para uma pessoa ainda jovem detectar e
praticar isso. Poderá ser o (a) amigo (a) dos que têm poucos amigos, solidário (a) e
protetor (a) dos desamparados. Enquanto amadurece tende a abraçar causas e
ideais políticos humanitários. Um Momento Decisivo 9 no primeiro Ciclo de Vida,
normalmente não é dos mais afortunados, pois quase sempre a criança é
incompreendida por colegas, amigos e até familiares, que por causa dessa
incompreensão exigem muito e retribuem pouco, o que faz com que o jovem se
retraia e fique tímido e introspectivo.`,

  11: `Decisivo 11:
Por ser um número altamente espiritual e elevado, nesse período a pessoa se sente
tensa e muito nervosa, principalmente durante o Primeiro Ciclo de Vida. É uma
excelente fase para estudar esoterismo, espiritualismo e expandir os horizontes.
Esse momento traz inspiração, iluminação e, quase sempre, fama e prestígio
nacional e até internacional. Não faça nada nem diga por trás o que não teria
coragem de dizer ou fazer na frente das pessoas.
O Primeiro Momento Decisivo 11 indica um período da vida de muita inspiração e
também ansiedade. Na infância e adolescência pode ter se sentido um pouco
incompreendido (a) e pressionado (a) a fazer coisas que não estariam em acordo
com suas inspirações.`,

  22: `Decisivo 22:
É, sem dúvida alguma, o Momento mais poderoso. A pessoa se sente altamente
criativa, e nesse estado torna-se possível quase todas as realizações. É uma fase de
interesses pelos problemas mundiais e de grande expansão da consciência. O
Momento Decisivo 22 é tão poderoso que não pode acontecer no primeiro ciclo da
vida.`
};

export const segundoMomentoDecisivo = {
  1: `Segundo Momento Decisivo 1 
É um período difícil, em que muitas vezes será necessário enorme esforço para 
manter-se firme em si próprio (a), dependendo apenas de si próprio para o sucesso. 
Exige coragem, determinação e muita força de vontade. Inúmeros acasos e 
situações inesperadas o (a) forçarão a enfrentar a vida pensando e agindo por si 
mesmo (a). O Momento Decisivo 1 gera uma inclinação por independência; desejo 
de expressar a individualidade por ideias originais; de conduzir e dirigir os outros, de 
atingir suas realizações e ser reconhecido (a) por isso. 
O Segundo Momento Decisivo 1 indica certo grau de agressividade em seu 
comportamento. Não necessariamente voltada para os outros. Sua habilidade para 
seguir em frente e desenvolver seus talentos depende somente de você; de sua 
iniciativa. Suas realizações ficam mais aparentes ao público e uma sensação de 
independência lhe permite assumir algum papel de liderança.`,

  2: `Segundo Momento Decisivo 2 
Este é o momento que demanda cooperação e diplomacia. Traz consigo a 
oportunidade para cultivar o tato e a compreensão. Se for amigo (a) e companheiro 
(a) atencioso (a) com seus semelhantes, este será um período de amizades sinceras 
e de relacionamentos duradouros. Excelente fase para o casamento. Se for 
impaciente e desatencioso (a) poderá ser uma fase de relacionamentos difíceis, de 
incompreensões, brigas, discussões, em que poderá causar prejuízos às pessoas 
que o (a) cercam. A ênfase geral desse Momento Decisivo é para a cooperação e 
harmonia. Você estará propenso (a) a se tornar uma pessoa muito sensível durante 
este período, até mesmo se isso não faz parte do seu temperamento básico. Um 
período para desenvolver ações em parceria, cooperação e diplomacia. Período de 
trabalho e, relativamente, pouco reconhecimento. 
O Segundo Momento decisivo 2 indica que durante este período produtivo de sua 
vida, as realizações dependerão grandemente de suas habilidades para trabalhar 
com outras pessoas, promover harmonia, mostrar paciência e voluntariedade para 
esperar pelos créditos baseados em suas contribuições. Você pode se tornar muito 
detalhista e exigente no seu trabalho durante esse período.`,

  3: `Segundo Momento Decisivo 3 
É o momento de expandir a vida social e cultivar os próprios talentos. Trata-se de 
uma fase apropriada para a autoexpressão, novas amizades, romance e fertilidade. 
A manifestação descuidada das emoções poderá ter consequências desagradáveis, 
pois existe, nesse estado, tendência ao desmando, vícios, brigas e discórdias. 
Cuidado com os amigos, pois apesar de serem necessários, por vezes são más 
companhias. O efeito geral deste período é o de luz e atividades agradáveis. 
Qualquer talento artístico ou criativo oculto é o momento de manifestar agora. A 
vida parece fluir em sua direção neste período; seus pensamentos estão mais no 
presente que no futuro ou no passado. Estar com pessoas e se divertir é essencial. 
Atitudes cheias de jovialidade – as coisas vêm fácil e vão fácil. É provável que o seu 
trabalho ocorra como um divertimento ou um jogo. 
O Segundo Momento Decisivo 3 indica um período de responsabilidades e 
realizações muito dependentes do comportamento social e influências gerais. Este 
período poderá evocar oportunidade para escrever, falar em público, ou alguma 
forma de participação nas artes de entretenimento. São estimulados sentimentos e 
imaginação.`,

  4: `Segundo Momento Decisivo 4 
Este Momento Decisivo traz a oportunidade de se construir um sólido alicerce para 
o futuro. É um período de trabalho duro e até de algumas restrições, e é importante 
cultivar a paciência e os bons hábitos de trabalho. Neste período poderá haver 
alguns problemas econômicos, que serão superados com inteligência, trabalho e 
dedicação ao projeto final. A família e os parentes por afinidade podem se 
apresentar na forma de oportunidade para a prática do auxílio humanitário, tanto na 
parte financeira, como prestando ajuda em uma doença, por exemplo. As 
recompensas sempre aparecem a partir da aplicação dos preceitos corretos de vida 
e do esforço para se obter os resultados positivos. A influência geral de um 
Momento Decisivo 4 é de uma visão realista e prática das coisas. 
O Segundo Momento Decisivo 4 indica que sua habilidade para seguir em frente e 
realizar estará associada indubitável e diretamente à sua habilidade de trabalhar 
externamente a competição. Às vezes, este Momento Decisivo traz uma sensação 
de limitação econômica. É provável que este seja um período de crescimento e de 
realizações concretas.`,

  5: `Segundo Momento Decisivo 5 
Traz oportunidades para viagens, para experimentar novas sensações, novos 
empreendimentos e para se livrar de tudo que está obsoleto ou que já não faz falta. 
É uma fase de liberdade, de mudanças, muitas vezes súbitas e inesperadas, e de 
desenvolvimento pessoal, principalmente se vier após um Momento Decisivo 4 ou 6. 
A influência geral no Momento Decisivo 5 é a de liberdade e diminuição de 
responsabilidade. As circunstâncias financeiras poderão mudar rapidamente, para 
cima ou para baixo, como tudo neste período. 
O Segundo Momento Decisivo 5 indica que neste período a sua habilidade para 
progredir e atingir os objetivos pode estar ligada à sua capacidade de funcionar 
confortavelmente num ambiente flutuante. A sensação de liberdade que tem agora é 
muito significativa. A precaução aqui é não queimar mais cartuchos por causa de 
seu desejo de liberdade, viagens e aventuras. Poderá precisar daquele trabalho, ou 
da família, mais tarde.`,

  6: `Segundo Momento Decisivo 6 
É um período para os ajustes das responsabilidades familiares. Caso tenha 
consciência disso, este é o momento de grande afetividade, de amor e de felicidade 
doméstica, além de sucesso e segurança material. Do contrário, ou seja, caso seja 
dispersivo ou inconstante, poderá ser um período de desgostos, discussões, brigas 
e graves problemas domésticos e até indício de separação, caso seja casado (a) ou 
mantenha um relacionamento estável. Inclinação para servir, ensinando, 
aconselhando, promovendo harmonia. 
O Segundo Momento Decisivo 6 indica possibilidade de progresso e realização pela 
aceitação de responsabilidades crescentes e por atos diplomáticos. Porém, casa e 
família geralmente têm precedência sobre os negócios. É um período para trabalhar 
atendendo às demandas da família, dos amigos íntimos, do grupo social a que 
pertence, e não somente as suas satisfações pessoais.`,

  7: `Segundo Momento Decisivo 7 
É uma fase de introspecção, de meditação e estudo do significado mais profundo da 
vida, de investigação e desenvolvimento de habilidades. Caso não esteja casado (a), 
este pode não é o momento melhor para casamento. Isso não significa, no entanto, 
que não possa se casar. Velhos relacionamentos que não produzem mais frutos 
podem e devem ser deixados para trás. Normalmente sentirá vontade de se retirar 
para dentro de si para desenvolver os seus recursos internos, o que de certa forma 
poderá causar problemas de relacionamento, tanto a nível pessoal como familiar. 
Poderá surgir certo desinteresse por assuntos materiais e pouca preocupação com 
negócios práticos, acarretando um pouco de escassez financeira. 
O Segundo Momento Decisivo 7 indica possibilidades de boa evolução nos assuntos 
financeiros, bem como nos assuntos relacionados à ciência, porém, é um período 
permeado de buscas religiosas, espirituais, filosóficas ou esotéricas que poderão 
influenciar sua vida e tornar mais lento o seu progresso material. Os benefícios 
deste Momento decisivo serão muito mais profundos e interiores.`,

  8: `Segundo Momento Decisivo 8 
É um período de grandes realizações no mundo dos negócios. As despesas poderão 
ser altas, porém, é uma excelente fase para correr atrás dos objetivos, de conquistar 
poder, fama e sucesso material. Com dedicação, estudo, organização e trabalho 
sistemático, com objetivo definido e colaboradores aptos e interessados, 
dificilmente deixará de conseguir tudo o que deseja. 
O Segundo Momento Decisivo 8 indica um período de sua vida em que estará 
inclinado (a) a se tornar profundamente envolvido (a) em ser um (a) executivo (a), ou 
talvez estar casada (o) com um (a). A maturidade o (a) levará a confiar mais em 
sentimentos racionais do que emocionais. Será mais ambicioso (a) e orientado (a) 
para o sucesso.`,

  9: `Segundo Momento Decisivo 9 
Traz a oportunidade para cultivar o amor, a solidariedade, o altruísmo e para 
viagens. Poderá haver algum tipo de perda ou desapontamento, principalmente 
entre amigos. Um bom investimento é fazer obras humanitárias durante esse 
período, pois os frutos dessa plantação são certos, e o sucesso e a fama se farão 
presentes. A atitude nesse período da vida será mais humanista, solidária e 
emocional. 
O Segundo Momento Decisivo 9 indica um período da vida em que a pessoa 
expressará ideias humanitárias muito emocionais e dramáticas. Cultive a tolerância 
e a compaixão. Poderá desenvolver uma visão universal do mundo e trabalhar de 
modo a beneficiar o ser humano.`,

  11: `Segundo Momento Decisivo 11 
Por ser um número altamente espiritual e elevado, nesse período a pessoa se sente 
tensa e muito nervosa, principalmente durante o Primeiro Ciclo de Vida. É uma 
excelente fase para estudar esoterismo, espiritualismo e expandir os horizontes. 
Esse momento traz inspiração, iluminação e, quase sempre, fama e prestígio 
nacional e até internacional. Não faça nada nem diga por trás o que não teria 
coragem de dizer ou fazer na frente das pessoas. 
O Segundo Momento Decisivo 11 indica um período de trabalho inspirado e 
oportunidades para desenvolver o lado espiritual, aplicando nas suas atividades 
cotidianas as ideias inspiradas ou intuídas. Possibilidade de reconhecimento e 
sucesso em sua vida.`,

  22: `Segundo Momento Decisivo 22 
É, sem dúvida alguma, o Momento mais poderoso. A pessoa se sente altamente 
criativa, e nesse estado torna-se possível quase todas as realizações. É uma fase de 
interesses pelos problemas mundiais e de grande expansão da consciência. O 
Momento Decisivo 22 é tão poderoso que não pode acontecer no primeiro ciclo da 
vida. 
O Segundo Momento Decisivo 22 indica um período de grandes realizações em sua 
vida. Pode ser que se perca entre as suas ambiciosas pretensões, achando que 
pode tudo. É um período de trabalhar os aspectos altruístas das conquistas 
materiais, aplicando parte do seu tempo e recursos em ações que beneficiem a 
humanidade.`
};

export const terceiroMomentoDecisivo = {
  1: `Terceiro Momento Decisivo 1 
É um período difícil, em que muitas vezes será necessário enorme esforço para 
manter-se firme em si próprio (a), dependendo apenas de si próprio para o sucesso. 
Exige coragem, determinação e muita força de vontade. Inúmeros acasos e 
situações inesperadas o (a) forçarão a enfrentar a vida pensando e agindo por si 
mesmo (a). O Momento Decisivo 1 gera uma inclinação por independência; desejo 
de expressar a individualidade por ideias originais; de conduzir e dirigir os outros, de 
atingir suas realizações e ser reconhecido (a) por isso. 
O Terceiro Momento Decisivo 1 indica certo grau de agressividade em seu 
comportamento. Não necessariamente voltada para os outros. Sua habilidade para 
seguir em frente e desenvolver seus talentos depende somente de você; de sua 
iniciativa. Suas realizações ficam mais aparentes ao público e uma sensação de 
independência lhe permite assumir algum papel de liderança.`,

  2: `Terceiro Momento Decisivo 2 
Este é o momento que demanda cooperação e diplomacia. Traz consigo a 
oportunidade para cultivar o tato e a compreensão. Se for amigo (a) e companheiro 
(a) atencioso (a) com seus semelhantes, este será um período de amizades sinceras 
e de relacionamentos duradouros. Excelente fase para o casamento. Se for 
impaciente e desatencioso (a) poderá ser uma fase de relacionamentos difíceis, de 
incompreensões, brigas, discussões, em que poderá causar prejuízos às pessoas 
que o (a) cercam. A ênfase geral desse Momento Decisivo é para a cooperação e 
harmonia. Você estará propenso (a) a se tornar uma pessoa muito sensível durante 
este período, até mesmo se isso não faz parte do seu temperamento básico. Um 
período para desenvolver ações em parceria, cooperação e diplomacia. Período de 
trabalho e, relativamente, pouco reconhecimento. 
O Terceiro Momento decisivo 2 indica que durante este período produtivo de sua 
vida, as realizações dependerão grandemente de suas habilidades para trabalhar 
com outras pessoas, promover harmonia, mostrar paciência e voluntariedade para 
esperar pelos créditos baseados em suas contribuições. Você pode se tornar muito 
detalhista e exigente no seu trabalho durante esse período.`,

  3: `Terceiro Momento Decisivo 3 
É o momento de expandir a vida social e cultivar os próprios talentos. Trata-se de 
uma fase apropriada para a autoexpressão, novas amizades, romance e fertilidade. 
A manifestação descuidada das emoções poderá ter consequências desagradáveis, 
pois existe, nesse estado, tendência ao desmando, vícios, brigas e discórdias. 
Cuidado com os amigos, pois apesar de serem necessários, por vezes são más 
companhias. O efeito geral deste período é o de luz e atividades agradáveis. 
Qualquer talento artístico ou criativo oculto é o momento de manifestar agora. A 
vida parece fluir em sua direção neste período; seus pensamentos estão mais no 
presente que no futuro ou no passado. Estar com pessoas e se divertir é essencial. 
Atitudes cheias de jovialidade – as coisas vêm fácil e vão fácil. É provável que o seu 
trabalho ocorra como um divertimento ou um jogo. 
O Terceiro Momento Decisivo 3 indica um período de responsabilidades e 
realizações muito dependentes do comportamento social e influências gerais. Este 
período poderá evocar oportunidade para escrever, falar em público, ou alguma 
forma de participação nas artes de entretenimento. São estimulados sentimentos e 
imaginação.`,

  4: `Terceiro Momento Decisivo 4 
Este Momento Decisivo traz a oportunidade de se construir um sólido alicerce para 
o futuro. É um período de trabalho duro e até de algumas restrições, e é importante 
cultivar a paciência e os bons hábitos de trabalho. Neste período poderá haver 
alguns problemas econômicos, que serão superados com inteligência, trabalho e 
dedicação ao projeto final. A família e os parentes por afinidade podem se 
apresentar na forma de oportunidade para a prática do auxílio humanitário, tanto na 
parte financeira, como prestando ajuda em uma doença, por exemplo. As 
recompensas sempre aparecem a partir da aplicação dos preceitos corretos de vida 
e do esforço para se obter os resultados positivos. A influência geral de um 
Momento Decisivo 4 é de uma visão realista e prática das coisas. 
O Terceiro Momento Decisivo 4 indica que sua habilidade para seguir em frente e 
realizar estará associada indubitável e diretamente à sua habilidade de trabalhar 
externamente a competição. Às vezes, este Momento Decisivo traz uma sensação 
de limitação econômica. É provável que este seja um período de crescimento e de 
realizações concretas.`,

  5: `Terceiro Momento Decisivo 5 
Traz oportunidades para viagens, para experimentar novas sensações, novos 
empreendimentos e para se livrar de tudo que está obsoleto ou que já não faz falta. 
É uma fase de liberdade, de mudanças, muitas vezes súbitas e inesperadas, e de 
desenvolvimento pessoal, principalmente se vier após um Momento Decisivo 4 ou 6. 
A influência geral no Momento Decisivo 5 é a de liberdade e diminuição de 
responsabilidade. As circunstâncias financeiras poderão mudar rapidamente, para 
cima ou para baixo, como tudo neste período. 
O Terceiro Momento Decisivo 5 indica que neste período a sua habilidade para 
progredir e atingir os objetivos pode estar ligada à sua capacidade de funcionar 
confortavelmente num ambiente flutuante. A sensação de liberdade que tem agora é 
muito significativa. A precaução aqui é não queimar mais cartuchos por causa de 
seu desejo de liberdade, viagens e aventuras. Poderá precisar daquele trabalho, ou 
da família, mais tarde.`,

  6: `Terceiro Momento Decisivo 6 
É um período para os ajustes das responsabilidades familiares. Caso tenha 
consciência disso, este é o momento de grande afetividade, de amor e de felicidade 
doméstica, além de sucesso e segurança material. Do contrário, ou seja, caso seja 
dispersivo ou inconstante, poderá ser um período de desgostos, discussões, brigas 
e graves problemas domésticos e até indício de separação, caso seja casado (a) ou 
mantenha um relacionamento estável. Inclinação para servir, ensinando, 
aconselhando, promovendo harmonia. 
O Terceiro Momento Decisivo 6 indica possibilidade de progresso e realização pela 
aceitação de responsabilidades crescentes, e por atos diplomáticos. Porém, casa e 
família geralmente têm precedência sobre os negócios. É um período para trabalhar 
atendendo às demandas da família, dos amigos íntimos, do grupo social a que 
pertence, e não somente as suas satisfações pessoais.`,

  7: `Terceiro Momento Decisivo 7 
É uma fase de introspecção, de meditação e estudo do significado mais profundo da 
vida, de investigação e desenvolvimento de habilidades. Caso não esteja casado (a), 
este pode não é o momento melhor para casamento. Isso não significa, no entanto, 
que não possa se casar. Velhos relacionamentos que não produzem mais frutos 
podem e devem ser deixados para trás. Normalmente sentirá vontade de se retirar 
para dentro de si para desenvolver os seus recursos internos, o que de certa forma 
poderá causar problemas de relacionamento, tanto a nível pessoal como familiar. 
Poderá surgir certo desinteresse por assuntos materiais e pouca preocupação com 
negócios práticos, acarretando um pouco de escassez financeira. 
O Terceiro Momento Decisivo 7 indica possibilidades de boa evolução nos assuntos 
financeiros, bem como nos assuntos relacionados à ciência, porém, é um período 
permeado de buscas religiosas, espirituais, filosóficas ou esotéricas que poderão 
influenciar sua vida e tornar mais lento o seu progresso material. Os benefícios 
deste Momento decisivo serão muito mais profundos e interiores.`,

  8: `Terceiro Momento Decisivo 8 
É um período de grandes realizações no mundo dos negócios. As despesas poderão 
ser altas, porém, é uma excelente fase para correr atrás dos objetivos, de conquistar 
poder, fama e sucesso material. Com dedicação, estudo, organização e trabalho 
sistemático, com objetivo definido e colaboradores aptos e interessados, 
dificilmente deixará de conseguir tudo o que deseja. 
O Terceiro Momento Decisivo 8 indica um período de sua vida em que estará 
inclinado a se tornar profundamente envolvido (a) em ser um (a) executivo (a), ou 
talvez estar casada(o) com um (a). A maturidade o (a) levará a confiar mais em 
sentimentos racionais do que emocionais. Será mais ambicioso (a) e orientado (a) 
para o sucesso.`,

  9: `Terceiro Momento Decisivo 9 
Traz a oportunidade para cultivar o amor, a solidariedade, o altruísmo e para 
viagens. Poderá haver algum tipo de perda ou desapontamento, principalmente 
entre amigos. Um bom investimento é fazer obras humanitárias durante esse 
período, pois os frutos dessa plantação são certos, e o sucesso e a fama se farão 
presentes. A atitude nesse período da vida será mais humanista, solidária e 
emocional. 
O Terceiro Momento Decisivo 9 indica um período da vida em que a pessoa 
expressará ideias humanitárias muito emocionais e dramáticas. Cultive a tolerância 
e a compaixão. Poderá desenvolver uma visão universal do mundo e trabalhar de 
modo a beneficiar o ser humano.`,

  11: `Terceiro Momento Decisivo 11 
Por ser um número altamente espiritual e elevado, nesse período a pessoa se sente 
tensa e muito nervosa, principalmente durante o Primeiro Ciclo de Vida. É uma 
excelente fase para estudar esoterismo, espiritualismo e expandir os horizontes. 
Esse momento traz inspiração, iluminação e, quase sempre, fama e prestígio 
nacional e até internacional. Não faça nada nem diga por trás o que não teria 
coragem de dizer ou fazer na frente das pessoas. 
O Terceiro Momento Decisivo 11 indica um período de trabalho inspirado e 
oportunidades para desenvolver o lado espiritual, aplicando nas suas atividades 
cotidianas as ideias inspiradas ou intuídas. Possibilidade de reconhecimento e 
sucesso em sua vida.`,

  22: `Terceiro Momento Decisivo 22 
É, sem dúvida alguma, o Momento mais poderoso. A pessoa se sente altamente 
criativa, e nesse estado torna-se possível quase todas as realizações. É uma fase de 
interesses pelos problemas mundiais e de grande expansão da consciência. O 
Momento Decisivo 22 é tão poderoso que não pode acontecer no primeiro ciclo da 
vida. 
O Terceiro Momento Decisivo 22 indica um período de grandes realizações em sua 
vida e com certa estabilidade. A maturidade o ajudará a centrar seu foco em 
objetivos mais altruístas. A sua visão de mundo estará mais aguçada e abrangente. 
É um período de trabalhar os aspectos altruístas das conquistas materiais, 
aplicando parte do seu tempo e recursos em ações que beneficiem a humanidade.`
};

export const quartoMomentoDecisivo = {
  1: `Quarto Momento Decisivo 1: 
É um período difícil, em que muitas vezes será necessário enorme esforço para 
manter-se firme em si próprio (a), dependendo apenas de si próprio para o sucesso. 
Exige coragem, determinação e muita força de vontade. Inúmeros acasos e 
situações inesperadas o (a) forçarão a enfrentar a vida pensando e agindo por si 
mesmo (a). O Momento Decisivo 1 gera uma inclinação por independência; desejo 
de expressar a individualidade por ideias originais; de conduzir e dirigir os outros, de 
atingir suas realizações e ser reconhecido (a) por isso. 
O Quarto Momento Decisivo 1 indica que qualquer desejo de aposentadoria ou de 
reduzir a velocidade não será possível. Desafios e mudanças marcarão esta fase 
final da sua vida. Responsabilidades e realizações estarão baseadas na sua 
habilidade para conduzir, dirigir, e expressar a sua própria individualidade e ideias 
originais.`,

  2: `Quarto Momento Decisivo 2: 
Este é o momento que demanda cooperação e diplomacia. Traz consigo a 
oportunidade para cultivar o tato e a compreensão. Se for amigo (a) e companheiro 
(a) atencioso (a) com seus semelhantes, este será um período de amizades sinceras 
e de relacionamentos duradouros. Excelente fase para o casamento. Se for 
impaciente e desatencioso (a) poderá ser uma fase de relacionamentos difíceis, de 
incompreensões, brigas, discussões, em que poderá causar prejuízos às pessoas 
que o (a) cercam. A ênfase geral desse Momento Decisivo é para a cooperação e 
harmonia. Você estará propenso (a) a se tornar uma pessoa muito sensível durante 
este período, até mesmo se isso não faz parte do seu temperamento básico. Um 
período para desenvolver ações em parceria, cooperação e diplomacia. Período de 
trabalho e, relativamente, pouco reconhecimento. 
O Quarto Momento Decisivo 2 indica que sua vida terá um longo período de 
harmonia, estando aposentado (a) ou não. A chave para a realização será a 
paciência, o tato, e a cooperação, e será compelido (a) a controlar a tendência para a 
sensibilidade.`,

  3: `Quarto Momento Decisivo 3: 
É o momento de expandir a vida social e cultivar os próprios talentos. Trata-se de 
uma fase apropriada para a autoexpressão, novas amizades, romance e fertilidade. 
A manifestação descuidada das emoções poderá ter consequências desagradáveis, 
pois existe, nesse estado, tendência ao desmando, vícios, brigas e discórdias. 
Cuidado com os amigos, pois apesar de serem necessários, por vezes são más 
companhias. O efeito geral deste período é o de luz e atividades agradáveis. 
Qualquer talento artístico ou criativo oculto é o momento de manifestar agora. A 
vida parece fluir em sua direção neste período; seus pensamentos estão mais no 
presente que no futuro ou no passado. Estar com pessoas e se divertir é essencial. 
Atitudes cheias de jovialidade – as coisas vêm fácil e vão fácil. É provável que o seu 
trabalho ocorra como um divertimento ou um jogo.  
O Quarto Momento Decisivo 3 indica possibilidade de viagens, atividades sociais e 
entretenimento. Este Momento Decisivo promete, normalmente, liberdade e 
despreocupação financeira nos anos vindouros. Enquanto há uma tendência para 
vaguear no relativo conforto, este é um tempo em que você poderá estar no auge de 
sua criatividade.`,

  4: `Quarto Momento Decisivo 4: 
Este Momento Decisivo traz a oportunidade de se construir um sólido alicerce para 
o futuro. É um período de trabalho duro e até de algumas restrições, e é importante 
cultivar a paciência e os bons hábitos de trabalho. Neste período poderá haver 
alguns problemas econômicos, que serão superados com inteligência, trabalho e 
dedicação ao projeto final. A família e os parentes por afinidade podem se 
apresentar na forma de oportunidade para a prática do auxílio humanitário, tanto na 
parte financeira, como prestando ajuda em uma doença, por exemplo. As 
recompensas sempre aparecem a partir da aplicação dos preceitos corretos de vida 
e do esforço para se obter os resultados positivos. A influência geral de um 
Momento Decisivo 4 é de uma visão realista e prática das coisas. 
O Quarto Momento Decisivo 4 indica, provavelmente, que qualquer desejo para se 
aposentar ou reduzir seu passo pode não ser cumprido. Poderá deixar de relaxar e 
desfrutar de atividades de lazer para trabalhar. É importante trabalhar e sentir a 
sensação de realização pelo trabalho. Em alguns casos desafortunados, as 
condições econômicas retardam a tendência para se aposentar e desfrutar a vida.`,

  5: `Quarto Momento Decisivo 5: 
Traz oportunidades para viagens, para experimentar novas sensações, novos 
empreendimentos e para se livrar de tudo que está obsoleto ou que já não faz falta. 
É uma fase de liberdade, de mudanças, muitas vezes súbitas e inesperadas, e de 
desenvolvimento pessoal, principalmente se vier após um Momento Decisivo 4 ou 6. 
A influência geral no Momento Decisivo 5 é a de liberdade e diminuição de 
responsabilidade. As circunstâncias financeiras poderão mudar rapidamente, para 
cima ou para baixo, como tudo neste período. 
O Quarto Momento Decisivo 5 indica que qualquer desejo para se aposentar ou 
reduzir o passo poderá ser adiado ou não cumprido. Mudanças e variedades 
continuarão mantendo você cada vez mais ocupado (a). Se você se adaptar, este 
poderá ser um tempo muito interessante em sua vida. Na maioria dos casos um 
Momento Decisivo final 5 significa liberdade em relação a preocupações financeiras 
e domésticas.`,

  6: `Quarto Momento Decisivo 6: 
É um período para os ajustes das responsabilidades familiares. Caso tenha 
consciência disso, este é o momento de grande afetividade, de amor e de felicidade 
doméstica, além de sucesso e segurança material. Do contrário, ou seja, caso seja 
dispersivo ou inconstante, poderá ser um período de desgostos, discussões, brigas 
e graves problemas domésticos e até indício de separação, caso seja casado (a) ou 
mantenha um relacionamento estável. Inclinação para servir, ensinando, 
aconselhando, promovendo harmonia. 
O Quarto Momento Decisivo 6 traz para o lar as recompensas e prazeres da família, 
segurança e um círculo íntimo de amigos. É provável que a pessoa se ache 
devolvendo algum dos favores e atenção que recebeu num período anterior da vida. 
Quando o 6 for o último Momento Decisivo, ele poderá trazer o reconhecimento do 
trabalho já feito. Caso você esteja solteiro (a), este Momento trará a oportunidade 
para um novo amor, bem como para o conforto material.`,

  7: `Quarto Momento Decisivo 7: 
É uma fase de introspecção, de meditação e estudo do significado mais profundo da 
vida, de investigação e desenvolvimento de habilidades. Caso não esteja casado (a), 
este pode não é o momento melhor para casamento. Isso não significa, no entanto, 
que não possa se casar. Velhos relacionamentos que não produzem mais frutos 
podem e devem ser deixados para trás. Normalmente sentirá vontade de se retirar 
para dentro de si para desenvolver os seus recursos internos, o que de certa forma 
poderá causar problemas de relacionamento, tanto a nível pessoal como familiar. 
Poderá surgir certo desinteresse por assuntos materiais e pouca preocupação com 
negócios práticos, acarretando um pouco de escassez financeira. 
O Quarto Momento Decisivo 7 traz um tempo quieto quando estiver envolvido, 
principalmente, com o desenvolvimento e refinamento de seu Eu Superior. Este é um 
tempo de estudo, desenvolvimento, e pensamento da vida em termos filosóficos e 
espirituais; talvez científicos.`,

  8: `Quarto Momento Decisivo 8: 
É um período de grandes realizações no mundo dos negócios. As despesas poderão 
ser altas, porém, é uma excelente fase para correr atrás dos objetivos, de conquistar 
poder, fama e sucesso material. Com dedicação, estudo, organização e trabalho 
sistemático, com objetivo definido e colaboradores aptos e interessados, 
dificilmente deixará de conseguir tudo o que deseja. 
O Quarto Momento Decisivo 8 indica que o período final da sua vida será de alguma 
posição elevada ou importante, e pouco provável que sua aposentadoria aconteça 
em idade normal. As circunstâncias desses anos poderão ser de uma atmosfera de 
status e poder.`,

  9: `Quarto Momento Decisivo 9: 
Traz a oportunidade para cultivar o amor, a solidariedade, o altruísmo e para 
viagens. Poderá haver algum tipo de perda ou desapontamento, principalmente 
entre amigos. Um bom investimento é fazer obras humanitárias durante esse 
período, pois os frutos dessa plantação são certos, e o sucesso e a fama se farão 
presentes. A atitude nesse período da vida será mais humanista, solidária e 
emocional. 
O Quarto Momento Decisivo 9 indica um período final da vida em que o trabalho 
tenderá a ser filantrópico, ou focado em resultados que beneficiem a humanidade. 
Certamente terá uma atitude mais atenciosa com o seu semelhante agora, que em 
tempos anteriores da sua vida. A atitude nesse período final da vida será mais 
humanista, solidária e emocional.`,

  11: `Quarto Momento Decisivo 11: 
Por ser um número altamente espiritual e elevado, nesse período a pessoa se sente 
tensa e muito nervosa, principalmente durante o Primeiro Ciclo de Vida. É uma 
excelente fase para estudar esoterismo, espiritualismo e expandir os horizontes. 
Esse momento traz inspiração, iluminação e, quase sempre, fama e prestígio 
nacional e até internacional. Não faça nada nem diga por trás o que não teria 
coragem de dizer ou fazer na frente das pessoas. 
O Quarto Momento Decisivo 11 indica uma fase final de sua vida com agitadas 
possibilidades de realizações ainda. A paz se estabelecerá em seu interior se tiver 
cumprido com as prerrogativas de sua alma nos anos anteriores, caso contrário 
poderá passar por períodos de muitas angústias.`,

  22: `Quarto Momento Decisivo 22: 
É, sem dúvida alguma, o Momento mais poderoso. A pessoa se sente altamente 
criativa, e nesse estado torna-se possível quase todas as realizações. É uma fase de 
interesses pelos problemas mundiais e de grande expansão da consciência. O 
Momento Decisivo 22 é tão poderoso que não pode acontecer no primeiro ciclo da 
vida. 
O Quarto Momento Decisivo 22 indica uma fase final da vida com grandes 
resultados e grandes realizações. Provavelmente não pensará em parar de trabalhar 
e ainda sonha construir algo marcante para si e para a humanidade.`
};

export const diaPessoal = {
  1: `Dia Pessoal 1 
É um dia para cultivar a individualidade, a independência e a capacidade de trabalhar 
sozinho (a). Siga os seus próprios pensamentos e acredite na sua sabedoria interior. 
Bom para começar algo novo, marcar encontros e fazer transações. Aja com 
iniciativa e pioneirismo ao tratar dos assuntos do dia.`,

  2: `Dia Pessoal 2 
É o dia das associações, da harmonia pessoal, de cooperar e apoiar, de ouvir 
conselhos. Bom para fazer associações e firmar contratos. Cultive a paciência e 
espere o momento certo para falar ou agir no trato dos assuntos do dia.`,

  3: `Dia Pessoal 3 
Dia benéfico para se expressar sob todas as formas. Seja criativo (a) e cultive os 
contatos sociais e a expansão de seus ideais. Seja ousado (a) e exponha suas ideias 
com clareza e sem rodeios.`,

  4: `Dia Pessoal 4 
Dia para trabalhar duro e sério, para estruturar a vida material e os conhecimentos, 
para negociar, para compra e venda. É também um dia para cultivar a paciência, a 
confiança e a disposição para servir. Seja prudente e prático ao tratar dos assuntos 
do dia.`,

  5: `Dia Pessoal 5 
Um dia para renovar e inovar, para movimentar o corpo, para magia. Grande 
momento para fazer contatos, fazer publicidade, viajar e mudar o que precisa ser 
mudado. É o dia da adaptabilidade, versatilidade e responsabilidade. Aja com 
discernimento e responsabilidade no trato dos assuntos do dia.`,

  6: `Dia Pessoal 6 
Um bom dia para o amor, a família, as relações de grupos. Momento favorável para 
fazer transações imobiliárias. Não é um bom dia para viajar ou começar o que não 
pode ser acabado. Mantenha a calma e ouça com atenção o que os outros têm a 
dizer, ponderando sobre o seu ponto de vista sem alarde ou imposições. Um dia 
para servir.`,

  7: `Dia Pessoal 7 
É um dia ideal para o repouso, a meditação, sair com a família, buscar o 
autoconhecimento e para tratar de assuntos estratégicos. Aja com inteligência e 
não arrisque fazer piadas no trato dos assuntos do dia.`,

  8: `Dia Pessoal 8  
Dia bom para tratar dos assuntos financeiros, abrir uma empresa, usar a sua própria 
força e poder. Evidencia o seu maior grau de eficiência. Fale claramente de seus 
planos e projetos. Aja com soberania e segurança em si no trato dos assuntos do 
dia.`,

  9: `Dia Pessoal 9 
Um dia reservado para as finalizações e libertação daquilo que não serve mais. Não 
é um bom dia para começar novos projetos, mas é excelente para tratar dos 
assuntos relativos à humanidade, ao próximo, fazer doações, trabalhos voluntários, 
estudar, falar em público, aconselhar. Aja com sabedoria e compreensão no trato 
dos assuntos do dia.`,

  11: `Dia Pessoal 11 
É um dia de muita energia e poder. Confie na própria intuição e não se deixe levar 
por conselhos de outras pessoas. Conserve a humildade e a inspiração, e seja 
exemplo e inspiração para os outros. Bom para viajar, adquirir e conservar amizades, 
escrever, perdoar, cultivar a paciência e meditar. Aja com elevado idealismo no trato 
dos assuntos do dia.`,

  22: `Dia Pessoal 22 
Um dia para ser altruísta e realizar algo que beneficie a humanidade; ouvir as 
pessoas e praticar a equidade e a justiça. Um dia poderoso para aproveitar o 
máximo de suas potencialidades. Aja com realismo a praticidade no trato dos 
assuntos do dia.`
};


export const caracteristicasDiaNascimento = {
  1: `Dia 1 
Pioneiro (a), original, criativo (a) e independente. Naturalmente líder, 
destinado (a) a ter sucesso se viver positivamente e construtivamente. 
Com tendência a adiar as decisões recorre a desculpas para se justificar 
e não terminar o que começou. Gosta de dizer aos outros como as 
coisas devem ser feitas, em vez de fazer pessoalmente. Raciocínio 
lógico, mente ativa, sabe argumentar com sucesso até sobre assuntos 
que conhece apenas superficialmente. É importante que cultive visão 
larga e mente aberta sob pena de se tornar cada vez mais centrado (a) 
em si mesmo (a) e no objetivo visado, perdendo gradativamente a 
energia e enfrentando a possibilidade fazer escolhas erradas. Precisa 
ser independente na ação, pois, mesmo sendo competente no trabalho, 
não gosta de receber ordens ou conselhos de superiores, e se dá 
melhor trabalhando por conta própria. Afirmativo (a), autoconfiante e 
imperioso (a), tem propósitos bem definidos e ambiciona o progresso 
constante. É prático (a), idealista e individualista, possui natureza 
criadora e inventiva, muitas vezes obstinada. É bem sucedido (a) em 
ocupações que o (a) levem a encarar o público ou exijam fazer uso de 
sua capacidade de iniciativa e liderança. Fica infeliz quando relegado (a) 
a uma posição secundária; mesmo não admitindo, exaspera com 
pessoas que considera inferiores e com aqueles que não compreendem 
seu modo de ver as coisas, exigindo respeito naquilo que faz. Mesmo 
sendo sensível e profundo em seus sentimentos, não demonstra, sendo 
muitas vezes considerado (a) como uma pessoa fria e pouco 
comunicativa. Dificilmente demonstra afeto, contudo, deseja a simpatia, 
o elogio e o estimulo que o (a) encoraja. Iniciativa, ambição, unidade de 
pensamento e ação, constância em melhorar o que possui, capacidade 
de lutar para conseguir o que deseja são suas principais características 
e expressam o poder que recebeu ao nascer: Eu Quero. Para vencer na 
vida precisa de reflexão, ponderação, tenacidade e persistência; 
necessidade de Poder e Saber. Suas frustrações podem afetar sua 
saúde, alterando seu metabolismo e influindo no sistema nervoso e na 
pressão arterial.`,

  2: `Dia 2 
Excelente árbitro (a) e pacificador (a). Delicadeza natural, senso 
diplomático e habilidade para conciliar e harmonizar interesses e 
pessoas. Possui desenvolvido senso doméstico e desejo natural de paz 
e felicidade. Quando solteiro (a) é comum se envolver em problemas 
românticos, que, geralmente, resultam em complicações. O casamento 
lhe faz bem, pois aceita e valoriza as opiniões da (o) companheira (o). 
Precisa estar sempre fazendo alguma coisa para acalmar sua 
inquietude e nervosismo. Tanto o ócio quanto a solidão não são 
suportados. De natureza profundamente amorosa, é sentimental e 
afetuoso (a) e precisa também receber afeto. Compreende os 
sentimentos dos outros e é incapaz de ferir alguém intencionalmente. 
Por ser sensível e emotivo (a), sofre demais com a incompreensão ou 
indiferença de alguém que lhe seja importante. Gosta de música e tem 
senso de ritmo; possui considerável talento para as artes, a música, a 
dança, ou escrevendo principalmente poesias. Expressa afeto por sua 
sensibilidade no campo do sentir, e sua imaginação, brandura de modos 
e espírito de conciliação são os meios que usa para se expressar. Pode 
se sujeitar a uma situação passiva, aceitando ficar num segundo plano 
sem demonstrar revolta, porém, intimamente, planeja todos os passos 
para triunfar, tanto no amor quanto nos seus interesses materiais. Se for 
de má índole seus planos podem envolver artimanhas e ciladas, não 
levando em consideração nem se importando com os meios para 
alcançar sua meta. Pode até se tornar cruel e inescrupuloso (a) com 
seus adversários, mas acaba sempre se perdendo e se arruinando. 
Normalmente é bem estimado (a) por todos e hábil no trato com público. 
Gosta de conhecer novos lugares, analisar e explorar as coisas 
complicadas e enigmáticas. Trabalha melhor em grupo, cooperando. É 
importante se manter firme para vencer suas tendências periódicas para 
a depressão. Tende a subestimar suas próprias capacidades e corre 
risco de se tornar capacho dos outros ou de esconder seu sentimento 
de inferioridade sob uma atitude arrogante ou prepotente. Mas, estando 
seguro (a) de suas capacidades, mostra-se gentil, dócil, compreensivo 
(a) e delicado (a). Pode ser bem sucedido (a) em serviço cívico, público, 
diplomacia, política, como analista, psicólogo (a), professor (a), 
pesquisador (a), bibliotecário (a), árbitro (a), ou em atividades artísticas. 
Como resultado de frustrações e insucessos poderá sofrer perturbações 
no sistema nervoso refletindo no aparelho digestório; também disritmias 
e reações alérgicas.`,

3: `Dia 3 
Um (a) idealista, liberal e bem humorado (a) por natureza. Ama o prazer 
e cultiva a juventude. Gosta da vida por ela mesma, e aceita como ela 
se apresenta. Aprecia sua popularidade e aproveita todas as 
oportunidades para se expressar e se aperfeiçoar de maneira que possa 
progredir com isso. Justo (a), honesto (a) e prestativo (a), porém 
ambicioso (a), o (a) nascido (a) no dia 3 luta para conseguir altas 
posições. É dedicado (a) à família e responsável, procurando sempre 
cumprir suas obrigações, mas sempre de algum modo cômodo e fácil, 
porém sempre com eficiência. Extremamente bondoso (a) e digno (a) de 
toda confiança; possui também muitas ideias originais; é intuitivo (a), 
intelectual e possui dons artísticos. Pode tornar-se impetuoso (a) e 
violento (a) nos momentos de cólera, porém, não guarda 
ressentimentos. É um ser popular e sociável, sentindo-se muito bem 
sempre que está rodeado de pessoas e principalmente de amigos. 
Geralmente torna-se o centro das atenções por possuir o dom de 
entreter e alegrar qualquer ambiente, sem causar contrariedades ou 
provocar críticas. No seu lado negativo, procura chamar a atenção se 
colocando de vítima; se tornando agressivo (a) e negligente para 
despertar piedade e carinho dos outros e se sentir mimado (a) e 
protegido (a). Adora sentir o sabor das novas conquistas e, de alguma 
maneira, quer ser o ideal e o sonho de alguém. Pode se tornar cruel, 
crítico (a) e mordaz, manipulando as pessoas para as suas finalidades, 
às vezes, mesquinhas, por causa de sua constante insegurança afetiva. 
Se não dominar suas emoções, poderá afastar os amigos e sentir-se só, 
mesmo no meio da multidão. Pode ocupar-se de várias atividades ao 
mesmo tempo, no entanto, pode dispersar seus talentos em atividades 
infrutíferas, com prejuízos financeiros e perda de tempo. Deve focar-se 
em atividades de efetivo valor. Será bem sucedido (a) quando se 
dedicar a profissões liberais, aproveitando seus talentos criativos e 
iniciativa. Só pela auto expressão conseguirá a sua plena realização, 
em qualquer arte: oratória, escrita, teatro, pintura. A sua saúde pode ser 
abalada por frustrações de afetos não correspondidos, ou fracassos nos 
seus planos, afetando o sistema nervoso e a pele, inclusive alterando o 
equilíbrio do seu metabolismo. Porém, pode recuperar-se rapidamente 
de qualquer problema com sua saúde.`,

4: `Dia 4 
Um ser, por natureza, constante, persistente, esforçado, regular, 
metódico e ordeiro; é a própria expressão da perícia e solidez. É capaz 
de se adaptar ao trabalho regular e contínuo; capaz de grandes 
esforços para execução de seus projetos; é mais feliz quando o trabalho 
exige regularidade, esforço e método. Possui vocação para assuntos 
científicos e trabalhos mecânicos. A sua natureza é material e o seu 
mundo é dos negócios, mesmo que muitas vezes, por sua 
independência e desprezo pelo convencional e tradicional, acabe por 
prejudicar seu sucesso. É sistemático (a), econômico (a), bondoso (a) e 
honesto (a). Mesmo sendo de natureza amorosa, disciplina-se a ponto 
de não demonstrar afeição. No casamento, é dedicado (a) companheiro 
(a) e amante ardoroso (a), com muito respeito pelo sexo oposto. Pelo 
seu modo prático, deve formar bons alicerces para a sua vida. É 
trabalhador (a) incansável e metódico (a), dando atenção aos 
pormenores; prima por terminar rapidamente o que iniciou e arrasta 
quem estiver consigo. Seu senso de dedicação ao trabalho faz com que 
não esmoreça diante de exaustivas jornadas. Não gosta de mudanças, 
mas gosta de viajar, e deve aprender a divertir-se de vez em quando 
como terapia restauradora de suas energias. É extremamente leal aos 
amigos e muito responsável em família e no trabalho, mas se sente 
ofendido (a) com facilidade, mesmo sendo razoável. Os estudos são de 
grande importância para si, porém, deve buscar a praticidade de modo 
que o que aprende tenha utilidade real na sua vida. Está fadado (a) a 
alcançar o pico de suas aspirações, devido à sua persistência e calma. 
Poderá ter frequentes dores de cabeça, espáduas e rins, além de 
estados de melancolia e anemia devido às frustrações que não 
consegue elaborar.`,

5: `Dia 5 
O (a) nativo (a) do dia 5 é dotado (a) de notáveis poderes psíquicos e 
deve aceitar e seguir seus próprios pressentimentos; suas intuições. De 
fértil imaginação, torna-se um (a) intelectual versátil, sempre interessado 
(a) em tudo e tudo quer saber. Atrai e sente-se atraído (a) pelo sexo 
oposto, mas precisa aprender a lidar com isso e receber bem as 
experiências cultivando um tipo superior de relacionamentos e 
amizades. Possibilidade de casar-se cedo para se estabilizar, mas pode 
ser um par difícil, por gostar da liberdade; sente-se mal quando se 
percebe preso (a) a uma disciplina. Para dar certo, o melhor é escolher 
um par que também aprecie a liberdade e a vida ativa e goste de viajar. 
Sente-se atraído (a) por várias pessoas ao mesmo tempo, resultando 
disso frequentes sentimentos de culpa. Deve aprender a diferenciar a 
amizade do afeto e do que realmente deseja, sem confundir um 
sentimento com outro. Pode ser inconstante e volúvel, por isso é 
importante que se mantenha fiel a si mesmo (a) e aos seus princípios. 
Não é de sua natureza ficar parado (a), e busca sempre formas até 
mesmo exóticas de ganhar dinheiro ou de se realizar. Não teme riscos. 
Apreciador (a) da vida social faz novas amizades com facilidade, porém, 
quando bem lhe parece as abandona e procura por outras em outros 
ambientes. Tendência para a teimosia; não descansa enquanto não 
conseguir o que deseja. É muito importante ser um (a) líder; é capaz de 
exercer essa liderança com segurança e tranquilidade. Possui 
privilegiada inteligência, que facilita desenvolver múltiplos 
conhecimentos e aptidões. Seu ponto fraco está no impulso para 
mudanças e a tentar coisas novas, sendo impaciente para esperar pelos 
resultados no devido tempo. Mas se tomar uma determinação positiva 
de alcançar o sucesso, e se sujeitar a esperar pacientemente pelos 
resultados, logo perceberá que possui notáveis qualidades de vencedor 
(a). Para ser bem sucedido (a), melhor dedicar-se a negócios ou 
trabalhar em empresas que passem por transformações a cada cinco 
anos sob risco de seus rendimentos diminuírem. Caso não assuma e 
tenha controle sobre suas emoções, as frustrações e contrariedades 
poderão lhe causar prostração nervosa, insônia e, conforme seu 
temperamento, alguma paralisia ou derrame.`,

  6: `Dia 6 
O (a) nativo (a) do dia seis, de qualquer mês, é um (a) incansável 
buscador (a) pelo amor; apaixonado (a), prestativo (a), eficiente e 
cordial, apreciador (a) da ordem e dos métodos. Será sempre mais feliz 
dedicando-se a qualquer atividade relacionada com a educação, o bem 
estar, a família, por sua tendência para assumir responsabilidades e 
estar sempre disposto (a) a servir aos outros, ou aconselhar. Pende 
para a teimosia, a ser dominador (a), exigente e pouco razoável, 
sugerindo estar agindo dessa maneira pelo bem da outra pessoa. 
Normalmente impõe os seus ideais em nome de fazer o bem para os 
demais. Amante da vida e do ser humano, não encontra razão em viver 
sem amor. É um (a) sonhador (a) que vive intensamente suas emoções; 
inclina-se a idealizar as pessoas e, quando se decepciona, investe 
muito tempo tentando transformá-las na imagem idealizada. Por seu 
magnetismo torna-se irresistível à atração para as pessoas em geral. O 
sexo é de vital importância, porém a felicidade é sua meta principal. 
Gosta da vida social, adora receber visitas e conquista facilmente 
simpatias à primeira vista. A realização de seus sonhos torna-se difícil, 
devido à sua indecisão e excesso de exigências, porém, sabe manipular 
os meios para conseguir o que deseja, e sempre, de um jeito ou de 
outro, acaba por conseguir seu intento. Caso o seu objetivo envolva 
sentimentos, com raras exceções, vai direto a ele sem se importar com 
o que está em seu caminho. Daí o fato de poder às vezes se envolver 
em mais de um relacionamento amoroso, ou ser envolvido (a) em 
amizades ou casos comprometedores sem perceber por quê. 
Extraordinariamente sensível e vulnerável, sofre dramaticamente pela 
repressão de afetos ou frustrações e fracassos, a ponto de alterar sua 
vida e afetar sua saúde, quase não encontrando forças para reagir.`,

7: `Dia 7 
Um (a) especialista, inspirado (a), íntegro (a) e com grande capacidade 
de concentração. Muito intuitivo (a), sensível e com capacidades 
psíquicas latentes, é bom que siga sempre seus pressentimentos 
intuitivos. Será sempre melhor sucedido (a) quando buscar alguma 
especialização em alguma linha cientifica que seja independente, com 
plena liberdade de iniciativa, preferencialmente naquilo que leva a 
valores morais e éticos. Perfeccionista, individualista, possui mente 
aguda e é bom (a) argumentador (a), capaz de profunda análise mental. 
Deve prestar atenção em sua insegurança e indecisão nas suas ações, 
e ao fato de perder muito tempo medindo e avaliando prós e contras, 
correndo risco de perder oportunidades ou de não resolver o que está 
em questão. Pelo seu aspecto introspectivo e individualista é melhor 
que trabalhe sozinho (a), já que não gosta de receber ordens e 
inclina-se para a autocentralização e teimosia. Deve evitar jogos e 
especulações, bem como sociedades e negócios por porcentagem. O 
casamento geralmente acontece mais tarde, após analisar, conhecer e 
raciocinar muito, pois terá dificuldade para suportar um fracasso 
sentimental, dificultando ainda, um segundo relacionamento amoroso. 
Por ser extremamente dedicado (a) à família, acaba assumindo 
encargos que são dos outros membros. Tende a colocar os parentes 
acima de seu próprio bem, permitindo que interfiram em sua vida e, 
desta forma atrapalhando a sua felicidade. Está sempre querendo 
ajudar os amigos, podendo às vezes ser explorado (a) por eles. Possui 
tendência a trabalhar demais, havendo necessidade de calma e 
repouso. É muito sensível às bebidas e drogas, devendo evitar o quanto 
possível, principalmente quando estiver tenso (a) ou triste, pois tende a 
viciar-se facilmente. Pela repressão dos afetos, frustrações em seus 
ideais ou fracassos, tende para a depressão, o desanimo, e poderá 
desenvolver algum distúrbio no estomago ou fígado.`,

8: `Dia 8 
O (a) nativo (a) do dia 8, de qualquer mês, é dotado (a) de notável 
senso de justiça e equanimidade. Possui capacidades para grandes 
realizações por meio do esforço contínuo, persistência e determinação. 
Poderá ser bem sucedido (a) no comércio, e nos negócios em geral, 
graças às suas habilidades e senso econômico. É progressista, criativo 
(a) e tem capacidade executiva; pertence ao mundo dos negócios por 
sua própria natureza. O seu desejo é de poder e autoridade, 
considerando o dinheiro o melhor meio de alcançar. Torna-se um (a) 
investidor (a) naturalmente, pois emprega os resultados obtidos de seus 
esforços em novos empreendimentos. Gosta de causar boa impressão. 
Pela facilidade de ganhar dinheiro dificilmente passará necessidades se 
viver construtivamente. Sua força é a iniciativa; não teme riscos e 
raramente pede conselhos, pois sabe que é perfeitamente capaz de 
cuidar de si mesmo (a) e confia em suas qualidades e capacidades. 
Essas qualidades inatas, aliadas ao seu senso de equanimidade e 
justiça, poderão torná-lo (a) um (a) excelente juiz (a). É bom que reflita 
muito antes de se casar, e a sua escolha é bom que recaia sobre 
pessoa mais jovem a fim de movimentar sua natureza taciturna, que não 
passa de máscara já que por debaixo dela se encontra um ser caloroso 
com quem sempre se pode contar. Seus principais defeitos são a 
desconfiança, certa malícia, tendência à descrença e ao pessimismo e a 
dominar os outros. Frequentemente tem impulsos de mau humor; 
depois se sente solitário (a) e incompreendido (a). Não se deixa abater 
diante dos obstáculos em sua vida e dificilmente conhece derrotas, pois 
não se joga cegamente contra eles, e sim os analisa, e sempre 
consegue contorná-los.`,

9: `Dia 9 
Capaz de resoluções rápidas e certas, profundamente interessado (a) 
por tudo e por todos, ativo (a) em seus pensamentos e atos, possui 
aptidões naturais para tudo que exige energia e esforço. Passa 
confiança e segurança para os outros. É capaz de realizar quase tudo o 
que deseja; por essa facilidade, tende a protelar seus atos. Tem 
facilidade para ganhar dinheiro, por isso, não se preocupa em acumular 
ou poupar. Dotado (a) de genialidade, generosidade e desapego dos 
bens materiais, é independente, liberal e audacioso (a), combativo (a) e 
destemido (a) diante do perigo, não receia derrotas, pois sabe que é 
capaz de se reerguer com redobrada energia. Do seu jeito, é ardente, 
apaixonado (a) e agressivo (a) diante dos obstáculos. Seu ponto fraco é 
a falta de persistência. Consegue se manter calmo (a) e sereno (a) 
diante de fatos e acontecimentos que o (a) magoam, que ofendem e 
ferem seu orgulho, porém, às vezes explode em revolta quase 
incontrolável chegando ao ponto de destruir num só ato o que levou 
anos para conseguir. No entanto, essas explosões são tão rápidas 
quanto intensas e não guarda ressentimentos, pois o nove não 
consegue odiar ou querer mal por muito tempo. Sua alma é 
essencialmente filantrópica, humanista, artística, intelectual, dramática, 
e possui incrível presença de espírito. O amor e a afeição são de vital 
importância e só por esses sentimentos se deixa dominar, pois é 
independente, decidido (a) e gosta de fazer as coisas por si só sem 
esperar pelos outros. Ninguém, por razão alguma, pode forçá-lo (a) a 
fazer algo que não queira. Tende para atrair culpas por 
desentendimentos e discórdias, mesmo que não esteja presente na 
ocasião, o que atrapalha a sua tranquilidade e felicidade. Em seu 
destino haverá muitas viagens e modificações. Poderá sofrer perdas, 
desapontamentos e separações de pessoas que ama. Para evitar tais 
sofrimentos, ou pelo menos minimizá-los, é importante que se 
desapegue das retribuições. As recompensas virão pela via do servir 
aos outros e não pela vida egocêntrica.`,

10: `Dia 11Dia 10 
O (a) nascido (a) no dia 10 traz por desígnio o "querer". Quer 
independência de ação, quer progredir, quer por em prática suas 
iniciativas e ver aceitas suas ideias, para alcançar o êxito em seus 
ideais. Independência de ação é de absoluta necessidade, bem como 
trabalhar sozinho (a), estar à frente de um negócio ou ocupar um cargo 
de chefia, pois detesta receber ordens e não se conforma com posições 
secundárias. É original, com muita iniciativa e dotado (a) de espírito 
criativo. É quase certo que terá sucesso. Liderança, projeção e 
autoconfiança são qualidades inatas do (a) nativo (a) desse dia. É 
importante o autoconhecimento e desenvolvimento espiritual para lutar 
por seus objetivos. Por ter facilidade em adquirir conhecimentos e 
prestígio, pode facilmente se desinteressar e desistir de seus objetivos 
diante do primeiro obstáculo, vindo a se entregar a atividades paliativas 
que não levam a nada. Talvez seja forçado (a) a se manter por seus 
próprios recursos, recebendo pouco auxílio dos outros, o que o (a) fará 
sentir-se solitário (a). É amistoso (a), leal, prestativo (a) e sempre pronto 
(a) para auxiliar os outros, até mesmo os desconhecidos. Esforça-se 
para não decepcionar aqueles que dependem de sua ajuda e confiam 
nele (a). O seu maior incentivo vem daqueles que confiam em seus 
talentos e capacidades, o que o (a) faz triunfar. Normalmente só faz o 
que seja bom para si e para os demais. Por ser idealista, está 
constantemente trabalhando para melhorar o ambiente em que vive. É 
um (a) sonhador (a) visionário (a), ambicioso (a) e impaciente; de rara 
capacidade mental e grande coragem; desconhece o medo. Dispõe de 
grande reserva de energia e precisa encontrar meios de se ocupar a fim 
de extravasá-la. É capaz de se ocupar de várias atividades ao mesmo 
tempo. Sua personalidade cativante atrai à primeira vista, entretanto, 
pode despertar antipatias por seu modo de ser um tanto egoísta e por 
sua tendência à prepotência e possessividade com relação às coisas, 
amigos, sócios e companheiro (a). É bom que cultive a compreensão, o 
amor ao próximo, e aprenda a conviver em sociedade como uma 
pessoa comum e modesta, dominando seu possível sentimento de 
superioridade e sua tendência para o isolamento. A repressão de seus 
ideais; as frustrações e fracassos podem trazer perturbações ao 
coração, sistema circulatório e deficiência visual e auditiva.`,

11: `Dia 11 
O (a) nativo (a) do dia 11 possui delicadeza natural e muito tato; senso 
diplomático e procura manter sempre a harmonia onde está. É um ser 
de grande inspiração. Afetuoso (a) e sentimental precisa de um lar para 
se sentir seguro (a), pois não suporta a solidão. Carrega de fortes 
emoções os seus amores e muitas vezes se sente frustrado (a) pela sua 
disposição de tentar impor seus padrões morais aos outros, o que, em 
verdade, é uma contradição, pois suas mais nobres qualidades são 
exatamente as opostas: a compreensão que possui da natureza 
humana e a simpatia que cultiva por todos. Ás vezes mostra-se passível 
demais, outras vezes revela indomável espírito de independência e 
liderança. Na passividade pode se tornar tímido (a) e submisso (a), 
enquanto que no ímpeto indomável da liderança pode se destacar 
diante do público. Parece calmo (a) e autocentrado (a), mas na verdade 
é muito tenso (a) e nervoso (a). Sente necessidade de desenvolver sua 
agressividade, persistência, determinação e fixidez de propósitos. Gosta 
de estar sempre ocupado (a) e se sente feliz assim; ama a liberdade. 
Por sua eficiência e capacidades, pode executar um trabalho mais 
rapidamente que os outros. Ao invés de ser firme e prático (a) em seus 
desejos, pode eventualmente vacilar ou adiar indefinidamente nada 
realizando, ou desanimando e se sentindo pessimista ou a vítima do 
destino. Alcança seus objetivos através da persuasão, agindo 
sutilmente, com paciência e persistência, apesar de aparentar ser 
submisso (a). Se for negativo (a), pode se tornar amargo (a), sem 
ambições e derrotista, vindo a ser mesmo um (a) joguete de suas 
próprias emoções e dos outros também. É importante manter a atenção 
para que seu intelecto não sufoque sua intuição, pois é um ser de 
consideráveis capacidades psíquicas; deve agir pela primeira intuição, 
sem vacilar. Um (a) idealista sonhador (a), cheio (a) de aspirações e 
inspirações, deve dominar a tendência para viver de sonhos como fuga, 
pois a consciência da realidade é primordial para procurar, dentro de si, 
a orientação correta para entrar em harmonia e ser feliz. Sua prudência 
e adaptabilidade facilitarão superar frustrações e repressões de afetos, 
que podem lhe causar males de difícil diagnóstico, mas também de 
curas inexplicáveis.`,

12: `Dia 12 
O (a) nativo (a) desse dia possui o poder da Auto Expressão. É 
convincente por seu grande poder de comunicação, capaz de vencer 
seus mais fortes adversários pela argumentação. É eficiente nas 
atividades que exigem talentos artísticos, destreza na coordenação e 
execução, temperados de humor e idealismo na busca pelos resultados. 
Por ser prático (a) está sempre pronto (a) para agir e assume tantos 
compromissos que se vê continuamente atarefado (a); como 
consequência desta sua maneira de ser, precisa aprender a não 
dispersar suas energias. É justo (a) e honesto (a), liberal e respeitador 
(a) das crenças e da fé, além de ser bom (a) serviçal. Possui caráter 
leal, franco (a), empreendedor (a) e feliz, natureza altiva, qualidades 
comerciais e aptidão para mando, que o (a) tornam apto (a) para todas 
as ocupações que exijam sociabilidade e diplomacia. Sabe aproveitar as 
oportunidades para se expressar e aperfeiçoar seu modo de ser, a fim 
de progredir sempre. Gosta de sua popularidade; tem inclinações para a 
política e para atividades ligadas a interesses sociais. Sente satisfação 
em alegrar e entreter os outros e procura não causar contrariedades. 
Por sua natureza excessivamente bondosa às vezes deixa-se explorar 
pelos outros, ou carrega problemas e preocupações alheios. Por outro 
lado, em dados momentos assume a condição de vítima, para angariar 
simpatias e fazer novas conquistas, pois tem necessidade de estar 
acima de todos, num pedestal, especialmente se lá for colocado (a) por 
alguém do sexo oposto, e, assim mantém suas presas em contínua 
ansiedade e insegurança, ora mostrando-se apaixonado (a), ora 
indiferente e distante. Em suas atividades pode usar de refinado 
sarcasmo, de crueldade e contrariedade. Nos momentos de cólera fica 
impetuoso (a), agressivo (a) e, muitas vezes, violento (a), usando de 
rudeza no falar, atraindo assim inimizades que, por esse motivo, podem 
bloquear seu sucesso. Muitas vezes é tomado (a) pelo nervosismo e 
impaciência, ficando sujeito (a), ainda, a crises de depressão. Para 
evitar a depressão deve ocupar-se em várias frentes e dedicar-se 
constantemente a atividades intelectuais. Fracassos, decepções e 
frustrações podem causar afecções no sistema nervoso, originando 
desequilíbrio no metabolismo, hipertensão e problemas renais.`,

13: `Dia 13 
O (a) nativo (a) desse dia é naturalmente ordeiro (a) e autoritário (a). 
Visa a sua própria segurança econômica em primeiro lugar. É 
sistemático (a), prático (a) e minucioso (a). Trabalha duramente sem se 
poupar, nem poupar os outros no trabalho. Quando uma ocupação 
desperta seu interesse a executa com extraordinária habilidade. Sua 
principal qualidade é a perícia; sua característica mais marcante é o 
desejo de mudar, reformar, transformar. Mesmo que às vezes se deixe 
levar por sonhos, seus desejos são reais, sólidos, concretos e bem pé 
no chão. Pessoa dinâmica, que faz por si mesmo tudo o que pode, sem 
esperar pelos outros. Habilidoso (a) nas atividades manuais, consertos 
e reparos, mesmo aqueles que exijam conhecimentos técnicos, os quais 
adquire pela simples observação. Possui talentos artísticos e gosta de 
divertir as pessoas. O seu modo de fazer as coisas é bem peculiar. Tem 
capacidade para mudar regras e regulamentos de acordo com seus 
interesses que, geralmente, são compatíveis com seus princípios. Se 
pender para o negativismo torna-se pessimista, mal humorado (a), 
insociável e se convence de que o mundo está todo errado e todos 
estão contra si. Seu senso de equidade e justiça o (a) faz sofrer sempre 
que vê alguém com talentos e merecimentos ser preterido em favor do 
prestígio de outro. Revolta-se profundamente com a competição desleal. 
Prefere renunciar e se afastar a participar de alguma situação com a 
qual não concorda. Sua natureza é fortemente amorosa, mas tem 
dificuldade para expressar seus sentimentos. É extremamente leal aos 
amigos, dedicado (a) e prestativo (a), embora sua aparente indiferença, 
consequente de sua dificuldade em expressar suas emoções, razão 
pela qual reprime tanto suas alegrias quanto suas decepções. Sua 
aparência fria e materialista apenas esconde um ser que tem grande 
necessidade de amor, afeto e compreensão. Um (a) nobre altruísta e 
compassivo (a), que poucos conhecem realmente, e compreendem. 
Para ter sucesso necessita de harmonia, porém, o sucesso não vem 
fácil, embora lute arduamente por ele. Ás vezes pode se acomodar 
durante algum tempo, mas é persistente e nunca desiste voltando à sua 
luta com a mesma desenvoltura e vontade que lhe caracteriza. É do 
mundo dos negócios, e se dá muito bem em ramos como a construção 
e a indústria. Por seu senso de organização pode ser um (a) bom (a) 
administrador (a), dedicar-se à política ou fazer carreira na 
administração pública. As frustrações, decepções e repressões de suas 
emoções podem causar dores de cabeça, dificuldade na fala ou 
debilidade física, porém, sua capacidade de recuperação é admirável.`,

14: `Dia 14 
A sua grande meta é a compreensão; ambiciona compreender fatos, 
pessoas e coisas. Para isso usa da persuasão, investigação e seleção 
de valores. Possui o dom de lidar com negócios, dinheiro e atividades 
especulativas. Adapta-se muito bem em atividades de compra e venda 
desde que se trate de transações rápidas. Pode comprar terras, ações, 
para mais tarde revender. Deve fazer o dinheiro e as mercadorias 
circularem; sem guardar por mais de cinco anos qualquer bem que vise 
lucro, a menos que faça modificações periódicas neles no transcorrer de 
suas posses. Detesta ficar parado (a) e sempre encontra um meio de 
ganhar dinheiro, sem se importar com os riscos que terá de correr. Será 
sempre mais feliz enquanto houver novidades e movimento; não se 
conforma em esperar que as coisas aconteçam. Seu desejo de 
movimento pode trazer instabilidade e incertezas. Se não tem uma boa 
formação pode tornar-se um (a) aventureiro (a) e oportunista; por sua 
irreflexão sofrer quedas e perdas. No casamento é bom que escolha 
uma pessoa que goste de viajar e da vida ativa também. É um ser que 
não se preocupa tanto com o futuro, procurando viver mais no presente. 
Quase sempre assume atitude de líder, mesmo que isso não esteja em 
seus planos. Por sua natureza de certa maneira dupla, consegue 
apreciar bem os dois lados de uma questão. É versátil e dual em 
temperamento. De natureza bondosa e emotiva, pode ser tocado (a) 
facilmente por seus sentimentos. Possui mente intuitiva e capacidades 
psíquicas, desenvolvidas ou ainda latentes, e deve seguir sempre a sua 
intuição para ter sucesso. Se conseguir controlar seus impulsos, 
cultivando a prudência, a paciência, a persistência e se fixar em 
determinada coisa e lugar, alcançará grande sucesso financeiro e 
social. Por não saber lidar bem com contrariedades, frustrações, perdas 
ou desenganos profundos, pode tornar-se hipocondríaco e vir a ter 
problemas respiratórios ou alérgicos. `, 

15: `Dia 15 
O (a) nascido (a) nesse dia é dotado (a) de incrível magnetismo 
pessoal. As pessoas, principalmente do sexo oposto, sentem-se 
atraídas por ele (a). Dá mais importância às pessoas que ao ambiente, 
embora seja capaz de melhorar qualquer ambiente. Consegue, com 
certa facilidade, resolver suas questões financeiras sempre encontrando 
um meio de ganhar dinheiro. Apega-se com facilidade ao dinheiro, 
preferindo gastá-lo consigo mesmo (a). Por outro lado, sendo superior 
nos sentimentos se desapega e recebe mais que os outros, porque não 
se restringe só a ganhar, mas também a dar sem esperar em troca. 
Ama a vida, as pessoas e a natureza; consegue fazer com que os 
outros se sintam à vontade junto de si. É caloroso (a) e vivaz; gosta de 
receber visitas e não se lamenta pelo gasto em festas e atividades 
sociais. Apega-se à vida familiar; normalmente por essa razão se casa 
cedo. No entanto, deve escolher bem com quem casar, pois um 
casamento infeliz pode causar sofrimento e levar ao isolamento, embora 
não seja de sua natureza isolar-se. Sendo pouco desenvolvido (a) pode 
se tornar egoísta, egocentrista e exibicionista, querendo ser o centro 
das atenções, julgar-se irresistível, tornando-se vulgar, infiel e infeliz. 
Intimamente gosta de expressar seus ideais através da eficiência, 
cordialidade, ordem estética, método e reciprocidade, para alcançar 
seus objetivos. Possui o dom de atrair oportunidades e criar condições 
harmônicas. Pode vir a ocupar cargos que tratem do bem estar da 
comunidade, ou que exijam compreensão e mão firme para manter a 
ordem e a disciplina no grupo, por sua capacidade, responsabilidade e 
habilidade natural de compreender, unir e harmonizar. Aprende mais 
pela observação do que pelo estudo e pesquisa. Conserva por toda a 
vida espírito jovem e ativo. É honesto (a), amável, bondoso (a) e digno 
(a) de confiança. Sua inclinação artística o (a) leva, muitas vezes, a se 
sentir atraído (a) pela música, tocando algum instrumento ou cantando. 
A repressão de suas emoções, a frustração de suas ambições e ideais, 
podem causar distúrbios na saúde, mais especificamente na garganta, 
pulmões e fígado.`, 

16: `Dia 16 
O (a) nascido (a) no dia 16 estará sujeito (a) ao triunfo, e também à 
ruína. Sendo elevado (a) em consciência e cultivando pensamentos e 
sentimentos nobres, estará fadado (a) ao sucesso e triunfo, no entanto, 
se for negativo (a) verá frequentemente ruínas ao seu redor 
viver isolado (a), porém deseja e necessita de afeição e compreensão. 
Apesar disso, de sua carência afetiva, não gosta de interferências nos 
seus planos, mesmo quando adia ou protela o que faz com certa 
frequência. Deve se precaver contra falsos amigos, perigos de 
acidentes, descontentamento e ansiedade. Sente-se bem em contato 
com a natureza: oceanos, lagos, rios e lugares calmos e afastados. 
Será melhor sucedido (a) em atividades independentes, com liberdade 
de iniciativa, em negócios de amplitude universal ou que sirvam à 
educação e à moral. As frustrações podem causar perturbações na 
digestão e afecções na pele.`, 

17: `Dia 17 
O (a) nascido neste dia possui acurado senso de perspicácia e 
liderança, que manifesta através de extraordinário talento humorístico; 
assim consegue simpatias até daqueles que sofrem suas críticas. 
Realiza-se no cálculo, na organização e na divisão justa de tudo. É bom 
que trabalhe, sempre que possível associado (a) a outras pessoas. 
Mesmo que comece em posição inferior logo assume a direção de modo 
natural. Sua grande força está na persistência e nas qualidades de 
análise e compreensão. Não é precipitado (a) nem ousado (a) demais; 
prefere fazer tudo com boa margem de segurança, prudência e 
conhecimento real da situação em questão. Está predestinado (a) para 
realizações importantes por meio de esforço contínuo, persistência e 
determinação. Será bem sucedido (a) nos negócios, tanto pela 
economia como pela eficiência. Geralmente conhece suas habilidades e 
se empenha continuamente em fortalecê-las. Possui capacidade 
executiva para negócios em geral, seus ou de outros, devido a sua 
mentalidade prática e bom senso. Essencialmente é uma pessoa 
honesta; quando percebe que alguém pode ser útil, procura por seus 
serviços e recompensa com valor justo. Sabe comandar subordinados 
sob suas ordens e administra bem setores onde os pormenores e a 
rotina são importantes. Geralmente anda bem humorado (a) e consegue 
sempre encontrar um modo de disfarçar suas decepções e tristezas. A 
fama só depende de si próprio (a), pois tem o dom de atrair o público 
para si. Relaciona-se facilmente com pessoas do sexo oposto; está 
sempre cercado (a) por pessoas que o (a) admiram, e até mesmo que 
podem estar secretamente apaixonadas. Sua aparente estabilidade 
esconde oscilações entre um momento conservador e racional, e, em 
seguida outro extravagante. Só depende de si para ser bem sucedido 
(a) e vencer na vida, bastando para isso encarar o mundo e a vida com 
otimismo e coragem, pois tem os dons necessários para subir ao topo 
do mundo. Quando reprime suas emoções, ou renuncia aos seus 
planos, pode sofrer perturbações na saúde, que se refletem em dores 
de cabeça, problemas no fígado, bílis, na circulação sanguínea, e 
reumatismo.`,

18: `Dia 18 
Quem nasce no dia 18 possui grande poder mental e pode elevar-se às 
mais altas posições ou baixar a um negativismo total. O dia 18 é 
poderoso, tanto para as coisas positivas quanto negativas. Os nascidos 
sob esta vibração podem, tendo consciência de seu poder, obter o que 
quiserem, tanto no campo positivo, como no oposto. É o número dos 
magos, bruxos, médiuns e líderes religiosos, exigindo, em 
reciprocidade, grande responsabilidade também. A sua natureza 
profundamente espiritual facilita os contatos com outras dimensões seja 
pela vidência, sonhos, intuições ou por outra via mediúnica. Sua 
sensibilidade aflorada, inteligência extraordinária e mente aguda, o (a) 
tornam, por consequência, um (a) vencedor (a) nato (a). Seus maiores 
inimigos, no entanto, são a ambição desmedida e o egocentrismo. Deve 
manter-se bem alerta com as tendências a se entregar ao pessimismo e 
ao temor do futuro desconhecido, para evitar o risco de se transformar 
em joguete da sorte, indo de derrota em derrota até a ruína completa. É 
importante que seja altruísta e desapegado (a), vivendo e agindo para o 
bem de todos, quando, assim, tudo lhe virá às mãos com facilidade. É 
independente, intuitivo (a), intelectual, emotivo (a), requintado (a), 
prestativo (a) e desinteressado (a); seu humor é variável, gosta de 
discussões e de criticar os outros. Seu raciocínio lógico o (a) torna 
eficiente, capaz também de dar conselhos sensatos, mesmo aos mais 
velhos ou mais cultos. Consegue superar decepções e sofrimentos; é 
um (a) lutador (a) nato (a) e não teme ninguém e nada. Muito amoroso 
(a), afetuoso (a) e dedicado (a), careia amizades com grande facilidade; 
é leal, constante e prestativo (a), mas também é facilmente vulnerável e 
explosivo (a), porém, não sabe odiar ou guardar rancor. Está destinado 
(a) a ocupar cargos de liderança por sua energia, firmeza e decisão. As 
frustrações e contrariedades podem lhe causar sérias enxaquecas, 
perturbações cardíacas, crises de melancolia e alterações no sistema 
nervoso.`,

19: `Dia 19 
Quem nasceu no dia 19 possui grande força de caráter, coragem, 
natureza intrépida, apaixonada e impulsiva, chegando a atitudes 
heroicas. Aprecia mudanças, é versátil e deseja sempre as melhores 
condições. É independente, artístico (a) e original, dotado (a) de espírito 
de iniciativa e criatividade. O dia 19 rege o sucesso, a felicidade e a 
prosperidade, porém, quem está sob esta vibração poderá perde-la ao 
se deixar dominar pela tendência ao egoísmo e teimosia. O 19 é 1 e 9, 
os dois extremos; o líder e a multidão. O (a) nativo (a) deste dia pode 
ser tanto o (a) líder carismático (a), amigo (a), compreensivo (a), guia e 
conselheiro (a), quanto o (a) dominador (a) déspota. Pode ser tão 
generoso (a) quanto ambicioso (a), ora um (a) altruísta edificante, ora 
um (a) egocêntrico (a) doentio (a). De grande vitalidade, porém, 
facilmente irritável e sujeito (a) a crises violentas que podem afetar 
seriamente sua saúde. De modo geral é nervoso (a) e se deixa tomar de 
cólera, mas esquece depressa o incidente e não guarda rancor. Não é 
mau nem vingativo (a) e não compreende aqueles que são. Consegue 
ser compassivo (a) com o sofrimento alheio, e também ser severo (a) o 
bastante com os hipócritas, desleais e exploradores. Acredita na 
regeneração e recapacitação do ser humano e está sempre disposto (a) 
a dar nova oportunidade. É um (a) sonhador (a) e batalhador (a), que 
não fica no meio termo: quer impor seus ideais, salvar sua gente, 
reformar a sociedade, e pode se transformar num (a) ditador (a) com 
coração de pai. Quer dominar, e consegue através de artimanhas, ou 
conquistando simpatias e admiração. O desígnio de querer é nato do (a) 
nativo (a) do dia 19, e para cumpri-lo é capaz de gestos teatrais e 
atitudes extremas. Não aceita seguir o convencional. Pode ser 
necessário fazer ajustamentos, já que se recusa a ouvir conselhos dos 
outros e aprende mais pelas experiências amargas. Por isso, sente 
necessidade de compreensão e harmonia no casamento, pois pode se 
sentir solitário (a), mesmo junto à pessoa amada, só com seus 
pensamentos, ideais e sonhos; seu modo "sui generis" de ser e agir. As 
decepções, frustrações e fracassos podem causar perturbações 
cardíacas e circulação sanguínea, ou deficiência visual e auditiva.`,

20: `Dia 20 
Um ser extremamente sensível. Expressa seus sentimentos por meio da 
imaginação, brandura de modos e espírito de conciliação. Sujeita-se 
frequentemente à autocensura; se escravizando por ela. Se adapta 
facilmente a lugares e pessoas, revelando delicadeza e tato, nem 
sempre de modo natural. Bom (a) diplomata, procura sempre manter ao 
seu redor um ambiente que lhe traga harmonia e segurança. Seu 
instinto doméstico é muito desenvolvido; possui desejo constante de paz 
e felicidade, mesmo que o seu conceito a respeito disso seja bem 
diverso do senso comum. Possui imaginação fértil; contenta-se com 
condições de harmonia temporária, que, por não ser estável pode ser 
prejudicial ao seu sucesso, porém, de modo insinuante e dócil consegue 
seus objetivos. Detesta discussões e se esforça por evitá-las. Pode até 
mesmo se submeter à vontade dos outros, ou se tornar submisso (a), 
aparentando passividade e comodismo, aguardando e preparando a 
oportunidade de se impor. Porém, nem sempre tem fibra suficiente para 
modificar a situação. Apesar de seu temperamento, tem muita 
satisfação por si mesmo (a) e de suas habilidades e dá muita 
importância à própria aparência e status. Pode se sujeitar a uma 
situação de inferioridade, com grande sacrifício, mas sente necessidade 
de ocupar altos cargos e trabalha incessantemente para esse objetivo. 
Romântico (a) e afetuoso (a), mas inconstante, sonha sempre com 
lugares novos, desejando conhecer coisas diferentes e viver novas 
experiências. No seu lado negativo busca suas metas sem se importar 
com os meios para isso, podendo mesmo ser cruel e desumano (a) com 
quem barrar seus passos, passando por cima sem escrúpulos ou ética. 
Se não anular esta sua faceta negativa poderá enfrentar a ruína material 
ou espiritual, de modo fatal. Pode ser excelente político (a), por sua 
grande habilidade no trato com o público. No que se refere a trabalho, 
pode executar tarefas mais depressa que os outros. Será mais bem 
sucedido (a) se trabalhar em pequenas empresas ou tiver seu próprio 
pequeno negócio, pois tem tendência para se acomodar, ou, então, a 
querer inovações constantes. Do ponto de vista da saúde, a repressão 
de suas emoções, as decepções, frustrações e contrariedades podem 
causar graves perturbações nervosas que afetem órgãos importantes de 
seu organismo.`,

21: `Dia 21 
Um ser que nasceu para se manifestar e expressar seus sentimentos e 
ideias. Idealista e liberal é carente de companhia e sente-se feliz em 
comunhão com os outros. Sua natureza é ambiciosa, conservadora, 
concentrada e móvel. Tem dificuldade para levar a cabo o que inicia, 
deixando quase sempre para os outros as finalizações e, na maioria das 
vezes, deixa também os méritos. Sempre interessado (a) em tantas 
coisas que precisa ter cuidado para não se dispersar demais 
prejudicando seus empreendimentos. Com tantas habilidades que 
possui se interessa por diferentes afazeres e acaba se perdendo sem 
saber o que fazer e como utilizar seus conhecimentos; com isso fica 
nervoso (a), extravagante, irrequieto (a) e instável. É dotado (a) de 
notáveis talentos para as artes em geral e para o entretenimento. 
Embora seja amoroso (a) e se apaixone com facilidade, nos 
relacionamentos é mais amigo (a), para manter a paz, a compreensão e 
harmonia acima de tudo, a ponto de se sacrificar para isso devido a sua 
importância. Quando dominado (a) pela suspeita e impaciência pode 
tornar-se muito infeliz. Está sujeito (a) a altos e baixos devido a sua 
emotividade, porém, deve manter o astral animado e evitar a depressão. 
Por ser dispersivo (a) na juventude, a vida o (a) força a ser instável 
pelas dificuldades que enfrenta. O dia 21 garante o sucesso no fim da 
vida, mas o (a) nativo (a) deste dia deve ter sempre a certeza, nos 
momentos difíceis, de que, no fim tudo sempre acabará bem. Na 
primeira fase da sua vida dará grande importância aos prazeres e ao 
sexo; estará sempre ávido (a) de emoções e experiências diferentes. Se 
não tiver boa educação que contenha tais impulsos poderá sentir-se 
desgastado (a) e enojado (a) da vida e das pessoas. Pode sofrer 
decepções e fracassos, mas poucas vezes deixará transparecer suas 
dificuldades íntimas, conservando aparente bom humor e alegria. A 
determinação, força de vontade, equilíbrio e sucesso se fortalecem 
depois dos trinta anos de idade; seus valores se renovam e se sentirá 
renascer para nova vida, novo destino, empolgante e digno. O (a) nativo 
(a) do dia 21 é um ser de sorte. Os aprendizados adquiridos das 
experiências dos anos de privações serão seu segredo para o sucesso, 
quando, então, terá alcançado plena consciência de suas múltiplas 
habilidades e vasto conhecimento. As decepções, frustrações e 
contrariedades podem causar diversas perturbações psicossomáticas.`,

22: `Dia 22 
O (a) nativo (a) do dia 22 é um ser adaptado ao trabalho regular e 
contínuo, capacitado a grandes esforços para execução de seus 
projetos. Trabalha para o futuro, com isso, e por seu constante desejo 
de alcançar a perfeição, muitas vezes perde oportunidades imediatas. 
Por ser muito independente despreza convencionalismos e tradições, o 
que lhe acarreta algumas dificuldades na vida. Precisa equilibrar as 
emoções com o lado prático de sua natureza. Suas elevadas ambições 
vão muito além de ganhar dinheiro; pode estar sujeito ao insucesso e 
pobreza, não por falta de capacidade, mas por causa de suas outras 
ambições. A porta do mundo dos negócios está aberta para si, e tem 
capacidade para conseguir grandes resultados onde os outros nada 
conseguem. Será bem sucedido (a) ocupando postos de autoridade, 
organizando e comandando grandes grupos, sendo que será tanto mais 
eficaz quanto mais estender as fronteiras territoriais, ou até mesmo indo 
além delas, e quanto maior for o número de pessoas sob sua autoridade 
e comando. É tenso (a) e nervoso (a) e precisa muito de repouso para 
se recuperar. Por sua natureza ser tão profunda, em certos momentos, 
não se entende nem a si próprio (a), sendo necessário que cultive 
paciência e tolerância no convívio com os outros. É muito intuitivo (a) e 
deve seguir seus próprios pressentimentos. Geralmente tudo lhe 
acontece ou vem em dobro, portanto, é importante que viva 
construtivamente em harmonia. Seu poder é de grande alcance, por 
isso deve ser universalista e não pensar somente em suas realizações 
pessoais. Precisa guiar-se sempre pela razão prática, pois sua 
responsabilidade é imensa, podendo atingir âmbito internacional, como 
empresário (a), político (a), escritor (a) ou artista. A repressão de suas 
emoções, bem como as frustrações e fracassos, podem causar 
distúrbios psíquicos e nervosos, ou alteração do sistema glandular.`,

23: `Dia 23 
Quem nasceu no dia 23 deve desenvolver sua capacidade de 
compreensão para se ajustar à vida prática. É dotado (a) de poder de 
persuasão e habilidade de investigação; com paciência e tenacidade, 
consegue clarear situações emaranhadas. Raciocínio rápido e vivaz, 
talento admirável e muito versátil, pode se ocupar de várias atividades 
ao mesmo tempo. Não consegue ficar parado (a) e não se conforma em 
esperar que as coisas aconteçam, e não descansa enquanto não 
consegue o que quer; com certa tendência para a teimosia. O número 
23 governa o sucesso e o dinheiro, e o (a) nativo (a) desse dia deve 
seguir caminhos profissionais e não dos negócios. Lutará sempre até 
alcançar o topo em sua carreira profissional, pois não se conforma com 
posições subalternas. É um (a) intelectual com notável capacidade e 
facilidade de aprendizagem. Tem grande capacidade de adaptação e se 
sente à vontade nos mais diversos ambientes. Possuidor (a) de 
personalidade encantadora é capaz de tratar melhor as pessoas do 
sexo oposto. É sociável e gosta reuniões e festas. É importante se 
orgulhar de suas realizações, por isso, suas metas devem ser altas 
sempre. Sempre disposto (a) a oferecer conselhos, pode ser ótimo (a) 
assessor (a), conselheiro (a) ou professor (a). Por sua capacidade de 
persuasão, pode ser bem sucedido (a) como defensor (a), 
propagandista, ou político (a), ou, ainda, um (a) excelente médico (a) 
diagnosticador (a), psiquiatra, psicólogo (a) ou curador (a), e ainda 
conseguir fama por seus dons artísticos. A repressão de suas emoções 
pode causar distúrbios nervosos afetando a sua saúde.`,

24: `Dia 24 
O (a) nativo (a) do dia 24 possui o dom de criar harmonia e unir a todos 
no amor e na alegria, aplicando seu natural senso prático e diplomacia. 
É honesto (a), amável, bondoso (a), amante da verdade, tolerante, 
pacífico (a), altruísta e digno (a) de confiança. A maioria das pessoas se 
sente naturalmente atraídas por seu calor humano e vivacidade. 
Relaciona-se com facilidade e conquista amigos à primeira vista. Cultiva 
por longo tempo suas amizades, cativando por sua eficiência e 
prontidão em ser útil, por sua sinceridade e lealdade. Romântico (a) e 
sonhador (a) gosta de estar sempre apaixonado (a) ou deslumbrado (a) 
por algo, ou por alguém, e o amor é sua força motivadora. Se exagerar 
no seu romantismo poderá não ser feliz no amor, sentindo-se 
incompreendido (a) e solitário (a). Está sempre tentando proteger os 
fracos e se envolve tanto com o sofrimento alheio, que às vezes pode 
se deixar abater. Não faz julgamento das pessoas pelo que elas 
possuem, pelo seu nível cultural ou social, pelo lugar de onde elas vêm, 
aceitando a todos como são. O prazer é importante em sua vida, não 
suporta solidão ou vida reclusa; sente necessidade de amor, beleza e 
harmonia, e se ressente profundamente com discórdias e 
desentendimentos. Extremamente hábil pode se dedicar com sucesso 
nas tarefas rotineiras, das mais diversas e complicadas, sejam 
consertos domésticos, mecânicos ou marcenaria. Bom (a) cozinheiro 
(a), geralmente é quem toma conta da cozinha ou do churrasco, prepara 
os aperitivos, a arrumação dos pratos e ainda serve a todos. Possui, 
ainda, grande talento para a música e artes, tem voz agradável, 
personalidade atraente e é elegante no vestir e nas maneiras. É bom 
que trate, sempre que possível pessoalmente o que deseja, sem 
recorrer ao telefone ou a outros meios comunicação, pois assim, com 
sua presença marcante terá mais sucesso. É importante se dedicar à 
comunidade e desenvolver trabalhos voluntários e cívicos. Pode ser 
excelente enfermeiro (a) ou médico (a), por ser sensível, compreensivo 
(a) e paciente. As crises emocionais podem afetar não só sua saúde, 
mas também seus projetos. Para vencer necessita saber que alguém 
acredita, confia e o (a) apoia plenamente.`,

25: `Dia 25 
O (a) nativo (a) do dia 25, mais que ambições materiais tem um 
constante desejo de progredir moralmente; busca conhecimentos em 
todas as fontes ao seu alcance. Profundo (a) pensador (a) pode ser bem 
sucedido (a) em inventos e estudos científicos, ou na descoberta dos 
significados ocultos da natureza. É altamente inspirado (a) e pode ser 
bem sucedido (a) trabalhando por conta própria, ou ocupando cargos 
independentes, com plena liberdade de iniciativa. Diferentemente dos 
nascidos nos dias 7 e 16, o (a) nativo (a) do dia 25 (todos são 7; 1+6=7 
e 2+5=7) é versátil e diplomata. Dispõe de notável perspicácia, rara 
intuição e desenvolvido senso analítico. Precisa do silêncio, da 
meditação, para conectar-se com seu Eu Superior e receber 
inspirações. É perfeccionista impondo altos padrões de exigências para 
si próprio (a) e para os outros. Seu maior defeito está em subestimar 
suas próprias qualidades, motivo pelo qual sua primeira reação diante 
de qualquer proposta é sempre um "não". Deve analisar as coisas 
profundamente antes de tomar uma decisão. É imprescindível a máxima 
cautela antes de se firmar num relacionamento, casamento, ou se 
associar em algum empreendimento, pois é pessoa de difícil 
convivência devido ao seu alto grau de exigências. Nutre profundo afeto 
por seu par num relacionamento, ou casamento, mas exige 
constantemente atenção; está sempre tentando compreender e fazer 
felizes os que o (a) cercam, e tende a se sacrificar pelas pessoas 
queridas ou por um ideal. Mesmo sofrendo ingratidões, continua a se 
sacrificar pelos outros. Para evitar frustrações, desenganos e 
desilusões, deve manter o diálogo aberto sempre. Por sua extrema 
bondade, pode vir a ser usado (a) por pessoas pouco recomendáveis, 
principalmente quando envolve dinheiro; no entanto, não precisa 
comprar amor e amizade de ninguém, pois sua natureza 
essencialmente bondosa e sincera já o (a) torna atraente por si só. Deve 
evitar exageros com bebidas alcoólicas, pois sob seus efeitos é capaz 
de tudo e pode se envolver em confusões que provavelmente causem 
sérios prejuízos. Será bem mais feliz se viver perto da água - rios, lagos 
e mar. Decepções, frustrações e fracassos são enfrentados com 
admirável estoicismo, no entanto, mesmo assim pode sofrer distúrbios 
cardíacos e pulmonares, e úlceras gástricas.`,

26: `Dia 26 
O (a) nativo (a) do dia 26 é, por natureza, um (a) competente 
organizador (a) e administrador (a), com apurado senso de justiça. Pode 
ser, por algum tempo, indeciso (a) e cordato (a) demais, no entanto, tem 
discernimento do que quer e como conseguir e não desiste enquanto 
não alcançar seu objetivo. Possui o desejo instintivo de expansão e o 
gosto pelas coisas duradouras. É perseverante, equânime e justo (a). 
Dotado (a) de grande capacidade executiva, é capaz de gerir bem seu 
próprio negócio ou de outros; procura meios de fortalecer as suas 
oportunidades. Tende para o materialismo e egoísmo, luta sempre com 
metas definidas e, se percebe que seus esforços são perdidos, tem 
admirável poder de reconstituição. Não se perturba nem desanima 
diante dos obstáculos, por maiores que se apresentem, mas também 
não se joga cegamente contra eles; sabe estuda-los e arranjar o meio 
de contorna-los. Por suas qualidades executivas, pode se julgar superior 
e querer dominar os outros, tendo como resultado quase sempre 
inimizades. Embora sensível ao amor e desejoso (a) de paz, pode se 
prejudicar por se achar o (a) dono (a) da verdade; quando contrariado 
(a) demonstra mau humor e agressividade. Caso não controle tais 
impulsos, tende a ser infeliz nos relacionamentos, ou casamento, e 
também em sociedades de negócios ou outras. Aparenta ser frio (a) 
pela sua maneira de ser, porém, guarda muito calor humano e está 
sempre disposto (a) a ajudar os amigos. Geralmente se sente solitário 
(a) e incompreendido (a). Nasceu para lidar com as finanças e possui 
magnetismo que atrai dinheiro, gente e o que lhe seja necessário, 
mesmo que em idade avançada. As vibrações do dia 26 tornam o (a) 
nativo (a) muito hábil para chefiar, administrar, organizar, gerir 
empresas e negócios comerciais, artísticos, intelectuais e assuntos 
relacionados com justiça. É escrupuloso (a) em relação à família e a 
seus pertences pessoais; gosta de impressionar bem e tende para o 
exibicionismo. Frustrações podem causar distúrbios biliares, dores de 
cabeça, reumatismo e problemas na circulação sanguínea.`,

27: `Dia 27 
Este é um dia positivo; a mais feliz vibração 9 com todo seu carisma. O 
(a) nativo (a) do dia 27 é devotado (a) naquilo que acredita; é genial e 
generoso (a). Conhece e tem poderes para o bem e para o mal e, 
normalmente, já se definiu pelo caminho que deve seguir. Possui senso 
de resoluções rápidas e deve fortalecer o seu poder de decisão. É muito 
competente em tudo o que se propõe fazer, e o faz com rapidez visando 
se livrar logo. Consegue resultados facilmente até naquilo que aos 
outros parece muito difícil. Sabe focalizar corretamente as suas forças e 
dirige os seus impulsos para metas definidas, imprimindo em todos os 
seus atos grande atividade e energia. É fraco (a) na concentração e na 
persistência e, porque suas ambições lhe parecem fáceis demais, tende 
à protelar seus atos. Intelectual, respeitado (a) e admirado (a) por todos, 
psicólogo (a) por natureza, faz uso de seu conhecimento da natureza 
humana para realizar seu sonho de paz e harmonia entre as pessoas. 
Pensa com grandeza e não se deixa dominar por preconceitos e 
mesquinharias; sente necessidade de se sentir livre no pensar e agir. 
Liberal, audacioso (a), combativo (a), corajoso (a), independente e 
amante da liberdade, detesta dar satisfações de suas condutas. 
Trabalha melhor sozinho (a) e ninguém consegue obriga-lo (a) a fazer 
uma coisa que não queira. Tranquilamente determinado (a) (a), versátil 
e poderoso (a), raramente se preocupa com falta de dinheiro, porque 
geralmente tem facilidade para ganhar. Sua mente é universalista e tem 
elevado senso de fraternidade. Mesmo sabendo ser superior não impõe 
suas ideias e modo de vida, nem tenta ser compreendido (a); é 
admiravelmente compreensivo (a), afetuoso (a) e emotivo (a), de certa 
maneira extravagante e nervoso (a). O amor e a afeição significam 
muito para o (a) nativo (a) do dia 27, a ponto de ser capaz de grandes 
sacrifícios pelos que ama. Não é beligerante e jamais procura 
problemas, mas pode tornar-se impulsivo (a) e violento (a), de uma 
agressividade sem controle e destrutiva, quando atingido (a) por 
injustiça, ingratidão ou traições mesquinhas. Frustrações não 
elaboradas e resolvidas podem causar distúrbios cardíacos e cerebrais.`,

28: `Dia 28 
O (a) nativo (a) do dia 28 possui um forte desígnio de "Querer", com 
tendência para timidez, desconfiança, tristeza e a ser queixoso (a), o 
que muitas vezes o (a) deixa infeliz e até doentio (a). Livre dessa faceta 
negativa de seu ego, poderá se impor a todos pelo seu admirável senso 
diplomático e de justiça. Será mais bem sucedido (a) se empreender 
atividades independentes ou exercer cargos de chefia, pois tem 
dificuldade para aceitar mando de terceiros. Afetuoso (a) e de elevados 
ideais, é independente e tem muita força de vontade e se dispõe a 
grandes sacrifícios para atingir suas metas. Ama a liberdade e sofre 
com as limitações que o (a) impedem e atrapalham. É capaz de se 
dedicar a várias atividades ao mesmo tempo e dispõe, para isso, de 
grande vitalidade e energia. Frequentemente perde o interesse pelo que 
faz quase sempre no momento em que está por alcançar o sucesso, 
deixando escapar preciosas oportunidades de conquistar fama, fortuna 
e felicidade. Existe predisposição para sofrer prejuízos financeiros, por 
isso, deve redobrar sua atenção em seus investimentos. Ainda mais que 
o (a) nativo (a) do dia 28 pende para ser um (a) sonhador (a), que pode 
cair na preguiça se não dominar sua tendência para devaneios. É forte 
no desejo e na capacidade para liderança, no entanto, falta espírito 
competitivo e força de vontade para lutar pelo que ambiciona; 
acomoda-se passivamente na espera que os outros reconheçam seus 
méritos e lhe façam justiça. Para superar tais pontos negativos é 
importante que desenvolva o otimismo, autoconfiança e perseverança 
nos propósitos. Estudar a natureza humana e compreende-la, combater 
o egoísmo e a autocomiseração são suas armas para lutar pelo 
sucesso. Decepções, desenganos e frustrações podem causar 
perturbações no sistema circulatório, cérebro e coração.`,

29: `Dia 29 
O dia 29 imprime força ao seu nativo; se souber se orientar 
adequadamente terá grande prosperidade. Mas pode ser um (a) 
extremista, ora estando eufórico (a), ora deprimido (a). Expressa seus 
afetos em campos específicos do sentir e da espiritualidade. Seu meio 
de realização é a imaginação, com brandura de modos e espírito de 
conciliação. Moralmente e intelectualmente elevado (a), fará uso da fé, 
do idealismo e conhecimento inspirado para atingir suas metas. Pode 
trabalhar associado (a), porém, quando alcança níveis mais elevados de 
consciência, de cultura, intelecto e prática convém trabalhar de forma 
independente, seguindo sua força interior como guia. Pode ajustar seu 
caminho e ajudar os outros a ajustarem os seus também. Muitas vezes 
é absorvido (a) por sonhos, ideais e preocupações e deixa de 
considerar os que estão junto de si. Se tiver um interesse definido 
consegue se manter com ânimo calmo e bem equilibrado. Pode 
interessar-se por religião, correndo risco de se tornar fanático e induzir 
outros incidirem no mesmo exagero, pois é inspirador (a) e convincente. 
Prefere muitos amigos casuais e poucos íntimos, porém, com seus 
raros amigos verdadeiros é leal e sincero (a). O êxito só vem 
acompanhado de harmonia em tudo e com todos. Precisa do ambiente 
do lar, no entanto, nem sempre é fácil a convivência por sua tendência a 
mudanças repentinas de humor, que vai de um extremo a outro. Sua 
grande dificuldade está em se situar no meio termo. Pode sofrer 
decepções amorosas; quando encontrar a pessoa certa é bom que se 
case cedo. O número 29 é do casamento e do divórcio, por isso, o (a) 
nativo (a) desse dia precisa aprender a controlar suas emoções e evitar 
atitudes apaixonadas e destrutivas, pois uma união desfeita pode gerar 
imenso sofrimento e dificuldade para se ajustar a uma outra. Bondoso 
(a), compreensivo (a), de visão ampla, porém dogmático (a), mas sabe 
ceder a argumentos justos e lógicos. Apesar de ser pacifista, diplomata 
e conciliador (a), pode se tornar agressivo (a) e violento (a) quando 
desprende muita energia e o máximo de seu esforço e não alcança o 
resultado adequado, segundo seu ponto de vista. Frustrações, derrotas 
e desenganos podem causar perturbações no estomago e demais 
órgãos do aparelho digestório, ou mesmo, moléstias de difícil 
diagnostico e que se curam de forma inesperada. `,

30: `Dia 30 
O (a) nascido (a) no dia 30 tem necessidade de desenvolver suas 
capacidades de expressão e manifestação. Para conseguir, usa de 
imaginação, liberalidade e o convívio em comunhão com os que o (a) 
cercam. O seu grande inimigo é o medo de críticas, e também sua 
sensibilidade à própria autocensura. Tendência para se anular e para a 
autodesvalorização. Para superar tais deficiências precisa se 
conscientizar de seu grande valor e de sua habilidade em superar 
dificuldades e, principalmente, se impor antes a si próprio (a) para 
depois conquistar respeito e admiração dos outros. Quando está 
decidido (a) realmente a uma conquista ninguém consegue detê-lo (a). 
É muito ambicioso (a) e luta por altas posições; quando toma uma 
resolução trabalha sem descanso. Sua força de vontade e determinação 
alavancam o seu sucesso. É bondoso (a), apegado (a) à família, digno 
(a) de confiança e faz amigos com facilidade. Intuitivo (a) e original será 
mais bem sucedido (a) trabalhando como um profissional e exercendo 
sua própria iniciativa. Sabe aproveitar todas as oportunidades para se 
expressar e se aperfeiçoar. Sua características marcantes são: 
independência, perfeição e realização, por isso não suporta posição 
subalterna. É justo (a) e honesto (a) em pensamentos e atos, liberal, 
prestativo (a) e religioso (a). Normalmente não tolera negócios escusos, 
não se aborrece com facilmente e não se entrega a preocupações 
desnecessárias. Porém, se for pouco desenvolvido (a) moralmente 
tende para a adulação, simulando docilidade e sinceridade, usando de 
hipocrisia e falsidade para alcançar seus objetivos. Normalmente não 
deixa transparecer seus problemas íntimos para estranhos, externando 
sempre alegria e descontração, mesmo sob a mais grave depressão. No 
entanto, na intimidade revela-se vulnerável, indeciso (a) e atemorizado 
(a), sentindo-se alvo de situações constrangedoras, mesmo que ele (a) 
próprio (a) as tenha provocado. Geralmente é tolerante e compreensivo 
(a), porém, quando revoltado (a) é questionador (a), às vezes até cruel. 
Com firmeza em suas opiniões acredita estar sempre certo (a). 
Natureza altiva, qualidades comerciais, aptidão para comando e para 
ocupações que exijam sociabilidade e diplomacia. A repressão de suas 
emoções, os desenganos e frustrações podem causar distúrbios no 
sistema nervoso e doenças psicossomáticas. `,

31: `Dia 31 
O (a) nativo (a) do dia 31 dá mais valor á sua obra que à sua própria 
pessoa. Dotado (a) de grande habilidade e capacidade, tem na ordem, 
na autoridade e na segurança econômica os instrumentos para o 
perfeito desempenho do que se propõe fazer. Trabalha melhor em 
cooperação com outras pessoas do que só. Intimamente vive rebelado 
(a) contra regras e regulamentos. É um (a) lutador (a) pelas causas 
justas, mesmo que sejam completamente alheias. Para vencer e 
conseguir estabilidade e segurança, normalmente enfrenta mais 
obstáculos que a maioria das pessoas, por causa de sua boa fé, 
lealdade e confiança em quem não merece. O seu mundo é de difícil 
acesso e os outros têm dificuldade para compreender suas ideias e 
ações. Geralmente é solitário (a), embora goste de sentir que os outros 
estão próximos; a solidão absoluta, no entanto, o (a) deprime e se torna 
amargo (a) e pessimista. É bondoso (a) e a lealdade é muito importante, 
do mesmo modo que é muito leal com seus amigos. Tem a mesma 
facilidade para atrair amigos quanto inimigos; parece sempre atrair 
alguém que trabalhe contra seus planos ou contra ele, movido por inveja 
e despeito pela sua eficiência, capacidade e talento. Se adapta com 
facilidade a trabalhos regulares e contínuos, e é capaz de grandes 
esforços para execução de seus projetos. Possui caráter independente, 
persistência nos propósitos e capacidade para executar tarefas 
dificílimas, as quais outros não se submeteriam. É um (a) prático (a) 
construtor (a) e muito eficiente nos negócios. Suas características 
marcantes são: trabalhar duro, ser honesto (a), leal, determinado (a) e 
econômico (a). Nunca esquece uma bondade ou uma injuria. Adora 
crianças e anseia por um lar e uma família; casando cedo se estabiliza 
mais rapidamente, pois a responsabilidade o (a) fortalece. Gosta de 
viajar. Tende para a teimosia e para a insistência em seus pontos de 
vista. Coloca padrões muito altos para a sua vida e se desaponta 
profundamente consigo mesmo se não consegue corresponder à sua 
própria expectativa.`, 


}