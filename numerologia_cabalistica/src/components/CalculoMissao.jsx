// src/components/CalculoExpressao.jsx

import { tabelaNumeros, tabelaAcentos } from './TabelaNumerologia';

// ---------------------------------------------
// NORMALIZAÇÃO DO NOME
// ---------------------------------------------
const normalizarNome = (nome) => {
    return nome
        .normalize('NFC')
        .replace(/’/g, "'")
        .toUpperCase();
};

// ---------------------------------------------
// VALOR DE LETRA + ACENTOS
// ---------------------------------------------
export const calcularValorComAcento = (letra) => {
    if (!letra.trim()) return 0;

    // Apóstrofo isolado
    if (letra === "'") {
        return tabelaAcentos["'"] || 0;
    }

    const acentos = letra.normalize('NFD').match(/[\u0300-\u036f]/g);
    const letraBase = letra.normalize('NFD').replace(/[\u0300-\u036f]/g, '');

    let valorBase = tabelaNumeros[letraBase] || 0;

    if (acentos) {
        acentos.forEach(acento => {
            if (tabelaAcentos[acento]) {
                valorBase += tabelaAcentos[acento];
            }
        });
    }

    return valorBase;
};

// ---------------------------------------------
// EXPRESSÃO = soma total reduzida
// ---------------------------------------------
export const calcularExpressao = (nome) => {
    if (!nome) return '';

    const nomeNormalizado = normalizarNome(nome);

    const letrasValidas = nomeNormalizado.split('').filter(c =>
        /[A-ZÇÁÉÍÓÚÀÈÌÒÙÂÊÎÔÛÃÕÄËÏÖÜ']/.test(c)
    );

    const somaTotal = letrasValidas.reduce((acc, letra) =>
        acc + calcularValorComAcento(letra), 0
    );

    const reduzir = (n) => {
        while (n >= 10 && n !== 11 && n !== 22) {
            n = n.toString().split('').reduce((s, d) => s + Number(d), 0);
        }
        return n;
    };

    return reduzir(somaTotal);
};

// ---------------------------------------------
// MISSÃO = Destino + Expressão (reduzido)
// ---------------------------------------------
export const calcularMissao = (destino, expressao) => {
    if (!destino || !expressao) return '';

    let soma = destino + expressao;

    // Redução mantendo 11 e 22
    while (soma >= 10 && soma !== 11 && soma !== 22) {
        soma = soma.toString().split('').reduce((s, d) => s + Number(d), 0);
    }

    return soma;
};
