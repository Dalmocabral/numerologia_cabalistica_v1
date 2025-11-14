import { calcularAnoPessoal } from './CalculoAnoPessoal';

// Função para calcular o Mês Pessoal
export const calcularMesPessoal = (dataNascimento, mesInteresse) => {
    if (!dataNascimento || !mesInteresse) return '—'; // Retorna um traço caso não tenha valores

    const anoPessoal = calcularAnoPessoal(dataNascimento);
    const soma = anoPessoal + parseInt(mesInteresse, 10);

    return reduzirNumero(soma);
};

// Função para calcular o Dia Pessoal
export const calcularDiaPessoal = (dataNascimento, mesInteresse, diaInteresse) => {
    if (!dataNascimento || !mesInteresse || !diaInteresse) return '—';

    const mesPessoal = calcularMesPessoal(dataNascimento, mesInteresse);
    const soma = mesPessoal + [...`${diaInteresse}`].map(Number).reduce((acc, num) => acc + num, 0);

    return reduzirNumero(soma);
};

// Função para reduzir números (exceto 11 e 22, que são reduzidos diretamente)
const reduzirNumero = (numero) => {
    while (numero >= 10) {
        numero = numero.toString().split('').reduce((sum, digit) => sum + parseInt(digit, 10), 0);
    }
    return numero;
};


// Função para calcular os Meses Pessoais Restantes até o próximo aniversário
export const calcularMesesPessoaisRestantes = (dataNascimento, mesInicio) => {
    if (!dataNascimento) return [];

    // Garantir leitura correta da data (aceita "DD/MM/YYYY" ou "YYYY-MM-DD")
    let partes = dataNascimento.includes("/")
        ? dataNascimento.split("/")
        : dataNascimento.split("-").reverse();

    const mesAniversario = Number(partes[1]);

    if (isNaN(mesAniversario) || mesAniversario < 1 || mesAniversario > 12) {
        console.error("Erro: mês de aniversário inválido.");
        return [];
    }

    const hoje = new Date();
    const anoAtual = hoje.getFullYear();

    // Mês inicial — se vier 0, arrumamos para 1 (evita loop infinito)
    let mesInicial = mesInicio ? Number(mesInicio) : hoje.getMonth() + 1;
    if (mesInicial < 1 || mesInicial > 12) mesInicial = hoje.getMonth() + 1;

    const anoPessoal = Number(calcularAnoPessoal(dataNascimento));

    const meses = [
        "Janeiro","Fevereiro","Março","Abril","Maio","Junho",
        "Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"
    ];

    const resultados = [];

    let m = mesInicial;
    let anoLoop = anoAtual;

    const limiteMaxIteracoes = 24; // segurança arredia – evita crash
    let contador = 0;

    while (contador < limiteMaxIteracoes) {

        const soma = anoPessoal + m;
        const mesPessoal = reduzirNumero(soma);

        resultados.push({
            nomeMes: meses[m - 1],
            numeroMes: m,
            ano: anoLoop,
            valor: mesPessoal
        });

        // Condição de parada segura
        if (m === mesAniversario && anoLoop !== anoAtual) {
            break;
        }

        // Avança mês
        m++;
        if (m > 12) {
            m = 1;
            anoLoop++;
        }

        contador++;
    }

    return resultados;
};
