import { tabelaNumeros } from './TabelaNumerologia';

export const calcularTendenciasOcultas = (nome) => {
    if (!nome) return 'Nenhuma';

    const contagemNumeros = {};

    // Converte o nome para maiúsculas e remove espaços
    const nomeFormatado = nome.toUpperCase().replace(/\s/g, '');

    // Conta quantas vezes cada número aparece no nome
    nomeFormatado.split('').forEach((letra) => {
        const numero = tabelaNumeros[letra] || 0;
        if (numero >= 1 && numero <= 9) {
            contagemNumeros[numero] = (contagemNumeros[numero] || 0) + 1;
        }
    });

    // Filtra os números que aparecem 3 vezes ou mais
    const tendenciasOcultas = Object.entries(contagemNumeros)
        .filter(([_, count]) => count >= 3)
        .map(([numero]) => numero);

    return tendenciasOcultas.length ? tendenciasOcultas.join(', ') : 'Nenhuma';
};
