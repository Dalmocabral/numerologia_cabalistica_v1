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