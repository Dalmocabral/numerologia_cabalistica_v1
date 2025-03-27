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

