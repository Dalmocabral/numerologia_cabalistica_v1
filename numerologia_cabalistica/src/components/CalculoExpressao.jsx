import { tabelaNumeros, tabelaAcentos } from './TabelaNumerologia';

// Função para calcular o valor da letra considerando acentos
const calcularValorComAcento = (letra) => {
    if (!letra.trim()) return 0; // Ignora espaços em branco

    // Captura os acentos da letra
    const acentos = letra.normalize('NFD').match(/[\u0300-\u036f]/g);

    // Obtém a letra base sem acento
    const letraBase = letra.normalize('NFD').replace(/[\u0300-\u036f]/g, '');

    // Obtém o valor da letra base
    let valorBase = tabelaNumeros[letraBase] || 0;

    // Se houver acentos, soma os valores dos acentos
    if (acentos) {
        acentos.forEach(acento => {
            if (tabelaAcentos[acento]) {
                valorBase += tabelaAcentos[acento]; // Soma o valor do acento corretamente
            }
        });
    }

    return valorBase;
};

export const calcularExpressao = (nome) => {
    if (!nome) return '';

    // Converte o nome para maiúsculas e remove espaços
    const nomeFormatado = nome.toUpperCase().replace(/\s/g, '');

    // Calcula a soma total das letras (considerando acentos)
    const somaTotal = nomeFormatado
        .split('')
        .reduce((total, letra) => total + calcularValorComAcento(letra), 0);

    // Função para reduzir o número, mantendo 11 e 22
    const reduzirNumero = (numero) => {
        if (numero === 11 || numero === 22) {
            return numero; // Mantém números mestres
        }
        while (numero >= 10) {
            numero = numero.toString().split('').reduce((sum, digit) => sum + parseInt(digit, 10), 0);
        }
        return numero;
    };

    return reduzirNumero(somaTotal);
};
