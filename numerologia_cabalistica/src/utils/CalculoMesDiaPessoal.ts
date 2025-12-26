import { calcularAnoPessoal } from './CalculoAnoPessoal';

// Função auxiliar para reduzir (privada neste arquivo)
const reduzirNumero = (numero) => {
    while (numero >= 10 && numero !== 11 && numero !== 22) {
        numero = numero.toString().split('').reduce((sum, digit) => sum + parseInt(digit, 10), 0);
    }
    return numero;
};

// ==========================================
// 1. CÁLCULO DO MÊS PESSOAL (Com Automático)
// ==========================================
export const calcularMesPessoal = (dataNascimento, mesInteresse) => {
    if (!dataNascimento) return '—';

    // Lógica Automática: Se não informou mês, pega o mês ATUAL
    let mesCalc = mesInteresse;
    if (!mesCalc) {
        const hoje = new Date();
        mesCalc = hoje.getMonth() + 1; // Janeiro é 0, então somamos 1
    }

    const anoPessoal = calcularAnoPessoal(dataNascimento);
    
    // Soma: Ano Pessoal + Mês
    const soma = anoPessoal + parseInt(mesCalc, 10);

    return reduzirNumero(soma);
};

// ==========================================
// 2. CÁLCULO DO DIA PESSOAL (Com Automático)
// ==========================================
export const calcularDiaPessoal = (dataNascimento, mesInteresse, diaInteresse) => {
    if (!dataNascimento) return '—';

    const hoje = new Date();

    // Lógica Automática: 
    // Se não tem mês, usa o atual.
    // Se não tem dia, usa o atual.
    const mesCalc = mesInteresse ? parseInt(mesInteresse, 10) : (hoje.getMonth() + 1);
    const diaCalc = diaInteresse ? parseInt(diaInteresse, 10) : hoje.getDate();

    // Calcula o mês pessoal baseado no mês definido acima
    // (Reutiliza a lógica interna, mas chamamos o calculo direto para garantir)
    const anoPessoal = calcularAnoPessoal(dataNascimento);
    const mesPessoalVal = reduzirNumero(anoPessoal + mesCalc);

    // Soma: Mês Pessoal + Dia
    const soma = mesPessoalVal + diaCalc;

    return reduzirNumero(soma);
};

// ==========================================
// 3. MESES RESTANTES (Já estava correto, mantive a lógica)
// ==========================================
export const calcularMesesPessoaisRestantes = (dataNascimento, mesInicio) => {
    if (!dataNascimento) return [];

    let partes = dataNascimento.includes("/")
        ? dataNascimento.split("/")
        : dataNascimento.split("-").reverse();

    const mesAniversario = Number(partes[1]);

    if (isNaN(mesAniversario) || mesAniversario < 1 || mesAniversario > 12) {
        return [];
    }

    const hoje = new Date();
    const anoAtual = hoje.getFullYear();

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
    let contador = 0;

    while (contador < 24) {
        const soma = anoPessoal + m;
        const mesPessoal = reduzirNumero(soma);

        resultados.push({
            nomeMes: meses[m - 1],
            numeroMes: m,
            ano: anoLoop,
            valor: mesPessoal
        });

        if (m === mesAniversario && anoLoop !== anoAtual) break;

        m++;
        if (m > 12) {
            m = 1;
            anoLoop++;
        }
        contador++;
    }

    return resultados;
};