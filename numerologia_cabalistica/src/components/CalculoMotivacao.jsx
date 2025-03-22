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

// Função para verificar se uma letra é vogal (considerando acentos)
const isVogal = (letra) => {
    const letraBase = letra.normalize('NFD').replace(/[\u0300-\u036f]/g, ''); // Remove acentos
    return ['A', 'E', 'I', 'O', 'U'].includes(letraBase);
};

// Função para calcular a Motivação
export const calcularMotivacao = (nome) => {
    if (!nome) return '';

    // Converte o nome para maiúsculas e remove espaços
    const nomeFormatado = nome.toUpperCase().replace(/\s/g, '');

    // Filtra apenas as vogais (considerando acentos)
    const vogais = nomeFormatado.split('').filter((letra) => isVogal(letra));

    // Calcula a soma dos valores das vogais (considerando acentos)
    const somaVogais = vogais.reduce((total, letra) => total + calcularValorComAcento(letra), 0);

    // Função para reduzir o número, mantendo 11 e 22
    const reduzirNumero = (numero) => {
        if (numero === 11 || numero === 22) {
            return numero; // Mantém números mestres
        }
        while (numero >= 10) {
            numero = numero.toString().split('').reduce((sum, digit) => sum + parseInt(digit, 10), 0);
            if (numero === 11 || numero === 22) return numero; // Verifica novamente após redução
        }
        return numero;
    };

    return reduzirNumero(somaVogais);
};
