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
