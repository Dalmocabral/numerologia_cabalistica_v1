//src/components/CalculoLicoesCarmicas

import { tabelaNumeros } from './TabelaNumerologia';

export const calcularLicoesCarmicas = (nome) => {
    if (!nome) return 'Nenhuma';

    const numerosNoNome = new Set();

    // Converte o nome para maiúsculas e remove espaços
    const nomeFormatado = nome.toUpperCase().replace(/\s/g, '');

    // Mapeia cada letra para seu número correspondente e adiciona ao Set
    nomeFormatado.split('').forEach((letra) => {
        const numero = tabelaNumeros[letra] || 0;
        if (numero >= 1 && numero <= 9) {
            numerosNoNome.add(numero);
        }
    });

    // Lista completa de números de 1 a 9
    const todosNumeros = new Set([1, 2, 3, 4, 5, 6, 7, 8, 9]);

    // Diferença entre os números possíveis e os presentes no nome
    const licoesCarmicas = [...todosNumeros].filter(num => !numerosNoNome.has(num));

    return licoesCarmicas.length ? licoesCarmicas.join(', ') : 'Nenhuma';
};
